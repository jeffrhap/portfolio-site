import { CameraControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';

const CameraRig = () => {
    useFrame((state) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.8, 0.5);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.5, 0.5);
        state.camera.lookAt(0, 0, 0)
    })

    return (
        <CameraControls
            makeDefault
            truckSpeed={0}
            dollySpeed={0}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
        />
    )
}

export default CameraRig