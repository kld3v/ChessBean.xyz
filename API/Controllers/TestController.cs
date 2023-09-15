using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/test")]
public class TestController:ControllerBase
{
    private readonly ChessDbContext _context;

    public TestController(ChessDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult TestDbConnection()
    {
        try
        {

            var moves = _context.chessMoves.FirstOrDefault();
            return Ok($"DB connected");
        }
        catch (Exception e)
        {
            return BadRequest($"DB connection fucked: {e.Message}");
        }
    }

}