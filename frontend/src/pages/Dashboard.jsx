import React, { useEffect, useState } from 'react';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Activity, Users, Trophy, Loader2 } from 'lucide-react';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // Fetch user profile
                try {
                    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                    if (userDoc.exists()) {
                        setUserData(userDoc.data());
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                navigate('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-dark)]">
                <Loader2 className="w-8 h-8 text-[var(--color-brand-primary)] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg-dark)] text-white p-6">
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold">Welcome back, {userData?.displayName || 'User'}</h1>
                    <p className="text-[var(--color-text-muted)]">Let's crush today's goals.</p>
                </div>
                <button
                    onClick={() => auth.signOut()}
                    className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-sm"
                >
                    Sign Out
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Daily Plan Card */}
                <div className="card space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[rgba(0,200,83,0.1)]">
                            <Activity className="w-5 h-5 text-[var(--color-brand-primary)]" />
                        </div>
                        <h2 className="text-lg font-semibold">Daily Plan</h2>
                    </div>
                    <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
                        <p className="text-[var(--color-text-muted)] text-sm">Today's Focus</p>
                        <p className="font-medium mt-1">Hydration & 5k Steps</p>
                    </div>
                </div>

                {/* Goals Card */}
                <div className="card space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[rgba(0,200,83,0.1)]">
                            <Trophy className="w-5 h-5 text-[var(--color-brand-primary)]" />
                        </div>
                        <h2 className="text-lg font-semibold">Active Goals</h2>
                    </div>
                    <div className="text-center py-8 text-[var(--color-text-muted)]">
                        <p>No active goals yet.</p>
                        <button className="mt-4 text-[var(--color-brand-secondary)] hover:underline text-sm">
                            + Create New Goal
                        </button>
                    </div>
                </div>

                {/* Partners Card */}
                <div className="card space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-[rgba(0,200,83,0.1)]">
                            <Users className="w-5 h-5 text-[var(--color-brand-primary)]" />
                        </div>
                        <h2 className="text-lg font-semibold">Partners</h2>
                    </div>
                    <div className="space-y-3">
                        <div className="p-3 flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.03)]">
                            <span className="text-sm">Accountability Status</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400">Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
