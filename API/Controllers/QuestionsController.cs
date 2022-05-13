using Application.QuizQuestions;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [AllowAnonymous]
    public class QuestionsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<QuizQuestion>>> GetQuestions()
        {
            var result = await Mediator.Send(new ListQuizQuestions.Query());
            return HandleResult(result);
        }
    }
}
