using Domain;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Application.LearningUnits
{
    public class ListLearningUnits
    {
        public class Query : IRequest<List<LearningUnit>> { }

        public class Handler : IRequestHandler<Query, List<LearningUnit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<LearningUnit>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LearningUnits.ToListAsync();
            }
        }
    }
}
