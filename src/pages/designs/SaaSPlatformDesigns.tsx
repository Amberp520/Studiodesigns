import { ArrowLeft, Users, FolderKanban, MessageSquare, Settings, Bell, Search, Plus, MoreHorizontal, CheckCircle, Circle, Clock, Calendar, FileText, Video, Link2, ChevronDown, Star, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SaaSPlatformDesigns = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/saas-platform" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SaaS Platform <span className="gradient-text">Design Assets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Team collaboration platform with project management, real-time communication, and workflow automation.
            </p>
          </div>

          {/* Screen 1: Main Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Dashboard Overview
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-muted/30 border-r border-border p-4 hidden lg:block">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">T</span>
                    </div>
                    <div>
                      <p className="font-semibold">TeamFlow</p>
                      <p className="text-xs text-muted-foreground">Pro Plan</p>
                    </div>
                  </div>

                  <nav className="space-y-1">
                    {[
                      { icon: FolderKanban, label: "Projects", active: true, badge: 12 },
                      { icon: Users, label: "Team", active: false },
                      { icon: MessageSquare, label: "Messages", active: false, badge: 5 },
                      { icon: Calendar, label: "Calendar", active: false },
                      { icon: FileText, label: "Documents", active: false },
                      { icon: Settings, label: "Settings", active: false },
                    ].map((item, i) => (
                      <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left ${item.active ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                        <item.icon className="w-5 h-5" />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className={`px-2 py-0.5 rounded-full text-xs ${item.active ? 'bg-primary-foreground/20' : 'bg-primary/20 text-primary'}`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <p className="font-medium mb-1">Upgrade to Business</p>
                    <p className="text-xs text-muted-foreground mb-3">Get unlimited projects and advanced features.</p>
                    <button className="w-full py-2 rounded-lg gradient-bg text-primary-foreground text-sm font-medium">
                      Upgrade Now
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-2xl font-bold">Projects</h2>
                      <p className="text-muted-foreground">12 active projects</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-lg bg-muted border border-border w-64" />
                      </div>
                      <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
                      </button>
                      <button className="px-4 py-2 rounded-lg gradient-bg text-primary-foreground font-medium flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        New Project
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Total Tasks", value: "248", change: "+12%", icon: CheckCircle },
                      { label: "In Progress", value: "64", change: "+8%", icon: Clock },
                      { label: "Completed", value: "156", change: "+24%", icon: Star },
                      { label: "Team Members", value: "18", change: "+2", icon: Users },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl bg-muted/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon className="w-5 h-5 text-muted-foreground" />
                          <span className="text-xs text-green-500 font-medium">{stat.change}</span>
                        </div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Project Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Website Redesign", progress: 75, tasks: 24, team: 5, color: "from-purple-500 to-pink-500" },
                      { name: "Mobile App v2", progress: 45, tasks: 18, team: 4, color: "from-blue-500 to-cyan-500" },
                      { name: "Marketing Campaign", progress: 90, tasks: 12, team: 3, color: "from-orange-500 to-red-500" },
                      { name: "API Integration", progress: 30, tasks: 32, team: 6, color: "from-green-500 to-teal-500" },
                      { name: "Analytics Dashboard", progress: 60, tasks: 20, team: 4, color: "from-indigo-500 to-purple-500" },
                      { name: "User Research", progress: 85, tasks: 8, team: 2, color: "from-yellow-500 to-orange-500" },
                    ].map((project, i) => (
                      <div key={i} className="rounded-xl bg-muted/30 p-5 hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold`}>
                            {project.name.charAt(0)}
                          </div>
                          <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                        <h3 className="font-semibold mb-2">{project.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span>{project.tasks} tasks</span>
                          <span>{project.team} members</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
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

          {/* Screen 2: Kanban Board */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Kanban Board View
            </h2>
            <div className="glass-card rounded-2xl p-6 overflow-x-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold">Website Redesign</h3>
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-muted text-sm flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <div className="flex -space-x-2">
                    {["JD", "AB", "CD", "EF"].map((initials, i) => (
                      <div key={i} className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs font-medium border-2 border-background">
                        {initials}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                      +3
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 min-w-max pb-4">
                {[
                  {
                    title: "To Do",
                    color: "bg-gray-500",
                    tasks: [
                      { title: "Create wireframes", priority: "High", tags: ["Design"], assignee: "JD" },
                      { title: "Competitive analysis", priority: "Medium", tags: ["Research"], assignee: "AB" },
                      { title: "Define color palette", priority: "Low", tags: ["Design"], assignee: "CD" },
                    ]
                  },
                  {
                    title: "In Progress",
                    color: "bg-blue-500",
                    tasks: [
                      { title: "Homepage design", priority: "High", tags: ["Design", "UI"], assignee: "JD" },
                      { title: "User flow documentation", priority: "Medium", tags: ["UX"], assignee: "EF" },
                    ]
                  },
                  {
                    title: "Review",
                    color: "bg-yellow-500",
                    tasks: [
                      { title: "Navigation prototype", priority: "High", tags: ["Prototype"], assignee: "AB" },
                    ]
                  },
                  {
                    title: "Done",
                    color: "bg-green-500",
                    tasks: [
                      { title: "Stakeholder interviews", priority: "High", tags: ["Research"], assignee: "CD" },
                      { title: "Brand guidelines review", priority: "Medium", tags: ["Design"], assignee: "JD" },
                      { title: "Accessibility audit", priority: "Low", tags: ["UX"], assignee: "EF" },
                    ]
                  },
                ].map((column, i) => (
                  <div key={i} className="w-72 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-3 h-3 rounded-full ${column.color}`} />
                      <span className="font-medium">{column.title}</span>
                      <span className="text-sm text-muted-foreground">({column.tasks.length})</span>
                    </div>
                    <div className="space-y-3">
                      {column.tasks.map((task, j) => (
                        <div key={j} className="rounded-xl bg-background border border-border p-4 hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              task.priority === 'High' ? 'bg-red-500/20 text-red-500' :
                              task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                              'bg-green-500/20 text-green-500'
                            }`}>
                              {task.priority}
                            </span>
                            <button className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-medium mb-3">{task.title}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              {task.tags.map((tag, k) => (
                                <span key={k} className="px-2 py-0.5 rounded-full bg-muted text-xs">{tag}</span>
                              ))}
                            </div>
                            <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs">
                              {task.assignee}
                            </div>
                          </div>
                        </div>
                      ))}
                      <button className="w-full py-2 rounded-lg border-2 border-dashed border-border text-muted-foreground text-sm hover:border-primary hover:text-primary transition-colors">
                        + Add Task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screen 3: Team Collaboration */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Team & Collaboration
            </h2>
            <div className="glass-card rounded-2xl p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Team Members */}
                <div className="lg:col-span-2 rounded-xl bg-muted/30 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Team Members</h3>
                    <button className="px-3 py-1.5 rounded-lg gradient-bg text-primary-foreground text-sm flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Invite
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "John Doe", role: "Product Designer", email: "john@company.com", status: "online", projects: 5 },
                      { name: "Alice Brown", role: "Frontend Developer", email: "alice@company.com", status: "online", projects: 4 },
                      { name: "Chris Davis", role: "UX Researcher", email: "chris@company.com", status: "away", projects: 3 },
                      { name: "Emma Fisher", role: "Project Manager", email: "emma@company.com", status: "offline", projects: 8 },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-medium">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                            member.status === 'online' ? 'bg-green-500' :
                            member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{member.projects} projects</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                        <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Chat */}
                <div className="rounded-xl bg-muted/30 p-6 flex flex-col">
                  <h3 className="font-semibold mb-4">Team Chat</h3>
                  <div className="flex-1 space-y-4 mb-4">
                    {[
                      { name: "John", message: "Just pushed the new designs!", time: "2m ago" },
                      { name: "Alice", message: "Looks great! Reviewing now.", time: "1m ago" },
                      { name: "Chris", message: "Can we discuss the user flow?", time: "now" },
                    ].map((msg, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs flex-shrink-0">
                          {msg.name[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{msg.name}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-sm" />
                    <button className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Collaboration Made Simple</h2>
              <p className="text-muted-foreground mb-6">
                All components designed for seamless team productivity and real-time collaboration.
              </p>
              <Link
                to="/projects/saas-platform"
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

export default SaaSPlatformDesigns;