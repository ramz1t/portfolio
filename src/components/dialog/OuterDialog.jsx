import React, { memo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { InnerDialog } from './InnerDialog'

const OuterDialog = ({ data, slug, isOpen, close, className }) => {
    useEffect(() => {
        if (isOpen) {
            const t = window.scrollY
            const l = window.scrollX
            const disableScroll = () => window.scrollTo(l, t)
            window.addEventListener('scroll', disableScroll)
            return () => window.removeEventListener('scroll', disableScroll)
        }
        return () => (window.onscroll = () => {})
    }, [isOpen])

    useEffect(() => {
        const handler = (e) => e.key === 'Escape' && close()
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [close])

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed z-[9999] inset-0 bg-slate-500/25 backdrop-blur-sm flex items-center justify-center"
                >
                    <InnerDialog
                        data={data}
                        close={close}
                        className={className}
                    />
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default memo(OuterDialog)
