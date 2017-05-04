using Microsoft.EntityFrameworkCore;
using Test-project.components.inMemoryDB;

namespace Test-project.src.DotNet
{
    public class DbApiContext : DbContext
    {
         public DbApiContext(DbContextOptions<ApiContext> options)
            : base(options)
    {

    }
        public DbSet<Company> Companys { get; set;}
        public DbSet<Robot> Robots { get; set;}
    }
}