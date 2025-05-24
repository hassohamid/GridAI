import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  RefreshCw,
  Eye,
  Instagram,
  Sparkles,
  Grid3X3,
} from "lucide-react";

interface Photo {
  id: string;
  file: File;
  preview: string;
}

interface FeedPreviewProps {
  photos?: Photo[];
  isGenerated?: boolean;
  onRegenerateOrder?: () => void;
  onDownload?: () => void;
}

export default function FeedPreview({
  photos = [],
  isGenerated = false,
  onRegenerateOrder,
  onDownload,
}: FeedPreviewProps) {
  if (photos.length === 0) {
    return (
      <Card className="h-full">
        <CardContent className="flex flex-col items-center justify-center p-8 h-full min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Grid3X3 className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preview Your Feed</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Upload photos to see how they'll look in your Instagram feed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>Feed Preview</span>
            </CardTitle>
            {isGenerated && (
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Generated
              </Badge>
            )}
          </div>

          {photos.length === 9 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerateOrder}
              className="text-xs"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Shuffle
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Instagram Feed Grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-1 aspect-square bg-background border border-border rounded-lg p-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-sm overflow-hidden"
              >
                {photos[index] ? (
                  <img
                    src={photos[index].preview}
                    alt={`Feed position ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted/50 border border-dashed border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground font-medium">
                      {index + 1}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {photos.length === 9 && (
            <div className="text-center text-xs text-muted-foreground">
              This is how your feed will look on Instagram
            </div>
          )}
        </div>

        {/* Actions */}
        {photos.length > 0 && (
          <div className="space-y-3">
            {isGenerated && (
              <Button
                onClick={onDownload}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Feed Images
              </Button>
            )}

            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview on Instagram
            </Button>
          </div>
        )}

        {/* Feed Stats */}
        {photos.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t">
            <div className="text-center space-y-1">
              <div className="text-lg font-semibold">{photos.length}</div>
              <div className="text-xs text-muted-foreground">Photos</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-lg font-semibold">3×3</div>
              <div className="text-xs text-muted-foreground">Grid</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-lg font-semibold">100%</div>
              <div className="text-xs text-muted-foreground">Optimized</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
