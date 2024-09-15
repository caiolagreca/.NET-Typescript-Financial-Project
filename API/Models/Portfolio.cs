using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("Portfolios")]
    public class Portfolio
    // Um usuário pode possuir múltiplos stocks, e um stock pode ser possuído por múltiplos usuários. Este tipo de relacionamento é melhor representado por uma Join Table
    {
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public int StockId { get; set; }
        public Stock? Stock { get; set; }

    }
}