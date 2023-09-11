import { Physics } from '@react-three/rapier'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { RankOne } from './RankOne'
import { RankTwo } from './RankTwo'
import { RankThree } from './RankThree'
import { RankFour } from './RankFour'
import { RankFive } from './RankFive'
import { RankSix } from './RankSix'
import { RankSeven } from './RankSeven'
import { RankEight } from './RankEight'
import WhitePawn from './WhitePawn'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { ChessGame } from './ChessGame'
import chessObject from './chessObject'
import WhiteRook from './WhiteRook'
import BlackPawn from './BlackPawn'

export default function Experience() {
	const chessTileGeometry = useMemo(() => {
		let chessTileGeometry = new THREE.BoxGeometry(1, 0.2, 1)
		return chessTileGeometry
	}, [])
	const chessWhiteMaterial = useMemo(() => {
		let chessWhiteMaterial = new THREE.MeshStandardMaterial({ color: 'white' })
		return chessWhiteMaterial
	}, [])
	const chessBlackMaterial = useMemo(() => {
		let chessTileGeometry = new THREE.MeshStandardMaterial({ color: 'black' })
		return chessTileGeometry
	}, [])

	const tileBlack = (
		<mesh
			geometry={chessTileGeometry}
			material={chessBlackMaterial}
			receiveShadow
		></mesh>
	)

	const tileWhite = (
		<mesh
			geometry={chessTileGeometry}
			material={chessWhiteMaterial}
			receiveShadow
		></mesh>
	)

	const [rowHeight] = useState(-0.1)
	// @ts-ignore
	const startNewGame = async () => {
		const url = 'https://localhost:7204/api/Chess/StartNewGame'

		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.error('Failed to start new game:', error)
		}
	}

	const [xzPositionToMovePiece, setxzPositionToMovePiece] = useState<{
		x: number
		z: number
	}>({ x: 0, z: 0 })

	const [chessMoveToSubmitToGame, setChessMoveToSubmitToGame] = useState({
		piece: '',
		coord: '',
		readyToSubmit: false,
	})

	useEffect(() => {
		console.log(chessMoveToSubmitToGame)
	}, [chessMoveToSubmitToGame])
	return (
		<>
			<Perf />
			<OrbitControls
				enablePan={true}
				enableRotate={true}
			/>
			<directionalLight
				castShadow
				position={[1, 10, 3]}
				intensity={1.5}
			/>

			<ambientLight intensity={0.3} />
			<ChessGame
				chessMoveToSubmitToGame={chessMoveToSubmitToGame}
				setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
			/>
			<Suspense>
				<Physics debug>
					<gridHelper args={[20, 20, 0xff0000, 'teal']} />

					<BlackPawn
						xzPositionToMovePiece={xzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<WhitePawn
						xzPositionToMovePiece={xzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<WhiteRook
						xzPositionToMovePiece={xzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>

					<RankOne
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
					/>
					<RankTwo
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
					/>
					<RankThree
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
						chessMoveToSubmitToGame={chessMoveToSubmitToGame}
						setxzPositionToMovePiece={setxzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<RankFour
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
						chessMoveToSubmitToGame={chessMoveToSubmitToGame}
						setxzPositionToMovePiece={setxzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<RankFive
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
						chessMoveToSubmitToGame={chessMoveToSubmitToGame}
						setxzPositionToMovePiece={setxzPositionToMovePiece}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<RankSix
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
					/>
					<RankSeven
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
					/>
					<RankEight
						tileBlack={tileBlack}
						tileWhite={tileWhite}
						rowHeight={rowHeight}
					/>
				</Physics>
			</Suspense>
			{/* <mesh onClick={startNewGame}>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh> */}
		</>
	)
}
