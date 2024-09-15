using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Stock;
using API.Helpers;
using API.Models;

namespace API.Interfaces
{
    public interface IStockRepository
    {
        public Task<List<Stock>> GetAllStocksAsync(ObjectQuery query);
        public Task<Stock?> GetStockByIdAsync(int id);
        public Task<Stock?> GetStockBySymbolAsync(string symbol);
        public Task<Stock> CreateStockAsync(Stock stockModel);
        public Task<Stock?> UpdateStockAsync(int id, Stock updateModel);
        public Task<Stock> DeleteStockAsync(int id);
        public Task<bool> StockExists(int id);

    }
}