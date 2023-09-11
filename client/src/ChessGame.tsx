import { FC, useEffect, useState } from 'react'
import { Chess } from 'chess.js'

interface IChessGame {
	chessMoveToSubmitToGame: {
		piece: string
		coord: string
		readyToSubmit: boolean
	}
	setChessMoveToSubmitToGame: any
}
export const ChessGame: FC<IChessGame> = ({
	chessMoveToSubmitToGame,
	setChessMoveToSubmitToGame,
}) => {
	const [chessGame] = useState(new Chess())

	useEffect(() => {
		if (chessMoveToSubmitToGame.readyToSubmit) {
			try {
				let move = `${chessMoveToSubmitToGame.piece}${chessMoveToSubmitToGame.coord}`
				console.log(move)
				chessGame.move(move)
				console.log(chessGame.ascii())
				setChessMoveToSubmitToGame({ coord: '', readyToSubmit: false })
			} catch (error) {
				console.log('disallowed move you cunt')
				console.log(chessGame.ascii())
			}
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
