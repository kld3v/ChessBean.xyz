using System.ComponentModel.DataAnnotations;
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
    
    public class Move
    {
        [Key]
        public int Id { get; set; }
        public string San { get; set; }
    }
 
    public class MoveRequest
    {
        public string San { get; set; }
    }
}