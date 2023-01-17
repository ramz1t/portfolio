import React from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Home = () => {

    useEffect(() => {

        const scene = new THREE.Scene()
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
        pointLight.position.set(-5, 5, 10)
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(ambientLight)

        let safe
        const loader = new GLTFLoader()
        loader.load('./models/safe.gltf', (gltf) => {
            safe = gltf.scene
            safe.position.set(0, 0, -5)
            scene.add(safe)
            safe.scale.set(2, 2, 2)
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
            <div className='container mx-auto'>
                <h1>Home</h1>
            </div>
            <canvas className='absolute left-0 top-0 -z-10' id="bg"></canvas>
        </>

    )
}

export default Home