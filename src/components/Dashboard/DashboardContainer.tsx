import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUploader from "./PhotoUploader";
import GenerationPanel from "./GenerationPanel";
import FeedPreview from "./FeedPreview";

interface Photo {
  id: string;
  file: File;
  preview: string;
}

export default function DashboardContainer() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handlePhotosChange = (newPhotos: Photo[]) => {
    setPhotos(newPhotos);
    setIsGenerated(false);
  };

  const handleGenerate = () => {
    setIsGenerated(true);
    // In a real app, this would trigger the actual AI generation
    console.log("Generating AI feed for photos:", photos);
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegenerateOrder = () => {
    // Shuffle the photos array
    const shuffled = [...photos].sort(() => Math.random() - 0.5);
    setPhotos(shuffled);
  };

  const handleDownload = () => {
    // In a real app, this would trigger the download
    console.log("Downloading generated feed");
    alert("Download functionality would be implemented here!");
  };
  return (
    <div className="flex-1 min-h-full">
      <div className="container mx-auto px-4 py-8 lg:py-12 min-h-full">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - Improved spacing and layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-12 min-h-[calc(100vh-200px)]">
              {/* Left Column - Upload Area - Takes more space */}
              <div className="lg:col-span-2 xl:col-span-3 flex flex-col">
                <PhotoUploader
                  onPhotosChange={handlePhotosChange}
                  maxPhotos={9}
                />
              </div>

              {/* Right Column - Preview & Generation - Sticky positioning */}
              <div className="lg:col-span-1 xl:col-span-2 space-y-6 lg:sticky lg:top-8 lg:self-start">
                <FeedPreview
                  photos={photos}
                  isGenerated={isGenerated}
                  onRegenerateOrder={handleRegenerateOrder}
                  onDownload={handleDownload}
                />

                <GenerationPanel
                  photos={photos}
                  isAuthenticated={isAuthenticated}
                  onGenerate={handleGenerate}
                  onLogin={handleLogin}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <PhotoUploader onPhotosChange={handlePhotosChange} maxPhotos={9} />

            <FeedPreview
              photos={photos}
              isGenerated={isGenerated}
              onRegenerateOrder={handleRegenerateOrder}
              onDownload={handleDownload}
            />

            <GenerationPanel
              photos={photos}
              isAuthenticated={isAuthenticated}
              onGenerate={handleGenerate}
              onLogin={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
