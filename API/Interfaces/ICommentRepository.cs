using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Interfaces
{
    public interface ICommentRepository
    {
        public Task<List<Comment>> GetAllCommentAsync();
        public Task<Comment?> GetCommentByIdAsync(int id);
        public Task<Comment> CreateCommentAsync(Comment commentModel);
        public Task<Comment> DeleteCommentAsync(int id);
    }
}