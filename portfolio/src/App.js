import logo from './logo.svg'
import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Model'

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <header className='three'>
          <Canvas>
            <Suspense fallback={null}>
              <Model />
              {/* <Environment preset='sunset' background /> */}
              <OrbitControls />
            </Suspense>
          </Canvas>
        </header>
      </div>
    </div>
  )
}

export default App
