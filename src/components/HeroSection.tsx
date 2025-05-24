import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Instagram, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <Badge variant="secondary" className="mb-4">
        <Sparkles className="h-4 w-4 mr-2" />
        AI-Powered Instagram Feeds
      </Badge>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Perfect Instagram Feeds
        <br />
        Made Effortlessly
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Upload up to 9 photos and let our AI create aesthetically pleasing
        Instagram feeds. Stop overthinking your content strategy—we do the work
        for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-lg px-8" asChild>
          <Link to="/dashboard">
            Start Creating <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8">
          See How It Works
        </Button>
      </div>

      {/* Social Proof */}
      <div className="mt-16 flex items-center justify-center space-x-8 text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">4.9/5</span>
          <span>from 500+ creators</span>
        </div>
        <div className="flex items-center space-x-2">
          <Instagram className="h-5 w-5" />
          <span>10,000+ feeds created</span>
        </div>
      </div>
    </section>
  );
}
