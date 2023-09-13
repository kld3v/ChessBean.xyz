import { Environment, OrbitControls } from '@react-three/drei'
import { Leva, useControls } from 'leva'

export const LightAndControls = () => {
	const dLightProps = useControls({
		position: [9, 7, 11],
		intensity: 1.5,
	})
	const { color } = useControls({
		color: '#101010',
	})
	return (
		<>
			<Leva hidden />

			<color
				args={[color]}
				attach={'background'}
			></color>

			<OrbitControls
				enablePan={false}
				enableRotate={false}
			/>
			{/* <Sky /> */}
			<Environment preset='sunset' />
			<directionalLight
				castShadow
				{...dLightProps}
			/>

			{/* <ambientLight intensity={0.1} /> */}
		</>
	)
}
