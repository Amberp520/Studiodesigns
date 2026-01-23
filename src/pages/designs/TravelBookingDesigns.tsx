import { ArrowLeft, Plane, MapPin, Calendar, Users, Star, Heart, Search, Clock, Wifi, Coffee, Sparkles, Sun, Cloud, ChevronRight, Navigation } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TravelBookingDesigns = () => {
  const navigate = useNavigate();

  const handleBackToWork = () => {
    navigate('/#work');
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(180deg, #0c1929 0%, #1a3a5c 50%, #0c1929 100%)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/travel-booking-app" className="inline-flex items-center gap-2 text-cyan-300 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Travel Booking <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-cyan-200/70 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Immersive travel platform with smart search, real-time booking, and personalized recommendations.
            </p>
          </div>

          {/* Screen 1: Explore */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              Explore & Discover
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Hero */}
              <div className="relative h-[450px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #06b6d4 100%)' }}>
                <div className="absolute inset-0" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Plane className="w-16 h-16 text-white/30 mb-4" />
                  <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Discover Your Next Adventure
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-xl">Find and book amazing destinations worldwide with exclusive deals</p>
                  
                  {/* Search Card */}
                  <div className="w-full max-w-4xl bg-white rounded-3xl p-4 shadow-2xl">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex-1 min-w-[180px] p-4 rounded-2xl bg-slate-50 flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-cyan-500" />
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Destination</p>
                          <p className="text-slate-900 font-semibold">Santorini, Greece</p>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-slate-50 flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-cyan-500" />
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Check-in</p>
                          <p className="text-slate-900 font-semibold">Feb 15, 2024</p>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[140px] p-4 rounded-2xl bg-slate-50 flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-cyan-500" />
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Check-out</p>
                          <p className="text-slate-900 font-semibold">Feb 22, 2024</p>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[120px] p-4 rounded-2xl bg-slate-50 flex items-center gap-3">
                        <Users className="w-5 h-5 text-cyan-500" />
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Guests</p>
                          <p className="text-slate-900 font-semibold">2 Adults</p>
                        </div>
                      </div>
                      <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30">
                        <Search className="w-5 h-5" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Destinations */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Trending Destinations</h3>
                  <a href="#" className="text-cyan-400 text-sm font-medium flex items-center gap-1">View all <ChevronRight className="w-4 h-4" /></a>
                </div>
                <div className="grid md:grid-cols-4 gap-5">
                  {[
                    { name: "Santorini", country: "Greece", price: "$1,299", rating: 4.9, image: "🏛️", gradient: "from-blue-400 to-purple-500" },
                    { name: "Bali", country: "Indonesia", price: "$890", rating: 4.8, image: "🌴", gradient: "from-emerald-400 to-teal-500" },
                    { name: "Maldives", country: "Indian Ocean", price: "$2,150", rating: 5.0, image: "🏝️", gradient: "from-cyan-400 to-blue-500" },
                    { name: "Tokyo", country: "Japan", price: "$1,450", rating: 4.7, image: "🗼", gradient: "from-pink-400 to-rose-500" },
                  ].map((dest, i) => (
                    <div key={i} className="group rounded-3xl overflow-hidden cursor-pointer" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <div className={`h-48 bg-gradient-to-br ${dest.gradient} relative flex items-center justify-center`}>
                        <span className="text-8xl opacity-80">{dest.image}</span>
                        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="w-5 h-5 text-white" />
                        </button>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-medium">{dest.rating}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white">{dest.name}</h4>
                        <p className="text-cyan-200/60 text-sm">{dest.country}</p>
                        <p className="mt-3">
                          <span className="text-cyan-200/60 text-sm">from </span>
                          <span className="text-xl font-bold text-cyan-400">{dest.price}</span>
                          <span className="text-cyan-200/60 text-sm"> /person</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Hotel Booking */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">2</span>
              Hotel Booking
            </h2>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Hotel Card */}
                <div className="lg:col-span-2 rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="h-64 bg-gradient-to-br from-cyan-400 to-teal-500 relative flex items-center justify-center">
                    <span className="text-[120px] opacity-70">🏨</span>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full">Featured</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Atlantis Paradise Resort</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-200/60">Santorini, Greece</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-bold text-lg">4.9</span>
                        </div>
                        <span className="text-cyan-200/60 text-sm">2,847 reviews</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { icon: Wifi, label: "Free WiFi" },
                        { icon: Coffee, label: "Breakfast" },
                        { icon: Sparkles, label: "Spa" },
                        { icon: Navigation, label: "Beach Access" },
                      ].map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(6,182,212,0.1)' }}>
                          <amenity.icon className="w-4 h-4 text-cyan-400" />
                          <span className="text-cyan-200 text-sm">{amenity.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-cyan-200/60 text-sm">Starting from</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-white">$289</span>
                          <span className="text-cyan-200/60">/night</span>
                        </div>
                      </div>
                      <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Trip Summary</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl" style={{ background: 'rgba(6,182,212,0.1)' }}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                          <span className="text-xl">🏨</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Atlantis Resort</p>
                          <p className="text-cyan-200/60 text-xs">7 nights • Ocean View Suite</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <p className="text-cyan-200/40 text-[10px] uppercase tracking-wider">Check-in</p>
                        <p className="text-white font-medium">Feb 15</p>
                        <p className="text-cyan-200/60 text-xs">2:00 PM</p>
                      </div>
                      <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <p className="text-cyan-200/40 text-[10px] uppercase tracking-wider">Check-out</p>
                        <p className="text-white font-medium">Feb 22</p>
                        <p className="text-cyan-200/60 text-xs">11:00 AM</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-200/60">$289 × 7 nights</span>
                        <span className="text-white">$2,023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-200/60">Taxes & fees</span>
                        <span className="text-white">$287</span>
                      </div>
                      <div className="flex justify-between text-sm text-emerald-400">
                        <span>Member discount</span>
                        <span>-$210</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-3 border-t border-white/10">
                        <span className="text-white">Total</span>
                        <span className="text-cyan-400">$2,100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">3</span>
              Mobile App
            </h2>
            <div className="flex flex-wrap gap-12 justify-center">
              {/* iPhone 1 - Explore */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #4a5568 0%, #2d3748 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#1a202c', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1929 0%, #1a3a5c 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-cyan-200/60 text-xs">Good morning</p>
                          <p className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Where to next? ✈️</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-semibold text-sm">JK</div>
                      </div>

                      {/* Search */}
                      <div className="flex items-center gap-3 p-4 rounded-2xl mb-6" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <Search className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-200/40">Search destinations...</span>
                      </div>

                      {/* Featured */}
                      <div className="rounded-3xl overflow-hidden mb-4" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)' }}>
                        <div className="p-5">
                          <span className="px-2 py-1 bg-white/20 rounded-full text-white text-[10px] font-medium">Hot Deal</span>
                          <h4 className="text-white font-bold text-lg mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Santorini Escape</h4>
                          <p className="text-white/70 text-xs">7 nights • All inclusive</p>
                          <div className="flex items-center justify-between mt-3">
                            <div>
                              <span className="text-white/60 text-xs">from </span>
                              <span className="text-white font-bold text-xl">$1,299</span>
                            </div>
                            <button className="px-4 py-2 rounded-full bg-white text-cyan-600 font-semibold text-xs">Book Now</button>
                          </div>
                        </div>
                      </div>

                      <p className="text-white font-semibold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Popular</p>
                      <div className="space-y-3">
                        {[
                          { name: "Bali", rating: "4.8", price: "$890", icon: "🌴" },
                          { name: "Maldives", rating: "5.0", price: "$2,150", icon: "🏝️" },
                        ].map((dest, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-teal-500/30 flex items-center justify-center text-2xl">{dest.icon}</div>
                            <div className="flex-1">
                              <p className="text-white font-medium">{dest.name}</p>
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-cyan-200/60 text-xs">{dest.rating}</span>
                              </div>
                            </div>
                            <span className="text-cyan-400 font-bold">{dest.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone 2 - Confirmation */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #4a5568 0%, #2d3748 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#1a202c', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #0c1929 0%, #1a3a5c 100%)' }}>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      {/* Success */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">✓</span>
                        </div>
                        <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Booking Confirmed!</h3>
                        <p className="text-cyan-200/60 text-sm mt-1">Your dream vacation awaits</p>
                      </div>

                      <div className="p-5 rounded-3xl mb-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-2xl">🏨</div>
                          <div>
                            <p className="text-white font-semibold">Atlantis Resort</p>
                            <p className="text-cyan-200/60 text-xs">Santorini, Greece</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div>
                            <p className="text-cyan-200/40 text-[10px] uppercase">Check-in</p>
                            <p className="text-white font-medium">Feb 15, 2024</p>
                          </div>
                          <div>
                            <p className="text-cyan-200/40 text-[10px] uppercase">Check-out</p>
                            <p className="text-white font-medium">Feb 22, 2024</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(6,182,212,0.1)' }}>
                          <Sun className="w-5 h-5 text-yellow-400" />
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">24°C Sunny</p>
                            <p className="text-cyan-200/60 text-xs">Perfect weather!</p>
                          </div>
                          <Cloud className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>

                      <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-sm">
                        View Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Work */}
          <section className="text-center">
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(20,184,166,0.2) 100%)', border: '1px solid rgba(6,182,212,0.3)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore More Projects</h3>
              <p className="text-cyan-200/70 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30"
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

export default TravelBookingDesigns;
