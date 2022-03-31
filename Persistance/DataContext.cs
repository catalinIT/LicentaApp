using Domain;
using Microsoft.EntityFrameworkCore;
using System;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<LearningUnit> LearningUnits { get; set; }
    }
}
