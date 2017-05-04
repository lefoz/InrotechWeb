using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
 
namespace Test-project.src.DotNet.Controllers
{
    [Route("api/[controller]")]
    public class CompanyController : Controller
    {
        private readonly ApiContext _context;
 
        public CompanyController(ApiContext context)
        {
            _context = context;
        }
 
        public async Task<IActionResult> Get()
        {
            var Companys = await _context.Companys
                .Include(c => c.Robots)
                .ToArrayAsync();
 
            var response = Companys.Select(c => new
            {
                Name = c.Name,
                robots = u.Robots.Select(r => r.Content)
            });
 
            return Ok(response);
        }
    }
}