import { Grid3X3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Grid3X3 className="h-6 w-6 text-primary" />
            <span className="font-bold">GridAI</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-8">
          © 2025 GridAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
