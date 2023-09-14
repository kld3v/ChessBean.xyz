import { FC, useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import { handleWorldPieceCaptureLogic } from './Methods'
import {
	IChessMoveToSubmitToGame,
	IGlobalBoardPositions,
	ISetChessMoveToSubmitToGame,
	ISquareToPositionMap,
} from './TypesAndInterfaces'
interface IChessGame {
	chessMoveToSubmitToGame: IChessMoveToSubmitToGame
	setChessMoveToSubmitToGame: ISetChessMoveToSubmitToGame
	globalBoardPositions: IGlobalBoardPositions
	setGlobalBoardPositions: any
	squareToPositionMap: ISquareToPositionMap
	originalBoard: {
		[key: string]: number[]
	}
}
export const ChessGame: FC<IChessGame> = ({
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
	globalBoardPositions,
	setGlobalBoardPositions,
	squareToPositionMap,
	originalBoard,
}) => {
	const [chessGame] = useState(new Chess())
	const [fallSound] = useState(() => new Audio('./fall.mp3'))
	const playAudio = () => {
		fallSound.currentTime = 0
		fallSound.volume = 0.1
		fallSound.play()
	}
	function findKeyByValue(
		obj: {
			[x: string]: { toString: () => any }
			hasOwnProperty: (arg0: string) => any
		},
		targetValue: { toString: () => any }
	) {
		for (const key in obj) {
			if (
				obj.hasOwnProperty(key) &&
				obj[key].toString() === targetValue.toString()
			) {
				return key
			}
		}
		return null // If the value is not found in any key
	}
	const [offBoardChessPositionBlack, setOffBoardChessPositionBlack] = useState(1)
	const [offBoardChessPositionWhite, setOffBoardChessPositionWhite] = useState(1)

	useEffect(() => {
		console.log('turn player:', chessGame.turn())

		if (
			chessMoveToSubmitToGame.readyToSubmit &&
			chessMoveToSubmitToGame.pieceName !== ''
		) {
			// Handle Pawn moving two squares
			let move: string
			if (chessMoveToSubmitToGame.piece === 'P') {
				let currentPosition =
					globalBoardPositions[chessMoveToSubmitToGame.pieceName]
				console.log(currentPosition, 'piece current pos')
				let key = findKeyByValue(squareToPositionMap, currentPosition)
				console.log(key, '<--- key is ')
				move = `${chessMoveToSubmitToGame.piece}${key}-${chessMoveToSubmitToGame.coord}`
			} else {
				move = `${chessMoveToSubmitToGame.piece}${chessMoveToSubmitToGame.coord}`
			}

			console.log('Move to submit is:', move)

			// Handle wrong turn player move attempt
			if (chessGame.turn() !== chessMoveToSubmitToGame.pieceColor) {
				chessGame.turn() === 'b'
					? window.alert("it's black's turn")
					: window.alert("it's white's turn")
				//Reset chess move state
				setChessMoveToSubmitToGame({
					piece: '',
					pieceName: '',
					coord: '',
					readyToSubmit: false,
					pieceColor: chessMoveToSubmitToGame.pieceColor,
				})
				return
			}

			try {
				// Game state move made here
				if (chessGame.move(move) !== null) {
					handleWorldPieceCaptureLogic(
						chessMoveToSubmitToGame,
						globalBoardPositions,
						squareToPositionMap,
						offBoardChessPositionBlack,
						setOffBoardChessPositionBlack,
						offBoardChessPositionWhite,
						setOffBoardChessPositionWhite
					)

					//Move physical piece
					setGlobalBoardPositions({
						...globalBoardPositions,
						[chessMoveToSubmitToGame.pieceName]:
							squareToPositionMap[chessMoveToSubmitToGame.coord],
					})
					playAudio()

					//Reset chess move state
					setChessMoveToSubmitToGame({
						piece: '',
						pieceName: '',
						coord: '',
						readyToSubmit: false,
						pieceColor: chessGame.turn(),
					})

					if (chessGame.isGameOver()) {
						if (
							chessGame.isDraw() ||
							chessGame.isStalemate() ||
							chessGame.isThreefoldRepetition()
						) {
							window.alert('Game is a tie')
						} else {
							const winner = `winner is ${
								chessGame.turn() === 'b' ? 'white' : 'black'
							}`
							window.alert(winner)
						}
						setGlobalBoardPositions({
							...originalBoard,
						})
						chessGame.reset()
					}
				}
			} catch (error) {
				window.alert('invalid move you fool, try again.')
				//Reset chess move state
				setChessMoveToSubmitToGame({
					piece: '',
					pieceName: '',
					coord: '',
					readyToSubmit: false,
					pieceColor: chessMoveToSubmitToGame.pieceColor,
				})
				console.log(chessGame.ascii())
			}
			console.log(chessGame.ascii(), chessGame.history())
		}
	}, [chessMoveToSubmitToGame])

	// const testForValidMoveAndMovePiece = (): void => {
	// 	if (chessGame.move(proposedMove)) {
	// 		setDestinationSquare({ x: -3.5, z: 0.5 })
	// 		console.log(chessGame.ascii())
	// 	} else {
	// 		console.log('get fucked u cheating cunt')
	// 		console.log(chessGame.ascii())
	// 	}
	// }

	// while (!chessGame.isGameOver()) {
	// 	// Gets list of available moves
	// 	const moves = chessGame.moves()
	// 	console.log(moves)
	// 	const move = moves[Math.floor(Math.random() * moves.length)]
	// 	console.log(move)
	// 	chessGame.move(move)
	// }

	return <></>
}
