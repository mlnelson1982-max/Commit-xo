import React, { useState } from 'react';

function Leaderboard() {
  const [timeframe, setTimeframe] = useState('month');
  const [leaderboardData] = useState({
    month: [
      { rank: 1, name: 'Alex T.', streak: 45, completion: 98, engagement: 156, avatar: '👨‍🦱' },
      { rank: 2, name: 'Maria L.', streak: 42, completion: 96, engagement: 142, avatar: '👩‍🦱' },
      { rank: 3, name: 'You', streak: 12, completion: 94, engagement: 87, avatar: '👤', isYou: true },
      { rank: 4, name: 'Sarah M.', streak: 30, completion: 92, engagement: 134, avatar: '👩' },
      { rank: 5, name: 'James K.', streak: 28, completion: 89, engagement: 121, avatar: '👨' },
      { rank: 6, name: 'Lisa R.', streak: 25, completion: 88, engagement: 115, avatar: '👩' },
      { rank: 7, name: 'David P.', streak: 22, completion: 85, engagement: 98, avatar: '👨' },
      { rank: 8, name: 'Emma W.', streak: 18, completion: 82, engagement: 76, avatar: '👩' },
      { rank: 9, name: 'Chris M.', streak: 15, completion: 80, engagement: 65, avatar: '👨' },
      { rank: 10, name: 'Nina K.', streak: 12, completion: 78, engagement: 54, avatar: '👩' }
    ],
    week: [
      { rank: 1, name: 'Maria L.', streak: 7, completion: 100, engagement: 34, avatar: '👩‍🦱' },
      { rank: 2, name: 'You', streak: 7, completion: 100, engagement: 28, avatar: '👤', isYou: true },
      { rank: 3, name: 'Alex T.', streak: 7, completion: 99, engagement: 31, avatar: '👨‍🦱' },
      { rank: 4, name: 'Sarah M.', streak: 7, completion: 98, engagement: 25, avatar: '👩' },
      { rank: 5, name: 'James K.', streak: 6, completion: 95, engagement: 22, avatar: '👨' }
    ],
    allTime: [
      { rank: 1, name: 'Alex T.', streak: 156, completion: 99, engagement: 1247, avatar: '👨‍🦱' },
      { rank: 2, name: 'Maria L.', streak: 142, completion: 98, engagement: 1156, avatar: '👩‍🦱' },
      { rank: 3, name: 'Sarah M.', streak: 128, completion: 97, engagement: 1043, avatar: '👩' },
      { rank: 4, name: 'James K.', streak: 115, completion: 96, engagement: 987, avatar: '👨' },
      { rank: 5, name: 'You', streak: 12, completion: 94, engagement: 87, avatar: '👤', isYou: true }
    ]
  });

  const currentData = leaderboardData[timeframe];

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-gray-400">Ranked by consistency, not genetics. Showing up is what matters.</p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-3 mb-8">
          {['week', 'month', 'allTime'].map(period => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                timeframe === period
                  ? 'bg-amber-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:text-white border border-slate-700'
              }`}
            >
              {period === 'allTime' ? 'All Time' : period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-slate-700/50 border-b border-slate-700 font-semibold text-gray-400 text-sm">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">User</div>
            <div className="col-span-2 text-right">Streak</div>
            <div className="col-span-2 text-right">Completion</div>
            <div className="col-span-3 text-right">Engagement</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-700">
            {currentData.map((user, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 gap-4 p-6 transition ${
                  user.isYou
                    ? 'bg-amber-400/10 border-l-4 border-amber-400'
                    : 'hover:bg-slate-700/30'
                }`}
              >
                {/* Rank */}
                <div className="col-span-1 flex items-center">
                  <span className="text-2xl">{getMedalEmoji(user.rank)}</span>
                </div>

                {/* User */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-lg">
                    {user.avatar}
                  </div>
                  <div>
                    <p className={`font-semibold ${user.isYou ? 'text-amber-400' : 'text-white'}`}>
                      {user.name}
                    </p>
                    {user.isYou && <p className="text-xs text-amber-400">You</p>}
                  </div>
                </div>

                {/* Streak */}
                <div className="col-span-2 flex items-center justify-end">
                  <div className="text-right">
                    <p className="text-white font-bold">{user.streak}</p>
                    <p className="text-xs text-gray-500">days</p>
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="col-span-2 flex items-center justify-end">
                  <div className="text-right">
                    <p className="text-white font-bold">{user.completion}%</p>
                    <p className="text-xs text-gray-500">rate</p>
                  </div>
                </div>

                {/* Engagement Points */}
                <div className="col-span-3 flex items-center justify-end">
                  <div className="text-right">
                    <p className="text-white font-bold">{user.engagement}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
          <h3 className="text-xl font-bold text-white mb-6">How Leaderboard Scoring Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">🔥</div>
              <p className="font-semibold text-white mb-2">Consistency Streak</p>
              <p className="text-sm text-gray-300">Consecutive days of completing your daily commitment. This is the primary metric.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold text-white mb-2">Completion Rate</p>
              <p className="text-sm text-gray-300">Percentage of daily tasks completed. Shows discipline and follow-through.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <p className="font-semibold text-white mb-2">Engagement Points</p>
              <p className="text-sm text-gray-300">Community interactions, encouragement given, and milestones shared.</p>
            </div>
          </div>
        </div>

        {/* Your Stats */}
        <div className="mt-8 bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6">Your Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">12</div>
              <p className="text-gray-400">Current Streak</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">94%</div>
              <p className="text-gray-400">Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">87</div>
              <p className="text-gray-400">Engagement Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
