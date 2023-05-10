import './App.css'
import * as React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls, OrthographicCamera } from '@react-three/drei'
import { Model } from './Model'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {
  const Projects = React.lazy(() => import('./Projects'))
  const Photos = React.lazy(() => import('./Photos'))
  const Strangeanimals = React.lazy(() => import('./Strangeanimals'))

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
                rotation={[0, 0, 0]}
                polar={[-Infinity, Infinity]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
              >
                <OrthographicCamera
                  zoom={55}
                  top={200}
                  bottom={-200}
                  left={200}
                  right={-200}
                  near={1}
                  far={2000}
                  position={[0, 0, 200]}
                />
                {/* <CameraControls makeDefault /> */}
                <Model />
              </PresentationControls>
              {/* <OrbitControls /> */}
            </Suspense>
          </Canvas>
        </header>
        <div className='nav'>
          <ul>
            <li>
              <Link to='/projects'>PROJECTS</Link>
            </li>
            <li>
              <Link to='/photos'>PHOTOS</Link>
            </li>
            <li>
              <Link to='/strangeanimals'>STRANGE ANIMALS</Link>
            </li>
          </ul>
          <Outlet />
        </div>
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={
                <React.Suspense fallback={<>...</>}>
                  <Projects />
                </React.Suspense>
              }
            />

            <Route
              path='projects'
              element={
                <React.Suspense fallback={<>...</>}>
                  <Projects />
                </React.Suspense>
              }
            />

            <Route
              path='photos'
              element={
                <React.Suspense fallback={<>...</>}>
                  <Photos />
                </React.Suspense>
              }
            />

            <Route
              path='strangeanimals'
              element={
                <React.Suspense fallback={<>...</>}>
                  <Strangeanimals />
                </React.Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
