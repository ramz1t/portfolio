import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ProjectCard = ({
    id,
    name,
    model,
    year,
    gitUrl,
    publicUrl,
    stack,
    desc,
    image,
}) => {
    // useEffect(() => {

    //     const scene = new THREE.Scene()
    //     scene.background = new THREE.Color(0xFFFFFF)
    //     const camera = new THREE.PerspectiveCamera(75, 180 / 176, 0.1, 1000)
    //     camera.position.set(0, 1, 0)
    //     const renderer = new THREE.WebGLRenderer({
    //         canvas: document.querySelector(`#bg-${id}`)
    //     })
    //     renderer.setSize(180, 176)
    //     const geo = new THREE.BoxGeometry(1, 1, 1)
    //     const material = new THREE.MeshBasicMaterial({ color: 0x111111 })
    //     const cube = new THREE.Mesh(geo, material)
    //     scene.add(cube)

    //     let pointLight = new THREE.PointLight(0xffffff)
    //     scene.add(pointLight);
    //     let lightHelper = new THREE.PointLightHelper(pointLight)
    //     // scene.add(lightHelper)
    //     pointLight.position.set(0, 10, 10)
    //     const ambientLight = new THREE.AmbientLight(0xffffff)
    //     scene.add(ambientLight)

    //     // let safe
    //     // const loader = new GLTFLoader()
    //     // loader.load(`./models/${model}`, (gltf) => {
    //     //     safe = gltf.scene
    //     //     safe.position.set(0, 0, 0)
    //     //     // scene.add(safe)
    //     //     safe.scale.set(4, 4, 4)
    //     //     safe.rotation.y = 300
    //     // })

    //     const animate = () => {
    //         // if (safe && safe.rotation) {
    //         //     safe.rotation.y += 0.001
    //         // }
    //         requestAnimationFrame(animate);
    //         renderer.render(scene, camera);
    //     }

    //     animate()
    // }, [])

    return (
        <li className="grid md:grid-cols-[2fr_1fr] gap-7 h-fit border-2 border-primary-900 rounded-2xl p-7 items-center">
            <a
                href={publicUrl}
                target="_blank"
                className="rounded-xl border hover:scale-[1.01] transition-all overflow-hidden h-fit"
            >
                <img src={image} className="" />
            </a>
            <div className="flex flex-col gap-2 justify-between h-full max-h-fit">
                <h3 className="text-2xl">{name}</h3>
                <time className="text-slate-500">{year}</time>
                <ul className="flex md:grid gap-4 xl:gap-3 md:flex-3 md:grid-cols-4">
                    {stack.map((icon, key) => (
                        <li
                            key={key}
                            className="rounded-full border-2 border-primary-900 w-8 h-8 flex items-center justify-center"
                        >
                            {icon}
                        </li>
                    ))}
                </ul>
                <p className="grow pt-2">{desc}</p>
                <div className="flex justify-between items-center">
                    {publicUrl && (
                        <a
                            className="bg-primary-900 text-slate-50 py-2 px-4 rounded-full hover:scale-105 transition-all h-10"
                            href={publicUrl}
                            target="_blank"
                        >
                            Live demo
                        </a>
                    )}
                    {gitUrl && (
                        <a
                            className="border-2 rounded-full hover:scale-105 transition-all h-10 min-w-[40px] px-4 flex items-center justify-center border-primary-900 gap-3 max-md:py-2 max-md:px-4"
                            href={gitUrl}
                            target="_blank"
                        >
                            {<TbBrandGithub />}
                            <p className={publicUrl && 'md:hidden'}>GitHub</p>
                        </a>
                    )}
                </div>
            </div>
        </li>
    )
}

export default ProjectCard
