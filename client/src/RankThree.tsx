import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
	setChessMoveToSubmitToGame: any
	chessMoveToSubmitToGame: {
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
	}
}
export const RankThree: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	const positions = [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5]
	const coords = ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3']

	const renderBody = positions.map((position, index) => (
		<RigidBody
			key={index}
			name={coords[index]}
			type='fixed'
			position={[position, rowHeight, 1.5]}
		>
			<mesh
				onClick={() => {
					setChessMoveToSubmitToGame({
						...chessMoveToSubmitToGame,
						coord: coords[index],
						readyToSubmit: true,
					})
					console.log('clicked on', coords[index])
				}}
			>
				{index % 2 === 0 ? tileBlack : tileWhite}
			</mesh>
		</RigidBody>
	))
	return renderBody
}
