using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class QuizQuestion
    {
        public Guid Id { get; set; }
        public QuestionDifficulty Difficulty { get; set; }
        public string CorrectAnswer { get; set; }
        public string Question { get; set; }
        public List<IncorrectAnswer> IncorrectAnswers { get; set; }
    }
}
