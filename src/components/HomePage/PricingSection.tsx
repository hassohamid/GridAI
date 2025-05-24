import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pay per use. No subscriptions. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Starter</CardTitle>
            <CardDescription>Perfect for trying out</CardDescription>
            <div className="text-3xl font-bold mt-4">$2</div>
            <div className="text-muted-foreground">per feed</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />1 feed
                generation
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Up to 9 photos
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Basic enhancement
              </li>
            </ul>
            <Button className="w-full mt-6" variant="outline">
              Choose Plan
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader className="text-center">
            <Badge className="mb-2">Most Popular</Badge>
            <CardTitle>Creator</CardTitle>
            <CardDescription>Best value for regular use</CardDescription>
            <div className="text-3xl font-bold mt-4">$15</div>
            <div className="text-muted-foreground">10 credits</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                10 feed generations
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Up to 9 photos each
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Premium enhancement
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Priority processing
              </li>
            </ul>
            <Button className="w-full mt-6">Choose Plan</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Pro</CardTitle>
            <CardDescription>For content creators</CardDescription>
            <div className="text-3xl font-bold mt-4">$40</div>
            <div className="text-muted-foreground">30 credits</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                30 feed generations
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Up to 9 photos each
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Premium enhancement
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Priority processing
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Email support
              </li>
            </ul>
            <Button className="w-full mt-6" variant="outline">
              Choose Plan
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
