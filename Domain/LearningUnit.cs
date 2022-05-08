using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class LearningUnit
    {
        public LearningUnit()
        {
        }

        public Guid Id { get; set; }

        public string Title { get; set; }

        public bool IsFavorite { get; set; }
        public UnitContent UnitContent { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
