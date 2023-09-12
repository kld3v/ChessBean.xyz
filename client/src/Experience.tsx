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
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { ChessGame } from './ChessGame'
import { LightAndControls } from './LightAndControls'
import Board from './Board'

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
			color: 0xffffff,
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
	}>({
		piece: '',
		pieceName: '',
		coord: '',
		readyToSubmit: false,
	})

	const [squareToPositionMap] = useState<{ [key: string]: number[] }>({
		a2: [1.799, -1.273],
		a3: [1.799, -0.773],
		d8: [0.256, 1.773],
		e8: [-0.247, 1.773],
	})

	const [globalBoardPositions, setGlobalBoardPositions] = useState<{
		[key: string]: number[]
	}>({
		whiteAPawn: squareToPositionMap.a2,
		blackKing: squareToPositionMap.e8,
		blackQueen: squareToPositionMap.d8,
	})

	useEffect(() => {
		console.log(chessMoveToSubmitToGame)
	}, [chessMoveToSubmitToGame])
	return (
		<>
			<Perf />
			<LightAndControls />
			<Board
				globalBoardPositions={globalBoardPositions}
				setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
			/>
			<ChessGame
				globalBoardPositions={globalBoardPositions}
				setGlobalBoardPositions={setGlobalBoardPositions}
				chessMoveToSubmitToGame={chessMoveToSubmitToGame}
				setChessMoveToSubmitToGame={setChessMoveToSubmitToGame}
				squareToPositionMap={squareToPositionMap}
			/>
			<Suspense>
				<Physics debug>
					<gridHelper args={[20, 20, 0xff0000, 'teal']} />

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
