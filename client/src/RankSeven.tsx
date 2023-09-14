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
		pieceColor: string
	}
}
export const RankSeven: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	const positions = [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5]
	const coords = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']

	const renderBody = positions.map((position, index) => (
		<RigidBody
			key={index}
			name={coords[index]}
			type='fixed'
			position={[position, rowHeight, -2.5]}
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
