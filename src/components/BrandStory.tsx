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
      className="py-24 md:py-32 bg-background"
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
              className="w-full h-auto rounded-lg shadow-elegant"
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
              className="text-4xl md:text-5xl font-bold"
              variants={textVariants}
            >
              Inclusive by design, not by trend.
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              AnyBody is a premium, body-inclusive fashion brand rooted in British-inspired tailoring and minimalist design.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              We create timeless clothing for people often left out of traditional sizing starting from size L, with a commitment to embrace every gender identity and expression.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={textVariants}
            >
              Our inclusivity is authentic and built into the way we design - not just in the way
              we communicate. Each piece is crafted to fit beautifully, feel effortless, and express quiet confidence.
            </motion.p>
            <motion.div variants={textVariants}>
              <ButtonCustom
                variant="default"
                size="lg"
                onClick={scrollToCollection}
                className="mt-4"
              >
                Discover Our Story
              </ButtonCustom>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
