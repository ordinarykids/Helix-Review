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
  const [globeZoom, setZoomPosition] = useState(0)
  // useEffect(() => {
  //   const onScroll = () => {
  //     // if (sphereWrapRef.current) {
  //     //   const currentScrollY = window.scrollY
  //     //   sphereWrapRef.current.style.opacity = `${Math.max(1 - (currentScrollY / 900), 0)}`
  //     // }
  //     if (window.innerWidth < 800) {
     
  //       setZoomPosition(200)
  //     } else {
        
  //       setZoomPosition(100)
  //     }
  //   }
  //   //window.addEventListener('scroll', onScroll)
  // //  window.addEventListener('resize', onScroll);
  //   onScroll()
  //   return () => window.removeEventListener('scroll', onScroll, {passive: true})
  // }, [])


  return (
    <Canvas camera={{ position: [5, 0, 5] }}>
      <ambientLight intensity={2.5} />
      {/* <directionalLight position={[-2, 5, 2]} /> */}
      <Controls />
      <Model position={[2, 0, 12]} />
    </Canvas>
  )
}

useGLTF.preload('/Helix-082823-darker.glb')



export default Sphere





function Model() {
  const [globeZoom, setZoomPosition] = useState(0)
 


  useEffect(() => {
      const onScroll = () => {
        
          setCurrentScrollY(window.scrollY)
        
         if (window.innerWidth < 800) {
      
          setZoomPosition(4)
        } else {
    
          setZoomPosition(3.5)
        }

        // plays animation when page is scrolled.
        //actions['firstAction'].play().paused = false
      }
      window.addEventListener('scroll', onScroll, {passive: true})
      onScroll();

      return () => window.removeEventListener('scroll', onScroll)
    }, [])



  const [currentScrollY, setCurrentScrollY] = useState(0)

  useFrame((state, delta) => { 
    // const action = actions['Take 001']
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - currentScrollY / 1200;
    // gltf.scene.rotation.y = 0.003 * currentScrollY;
    // gltf.scene.rotation.x = 0.003* currentScrollY;
    //console.log(offset)

   //  action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
      state.camera.position.set(1 / offset, 1 * offset*3, 12*offset)
      state.camera.rotation.set(0, offset * 42, offset * 2)
      state.camera.lookAt(0, -1, 0)
    //console.log(state.camera)

  //console.log( state.camera.position)
  })

  
  const gltf = useGLTF('/Helix-082823-darker.glb')

  // Center the rotation on the model's origin
  gltf.scene.rotation.set(Math.PI / 2, 0, 0)
  gltf.scene.position.set(0, 0, 0)

  // Rotate model continuously
  useFrame(() => {
    gltf.scene.rotation.y += 0.003
    gltf.scene.rotation.x += 0.003
  })

  return (
    <mesh scale={globeZoom}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

