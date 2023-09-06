import { OrbitControls } from '@react-three/drei'

export default function Experience() {
	const startNewGame = async () => {
		const url = 'https://localhost:7204/api/Chess/StartNewGame'

		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.error('Failed to start new game:', error)
		}
	}

	return (
		<>
			<OrbitControls makeDefault />

			<mesh onClick={startNewGame}>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh>
		</>
	)
}
