import { RigidBody } from '@react-three/rapier'
import { FC, useEffect, useRef, useState } from 'react'

interface IMoveMechanics {
	xzPositionToMovePiece: { x: number; z: number }
	setChessMoveToSubmitToGame: any
}
const WhitePawn: FC<IMoveMechanics> = ({
	xzPositionToMovePiece,
	setChessMoveToSubmitToGame,
}) => {
	const whitePawn = useRef()

	useEffect(() => {
		if (isReadyToMove) {
			// @ts-ignore
			whitePawn.current?.setNextKinematicTranslation({
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
			ref={whitePawn}
			position={[-3.5, 0.5, 2.5]}
			type='kinematicPosition'
		>
			<mesh
				onClick={(e) => {
					e.stopPropagation()
					setIsReadyToMove(!isReadyToMove)
					setChessMoveToSubmitToGame({ piece: '', coord: '', readyToSubmit: true })
				}}
				castShadow
			>
				<boxGeometry args={[0.5, 1, 0.5]}></boxGeometry>
				<meshBasicMaterial
					color={isReadyToMove ? 'red' : 'white'}
				></meshBasicMaterial>
			</mesh>
		</RigidBody>
	)
}

export default WhitePawn
