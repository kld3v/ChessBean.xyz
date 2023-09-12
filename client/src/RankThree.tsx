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
	return (
		<>
			<RigidBody
				name='a3'
				type='fixed'
				position={[-3.5, rowHeight, 1.5]}
			>
				<mesh
					onClick={() => {
						setChessMoveToSubmitToGame({
							...chessMoveToSubmitToGame,
							coord: 'a3',
							readyToSubmit: true,
						})
						console.log('click on a3')
					}}
				>
					{tileBlack}
				</mesh>
			</RigidBody>
			<RigidBody
				position={[-2.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh
					onClick={() => {
						setChessMoveToSubmitToGame({
							...chessMoveToSubmitToGame,
							coord: 'b3',
							readyToSubmit: true,
						})
						console.log('click on b3')
					}}
				>
					{tileWhite}
				</mesh>
			</RigidBody>
			<RigidBody
				position={[-1.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[-0.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[0.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[1.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[2.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[3.5, rowHeight, 1.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
