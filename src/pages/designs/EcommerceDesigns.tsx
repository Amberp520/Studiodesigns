import { ArrowLeft, ShoppingBag, Heart, Star, Search, User, ChevronRight, Plus, Minus, Truck, Shield, RotateCcw, CreditCard, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EcommerceDesigns = () => {
  const navigate = useNavigate();

  const handleBackToWork = () => {
    navigate('/#work');
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: '#faf9f7' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/e-commerce-redesign" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              E-commerce <span className="text-amber-700">Redesign</span>
            </h1>
            <p className="text-stone-500 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Premium furniture shopping experience with elegant product displays and seamless checkout.
            </p>
          </div>

          {/* Screen 1: Homepage */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>1</span>
              Homepage Design
            </h2>
            <div className="rounded-3xl overflow-hidden bg-white shadow-xl" style={{ border: '1px solid #e7e5e4' }}>
              {/* Header */}
              <div className="px-8 py-5 border-b border-stone-200 flex items-center justify-between">
                <span className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>Artisan Home</span>
                <nav className="hidden md:flex gap-8">
                  {["New Arrivals", "Living", "Bedroom", "Dining", "Office"].map((item) => (
                    <a key={item} href="#" className="text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium">{item}</a>
                  ))}
                </nav>
                <div className="flex items-center gap-4">
                  <Search className="w-5 h-5 text-stone-400" />
                  <User className="w-5 h-5 text-stone-400" />
                  <div className="relative">
                    <ShoppingBag className="w-5 h-5 text-stone-400" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center">3</span>
                  </div>
                </div>
              </div>

              {/* Hero */}
              <div className="relative h-[500px]" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #c9956c 50%, #a67c52 100%)' }}>
                <div className="absolute inset-0 flex items-center px-16">
                  <div className="max-w-xl">
                    <span className="text-amber-900/60 text-sm font-medium tracking-widest uppercase">New Collection 2024</span>
                    <h2 className="text-6xl font-bold text-white mt-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Crafted for Modern Living
                    </h2>
                    <p className="text-white/80 text-lg mt-4">Discover handcrafted furniture that brings warmth and elegance to every space.</p>
                    <button className="mt-8 px-10 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
                      Explore Collection
                    </button>
                  </div>
                </div>
                {/* Decorative chair silhouette */}
                <div className="absolute right-20 bottom-0 w-96 h-96 opacity-20">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <ellipse cx="100" cy="180" rx="60" ry="15" fill="white" />
                    <path d="M60 80 Q80 30 100 40 Q120 30 140 80 L150 180 L50 180 Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Shop by Category</h3>
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { name: "Living Room", count: "124 items", bg: "from-amber-100 to-amber-50" },
                    { name: "Bedroom", count: "86 items", bg: "from-stone-200 to-stone-100" },
                    { name: "Dining", count: "52 items", bg: "from-amber-200/50 to-amber-100/50" },
                    { name: "Office", count: "38 items", bg: "from-stone-300/50 to-stone-200/50" },
                  ].map((cat, i) => (
                    <div key={i} className={`rounded-2xl bg-gradient-to-br ${cat.bg} p-6 cursor-pointer hover:shadow-lg transition-shadow`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-4">
                        <span className="text-3xl">{["🛋️", "🛏️", "🪑", "💼"][i]}</span>
                      </div>
                      <h4 className="font-semibold text-stone-900">{cat.name}</h4>
                      <p className="text-stone-500 text-sm">{cat.count}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Products */}
              <div className="p-8 pt-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>Best Sellers</h3>
                  <a href="#" className="text-amber-700 text-sm font-medium flex items-center gap-1">View all <ChevronRight className="w-4 h-4" /></a>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { name: "Oslo Armchair", price: "$1,299", oldPrice: "$1,599", rating: 4.9, reviews: 128 },
                    { name: "Teak Dining Table", price: "$2,450", rating: 4.8, reviews: 89 },
                    { name: "Luna Floor Lamp", price: "$485", rating: 4.7, reviews: 64 },
                    { name: "Bergen Sofa", price: "$3,200", oldPrice: "$3,800", rating: 5.0, reviews: 156 },
                  ].map((product, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-stone-100 to-stone-50 relative overflow-hidden mb-4">
                        <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-60">
                          {["🪑", "🪵", "💡", "🛋️"][i]}
                        </div>
                        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="w-5 h-5 text-stone-400" />
                        </button>
                        {product.oldPrice && (
                          <span className="absolute top-4 left-4 px-3 py-1 bg-amber-700 text-white text-xs font-medium rounded-full">Sale</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium text-stone-900">{product.rating}</span>
                        <span className="text-sm text-stone-400">({product.reviews})</span>
                      </div>
                      <h4 className="font-semibold text-stone-900">{product.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-bold text-amber-700">{product.price}</span>
                        {product.oldPrice && <span className="text-stone-400 line-through text-sm">{product.oldPrice}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Screen 2: Product Page */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>2</span>
              Product Detail
            </h2>
            <div className="rounded-3xl overflow-hidden bg-white shadow-xl p-8" style={{ border: '1px solid #e7e5e4' }}>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #c9956c 100%)' }}>
                    <span className="text-[200px] opacity-80">🪑</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`aspect-square rounded-xl flex items-center justify-center cursor-pointer ${i === 1 ? 'ring-2 ring-amber-700' : ''}`} style={{ background: 'linear-gradient(135deg, #d4a574 0%, #c9956c 100%)' }}>
                        <span className="text-4xl opacity-70">🪑</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-amber-700 text-sm font-medium">Oslo Collection</span>
                    <h2 className="text-4xl font-bold text-stone-900 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>Oslo Armchair</h2>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-stone-600">128 reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-amber-700">$1,299</span>
                    <span className="text-xl text-stone-400 line-through">$1,599</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Save $300</span>
                  </div>

                  <p className="text-stone-600 leading-relaxed">
                    The Oslo Armchair combines Scandinavian simplicity with exceptional comfort. Crafted from sustainably sourced oak with premium leather upholstery, this piece brings timeless elegance to any living space.
                  </p>

                  {/* Color Selection */}
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-3">Color: <span className="font-normal text-stone-600">Cognac Leather</span></h4>
                    <div className="flex gap-3">
                      {[
                        { color: "bg-amber-700", active: true },
                        { color: "bg-stone-800" },
                        { color: "bg-stone-400" },
                        { color: "bg-amber-100" },
                      ].map((c, i) => (
                        <button key={i} className={`w-12 h-12 rounded-full ${c.color} ${c.active ? 'ring-2 ring-offset-2 ring-amber-700' : ''} hover:scale-110 transition-transform`} />
                      ))}
                    </div>
                  </div>

                  {/* Quantity & Add to Cart */}
                  <div className="flex gap-4">
                    <div className="flex items-center border border-stone-200 rounded-full">
                      <button className="w-12 h-12 flex items-center justify-center hover:bg-stone-50 rounded-l-full">
                        <Minus className="w-4 h-4 text-stone-600" />
                      </button>
                      <span className="w-12 text-center font-medium">1</span>
                      <button className="w-12 h-12 flex items-center justify-center hover:bg-stone-50 rounded-r-full">
                        <Plus className="w-4 h-4 text-stone-600" />
                      </button>
                    </div>
                    <button className="flex-1 py-4 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50">
                      <Heart className="w-5 h-5 text-stone-600" />
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200">
                    {[
                      { icon: Truck, label: "Free Shipping", desc: "On orders over $500" },
                      { icon: Shield, label: "5 Year Warranty", desc: "Full coverage" },
                      { icon: RotateCcw, label: "Easy Returns", desc: "30-day policy" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <item.icon className="w-6 h-6 mx-auto text-amber-700 mb-2" />
                        <p className="font-medium text-stone-900 text-sm">{item.label}</p>
                        <p className="text-stone-500 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Mobile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>3</span>
              Mobile Experience
            </h2>
            <div className="flex flex-wrap gap-12 justify-center">
              {/* iPhone Mockup 1 - Home */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #3d3d3d 0%, #1a1a1a 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-white">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xl font-bold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>Artisan</span>
                        <div className="flex gap-3">
                          <Search className="w-5 h-5 text-stone-400" />
                          <div className="relative">
                            <ShoppingBag className="w-5 h-5 text-stone-400" />
                            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-700 text-white text-[10px] flex items-center justify-center">3</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl h-40 mb-6 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #a67c52 100%)' }}>
                        <div className="absolute inset-0 flex items-center px-5">
                          <div>
                            <p className="text-white/80 text-xs">New Season</p>
                            <p className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Modern Living</p>
                            <button className="mt-2 px-4 py-1.5 bg-white text-stone-900 rounded-full text-xs font-medium">Shop Now</button>
                          </div>
                        </div>
                        <span className="absolute right-4 text-6xl opacity-60">🪑</span>
                      </div>

                      <p className="font-semibold text-stone-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Popular</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Oslo Chair", price: "$1,299" },
                          { name: "Bergen Sofa", price: "$3,200" },
                        ].map((item, i) => (
                          <div key={i} className="rounded-2xl overflow-hidden bg-stone-100">
                            <div className="aspect-square flex items-center justify-center">
                              <span className="text-5xl opacity-70">{["🪑", "🛋️"][i]}</span>
                            </div>
                            <div className="p-3 bg-white">
                              <p className="font-medium text-stone-900 text-sm">{item.name}</p>
                              <p className="text-amber-700 font-bold text-sm">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone Mockup 2 - Checkout */}
              <div className="relative">
                <div className="relative w-[300px] h-[620px] rounded-[55px] p-3" style={{ background: 'linear-gradient(145deg, #3d3d3d 0%, #1a1a1a 100%)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)' }}>
                  <div className="absolute inset-[3px] rounded-[52px]" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }} />
                  
                  <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-white">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full bg-black z-10" />
                    
                    <div className="px-6 pt-14">
                      <div className="flex items-center gap-3 mb-6">
                        <ArrowLeft className="w-5 h-5 text-stone-600" />
                        <span className="font-semibold text-stone-900" style={{ fontFamily: 'Playfair Display, serif' }}>Checkout</span>
                      </div>

                      {/* Progress */}
                      <div className="flex items-center gap-2 mb-6">
                        {["Cart", "Shipping", "Payment"].map((step, i) => (
                          <div key={step} className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${i <= 1 ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-500'}`}>
                              {i < 1 ? <Check className="w-3 h-3" /> : i + 1}
                            </div>
                            {i < 2 && <div className={`w-8 h-0.5 ${i < 1 ? 'bg-amber-700' : 'bg-stone-200'}`} />}
                          </div>
                        ))}
                      </div>

                      {/* Cart Item */}
                      <div className="flex gap-3 p-3 rounded-xl bg-stone-50 mb-4">
                        <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #c9956c 100%)' }}>
                          <span className="text-2xl">🪑</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-stone-900 text-sm">Oslo Armchair</p>
                          <p className="text-stone-400 text-xs">Cognac • Qty: 1</p>
                          <p className="text-amber-700 font-bold text-sm mt-1">$1,299</p>
                        </div>
                      </div>

                      {/* Payment Form */}
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl border border-stone-200">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-amber-700" />
                            <span className="text-stone-900 text-sm font-medium">•••• 4242</span>
                            <span className="ml-auto text-stone-400 text-xs">Visa</span>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-stone-200 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-stone-500">Subtotal</span>
                            <span className="text-stone-900">$1,299</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-stone-500">Shipping</span>
                            <span className="text-green-600">Free</span>
                          </div>
                          <div className="flex justify-between font-bold pt-2">
                            <span className="text-stone-900">Total</span>
                            <span className="text-amber-700">$1,299</span>
                          </div>
                        </div>

                        <button className="w-full py-4 rounded-full bg-stone-900 text-white font-medium text-sm">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Work */}
          <section className="text-center">
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #d4a574 0%, #a67c52 100%)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Explore More Projects</h3>
              <p className="text-white/80 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-stone-900 font-semibold hover:bg-stone-50 transition-colors"
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

export default EcommerceDesigns;
