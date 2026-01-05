import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonCustom } from "./ui/button-custom";
import immersiveScene from "@/assets/immersive-scene.jpg";

const ImmersiveStory = () => {
  const [activeWord, setActiveWord] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const words = ["Confidence.", "Elegance.", "Effortless Fit."];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cycle through words
            let index = 0;
            const interval = setInterval(() => {
              setActiveWord(index);
              index = (index + 1) % words.length;
            }, 2000);

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="immersive-story"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={immersiveScene}
          alt="Diverse models at elegant gala evening in neutral fashion"
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        {/* Animated Words */}
        <div className="mb-12 h-32 flex items-center justify-center">
          {words.map((word, index) => (
            <h2
              key={word}
              className={`text-4xl md:text-8xl font-bold absolute transition-all duration-1000 ${activeWord === index
                ? 'opacity-100 transform scale-100'
                : 'opacity-0 transform scale-90'
                }`}
            >
              {word}
            </h2>
          ))}
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-xl md:text-2xl font-light">
            Step into a world where luxury meets empathy.
          </p>
          <p className="text-lg md:text-xl">
            Where every stitch is guided by craftsmanship, and every curve is celebrated not corrected.
          </p>
        </div>

        {/* CTA */}
        <ButtonCustom
          variant="outline"
          size="lg"
          onClick={scrollToFeatures}
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
        >
          Begin Your Journey
        </ButtonCustom>
      </div>
    </section>
  );
};

export default ImmersiveStory;
