import Image from "next/image";
import { useState, useEffect } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { motion, Variants } from "framer-motion";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.png";
import collection5 from "@/assets/collection-5.png";
import collection6 from "@/assets/collection-6.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const collectionItems = [
  {
    id: 1,
    front: collection1,
    back: collection4,
    alt: "Premium tailored clothing in neutral tones"
  },
  {
    id: 2,
    front: collection2,
    back: collection5,
    alt: "Model in flowing neutral outfit with urban backdrop"
  },
  {
    id: 3,
    front: collection3,
    back: collection6,
    alt: "Close-up of luxurious fabric texture"
  },
];

const FlipCard = ({
  item,
  isOpen,
  onToggle
}: {
  item: typeof collectionItems[0];
  isOpen: boolean;
  onToggle: (open: boolean) => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is touch-primary (no hover capability)
    const media = window.matchMedia("(hover: none)");
    setIsMobile(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <motion.div
      variants={fadeIn}
      className="group h-[400px] perspective-1000"
      style={{ perspective: "1000px" }}
      onHoverStart={() => !isMobile && onToggle(true)}
      onHoverEnd={() => !isMobile && onToggle(false)}
      onClick={() => isMobile && onToggle(!isOpen)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-soft"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={item.front}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500"
            placeholder="blur"
          />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-elegant"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <Image
            src={item.back}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500"
            placeholder="blur"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const CollectionPreview = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <section id="collection-preview" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-bold mb-6">
            Designed to flatter. <br /> Made to feel good.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            Every stitch, every seam, every silhouette is shaped to celebrate, not conceal, your body.
          </motion.p>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground">
            We source world-class fabrics and timeless essentials that feel as luxe as they look.
          </motion.p>
          <motion.p variants={fadeIn} className="text-lg text-muted-foreground mt-4">
            Whether it’s elevated everyday wear or standout occasion pieces, you’ll always feel styled, never squeezed.
          </motion.p>
        </motion.div>

        {/* Collection Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {collectionItems.map((item) => (
            <FlipCard
              key={item.id}
              item={item}
              isOpen={activeCardId === item.id}
              onToggle={(open) => setActiveCardId(open ? item.id : null)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
        >
          <ButtonCustom
            variant="app"
            size="lg"
            onClick={() => window.open('https://apps.apple.com', '_blank')}
          >
            Explore the Collection in the App
          </ButtonCustom>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionPreview;
