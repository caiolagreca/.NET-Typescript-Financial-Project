using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Stock;
using API.Models;

namespace API.Interfaces
{
    public interface IStockRepository
    {
        public Task<List<Stock>> GetAllStocksAsync();
        public Task<Stock?> GetStockByIdAsync(int id);
        public Task<Stock> CreateStockAsync(Stock stockModel);
        public Task<Stock?> UpdateStockAsync(int id, UpdateStockDto updateDto);
        public Task<Stock> DeleteStockAsync(int id);

    }
}