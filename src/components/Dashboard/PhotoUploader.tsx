import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Image as ImageIcon, RotateCcw, Plus } from "lucide-react";

interface Photo {
  id: string;
  file: File;
  preview: string;
}

interface PhotoUploaderProps {
  onPhotosChange?: (photos: Photo[]) => void;
  maxPhotos?: number;
}

export default function PhotoUploader({
  onPhotosChange,
  maxPhotos = 9,
}: PhotoUploaderProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newPhotos: Photo[] = [];
    const remainingSlots = maxPhotos - photos.length;
    const filesToProcess = Math.min(files.length, remainingSlots);

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        const photo: Photo = {
          id: `${Date.now()}-${i}`,
          file,
          preview: URL.createObjectURL(file),
        };
        newPhotos.push(photo);
      }
    }

    const updatedPhotos = [...photos, ...newPhotos];
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removePhoto = (id: string) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
    onPhotosChange?.(updatedPhotos);
  };

  const clearAll = () => {
    photos.forEach((photo) => URL.revokeObjectURL(photo.preview));
    setPhotos([]);
    onPhotosChange?.([]);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const canAddMore = photos.length < maxPhotos;

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        className={`
          relative p-8 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer
          ${
            isDragOver
              ? "border-primary bg-primary/5 scale-[1.02]"
              : "border-border hover:border-primary/50 hover:bg-accent/30"
          }
          ${!canAddMore ? "opacity-50 cursor-not-allowed" : ""}
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={canAddMore ? openFileDialog : undefined}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          disabled={!canAddMore}
        />

        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Upload className="h-8 w-8 text-primary" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              {canAddMore ? "Upload Your Photos" : "Upload Complete"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              {canAddMore
                ? `Drag and drop up to ${maxPhotos} photos or click to browse. We'll arrange them into the perfect Instagram feed.`
                : `You've uploaded ${photos.length} photos. Ready to generate your feed!`}
            </p>
          </div>

          {canAddMore && (
            <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
              <span>JPG, PNG, WebP</span>
              <span>•</span>
              <span>Max 10MB each</span>
            </div>
          )}
        </div>

        {isDragOver && (
          <div className="absolute inset-0 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Plus className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-primary">
                Drop photos here
              </p>
            </div>{" "}
          </div>
        )}
      </div>

      {/* Photos Grid */}
      {photos.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="text-sm">
                <ImageIcon className="h-3 w-3 mr-1" />
                {photos.length} of {maxPhotos} photos
              </Badge>
              <span className="text-xs text-muted-foreground">
                {maxPhotos - photos.length} slots remaining
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={clearAll}
              className="text-xs h-8"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Clear All
            </Button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {photos.map((photo) => (
              <div key={photo.id} className="relative group aspect-square">
                <img
                  src={photo.preview}
                  alt="Uploaded photo"
                  className="w-full h-full object-cover rounded-lg border border-border"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removePhoto(photo.id);
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-110 transform"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            {/* Add more photos slot */}
            {canAddMore && (
              <button
                onClick={openFileDialog}
                className="aspect-square border-2 border-dashed border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <Plus className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
