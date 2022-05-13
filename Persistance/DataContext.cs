using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Persistance
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<LearningUnit> LearningUnits { get; set; }

        public DbSet<UnitContent> UnitContents { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<QuizQuestion> QuizQuestions { get; set; }
    }
}
