import { ArrowLeft, Heart, Activity, Flame, Droplets, Moon, Footprints, Trophy, Target, Calendar, Play, ChevronRight, Plus, TrendingUp, Clock, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthWellnessDesigns = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/health-wellness-app" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Health & Wellness <span className="gradient-text">Design Assets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Fitness tracking app UI with gamification elements, progress visualization, and wellness features.
            </p>
          </div>

          {/* Screen 1: Home Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Home Dashboard
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Good Morning</p>
                  <h2 className="text-2xl font-bold">Sarah! 👋</h2>
                </div>
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xl">
                  🏃‍♀️
                </div>
              </div>

              {/* Daily Progress Ring */}
              <div className="flex items-center gap-8 mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="188.5 251.3" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold">75%</p>
                      <p className="text-xs text-muted-foreground">Complete</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Calories</span>
                        <span className="font-medium">1,850 / 2,200</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[84%] rounded-full bg-orange-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Footprints className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Steps</span>
                        <span className="font-medium">8,542 / 10,000</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-green-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Active Minutes</span>
                        <span className="font-medium">45 / 60</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[75%] rounded-full bg-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Heart, label: "Heart Rate", value: "72 BPM", color: "text-red-500", bg: "bg-red-500/10" },
                  { icon: Droplets, label: "Water", value: "6/8 glasses", color: "text-blue-500", bg: "bg-blue-500/10" },
                  { icon: Moon, label: "Sleep", value: "7.5 hrs", color: "text-purple-500", bg: "bg-purple-500/10" },
                  { icon: Trophy, label: "Streak", value: "14 days", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                ].map((stat, i) => (
                  <div key={i} className={`rounded-xl ${stat.bg} p-4 cursor-pointer hover:scale-[1.02] transition-transform`}>
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Today's Workouts */}
              <h3 className="font-semibold mb-4">Today's Workouts</h3>
              <div className="space-y-3">
                {[
                  { name: "Morning Yoga", duration: "30 min", calories: "120", time: "7:00 AM", completed: true },
                  { name: "HIIT Cardio", duration: "20 min", calories: "280", time: "12:00 PM", completed: false },
                  { name: "Evening Run", duration: "45 min", calories: "350", time: "6:00 PM", completed: false },
                ].map((workout, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-xl ${workout.completed ? 'bg-green-500/10 border border-green-500/20' : 'bg-muted/30'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${workout.completed ? 'bg-green-500 text-white' : 'gradient-bg text-primary-foreground'}`}>
                      {workout.completed ? '✓' : <Play className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{workout.name}</p>
                      <p className="text-sm text-muted-foreground">{workout.duration} • {workout.calories} cal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{workout.time}</p>
                      {workout.completed && <span className="text-xs text-green-500">Completed</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screen 2: Workout Tracker */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Workout Tracker
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Active Workout */}
                <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Workout</p>
                      <h3 className="text-2xl font-bold">HIIT Cardio</h3>
                    </div>
                    <span className="text-4xl">🔥</span>
                  </div>

                  {/* Timer */}
                  <div className="text-center py-8">
                    <p className="text-6xl font-bold font-mono">12:34</p>
                    <p className="text-muted-foreground mt-2">Time Elapsed</p>
                  </div>

                  {/* Current Exercise */}
                  <div className="bg-background/50 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Current Exercise</span>
                      <span className="text-sm font-medium">3 of 8</span>
                    </div>
                    <p className="text-xl font-bold mb-2">Burpees</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 45 sec</span>
                      <span className="flex items-center gap-1"><Target className="w-4 h-4" /> 15 reps</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-4">
                    <button className="flex-1 py-4 rounded-xl bg-muted text-foreground font-medium">Pause</button>
                    <button className="flex-1 py-4 rounded-xl gradient-bg text-primary-foreground font-medium">Skip</button>
                  </div>
                </div>

                {/* Workout Progress */}
                <div className="space-y-6">
                  <div className="rounded-xl bg-muted/30 p-6">
                    <h4 className="font-semibold mb-4">Exercise List</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Jumping Jacks", duration: "30s", done: true },
                        { name: "High Knees", duration: "45s", done: true },
                        { name: "Burpees", duration: "45s", done: false, current: true },
                        { name: "Mountain Climbers", duration: "30s", done: false },
                        { name: "Squat Jumps", duration: "30s", done: false },
                        { name: "Plank", duration: "60s", done: false },
                      ].map((ex, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${ex.current ? 'bg-primary/10 border border-primary/30' : ex.done ? 'bg-green-500/10' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${ex.done ? 'bg-green-500 text-white' : ex.current ? 'gradient-bg text-primary-foreground' : 'bg-muted'}`}>
                            {ex.done ? '✓' : i + 1}
                          </div>
                          <div className="flex-1">
                            <p className={`font-medium ${ex.done ? 'text-muted-foreground line-through' : ''}`}>{ex.name}</p>
                            <p className="text-sm text-muted-foreground">{ex.duration}</p>
                          </div>
                          {ex.current && <span className="text-xs text-primary font-medium">In Progress</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-orange-500/10 p-4 text-center">
                      <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-xs text-muted-foreground">Calories</p>
                    </div>
                    <div className="rounded-xl bg-red-500/10 p-4 text-center">
                      <Heart className="w-6 h-6 text-red-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">142</p>
                      <p className="text-xs text-muted-foreground">BPM</p>
                    </div>
                    <div className="rounded-xl bg-blue-500/10 p-4 text-center">
                      <Activity className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                      <p className="text-2xl font-bold">85%</p>
                      <p className="text-xs text-muted-foreground">Intensity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Progress Stats */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Progress & Statistics
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Week Overview */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">This Week</h3>
                  <select className="px-3 py-1.5 rounded-lg bg-muted text-sm">
                    <option>Jan 15 - 21</option>
                  </select>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                    const completed = i < 5;
                    const isToday = i === 4;
                    return (
                      <div key={i} className={`text-center py-4 rounded-xl ${isToday ? 'gradient-bg text-primary-foreground' : completed ? 'bg-green-500/10' : 'bg-muted/30'}`}>
                        <p className="text-xs mb-2">{day}</p>
                        <p className="text-lg font-bold">{15 + i}</p>
                        {completed && !isToday && <span className="text-green-500 text-xs">✓</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Charts */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Weekly Activity</h4>
                  <div className="h-48 flex items-end gap-3">
                    {[60, 80, 45, 90, 75, 40, 0].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full rounded-t-lg gradient-bg" style={{ height: `${height}%` }} />
                        <span className="text-xs text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Workout Distribution</h4>
                  <div className="space-y-4">
                    {[
                      { type: "Cardio", percent: 40, color: "bg-orange-500" },
                      { type: "Strength", percent: 30, color: "bg-blue-500" },
                      { type: "Yoga", percent: 20, color: "bg-purple-500" },
                      { type: "HIIT", percent: 10, color: "bg-green-500" },
                    ].map((workout, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{workout.type}</span>
                          <span>{workout.percent}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full rounded-full ${workout.color}`} style={{ width: `${workout.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <h3 className="font-semibold mb-4">Recent Achievements</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: "🏆", title: "Week Warrior", desc: "7-day streak completed", date: "Today" },
                  { icon: "🔥", title: "Calorie Crusher", desc: "Burned 10,000 calories", date: "Yesterday" },
                  { icon: "⚡", title: "Speed Demon", desc: "Fastest 5K run", date: "3 days ago" },
                ].map((achievement, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                    <span className="text-4xl">{achievement.icon}</span>
                    <div>
                      <p className="font-semibold">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mobile Mockups */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">4</span>
              Mobile App Screens
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {/* Phone 1 - Home */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <div className="text-center mb-4">
                      <p className="text-sm text-muted-foreground">Today's Progress</p>
                      <div className="relative w-28 h-28 mx-auto my-4">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="10" strokeDasharray="188.5 251.3" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold">75%</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: "🔥", value: "1.8k", label: "Cal" },
                        { icon: "👟", value: "8.5k", label: "Steps" },
                        { icon: "⏱", value: "45m", label: "Active" },
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-3 rounded-xl bg-muted/50">
                          <span className="text-lg">{stat.icon}</span>
                          <p className="font-bold">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-semibold mb-2">Quick Start</p>
                    <div className="space-y-2">
                      {["🏃 Running", "🧘 Yoga", "💪 Strength"].map((workout, i) => (
                        <button key={i} className="w-full py-3 rounded-xl bg-muted/50 text-sm font-medium text-left px-4 hover:bg-muted transition-colors">
                          {workout}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Workout */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground text-center mb-2">Current Exercise</p>
                    <h3 className="text-xl font-bold text-center mb-4">Burpees</h3>
                    <div className="aspect-square rounded-2xl gradient-bg flex items-center justify-center text-8xl mb-4">
                      🏋️
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold font-mono mb-2">00:32</p>
                      <p className="text-muted-foreground">10 of 15 reps</p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 py-3 rounded-xl bg-muted font-medium">
                        Pause
                      </button>
                      <button className="flex-1 py-3 rounded-xl gradient-bg text-primary-foreground font-medium">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Gamified Wellness</h2>
              <p className="text-muted-foreground mb-6">
                All designs include gamification elements for better user engagement and retention.
              </p>
              <Link
                to="/projects/health-wellness-app"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Study
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default HealthWellnessDesigns;