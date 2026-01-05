import Image from "next/image";
import { ButtonCustom } from "./ui/button-custom";
import { Apple, Play } from "lucide-react";
import appDownloadHero from "@/assets/app-download-hero.jpg";
import { motion } from "framer-motion";

const BigCTA = () => {
  return (
    <section
      id="big-cta"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={appDownloadHero}
          alt="Diverse group in premium neutral clothing celebrating individuality"
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your new wardrobe starts here.
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Refined fits. Flattering cuts. Luxe materials. All within the AnyBody app.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ButtonCustom
            variant="hero"
            size="lg"
            onClick={() => window.open('https://apps.apple.com', '_blank')}
            className="w-full sm:w-auto"
          >
            <Apple className="w-5 h-5" />
            Download on App Store
          </ButtonCustom>
          <ButtonCustom
            variant="outline"
            size="lg"
            onClick={() => window.open('https://play.google.com', '_blank')}
            className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Play className="w-5 h-5" />
            Get it on Google Play
          </ButtonCustom>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          className="text-sm md:text-base text-primary-foreground/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          • Effortless Fits • Premium Fabrics • Free Exchanges
        </motion.p>
      </div>
    </section>
  );
};

export default BigCTA;
