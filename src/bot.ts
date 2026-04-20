const BOT_API_KEY = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!
const PORT = Number(process.env.PORT ?? 3001)
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '*'

Bun.serve({
    port: PORT,
    async fetch(req) {
        const origin = req.headers.get('origin') ?? ''

        const cors = {
            'Access-Control-Allow-Origin': ALLOWED_ORIGIN === '*' ? '*' : origin,
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }

        if (req.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: cors })
        }

        const url = new URL(req.url)
        if (req.method === 'POST' && url.pathname === '/send') {
            let body: Record<string, string>
            try {
                body = await req.json()
            } catch {
                return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...cors },
                })
            }

            const { name, subject, message, meta } = body
            if (!name || !subject || !message) {
                return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                    status: 422,
                    headers: { 'Content-Type': 'application/json', ...cors },
                })
            }

            const ip =
                req.headers.get('cf-connecting-ip') ??
                req.headers.get('x-real-ip') ??
                req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
                'unknown'

            const metaLines = Object.entries(meta)
                .map(([k, v]) => `<b>${k}:</b> ${v}`)
                .join('\n')

            const separator = '─'.repeat(10)
            const text =
                `<b>New message</b>\n\n<b>Name:</b> ${name}\n<b>Subject:</b> ${subject}\n<b>Message:</b> ${message}` +
                `\n\n${separator}\n` +
                `<b>IP:</b> ${ip}\n` +
                `${metaLines}`

            const tgRes = await fetch(
                `https://api.telegram.org/bot${BOT_API_KEY}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text,
                        parse_mode: 'HTML',
                    }),
                }
            )

            if (!tgRes.ok) {
                const err = await tgRes.text()
                console.error('Telegram error:', err)
                return new Response(JSON.stringify({ error: 'Telegram delivery failed' }), {
                    status: 502,
                    headers: { 'Content-Type': 'application/json', ...cors },
                })
            }

            return new Response(JSON.stringify({ ok: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...cors },
            })
        }

        return new Response(JSON.stringify({ error: 'Not found', url: url.pathname }), {
            status: 404,
            headers: { 'Content-Type': 'application/json', ...cors },
        })
    },
})

console.log(`Telegram relay listening on port ${PORT}`)
