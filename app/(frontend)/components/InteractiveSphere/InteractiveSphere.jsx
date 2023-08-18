/* eslint-disable  */
'use client'



import { Suspense, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { ScrollControls, Sky, OrbitControls, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import CameraControls from 'camera-controls'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import styles from './InteractiveSphere.module.scss'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref?.current.update())
  return <OrbitControls enableZoom={false} ref={ref} args={[camera, gl.domElement]} />
}



function Sphere() {

  const sphereWrapRef = useRef(null)
  const [globePosition, setGlobePosition] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      // if (sphereWrapRef.current) {
      //   const currentScrollY = window.scrollY
      //   sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 900), 0)}`
      // }
      if (window.innerWidth < 800) {
        setGlobePosition([3, 0, 0])
      } else {
        setGlobePosition([20, 0, 0])
      }
    }
    //window.addEventListener('scroll', onScroll)
  //  window.addEventListener('resize', onScroll);
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <Canvas camera={{ position: [5, 0, 5] }}>
      <ambientLight intensity={2.5} />
      {/* <directionalLight position={[-2, 5, 2]} /> */}
      <Controls />
      <Model position={[2, 0, 12]} />
    </Canvas>
  )
}


// function HelixSphere({ ...props }) {

//   const sphereWrapRef = useRef<HTMLDivElement | null>(null)


//   const [currentScrollY, setCurrentScrollY] = useState(0)

//   useEffect(() => {
//     const onScroll = () => {
//       if (sphereWrapRef.current) {
//         setCurrentScrollY(window.scrollY)
//       }
//       // plays animation when page is scrolled.
//       //actions['firstAction'].play().paused = false
//     }
//     window.addEventListener('scroll', onScroll)
//     onScroll();

//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-nocheck

//   // This hook gives you offets, ranges and other useful things
//   const scroll = useScroll()
//   const { scene, animations } = useGLTF('/w11.glb')

//   // Center the rotation on the model's origin
//   scene.rotation.set(Math.PI / 20, 0, 0)
//   scene.position.set(20, 0, 0)



//   const { actions } = useAnimations(animations, scene)
//   //useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
//   // useEffect(() => void (actions['firstAction'].play().paused = true), [actions])
//   // useFrame((state, delta) => { 
//   //   // const action = actions['Take 001']
//   //   // The offset is between 0 and 1, you can apply it to your models any way you like
//   //   const offset = 1 - currentScrollY / 900;
//   //  // console.log(offset)
//   //   // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
//   //   state.camera.position.set(10 / offset, 1 * offset*4, 120*offset)
//   //   state.camera.rotation.set(0, offset * 42, offset * 2)
//   //   state.camera.lookAt(0, 0, 0)
//   //   //console.log(state.camera)
//   // })

//   useEffect(() => {
//     console.log(scene.children[0])

//    // scene.children[0].position.set(-2,0,0)
//     let ctx = gsap.context(() => {
//       gsap.to(sphereWrapRef.current.rotation,
//         { z: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
//       gsap.to(sphereWrapRef.current.rotation,
//         { y: "-=.03", repeat: -1, ease: 'none', repeatRefresh: true })
//       gsap.to(sphereWrapRef.current.rotation,
//         { x: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
//     }, sphereWrapRef); // <- scopes all selector text inside the context to this component (optional, default is document)
//     return () => ctx.revert(); // cleanup! 

//   }, []);




//   return (
//   <primitive object={scene} {...props} ref={sphereWrapRef} />
//   )
 
// }

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/helix-globe01.glb')



export default Sphere





function Model() {
  const gltf = useGLTF('/helix-globe01.glb')

  // Center the rotation on the model's origin
  gltf.scene.rotation.set(Math.PI / 2, 0, 0)
  gltf.scene.position.set(0, 0, 0)

  // Rotate model continuously
  useFrame(() => {
    gltf.scene.rotation.y += 0.003
    gltf.scene.rotation.x += 0.003
  })

  return (
    <mesh scale={2.35}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

