﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class UnitContent
    {
        public UnitContent()
        {
        }

        public UnitContent(UnitContent _unitContent)
        {
            LearningUnitId = _unitContent.LearningUnitId;
            Id = _unitContent.Id;
            Headline = _unitContent.Headline;
            Content = _unitContent.Content;
            Category = _unitContent.Category;
            LearningUnit = new LearningUnit(_unitContent.LearningUnit);
        }

        [ForeignKey("LearningUnit")]
        public Guid LearningUnitId { get; set; }
        public Guid Id { get; set; }
        public string Headline { get; set; }
        public  string Content { get; set; }
        public ContentCategory Category { get; set; }
        public LearningUnit LearningUnit { get; set; }
    }
}
