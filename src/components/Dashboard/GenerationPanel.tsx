import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Wand2,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  User,
} from "lucide-react";

interface Photo {
  id: string;
  file: File;
  preview: string;
}

interface GenerationPanelProps {
  photos: Photo[];
  isAuthenticated?: boolean;
  onGenerate?: () => void;
  onLogin?: () => void;
}

export default function GenerationPanel({
  photos,
  isAuthenticated = false,
  onGenerate,
  onLogin,
}: GenerationPanelProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  const canGenerate = photos.length === 9;
  const steps = [
    "Analyzing photo composition",
    "Detecting visual themes",
    "Optimizing color balance",
    "Arranging perfect layout",
  ];

  const handleGenerate = async () => {
    if (!isAuthenticated) {
      onLogin?.();
      return;
    }

    if (!canGenerate) return;

    setIsGenerating(true);
    setGenerationStep(0);

    // Simulate AI processing
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setGenerationStep(i + 1);
    }

    // Final completion
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsGenerating(false);
    onGenerate?.();
  };

  const getStatusIcon = () => {
    if (isGenerating) return <Wand2 className="h-5 w-5 animate-spin" />;
    if (canGenerate) return <Sparkles className="h-5 w-5" />;
    return <Clock className="h-5 w-5" />;
  };

  const getStatusText = () => {
    if (isGenerating) return "Generating your feed...";
    if (canGenerate) return "Ready to generate!";
    return `Upload ${9 - photos.length} more photos`;
  };

  const getButtonText = () => {
    if (!isAuthenticated && canGenerate) return "Sign In to Generate";
    if (isGenerating) return "Generating...";
    if (canGenerate) return "Generate AI Feed";
    return "Upload More Photos";
  };

  return (
    <div className="space-y-6">
      {/* Status Card */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            {getStatusIcon()}
            <CardTitle className="text-lg">{getStatusText()}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Photos uploaded</span>
              <span className="font-medium">{photos.length}/9</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(photos.length / 9) * 100}%` }}
              />
            </div>
          </div>

          {/* Requirements List */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              {photos.length >= 9 ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              )}
              <span
                className={
                  photos.length >= 9
                    ? "text-green-600"
                    : "text-muted-foreground"
                }
              >
                Upload exactly 9 photos
              </span>
            </div>

            {!isAuthenticated && (
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Sign in to generate (optional for preview)
                </span>
              </div>
            )}
          </div>

          {/* Generation Steps */}
          {isGenerating && (
            <div className="space-y-3 p-4 bg-accent/30 rounded-lg">
              <h4 className="text-sm font-medium">AI Processing Steps</h4>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    {index < generationStep ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : index === generationStep ? (
                      <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin flex-shrink-0" />
                    ) : (
                      <div className="h-4 w-4 border-2 border-muted-foreground/30 rounded-full flex-shrink-0" />
                    )}
                    <span
                      className={
                        index <= generationStep
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generate Button */}
          <Button
            onClick={handleGenerate}
            disabled={(!canGenerate && isAuthenticated) || isGenerating}
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            size="lg"
          >
            {getButtonText()}
            {!isGenerating && (
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>

          {/* Helper Text */}
          {!isAuthenticated && canGenerate && (
            <p className="text-xs text-muted-foreground text-center">
              You can preview without an account, but you'll need to sign in to
              download your feed
            </p>
          )}
        </CardContent>
      </Card>

      {/* Tips Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Pro Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="text-xs mt-0.5">
                1
              </Badge>
              <span className="text-muted-foreground">
                Mix different photo styles for better variety
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="text-xs mt-0.5">
                2
              </Badge>
              <span className="text-muted-foreground">
                Include both close-ups and wide shots
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="outline" className="text-xs mt-0.5">
                3
              </Badge>
              <span className="text-muted-foreground">
                Choose high-quality, well-lit images
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
