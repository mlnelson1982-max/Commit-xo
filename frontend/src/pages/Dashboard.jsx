import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [stats, setStats] = useState({
    currentStreak: 12,
    completionRate: 94,
    communityRank: 234,
    weightProgress: -8,
    nextMilestone: 162
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">You're on day {stats.currentStreak} of your transformation</p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-400/50 transition">
            <div className="text-gray-400 text-sm mb-2">Current Streak</div>
            <div className="text-4xl font-bold text-amber-400">{stats.currentStreak}</div>
            <div className="text-gray-500 text-xs mt-2">days committed</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-400/50 transition">
            <div className="text-gray-400 text-sm mb-2">Completion Rate</div>
            <div className="text-4xl font-bold text-green-400">{stats.completionRate}%</div>
            <div className="text-gray-500 text-xs mt-2">this month</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-400/50 transition">
            <div className="text-gray-400 text-sm mb-2">Community Rank</div>
            <div className="text-4xl font-bold text-blue-400">#{stats.communityRank}</div>
            <div className="text-gray-500 text-xs mt-2">by consistency</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-400/50 transition">
            <div className="text-gray-400 text-sm mb-2">Weight Progress</div>
            <div className="text-4xl font-bold text-purple-400">{stats.weightProgress} lbs</div>
            <div className="text-gray-500 text-xs mt-2">toward goal</div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Today's Commitment */}
          <Link to="/today" className="lg:col-span-2 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-2xl p-8 border border-amber-400/30 hover:border-amber-400/60 transition group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Today's Commitment</h2>
                <p className="text-gray-300">4 tasks to complete today</p>
              </div>
              <div className="text-4xl">→</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-200">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Breakfast: Plant-based protein bowl
              </div>
              <div className="flex items-center text-gray-200">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Movement: 30-minute walk
              </div>
              <div className="flex items-center text-gray-200">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Learn: Inflammation & Recovery
              </div>
              <div className="flex items-center text-gray-200">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Reflect: How did you feel today?
              </div>
            </div>
          </Link>

          {/* Progress Tracking */}
          <Link to="/progress" className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition">
            <h3 className="text-xl font-bold text-white mb-4">Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Goal Progress</span>
                  <span className="text-white font-semibold">32%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              <p className="text-gray-400 text-xs">8 lbs lost, 22 lbs to go</p>
            </div>
          </Link>
        </div>

        {/* Community & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link to="/feed" className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-400/50 transition">
            <h3 className="text-xl font-bold text-white mb-4">Community Feed</h3>
            <p className="text-gray-400 mb-4">See what others are celebrating today</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <p className="text-white font-semibold text-sm">Sarah M.</p>
                  <p className="text-gray-400 text-xs">Hit 30-day streak! 🎉</p>
                </div>
                <span className="text-amber-400">→</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div>
                  <p className="text-white font-semibold text-sm">James K.</p>
                  <p className="text-gray-400 text-xs">Shared progress photo</p>
                </div>
                <span className="text-amber-400">→</span>
              </div>
            </div>
          </Link>

          <Link to="/leaderboard" className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-green-400/50 transition">
            <h3 className="text-xl font-bold text-white mb-4">Leaderboard</h3>
            <p className="text-gray-400 mb-4">Top performers this month</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-amber-400 font-bold mr-3">1</span>
                  <span className="text-white">Alex T.</span>
                </div>
                <span className="text-green-400 text-sm">45-day streak</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-gray-400 font-bold mr-3">2</span>
                  <span className="text-white">Maria L.</span>
                </div>
                <span className="text-green-400 text-sm">42-day streak</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-orange-400 font-bold mr-3">3</span>
                  <span className="text-white">You</span>
                </div>
                <span className="text-green-400 text-sm">12-day streak</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
