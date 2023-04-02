namespace ElectronicGadgets
{
    public class Startup
    {
        public IConfiguration configRoot
        {
            get;
        }
        public Startup(IConfiguration configuration)
        {
            configRoot = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            // Other service configurations
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Other middleware configurations

            app.UseCors();

            // Other middleware configurations
        }
    }
}
