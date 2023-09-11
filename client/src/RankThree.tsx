import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
	setxzPositionToMovePiece: any
	setChessMoveToSubmitToGame: any
	chessMoveToSubmitToGame: {
		piece: string
		coord: string
		readyToSubmit: boolean
	}
}
export const RankThree: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	setxzPositionToMovePiece,
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	return (
		<>
			<RigidBody
				name='a3'
				type='fixed'
			>
				<mesh
					position={[-3.5, rowHeight, 1.5]}
					onClick={() => {
						setxzPositionToMovePiece({ x: -3.5, z: 1.5 })
						setChessMoveToSubmitToGame({
							piece: chessMoveToSubmitToGame.piece,
							coord: 'a3',
							readyToSubmit: true,
						})
						console.log('click')
					}}
				>
					{tileBlack}
				</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-2.5, rowHeight, 1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-1.5, rowHeight, 1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-0.5, rowHeight, 1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[0.5, rowHeight, 1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[1.5, rowHeight, 1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[2.5, rowHeight, 1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[3.5, rowHeight, 1.5]}>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
