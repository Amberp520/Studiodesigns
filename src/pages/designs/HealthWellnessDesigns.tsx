import { ArrowLeft, Heart, Activity, Flame, Droplets, Moon, Trophy, Target, Play, TrendingUp, Clock, Dumbbell, Zap, Award, Timer, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthWellnessDesigns = () => {
  const navigate = useNavigate();

  const handleBackToWork = () => {
    navigate('/#work');
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/health-wellness-app" className="inline-flex items-center gap-2 text-lime-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Health & Wellness <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">App</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive fitness tracking with gamification, real-time workout monitoring, and achievement system.
            </p>
          </div>

          {/* Screen 1: Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              Dashboard Overview
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-gray-400 text-sm">Good morning</p>
                    <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Let's crush it today! 💪</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 rounded-full flex items-center gap-2" style={{ background: 'rgba(132,204,22,0.1)' }}>
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-white font-semibold text-sm">14 Day Streak</span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-xl">
                      👤
                    </div>
                  </div>
                </div>

                {/* Main Progress */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  {/* Big Progress Ring */}
                  <div className="rounded-3xl p-6" style={{ background: 'linear-gradient(135deg, rgba(132,204,22,0.15) 0%, rgba(16,185,129,0.1) 100%)', border: '1px solid rgba(132,204,22,0.2)' }}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Daily Goal</h3>
                      <span className="text-lime-400 text-sm font-medium">78%</span>
                    </div>
                    <div className="relative w-44 h-44 mx-auto">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#progressGradient)" strokeWidth="8" strokeDasharray="206 264" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Zap className="w-8 h-8 text-lime-400 mx-auto mb-1" />
                          <p className="text-3xl font-bold text-white">2,340</p>
                          <p className="text-gray-400 text-xs">/ 3,000 cals</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                    {[
                      { icon: Flame, label: "Calories Burned", value: "2,340", target: "/ 3,000", color: "from-orange-500 to-red-500", bg: "rgba(249,115,22,0.1)" },
                      { icon: Activity, label: "Active Minutes", value: "58", target: "/ 60 min", color: "from-lime-500 to-emerald-500", bg: "rgba(132,204,22,0.1)" },
                      { icon: Heart, label: "Avg Heart Rate", value: "128", target: "bpm", color: "from-red-500 to-pink-500", bg: "rgba(239,68,68,0.1)" },
                      { icon: Trophy, label: "Weekly Goals", value: "5/7", target: "completed", color: "from-yellow-500 to-amber-500", bg: "rgba(234,179,8,0.1)" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-2xl p-5" style={{ background: stat.bg }}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-2xl font-bold text-white">{stat.value}</span>
                          <span className="text-gray-500 text-sm">{stat.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Workouts */}
                <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Today's Workouts</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Morning HIIT", duration: "25 min", calories: "320", time: "7:00 AM", status: "completed", icon: "🔥" },
                    { name: "Strength Training", duration: "45 min", calories: "280", time: "12:00 PM", status: "active", icon: "💪" },
                    { name: "Evening Yoga", duration: "30 min", calories: "120", time: "6:00 PM", status: "upcoming", icon: "🧘" },
                  ].map((workout, i) => (
                    <div key={i} className={`rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] ${
                      workout.status === 'completed' ? 'border border-emerald-500/30' : 
                      workout.status === 'active' ? 'border border-lime-500/50' : ''
                    }`} style={{ background: workout.status === 'active' ? 'linear-gradient(135deg, rgba(132,204,22,0.15) 0%, rgba(16,185,129,0.1) 100%)' : 'rgba(255,255,255,0.03)' }}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{workout.icon}</span>
                        {workout.status === 'completed' && (
                          <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">Done</span>
                        )}
                        {workout.status === 'active' && (
                          <span className="px-2 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold">{workout.name}</h4>
                      <p className="text-gray-400 text-sm">{workout.duration} • {workout.calories} cal</p>
                      <p className="text-gray-500 text-xs mt-2">{workout.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Active Workout */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              Active Workout
            </h2>
            <div className="rounded-3xl p-6" style={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Workout Display */}
                <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, rgba(132,204,22,0.2) 0%, rgba(16,185,129,0.15) 100%)', border: '1px solid rgba(132,204,22,0.3)' }}>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-medium">Round 3/5</span>
                      <h3 className="text-2xl font-bold text-white mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Strength Training</h3>
                    </div>
                    <span className="text-5xl">💪</span>
                  </div>

                  {/* Timer */}
                  <div className="text-center py-10">
                    <p className="text-7xl font-bold text-white font-mono">24:38</p>
                    <p className="text-gray-400 mt-2">Elapsed Time</p>
                  </div>

                  {/* Current Exercise */}
                  <div className="p-5 rounded-2xl mb-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Current Exercise</span>
                      <span className="text-lime-400 text-sm font-medium">Set 2/4</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Barbell Squats</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1"><Timer className="w-4 h-4" /> 60 sec rest</span>
                      <span className="flex items-center gap-1"><Target className="w-4 h-4" /> 12 reps</span>
                      <span className="flex items-center gap-1"><Dumbbell className="w-4 h-4" /> 135 lbs</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 rounded-2xl font-semibold text-white" style={{ background: 'rgba(255,255,255,0.1)' }}>Pause</button>
                    <button className="flex-1 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-lime-500 to-emerald-500">Complete Set</button>
                  </div>
                </div>

                {/* Exercise List & Stats */}
                <div className="space-y-6">
                  <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Exercise Queue</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Warm-up Stretches", duration: "5 min", done: true },
                        { name: "Deadlifts", duration: "4 sets", done: true },
                        { name: "Barbell Squats", duration: "4 sets", done: false, current: true },
                        { name: "Leg Press", duration: "3 sets", done: false },
                        { name: "Lunges", duration: "3 sets", done: false },
                        { name: "Cool Down", duration: "5 min", done: false },
                      ].map((ex, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${ex.current ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 border border-lime-500/30' : ex.done ? 'opacity-50' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${ex.done ? 'bg-emerald-500 text-white' : ex.current ? 'bg-gradient-to-r from-lime-500 to-emerald-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                            {ex.done ? '✓' : i + 1}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${ex.done ? 'text-gray-500 line-through' : 'text-white'}`}>{ex.name}</p>
                            <p className="text-gray-500 text-xs">{ex.duration}</p>
                          </div>
                          {ex.current && <span className="text-lime-400 text-xs font-medium">Now</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl p-4 text-center" style={{ background: 'rgba(249,115,22,0.1)' }}>
                      <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">186</p>
                      <p className="text-gray-400 text-xs">Calories</p>
                    </div>
                    <div className="rounded-2xl p-4 text-center" style={{ background: 'rgba(239,68,68,0.1)' }}>
                      <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">145</p>
                      <p className="text-gray-400 text-xs">BPM</p>
                    </div>
                    <div className="rounded-2xl p-4 text-center" style={{ background: 'rgba(132,204,22,0.1)' }}>
                      <Activity className="w-6 h-6 text-lime-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">92%</p>
                      <p className="text-gray-400 text-xs">Intensity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              Mobile App
            </h2>
            <div className="flex flex-wrap gap-12 justify-center">
              {/* iPhone 1 - Home */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #2d2d3d 0%, #1a1a24 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-gray-400 text-xs">Welcome back</p>
                          <p className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sarah 💪</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(249,115,22,0.1)' }}>
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="text-white text-xs font-medium">14</span>
                        </div>
                      </div>

                      {/* Progress Ring */}
                      <div className="flex items-center gap-6 p-5 rounded-3xl mb-6" style={{ background: 'linear-gradient(135deg, rgba(132,204,22,0.15) 0%, rgba(16,185,129,0.1) 100%)', border: '1px solid rgba(132,204,22,0.2)' }}>
                        <div className="relative w-24 h-24">
                          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#84cc16" strokeWidth="8" strokeDasharray="196 251.3" strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">78%</span>
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <Flame className="w-4 h-4 text-orange-500" />
                            <span className="text-white text-sm">1,850 cals</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-lime-500" />
                            <span className="text-white text-sm">45 min</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-500" />
                            <span className="text-white text-sm">72 bpm</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-white font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>Today</p>
                      <div className="space-y-3">
                        {[
                          { name: "HIIT Cardio", time: "7:00 AM", icon: "🔥", done: true },
                          { name: "Strength", time: "12:00 PM", icon: "💪", active: true },
                        ].map((w, i) => (
                          <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl ${w.active ? 'bg-gradient-to-r from-lime-500/20 to-emerald-500/20 border border-lime-500/30' : 'bg-white/5'}`}>
                            <span className="text-2xl">{w.icon}</span>
                            <div className="flex-1">
                              <p className="text-white font-medium">{w.name}</p>
                              <p className="text-gray-400 text-xs">{w.time}</p>
                            </div>
                            {w.done && <span className="text-emerald-400 text-xs">✓ Done</span>}
                            {w.active && <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone 2 - Achievement */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #2d2d3d 0%, #1a1a24 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14 text-center">
                      <div className="mb-6">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                          <Trophy className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>New Achievement!</h3>
                        <p className="text-gray-400 text-sm mt-1">You've unlocked a badge</p>
                      </div>

                      <div className="p-6 rounded-3xl mb-6" style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.2) 0%, rgba(245,158,11,0.15) 100%)', border: '1px solid rgba(234,179,8,0.3)' }}>
                        <span className="text-5xl mb-3 block">🏆</span>
                        <h4 className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Week Warrior</h4>
                        <p className="text-gray-400 text-sm mt-2">Completed 7-day workout streak</p>
                        <div className="flex items-center justify-center gap-2 mt-4">
                          <Award className="w-5 h-5 text-amber-400" />
                          <span className="text-amber-400 font-medium">+500 XP</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-gray-400 text-sm">Recent badges</p>
                        <div className="flex justify-center gap-3">
                          {["🔥", "💪", "⚡", "🎯"].map((badge, i) => (
                            <div key={i} className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                              {badge}
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-semibold text-sm">
                        Share Achievement
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Work */}
          <section className="text-center">
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(132,204,22,0.15) 0%, rgba(16,185,129,0.15) 100%)', border: '1px solid rgba(132,204,22,0.3)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Explore More Projects</h3>
              <p className="text-gray-400 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Work
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default HealthWellnessDesigns;
