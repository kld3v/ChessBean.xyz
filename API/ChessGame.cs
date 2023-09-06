using Chess;

namespace API;

public class ChessGame
{
    public ChessBoard CurrentChessGame;
    
    public ChessGame()
    {
        StartChessGame();
    }

    private void StartChessGame()
    {
        CurrentChessGame = new ChessBoard();
    }
    
    public class MoveRequest
    {
        public string San { get; set; } 
    }

}