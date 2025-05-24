import {
  Check,
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      id: 0,
      title: "AI-Powered Enhancement",
      description:
        "Advanced machine learning algorithms analyze your photos and automatically enhance them for maximum aesthetic appeal and engagement.",
      benefits: [
        "Intelligent auto-enhancement",
        "Color balance optimization",
        "Lighting adjustment",
        "Noise reduction",
      ],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      icon: "🤖",
      mockupType: "enhancement",
    },
    {
      id: 1,
      title: "Perfect Grid Layouts",
      description:
        "Create stunning 3x3 Instagram feed layouts that tell a cohesive visual story and maximize engagement.",
      benefits: [
        "9-photo grid optimization",
        "Visual flow analysis",
        "Story-driven arrangements",
        "Aesthetic balance",
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      icon: "📱",
      mockupType: "grid",
    },
    {
      id: 2,
      title: "Instant Results",
      description:
        "Get your optimized feed layouts ready for posting in seconds. No waiting, no complexity, just beautiful results.",
      benefits: [
        "Lightning-fast processing",
        "High-quality outputs",
        "Multiple format options",
        "One-click download",
      ],
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      icon: "⚡",
      mockupType: "speed",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fashion Influencer",
      avatar: "👩‍💼",
      content:
        "GridAI transformed my Instagram completely! My engagement increased 300% after using their AI layouts.",
      rating: 5,
      followers: "120K",
    },
    {
      name: "Marcus Rodriguez",
      role: "Travel Blogger",
      avatar: "👨‍💻",
      content:
        "The AI enhancement feature is incredible. My travel photos look professional without any editing skills.",
      rating: 5,
      followers: "85K",
    },
    {
      name: "Emma Thompson",
      role: "Food Content Creator",
      avatar: "👩‍🍳",
      content:
        "Creating cohesive feed layouts used to take hours. Now it takes minutes with perfect results every time.",
      rating: 5,
      followers: "200K",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  const MockupPreview = ({ type }: { type: string }) => {
    if (type === "enhancement") {
      return (
        <div className="relative h-48 flex items-center justify-center p-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mx-auto">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-xs font-medium text-slate-500 text-center">
                Before
              </div>
              <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center max-w-[120px] mx-auto">
                <span className="text-xl sm:text-2xl opacity-50">📸</span>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-xs font-medium text-emerald-600 text-center">
                After AI Enhancement
              </div>
              <div className="w-full aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center relative overflow-hidden max-w-[120px] mx-auto">
                <span className="text-xl sm:text-2xl">✨</span>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "grid") {
      return (
        <div className="relative h-48 flex flex-col items-center justify-center">
          <div className="text-xs font-medium text-slate-500 text-center mb-3">
            Instagram Feed Preview
          </div>
          <div className="grid grid-cols-3 gap-1 w-40 h-40 bg-white rounded-lg p-2 shadow-lg">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-md ${
                  i === 4
                    ? "bg-gradient-to-br from-pink-400 to-purple-500"
                    : i % 3 === 0
                    ? "bg-gradient-to-br from-blue-400 to-cyan-500"
                    : "bg-gradient-to-br from-orange-400 to-pink-500"
                } flex items-center justify-center`}
              >
                <span className="text-white text-xs">📷</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Speed mockup
    return (
      <div className="relative h-48 flex items-center justify-center">
        <div className="bg-white rounded-lg p-4 shadow-lg w-full max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">⚡</span>
            </div>
            <div>
              <div className="text-sm font-medium">Processing Complete!</div>
              <div className="text-xs text-slate-500">
                Processed in 2.3 seconds
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>AI Enhancement</span>
              <span className="text-emerald-600">✓ Complete</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Grid Optimization</span>
              <span className="text-emerald-600">✓ Complete</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Export Ready</span>
              <span className="text-emerald-600">✓ Ready</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-6 py-3 mb-6 sm:mb-8 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Everything You Need for Perfect Feeds
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Professional-grade tools powered by AI to create Instagram feeds
            that captivate and convert.
          </p>
        </div>{" "}
        {/* Interactive Split-Screen Layout */}
        <div className="max-w-7xl mx-auto">
          {" "}
          {/* Instruction Alert */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
            {/* Left Side - Feature Navigation */}
            <div className="space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl lg:cursor-pointer transition-all duration-500 ${
                    activeFeature === index
                      ? `lg:bg-gradient-to-br lg:${feature.bgColor} shadow-xl lg:scale-[1.02] lg:border-2 lg:border-white bg-white/80 border border-slate-100`
                      : "bg-white/80 lg:hover:bg-white shadow-lg lg:hover:shadow-xl border border-slate-100"
                  }`}
                  onClick={() =>
                    window.innerWidth >= 1024 && setActiveFeature(index)
                  }
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${
                        feature.color
                      } flex items-center justify-center text-xl sm:text-2xl shadow-lg transform transition-transform duration-300 ${
                        activeFeature === index
                          ? "lg:scale-110"
                          : "lg:hover:scale-105"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center text-emerald-600"
                          >
                            <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>{" "}
                  {activeFeature === index && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-4 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-l-lg"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>{" "}
            {/* Right Side - Interactive Preview & Testimonials */}
            <div className="hidden lg:block space-y-8">
              {/* Live Preview Mockup */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                    Live Preview
                  </h3>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Real-time</span>
                  </div>
                </div>
                <div className="transform transition-all duration-700">
                  <MockupPreview type={features[activeFeature].mockupType} />
                </div>
              </div>

              {/* Testimonials Carousel */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    {" "}
                    <div className="flex items-center gap-3">
                      <Quote className="h-6 w-6 text-cyan-400" />
                      <span className="text-sm font-medium text-slate-300">
                        What creators say
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="transform transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div>
                        <div className="font-semibold">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-sm text-slate-300">
                          {testimonials[currentTestimonial].role}
                        </div>{" "}
                        <div className="text-xs text-cyan-400">
                          {testimonials[currentTestimonial].followers} followers
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-100 leading-relaxed mb-4">
                      "{testimonials[currentTestimonial].content}"
                    </p>

                    <div className="flex items-center gap-1">
                      {Array.from({
                        length: testimonials[currentTestimonial].rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                  <div className="text-2xl font-bold text-slate-800">99.9%</div>
                  <div className="text-xs text-slate-600">Accuracy</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                  <div className="text-2xl font-bold text-slate-800">2.1s</div>
                  <div className="text-xs text-slate-600">Avg Process</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                  <div className="text-2xl font-bold text-slate-800">50K+</div>
                  <div className="text-xs text-slate-600">Feeds Made</div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
