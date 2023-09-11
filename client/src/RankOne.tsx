import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
}
export const RankOne: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
}) => {
	return (
		<>
			<RigidBody
				type='fixed'
				position={[-3.5, rowHeight, 3.5]}
			>
				{tileBlack}
			</RigidBody>
			<RigidBody
				type='fixed'
				position={[-2.5, rowHeight, 3.5]}
			>
				{tileWhite}
			</RigidBody>
			<RigidBody
				position={[-1.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileBlack}
			</RigidBody>
			<RigidBody
				position={[-0.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileWhite}
			</RigidBody>
			<RigidBody
				position={[0.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileBlack}
			</RigidBody>
			<RigidBody
				position={[1.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileWhite}
			</RigidBody>
			<RigidBody
				position={[2.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileBlack}
			</RigidBody>
			<RigidBody
				position={[3.5, rowHeight, 3.5]}
				type='fixed'
			>
				{tileWhite}
			</RigidBody>
		</>
	)
}
