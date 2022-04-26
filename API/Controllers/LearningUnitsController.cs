using Application.LearningUnits;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [AllowAnonymous]
    public class LearningUnitsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<LearningUnit>>> GetActivities()
        {
            var result = await Mediator.Send(new ListLearningUnits.Query());
            return HandleResult(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLearningUnit(Guid id)
        {
            var result = await Mediator.Send(new DetailsLearningUnit.Query { Id = id });
            return HandleResult(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, LearningUnit learningUnit)
        {
            learningUnit.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { LearningUnit = learningUnit }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteLearningUnit.Command { Id = id }));
        }
    }
}
