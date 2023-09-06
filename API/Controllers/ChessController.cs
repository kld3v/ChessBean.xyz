using Chess;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChessController : ControllerBase
{
    private readonly ChessGame _chessGame;
    public ChessController(ChessGame newGame)
    {
        _chessGame = newGame;
    }
    
    [HttpPost("move")]
    public IActionResult MakeMove([FromBody] MoveRequest moveRequest)
    {
        if (_chessGame.CurrentChessGame.IsValidMove(moveRequest.San))
        {
            _chessGame.CurrentChessGame.Move(moveRequest.San);
            return Ok(new { message = _chessGame.CurrentChessGame.ToPgn() });
        }
        {
            return BadRequest(error: "invalid");
        }
       
    }

    [HttpGet("StartNewGame")]
    public IActionResult StartNewGame()
    {
        _chessGame.CurrentChessGame.Clear();
        return Ok(new {message = "Game Started"});
    }

    [HttpGet("Pgn")]
    public IActionResult GetPgn()
    {
        return Ok(_chessGame.CurrentChessGame.ToPgn());
    }
    
    [HttpGet("Ascii")]
    public IActionResult GetAscii()
    {
        return Ok(_chessGame.CurrentChessGame.ToAscii());
    }
    
    [HttpGet("GetPiecePosition")]
    public IActionResult GetPiecePosition()
    {
        return Ok(_chessGame.CurrentChessGame[0,0]);
    }

    [HttpGet("GetCapturedWhite")]
    public IActionResult GetCapturedWhite()
    {
        return Ok(_chessGame.CurrentChessGame.CapturedWhite);
    }
    
    [HttpGet("GetCapturedBlack")]
    public IActionResult GetCapturedBlack()
    {
        return Ok(_chessGame.CurrentChessGame.CapturedBlack);
    }

    [HttpPost("Draw")]
    public IActionResult DeclareDraw()
    {
        _chessGame.CurrentChessGame.Draw();
        
        return Ok(_chessGame.CurrentChessGame.EndGame);
    }

}

public class MoveRequest
{
    public string San { get; set; }
}


