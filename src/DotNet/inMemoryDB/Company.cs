using System.Collections.Generic;

namespace Test-project.src.DotNet.inMemoryDB
{
    public class Company
    {
        public string Name { get; set;}
        public string Address { get; set;}
        public string Phone { get; set;}
        public string ContactPerson { get; set;}
        public string ContactPhone { get; set;}
        public string ContactEmail { get; set;}
        public List<Robot> Robots { get; set;}


    }
}