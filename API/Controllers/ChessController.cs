using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChessController : ControllerBase
{
    private readonly ChessGame _chessGame;
    private readonly ChessDbContext _context;
    public ChessController(ChessGame newGame, ChessDbContext context)
    {
        _chessGame = newGame;
        _context = context;
    }
    
    [HttpPost("move")]
    public IActionResult MakeMove([FromBody] ChessGame.MoveRequest moveRequest)
    {
        try
        {
            if (_chessGame.CurrentChessGame.IsValidMove(moveRequest.San))
            {
                var move = new Move()
                {
                    San = moveRequest.San
                };
                _context.chessMoves.Add(move);
                _context.SaveChanges();

                _chessGame.CurrentChessGame.Move(moveRequest.San);
                return Ok(new { message = _chessGame.CurrentChessGame.ToPgn() });
            }
            else
            {
                return BadRequest("Invalid move");
            }
        }
        catch (Exception e)
        {
            // Log the exception details
            return StatusCode(500, "Internal server error");
        }
       
    }

    [HttpGet("RestartGame")]
    public IActionResult RestartGame()
    {
        _chessGame.CurrentChessGame.Clear();
        return Ok(new {message = "Game Restarted"});
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

    [HttpPost("DeclareDraw")]
    public IActionResult DeclareDraw()
    {
        _chessGame.CurrentChessGame.Draw();
        
        return Ok(_chessGame.CurrentChessGame.EndGame);
    }

}




