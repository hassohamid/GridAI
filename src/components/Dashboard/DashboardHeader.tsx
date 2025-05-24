import { Badge } from "@/components/ui/badge";
import { Sparkles, Upload, Zap } from "lucide-react";

interface DashboardHeaderProps {
  photosCount: number;
  maxPhotos: number;
}

export default function DashboardHeader({
  photosCount,
  maxPhotos,
}: DashboardHeaderProps) {
  return (
    <div className="text-center space-y-4 mb-8 lg:mb-12">
      {" "}
      <Badge
        variant="secondary"
        className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-slate-800 via-slate-900 to-black border border-slate-700/50 rounded-full mx-auto w-fit shadow-lg backdrop-blur-sm"
      >
        <Sparkles className="h-4 w-4 mr-2" />
        AI-Powered Feed Generator
      </Badge>
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
          Create Your Perfect
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Instagram Feed
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Upload 9 photos and let our AI create an aesthetically pleasing feed
          layout.
          <br className="hidden sm:block" />
          No design skills required – just beautiful results.
        </p>
      </div>
      {/* Progress Indicator */}
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center">
            <Upload className="h-4 w-4 mr-1.5" />
            Photos uploaded
          </span>
          <span className="font-semibold">
            {photosCount}/{maxPhotos}
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(photosCount / maxPhotos) * 100}%` }}
          />
        </div>
      </div>
      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        {[
          { icon: Zap, text: "Instant AI Processing" },
          { icon: Sparkles, text: "Perfect Aesthetic Balance" },
        ].map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center px-3 py-1.5 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground"
          >
            <feature.icon className="h-3 w-3 mr-1.5" />
            {feature.text}
          </div>
        ))}
      </div>
    </div>
  );
}
