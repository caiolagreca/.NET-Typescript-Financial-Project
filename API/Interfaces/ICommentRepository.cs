using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Helpers;
using API.Models;

namespace API.Interfaces
{
    public interface ICommentRepository
    {
        public Task<List<Comment>> GetAllCommentAsync(CommentQueryObject queryObject);
        public Task<Comment?> GetCommentByIdAsync(int id);
        public Task<Comment> CreateCommentAsync(Comment commentModel);
        public Task<Comment?> UpdateCommentAsync(int id, Comment commentModel);
        public Task<Comment> DeleteCommentAsync(int id);
    }
}