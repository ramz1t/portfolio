import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'



const Landing = ({ ref }) => {

    useEffect(() => {

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xFFFFFF)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 10, 20)
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg')
        })
        renderer.setSize(window.innerWidth, window.innerHeight)

        let pointLight = new THREE.PointLight(0xffffff)
        scene.add(pointLight);
        let lightHelper = new THREE.PointLightHelper(pointLight)
        // scene.add(lightHelper)
        pointLight.position.set(0, 10, 10)
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(ambientLight)

        let safe
        const loader = new GLTFLoader()
        loader.load('./models/safe.gltf', (gltf) => {
            safe = gltf.scene
            safe.position.set(0, 0, -5)
            // scene.add(safe)
            safe.scale.set(4, 4, 4)
            safe.rotation.y = 300
        })



        const animate = () => {
            if (safe && safe.rotation) {
                safe.rotation.y += 0.001
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate()
    }, [])

    return (
        <>
            <section ref={ref} className='h-screen w-full bg-primary-100'>
                <div className="container p-2 mx-auto h-full lg:grid grid-cols-2 place-items-center">
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-5xl text-primary-900 leading-tight'>Hi, my name is Timur<br />And I'm a software developer</h1>
                        <h2 className='text-xl text-primary-800'>I like making products, that are useful for people</h2>
                        <button className='w-fit text-primary-700 rounded-lg border-primary-700 border-2 p-3 
                        hover:border-primary-800 hover:text-primary-800 hover:scale-105 hover:shadow-sm transition-all'>
                            Contact me
                        </button>
                    </div>
                    <div className="h-screen">
                        <img src="./images/me.png" alt="timur ramazanov" className='h-100 w-auto' />
                    </div>

                </div>
            </section>
            <canvas className='absolute left-0 top-0 -z-10' id="bg"></canvas>
        </>
    )
}


export default Landing