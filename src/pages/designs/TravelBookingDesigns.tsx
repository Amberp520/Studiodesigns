import { ArrowLeft, Plane, Hotel, Car, MapPin, Calendar, Users, Star, Heart, Search, Filter, ChevronRight, Clock, Wifi, Coffee, Utensils, Dumbbell, Waves, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TravelBookingDesigns = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/travel-booking-app" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travel Booking <span className="gradient-text">Design Assets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Complete travel booking UI with destination discovery, smart search, and seamless booking flow.
            </p>
          </div>

          {/* Screen 1: Explore Page */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Explore & Discover
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Hero Search */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-80 bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white max-w-2xl">
                    <h2 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h2>
                    <p className="text-white/80 mb-8">Find and book amazing destinations worldwide</p>
                    
                    {/* Search Bar */}
                    <div className="bg-background rounded-2xl p-2 flex flex-wrap gap-2 text-foreground">
                      <div className="flex-1 min-w-[200px] p-3 rounded-xl bg-muted/50 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Where to?" className="bg-transparent outline-none w-full" />
                      </div>
                      <div className="flex-1 min-w-[150px] p-3 rounded-xl bg-muted/50 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Check-in" className="bg-transparent outline-none w-full" />
                      </div>
                      <div className="flex-1 min-w-[150px] p-3 rounded-xl bg-muted/50 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Check-out" className="bg-transparent outline-none w-full" />
                      </div>
                      <div className="flex-1 min-w-[120px] p-3 rounded-xl bg-muted/50 flex items-center gap-2">
                        <Users className="w-5 h-5 text-muted-foreground" />
                        <input type="text" placeholder="Guests" className="bg-transparent outline-none w-full" />
                      </div>
                      <button className="px-8 py-3 rounded-xl gradient-bg text-primary-foreground font-medium flex items-center gap-2">
                        <Search className="w-5 h-5" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Categories */}
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                {[
                  { icon: Plane, label: "Flights" },
                  { icon: Hotel, label: "Hotels" },
                  { icon: Car, label: "Car Rental" },
                  { icon: Sparkles, label: "Experiences" },
                ].map((cat, i) => (
                  <button key={i} className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap ${i === 1 ? 'gradient-bg text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
                    <cat.icon className="w-5 h-5" />
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Popular Destinations */}
              <h3 className="text-xl font-bold mb-4">Popular Destinations</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Paris", country: "France", image: "🗼", price: "$450", rating: 4.9 },
                  { name: "Tokyo", country: "Japan", image: "🏯", price: "$680", rating: 4.8 },
                  { name: "New York", country: "USA", image: "🗽", price: "$320", rating: 4.7 },
                  { name: "Bali", country: "Indonesia", image: "🏝️", price: "$280", rating: 4.9 },
                ].map((dest, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden bg-muted/30 group cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-7xl relative">
                      {dest.image}
                      <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{dest.name}</h4>
                          <p className="text-sm text-muted-foreground">{dest.country}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{dest.rating}</span>
                        </div>
                      </div>
                      <p className="mt-2">
                        <span className="text-muted-foreground text-sm">from </span>
                        <span className="font-bold text-lg">{dest.price}</span>
                        <span className="text-muted-foreground text-sm"> /night</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trending */}
              <h3 className="text-xl font-bold mb-4">Trending This Week</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[
                  { tag: "Beach Getaways", count: "2.5k trips", emoji: "🏖️" },
                  { tag: "Mountain Retreats", count: "1.8k trips", emoji: "⛰️" },
                  { tag: "City Breaks", count: "3.2k trips", emoji: "🌆" },
                  { tag: "Safari Adventures", count: "890 trips", emoji: "🦁" },
                  { tag: "Romantic Escapes", count: "2.1k trips", emoji: "💕" },
                ].map((trend, i) => (
                  <div key={i} className="flex-shrink-0 px-6 py-4 rounded-2xl bg-muted/30 flex items-center gap-3 cursor-pointer hover:bg-muted transition-colors">
                    <span className="text-3xl">{trend.emoji}</span>
                    <div>
                      <p className="font-medium">{trend.tag}</p>
                      <p className="text-sm text-muted-foreground">{trend.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screen 2: Booking Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Booking Flow
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Progress */}
              <div className="flex items-center justify-between max-w-md mx-auto mb-8">
                {["Search", "Select", "Details", "Payment"].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${i <= 1 ? 'gradient-bg text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {i + 1}
                    </div>
                    {i < 3 && <div className={`w-16 h-0.5 ${i < 1 ? 'bg-primary' : 'bg-muted'}`} />}
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Hotel Listing */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">12 Hotels in Paris</h3>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm">
                      <Filter className="w-4 h-4" />
                      Filters
                    </button>
                  </div>
                  
                  {[
                    { name: "Grand Palace Hotel", rating: 4.9, reviews: 2840, price: 450, amenities: ["wifi", "pool", "gym", "restaurant"], featured: true },
                    { name: "Riverside Boutique", rating: 4.7, reviews: 1560, price: 320, amenities: ["wifi", "restaurant", "spa"] },
                    { name: "City Center Inn", rating: 4.5, reviews: 980, price: 180, amenities: ["wifi", "restaurant"] },
                  ].map((hotel, i) => (
                    <div key={i} className={`flex gap-4 p-4 rounded-2xl ${hotel.featured ? 'bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20' : 'bg-muted/30'}`}>
                      <div className="w-40 h-32 rounded-xl bg-muted/50 flex items-center justify-center text-5xl flex-shrink-0">
                        🏨
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            {hotel.featured && <span className="text-xs text-primary font-medium">Featured</span>}
                            <h4 className="font-bold text-lg">{hotel.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{hotel.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                            </div>
                          </div>
                          <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                          {hotel.amenities.includes("wifi") && <Wifi className="w-4 h-4 text-muted-foreground" />}
                          {hotel.amenities.includes("pool") && <Waves className="w-4 h-4 text-muted-foreground" />}
                          {hotel.amenities.includes("gym") && <Dumbbell className="w-4 h-4 text-muted-foreground" />}
                          {hotel.amenities.includes("restaurant") && <Utensils className="w-4 h-4 text-muted-foreground" />}
                          {hotel.amenities.includes("spa") && <Sparkles className="w-4 h-4 text-muted-foreground" />}
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <p>
                            <span className="text-2xl font-bold">${hotel.price}</span>
                            <span className="text-muted-foreground"> /night</span>
                          </p>
                          <button className="px-5 py-2 rounded-xl gradient-bg text-primary-foreground font-medium">
                            Select Room
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Summary */}
                <div className="lg:col-span-1">
                  <div className="rounded-2xl bg-muted/30 p-6 sticky top-24">
                    <h3 className="font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-background">
                        <p className="font-medium">Grand Palace Hotel</p>
                        <p className="text-sm text-muted-foreground">Paris, France</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-background">
                          <p className="text-xs text-muted-foreground">Check-in</p>
                          <p className="font-medium">Jan 15, 2024</p>
                        </div>
                        <div className="p-3 rounded-xl bg-background">
                          <p className="text-xs text-muted-foreground">Check-out</p>
                          <p className="font-medium">Jan 18, 2024</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-background flex justify-between">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="font-medium">2 Adults</span>
                      </div>
                      <div className="border-t border-border pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>$450 x 3 nights</span>
                          <span>$1,350</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Service fee</span>
                          <span>$135</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-500">
                          <span>Discount (10%)</span>
                          <span>-$135</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                          <span>Total</span>
                          <span>$1,350</span>
                        </div>
                      </div>
                      <button className="w-full py-4 rounded-xl gradient-bg text-primary-foreground font-medium">
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Trip Details */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Trip Dashboard
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Trip Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-full md:w-64 h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-7xl">
                  🗼
                </div>
                <div className="flex-1">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-medium">Confirmed</span>
                  <h2 className="text-3xl font-bold mt-2">Paris Adventure</h2>
                  <p className="text-muted-foreground mb-4">Jan 15 - 18, 2024 • 3 nights</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Hotel className="w-4 h-4 text-muted-foreground" />
                      Grand Palace Hotel
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      2 Guests
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Check-in: 3:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Trip Timeline */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="rounded-xl bg-muted/30 p-6">
                  <h3 className="font-semibold mb-4">Trip Itinerary</h3>
                  <div className="space-y-4">
                    {[
                      { day: "Day 1", title: "Arrival & Eiffel Tower", time: "3:00 PM - 9:00 PM", icon: "🗼" },
                      { day: "Day 2", title: "Louvre Museum & Seine Cruise", time: "9:00 AM - 6:00 PM", icon: "🖼️" },
                      { day: "Day 3", title: "Versailles Palace Day Trip", time: "8:00 AM - 5:00 PM", icon: "🏰" },
                      { day: "Day 4", title: "Shopping & Departure", time: "10:00 AM - 2:00 PM", icon: "🛍️" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-background/50">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-primary font-medium">{item.day}</p>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.time}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Quick Actions */}
                  <div className="rounded-xl bg-muted/30 p-6">
                    <h3 className="font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Modify Booking", icon: "✏️" },
                        { label: "Add Experience", icon: "✨" },
                        { label: "Contact Hotel", icon: "💬" },
                        { label: "Get Directions", icon: "🗺️" },
                      ].map((action, i) => (
                        <button key={i} className="p-4 rounded-xl bg-background/50 hover:bg-background transition-colors text-center">
                          <span className="text-2xl block mb-1">{action.icon}</span>
                          <span className="text-sm font-medium">{action.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Weather */}
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6">
                    <h3 className="font-semibold mb-4">Weather Forecast</h3>
                    <div className="flex justify-between">
                      {[
                        { day: "Mon", temp: "12°", icon: "⛅" },
                        { day: "Tue", temp: "14°", icon: "☀️" },
                        { day: "Wed", temp: "11°", icon: "🌧️" },
                        { day: "Thu", temp: "13°", icon: "⛅" },
                      ].map((w, i) => (
                        <div key={i} className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">{w.day}</p>
                          <span className="text-2xl block">{w.icon}</span>
                          <p className="font-medium mt-1">{w.temp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              {/* Phone 1 - Explore */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-4">Explore</h3>
                    <div className="rounded-xl bg-muted p-3 flex items-center gap-2 mb-4">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Where to next?</span>
                    </div>
                    <p className="text-sm font-medium mb-2">Popular</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["🗼", "🏯", "🗽", "🏝️"].map((emoji, i) => (
                        <div key={i} className="aspect-square rounded-xl bg-muted/50 flex items-center justify-center text-4xl">
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Booking */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground">Step 3 of 4</p>
                    <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
                    <div className="rounded-xl bg-muted/50 p-4 mb-4">
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-3xl">
                          🏨
                        </div>
                        <div>
                          <p className="font-medium">Grand Palace</p>
                          <p className="text-sm text-muted-foreground">Paris, France</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">4.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span>Jan 15 - 18</span>
                        <span>3 nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2 Adults</span>
                        <span>1 Room</span>
                      </div>
                      <div className="flex justify-between font-bold pt-2 border-t">
                        <span>Total</span>
                        <span>$1,350</span>
                      </div>
                    </div>
                    <button className="w-full py-3 rounded-xl gradient-bg text-primary-foreground font-medium">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Seamless Travel Experience</h2>
              <p className="text-muted-foreground mb-6">
                All components designed for intuitive trip planning and booking.
              </p>
              <Link
                to="/projects/travel-booking-app"
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

export default TravelBookingDesigns;