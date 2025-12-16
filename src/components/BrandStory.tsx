import Image from "next/image";
import { ButtonCustom } from "./ui/button-custom";
import { motion } from "framer-motion";
import brandStoryImg from "@/assets/brand-story.jpg";

const BrandStory = () => {
  const scrollToCollection = () => {
    document.getElementById('collection-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewportOpts = { once: true, amount: 0.3 } as const;
  const imageVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };
  const textVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="brand-story"
      className="py-20 md:py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={brandStoryImg}
              alt="Model in tailored neutral outfit showcasing British-inspired design"
              className="w-[600px] h-[700px] rounded-lg shadow-elegant"
              placeholder="blur"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={textVariants}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              variants={textVariants}
            >
              Not extended sizes. Exclusive fits.
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              Most brands grade up patterns. We start with yours.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              At AnyBody, we create fashion specifically for plus-size bodies, using high-quality fabrics and precision tailoring
              that’s made to flatter, move, and last.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              Because feeling confident in your clothes shouldn’t feel like a compromise.
            </motion.p>
            <motion.div variants={textVariants}>
              <ButtonCustom
                variant="default"
                size="lg"
                onClick={scrollToCollection}
                className="mt-4"
              >
                Discover The Difference
              </ButtonCustom>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
