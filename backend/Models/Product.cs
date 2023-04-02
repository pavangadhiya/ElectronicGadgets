namespace ElectronicGadgets.Models
{
    public class Product
    {
        public long Id { get; set; }
        public String ProductName { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public String ImgUrl { get; set; }
    }
}
