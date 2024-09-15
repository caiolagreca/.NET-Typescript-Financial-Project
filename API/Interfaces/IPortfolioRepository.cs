using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface IPortfolioRepository
    {
        public Task<List<Stock>> GetUserPortfolio(AppUser user);
        public Task<Portfolio> CreatePortfolioAsync(Portfolio portfolioModel);
        public Task<Portfolio> DeletePortfolioAsync(AppUser appUser, string symbol);

    }
}