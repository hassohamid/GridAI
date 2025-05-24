import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, Shield, Zap, Heart } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-30"></div>
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-slate-600 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
            <Sparkles className="h-4 w-4 mr-2 text-blue-600" />
            Simple & Transparent
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
            One Price.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Unlimited Possibilities.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No subscriptions. No hidden fees. No complicated tiers.
            <br />
            Just pay for what you create.
          </p>
        </div>
        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>{" "}
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-200/60 backdrop-blur-sm">
              {/* Price Display */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    $5
                  </span>
                  <span className="text-lg sm:text-xl text-slate-500 ml-2 sm:ml-3">
                    per feed
                  </span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200/60">
                  <Check className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-emerald-700 font-medium text-sm">
                    One-time payment
                  </span>
                </div>
              </div>{" "}
              {/* What's Included */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h3 className="text-lg font-semibold text-slate-800 text-center mb-4 sm:mb-6">
                  Everything you need to create the perfect feed
                </h3>
                <div className="grid gap-3">
                  {[
                    "AI-powered photo enhancement",
                    "Perfect 3x3 grid layout optimization",
                    "9 professionally enhanced photos",
                    "Instant processing & download",
                    "High-resolution exports",
                    "No watermarks or limitations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA Button */}
              <Button
                className=" cursor-pointer w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
                size="lg"
              >
                Create Your Feed Now
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* Trust Badge */}
              <div className="text-center mt-6">
                <div className="inline-flex items-center text-sm text-slate-500">
                  <Shield className="h-4 w-4 mr-2 text-emerald-600" />
                  Secure payment • Instant delivery
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Value Props */}
        {/* Social Proof */}
      </div>
    </section>
  );
}
