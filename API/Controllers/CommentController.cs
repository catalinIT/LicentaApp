using Application.Comments;
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
    public class CommentController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Comment>>> GetComments()
        {
            var result = await Mediator.Send(new ListComments.Query());
            return HandleResult(result);
        }

        //get all the commets associated with a learningUnit
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Comment>>> GetLearningUnit(Guid id)
        {
            var result = await Mediator.Send(new ListLearningUnitComments.Query { LearningUnitId = id });
            return HandleResult(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateComment(Comment comment)
        {
            return HandleResult(await Mediator.Send(new CreateComment.Command { Comment = comment }));
        }
    }
}
