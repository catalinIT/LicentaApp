using Domain;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Application.Core;

namespace Application.LearningUnits
{
    public class ListLearningUnits
    {
        public class Query : IRequest<Result<List<LearningUnit>>> { }

        public class Handler : IRequestHandler<Query, Result<List<LearningUnit>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<LearningUnit>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<LearningUnit>>.Success(await _context.LearningUnits.ToListAsync());
            }
        }
    }
}
