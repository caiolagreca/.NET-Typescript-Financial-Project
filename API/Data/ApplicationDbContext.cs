using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Stock>().HasMany(s => s.Comments).WithOne(c => c.Stock).HasForeignKey(c => c.StockId).OnDelete(DeleteBehavior.Cascade);

            //A combinação dos campos StockId e AppUserId será usada como a chave primária da tabela Portfolios.
            builder.Entity<Portfolio>(x => x.HasKey(p => new { p.StockId, p.AppUserId }));

            builder.Entity<Portfolio>().HasOne(x => x.Stock).WithMany(x => x.Portfolios).HasForeignKey(x => x.StockId);
            builder.Entity<Portfolio>().HasOne(x => x.AppUser).WithMany(x => x.Portfolios).HasForeignKey(x => x.AppUserId);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole{
                    Name = "user",
                    NormalizedName = "USER" 
                },
                new IdentityRole{
                    Name = "admin",
                    NormalizedName = "ADMIN"
                }
            };

            builder.Entity<IdentityRole>().HasData(roles);

            base.OnModelCreating(builder);

        }

        public DbSet<Comment> Comments { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }

    }
}