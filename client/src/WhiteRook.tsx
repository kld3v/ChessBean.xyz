import { RigidBody } from '@react-three/rapier'
import { FC, useEffect, useRef, useState } from 'react'

interface IMoveMechanics {
	xzPositionToMovePiece: { x: number; z: number }
	setChessMoveToSubmitToGame: any
}
const WhiteRook: FC<IMoveMechanics> = ({
	xzPositionToMovePiece,
	setChessMoveToSubmitToGame,
}) => {
	const whiteRook = useRef()

	useEffect(() => {
		if (isReadyToMove) {
			// @ts-ignore
			whiteRook.current?.setNextKinematicTranslation({
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
			ref={whiteRook}
			position={[-3.5, 0.5, 3.5]}
			type='kinematicPosition'
		>
			<mesh
				onClick={(e) => {
					e.stopPropagation()
					setIsReadyToMove(!isReadyToMove)
					setChessMoveToSubmitToGame({ piece: 'R', coord: '', readyToSubmit: false })
				}}
				castShadow
			>
				<boxGeometry args={[0.5, 1, 0.5]}></boxGeometry>
				<meshBasicMaterial
					color={isReadyToMove ? 'red' : 'green'}
				></meshBasicMaterial>
			</mesh>
		</RigidBody>
	)
}

export default WhiteRook
