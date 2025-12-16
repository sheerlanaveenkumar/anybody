import { useState } from "react";
import { ButtonCustom } from "./ui/button-custom";
import { Input } from "./ui/input";
import { toast } from "sonner";

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
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join The AnyBody Collective
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get early access to new drops, behind the scenes stories, and exclusive app only perks.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12"
            />
            <ButtonCustom type="submit" variant="default" size="lg">
              Subscribe
            </ButtonCustom>
          </form>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground mt-6">
            No spam. Just style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
