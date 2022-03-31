using Domain;
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
        private readonly DataContext _context;
        public LearningUnitsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<LearningUnit>>> GetActivities()
        {
            return await _context.LearningUnits.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LearningUnit>> GetActivity(Guid id)
        {
            return await _context.LearningUnits.FindAsync(id);
        }
    }
}
