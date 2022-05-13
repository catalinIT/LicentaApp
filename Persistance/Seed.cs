using Domain;
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

            if (!context.Comments.Any())
            {
                var comments = new List<Comment>
                {
                   new Comment
                   {
                       LearningUnitId = new Guid("159e429e-99c0-4eeb-93c4-5ef214066779"),
                       Content = "Nice job bro!",
                       CreatedAt = DateTime.Today,
                       User = new AppUser{DisplayName = "Bobita", UserName = "bobini", Email = "bobe@test.com"},
                   },
                   new Comment
                   {
                       LearningUnitId = new Guid("ed3165c0-9f0c-4f2e-9165-c05c36ea9eb8"),
                       Content = "Se putea mai bine!",
                       CreatedAt = new DateTime(2008, 6, 11),
                       User = new AppUser{DisplayName = "Bobita1", UserName = "bobini1", Email = "bobe1@test.com"},
                   },
                   new Comment
                   {
                       LearningUnitId = new Guid("be7fac16-80ed-4754-9605-f927f9868043"),
                       Content = "Hai ca da!",
                       CreatedAt = new DateTime(2006, 5, 12),
                       User = new AppUser{DisplayName = "Bobita2", UserName = "bobini2", Email = "bobe2@test.com"},
                   },

                };
                await context.Comments.AddRangeAsync(comments);
                await context.SaveChangesAsync();
            }

            if (!context.LearningUnits.Any())
            {
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

            if (!context.UnitContents.Any())
            {
                var unitContents = new List<UnitContent>
               {
                new UnitContent
                {
                    LearningUnitId = new Guid("159e429e-99c0-4eeb-93c4-5ef214066779"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,

                },
                new UnitContent
                {
                    LearningUnitId = new Guid("972cf8e7-46de-40ca-9371-6b88cf3d2476"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },
                new UnitContent
                {
                    LearningUnitId = new Guid("2f54ca96-eb36-47df-a2db-eabaf6ff2d0a"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },
                new UnitContent
                {
                    LearningUnitId = new Guid("ed3165c0-9f0c-4f2e-9165-c05c36ea9eb8"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },
                new UnitContent
                {
                    LearningUnitId = new Guid("d6d64b49-0301-431b-9ce8-332651e3eb65"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },
                new UnitContent
                {
                    LearningUnitId = new Guid("70e286a6-fbaf-44cc-914a-e99bf216ed09"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },
                new UnitContent
                {
                    LearningUnitId = new Guid("be7fac16-80ed-4754-9605-f927f9868043"),
                    Headline = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i",
                    Content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    Category = ContentCategory.DeceptiveAttitude,
                },

              };
                await context.UnitContents.AddRangeAsync(unitContents);
                await context.SaveChangesAsync();
            }
            if (!context.QuizQuestions.Any())
            {
                var quizQuestions = new List<QuizQuestion>
                {
                    new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "1984",
                        Question = "Name a book written by George Orwell",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "1983"},
                            new IncorrectAnswer { Answer = "1978"},
                            new IncorrectAnswer { Answer = "1987"}
                        }
                    },
                     new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Medium,
                        CorrectAnswer = "Uruguay",
                        Question = "What country won the very first FIFA World Cup in 1930?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Brazil"},
                            new IncorrectAnswer { Answer = "Romania"},
                            new IncorrectAnswer { Answer = "Ireland"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Hard,
                        CorrectAnswer = "Venus",
                        Question = "Which planet is the hottest in the solar system?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Mars"},
                            new IncorrectAnswer { Answer = "Pluto"},
                            new IncorrectAnswer { Answer = "Jupyter"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Hard,
                        CorrectAnswer = "Bavarian Motor Works",
                        Question = "What does BMW stand for (in English)?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Bine ma woody"},
                            new IncorrectAnswer { Answer = "Bergamez manager walloo"},
                            new IncorrectAnswer { Answer = "Barre, mere were"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Spice Girls",
                        Question = "Which British girl group had a member by the name of Mel B?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Little mix"},
                            new IncorrectAnswer { Answer = "Pussycat Dolls"},
                            new IncorrectAnswer { Answer = "Andre"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Marie Curie",
                        Question = "Who was the first woman to win a Nobel Prize (1903)?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Angelina Jolie"},
                            new IncorrectAnswer { Answer = "Zara Larsoon"},
                            new IncorrectAnswer { Answer = "Andreea Marin"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Classical",
                        Question = "What type of music has been shown to help plants grow better and faster?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Rap"},
                            new IncorrectAnswer { Answer = "Hip-Hop"},
                            new IncorrectAnswer { Answer = "Pop funky"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Berlin",
                        Question = "Ludwig Van Beethoven was born in 1770 in which city?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Constanta"},
                            new IncorrectAnswer { Answer = "Mangalia"},
                            new IncorrectAnswer { Answer = "Bacau"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Berlin",
                        Question = "Ludwig Van Beethoven was born in 1770 in which city?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Constanta"},
                            new IncorrectAnswer { Answer = "Mangalia"},
                            new IncorrectAnswer { Answer = "Bacau"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Cancer",
                        Question = "Which horoscope sign has a crab?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Leo"},
                            new IncorrectAnswer { Answer = "Spirancha"},
                            new IncorrectAnswer { Answer = "Virgo"}
                        }
                    },
                      new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Zero",
                        Question = "How many children does Oprah Winfrey have?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Three"},
                            new IncorrectAnswer { Answer = "Two"},
                            new IncorrectAnswer { Answer = "All of them"}
                        }
                    },
                       new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "A bishop",
                        Question = "Which chess piece can only move diagonally?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Horse"},
                            new IncorrectAnswer { Answer = "King"},
                            new IncorrectAnswer { Answer = "Queen"}
                        }
                    },
                        new QuizQuestion
                    {
                        Difficulty = QuestionDifficulty.Easy,
                        CorrectAnswer = "Mexico",
                        Question = "Which country was the Caesar salad invented in?",
                        IncorrectAnswers = new List<IncorrectAnswer>
                        {
                            new IncorrectAnswer { Answer = "Romania"},
                            new IncorrectAnswer { Answer = "Canada"},
                            new IncorrectAnswer { Answer = "Italy"}
                        }
                    },
                };
                await context.QuizQuestions.AddRangeAsync(quizQuestions);
                await context.SaveChangesAsync();
            }
        }
    }
}
