import { Upload, Sparkles, Grid3X3 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-background to-muted">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Three simple steps to transform your photos into stunning Instagram
          feeds
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              1. Upload Photos
            </CardTitle>
            <CardDescription>
              Upload up to 9 unfiltered photos from your gallery
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              2. AI Enhancement
            </CardTitle>
            <CardDescription>
              Our AI analyzes and enhances your photos for maximum aesthetic
              appeal
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Grid3X3 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              3. Get Your Feed
            </CardTitle>
            <CardDescription>
              Download your perfectly arranged Instagram feed ready to post
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
