import {
	IChessMoveToSubmitToGame,
	IGlobalBoardPositions,
	ISquareToPositionMap,
} from './TypesAndInterfaces'
export const handleWorldPieceCaptureLogic = (
	chessMoveToSubmitToGame: IChessMoveToSubmitToGame,
	globalBoardPositions: IGlobalBoardPositions,
	squareToPositionMap: ISquareToPositionMap,
	offBoardChessPositionBlack: number,
	setOffBoardChessPositionBlack: React.Dispatch<React.SetStateAction<number>>,
	offBoardChessPositionWhite: number,
	setOffBoardChessPositionWhite: React.Dispatch<React.SetStateAction<number>>
): void => {
	// Handle piece taking
	// -> check to see if a piece exits at the target coord.
	// -> if so remove that piece
	const targetCoordinate = chessMoveToSubmitToGame.coord
	console.log(targetCoordinate)
	const targetCoordinateWorldPosition = squareToPositionMap[targetCoordinate]
	console.log(targetCoordinateWorldPosition, 'world pos')
	let pieceToRemove = ''
	for (const piece in globalBoardPositions) {
		if (globalBoardPositions[piece] === targetCoordinateWorldPosition) {
			pieceToRemove = piece
			break
		}
	}
	console.log(pieceToRemove)
	if (pieceToRemove !== '') {
		if (chessMoveToSubmitToGame.pieceColor === 'b') {
			globalBoardPositions[pieceToRemove] = [
				-3.755,
				-1.773 + 3.5 - offBoardChessPositionBlack,
			]
			setOffBoardChessPositionBlack(offBoardChessPositionBlack + 0.5)
		} else {
			globalBoardPositions[pieceToRemove] = [
				3.755,
				-1.773 + 3.5 - offBoardChessPositionWhite,
			]
			setOffBoardChessPositionWhite(offBoardChessPositionWhite + 0.5)
		}
	}
}

//TODO #3
export const handleEnPassant = () => {}
