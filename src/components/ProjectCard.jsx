import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ProjectCard = ({ id, name, model, year, gitUrl, publicUrl, stack, desc }) => {

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
        <div className='border-2 border-primary-900 rounded-2xl p-7 w-60 flex flex-col gap-4 justify-between'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl'>{name}</h2>
                <h3 className='text-slate-500'>{year}</h3>
                <div className='grid gap-3 grid-cols-4'>
                    {
                        stack.map((icon, key) =>
                            <div key={key} className='rounded-full border-2 border-primary-900 w-8 h-8 flex items-center justify-center'>
                                {icon}
                            </div>
                        )
                    }
                </div>
                <p>{desc}</p>
            </div>
            <div className="flex justify-between items-center">
                <a className='bg-primary-900 text-slate-50 py-2 px-5 rounded-full hover:scale-105 transition-all h-10' href={publicUrl} target='_blank'>Live demo</a>
                <a className='border-2 rounded-full hover:scale-105 transition-all h-10 flex items-center justify-center w-10 border-primary-900' href={gitUrl} target='_blank'>{<TbBrandGithub />}</a>
            </div>
        </div>
    )
}

export default ProjectCard