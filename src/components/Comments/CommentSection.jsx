import React, { useState } from "react";
import { motion } from "framer-motion";
import Avatar from "../Avatar/Avatar";
import {
  FaThumbsUp,
  FaReply,
  FaLeaf,
  FaSeedling,
  FaImage,
} from "react-icons/fa";

const CommentSection = ({
  initialComments = [],
  currentUser = {
    id: "1",
    name: "John Farmer",
    avatar: "/path/to/avatar.jpg",
    expertise: "Organic Farming",
  },
}) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [attachedImage, setAttachedImage] = useState(null);

  const categories = [
    { id: "general", label: "General Discussion" },
    { id: "crop", label: "Crop Management" },
    { id: "soil", label: "Soil Health" },
    { id: "pest", label: "Pest Control" },
    { id: "tech", label: "Technology" },
    { id: "weather", label: "Weather Impact" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      user: currentUser,
      content: newComment,
      category: selectedCategory,
      timestamp: new Date(),
      likes: 0,
      replies: [],
      image: attachedImage,
      tags: extractTags(newComment),
      isVerified: currentUser.expertise ? true : false,
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setAttachedImage(null);
  };

  const extractTags = (content) => {
    const tagRegex = /#(\w+)/g;
    return content.match(tagRegex) || [];
  };

  const handleImageAttach = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex items-start gap-4">
          <Avatar
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your farming experience or ask for advice..."
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              rows="3"
            />

            {/* Category Selection */}
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Image Preview */}
            {attachedImage && (
              <div className="mt-2 relative">
                <img
                  src={attachedImage}
                  alt="Attached"
                  className="w-32 h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => setAttachedImage(null)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-2">
                <label className="cursor-pointer text-green-600 hover:text-green-700">
                  <FaImage className="inline mr-1" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageAttach}
                    className="hidden"
                  />
                  Add Image
                </label>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <Avatar
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{comment.user.name}</h4>
                  {comment.isVerified && (
                    <span className="text-green-500">
                      <FaSeedling className="inline" />
                    </span>
                  )}
                  <span className="text-sm text-gray-500">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </span>
                </div>

                <div className="mt-2">
                  <p className="text-gray-700">{comment.content}</p>
                  {comment.image && (
                    <img
                      src={comment.image}
                      alt="Comment attachment"
                      className="mt-2 max-w-xs rounded"
                    />
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {comment.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-green-600">
                    <FaThumbsUp /> {comment.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-600">
                    <FaReply /> Reply
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
