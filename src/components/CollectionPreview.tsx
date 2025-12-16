import Image from "next/image";
import { ButtonCustom } from "./ui/button-custom";
import { motion, Variants } from "framer-motion";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import collection4 from "@/assets/collection-4.png";
import collection5 from "@/assets/collection-5.png";
import collection6 from "@/assets/collection-6.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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

const FlipCard = ({ item }: { item: typeof collectionItems[0] }) => {
  return (
    <motion.div
      variants={fadeIn}
      className="group h-[400px] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
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
  return (
    <section id="collection-preview" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Designed to flatter. <br /> Made to feel good.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every stitch, every seam, every silhouette is shaped to celebrate, not conceal, your body.
          </p>
          <p className="text-lg text-muted-foreground">
            We source world-class fabrics and timeless essentials that feel as luxe as they look.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Whether it’s elevated everyday wear or standout occasion pieces, you’ll always feel styled, never squeezed.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {collectionItems.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <ButtonCustom
            variant="app"
            size="lg"
            onClick={() => window.open('https://apps.apple.com', '_blank')}
          >
            Explore the Collection in the App
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default CollectionPreview;
