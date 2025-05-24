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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const handleLogout = () => {
    setIsAuthenticated(false);
    // In a real app, you'd clear auth tokens here
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Upload & Generation */}
          <div className="lg:col-span-2 space-y-8">
            <PhotoUploader onPhotosChange={handlePhotosChange} maxPhotos={9} />

            {/* Mobile Generation Panel */}
            <div className="lg:hidden">
              <GenerationPanel
                photos={photos}
                isAuthenticated={isAuthenticated}
                onGenerate={handleGenerate}
                onLogin={handleLogin}
              />
            </div>
          </div>

          {/* Right Column - Preview & Generation */}
          <div className="space-y-6">
            <FeedPreview
              photos={photos}
              isGenerated={isGenerated}
              onRegenerateOrder={handleRegenerateOrder}
              onDownload={handleDownload}
            />

            {/* Desktop Generation Panel */}
            <div className="hidden lg:block">
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
    </div>
  );
}
