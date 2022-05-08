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
    public class CreateComment
    {
        // fundamental difference between Queries and Commands:
        // queries return data, commands do not
        // the mediator unit that gets returned underlines the fact that we do not actually return anything
        public class Command : IRequest<Result<Unit>>
        {
            // prop that represents what we want to receive from our API
            public Comment Comment { get; set; }
        }
        // the same return type gets adjusted for our handler clas
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            // inject data context into our handler in order to persist the database changes
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // ef is simpy tracking the fact that we add a new activity in memory
                var user = _context.Users.First(l => l.UserName == request.Comment.User.UserName);
                var learningUnit = _context.LearningUnits.First(l => l.Id == request.Comment.LearningUnitId);
                _context.Comments.Add(new Comment
                {
                    LearningUnitId = request.Comment.LearningUnitId,
                    Content = request.Comment.Content,
                    CreatedAt = DateTime.Now,
                    LearningUnit = learningUnit,
                    User = user,
                });

                // check the result of the data saving operation
                // the method returns the number of entities that has been just written to the db 
                // comparing that to 0 signalizes if the post request actually executed successfully
                var result = await _context.SaveChangesAsync() > 0;
                if (!result)
                {
                    return Result<Unit>.Failure("Failed to create activity");
                }
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
