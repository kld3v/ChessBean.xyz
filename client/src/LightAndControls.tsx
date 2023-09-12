import { Environment, OrbitControls, Sky } from '@react-three/drei'

export const LightAndControls = () => {
	return (
		<>
			<OrbitControls
				enablePan={true}
				enableRotate={true}
			/>
			<Sky />
			<Environment preset='apartment' />
			<directionalLight
				castShadow
				position={[1, 10, 3]}
				intensity={1.5}
			/>

			<ambientLight intensity={0.3} />
		</>
	)
}
