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
        </div>
        {/* Before/After Comparison */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                See the AI Magic
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
                position={50}
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
        </div>
        {/* CTA Section */}
      </div>
    </section>
  );
}
