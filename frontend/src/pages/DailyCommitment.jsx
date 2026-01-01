import React, { useState } from 'react';

function DailyCommitment() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      category: 'nutrition',
      title: 'Breakfast: Plant-Based Protein Bowl',
      description: 'Quinoa, black beans, roasted vegetables, tahini dressing',
      completed: false,
      time: '7:00 AM'
    },
    {
      id: 2,
      category: 'movement',
      title: '30-Minute Walk',
      description: 'Steady pace, focus on breathing and form',
      completed: false,
      time: '12:00 PM'
    },
    {
      id: 3,
      category: 'nutrition',
      title: 'Lunch: Whole Grain Buddha Bowl',
      description: 'Brown rice, steamed broccoli, chickpeas, olive oil',
      completed: false,
      time: '1:00 PM'
    },
    {
      id: 4,
      category: 'education',
      title: 'Learn: Inflammation & Recovery',
      description: 'Read about how whole foods reduce inflammation',
      completed: false,
      time: '3:00 PM'
    },
    {
      id: 5,
      category: 'nutrition',
      title: 'Dinner: Vegetable Stir-Fry',
      description: 'Mixed vegetables, tofu, brown rice, ginger sauce',
      completed: false,
      time: '6:00 PM'
    },
    {
      id: 6,
      category: 'reflection',
      title: 'Daily Reflection',
      description: 'How did you feel today? What went well?',
      completed: false,
      time: '9:00 PM'
    }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const completionPercentage = Math.round((completedCount / tasks.length) * 100);

  const getCategoryColor = (category) => {
    const colors = {
      nutrition: 'bg-green-500/20 border-green-500/30 text-green-400',
      movement: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
      education: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
      reflection: 'bg-amber-500/20 border-amber-500/30 text-amber-400'
    };
    return colors[category] || colors.nutrition;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      nutrition: '🍽️ Nutrition',
      movement: '🚶 Movement',
      education: '📚 Education',
      reflection: '🧘 Reflection'
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Today's Commitment</h1>
          <p className="text-gray-400">No decisions. Just execution.</p>
        </div>

        {/* Progress */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-300">Today's Progress</span>
            <span className="text-2xl font-bold text-amber-400">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-amber-400 to-amber-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            {completedCount} of {tasks.length} tasks completed
          </div>
        </div>

        {/* Tasks by Category */}
        <div className="space-y-6">
          {['nutrition', 'movement', 'education', 'reflection'].map(category => {
            const categoryTasks = tasks.filter(t => t.category === category);
            if (categoryTasks.length === 0) return null;

            return (
              <div key={category}>
                <h2 className={`text-lg font-semibold mb-3 px-4 py-2 rounded-lg inline-block border ${getCategoryColor(category)}`}>
                  {getCategoryLabel(category)}
                </h2>
                <div className="space-y-3">
                  {categoryTasks.map(task => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                        task.completed
                          ? 'bg-slate-700/50 border-slate-600 opacity-60'
                          : 'bg-slate-800 border-slate-700 hover:border-amber-400/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-1 transition ${
                          task.completed
                            ? 'bg-amber-400 border-amber-400'
                            : 'border-slate-600 hover:border-amber-400'
                        }`}>
                          {task.completed && (
                            <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className={`text-lg font-semibold ${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                              {task.title}
                            </h3>
                            <span className="text-sm text-gray-500">{task.time}</span>
                          </div>
                          <p className={`text-sm ${task.completed ? 'text-gray-500' : 'text-gray-400'}`}>
                            {task.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Footer */}
        {completionPercentage === 100 && (
          <div className="mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 text-center">
            <p className="text-xl font-bold text-green-400 mb-2">🎉 You crushed today!</p>
            <p className="text-gray-300">You've completed your daily commitment. Rest well—you've earned it.</p>
          </div>
        )}

        {completionPercentage > 0 && completionPercentage < 100 && (
          <div className="mt-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30 text-center">
            <p className="text-lg font-semibold text-amber-400 mb-2">You're doing great!</p>
            <p className="text-gray-300">Keep going. {tasks.length - completedCount} tasks left.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyCommitment;
