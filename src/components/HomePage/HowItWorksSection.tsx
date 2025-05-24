import { useState, useEffect } from "react";
import { Upload, Sparkles, Download, ArrowRight, Check } from "lucide-react";

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-advance through steps
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      icon: Upload,
      title: "Upload",
      subtitle: "Add Your Photos",
      description:
        "Simply drag and drop or select up to 9 photos from your gallery. No editing experience required.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      accentColor: "blue-500",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Generate",
      subtitle: "AI Creates Magic",
      description:
        "Our AI instantly analyzes and arranges your photos into stunning Instagram-ready feed layouts.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      accentColor: "purple-500",
    },
    {
      id: 3,
      icon: Download,
      title: "Download",
      subtitle: "Share & Grow",
      description:
        "Download your optimized feed and start posting. Watch your engagement and followers soar.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      accentColor: "emerald-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(168,85,247,0.05),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        ></div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="relative mb-16">
              {" "}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 rounded-full transform -translate-y-1/2">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((selectedIndex + 1) / 3) * 100}%` }}
                ></div>
              </div>{" "}
              {/* Step Circles */}
              <div className="relative flex justify-between items-center">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center transform transition-all duration-500 ${
                      selectedIndex >= index ? "scale-110" : ""
                    }`}
                  >
                    {/* Circle with Icon */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                        selectedIndex >= index
                          ? `bg-gradient-to-r ${step.color} text-white ring-4 ring-white ring-opacity-50`
                          : "bg-white text-slate-400 border-2 border-slate-200"
                      }`}
                    >
                      <step.icon
                        className={`h-7 w-7 transition-all duration-300 ${
                          selectedIndex >= index ? "animate-pulse" : ""
                        }`}
                      />
                    </div>{" "}
                    {/* Step Number */}
                    <div
                      className={`mt-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        selectedIndex >= index
                          ? index === 0
                            ? "bg-blue-500 text-white"
                            : index === 1
                            ? "bg-purple-500 text-white"
                            : "bg-emerald-500 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`text-center transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {" "}
                  <div
                    className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                      selectedIndex === index
                        ? `bg-gradient-to-br ${step.bgColor} ${
                            index === 0
                              ? "border-blue-500/20"
                              : index === 1
                              ? "border-purple-500/20"
                              : "border-emerald-500/20"
                          } shadow-xl scale-105`
                        : "bg-white/60 border-slate-200 hover:shadow-lg hover:scale-102"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 mb-4">
                      {step.subtitle}
                    </p>{" "}
                    <p className="text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                    {/* Action Indicator */}
                    {selectedIndex === index && (
                      <div className="mt-6 flex items-center justify-center">
                        <div
                          className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-medium shadow-lg animate-pulse`}
                        >
                          <span>Step {step.id}</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {steps.map((step, index) => {
              // Only render the currently selected step
              if (selectedIndex !== index) return null;

              return (
                <div
                  key={step.id}
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  <div
                    className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 bg-gradient-to-br ${
                      step.bgColor
                    } ${
                      index === 0
                        ? "border-blue-500/20"
                        : index === 1
                        ? "border-purple-500/20"
                        : "border-emerald-500/20"
                    } shadow-xl`}
                  >
                    {/* Step Number - Top Right Corner */}
                    <div
                      className={`absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 ${
                        index === 0
                          ? "bg-blue-500 text-white"
                          : index === 1
                          ? "bg-purple-500 text-white"
                          : "bg-emerald-500 text-white"
                      } shadow-lg`}
                    >
                      {step.id}
                    </div>

                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 bg-gradient-to-r ${step.color} text-white`}
                        >
                          <step.icon className="h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-600 mb-3">
                          {step.subtitle}
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {step.description}
                        </p>{" "}
                        {/* Action Indicator */}
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${step.color} text-white rounded-full text-xs sm:text-sm font-medium shadow-lg animate-pulse`}
                          >
                            <span>Step {step.id}</span>
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          {/* Progress Dots for Mobile */}
          <div className="lg:hidden flex justify-center mt-8 gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-blue-500 scale-125"
                    : "bg-slate-300"
                }`}
              />
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
