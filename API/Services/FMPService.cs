using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using API.Interfaces;
using API.Models;
using Newtonsoft.Json;

namespace API.Services
{
    public class FMPService(HttpClient httpClient, IConfiguration config) : IFMPService
    {
        private readonly HttpClient _httpClient = httpClient;
        private readonly IConfiguration _config = config;
        public async Task<Stock> FindStockBySymbol(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync($"https://financialmodelingprep.com/api/v3/search?query={symbol}&apikey={_config["FMPKey"]}");
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
                    var stock = tasks[0];
                    if (stock != null) {
                        return stock.
                    }

                }
            }
            catch (Exception e)
            {

                throw;
            }
        }
    }
}