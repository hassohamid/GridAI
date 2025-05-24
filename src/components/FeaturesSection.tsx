import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    "AI-powered photo enhancement",
    "Automatic color correction",
    "Perfect grid arrangement",
    "Multiple layout options",
    "Instant download",
    "No design skills required",
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose GridAI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning Instagram feeds without the
            hassle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="font-medium">{feature}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
