import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonCustom } from "./ui/button-custom";
import immersiveGala from "@/assets/immersive-scene.jpg";
import immersiveUrban from "@/assets/immersive-urban.jpg";
import immersiveHome from "@/assets/immersive-effrotless.webp";

const ImmersiveStory = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background Opacities
  const opacityUrban = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const opacityGala = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const opacityHome = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);

  // Text Animation Logic
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveTextIndex(0);
      } else if (latest < 0.66) {
        setActiveTextIndex(1);
      } else {
        setActiveTextIndex(2);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const words = ["Confidence.", "Elegance.", "Effortless Fit."];

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="immersive-story"
      ref={containerRef}
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <motion.div style={{ opacity: opacityUrban }} className="absolute inset-0 z-0">
          <Image src={immersiveUrban} alt="Urban setting" fill className="object-cover" placeholder="blur" priority />
          <div className="absolute inset-0 overlay-gradient" />
        </motion.div>

        <motion.div style={{ opacity: opacityGala }} className="absolute inset-0 z-0">
          <Image src={immersiveGala} alt="Gala setting" fill className="object-cover" placeholder="blur" priority />
          <div className="absolute inset-0 overlay-gradient" />
        </motion.div>

        <motion.div style={{ opacity: opacityHome }} className="absolute inset-0 z-0">
          <Image src={immersiveHome} alt="Home setting" fill className="object-cover" placeholder="blur" priority />
          <div className="absolute inset-0 overlay-gradient" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          {/* Animated Words */}
          <div className="mb-12 h-32 flex items-center justify-center">
            {words.map((word, index) => (
              <motion.h2
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeTextIndex === index ? 1 : 0,
                  y: activeTextIndex === index ? 0 : 20,
                  scale: activeTextIndex === index ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl font-bold absolute"
              >
                {word}
              </motion.h2>
            ))}
          </div>

          {/* Supporting Copy */}
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl md:text-2xl font-light">
              Step into a space where your body isn&#39;t “othered” - it’s the standard.
            </p>
            <p className="text-lg md:text-xl">
              Where fit meets finesse. And comfort walks with confidence.
            </p>
          </div>

          {/* CTA */}
          <ButtonCustom
            variant="outline"
            size="lg"
            onClick={scrollToFeatures}
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
          >
            Begin Your Style Journey
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveStory;
