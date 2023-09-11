import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
}
export const RankSix: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
}) => {
	return (
		<>
			<RigidBody type='fixed'>
				<mesh position={[3.5, rowHeight, -1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[2.5, rowHeight, -1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[1.5, rowHeight, -1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[0.5, rowHeight, -1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-0.5, rowHeight, -1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-1.5, rowHeight, -1.5]}>{tileWhite}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-2.5, rowHeight, -1.5]}>{tileBlack}</mesh>
			</RigidBody>
			<RigidBody type='fixed'>
				<mesh position={[-3.5, rowHeight, -1.5]}>{tileWhite}</mesh>
			</RigidBody>
		</>
	)
}
