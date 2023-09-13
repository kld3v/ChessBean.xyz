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
import * as THREE from 'three'
import { ChessGame } from './ChessGame'
import { LightAndControls } from './LightAndControls'
import Board from './Board'
import { Loader } from './Loader'
import { PresentationControls } from '@react-three/drei'

export default function Experience() {
	const chessTileGeometry = useMemo(() => {
		let chessTileGeometry = new THREE.BoxGeometry(1, 0.2, 1)
		return chessTileGeometry
	}, [])
	const chessWhiteMaterial = useMemo(() => {
		// let chessWhiteMaterial = new THREE.MeshStandardMaterial({ color: 'white' })
		let chessWhiteMaterial = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0,
			color: 0xffffff,
		})
		return chessWhiteMaterial
	}, [])
	const chessBlackMaterial = useMemo(() => {
		// let chessBlackMaterial = new THREE.MeshStandardMaterial({ color: 'black' })
		let chessBlackMaterial = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0,
			color: 0x000000,
		})
		return chessBlackMaterial
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

	const [chessMoveToSubmitToGame, setChessMoveToSubmitToGame] = useState<{
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
		pieceColor: string
	}>({
		piece: '',
		pieceName: '',
		coord: '',
		readyToSubmit: false,
		pieceColor: 'w',
	})
	const zAxisConstant = -1.773
	const [squareToPositionMap] = useState<{ [key: string]: number[] }>({
		a1: [1.799, zAxisConstant],
		a2: [1.799, zAxisConstant + 0.5],
		a3: [1.799, zAxisConstant + 1],
		a4: [1.799, zAxisConstant + 1.5],
		a5: [1.799, zAxisConstant + 2],
		a6: [1.799, zAxisConstant + 2.5],
		a7: [1.799, zAxisConstant + 3],
		a8: [1.799, zAxisConstant + 3.5],
		b1: [1.275, zAxisConstant],
		b2: [1.275, zAxisConstant + 0.5],
		b3: [1.275, zAxisConstant + 1],
		b4: [1.275, zAxisConstant + 1.5],
		b5: [1.275, zAxisConstant + 2],
		b6: [1.275, zAxisConstant + 2.5],
		b7: [1.275, zAxisConstant + 3],
		b8: [1.275, zAxisConstant + 3.5],
		c1: [0.761, zAxisConstant],
		c2: [0.761, zAxisConstant + 0.5],
		c3: [0.761, zAxisConstant + 1],
		c4: [0.761, zAxisConstant + 1.5],
		c5: [0.761, zAxisConstant + 2],
		c6: [0.761, zAxisConstant + 2.5],
		c7: [0.761, zAxisConstant + 3],
		c8: [0.761, zAxisConstant + 3.5],
		d1: [0.256, zAxisConstant],
		d2: [0.256, zAxisConstant + 0.5],
		d3: [0.256, zAxisConstant + 1],
		d4: [0.256, zAxisConstant + 1.5],
		d5: [0.256, zAxisConstant + 2],
		d6: [0.256, zAxisConstant + 2.5],
		d7: [0.256, zAxisConstant + 3],
		d8: [0.256, zAxisConstant + 3.5],
		e1: [-0.247, zAxisConstant],
		e2: [-0.247, zAxisConstant + 0.5],
		e3: [-0.247, zAxisConstant + 1],
		e4: [-0.247, zAxisConstant + 1.5],
		e5: [-0.247, zAxisConstant + 2],
		e6: [-0.247, zAxisConstant + 2.5],
		e7: [-0.247, zAxisConstant + 3],
		e8: [-0.247, zAxisConstant + 3.5],
		f1: [-0.769, zAxisConstant],
		f2: [-0.769, zAxisConstant + 0.5],
		f3: [-0.769, zAxisConstant + 1],
		f4: [-0.769, zAxisConstant + 1.5],
		f5: [-0.769, zAxisConstant + 2],
		f6: [-0.769, zAxisConstant + 2.5],
		f7: [-0.769, zAxisConstant + 3],
		f8: [-0.769, zAxisConstant + 3.5],
		g1: [-1.255, zAxisConstant],
		g2: [-1.255, zAxisConstant + 0.5],
		g3: [-1.255, zAxisConstant + 1],
		g4: [-1.255, zAxisConstant + 1.5],
		g5: [-1.255, zAxisConstant + 2],
		g6: [-1.255, zAxisConstant + 2.5],
		g7: [-1.255, zAxisConstant + 3],
		g8: [-1.255, zAxisConstant + 3.5],
		h1: [-1.755, zAxisConstant],
		h2: [-1.755, zAxisConstant + 0.5],
		h3: [-1.755, zAxisConstant + 1],
		h4: [-1.755, zAxisConstant + 1.5],
		h5: [-1.755, zAxisConstant + 2],
		h6: [-1.755, zAxisConstant + 2.5],
		h7: [-1.755, zAxisConstant + 3],
		h8: [-1.755, zAxisConstant + 3.5],
	})

	const [globalBoardPositions, setGlobalBoardPositions] = useState<{
		[key: string]: number[]
	}>({
		whiteKing: squareToPositionMap.e1,
		whiteQueen: squareToPositionMap.d1,
		whiteBKnight: squareToPositionMap.b1,
		whiteGKnight: squareToPositionMap.g1,
		whiteBishopwhite: squareToPositionMap.c1,
		whiteBishopBlack: squareToPositionMap.f1,
		whiteARook: squareToPositionMap.a1,
		whiteHRook: squareToPositionMap.h1,
		whiteAPawn: squareToPositionMap.a2,
		whiteBPawn: squareToPositionMap.b2,
		whiteCPawn: squareToPositionMap.c2,
		whiteDPawn: squareToPositionMap.d2,
		whiteEPawn: squareToPositionMap.e2,
		whiteFPawn: squareToPositionMap.f2,
		whiteGPawn: squareToPositionMap.g2,
		whiteHPawn: squareToPositionMap.h2,
		blackKing: squareToPositionMap.e8,
		blackQueen: squareToPositionMap.d8,
		blackBKnight: squareToPositionMap.b8,
		blackGKnight: squareToPositionMap.g8,
		blackBishopBlack: squareToPositionMap.c8,
		blackBishopWhite: squareToPositionMap.f8,
		blackARook: squareToPositionMap.a8,
		blackHRook: squareToPositionMap.h8,
		blackAPawn: squareToPositionMap.a7,
		blackBPawn: squareToPositionMap.b7,
		blackCPawn: squareToPositionMap.c7,
		blackDPawn: squareToPositionMap.d7,
		blackEPawn: squareToPositionMap.e7,
		blackFPawn: squareToPositionMap.f7,
		blackGPawn: squareToPositionMap.g7,
		blackHPawn: squareToPositionMap.h7,
	})

	useEffect(() => {
		console.log(chessMoveToSubmitToGame)
	}, [chessMoveToSubmitToGame])
	return (
		<>
			<ChessGame
				globalBoardPositions={globalBoardPositions}
				setGlobalBoardPositions={setGlobalBoardPositions}
				chessMoveToSubmitToGame={chessMoveToSubmitToGame}
				setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
				squareToPositionMap={squareToPositionMap}
			/>
			<Suspense fallback={<Loader />}>
				<LightAndControls />
				<PresentationControls global>
					<Board
						globalBoardPositions={globalBoardPositions}
						setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
					/>
					<Physics>
						{/* <gridHelper args={[20, 20, 0xff0000, 'teal']} /> */}

						<RankOne
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankTwo
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankThree
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankFour
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankFive
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankSix
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankSeven
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
						<RankEight
							tileBlack={tileBlack}
							tileWhite={tileWhite}
							rowHeight={rowHeight}
							chessMoveToSubmitToGame={chessMoveToSubmitToGame}
							setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
						/>
					</Physics>
				</PresentationControls>
			</Suspense>
			{/* <mesh onClick={startNewGame}>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh> */}
		</>
	)
}
