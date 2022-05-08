using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Comment
    {
        public Guid Id { get; set; }
        public AppUser? User { get; set; }
        public Guid LearningUnitId { get; set; }
        public LearningUnit? LearningUnit { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
