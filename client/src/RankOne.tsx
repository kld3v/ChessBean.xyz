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
export const RankOne: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	const positions = [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5]
	const coords = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']

	const renderBody = positions.map((position, index) => (
		<RigidBody
			key={index}
			name={coords[index]}
			type='fixed'
			position={[position, rowHeight, 3.5]}
		>
			<mesh
				onClick={() => {
					setChessMoveToSubmitToGame({
						...chessMoveToSubmitToGame,
						coord: coords[index],
						readyToSubmit: true,
					})
					console.log('click on', coords[index])
				}}
			>
				{index % 2 === 0 ? tileBlack : tileWhite}
			</mesh>
		</RigidBody>
	))
	return renderBody
}
