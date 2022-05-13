using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.QuizQuestions
{
    public class ListQuizQuestions
    {
        public class Query : IRequest<Result<List<QuizQuestion>>> { }

        public class Handler : IRequestHandler<Query, Result<List<QuizQuestion>>>
        {
            private readonly DataContext _context;
            private static int NUM_QUESTIONS_PER_QUIZ = 5;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<QuizQuestion>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var quizQuestions = await _context.QuizQuestions
                    .Include(a => a.IncorrectAnswers)
                    .AsNoTracking()
                    .ToListAsync();

                var randomlySelectedQuestions = quizQuestions.OrderByDescending(a => Guid.NewGuid())
                                     .Take(NUM_QUESTIONS_PER_QUIZ)
                                     .ToList();

                return Result<List<QuizQuestion>>.Success(randomlySelectedQuestions);
            }
        }
    }
}
