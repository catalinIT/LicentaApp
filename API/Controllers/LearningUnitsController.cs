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
    }
}
