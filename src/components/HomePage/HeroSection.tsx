import { Badge } from "@/components/ui/badge";
import { Sparkles, Check, Play } from "lucide-react";

import Marquee from "react-fast-marquee";

export default function HeroSection() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 text-center flex-1 flex flex-col justify-center">
        <Badge
          variant="secondary"
          className="mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-900 border-0 rounded-full mx-auto w-fit"
        >
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
          AI-Powered Instagram Feeds
        </Badge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight px-2 sm:px-0">
          Perfect Instagram Feeds
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Made Effortlessly
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/80 mb-8 sm:mb-10 lg:mb-12 max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
          Upload up to 9 photos and let our AI create aesthetically pleasing
          Instagram feeds. Stop overthinking your content strategy—we do the
          work for you.
        </p>

        {/* Marquee Section */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Row 1 - Right to Left */}
            <Marquee autoFill speed={20} gradient={false} direction="right">
              {images.map((img, index) => (
                <img
                  key={`row1-${index}`}
                  src={img}
                  alt=""
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 object-cover rounded-md sm:rounded-lg mx-2 sm:mx-3 lg:mx-4 shadow-sm"
                />
              ))}
            </Marquee>

            {/* Row 2 - Left to Right (Slower) */}
            <Marquee autoFill speed={12} gradient={false}>
              {images.map((img, index) => (
                <img
                  key={`row2-${index}`}
                  src={img}
                  alt=""
                  className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 object-cover rounded-md sm:rounded-lg mx-2 sm:mx-3 lg:mx-4 shadow-sm"
                />
              ))}
            </Marquee>
          </div>
        </div>

        {/* CTA Get Started */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
          <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 via-purple-50 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Ready to Transform Your Instagram Feed?
                </h3>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  Join thousands of creators who use GridAI to create stunning,
                  professional Instagram feeds that drive engagement and growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                  Get Started Today
                  <Sparkles className="h-5 w-5 ml-2" />
                </button>
                <button className="inline-flex items-center px-6 py-4 text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-slate-500 ">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Professional results guaranteed
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  AI-powered optimization
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Instant downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
