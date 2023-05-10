import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Trans } from './Trans'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/board3.glb')

  const materialProps = {
    thickness: { value: 5, min: 0, max: 20 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
    envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    color: '#ffffff',
    attenuationTint: '#ffe79e',
    attenuationDistance: { value: 0, min: 0, max: 1 },
  }

  const ref = useRef()
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   ref.current.rotation.x = -Math.PI / 4 + Math.cos(t / 12) / 1
  //   // ref.current.rotation.y = Math.sin(t / 4) / 8
  //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 10
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })

  return (
    <group {...props} dispose={null}>
      <group scale={0.04}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bunny.geometry}
          material={materials['Material.004']}
          position={[53.11, -25, 53.98]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse.geometry}
          material={materials['Material.004']}
          position={[-59.74, -20, 46.19]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle.geometry}
          material={materials['Material.001']}
          position={[3.41, 0, 17.37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_2.geometry}
          material={materials['Material.004']}
          position={[5.41, 0, 30.58]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.003']}
          position={[66.98, 20, 43.11]}
          rotation={[-Math.PI / 9, 0.23, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials['Material.003']}
          position={[18.03, 0, 40.99]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/board3.glb')
