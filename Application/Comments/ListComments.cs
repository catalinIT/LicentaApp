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

namespace Application.Comments
{
    public class ListComments
    {
        public class Query : IRequest<Result<List<Comment>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Comment>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Comment>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var comments = await _context.Comments
                    .Include(c => c.LearningUnit)
                    .Include(c => c.User)
                    .ToListAsync();

                return Result<List<Comment>>.Success(comments);
            }
        }
    }
}
