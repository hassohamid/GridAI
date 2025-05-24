import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Upload, Sparkles, Grid3X3, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-white via-slate-50/50 to-white ">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
          ✨ Simple Process
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Three simple steps to transform your photos into stunning Instagram
          feeds that captivate your audience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connection Lines */}
        <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"></div>

        {/* Step 1 */}
        <Card className="group text-center relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Upload className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                1
              </div>
            </div>
            <CardTitle className="mb-3 text-xl font-bold text-slate-800">
              Upload Photos
            </CardTitle>
            <CardDescription className="text-slate-600 leading-relaxed">
              Upload up to 9 unfiltered photos from your gallery. Our AI works
              with any photo quality to create magic.
            </CardDescription>
            <div className="mt-6 flex items-center justify-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm">Start uploading</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Card>

        {/* Step 2 */}
        <Card className="group text-center relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Sparkles className="h-10 w-10 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                2
              </div>
            </div>
            <CardTitle className="mb-3 text-xl font-bold text-slate-800">
              AI Enhancement
            </CardTitle>
            <CardDescription className="text-slate-600 leading-relaxed">
              Our advanced AI analyzes color palettes, composition, and
              aesthetics to enhance your photos for maximum visual appeal.
            </CardDescription>
            <div className="mt-6 flex items-center justify-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm">AI processing</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Card>

        {/* Step 3 */}
        <Card className="group text-center relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-emerald-50/50 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-8">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Grid3X3 className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                3
              </div>
            </div>
            <CardTitle className="mb-3 text-xl font-bold text-slate-800">
              Get Your Feed
            </CardTitle>
            <CardDescription className="text-slate-600 leading-relaxed">
              Download your perfectly arranged Instagram feed layout, optimized
              for engagement and ready to post immediately.
            </CardDescription>
            <div className="mt-6 flex items-center justify-center text-green-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-sm">Download feed</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
