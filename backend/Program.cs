using ElectronicGadgets;
using ElectronicGadgets.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//var startup = new Startup(builder.Configuration);
//startup.ConfigureServices(builder.Services);

// Add services to the container.

builder.Services.AddControllers();

// Add services to the container.
builder.Services.AddDbContext<ProductContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("Product")));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(e => e.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.Run();






