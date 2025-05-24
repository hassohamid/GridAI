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
    "/Row2.jpg",
    "/Row2-2.jpg",
    "/Row2-3.jpg",
    "/Row2-4.jpg",
  ];
  return (
    <section className="relative overflow-hidden">
      {/* Hero Content */}{" "}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-900 border-0 rounded-full"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Instagram Feeds
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Perfect Instagram Feeds
          <br />
          Made Effortlessly
        </h1>
        <p className="text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Upload up to 9 photos and let our AI create aesthetically pleasing
          Instagram feeds. Stop overthinking your content strategy—we do the
          work for you.
        </p>
        {/* Marquee Section */}
        <div className="mb-8">
          <div className="space-y-6">
            {/* Row 2 - Right to Left */}
            <Marquee autoFill speed={25} gradient={false} direction="right">
              {images.map((img, index) => (
                <img
                  key={`row2-${index}`}
                  src={img}
                  alt=""
                  className="h-32 w-32 object-cover rounded-lg mx-4"
                />
              ))}
            </Marquee>

            {/* Row 3 - Left to Right (Slower) */}
            <Marquee autoFill speed={15} gradient={false}>
              {images.map((img, index) => (
                <img
                  key={`row3-${index}`}
                  src={img}
                  alt=""
                  className="h-32 w-32 object-cover rounded-lg mx-4"
                />
              ))}
            </Marquee>
          </div>
        </div>{" "}
      </div>
      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform  px-8 py-3 text-lg font-semibold rounded-xl"
            asChild
          >
            <Link to="/dashboard">
              Start Creating <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-3 text-lg font-medium rounded-xl transition-all duration-300 cursor-pointer"
          >
            See How It Works
          </Button>{" "}
        </div>{" "}
        {/* Social Proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-muted-foreground/70">
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-sm">4.8/5</span>
            <span className="text-sm">from 1,200+ users</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-2">
            <Instagram className="h-4 w-4" />
            <span className="text-sm">2,500+ feeds created</span>
          </div>
        </div>
      </div>
    </section>
  );
}
