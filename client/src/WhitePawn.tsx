import { RigidBody } from '@react-three/rapier'
import { FC, useEffect, useRef, useState } from 'react'

interface IMoveMechanics {
	destinationSquare: { x: number; z: number }
}
const WhitePawn: FC<IMoveMechanics> = ({ destinationSquare }) => {
	// const model = useGLTF('./chess_pawn.glb')
	const whitePawn = useRef()

	// const [type, settype] = useState<RigidBodyTypeString>('dynamic')
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		settype('kinematicPosition')
	// 	}, 4000)
	// }, [])

	useEffect(() => {
		if (isReadyToMove) {
			// @ts-ignore
			whitePawn.current?.setNextKinematicTranslation({
				x: destinationSquare.x,
				y: 0.5,
				z: destinationSquare.z,
			})
			console.log('moved to ', destinationSquare)
			setisReadyToMove(false)
		}
	}, [destinationSquare])

	const [isReadyToMove, setisReadyToMove] = useState(false)
	console.log(isReadyToMove)
	return (
		<RigidBody
			// @ts-ignore
			ref={whitePawn}
			position={[-3.5, 0.5, 2.5]}
			type='kinematicPosition'
		>
			<mesh
				onClick={() => {
					setisReadyToMove(!isReadyToMove)
				}}
				castShadow
			>
				<boxGeometry args={[0.5, 1, 0.5]}></boxGeometry>
				<meshBasicMaterial color={'white'}></meshBasicMaterial>
			</mesh>
		</RigidBody>
	)
}

export default WhitePawn
