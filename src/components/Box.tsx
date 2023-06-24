import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Texture, TextureLoader } from 'three'

interface IProps {
  position: [x: number, y: number, z: number]
  rotation: [x: number, y: number, z: number]
  onHover: (isHover: boolean) => void
}

export function Box(props: IProps) {
  const ref = useRef<any>()
  const [click, setClick] = useState(false)
  const [texture, setTexture] = useState(loadTexture('./react.png'))

  texture.repeat.set(1.5, 1.5) // Cambiar el tamaño de la textura
  // texture.offset.set(0.25, 0.25) // Desplazar la textura hacia la derecha y hacia arriba
  texture.center.set(0.5, 0.5) // Centrar la textura en la cara

  useEffect(() => {
    setTexture(click ? loadTexture('./javascript.png') : loadTexture('./react.png'))
  }, [click])

  useFrame((_state, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.y -= delta
    }
  })

  function loadTexture(url: string): Texture {
    return new TextureLoader().load(url)
  }

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={() => setClick(!click)}
      onPointerOver={() => props.onHover(true)}
      onPointerOut={() => props.onHover(false)}
    >
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshBasicMaterial map={texture} side={0} />
    </mesh>
  )
}
