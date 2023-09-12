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
		}>
	>
	chessMoveToSubmitToGame: {
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
	}
}
export const RankFive: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,

	setChessMoveToSubmitToGame,
	chessMoveToSubmitToGame,
}) => {
	return (
		<>
			<RigidBody type='fixed'>
				<mesh
					position={[-3.5, rowHeight, -0.5]}
					onClick={() => {
						setChessMoveToSubmitToGame({
							piece: chessMoveToSubmitToGame.piece,
							pieceName: chessMoveToSubmitToGame.pieceName,
							coord: 'a5',
							readyToSubmit: true,
						})
						console.log('click a5')
					}}
				>
					{tileBlack}
				</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-2.5, rowHeight, -0.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-1.5, rowHeight, -0.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-0.5, rowHeight, -0.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[0.5, rowHeight, -0.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[1.5, rowHeight, -0.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[2.5, rowHeight, -0.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[3.5, rowHeight, -0.5]}>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
