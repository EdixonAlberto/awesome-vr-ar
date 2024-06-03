import './Viewer3D.style.scss'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model3DLoader } from '~/components/Model3DLoader'
// import { ArcballControls, CameraControls, PointerLockControls, Sky } from '@react-three/drei'
// import { DragControls, OrbitControls, TrackballControls, MapControls } from '@react-three/drei'

import { useQueryParams } from '~/hooks/useQueryParams'

export function Viewer3D() {
  const queryParams = useQueryParams()
  // const previewEnabled = true

  console.log(queryParams)

  return (
    <div className="viewer-3d">
      <Suspense fallback={<>loading...</>}>
        <Canvas
          camera={{
            zoom: 1,
            position: [15, 20, 15]
          }}
        >
          {/* <DragControls> */}
          {/* </DragControls> */}
          <Model3DLoader modelPath={queryParams?.['3d'] || ''} />
          {/* <CameraControls /> */}
          {/* <OrbitControls target={[10, 5, 10]} /> */}
          {/* <Sky /> */}
          {/* <MapControls /> */}
        </Canvas>
      </Suspense>
    </div>
  )
}
