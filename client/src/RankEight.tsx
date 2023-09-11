import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
}
export const RankEight: FC<IRank> = ({ tileBlack, tileWhite, rowHeight }) => {
	return (
		<>
			<RigidBody
				position={[3.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[2.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[1.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[0.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[-0.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[-1.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody
				position={[-2.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody
				position={[-3.5, rowHeight, -3.5]}
				type='fixed'
			>
				<mesh>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
