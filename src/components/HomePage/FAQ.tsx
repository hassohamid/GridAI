import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Grid3X3, Sparkles, ArrowRight } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "How does GridAI create the perfect layout for my photos?",
    answer:
      "GridAI uses advanced computer vision and AI algorithms to analyze your photos' composition, colors, and subjects. It then intelligently arranges them to create visually harmonious grid layouts that maximize engagement and aesthetic appeal.",
  },
  {
    id: "item-2",
    question: "Why exactly 9 photos?",
    answer:
      "The 3×3 grid format is scientifically proven to be the most visually appealing and Instagram-optimized layout. Nine photos create perfect symmetry, allow for diverse content mixing, and ensure your Instagram profile grid looks cohesive and professional when visitors view your page.",
  },
  {
    id: "item-3",
    question: "How long does it take to generate a layout?",
    answer:
      "Most layouts are generated within 30 seconds. Processing time may vary slightly depending on the number of photos and their resolution, but our optimized AI ensures quick turnaround times.",
  },
  {
    id: "item-4",
    question: "Is there a subscription or recurring fee?",
    answer:
      "No subscriptions required! GridAI operates on a simple one-time payment model. Pay just $5 per feed generation - no hidden fees, no monthly charges, no complicated pricing tiers.",
  },
  {
    id: "item-5",
    question: "Where are the photos stored?",
    answer:
      "All your generated feeds are securely stored in your user account profile page where you can easily manage them. You can view, download, or delete any of your created layouts anytime from your personal dashboard.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,154,158,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 max-w-3xl relative">
        {/* Ultra-minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Grid3X3 className="w-4 h-4 text-blue-500" />
            Questions & Answers
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            FAQ
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Everything you need to know about GridAI
          </p>
        </motion.div>

        {/* Modern FAQ Cards */}
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div
                  onClick={() => toggleItem(faq.id)}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 md:p-7 cursor-pointer hover:bg-white/90 hover:border-gray-300/60 hover:shadow-lg transition-all duration-300 ease-out"
                >
                  {/* Question */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-relaxed flex-1 pr-2">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      <ChevronDown className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 pr-8">
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modern CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 shadow-xl">
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Ready to start?
              </span>
            </div>{" "}
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Create your perfect feed
            </h3>
            <p className="text-slate-600 text-lg mb-6 font-light max-w-md mx-auto">
              Turn ordinary photos into Instagram gold
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Don't wait
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>{" "}
            <p className="text-xs text-slate-500 mt-4 font-light">
              Start creating instantly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
