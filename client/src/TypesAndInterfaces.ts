export type IChessMoveToSubmitToGame = {
	piece: string
	pieceName: string
	coord: string
	readyToSubmit: boolean
	pieceColor: string
}

export type ISetChessMoveToSubmitToGame = React.Dispatch<
	React.SetStateAction<{
		piece: string
		pieceName: string
		coord: string
		readyToSubmit: boolean
		pieceColor: string
	}>
>

export type IGlobalBoardPositions = {
	[key: string]: number[]
}

export type ISquareToPositionMap = { [key: string]: number[] }
