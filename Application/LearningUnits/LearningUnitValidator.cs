using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.LearningUnits
{
    class LearningUnitValidator : AbstractValidator<LearningUnit>
    {
        public LearningUnitValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
        }
    }
}
