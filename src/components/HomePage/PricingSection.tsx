import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function PricingSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  const creditPacks = [
    {
      name: "Starter",
      credits: 5,
      price: 15,
      costPerFeed: 3.0,
      description: "Perfect for trying out GridAI",
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        "5 Instagram feed grids",
        "45 AI-enhanced photos",
        "Basic enhancement quality",
        "Standard processing speed",
      ],
      badge: "Get Started",
      popular: false,
      savings: null,
      theme: {
        gradient: "from-slate-100 to-white",
        border: "border border-slate-200/60",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        textPrimary: "text-slate-900",
        textSecondary: "text-slate-600",
        textMuted: "text-slate-500",
      },
    },
    {
      name: "Creator",
      credits: 20,
      price: 49,
      costPerFeed: 2.45,
      description: "Best value for content creators",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "20 Instagram feed grids",
        "180 AI-enhanced photos",
        "Premium enhancement quality",
        "Priority processing speed",
      ],
      badge: "Most Popular",
      popular: true,
      savings: "Save 18%",
      theme: {
        gradient: "from-slate-900 via-slate-800 to-slate-900",
        border: "border border-amber-500/30 ring-2 ring-amber-500/20",
        iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
        iconColor: "text-amber-600",
        textPrimary: "text-white",
        textSecondary: "text-slate-300",
        textMuted: "text-slate-400",
      },
    },
    {
      name: "Pro",
      credits: 50,
      price: 99,
      costPerFeed: 1.98,
      description: "For agencies & power users",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "50 Instagram feed grids",
        "450 AI-enhanced photos",
        "Professional enhancement quality",
        "Instant processing speed",
      ],
      badge: "Best Value",
      popular: false,
      savings: "Save 34%",
      theme: {
        gradient: "from-slate-100 to-white",
        border: "border border-slate-200/60",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        textPrimary: "text-slate-900",
        textSecondary: "text-slate-600",
        textMuted: "text-slate-500",
      },
    },
  ];
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Simple. Transparent. No Surprises.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-8">
            Pay only for what you use. No subscriptions, no monthly fees, no
            hidden costs.
            <span className="font-semibold text-slate-800 block mt-2">
              Join 2,500+ creators who trust GridAI
            </span>
          </p>{" "}
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200/60">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="font-medium">Credits never expire</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200/60">
              <Check className="h-4 w-4 text-emerald-600" />
              <span className="font-medium">Instant processing</span>
            </div>
          </div>
        </div>{" "}
        {/* Pricing Cards */}
        {/* Mobile Carousel (visible on sm and below) */}
        <div className="block lg:hidden px-12">
          <div className="relative">
            <div className="overflow-hidden pt-6" ref={emblaRef}>
              <div className="flex gap-4">
                {creditPacks.map((pack) => (
                  <div key={pack.name} className="flex-none w-[300px]">
                    <Card
                      className={`relative bg-gradient-to-br ${pack.theme.gradient} ${pack.theme.border} h-full flex flex-col shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur-sm`}
                    >
                      {/* Popular Badge */}
                      {pack.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                          <Badge
                            className={`px-4 py-1.5 shadow-lg font-semibold text-xs ${
                              pack.popular
                                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400/30"
                                : "bg-gradient-to-r from-slate-700 to-slate-800 text-slate-200 border-slate-600/30"
                            }`}
                          >
                            {pack.badge}
                          </Badge>
                        </div>
                      )}
                      <CardHeader className="text-center space-y-6 pb-6 pt-8">
                        {/* Icon with Glass Morphism */}
                        <div
                          className={`inline-flex p-4 rounded-2xl mx-auto ${pack.theme.iconBg} ${pack.theme.iconColor} shadow-lg backdrop-blur-sm border border-white/20`}
                        >
                          {pack.icon}
                        </div>
                        <div>
                          <CardTitle
                            className={`text-xl font-bold mb-3 ${pack.theme.textPrimary}`}
                          >
                            {pack.name}
                          </CardTitle>
                          <CardDescription
                            className={`text-sm leading-relaxed ${pack.theme.textSecondary}`}
                          >
                            {pack.description}
                          </CardDescription>
                        </div>
                        {/* Pricing */}
                        <div className="space-y-3">
                          <div className="flex items-baseline justify-center gap-1">
                            <span
                              className={`text-4xl font-bold ${pack.theme.textPrimary}`}
                            >
                              ${pack.price}
                            </span>
                          </div>

                          <div className="text-center space-y-1">
                            <div
                              className={`text-base font-semibold ${pack.theme.textSecondary}`}
                            >
                              {pack.credits} Feed Credits
                            </div>
                            <div className={`text-xs ${pack.theme.textMuted}`}>
                              ${pack.costPerFeed.toFixed(2)} per feed •{" "}
                              {pack.credits * 9} total photos
                            </div>
                          </div>

                          {pack.savings && (
                            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                              {pack.savings}
                            </div>
                          )}
                        </div>
                      </CardHeader>{" "}
                      <CardContent className="space-y-6 flex-1 flex flex-col px-6 pb-8">
                        {/* Features */}
                        <ul className="space-y-3 flex-1">
                          {pack.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-3"
                            >
                              <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span
                                className={`text-sm leading-relaxed ${pack.theme.textSecondary}`}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        {/* CTA Button */}
                        <Button
                          className={`w-full py-4 text-sm font-semibold transition-all duration-200 ${
                            pack.popular
                              ? "bg-white text-slate-900 hover:bg-slate-50 shadow-lg"
                              : "bg-white text-slate-900 hover:bg-slate-50 shadow-md hover:shadow-lg"
                          }`}
                          variant="default"
                        >
                          {pack.popular ? (
                            <>
                              <Star className="h-4 w-4 mr-2" />
                              Get Started
                            </>
                          ) : (
                            <>
                              Get Started
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>{" "}
            {/* Navigation Arrows */}
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-slate-200/60 flex items-center justify-center transition-all duration-200 ${
                canScrollPrev
                  ? "opacity-100 hover:bg-white hover:shadow-2xl"
                  : "opacity-40"
              }`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-slate-200/60 flex items-center justify-center transition-all duration-200 ${
                canScrollNext
                  ? "opacity-100 hover:bg-white hover:shadow-2xl"
                  : "opacity-40"
              }`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>{" "}
        {/* Desktop Grid (visible on lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {creditPacks.map((pack) => (
            <Card
              key={pack.name}
              className={`relative bg-gradient-to-br ${pack.theme.gradient} ${pack.theme.border} h-full flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm group`}
            >
              {/* Popular Badge */}
              {pack.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge
                    className={`px-5 py-2 shadow-lg font-semibold text-sm ${
                      pack.popular
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400/30"
                        : "bg-gradient-to-r from-slate-700 to-slate-800 text-slate-200 border-slate-600/30"
                    }`}
                  >
                    {pack.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center space-y-6 pb-8 pt-10">
                {/* Icon with Glass Morphism */}
                <div
                  className={`inline-flex p-5 rounded-3xl mx-auto ${pack.theme.iconBg} ${pack.theme.iconColor} shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300`}
                >
                  {pack.icon}
                </div>
                <div>
                  <CardTitle
                    className={`text-2xl lg:text-3xl font-bold mb-4 ${pack.theme.textPrimary}`}
                  >
                    {pack.name}
                  </CardTitle>
                  <CardDescription
                    className={`text-lg leading-relaxed ${pack.theme.textSecondary}`}
                  >
                    {pack.description}
                  </CardDescription>
                </div>
                {/* Pricing */}
                <div className="space-y-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className={`text-5xl lg:text-6xl font-bold ${pack.theme.textPrimary}`}
                    >
                      ${pack.price}
                    </span>
                  </div>

                  <div className="text-center space-y-2">
                    <div
                      className={`text-xl font-semibold ${pack.theme.textSecondary}`}
                    >
                      {pack.credits} Feed Credits
                    </div>
                    <div className={`text-sm ${pack.theme.textMuted}`}>
                      ${pack.costPerFeed.toFixed(2)} per feed •{" "}
                      {pack.credits * 9} total photos
                    </div>
                  </div>

                  {pack.savings && (
                    <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                      {pack.savings}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-8 flex-1 flex flex-col px-8 pb-10">
                {/* Features */}
                <ul className="space-y-4 flex-1">
                  {pack.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span
                        className={`text-base leading-relaxed ${pack.theme.textSecondary}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold transition-all duration-200 ${
                    pack.popular
                      ? "bg-white text-slate-900 hover:bg-slate-50 shadow-lg hover:shadow-xl"
                      : "bg-white text-slate-900 hover:bg-slate-50 shadow-md hover:shadow-lg"
                  }`}
                  variant="default"
                >
                  {pack.popular ? (
                    <>
                      <Star className="h-5 w-5 mr-3" />
                      Get Started
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="h-5 w-5 ml-3" />
                    </>
                  )}
                </Button>
              </CardContent>{" "}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
