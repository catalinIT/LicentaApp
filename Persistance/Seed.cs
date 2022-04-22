﻿using Domain;
using Microsoft.AspNetCore.Identity;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Bob", UserName = "bob", Email = "bob@test.com"},
                    new AppUser{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},
                    new AppUser{DisplayName = "Jan", UserName = "jan", Email = "jan@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            if (context.LearningUnits.Any()) return;

            var learningUnits = new List<LearningUnit>
            {
                new LearningUnit
                {
                    Title = "Learning unit  1",
                    IsFavorite = false,
                },
                new LearningUnit
                {
                    Title = "Learning unit  2",
                    IsFavorite = false,
                },
                new LearningUnit
                {
                    Title = "Learning unit  3",
                    IsFavorite = false,
                },
                new LearningUnit
                {
                    Title = "Learning unit  4",
                    IsFavorite = true,
                },
                new LearningUnit
                {
                    Title = "Learning unit  5",
                    IsFavorite = false,
                },
                new LearningUnit
                {
                    Title = "Learning unit  6",
                    IsFavorite = true,
                },
                new LearningUnit
                {
                    Title = "Learning unit  7",
                    IsFavorite = true,
                },
                new LearningUnit
                {
                    Title = "Learning unit  8",
                    IsFavorite = false,
                },
                new LearningUnit
                {
                    Title = "Learning unit  8",
                    IsFavorite = false,
                },
            };

            await context.LearningUnits.AddRangeAsync(learningUnits);
            await context.SaveChangesAsync();
        }
    }
}
