using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
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
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public LearningUnit LearningUnit { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.LearningUnit).SetValidator(new LearningUnitValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.LearningUnits.FindAsync(request.LearningUnit.Id);

                if (activity == null)
                {
                    return null;
                }
                _mapper.Map(request.LearningUnit, activity);

                var result = await _context.SaveChangesAsync() > 0;
                if(!result)
                {
                    return Result<Unit>.Failure("Failed to update an activity");
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
