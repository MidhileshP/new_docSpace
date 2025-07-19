import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User, Clock, MoreHorizontal } from 'lucide-react';

const CommentSystem = ({ isVisible, onClose, position, comments, onAddComment, onResolveComment }) => {
  const [newComment, setNewComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const commentRef = useRef(null);

  useEffect(() => {
    if (isVisible && commentRef.current) {
      commentRef.current.focus();
    }
  }, [isVisible]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment('');
      setIsExpanded(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="absolute bg-white rounded-lg shadow-2xl border border-stone-200 w-80 z-50"
      style={{ 
        left: position.x, 
        top: position.y,
        maxHeight: '400px'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-stone-100">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-stone-600" />
          <span className="font-medium text-stone-800">Comments</span>
          {comments.length > 0 && (
            <span className="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-full">
              {comments.length}
            </span>
          )}
        </div>
        <button 
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Comments List */}
      <div className="max-h-60 overflow-y-auto">
        {comments.length === 0 ? (
          <div className="p-4 text-center text-stone-500">
            <MessageCircle className="w-8 h-8 mx-auto mb-2 text-stone-300" />
            <p className="text-sm">No comments yet. Start the conversation!</p>
          </div>
        ) : (
          <div className="space-y-3 p-4">
            {comments.map((comment) => (
              <div key={comment.id} className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-stone-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-stone-800 text-sm">{comment.author}</span>
                      <span className="text-xs text-stone-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-stone-700 mt-1">{comment.text}</p>
                    {comment.resolved && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                        Resolved
                      </span>
                    )}
                  </div>
                  <button className="text-stone-400 hover:text-stone-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                {!comment.resolved && (
                  <button 
                    onClick={() => onResolveComment(comment.id)}
                    className="text-xs text-stone-500 hover:text-stone-700 ml-11"
                  >
                    Mark as resolved
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Comment Form */}
      <div className="border-t border-stone-100 p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <textarea
              ref={commentRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="Add a comment..."
              className="w-full p-3 border border-stone-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent text-sm"
              rows={isExpanded ? 3 : 1}
            />
          </div>
          {isExpanded && (
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                  setNewComment('');
                }}
                className="text-sm text-stone-500 hover:text-stone-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Comment</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CommentSystem;