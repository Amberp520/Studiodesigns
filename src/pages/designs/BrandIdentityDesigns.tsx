import { ArrowLeft, Eye, Download, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BrandIdentityDesigns = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const primaryColors = [
    { name: "Primary", hex: "#7C3AED", hsl: "hsl(262, 83%, 58%)" },
    { name: "Primary Light", hex: "#A78BFA", hsl: "hsl(262, 92%, 76%)" },
    { name: "Primary Dark", hex: "#5B21B6", hsl: "hsl(262, 69%, 42%)" },
  ];

  const secondaryColors = [
    { name: "Accent", hex: "#06B6D4", hsl: "hsl(188, 94%, 43%)" },
    { name: "Success", hex: "#10B981", hsl: "hsl(160, 84%, 39%)" },
    { name: "Warning", hex: "#F59E0B", hsl: "hsl(38, 92%, 50%)" },
    { name: "Error", hex: "#EF4444", hsl: "hsl(0, 84%, 60%)" },
  ];

  const neutralColors = [
    { name: "Gray 900", hex: "#111827" },
    { name: "Gray 700", hex: "#374151" },
    { name: "Gray 500", hex: "#6B7280" },
    { name: "Gray 300", hex: "#D1D5DB" },
    { name: "Gray 100", hex: "#F3F4F6" },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/projects/brand-identity-system" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Study
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Brand Identity <span className="gradient-text">Design System</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Complete brand identity kit with logos, colors, typography, and usage guidelines.
            </p>
          </div>

          {/* Section 1: Logo System */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
              Logo System
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Primary Logo */}
              <div className="mb-12">
                <h3 className="font-semibold mb-4">Primary Logo</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video rounded-xl bg-background border border-border flex items-center justify-center p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-foreground">N</span>
                      </div>
                      <div>
                        <span className="text-4xl font-bold">Nexus</span>
                        <span className="text-4xl font-light text-primary">Labs</span>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video rounded-xl bg-foreground flex items-center justify-center p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center">
                        <span className="text-3xl font-bold gradient-text">N</span>
                      </div>
                      <div>
                        <span className="text-4xl font-bold text-background">Nexus</span>
                        <span className="text-4xl font-light text-primary-foreground">Labs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo Variations */}
              <div className="mb-12">
                <h3 className="font-semibold mb-4">Logo Variations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Icon Only */}
                  <div className="aspect-square rounded-xl bg-muted/30 flex items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">N</span>
                    </div>
                  </div>
                  {/* Horizontal */}
                  <div className="aspect-square rounded-xl bg-muted/30 flex items-center justify-center p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-foreground">N</span>
                      </div>
                      <span className="text-xl font-bold">Nexus</span>
                    </div>
                  </div>
                  {/* Stacked */}
                  <div className="aspect-square rounded-xl bg-muted/30 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-primary-foreground">N</span>
                      </div>
                      <span className="text-lg font-bold">Nexus Labs</span>
                    </div>
                  </div>
                  {/* Minimal */}
                  <div className="aspect-square rounded-xl bg-muted/30 flex items-center justify-center">
                    <span className="text-5xl font-bold gradient-text">N</span>
                  </div>
                </div>
              </div>

              {/* Clear Space */}
              <div>
                <h3 className="font-semibold mb-4">Clear Space & Minimum Size</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl bg-muted/30 p-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 border-2 border-dashed border-primary/30 -m-8" />
                      <div className="flex items-center gap-3 relative">
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-foreground">N</span>
                        </div>
                        <span className="text-2xl font-bold">Nexus Labs</span>
                      </div>
                      <span className="absolute -top-6 left-0 text-xs text-primary">X</span>
                      <span className="absolute -bottom-6 left-0 text-xs text-primary">X</span>
                      <span className="absolute top-0 -left-6 text-xs text-primary">X</span>
                      <span className="absolute top-0 -right-6 text-xs text-primary">X</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-12">Maintain clear space equal to the height of the "N" mark around all sides.</p>
                  </div>
                  <div className="rounded-xl bg-muted/30 p-8">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs font-bold text-primary-foreground">N</span>
                        </div>
                        <p className="text-xs text-muted-foreground">24px</p>
                        <p className="text-xs text-green-500">✓ Min</p>
                      </div>
                      <div className="text-center">
                        <div className="w-4 h-4 rounded gradient-bg flex items-center justify-center mx-auto mb-2">
                          <span className="text-[8px] font-bold text-primary-foreground">N</span>
                        </div>
                        <p className="text-xs text-muted-foreground">16px</p>
                        <p className="text-xs text-red-500">✗ Too small</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">Minimum logo size is 24px for digital and 10mm for print.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Color System */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
              Color System
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Primary Colors */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Primary Colors</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {primaryColors.map((color) => (
                    <div key={color.name} className="rounded-xl overflow-hidden border border-border">
                      <div className="h-24 cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: color.hex }} onClick={() => copyColor(color.hex)} />
                      <div className="p-4 bg-background">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{color.name}</span>
                          {copiedColor === color.hex ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground cursor-pointer" onClick={() => copyColor(color.hex)} />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{color.hex}</p>
                        <p className="text-sm text-muted-foreground">{color.hsl}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Secondary & Semantic Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {secondaryColors.map((color) => (
                    <div key={color.name} className="rounded-xl overflow-hidden border border-border">
                      <div className="h-16 cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: color.hex }} onClick={() => copyColor(color.hex)} />
                      <div className="p-3 bg-background">
                        <p className="font-medium text-sm">{color.name}</p>
                        <p className="text-xs text-muted-foreground">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Colors */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Neutral Palette</h3>
                <div className="flex rounded-xl overflow-hidden border border-border">
                  {neutralColors.map((color, i) => (
                    <div key={color.name} className="flex-1 cursor-pointer hover:scale-y-110 transition-transform origin-bottom" onClick={() => copyColor(color.hex)}>
                      <div className="h-20" style={{ backgroundColor: color.hex }} />
                      <div className="p-2 bg-background text-center">
                        <p className="text-xs font-medium">{color.name}</p>
                        <p className="text-xs text-muted-foreground">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gradient */}
              <div>
                <h3 className="font-semibold mb-4">Brand Gradient</h3>
                <div className="h-24 rounded-xl gradient-bg mb-4" />
                <div className="flex gap-4">
                  <code className="text-sm bg-muted px-3 py-1.5 rounded-lg">
                    linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)
                  </code>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Typography */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
              Typography System
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {/* Font Family */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Font Family</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl bg-muted/30 p-6">
                    <p className="text-sm text-muted-foreground mb-2">Display / Headlines</p>
                    <p className="text-4xl font-bold">Inter Bold</p>
                    <p className="text-6xl font-bold mt-4">Aa</p>
                    <p className="text-muted-foreground mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890!@#$%</p>
                  </div>
                  <div className="rounded-xl bg-muted/30 p-6">
                    <p className="text-sm text-muted-foreground mb-2">Body / UI</p>
                    <p className="text-4xl">Inter Regular</p>
                    <p className="text-6xl mt-4">Aa</p>
                    <p className="text-muted-foreground mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />1234567890!@#$%</p>
                  </div>
                </div>
              </div>

              {/* Type Scale */}
              <div className="mb-10">
                <h3 className="font-semibold mb-4">Type Scale</h3>
                <div className="space-y-4">
                  {[
                    { name: "Display", size: "text-6xl", px: "60px", use: "Hero sections" },
                    { name: "H1", size: "text-5xl", px: "48px", use: "Page titles" },
                    { name: "H2", size: "text-4xl", px: "36px", use: "Section headers" },
                    { name: "H3", size: "text-3xl", px: "30px", use: "Card titles" },
                    { name: "H4", size: "text-2xl", px: "24px", use: "Subsections" },
                    { name: "Body Large", size: "text-lg", px: "18px", use: "Lead paragraphs" },
                    { name: "Body", size: "text-base", px: "16px", use: "Default body text" },
                    { name: "Small", size: "text-sm", px: "14px", use: "Captions, labels" },
                  ].map((type) => (
                    <div key={type.name} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                      <div className="w-24">
                        <p className="text-sm font-medium">{type.name}</p>
                        <p className="text-xs text-muted-foreground">{type.px}</p>
                      </div>
                      <p className={`flex-1 ${type.size} truncate`}>The quick brown fox</p>
                      <p className="text-sm text-muted-foreground hidden md:block">{type.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Font Weights */}
              <div>
                <h3 className="font-semibold mb-4">Font Weights</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { weight: "Regular", class: "font-normal", value: "400" },
                    { weight: "Medium", class: "font-medium", value: "500" },
                    { weight: "Semibold", class: "font-semibold", value: "600" },
                    { weight: "Bold", class: "font-bold", value: "700" },
                  ].map((w) => (
                    <div key={w.weight} className="rounded-xl bg-muted/30 p-4 text-center">
                      <p className={`text-3xl ${w.class}`}>Aa</p>
                      <p className="text-sm font-medium mt-2">{w.weight}</p>
                      <p className="text-xs text-muted-foreground">{w.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Components */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">4</span>
              UI Components
            </h2>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buttons */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Buttons</h4>
                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-xl gradient-bg text-primary-foreground font-medium">Primary</button>
                    <button className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-medium">Secondary</button>
                    <button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-medium">Outline</button>
                    <button className="w-full py-3 rounded-xl text-primary font-medium hover:bg-primary/10">Ghost</button>
                  </div>
                </div>

                {/* Inputs */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Inputs</h4>
                  <div className="space-y-3">
                    <input type="text" placeholder="Default input" className="w-full px-4 py-3 rounded-xl bg-background border border-border" />
                    <input type="text" placeholder="Focused" className="w-full px-4 py-3 rounded-xl bg-background border-2 border-primary" />
                    <input type="text" placeholder="Error" className="w-full px-4 py-3 rounded-xl bg-background border-2 border-red-500" />
                  </div>
                </div>

                {/* Cards */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Cards</h4>
                  <div className="rounded-xl bg-background border border-border p-4">
                    <div className="w-full h-20 rounded-lg bg-muted mb-3" />
                    <p className="font-medium">Card Title</p>
                    <p className="text-sm text-muted-foreground">Card description goes here.</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full gradient-bg text-primary-foreground text-sm">Primary</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">Success</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-sm">Warning</span>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-sm">Error</span>
                  </div>
                </div>

                {/* Avatars */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Avatars</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">JD</div>
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-medium">AB</div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm">CD</div>
                  </div>
                </div>

                {/* Icons */}
                <div className="rounded-xl bg-muted/30 p-6">
                  <h4 className="font-semibold mb-4">Icon Style</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <Download className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="w-12 h-12 rounded-xl border-2 border-primary flex items-center justify-center">
                      <Copy className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back Link */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Complete Brand System</h2>
              <p className="text-muted-foreground mb-6">
                All assets are designed for scalability across digital and print applications.
              </p>
              <Link
                to="/projects/brand-identity-system"
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

export default BrandIdentityDesigns;