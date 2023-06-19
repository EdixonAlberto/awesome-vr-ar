import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
// import moduleName from '@react-three/'

export function Boxs(props) {
  const ref = useRef()
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  const [texture, setTexture] = useState(new TextureLoader().load('./react.png'))

  // const texture = new TextureLoader().load('./react.png')
  texture.repeat.set(1.5, 1.5) // Cambiar el tamaño de la textura
  // texture.offset.set(0.25, 0.25) // Desplazar la textura hacia la derecha y hacia arriba
  texture.center.set(0.5, 0.5) // Centrar la textura en la cara

  useEffect(() => {
    ref.current.rotation.x = 10
    ref.current.rotation.y = 10
    ref.current.rotation.z = -10
  }, [])

  useEffect(() => {
    setTexture(hover ? new TextureLoader().load('./javascript.png') : new TextureLoader().load('./react.png'))
  }, [hover])

  useFrame((_state, delta) => {
    ref.current.rotation.y -= delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={click ? 1.5 : 1}
      onClick={() => setClick(!click)}
      onPointerOver={() => {
        setHover(true)
        props.onHover(true)
      }}
      onPointerOut={() => {
        setHover(false)
        props.onHover(false)
      }}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshBasicMaterial map={texture} side={0} />
    </mesh>
  )
}
