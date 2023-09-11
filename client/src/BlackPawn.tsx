import { RigidBody } from '@react-three/rapier'
import { FC, useEffect, useRef, useState } from 'react'

interface IMoveMechanics {
	xzPositionToMovePiece: { x: number; z: number }
	setChessMoveToSubmitToGame: any
}
const BlackPawn: FC<IMoveMechanics> = ({
	xzPositionToMovePiece,
	setChessMoveToSubmitToGame,
}) => {
	const blackPawn = useRef()

	useEffect(() => {
		if (isReadyToMove) {
			// @ts-ignore
			blackPawn.current?.setNextKinematicTranslation({
				x: xzPositionToMovePiece.x,
				y: 0.5,
				z: xzPositionToMovePiece.z,
			})
			console.log('moved to ', xzPositionToMovePiece)
			setIsReadyToMove(false)
		}
	}, [xzPositionToMovePiece])

	const [isReadyToMove, setIsReadyToMove] = useState(false)
	return (
		<RigidBody
			// @ts-ignore
			ref={blackPawn}
			position={[-3.5, 0.5, -2.5]}
			type='kinematicPosition'
		>
			<mesh
				onClick={(e) => {
					e.stopPropagation()
					setIsReadyToMove(!isReadyToMove)
					setChessMoveToSubmitToGame({ piece: '', coord: '', readyToSubmit: false })
				}}
				castShadow
			>
				<boxGeometry args={[0.5, 1, 0.5]}></boxGeometry>
				<meshBasicMaterial
					color={isReadyToMove ? 'red' : 'grey'}
				></meshBasicMaterial>
			</mesh>
		</RigidBody>
	)
}

export default BlackPawn
