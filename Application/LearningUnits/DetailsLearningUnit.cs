using Domain;
using MediatR;
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
        public class Query : IRequest<LearningUnit>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, LearningUnit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<LearningUnit> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.LearningUnits.FindAsync(request.Id);
            }
        }
    }
}
