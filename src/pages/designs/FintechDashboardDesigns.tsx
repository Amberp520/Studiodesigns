import { ArrowLeft, Download, Copy, Check, CreditCard, TrendingUp, PieChart, BarChart3, Wallet, ArrowUpRight, ArrowDownRight, Bell, Settings, Search, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FintechDashboardDesigns = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/fintech-dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fintech Dashboard <span className="gradient-text">Design Assets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Interactive UI components and design elements. Click any element to copy its code or right-click to save images.
            </p>
          </div>

          {/* Screen 1: Main Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Main Dashboard View
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold">FinanceFlow</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                    <Search className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors relative">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
                  </button>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-medium">
                    JD
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div 
                  className="p-5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => copyToClipboard('<div class="stat-card total-balance">...</div>', 'stat1')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Total Balance</span>
                    {copiedId === 'stat1' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100" />}
                  </div>
                  <p className="text-3xl font-bold">$124,562</p>
                  <div className="flex items-center gap-1 mt-2 text-green-500 text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+12.5%</span>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl bg-muted/50 border border-border cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => copyToClipboard('<div class="stat-card income">...</div>', 'stat2')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Monthly Income</span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold">$8,420</p>
                  <div className="flex items-center gap-1 mt-2 text-green-500 text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+8.2%</span>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl bg-muted/50 border border-border cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => copyToClipboard('<div class="stat-card expenses">...</div>', 'stat3')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Expenses</span>
                    <CreditCard className="w-4 h-4 text-orange-500" />
                  </div>
                  <p className="text-3xl font-bold">$3,280</p>
                  <div className="flex items-center gap-1 mt-2 text-red-500 text-sm">
                    <ArrowDownRight className="w-4 h-4" />
                    <span>-2.4%</span>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl bg-muted/50 border border-border cursor-pointer hover:scale-[1.02] transition-transform"
                  onClick={() => copyToClipboard('<div class="stat-card investments">...</div>', 'stat4')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Investments</span>
                    <PieChart className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-3xl font-bold">$45,800</p>
                  <div className="flex items-center gap-1 mt-2 text-green-500 text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+18.7%</span>
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="rounded-xl bg-muted/30 border border-border p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Portfolio Performance</h3>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-primary text-primary-foreground">1M</button>
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-muted/80">3M</button>
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-muted/80">1Y</button>
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-muted/80">ALL</button>
                  </div>
                </div>
                {/* Chart visualization */}
                <div className="h-48 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div key={i} className="flex-1 rounded-t-lg gradient-bg opacity-80 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="rounded-xl bg-muted/30 border border-border p-6">
                <h3 className="font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-3">
                  {[
                    { name: "Netflix Subscription", amount: "-$15.99", icon: "🎬", category: "Entertainment" },
                    { name: "Salary Deposit", amount: "+$5,200.00", icon: "💰", category: "Income" },
                    { name: "Grocery Store", amount: "-$89.50", icon: "🛒", category: "Shopping" },
                    { name: "Freelance Payment", amount: "+$1,250.00", icon: "💼", category: "Income" },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tx.icon}</span>
                        <div>
                          <p className="font-medium">{tx.name}</p>
                          <p className="text-sm text-muted-foreground">{tx.category}</p>
                        </div>
                      </div>
                      <span className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-foreground'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Analytics View */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Analytics Dashboard
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Pie Chart */}
                <div className="rounded-xl bg-muted/30 border border-border p-6">
                  <h3 className="font-semibold mb-4">Spending by Category</h3>
                  <div className="relative w-48 h-48 mx-auto">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="20" strokeDasharray="75.4 251.3" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="20" strokeDasharray="50.3 251.3" strokeDashoffset="-75.4" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--secondary))" strokeWidth="20" strokeDasharray="62.8 251.3" strokeDashoffset="-125.7" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="20" strokeDasharray="62.8 251.3" strokeDashoffset="-188.5" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-2xl font-bold">$3,280</p>
                        <p className="text-xs text-muted-foreground">Total Spent</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      { label: "Housing", color: "bg-primary", percent: "30%" },
                      { label: "Food", color: "bg-accent", percent: "20%" },
                      { label: "Transport", color: "bg-secondary", percent: "25%" },
                      { label: "Other", color: "bg-muted-foreground", percent: "25%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                          <span>{item.label}</span>
                        </div>
                        <span className="text-muted-foreground">{item.percent}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Line Chart Area */}
                <div className="lg:col-span-2 rounded-xl bg-muted/30 border border-border p-6">
                  <h3 className="font-semibold mb-4">Income vs Expenses</h3>
                  <div className="h-64 relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                      <span>$10k</span>
                      <span>$7.5k</span>
                      <span>$5k</span>
                      <span>$2.5k</span>
                      <span>$0</span>
                    </div>
                    {/* Chart area */}
                    <div className="ml-12 h-full flex items-end gap-4 pb-8">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => (
                        <div key={month} className="flex-1 flex gap-1 items-end">
                          <div className="flex-1 gradient-bg rounded-t-lg" style={{ height: `${[70, 85, 60, 90, 75, 95][i]}%` }} />
                          <div className="flex-1 bg-muted-foreground/30 rounded-t-lg" style={{ height: `${[40, 55, 35, 50, 45, 60][i]}%` }} />
                        </div>
                      ))}
                    </div>
                    {/* X-axis labels */}
                    <div className="ml-12 flex justify-between text-xs text-muted-foreground">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full gradient-bg"></span>
                      <span className="text-sm">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-muted-foreground/30"></span>
                      <span className="text-sm">Expenses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile Interface */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Mobile Interface
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {/* Phone mockup 1 */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  {/* Status bar */}
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                      <p className="text-3xl font-bold">$124,562.00</p>
                    </div>
                    <div className="flex gap-3 mb-6">
                      <button className="flex-1 py-3 rounded-xl gradient-bg text-primary-foreground font-medium text-sm flex items-center justify-center gap-2">
                        <ArrowUpRight className="w-4 h-4" />
                        Send
                      </button>
                      <button className="flex-1 py-3 rounded-xl bg-muted text-foreground font-medium text-sm flex items-center justify-center gap-2">
                        <ArrowDownRight className="w-4 h-4" />
                        Receive
                      </button>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold">Quick Actions</p>
                      <div className="grid grid-cols-4 gap-2">
                        {["💳", "📊", "🏦", "💰"].map((emoji, i) => (
                          <button key={i} className="aspect-square rounded-xl bg-muted flex items-center justify-center text-xl hover:bg-muted/80 transition-colors">
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold mb-3">Recent</p>
                      <div className="space-y-2">
                        {[
                          { emoji: "🛒", name: "Shopping", amount: "-$89" },
                          { emoji: "☕", name: "Coffee", amount: "-$5" },
                          { emoji: "💰", name: "Salary", amount: "+$5,200" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{item.emoji}</span>
                              <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <span className={`text-sm font-semibold ${item.amount.startsWith('+') ? 'text-green-500' : ''}`}>
                              {item.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup 2 */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  {/* Status bar */}
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold mb-4">My Cards</h3>
                    <div className="rounded-2xl gradient-bg p-5 text-primary-foreground mb-6">
                      <div className="flex justify-between items-start mb-8">
                        <span className="text-2xl">💳</span>
                        <span className="text-sm opacity-80">VISA</span>
                      </div>
                      <p className="text-lg tracking-widest mb-4">•••• •••• •••• 4582</p>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs opacity-70">CARD HOLDER</p>
                          <p className="text-sm font-medium">JOHN DOE</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-70">EXPIRES</p>
                          <p className="text-sm font-medium">12/26</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🔒</span>
                          <span className="text-sm">Card Lock</span>
                        </div>
                        <div className="w-10 h-6 rounded-full bg-primary relative">
                          <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary-foreground"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">📍</span>
                          <span className="text-sm">Location Alerts</span>
                        </div>
                        <div className="w-10 h-6 rounded-full bg-muted relative">
                          <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-muted-foreground"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* UI Components */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">4</span>
              UI Components Library
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Buttons</h3>
                <div className="space-y-3">
                  <button className="w-full py-3 rounded-xl gradient-bg text-primary-foreground font-medium">Primary Button</button>
                  <button className="w-full py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80">Secondary Button</button>
                  <button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary/10">Outline Button</button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Input Fields</h3>
                <div className="space-y-3">
                  <input type="text" placeholder="Default Input" className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none" />
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input type="text" placeholder="Search..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none" />
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Stat Cards</h3>
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Revenue</span>
                  </div>
                  <p className="text-2xl font-bold">$24,500</p>
                  <span className="text-green-500 text-sm">+15.3%</span>
                </div>
              </div>

              {/* Avatars */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Avatars</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-medium">JD</div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-medium">AB</div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-medium">CD</div>
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center text-muted-foreground">+5</div>
                </div>
              </div>

              {/* Badges */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Badges & Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">Active</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-sm">Pending</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-sm">Failed</span>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">New</span>
                </div>
              </div>

              {/* Toggle */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Toggles</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Dark Mode</span>
                    <div className="w-12 h-7 rounded-full bg-primary relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-5 h-5 rounded-full bg-primary-foreground"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Notifications</span>
                    <div className="w-12 h-7 rounded-full bg-muted relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-muted-foreground"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Export Design Assets</h2>
              <p className="text-muted-foreground mb-6">
                Right-click on any element to copy or save. All components are built with reusable patterns.
              </p>
              <Link
                to="/projects/fintech-dashboard"
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

export default FintechDashboardDesigns;