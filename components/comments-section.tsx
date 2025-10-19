"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle } from "lucide-react"

interface Comment {
  id: string
  author: string
  email: string
  text: string
  date: string
  likes: number
  replies: Comment[]
}

export default function CommentsSection({ postTitle }: { postTitle: string }) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: "Sarah Chen",
      email: "sarah@example.com",
      text: "This is such a helpful explanation! I finally understand how attention mechanisms work. Thank you so much for breaking it down!",
      date: "2 hours ago",
      likes: 5,
      replies: [
        {
          id: "1-1",
          author: "Kritika Parmar",
          email: "kritika@example.com",
          text: "So glad it helped, Sarah! Feel free to reach out if you have more questions.",
          date: "1 hour ago",
          likes: 2,
          replies: [],
        },
      ],
    },
    {
      id: "2",
      author: "Alex Johnson",
      email: "alex@example.com",
      text: "Great insights on transformer architecture! I'm implementing this in my project right now.",
      date: "5 hours ago",
      likes: 8,
      replies: [],
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [newCommentAuthor, setNewCommentAuthor] = useState("")
  const [newCommentEmail, setNewCommentEmail] = useState("")
  const [expandedReplies, setExpandedReplies] = useState<string[]>([])

  const addComment = () => {
    if (newComment.trim() && newCommentAuthor.trim() && newCommentEmail.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newCommentAuthor,
        email: newCommentEmail,
        text: newComment,
        date: "just now",
        likes: 0,
        replies: [],
      }
      setComments([comment, ...comments])
      setNewComment("")
      setNewCommentAuthor("")
      setNewCommentEmail("")
    }
  }

  const toggleReplies = (commentId: string) => {
    setExpandedReplies((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? "ml-4 md:ml-8 border-l-2 border-pink-200 pl-4" : ""}`}>
      <div className="bg-white/50 rounded-2xl p-4 md:p-6 border border-pink-100 hover:border-pink-200 transition-all">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-semibold text-gray-800">{comment.author}</p>
            <p className="text-sm text-gray-500">{comment.date}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-3">{comment.text}</p>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{comment.likes}</span>
          </button>
          {comment.replies.length > 0 && (
            <button
              onClick={() => toggleReplies(comment.id)}
              className="flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              {expandedReplies.includes(comment.id) ? "Hide" : "Show"} {comment.replies.length} repl
              {comment.replies.length !== 1 ? "ies" : "y"}
            </button>
          )}
        </div>
      </div>

      {expandedReplies.includes(comment.id) && comment.replies.length > 0 && (
        <div className="mt-4 space-y-4">{comment.replies.map((reply) => renderComment(reply, true))}</div>
      )}
    </div>
  )

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Comments & Discussion</h3>
        <p className="text-gray-600">
          {comments.length} {comments.length === 1 ? "comment" : "comments"} • Join the conversation!
        </p>
      </div>

      <div className="bg-white/70 rounded-2xl p-6 mb-8 border border-pink-100">
        <h4 className="font-semibold text-gray-800 mb-4">Leave a comment</h4>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your name"
              value={newCommentAuthor}
              onChange={(e) => setNewCommentAuthor(e.target.value)}
              className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={newCommentEmail}
              onChange={(e) => setNewCommentEmail(e.target.value)}
              className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200"
            />
          </div>

          <textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none"
          />

          <Button onClick={addComment} className="bg-pink-500 hover:bg-pink-600 rounded-lg w-full md:w-auto">
            Post Comment
          </Button>
        </div>
      </div>

      <div className="space-y-4">{comments.map((comment) => renderComment(comment))}</div>
    </div>
  )
}
