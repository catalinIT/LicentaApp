using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    // insie this class we need to story only 2 properties (the required information we need from our user in order to let them log in)
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
