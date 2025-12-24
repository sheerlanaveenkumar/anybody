import { ButtonCustom } from "./ui/button-custom";
import { Apple, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
        style={{
          backgroundImage: `url(${heroBackground.src})`,
          y
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Luxury, Tailored for <br /> Every Body.
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Premium, size inclusive fashion designed from scratch for plus-size bodies.
        </motion.h2>

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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
