import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Instagram, Star } from "lucide-react";
import { Link } from "react-router-dom";
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-xl"
            asChild
          >
            <Link to="/dashboard">
              Start Creating{" "}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-medium rounded-xl transition-all duration-300 cursor-pointer"
          >
            See How It Works
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-muted-foreground/70 text-sm sm:text-base">
          <div className="flex items-center space-x-2">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.8/5</span>
            <span className="hidden xs:inline">from</span>
            <span>1,200+ users</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>2,500+ feeds created</span>
          </div>
        </div>
      </div>
    </section>
  );
}
