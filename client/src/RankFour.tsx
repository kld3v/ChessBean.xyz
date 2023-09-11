import { RigidBody } from '@react-three/rapier'
import { FC } from 'react'

interface IRank {
	tileBlack: any
	tileWhite: any
	rowHeight: number
	setDestinationSquare: (position: { x: number; z: number }) => void
}
export const RankFour: FC<IRank> = ({
	tileBlack,
	tileWhite,
	rowHeight = -0.1,
	setDestinationSquare,
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
				<mesh onClick={() => setDestinationSquare({ x: -3.5, z: 0.5 })}>
					{tileWhite}
				</mesh>
			</RigidBody>
		</>
	)
}
