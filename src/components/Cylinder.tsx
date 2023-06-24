import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

interface IProps {
  position: number[]
}

export function Cylinder(props: IProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref as any}
      scale={1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'green'} />
    </mesh>
  )
}
