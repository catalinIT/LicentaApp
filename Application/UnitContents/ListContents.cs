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

namespace Application.UnitContents
{
    public class ListContents
    {
        public class Query : IRequest<Result<List<UnitContent>>> { }

        public class Handler : IRequestHandler<Query, Result<List<UnitContent>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<UnitContent>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var unitContents = await _context.UnitContents
                    .Include(c => c.LearningUnit)
                    .ToListAsync();
                return Result<List<UnitContent>>.Success(unitContents);
            }
        }
    }
}
