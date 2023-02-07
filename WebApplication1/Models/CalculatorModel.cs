using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int groupProjects { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int midtermExam { get; set; }

        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int finalExam { get; set; }


        [Required]
        [Range(0, 100,
            ErrorMessage = "Value must be between 0 and 100")]
        public int intex { get; set; }
    }
}
