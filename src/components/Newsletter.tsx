import { useState } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(
        "Thank you for subscribing! Welcome to the AnyBody Circle."
      );
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeIn}
          >
            Join The AnyBody Collective
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            variants={fadeIn}
          >
            Get early access to new drops, behind the scenes stories, and exclusive app only perks.
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            variants={fadeIn}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14"
            />
            <ButtonCustom type="submit" variant="default" size="lg" className="w-full sm:w-auto">
              Subscribe
            </ButtonCustom>
          </motion.form>

          {/* Microcopy */}
          <motion.p
            className="text-sm text-muted-foreground mt-6"
            variants={fadeIn}
          >
            No spam. Just style.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
