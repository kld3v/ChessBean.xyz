import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
}

export const RankTwo: FC<IRank> = ({ tileBlack, tileWhite, rowHeight }) => {
	return (
		<>
			<RigidBody
				type='fixed'
				position={[3.5, rowHeight, 2.5]}
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[2.5, rowHeight, 2.5]}
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[1.5, rowHeight, 2.5]}
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[0.5, rowHeight, 2.5]}
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[-0.5, rowHeight, 2.5]}
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[-1.5, rowHeight, 2.5]}
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[-2.5, rowHeight, 2.5]}
				onClick={() => {
					console.log('hello')
				}}
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[-3.5, rowHeight, 2.5]}
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
