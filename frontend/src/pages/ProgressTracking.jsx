import React, { useState } from 'react';

function ProgressTracking() {
  const [progressData] = useState({
    weightLoss: {
      current: 192,
      target: 170,
      starting: 200,
      progress: 8,
      milestone: 190
    },
    consistency: {
      currentStreak: 12,
      longestStreak: 45,
      totalDays: 87,
      completionThisMonth: 94
    },
    milestones: [
      { achieved: true, date: '2025-12-10', title: '7-Day Streak', icon: '🔥' },
      { achieved: true, date: '2025-12-15', title: 'First Progress Photo', icon: '📸' },
      { achieved: true, date: '2025-12-20', title: '10 lbs Lost', icon: '⬇️' },
      { achieved: false, date: null, title: '30-Day Streak', icon: '🏆' },
      { achieved: false, date: null, title: '20 lbs Lost', icon: '🎯' },
      { achieved: false, date: null, title: 'Goal Weight', icon: '🎉' }
    ]
  });

  const [showCamera, setShowCamera] = useState(false);

  const weightPercentage = ((progressData.weightLoss.starting - progressData.weightLoss.current) / (progressData.weightLoss.starting - progressData.weightLoss.target)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Your Progress</h1>
          <p className="text-gray-400">Celebrating consistency, not perfection.</p>
        </div>

        {/* Weight Loss Progress */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Weight-Loss Blueprint Progress</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">{progressData.weightLoss.current}</div>
              <p className="text-gray-400">Current Weight</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">-{progressData.weightLoss.progress}</div>
              <p className="text-gray-400">Progress So Far</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">{progressData.weightLoss.target}</div>
              <p className="text-gray-400">Goal Weight</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Overall Progress</span>
              <span className="text-white font-semibold">{Math.round(weightPercentage)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 via-amber-400 to-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(weightPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{progressData.weightLoss.starting - progressData.weightLoss.target} lbs total goal</p>
          </div>

          {/* Next Milestone */}
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Next Milestone</p>
            <div className="flex justify-between items-center">
              <p className="text-white font-semibold">{progressData.weightLoss.milestone} lbs</p>
              <p className="text-amber-400">{progressData.weightLoss.milestone - progressData.weightLoss.current} lbs away</p>
            </div>
          </div>
        </div>

        {/* Consistency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Consistency</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="text-amber-400 font-bold">{progressData.consistency.currentStreak} days</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Longest Streak</span>
                  <span className="text-green-400 font-bold">{progressData.consistency.longestStreak} days</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">This Month</span>
                  <span className="text-blue-400 font-bold">{progressData.consistency.completionThisMonth}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Photos */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Progress Photos</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center text-4xl">
                📸
              </div>
              <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center text-4xl">
                📸
              </div>
            </div>
            <button
              onClick={() => setShowCamera(!showCamera)}
              className="w-full py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-300 transition"
            >
              📷 Take Progress Photo
            </button>
            {showCamera && (
              <div className="mt-4 p-4 bg-slate-700/50 rounded-lg text-center text-gray-400">
                Camera integration would open here
              </div>
            )}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {progressData.milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border-2 transition ${
                  milestone.achieved
                    ? 'bg-green-500/10 border-green-500/30'
                    : 'bg-slate-700/50 border-slate-600'
                }`}
              >
                <div className="text-4xl mb-3">{milestone.icon}</div>
                <p className="font-semibold text-white mb-2">{milestone.title}</p>
                {milestone.achieved ? (
                  <p className="text-sm text-green-400">✓ Achieved on {milestone.date}</p>
                ) : (
                  <p className="text-sm text-gray-400">Coming soon</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Key Insights</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold text-white">Consistency is Your Superpower</p>
                <p className="text-sm text-gray-400">Your 12-day streak shows you're building real habits. Keep going.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <p className="font-semibold text-white">You're on Track</p>
                <p className="text-sm text-gray-400">At your current pace, you'll reach your goal in approximately 5 months.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-white">Next Goal: 30-Day Streak</p>
                <p className="text-sm text-gray-400">You're 18 days away. Stay committed—you've got this!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracking;
