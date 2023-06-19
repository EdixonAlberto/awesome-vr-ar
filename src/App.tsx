import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Boxs } from './examples/Boxs'

export default function App() {
  const [hover, setHover] = useState(false)

  return (
    <>
      <h1>Hello World React Three JS</h1>

      <main>
        <Canvas className={hover ? 'canvas-hover' : ''}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Boxs position={[0, 0, 0]} onHover={setHover} />

          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}
