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

        public LearningUnit(LearningUnit _learningUnit)
        {
            Id = _learningUnit.Id;
            Title = _learningUnit.Title;
            IsFavorite = _learningUnit.IsFavorite;
            UnitContent = new UnitContent(_learningUnit.UnitContent);
        }

        public Guid Id { get; set; }

        public string Title { get; set; }

        public bool IsFavorite { get; set; }
        public UnitContent UnitContent { get; set; }
    }
}
