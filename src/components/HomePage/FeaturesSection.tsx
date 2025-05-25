import {
  Check,
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      id: 0,
      title: "AI-Powered Enhancement",
      description:
        "Advanced machine learning algorithms analyze your photos and automatically enhance them for maximum aesthetic appeal and engagement.",
      benefits: ["Intelligent auto-enhancement", "Color balance optimization"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      icon: "🤖",
      mockupType: "enhancement",
    },
    {
      id: 1,
      title: "Perfect Grid Layouts",
      description:
        "Create stunning 3x3 Instagram feed layouts with perfect aesthetic balance that boost engagement and attract followers.",
      benefits: ["9-photo grid optimization", "Aesthetic balance"],
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
      benefits: ["High-quality outputs", "One-click download"],
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      icon: "⚡",
      mockupType: "speed",
    },
  ];
  const testimonials = [
    {
      name: "Anonymous",
      role: "Lifestyle Creator",
      avatar: "👩‍💼",
      content:
        "Been using GridAI for 3 months now and my feed looks so much more cohesive. The AI suggestions actually work - my recent posts are getting way more likes.",
      rating: 5,
      followers: "47K",
    },
    {
      name: "Anonymous",
      role: "Travel Photographer",
      avatar: "👨‍💻",
      content:
        "Honestly didn't expect much but the grid layouts are spot on. Saves me hours of planning and my feed aesthetic is finally consistent.",
      rating: 5,
      followers: "23K",
    },
    {
      name: "Anonymous",
      role: "Food Blogger",
      avatar: "👩‍🍳",
      content:
        "The before/after difference in my feed is crazy. Friends keep asking what changed - it's just better photo arrangement but makes such a difference.",
      rating: 5,
      followers: "89K",
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
        <div className="relative h-64 flex items-center justify-center p-4">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-lg mx-auto relative">
            {" "}
            <div className="space-y-3">
              <div className="text-sm font-medium text-slate-500 text-center">
                Before
              </div>
              <div className="w-full aspect-square rounded-xl overflow-hidden max-w-[180px] mx-auto shadow-md border border-slate-200">
                <img
                  src="/Amanda.jpg"
                  alt="Before AI Enhancement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <a
                  href="https://www.instagram.com/amandazandell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                >
                  @amandazandell
                </a>
              </div>
            </div>
            {/* Arrow between images */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-white rounded-full p-2 shadow-lg border border-slate-200">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-sm font-medium text-emerald-600 text-center">
                After AI Enhancement
              </div>
              <div className="w-full aspect-square rounded-xl overflow-hidden max-w-[180px] mx-auto shadow-xl border-2 border-emerald-200 relative">
                <img
                  src="/AmandaAI.jpg"
                  alt="After AI Enhancement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      );
    } // For grid and speed mockups, show empty placeholder
    return (
      <div className="relative h-64 flex items-center justify-center p-6">
        <div className="text-center text-slate-500">
          <div className="text-lg font-medium mb-2">Feature Preview</div>
          <div className="text-sm">Content coming soon</div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center justify-center px-6 py-3 mb-6 sm:mb-8 text-sm font-medium text-white bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
        </div>{" "}
        {/* Interactive Split-Screen Layout */}
        <div className="max-w-7xl mx-auto">
          {" "}
          {/* Instruction Alert */}{" "}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
            {" "}
            {/* Mobile Staggered Cards Animation */}
            <div className="lg:hidden relative h-[120vh] overflow-hidden">
              {features.map((feature, index) => {
                const isFromRight = index % 2 === 0; // Card 1 & 3 from right, Card 2 from left

                return (
                  <motion.div
                    key={feature.id}
                    className="absolute inset-x-0 flex items-center justify-center px-4"
                    initial={{
                      x: isFromRight ? "50%" : "-50%",
                      rotate: isFromRight ? 8 : -8,
                      opacity: 0.2,
                    }}
                    whileInView={{
                      x: 0,
                      rotate: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{
                      amount: 0.3,
                      once: false,
                    }}
                    style={{
                      zIndex: features.length - index,
                      top: `${index * 35 + 5}vh`,
                    }}
                  >
                    <div
                      className={`relative p-6 rounded-3xl shadow-2xl border-2 border-white/20 bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm w-full max-w-sm mx-auto transform hover:scale-105 transition-transform`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-xl`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-800 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {feature.description}
                          </p>
                          <div className="space-y-2">
                            {feature.benefits.slice(0, 2).map((benefit, i) => (
                              <div
                                key={i}
                                className="flex items-center text-emerald-600"
                              >
                                <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span className="text-sm font-medium">
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>{" "}
            {/* Desktop Feature Navigation - Non-clickable display only */}
            <div className="hidden lg:block space-y-6 lg:space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 bg-white/80 shadow-lg border border-slate-100"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}
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
                  </div>
                </div>
              ))}
            </div>{" "}
            {/* Right Side - Preview, Testimonials & Stats */}
            <div className="hidden lg:block space-y-6 lg:space-y-8">
              {/* AI Enhancement Preview - Just the images */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <MockupPreview type="enhancement" />
              </div>{" "}
              {/* Testimonials Carousel */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden h-80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10 h-full flex flex-col">
                  {" "}
                  <div className="flex items-center justify-between mb-6">
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
                  </div>{" "}
                  <div className="text-xs text-slate-400 mb-4 italic">
                    *Names are anonymous for privacy protection
                  </div>{" "}
                  <div className="transform transition-all duration-500 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">
                            {testimonials[currentTestimonial].name}
                          </div>
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
                        <div className="text-sm text-slate-300">
                          {testimonials[currentTestimonial].role}
                        </div>
                        <div className="text-xs text-cyan-400">
                          {testimonials[currentTestimonial].followers} followers
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-100 leading-relaxed min-h-[4rem]">
                      "{testimonials[currentTestimonial].content}"
                    </p>
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
                  <div className="text-2xl font-bold text-slate-800">30s</div>
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
