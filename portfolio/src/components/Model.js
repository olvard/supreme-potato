import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/board3.glb')

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
