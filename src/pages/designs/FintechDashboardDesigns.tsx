import { ArrowLeft, TrendingUp, TrendingDown, CreditCard, Wallet, ArrowUpRight, ArrowDownRight, Bell, Search, PieChart, BarChart3, DollarSign, Activity, Shield, Zap, Globe, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FintechDashboardDesigns = () => {
  const navigate = useNavigate();

  const handleBackToWork = () => {
    navigate('/#work');
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/fintech-dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
              Fintech Dashboard <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Design Assets</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Professional investment platform with real-time analytics, portfolio tracking, and seamless transactions.
            </p>
          </div>

          {/* Screen 1: Main Dashboard */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">1</span>
              Main Dashboard
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#16161f', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Dashboard Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-white" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Apex Finance</span>
                    <span className="text-xs text-gray-500 block">Investment Platform</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Search assets..." className="pl-10 pr-4 py-2.5 rounded-xl text-white text-sm w-64" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }} />
                  </div>
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <Bell className="w-5 h-5 text-gray-400" />
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-500"></span>
                  </button>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                    MK
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Portfolio Value */}
                <div className="rounded-2xl p-6 mb-6" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.15) 0%, rgba(234,88,12,0.1) 100%)', border: '1px solid rgba(251,191,36,0.2)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Total Portfolio Value</p>
                      <p className="text-4xl font-bold text-white" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>$2,847,562.48</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(34,197,94,0.15)' }}>
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold">+12.5%</span>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">Gains: <span className="text-green-400 font-semibold">$324,850</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-amber-400" />
                      <span className="text-gray-300 text-sm">24h Change: <span className="text-amber-400 font-semibold">+$18,420</span></span>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Wallet, label: "Available Cash", value: "$485,200", change: "+$12,500", color: "from-blue-500 to-cyan-500" },
                    { icon: TrendingUp, label: "Total Returns", value: "+28.4%", change: "All Time", color: "from-green-500 to-emerald-500" },
                    { icon: PieChart, label: "Assets", value: "24", change: "Diversified", color: "from-purple-500 to-pink-500" },
                    { icon: Shield, label: "Risk Score", value: "Low", change: "Conservative", color: "from-amber-500 to-orange-500" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white mt-1" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>{stat.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-semibold" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Portfolio Performance</h3>
                    <div className="flex gap-2">
                      {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((period, i) => (
                        <button key={period} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${i === 2 ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Chart Visualization */}
                  <div className="h-56 relative">
                    <svg viewBox="0 0 800 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(251,191,36)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="rgb(251,191,36)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 180 Q100 160 150 140 T300 100 T450 120 T600 60 T750 80 L800 70 L800 200 L0 200 Z" fill="url(#chartGradient)" />
                      <path d="M0 180 Q100 160 150 140 T300 100 T450 120 T600 60 T750 80 L800 70" fill="none" stroke="rgb(251,191,36)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="800" cy="70" r="6" fill="rgb(251,191,36)" />
                    </svg>
                  </div>
                </div>

                {/* Watchlist */}
                <div className="rounded-2xl p-6 mt-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Watchlist</h3>
                  <div className="space-y-3">
                    {[
                      { symbol: "AAPL", name: "Apple Inc.", price: "$189.84", change: "+2.34%", positive: true, logo: "🍎" },
                      { symbol: "GOOGL", name: "Alphabet Inc.", price: "$141.80", change: "+1.87%", positive: true, logo: "🔵" },
                      { symbol: "TSLA", name: "Tesla Inc.", price: "$248.50", change: "-0.92%", positive: false, logo: "⚡" },
                      { symbol: "NVDA", name: "NVIDIA Corp.", price: "$875.28", change: "+4.21%", positive: true, logo: "🟢" },
                    ].map((stock, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{stock.logo}</span>
                          <div>
                            <p className="text-white font-semibold">{stock.symbol}</p>
                            <p className="text-gray-400 text-sm">{stock.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">{stock.price}</p>
                          <p className={`text-sm ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>{stock.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Analytics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">2</span>
              Analytics Dashboard
            </h2>
            <div className="rounded-3xl p-6" style={{ background: '#16161f', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Asset Allocation */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="text-white font-semibold mb-6" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Asset Allocation</h3>
                  <div className="flex items-center gap-8">
                    <div className="relative w-40 h-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(59,130,246,0.8)" strokeWidth="12" strokeDasharray="75 251.3" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="12" strokeDasharray="50 251.3" strokeDashoffset="-75" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(251,191,36,0.8)" strokeWidth="12" strokeDasharray="37.7 251.3" strokeDashoffset="-125" />
                        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(34,197,94,0.8)" strokeWidth="12" strokeDasharray="37.7 251.3" strokeDashoffset="-162.7" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-center">
                        <div>
                          <p className="text-2xl font-bold text-white">24</p>
                          <p className="text-xs text-gray-400">Assets</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 flex-1">
                      {[
                        { label: "Stocks", percent: "45%", value: "$1.28M", color: "bg-blue-500" },
                        { label: "Crypto", percent: "30%", value: "$854K", color: "bg-purple-500" },
                        { label: "ETFs", percent: "15%", value: "$427K", color: "bg-amber-500" },
                        { label: "Bonds", percent: "10%", value: "$284K", color: "bg-green-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                          <span className="text-gray-300 flex-1">{item.label}</span>
                          <span className="text-white font-medium">{item.percent}</span>
                          <span className="text-gray-400 text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Monthly Performance */}
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="text-white font-semibold mb-6" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Monthly Returns</h3>
                  <div className="h-48 flex items-end gap-3">
                    {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                          style={{ 
                            height: `${height}%`,
                            background: i === 11 ? 'linear-gradient(180deg, #fbbf24 0%, #ea580c 100%)' : 'linear-gradient(180deg, rgba(251,191,36,0.6) 0%, rgba(234,88,12,0.3) 100%)'
                          }}
                        />
                        <span className="text-[10px] text-gray-500">{["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile App */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">3</span>
              Mobile Application
            </h2>
            <div className="flex flex-wrap gap-12 justify-center">
              {/* iPhone Mockup 1 */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #2a2a3a 0%, #1a1a24 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  {/* Inner bezel */}
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  {/* Screen */}
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: '#0f0f17' }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    {/* Status Bar */}
                    <div className="px-8 pt-4 flex justify-between text-white text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-[10px]">5G</span>
                        <div className="flex gap-0.5">
                          {[1,1,1,1].map((_, i) => (
                            <div key={i} className="w-1 bg-white rounded-full" style={{ height: 4 + i * 2 }} />
                          ))}
                        </div>
                        <span className="text-[10px]">100%</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pt-10">
                      <p className="text-gray-400 text-sm">Welcome back,</p>
                      <p className="text-white text-xl font-bold" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Michael 👋</p>
                      
                      <div className="mt-6 p-5 rounded-3xl" style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)' }}>
                        <p className="text-white/80 text-xs">Total Balance</p>
                        <p className="text-white text-3xl font-bold mt-1" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>$2,847,562</p>
                        <div className="flex items-center gap-2 mt-2">
                          <TrendingUp className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">+12.5% this month</span>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 py-3 rounded-2xl bg-white/10 text-white text-sm font-medium flex items-center justify-center gap-2">
                          <ArrowUpRight className="w-4 h-4" />
                          Send
                        </button>
                        <button className="flex-1 py-3 rounded-2xl bg-white/10 text-white text-sm font-medium flex items-center justify-center gap-2">
                          <ArrowDownRight className="w-4 h-4" />
                          Receive
                        </button>
                      </div>

                      <p className="text-white font-semibold mt-6 mb-3" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Quick Actions</p>
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { icon: CreditCard, label: "Cards" },
                          { icon: BarChart3, label: "Invest" },
                          { icon: Globe, label: "Trade" },
                          { icon: Zap, label: "Pay" },
                        ].map((action, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                              <action.icon className="w-5 h-5 text-amber-400" />
                            </div>
                            <span className="text-gray-400 text-[10px]">{action.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone Mockup 2 */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #2a2a3a 0%, #1a1a24 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: '#0f0f17' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-8 pt-4 flex justify-between text-white text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <span className="text-[10px]">5G</span>
                        <div className="flex gap-0.5">
                          {[1,1,1,1].map((_, i) => (
                            <div key={i} className="w-1 bg-white rounded-full" style={{ height: 4 + i * 2 }} />
                          ))}
                        </div>
                        <span className="text-[10px]">100%</span>
                      </div>
                    </div>

                    <div className="px-6 pt-10">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Portfolio</h3>
                        <span className="text-gray-400 text-sm">See all</span>
                      </div>

                      <div className="space-y-3">
                        {[
                          { symbol: "AAPL", name: "Apple", value: "$42,850", change: "+3.2%", positive: true, icon: "🍎" },
                          { symbol: "BTC", name: "Bitcoin", value: "$128,400", change: "+5.8%", positive: true, icon: "₿" },
                          { symbol: "TSLA", name: "Tesla", value: "$18,920", change: "-1.2%", positive: false, icon: "⚡" },
                          { symbol: "ETH", name: "Ethereum", value: "$45,200", change: "+2.4%", positive: true, icon: "💎" },
                        ].map((asset, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center text-2xl">
                              {asset.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-white font-semibold">{asset.symbol}</p>
                              <p className="text-gray-400 text-xs">{asset.name}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-semibold">{asset.value}</p>
                              <p className={`text-xs ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>{asset.change}</p>
                            </div>
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
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(234,88,12,0.1) 100%)', border: '1px solid rgba(251,191,36,0.2)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Explore More Projects</h3>
              <p className="text-gray-400 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:opacity-90 transition-opacity"
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

export default FintechDashboardDesigns;
