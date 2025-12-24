import { Ruler, Sparkles, Users, Heart } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
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

const Features = () => {
  const features = [
    {
      icon: Ruler,
      title: "True Plus-Size Design",
      description: "Each piece is built from the ground up for curvier bodies.",
    },
    {
      icon: Sparkles,
      title: "Luxury Fabrics",
      description: "We source only soft, breathable, premium-grade textiles.",
    },
    {
      icon: Users,
      title: "Flawless Fit Range",
      description: "Sizes from L to 5XL with real body prototypes - not just models.",
    },
    {
      icon: Heart,
      title: "Minimalist Aesthetic",
      description: "Elevated styles that are timeless and trend-aware.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-accent"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What makes us different? Everything.
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-200px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={index < 2 ? fadeInLeft : fadeInRight}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
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
            variant="default"
            size="lg"
            onClick={() => alert('Size guide feature coming soon!')}
          >
            Find Your Fit
          </ButtonCustom>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
