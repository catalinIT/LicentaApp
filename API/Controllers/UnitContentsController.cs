using Application.LearningUnits;
using Application.UnitContents;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [AllowAnonymous]
    public class UnitContentsController : BaseApiController
    {
        private readonly IMediator _mediator;

        public UnitContentsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<UnitContent>>> GetContents()
        {
            var a = await _mediator.Send(new ListContents.Query());
            var result = await Mediator.Send(new ListLearningUnits.Query());
            return a;
        }
    }
}
