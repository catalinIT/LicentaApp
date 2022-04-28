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
        public class Query : IRequest<List<UnitContent>> { }

        public class Handler : IRequestHandler<Query, List<UnitContent>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<UnitContent>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.UnitContents.ToListAsync();
            }
        }
    }
}
