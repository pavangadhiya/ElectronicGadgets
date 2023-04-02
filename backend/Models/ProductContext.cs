using Microsoft.EntityFrameworkCore;

namespace ElectronicGadgets.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ItemInCart> Carts { get; set; }
    }
}
