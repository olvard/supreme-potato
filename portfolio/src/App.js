import logo from './logo.svg'
import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PresentationControls, OrthographicCamera } from '@react-three/drei'
import { Model } from './Model'
import { DirectionalLight } from 'three'

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <header className='three'>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight intensity={0.1} />
              <Environment preset='forest' />
              <directionalLight color='white' position={[0, 0, 5]} />
              <PresentationControls
                config={{ mass: 20, tension: 500 }}
                snap={{ mass: 20, tension: 1500 }}
                rotation={[0, 0.2, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                {/* <OrthographicCamera makeDefault zoom={55} position={(10, 10, 1)} /> */}
                <Model />
              </PresentationControls>
              {/* <OrbitControls /> */}
            </Suspense>
          </Canvas>
        </header>
        <div className='nav'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
