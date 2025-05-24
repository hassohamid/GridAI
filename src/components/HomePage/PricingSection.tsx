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
  Calculator,
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
      name: "Starter Pack",
      credits: 5,
      price: 15,
      costPerFeed: 3.0,
      description: "Perfect for trying out GridAI",
      icon: <Sparkles className="h-5 w-5" />,
      features: [
        "5 Instagram feed grids",
        "45 AI-enhanced photos",
        "Basic enhancement quality",
        "Standard processing speed",
      ],
      badge: "Get Started",
      popular: false,
      savings: null,
    },
    {
      name: "Creator Pack",
      credits: 20,
      price: 49,
      costPerFeed: 2.45,
      description: "Best value for content creators",
      icon: <Crown className="h-5 w-5" />,
      features: [
        "20 Instagram feed grids",
        "180 AI-enhanced photos",
        "Premium enhancement quality",
        "Priority processing speed",
      ],
      badge: "Most Popular",
      popular: true,
      savings: "Save 18%",
    },
    {
      name: "Pro Pack",
      credits: 50,
      price: 99,
      costPerFeed: 1.98,
      description: "For agencies & power users",
      icon: <Zap className="h-5 w-5" />,
      features: [
        "50 Instagram feed grids",
        "450 AI-enhanced photos",
        "Professional enhancement quality",
        "Instant processing speed",
      ],
      badge: "Best Value",
      popular: false,
      savings: "Save 34%",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-6 py-3 mb-6 sm:mb-8 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-lg">
            <Calculator className="h-4 w-4 mr-2" />
            Pay-As-You-Go Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Simple Credit Packs
          </h2>{" "}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-8">
            No subscriptions, no commitments. Buy credits when you need them and
            create stunning feeds on demand.{" "}
            <span className="font-semibold text-slate-700">
              Join 2,500+ creators
            </span>{" "}
            who trust GridAI.{" "}
          </p>
          {/* Value Proposition */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Credits never expire</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>No monthly fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              <span>Instant processing</span>
            </div>{" "}
          </div>
        </div>
        {/* Pricing Cards */} {/* Mobile Carousel (visible on sm and below) */}
        <div className="block lg:hidden px-12">
          <div className="relative">
            <div className="overflow-hidden pt-6" ref={emblaRef}>
              <div className="flex gap-4">
                {creditPacks.map((pack) => (
                  <div key={pack.name} className="flex-none w-[280px]">
                    <Card className="relative border border-slate-200 bg-white h-full flex flex-col">
                      {/* Popular Badge */}
                      {pack.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                          <Badge
                            className={`px-4 py-1 shadow-md ${
                              pack.popular
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                                : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                            }`}
                          >
                            {pack.badge}
                          </Badge>
                        </div>
                      )}

                      <CardHeader className="text-center space-y-4 pb-6 pt-8">
                        {/* Icon */}
                        <div className="inline-flex p-3 rounded-2xl mx-auto bg-slate-100 text-slate-600">
                          {pack.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold mb-2">
                            {pack.name}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {pack.description}
                          </CardDescription>
                        </div>
                        {/* Pricing */}
                        <div className="space-y-2">
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-bold text-slate-900">
                              ${pack.price}
                            </span>
                          </div>

                          <div className="text-center">
                            <div className="text-base font-semibold text-slate-700">
                              {pack.credits} Feed Credits
                            </div>
                            <div className="text-xs text-slate-500">
                              ${pack.costPerFeed.toFixed(2)} per feed grid
                            </div>
                          </div>

                          {pack.savings && (
                            <div className="text-xs text-emerald-600 font-medium">
                              {pack.savings}
                            </div>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        {/* Features */}
                        <ul className="space-y-2 flex-1">
                          {pack.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <Check className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-slate-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>{" "}
                        {/* CTA Button */}
                        <Button
                          className="w-full py-4 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                          variant="default"
                        >
                          {pack.popular ? (
                            <>
                              <Star className="h-3 w-3 mr-2" />
                              Buy Credits
                            </>
                          ) : (
                            <>
                              Buy Credits
                              <ArrowRight className="h-3 w-3 ml-2" />
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center transition-opacity ${
                canScrollPrev ? "opacity-100" : "opacity-30"
              }`}
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <button
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center transition-opacity ${
                canScrollNext ? "opacity-100" : "opacity-30"
              }`}
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
        {/* Desktop Grid (visible on lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {creditPacks.map((pack) => (
            <Card
              key={pack.name}
              className="relative border border-slate-200 bg-white h-full flex flex-col"
            >
              {" "}
              {/* Popular Badge */}
              {pack.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge
                    className={`px-4 py-1 shadow-md ${
                      pack.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                    }`}
                  >
                    {pack.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center space-y-4 pb-6 pt-8">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-2xl mx-auto bg-slate-100 text-slate-600">
                  {pack.icon}
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-bold mb-2">
                    {pack.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {pack.description}
                  </CardDescription>
                </div>
                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900">
                      ${pack.price}
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-lg font-semibold text-slate-700">
                      {pack.credits} Feed Credits
                    </div>
                    <div className="text-sm text-slate-500">
                      ${pack.costPerFeed.toFixed(2)} per feed grid
                    </div>
                  </div>

                  {pack.savings && (
                    <div className="text-sm text-emerald-600 font-medium">
                      {pack.savings}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 flex flex-col">
                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {pack.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>{" "}
                {/* CTA Button */}
                <Button
                  className="w-full py-5 text-base font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  variant="default"
                >
                  {pack.popular ? (
                    <>
                      <Star className="h-4 w-4 mr-2" />
                      Buy Credits
                    </>
                  ) : (
                    <>
                      Buy Credits
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
