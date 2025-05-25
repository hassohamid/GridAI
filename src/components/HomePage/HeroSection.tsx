import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

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
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 flex flex-col justify-center">
        {" "}
        <Badge
          variant="secondary"
          className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-slate-800 via-slate-900 to-black border-0 rounded-full mx-auto w-fit shadow-lg"
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
          Upload 9 photos and let our AI create an aesthetically pleasing feed
          for your Instagram. Stop overthinking your content strategy—we do the
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
          </div>{" "}
        </div>{" "}
        {/* Before/After Comparison */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            {" "}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                9 Unedited Photos → Perfect Feed
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground/70">
                Drag the slider to see how our AI enhances your photos
              </p>
            </div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-2 sm:p-3">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/before.jpg"
                    alt="Original photo"
                    className="w-full h-full object-cover"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/after.jpg"
                    alt="AI-enhanced photo"
                    className="w-full h-full object-cover"
                  />
                }
                position={90}
                className="rounded-lg sm:rounded-xl overflow-hidden"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                boundsPadding={0}
                changePositionOnHover={true}
                transition="0.3s ease-in-out"
              />

              {/* Labels */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium">
                Original
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-primary/80 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium">
                GridAI
              </div>
            </div>
          </div>
        </div>{" "}        {/* Before/After AI Enhancement - Mobile Only */}
        <div className="mb-8 sm:mb-12 md:hidden">
          <div className="max-w-sm mx-auto px-4">
            <div className="relative flex items-center justify-center p-4">
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto relative">
                <div className="space-y-3">
                  <div className="text-sm font-medium text-slate-500 text-center">
                    Original
                  </div>
                  <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md border border-slate-200">
                    <img
                      src="/Amanda.jpg"
                      alt="Original photo"
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
                    GridAI
                  </div>
                  <div className="w-full aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-emerald-200 relative">
                    <img
                      src="/AmandaAI.jpg"
                      alt="GridAI enhanced photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Process Flow - 2025 Minimalist Design */}
        <div className="mb-8 sm:mb-12 lg:mb-16 hidden md:block">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                How It Works
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto">
                Transform your photos into perfect Instagram feeds in three
                simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
              {/* Step 1: Upload */}
              <div className="relative group">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl"></div>
                    <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-sm">
                      <span className="text-2xl sm:text-3xl">📸</span>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        1
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                      Upload Photos
                    </h4>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
                      Add 9 unedited photos from your camera roll or device
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-px">
                  <div className="w-3/4 h-px bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600"></div>
                </div>
              </div>

              {/* Step 2: AI Processing */}
              <div className="relative group">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl"></div>
                    <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-sm">
                      <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        2
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                      AI Enhancement
                    </h4>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
                      Our AI enhances and arranges your photos for maximum
                      aesthetic appeal
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block absolute top-8 sm:top-10 left-full w-full h-px">
                  <div className="w-3/4 h-px bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600"></div>
                </div>
              </div>

              {/* Step 3: Perfect Feed */}
              <div className="relative group">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl"></div>
                    <div className="relative w-full h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-sm">
                      <span className="text-2xl sm:text-3xl">✨</span>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        3
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                      Perfect Feed
                    </h4>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-xs mx-auto">
                      Download your beautiful, cohesive Instagram feed ready for
                      posting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
      </div>
    </section>
  );
}
