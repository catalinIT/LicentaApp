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

namespace Application.LearningUnits
{
    public class DetailsLearningUnit
    {
        public class Query : IRequest<Result<LearningUnit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<LearningUnit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<LearningUnit>> Handle(Query request, CancellationToken cancellationToken)
            {
                var learningUnit = await _context.LearningUnits
                    .Include(l => l.UnitContent)
                    .Include(l => l.Comments)
                    .FirstOrDefaultAsync(l => l.Id == request.Id);
                return Result<LearningUnit>.Success(learningUnit);
            }
        }
    }
}
