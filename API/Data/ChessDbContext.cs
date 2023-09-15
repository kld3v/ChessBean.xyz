using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class ChessDbContext : DbContext
{

    public ChessDbContext(DbContextOptions<ChessDbContext> options) : base(options){}
   
    public DbSet<Move> chessMoves { get; set; }

}

public class Move
{
    [Key]
    public int Id { get; set; }
    public string San { get; set; }
}