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
    public class DetailsUnitContent
    {
        public class Query : IRequest<Result<UnitContent>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<UnitContent>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<UnitContent>> Handle(Query request, CancellationToken cancellationToken)
            {
                var unitContent = await _context.UnitContents
                    .Include(c => c.LearningUnit)
                    .FirstOrDefaultAsync(c => c.Id == request.Id);
                return Result<UnitContent>.Success(unitContent);
            }
        }
    }
}
