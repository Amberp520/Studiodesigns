import { ArrowLeft, ShoppingCart, Heart, Star, Search, User, Filter, ChevronDown, Plus, Minus, CreditCard, Truck, Shield, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EcommerceDesigns = () => {
  const [cartItems, setCartItems] = useState(3);

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/e-commerce-redesign" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-commerce <span className="gradient-text">Design Assets</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Complete e-commerce UI kit with product pages, cart, and checkout flow designs.
            </p>
          </div>

          {/* Screen 1: Homepage */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Homepage Design
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Navbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <div className="flex items-center gap-8">
                  <span className="text-2xl font-bold gradient-text">ShopFlow</span>
                  <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">New Arrivals</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Women</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Men</a>
                    <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Accessories</a>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center relative">
                    <ShoppingCart className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-bg text-primary-foreground text-xs flex items-center justify-center">3</span>
                  </button>
                </div>
              </div>

              {/* Hero Banner */}
              <div className="relative rounded-2xl overflow-hidden mb-8 h-80 bg-gradient-to-r from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center p-12">
                  <div className="max-w-md">
                    <span className="text-sm font-medium text-primary mb-2 block">New Collection 2024</span>
                    <h2 className="text-4xl font-bold mb-4">Summer Essentials</h2>
                    <p className="text-muted-foreground mb-6">Discover the latest trends in fashion with our curated collection of summer must-haves.</p>
                    <button className="px-8 py-3 rounded-full gradient-bg text-primary-foreground font-medium">Shop Now</button>
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 bg-gradient-to-l from-primary/50" />
              </div>

              {/* Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Dresses", count: "240 items", emoji: "👗" },
                  { name: "Tops", count: "180 items", emoji: "👕" },
                  { name: "Shoes", count: "120 items", emoji: "👟" },
                  { name: "Accessories", count: "95 items", emoji: "👜" },
                ].map((cat, i) => (
                  <div key={i} className="rounded-xl bg-muted/50 p-6 text-center hover:bg-muted transition-colors cursor-pointer">
                    <span className="text-4xl block mb-3">{cat.emoji}</span>
                    <h3 className="font-semibold">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.count}</p>
                  </div>
                ))}
              </div>

              {/* Featured Products */}
              <h3 className="text-xl font-bold mb-4">Featured Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Silk Midi Dress", price: "$189", rating: 4.8, image: "👗" },
                  { name: "Linen Blazer", price: "$245", rating: 4.9, image: "🧥" },
                  { name: "Canvas Sneakers", price: "$125", rating: 4.7, image: "👟" },
                  { name: "Leather Tote", price: "$320", rating: 5.0, image: "👜" },
                ].map((product, i) => (
                  <div key={i} className="rounded-xl bg-muted/30 overflow-hidden group cursor-pointer">
                    <div className="aspect-square bg-muted/50 flex items-center justify-center text-6xl relative">
                      {product.image}
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">{product.price}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Screen 2: Product Page */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Product Detail Page
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl bg-muted/50 flex items-center justify-center text-[150px]">
                    👗
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`aspect-square rounded-lg bg-muted/50 flex items-center justify-center text-2xl cursor-pointer ${i === 1 ? 'ring-2 ring-primary' : ''}`}>
                        👗
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-primary font-medium">Summer Collection</span>
                    <h2 className="text-3xl font-bold mt-1">Silk Midi Dress</h2>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">(128 reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">$189</span>
                    <span className="text-xl text-muted-foreground line-through">$249</span>
                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-sm font-medium">-24%</span>
                  </div>

                  <p className="text-muted-foreground">
                    Elegant silk midi dress perfect for summer occasions. Features a flattering A-line silhouette with delicate pleating and adjustable straps.
                  </p>

                  {/* Color Selection */}
                  <div>
                    <h4 className="font-medium mb-3">Color: <span className="text-muted-foreground">Dusty Rose</span></h4>
                    <div className="flex gap-2">
                      {[
                        { color: "bg-pink-300", active: true },
                        { color: "bg-sky-300", active: false },
                        { color: "bg-slate-800", active: false },
                        { color: "bg-amber-100", active: false },
                      ].map((c, i) => (
                        <button key={i} className={`w-10 h-10 rounded-full ${c.color} ${c.active ? 'ring-2 ring-offset-2 ring-primary' : ''}`} />
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <div className="flex justify-between mb-3">
                      <h4 className="font-medium">Size</h4>
                      <button className="text-sm text-primary">Size Guide</button>
                    </div>
                    <div className="flex gap-2">
                      {["XS", "S", "M", "L", "XL"].map((size, i) => (
                        <button key={size} className={`w-12 h-12 rounded-lg border font-medium ${i === 2 ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary'}`}>
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button className="w-10 h-10 flex items-center justify-center hover:bg-muted">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">1</span>
                      <button className="w-10 h-10 flex items-center justify-center hover:bg-muted">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground">Only 5 left in stock</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-4 rounded-xl gradient-bg text-primary-foreground font-medium flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    <button className="w-14 h-14 rounded-xl border border-border flex items-center justify-center hover:bg-muted">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {[
                      { icon: Truck, label: "Free Shipping" },
                      { icon: Shield, label: "Secure Payment" },
                      { icon: Package, label: "Easy Returns" },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <item.icon className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Screen 3: Checkout Flow */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Checkout Flow
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
                {["Cart", "Shipping", "Payment", "Confirm"].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${i <= 2 ? 'gradient-bg text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                      {i + 1}
                    </div>
                    {i < 3 && <div className={`w-12 h-0.5 ${i < 2 ? 'bg-primary' : 'bg-muted'}`} />}
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-semibold">Your Cart (3 items)</h3>
                  {[
                    { name: "Silk Midi Dress", size: "M", color: "Rose", price: "$189", qty: 1, emoji: "👗" },
                    { name: "Linen Blazer", size: "S", color: "Navy", price: "$245", qty: 1, emoji: "🧥" },
                    { name: "Canvas Sneakers", size: "38", color: "White", price: "$125", qty: 1, emoji: "👟" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/30">
                      <div className="w-20 h-20 rounded-lg bg-muted/50 flex items-center justify-center text-3xl">
                        {item.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.name}</h4>
                          <span className="font-bold">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Size: {item.size} • Color: {item.color}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-border rounded">
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-muted">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.qty}</span>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-muted">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button className="text-sm text-muted-foreground hover:text-red-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="rounded-xl bg-muted/30 p-6 sticky top-24">
                    <h3 className="font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$559.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-green-500">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>$44.72</span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>$603.72</span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-6">
                      <div className="flex gap-2">
                        <input type="text" placeholder="Promo code" className="flex-1 px-4 py-2 rounded-lg bg-background border border-border text-sm" />
                        <button className="px-4 py-2 rounded-lg bg-muted font-medium text-sm">Apply</button>
                      </div>
                    </div>

                    <button className="w-full mt-6 py-4 rounded-xl gradient-bg text-primary-foreground font-medium">
                      Proceed to Checkout
                    </button>

                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Secure 256-bit SSL encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Screens */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">4</span>
              Mobile App Screens
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
              {/* Mobile Product List */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">New Arrivals</h3>
                      <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Filter className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {["👗", "🧥", "👟", "👜"].map((emoji, i) => (
                        <div key={i} className="rounded-xl bg-muted/50 overflow-hidden">
                          <div className="aspect-square flex items-center justify-center text-4xl bg-muted/30">
                            {emoji}
                          </div>
                          <div className="p-2">
                            <p className="text-xs font-medium truncate">Product Name</p>
                            <p className="text-sm font-bold">$129</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Cart */}
              <div className="w-[280px] h-[580px] rounded-[40px] bg-foreground p-3 shadow-2xl">
                <div className="w-full h-full rounded-[32px] bg-background overflow-hidden">
                  <div className="px-6 py-2 flex justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1"><span>📶</span><span>🔋</span></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-4">Shopping Cart</h3>
                    <div className="space-y-3">
                      {["👗", "🧥"].map((emoji, i) => (
                        <div key={i} className="flex gap-3 p-3 rounded-xl bg-muted/30">
                          <div className="w-16 h-16 rounded-lg bg-muted/50 flex items-center justify-center text-2xl">
                            {emoji}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Product</p>
                            <p className="text-xs text-muted-foreground">Size: M</p>
                            <p className="font-bold mt-1">$189</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex justify-between mb-4">
                        <span className="text-muted-foreground">Total</span>
                        <span className="font-bold">$434</span>
                      </div>
                      <button className="w-full py-3 rounded-xl gradient-bg text-primary-foreground font-medium text-sm">
                        Checkout
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
              <h2 className="text-2xl font-bold mb-4">Ready to Use</h2>
              <p className="text-muted-foreground mb-6">
                All components follow modern e-commerce UX patterns. Right-click to copy or save elements.
              </p>
              <Link
                to="/projects/e-commerce-redesign"
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

export default EcommerceDesigns;