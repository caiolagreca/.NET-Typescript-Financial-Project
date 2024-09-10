using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos.Comment
{
    public class UpdateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be over 5 characters")]
        [MaxLength(280, ErrorMessage = "Title can not be over 280 characters")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Content must be over 5 characters")]
        [MaxLength(280, ErrorMessage = "Content can not be over 280 characters")]
        public string Content { get; set; } = string.Empty;
    }
}