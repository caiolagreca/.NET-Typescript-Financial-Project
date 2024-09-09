using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Stock>().HasMany(s => s.Comments).WithOne(c => c.Stock).HasForeignKey(c => c.StockId).OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);

        }

        public DbSet<Comment> Comments { get; set; }
        public DbSet<Stock> Stocks { get; set; }

    }
}