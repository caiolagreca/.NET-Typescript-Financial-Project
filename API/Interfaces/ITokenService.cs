using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface ITokenService
    {
        public string createToken(AppUser appUser);
    }
}