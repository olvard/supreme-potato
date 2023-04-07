import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/board.gltf')

  return (
    <group {...props} dispose={null}>
      <group position={(0, 0, 0)} scale={0.01}>
        <directionalLight intensity={0.66} decay={2} rotation={[-0.38, -0.52, -0.67]} />
        <directionalLight intensity={0.87} decay={2} rotation={[-0.48, 0.28, 1.09]} />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[0, 0, 0]}
          rotation={[-0.04, -0.19, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bunny.geometry}
          material={nodes.Bunny.material}
          position={[75.97, 0, 47.28]}
          rotation={[0, 0.81, 0]}
          scale={[1, 1, 0.8]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle_2.geometry}
          material={nodes.Rectangle_2.material}
          position={[-15.31, 80.81, 9.27]}
          rotation={[-Math.PI / 9, 0.23, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[186.01, 133.29, -20.25]}
          rotation={[-Math.PI / 9, 0.23, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ellipse.geometry}
          material={nodes.Ellipse.material}
          position={[-195.52, 30.16, 104.56]}
          rotation={[-Math.PI / 9, 0.23, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[25.98, 86.53, 27.93]}
          rotation={[-Math.PI / 9, 0.23, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle.geometry}
          material={nodes.Rectangle.material}
          position={[-21.85, 65.63, -26.74]}
          rotation={[-0.34, 0.23, 0]}
          scale={[0.98, 1, 2.15]}
        />
      </group>
    </group>
  )
}
