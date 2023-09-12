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
export const RankFour: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	return (
		<>
			<RigidBody
				position={[3.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[2.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[1.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[0.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[-0.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[-1.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[-2.5, rowHeight, 0.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[-3.5, rowHeight, 0.5]}
				type='fixed'
				name='a4'
			>
				<mesh
					onClick={() => {
						setChessMoveToSubmitToGame({
							...chessMoveToSubmitToGame,
							coord: 'a4',
							readyToSubmit: true,
						})
						console.log('click')
					}}
				>
					{tileWhite}
				</mesh>
			</RigidBody>
		</>
	)
}
