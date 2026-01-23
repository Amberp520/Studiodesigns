import { ArrowLeft, Users, FolderKanban, MessageSquare, Settings, Bell, Search, Plus, MoreHorizontal, CheckCircle, Clock, Calendar, FileText, Star, Filter, Video, Zap, BarChart3, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SaaSPlatformDesigns = () => {
  const navigate = useNavigate();

  const handleBackToWork = () => {
    navigate('/#work');
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/saas-platform" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              SaaS Platform <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Design</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Modern team collaboration platform with project management, real-time chat, and workflow automation.
            </p>
          </div>

          {/* Screen 1: Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">1</span>
              Dashboard Overview
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex">
                {/* Sidebar */}
                <div className="w-72 border-r border-white/5 p-5 hidden lg:block" style={{ background: 'rgba(15,23,42,0.5)' }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Flowspace</p>
                      <p className="text-slate-500 text-xs">Business Plan</p>
                    </div>
                  </div>

                  <nav className="space-y-1">
                    {[
                      { icon: FolderKanban, label: "Projects", active: true, badge: 8 },
                      { icon: CheckCircle, label: "Tasks", badge: 24 },
                      { icon: MessageSquare, label: "Messages", badge: 5 },
                      { icon: Calendar, label: "Calendar" },
                      { icon: FileText, label: "Documents" },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: Settings, label: "Settings" },
                    ].map((item, i) => (
                      <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${item.active ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                        <item.icon className="w-5 h-5" />
                        <span className="flex-1 font-medium">{item.label}</span>
                        {item.badge && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${item.active ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-8 p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)', border: '1px solid rgba(99,102,241,0.3)' }}>
                    <p className="text-white font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Upgrade to Pro</p>
                    <p className="text-slate-400 text-xs mb-4">Get unlimited projects and AI features.</p>
                    <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium">
                      Upgrade Now
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Projects</h2>
                      <p className="text-slate-400 text-sm">8 active projects</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input type="text" placeholder="Search projects..." className="pl-11 pr-4 py-2.5 rounded-xl text-white text-sm w-72" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }} />
                      </div>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <Bell className="w-5 h-5 text-slate-400" />
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500" />
                      </button>
                      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium flex items-center gap-2 text-sm">
                        <Plus className="w-4 h-4" />
                        New Project
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Active Tasks", value: "124", change: "+12%", color: "from-indigo-500 to-blue-500" },
                      { label: "In Progress", value: "38", change: "+8%", color: "from-purple-500 to-pink-500" },
                      { label: "Completed", value: "86", change: "+24%", color: "from-emerald-500 to-teal-500" },
                      { label: "Team Members", value: "12", change: "+2", color: "from-amber-500 to-orange-500" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-emerald-400 text-xs font-medium">{stat.change}</span>
                        </div>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Project Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Website Redesign", progress: 75, tasks: 18, team: 4, color: "from-violet-500 to-purple-600", status: "On Track" },
                      { name: "Mobile App v2", progress: 45, tasks: 24, team: 6, color: "from-blue-500 to-cyan-500", status: "In Progress" },
                      { name: "Marketing Campaign", progress: 90, tasks: 8, team: 3, color: "from-pink-500 to-rose-500", status: "Almost Done" },
                      { name: "API Integration", progress: 30, tasks: 32, team: 5, color: "from-emerald-500 to-teal-500", status: "Starting" },
                      { name: "Analytics Dashboard", progress: 60, tasks: 14, team: 4, color: "from-amber-500 to-orange-500", status: "In Progress" },
                      { name: "User Research", progress: 85, tasks: 6, team: 2, color: "from-indigo-500 to-violet-500", status: "Review" },
                    ].map((project, i) => (
                      <div key={i} className="rounded-2xl p-5 hover:border-indigo-500/30 transition-all cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold text-lg`}>
                            {project.name.charAt(0)}
                          </div>
                          <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center">
                            <MoreHorizontal className="w-4 h-4 text-slate-400" />
                          </button>
                        </div>
                        <h3 className="text-white font-semibold mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{project.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                          <span>{project.tasks} tasks</span>
                          <span>•</span>
                          <span>{project.team} members</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Progress</span>
                            <span className="text-white font-medium">{project.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                            <div className={`h-full rounded-full bg-gradient-to-r ${project.color}`} style={{ width: `${project.progress}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Kanban */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">2</span>
              Kanban Board
            </h2>
            <div className="rounded-3xl p-6 overflow-x-auto" style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>Website Redesign</h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">On Track</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 rounded-xl text-sm flex items-center gap-2 text-slate-300" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <div className="flex -space-x-2">
                    {["#818cf8", "#f472b6", "#34d399", "#fbbf24"].map((color, i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-slate-800 flex items-center justify-center text-white text-xs font-medium" style={{ background: color }}>
                        {["JD", "AB", "CD", "EF"][i]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-5 min-w-max pb-4">
                {[
                  {
                    title: "To Do",
                    color: "#64748b",
                    tasks: [
                      { title: "User research synthesis", priority: "High", tags: ["Research"], assignee: "JD" },
                      { title: "Competitive analysis", priority: "Medium", tags: ["Strategy"], assignee: "AB" },
                    ]
                  },
                  {
                    title: "In Progress",
                    color: "#818cf8",
                    tasks: [
                      { title: "Homepage redesign", priority: "High", tags: ["Design", "UI"], assignee: "CD" },
                      { title: "Design system updates", priority: "Medium", tags: ["Design"], assignee: "EF" },
                      { title: "Mobile responsive", priority: "High", tags: ["Development"], assignee: "JD" },
                    ]
                  },
                  {
                    title: "Review",
                    color: "#fbbf24",
                    tasks: [
                      { title: "Navigation prototype", priority: "High", tags: ["Prototype"], assignee: "AB" },
                    ]
                  },
                  {
                    title: "Done",
                    color: "#34d399",
                    tasks: [
                      { title: "Brand guidelines", priority: "Medium", tags: ["Design"], assignee: "CD" },
                      { title: "Accessibility audit", priority: "Low", tags: ["UX"], assignee: "EF" },
                    ]
                  },
                ].map((column, i) => (
                  <div key={i} className="w-80 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ background: column.color }} />
                      <span className="text-white font-medium">{column.title}</span>
                      <span className="text-slate-500 text-sm">({column.tasks.length})</span>
                    </div>
                    <div className="space-y-3">
                      {column.tasks.map((task, j) => (
                        <div key={j} className="rounded-xl p-4 hover:border-indigo-500/30 transition-all cursor-pointer" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="flex items-start justify-between mb-3">
                            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                              task.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                              task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                              'bg-emerald-500/20 text-emerald-400'
                            }`}>
                              {task.priority}
                            </span>
                            <button className="w-6 h-6 rounded hover:bg-white/10 flex items-center justify-center">
                              <MoreHorizontal className="w-4 h-4 text-slate-400" />
                            </button>
                          </div>
                          <p className="text-white font-medium mb-3">{task.title}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              {task.tags.map((tag, k) => (
                                <span key={k} className="px-2 py-1 rounded-lg bg-slate-700/50 text-slate-300 text-xs">{tag}</span>
                              ))}
                            </div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                              {task.assignee}
                            </div>
                          </div>
                        </div>
                      ))}
                      <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-700 text-slate-500 text-sm hover:border-indigo-500/50 hover:text-indigo-400 transition-colors">
                        + Add Task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">3</span>
              Mobile App
            </h2>
            <div className="flex flex-wrap gap-12 justify-center">
              {/* iPhone 1 */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #374151 0%, #1f2937 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-slate-400 text-xs">Good morning</p>
                          <p className="text-white font-bold text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>John 👋</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <Bell className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)', border: '1px solid rgba(99,102,241,0.3)' }}>
                          <p className="text-slate-400 text-xs">Active Tasks</p>
                          <p className="text-white font-bold text-2xl">24</p>
                        </div>
                        <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                          <p className="text-slate-400 text-xs">Completed</p>
                          <p className="text-emerald-400 font-bold text-2xl">86</p>
                        </div>
                      </div>

                      <p className="text-white font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Today's Tasks</p>
                      <div className="space-y-3">
                        {[
                          { title: "Review designs", project: "Website", done: true },
                          { title: "Team standup", project: "General", time: "10:00 AM" },
                          { title: "Update prototype", project: "Mobile App", time: "2:00 PM" },
                        ].map((task, i) => (
                          <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl ${task.done ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-white/5'}`}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${task.done ? 'bg-emerald-500' : 'border-2 border-slate-600'}`}>
                              {task.done && <span className="text-white text-xs">✓</span>}
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${task.done ? 'text-slate-500 line-through' : 'text-white'}`}>{task.title}</p>
                              <p className="text-slate-500 text-xs">{task.project} {task.time ? `• ${task.time}` : ''}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone 2 */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #374151 0%, #1f2937 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center gap-3 mb-6">
                        <ArrowLeft className="w-5 h-5 text-slate-400" />
                        <span className="text-white font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Project Details</span>
                      </div>

                      <div className="p-5 rounded-3xl mb-6" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.15) 100%)', border: '1px solid rgba(99,102,241,0.3)' }}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">W</div>
                          <div>
                            <p className="text-white font-bold">Website Redesign</p>
                            <p className="text-slate-400 text-xs">75% complete</p>
                          </div>
                        </div>
                        <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                        </div>
                      </div>

                      <p className="text-white font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Team</p>
                      <div className="flex gap-3 mb-6">
                        {["#818cf8", "#f472b6", "#34d399", "#fbbf24"].map((color, i) => (
                          <div key={i} className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-medium" style={{ background: color }}>
                            {["JD", "AB", "CD", "EF"][i]}
                          </div>
                        ))}
                        <button className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '2px dashed rgba(255,255,255,0.2)' }}>
                          <Plus className="w-5 h-5 text-slate-400" />
                        </button>
                      </div>

                      <p className="text-white font-semibold mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>Recent Activity</p>
                      <div className="space-y-3">
                        {[
                          { user: "JD", action: "completed", task: "Homepage design" },
                          { user: "AB", action: "commented on", task: "Navigation" },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">{activity.user}</div>
                            <p className="text-slate-300 text-sm"><span className="text-white">{activity.user}</span> {activity.action} <span className="text-indigo-400">{activity.task}</span></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Work */}
          <section className="text-center">
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)', border: '1px solid rgba(99,102,241,0.3)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>Explore More Projects</h3>
              <p className="text-slate-400 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
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

export default SaaSPlatformDesigns;
