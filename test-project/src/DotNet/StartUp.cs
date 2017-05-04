using Microsoft.EntityFrameworkCore;

namespace Test-project.src.DotNet
{
    public class StartUp
    {
        public void ConfigureServices(IServiceCollection services)
        {
        services.AddDbContext<ApiContext>(opt => opt.UseInMemoryDatabase());
 
        services.AddMvc();
        }   
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
        loggerFactory.AddConsole(Configuration.GetSection("Logging"));
        loggerFactory.AddDebug();
 
        var context = app.ApplicationServices.GetService<ApiContext>();
        AddTestData(context);
 
        app.UseMvc();
        }
        
        private static void AddTestData(ApiContext context)
        {
        var InroTech = new DbModels.Company
        {
        Name = "InroTech",
        Address = "Kratholmvej 36, 5260 Odense S, Denmark",
        Phone = "+45 6616 4100",
        ContactPerson = "Thomas Mørk",
        ContactPhone = "+45 6616 4100",
        ContactEmail = "info@inrotech.com"
        };
 
        context.Companys.Add(Inrotech);
 
        var testRobot = new DbModels.Robot
        {
        Id = "Robot!",
        Type = "ED-209", 
        SerielNumber = "010101",
        Ip = "192.0.0.101"
        };
 
        context.Robots.Add(InroTech);
 
        context.SaveChanges();
        }

    }
}