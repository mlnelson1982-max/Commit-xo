import React, { useState } from 'react';

function SocialFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah M.',
      avatar: '👩',
      timestamp: '2 hours ago',
      content: 'Just hit my 30-day streak! Never thought I could be this consistent. Commit+ changed everything.',
      image: null,
      likes: 24,
      comments: 5,
      liked: false,
      encouragementOptions: ['Amazing!', 'You got this!', 'So proud of you!', 'Keep it up!']
    },
    {
      id: 2,
      author: 'James K.',
      avatar: '👨',
      timestamp: '4 hours ago',
      content: 'Shared a progress photo. Down 12 lbs and feeling stronger than ever.',
      image: '📸',
      likes: 42,
      comments: 8,
      liked: false,
      encouragementOptions: ['Incredible!', 'You inspire me!', 'Keep pushing!', 'Legendary!']
    },
    {
      id: 3,
      author: 'Maria L.',
      avatar: '👩‍🦱',
      timestamp: '6 hours ago',
      content: 'Completed my 45-day streak today. The daily structure removed all the guesswork. No more overthinking—just doing.',
      image: null,
      likes: 38,
      comments: 12,
      liked: false,
      encouragementOptions: ['Incredible!', 'You\'re unstoppable!', 'So inspiring!', 'Crushing it!']
    },
    {
      id: 4,
      author: 'Alex T.',
      avatar: '👨‍🦱',
      timestamp: '8 hours ago',
      content: 'Learning about inflammation today made me understand why I feel so much better on this plan. Knowledge is power.',
      image: null,
      likes: 19,
      comments: 3,
      liked: false,
      encouragementOptions: ['Well said!', 'Great insight!', 'Love this!', 'Truth!']
    }
  ]);

  const toggleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } : post
    ));
  };

  const addEncouragement = (id, encouragement) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, comments: post.comments + 1 } : post
    ));
    // In a real app, this would save to the database
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Community Feed</h1>
          <p className="text-gray-400">Encouragement over embarrassment. Celebrate with your community.</p>
        </div>

        {/* Create Post Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-xl flex-shrink-0">
              👤
            </div>
            <div className="flex-1">
              <textarea
                placeholder="Share your progress, wins, or what you learned today..."
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition resize-none"
                rows="3"
              ></textarea>
              <div className="flex justify-end gap-2 mt-3">
                <button className="px-4 py-2 text-gray-300 hover:text-white transition">
                  📸 Photo
                </button>
                <button className="px-6 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-300 transition">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-lg">
                    {post.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white">⋯</button>
              </div>

              {/* Post Content */}
              <p className="text-gray-200 mb-4">{post.content}</p>

              {/* Post Image */}
              {post.image && (
                <div className="w-full bg-slate-700 rounded-lg p-8 text-center text-4xl mb-4">
                  {post.image}
                </div>
              )}

              {/* Engagement Buttons */}
              <div className="flex gap-4 mb-4 pb-4 border-b border-slate-700">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 transition ${
                    post.liked ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                  }`}
                >
                  <span className="text-xl">{post.liked ? '❤️' : '🤍'}</span>
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition">
                  <span className="text-xl">💬</span>
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition">
                  <span className="text-xl">↗️</span>
                  <span className="text-sm">Share</span>
                </button>
              </div>

              {/* Encouragement Options */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 mb-2">Quick encouragement:</p>
                <div className="grid grid-cols-2 gap-2">
                  {post.encouragementOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => addEncouragement(post.id, option)}
                      className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-gray-300 hover:text-white transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Values */}
        <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Our Community Values</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">No Toxic Comparison</p>
                <p className="text-sm text-gray-400">We celebrate all progress, regardless of pace.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Encouragement Over Judgment</p>
                <p className="text-sm text-gray-400">Only positive, supportive interactions allowed.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-white">Accountability Without Shame</p>
                <p className="text-sm text-gray-400">We're here to lift each other up, not tear down.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialFeed;
