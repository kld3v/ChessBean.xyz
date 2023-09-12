import { Environment, OrbitControls, Sky } from '@react-three/drei'
import { Leva, useControls } from 'leva'

export const LightAndControls = () => {
	const { x, y, z } = useControls({
		x: 1,
		y: 10,
		z: 3,
	})
	return (
		<>
			<Leva hidden />
			<OrbitControls
				enablePan={false}
				enableRotate={false}
			/>
			<Sky />
			<Environment preset='apartment' />
			<directionalLight
				castShadow
				position={[x, y, z]}
				intensity={0.5}
			/>

			<ambientLight intensity={0.1} />
		</>
	)
}
