import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
	setDestinationSquare: (position: { x: number; z: number }) => void
}
export const RankThree: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	setDestinationSquare,
}) => {
	return (
		<>
			<RigidBody type='fixed'>
				<mesh
					onClick={() => setDestinationSquare({ x: -3.5, z: 1.5 })}
					position={[-3.5, rowHeight, 1.5]}
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
