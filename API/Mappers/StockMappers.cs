using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos.Stock;
using API.Models;

namespace API.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stockModel)
        {
            //Convertemos um objeto "Stock" (Model do banco de dados) para um objeto "StockDto" que é usado para retornar informações para ocliente, contendo somente os dados que queremos expor para o cliente.
            return new StockDto
            {
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDivd = stockModel.LastDivd,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap,
                Comments = stockModel.Comments.Select(x => x.ToCommentDto()).ToList()
            };
        }

        public static Stock ToStockFromCreateDto(this CreateStockRequestDto stockDto)
        {
            //Aqui convertemos um objeto "CreateStockRequestDto"(que contem os dados que o cliente enviou no POST) para um objeto "Stock"(Model que será salvo no banco de dados) persistindo esses dados.
            return new Stock
            {
                Symbol = stockDto.Symbol,
                CompanyName = stockDto.CompanyName,
                Purchase = stockDto.Purchase,
                LastDivd = stockDto.LastDivd,
                Industry = stockDto.Industry,
                MarketCap = stockDto.MarketCap
            };
        }

        public static Stock ToStockFromUpdateDto(this UpdateStockDto stockDto)
        {
            //Same logic as the "ToStockFromCreateDto" method
            return new Stock
            {
                Symbol = stockDto.Symbol,
                CompanyName = stockDto.CompanyName,
                Purchase = stockDto.Purchase,
                LastDivd = stockDto.LastDivd,
                Industry = stockDto.Industry,
                MarketCap = stockDto.MarketCap
            };
        }

    }
}