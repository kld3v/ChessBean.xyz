import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
	setChessMoveToSubmitToGame: React.Dispatch<
		React.SetStateAction<{
			piece: string
			pieceName: string
			coord: string
			readyToSubmit: boolean
			pieceColor: string
		}>
	>
	chessMoveToSubmitToGame: {
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
		pieceColor: string
	}
}
export const RankFive: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,

	setChessMoveToSubmitToGame,
	chessMoveToSubmitToGame,
}) => {
	const positions = [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5]
	const coords = ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5']

	const renderBody = positions.map((position, index) => (
		<RigidBody
			key={index}
			name={coords[index]}
			type='fixed'
			position={[position, rowHeight, -0.5]}
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
