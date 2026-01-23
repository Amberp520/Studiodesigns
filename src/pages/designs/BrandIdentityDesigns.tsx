import { ArrowLeft, Copy, Check, Eye, Download, Palette, Type, Layers, Grid3X3 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandIdentityDesigns = () => {
  const navigate = useNavigate();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleBackToWork = () => {
    navigate('/#work');
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const primaryColors = [
    { name: "Deep Teal", hex: "#0D9488", rgb: "13, 148, 136" },
    { name: "Teal Light", hex: "#14B8A6", rgb: "20, 184, 166" },
    { name: "Teal Dark", hex: "#0F766E", rgb: "15, 118, 110" },
  ];

  const accentColors = [
    { name: "Coral", hex: "#F97316", rgb: "249, 115, 22" },
    { name: "Gold", hex: "#EAB308", rgb: "234, 179, 8" },
    { name: "Rose", hex: "#F43F5E", rgb: "244, 63, 94" },
    { name: "Violet", hex: "#8B5CF6", rgb: "139, 92, 246" },
  ];

  const neutralColors = [
    { name: "Slate 900", hex: "#0F172A" },
    { name: "Slate 700", hex: "#334155" },
    { name: "Slate 500", hex: "#64748B" },
    { name: "Slate 300", hex: "#CBD5E1" },
    { name: "Slate 100", hex: "#F1F5F9" },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/brand-identity-system" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              Brand Identity <span className="text-teal-600">Design System</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Complete brand identity kit with logos, colors, typography, and comprehensive usage guidelines.
            </p>
          </div>

          {/* Section 1: Logo System */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-sm font-bold">1</span>
              Logo System
            </h2>
            <div className="rounded-3xl bg-white shadow-xl p-8" style={{ border: '1px solid #e2e8f0' }}>
              {/* Primary Logo */}
              <div className="mb-12">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Primary Logo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-12">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                        <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>Vertex</span>
                        <span className="text-4xl font-light text-teal-600" style={{ fontFamily: 'Clash Display, sans-serif' }}>Labs</span>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-2xl bg-slate-900 flex items-center justify-center p-12">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>Vertex</span>
                        <span className="text-4xl font-light text-teal-400" style={{ fontFamily: 'Clash Display, sans-serif' }}>Labs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Variations */}
              <div className="mb-12">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Logo Variations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Icon Only */}
                  <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-8 border border-slate-100">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <span className="text-4xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                    </div>
                  </div>
                  {/* Horizontal */}
                  <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-6 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                        <span className="text-xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                      </div>
                      <span className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>Vertex</span>
                    </div>
                  </div>
                  {/* Stacked */}
                  <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center p-6 border border-slate-100">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                      </div>
                      <span className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>Vertex Labs</span>
                    </div>
                  </div>
                  {/* Minimal */}
                  <div className="aspect-square rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    <span className="text-6xl font-bold text-teal-600" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                  </div>
                </div>
              </div>

              {/* Clear Space */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Clear Space & Minimum Size</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-slate-50 p-10 border border-slate-100">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 border-2 border-dashed border-teal-300 -m-8 rounded-xl" />
                      <div className="flex items-center gap-3 relative">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                          <span className="text-xl font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>Vertex Labs</span>
                      </div>
                      <span className="absolute -top-7 left-0 text-xs text-teal-600 font-medium">X</span>
                      <span className="absolute -bottom-7 left-0 text-xs text-teal-600 font-medium">X</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-12">Maintain clear space equal to the height of the "V" mark.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-10 border border-slate-100">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-2">
                          <span className="text-sm font-bold text-white" style={{ fontFamily: 'Clash Display, sans-serif' }}>V</span>
                        </div>
                        <p className="text-xs text-slate-500">32px</p>
                        <p className="text-xs text-emerald-600 font-medium">✓ Minimum</p>
                      </div>
                      <div className="text-center opacity-50">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-2">
                          <span className="text-[6px] font-bold text-white">V</span>
                        </div>
                        <p className="text-xs text-slate-500">16px</p>
                        <p className="text-xs text-red-500 font-medium">✗ Too small</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 mt-8">Minimum logo size: 32px digital, 12mm print.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Color System */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-sm font-bold">2</span>
              Color System
            </h2>
            <div className="rounded-3xl bg-white shadow-xl p-8" style={{ border: '1px solid #e2e8f0' }}>
              {/* Primary Colors */}
              <div className="mb-10">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Primary Colors</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {primaryColors.map((color) => (
                    <div key={color.name} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div 
                        className="h-28 cursor-pointer hover:opacity-90 transition-opacity flex items-end p-4" 
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyColor(color.hex)}
                      >
                        <span className="text-white/80 text-sm font-medium">Click to copy</span>
                      </div>
                      <div className="p-5 bg-white">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-900">{color.name}</span>
                          {copiedColor === color.hex ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-slate-400 cursor-pointer" onClick={() => copyColor(color.hex)} />
                          )}
                        </div>
                        <p className="text-sm text-slate-500 font-mono">{color.hex}</p>
                        <p className="text-sm text-slate-400">RGB: {color.rgb}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent Colors */}
              <div className="mb-10">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Accent Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {accentColors.map((color) => (
                    <div key={color.name} className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      <div 
                        className="h-20 cursor-pointer hover:opacity-90 transition-opacity" 
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyColor(color.hex)}
                      />
                      <div className="p-4 bg-white">
                        <p className="font-medium text-slate-900 text-sm">{color.name}</p>
                        <p className="text-xs text-slate-500 font-mono">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="mb-10">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Neutral Palette</h3>
                <div className="flex rounded-2xl overflow-hidden border border-slate-100">
                  {neutralColors.map((color, i) => (
                    <div key={color.name} className="flex-1 cursor-pointer hover:scale-y-105 transition-transform origin-bottom" onClick={() => copyColor(color.hex)}>
                      <div className="h-24" style={{ backgroundColor: color.hex }} />
                      <div className="p-3 bg-white text-center border-t border-slate-100">
                        <p className="text-xs font-medium text-slate-700">{color.name}</p>
                        <p className="text-xs text-slate-400 font-mono">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Brand Gradient</h3>
                <div className="h-28 rounded-2xl mb-4" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #0F766E 100%)' }} />
                <code className="text-sm bg-slate-100 text-slate-700 px-4 py-2 rounded-xl inline-block font-mono">
                  linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #0F766E 100%)
                </code>
              </div>
            </div>
          </section>

          {/* Section 3: Typography */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-sm font-bold">3</span>
              Typography System
            </h2>
            <div className="rounded-3xl bg-white shadow-xl p-8" style={{ border: '1px solid #e2e8f0' }}>
              {/* Font Family */}
              <div className="mb-10">
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Font Families</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                    <p className="text-sm text-slate-500 mb-2">Display / Headlines</p>
                    <p className="text-4xl font-bold text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>Clash Display</p>
                    <p className="text-7xl font-bold text-slate-900 mt-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Aa</p>
                    <p className="text-slate-500 mt-6 text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890!@#$%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                    <p className="text-sm text-slate-500 mb-2">Body / UI</p>
                    <p className="text-4xl text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>Inter</p>
                    <p className="text-7xl text-slate-900 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>Aa</p>
                    <p className="text-slate-500 mt-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890!@#$%</p>
                  </div>
                </div>
              </div>

              {/* Type Scale */}
              <div>
                <h3 className="text-slate-900 font-semibold mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Type Scale</h3>
                <div className="space-y-3">
                  {[
                    { name: "Display", size: "text-6xl", px: "60px", use: "Hero sections" },
                    { name: "H1", size: "text-5xl", px: "48px", use: "Page titles" },
                    { name: "H2", size: "text-4xl", px: "36px", use: "Section headers" },
                    { name: "H3", size: "text-2xl", px: "24px", use: "Subsections" },
                    { name: "Body", size: "text-base", px: "16px", use: "Paragraphs" },
                    { name: "Small", size: "text-sm", px: "14px", use: "Captions" },
                  ].map((type) => (
                    <div key={type.name} className="flex items-center gap-6 p-5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-24">
                        <p className="font-semibold text-slate-900">{type.name}</p>
                        <p className="text-xs text-slate-500">{type.px}</p>
                      </div>
                      <p className={`flex-1 ${type.size} text-slate-900 truncate`} style={{ fontFamily: 'Clash Display, sans-serif' }}>The quick brown fox</p>
                      <p className="text-sm text-slate-400 hidden md:block">{type.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Components */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white text-sm font-bold">4</span>
              UI Components
            </h2>
            <div className="rounded-3xl bg-white shadow-xl p-8" style={{ border: '1px solid #e2e8f0' }}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buttons */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Buttons</h4>
                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold shadow-lg shadow-teal-500/30">Primary</button>
                    <button className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold border border-slate-200">Secondary</button>
                    <button className="w-full py-3 rounded-xl border-2 border-teal-500 text-teal-600 font-semibold">Outline</button>
                  </div>
                </div>

                {/* Inputs */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Inputs</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Default input" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none text-slate-900" />
                    <input type="text" placeholder="Disabled input" disabled className="w-full px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed" />
                  </div>
                </div>

                {/* Cards */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Cards</h4>
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold">V</div>
                      <div>
                        <p className="font-semibold text-slate-900">Card Title</p>
                        <p className="text-slate-500 text-xs">Subtitle text</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">Card content goes here with more details.</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">Default</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">Success</span>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">Warning</span>
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">Error</span>
                  </div>
                </div>

                {/* Avatars */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Avatars</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold">JD</div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">AB</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-xs">CD</div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">+5</div>
                  </div>
                </div>

                {/* Toggle */}
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Toggles</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 text-sm">Active</span>
                      <div className="w-12 h-7 rounded-full bg-teal-500 p-1 cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white shadow-sm transform translate-x-5 transition-transform" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700 text-sm">Inactive</span>
                      <div className="w-12 h-7 rounded-full bg-slate-200 p-1 cursor-pointer">
                        <div className="w-5 h-5 rounded-full bg-white shadow-sm transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Work */}
          <section className="text-center">
            <div className="rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)' }}>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Clash Display, sans-serif' }}>Explore More Projects</h3>
              <p className="text-white/80 mb-6">Check out other design work in my portfolio</p>
              <button 
                onClick={handleBackToWork}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-teal-700 font-semibold hover:bg-slate-50 transition-colors shadow-lg"
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

export default BrandIdentityDesigns;
