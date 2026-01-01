import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const isActive = (path) => location.pathname === path ? 'text-amber-400 border-b-2 border-amber-400' : 'text-gray-300 hover:text-white';

  return (
    <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">+</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Commit+</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`pb-2 transition ${isActive('/')}`}>Dashboard</Link>
            <Link to="/today" className={`pb-2 transition ${isActive('/today')}`}>Today</Link>
            <Link to="/feed" className={`pb-2 transition ${isActive('/feed')}`}>Community</Link>
            <Link to="/leaderboard" className={`pb-2 transition ${isActive('/leaderboard')}`}>Leaderboard</Link>
            <Link to="/progress" className={`pb-2 transition ${isActive('/progress')}`}>Progress</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white text-sm"
            >
              Logout
            </button>
          </div>

          {/* Desktop Logout */}
          <button
            onClick={handleLogout}
            className="hidden md:block px-4 py-2 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-300 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">Dashboard</Link>
            <Link to="/today" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">Today</Link>
            <Link to="/feed" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">Community</Link>
            <Link to="/leaderboard" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">Leaderboard</Link>
            <Link to="/progress" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded">Progress</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
