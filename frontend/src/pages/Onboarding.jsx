import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentWeight: '',
    targetWeight: '',
    dietaryPreference: 'plant-forward',
    activityLevel: 'light',
    goal: 'sustainable-loss'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // TODO: Save blueprint to Firestore
      navigate('/');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1 flex-1 mx-1 rounded-full transition ${i <= step ? 'bg-amber-400' : 'bg-slate-700'}`} />
            ))}
          </div>
          <p className="text-gray-400 text-sm">Step {step} of 3</p>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Let's Build Your Blueprint</h2>
                <p className="text-gray-400">Tell us about your weight-loss goal and we'll create your personalized plan.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Weight (lbs)</label>
                  <input
                    type="number"
                    name="currentWeight"
                    value={formData.currentWeight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                    placeholder="e.g., 200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Target Weight (lbs)</label>
                  <input
                    type="number"
                    name="targetWeight"
                    value={formData.targetWeight}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition"
                    placeholder="e.g., 170"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Your Preferences</h2>
                <p className="text-gray-400">Customize your nutrition and movement strategy.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Dietary Preference</label>
                  <div className="space-y-2">
                    {['plant-forward', 'vegan', 'fasting-aligned'].map(option => (
                      <label key={option} className="flex items-center p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition">
                        <input
                          type="radio"
                          name="dietaryPreference"
                          value={option}
                          checked={formData.dietaryPreference === option}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 text-white capitalize">{option.replace('-', ' ')}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Movement Focus</label>
                  <div className="space-y-2">
                    {['light', 'moderate', 'active'].map(option => (
                      <label key={option} className="flex items-center p-3 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600 transition">
                        <input
                          type="radio"
                          name="activityLevel"
                          value={option}
                          checked={formData.activityLevel === option}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="ml-3 text-white capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">You're Ready</h2>
                <p className="text-gray-400">Your personalized blueprint is ready. Let's begin your transformation.</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Weight Loss Goal:</span>
                  <span className="text-white font-semibold">{formData.currentWeight - formData.targetWeight} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nutrition Plan:</span>
                  <span className="text-white font-semibold capitalize">{formData.dietaryPreference.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Movement Plan:</span>
                  <span className="text-white font-semibold capitalize">{formData.activityLevel}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Remember: This is about consistency, not perfection. You'll receive a daily execution plan with no decisions to make—just actions to take.
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-300 transition"
            >
              {step === 3 ? 'Start Your Journey' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
