'use client'

// @ts-nocheck


/* eslint-disable */
import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { ScrollControls, Sky, OrbitControls, useScroll, useGLTF, useAnimations } from '@react-three/drei'
import { CameraControls } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import styles from './InteractiveSphere.module.scss'

extend({ OrbitControls })

// const Controls = () => {
//   const { camera, gl } = useThree()
//   const ref = useRef()
//   useFrame(() => ref.current.update())
//   return <OrbitControls enableZoom={false} ref={ref} args={[camera, gl.domElement]} target={[0,0,0]} center={[-15, 1, 0]} />
// }



function Sphere() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  const helixSphereRef = useRef<HTMLDivElement | null>(null)
  
  const sphereWrapRef = useRef<HTMLDivElement | null>(null)
  const [globePosition, setGlobePosition] = useState(0)
  useEffect(() => {
  
    const onScroll = () => {
     // cameraControlRef.current?.position(123, 0, true);
      if (cameraControlRef.current) {

        console.log('sphereWrapRef')
        console.log(cameraControlRef)
      }

      if (sphereWrapRef.current) {
    //    console.log(sphereWrapRef)
        // const currentScrollY = window.scrollY
        // sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 900), 0)}`
       // sphereWrapRef.current.camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
      }
      if (window.innerWidth < 800) {
        setGlobePosition([1, 5, 4])
      } else {
        setGlobePosition([0, 0, 0])
      }
    }
   // window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll);
    onScroll()
    
    //sphereWrapRef.current.camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);
  
    //sphereWrapRef.current.camera.rotation.set(THREE.MathUtils.degToRad(30), 0, 0);

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  

  return (
    <div id='interactiveSphere' className={styles.wrap} ref={sphereWrapRef}>
      <Canvas linear flat rotation={[80, 0, 0]}  camera={{ position: [1, 1, 44], rotation: [30, 40, 0], fov: 50 }} onCreated={((state) => ScrollTrigger.refresh())}>
        <CameraControls ref={cameraControlRef}   />
        <ambientLight intensity={3} />
        <HelixSphere scale={9} position={globePosition}  />
      </Canvas>
    </div>
  )
}


function HelixSphere({ ...props }) {

  const sphereWrapRef = useRef<HTMLDivElement | null>(null)


  const [currentScrollY, setCurrentScrollY] = useState(0)



  useFrame(({ camera }, delta) => {
  //  console.log(camera)
    camera.position.set(10, 1, 12)
      // controls.current.target.lerp(target, delta)

  })



  
  useEffect(() => {
    const onScroll = () => {
    //console.log(camera);
      if (sphereWrapRef.current) {
        setCurrentScrollY(window.scrollY)
      }
      // plays animation when page is scrolled.
      //actions['firstAction'].play().paused = false

      
    }
    window.addEventListener('scroll', onScroll)
    onScroll();

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck

  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, animations } = useGLTF('/helix-animation-test4.glb')
  const { actions } = useAnimations(animations, scene)
  //useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['firstAction'].play().paused = true), [actions])
  // useFrame((state, delta) => { 
  //   // const action = actions['Take 001']
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - currentScrollY / 900;
  //  // console.log(offset)
  //   // action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(10 / offset, 1 * offset*4, 120*offset)
  //   state.camera.rotation.set(0, offset * 42, offset * 2)
  //   state.camera.lookAt(0, 0, 0)
  //   //console.log(state.camera)
  // })

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sphereWrapRef.current.rotation,
        { z: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
      gsap.to(sphereWrapRef.current.rotation,
        { y: "-=.03", repeat: -1, ease: 'none', repeatRefresh: true })
      gsap.to(sphereWrapRef.current.rotation,
        { x: "+=.03", repeat: -1, ease: 'none', repeatRefresh: true })
    }, sphereWrapRef); // <- scopes all selector text inside the context to this component (optional, default is document)
    return () => ctx.revert(); // cleanup! 

  }, []);




  return <primitive object={scene} {...props} ref={sphereWrapRef} />
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/helix-animation-test4.glb')



export default Sphere