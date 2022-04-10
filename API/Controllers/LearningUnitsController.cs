using Application.LearningUnits;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class LearningUnitsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<LearningUnit>>> GetActivities()
        {
            return await Mediator.Send(new ListLearningUnits.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LearningUnit>> GetLearningUnit(Guid id)
        {
            return await Mediator.Send(new DetailsLearningUnit.Query { Id = id });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteLearningUnit.Command { Id = id }));
        }
    }
}
