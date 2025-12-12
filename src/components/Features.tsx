import { useEffect, useRef } from "react";
import { Ruler, Sparkles, Users, Heart } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Ruler,
      title: "Authentic Fit",
      description: "Each pattern engineered around diverse body shapes—not scaled up.",
    },
    {
      icon: Sparkles,
      title: "Luxury Fabrics",
      description: "Premium textiles sourced from world-class mills.",
    },
    {
      icon: Users,
      title: "Inclusive Range",
      description: "Sizes L-5XL, for all identities and expressions.",
    },
    {
      icon: Heart,
      title: "Crafted for Confidence",
      description: "Minimalist silhouettes that move with you, not against you.",
    },
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-accent"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed around real bodies.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-card p-8 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center scroll-reveal">
          <ButtonCustom 
            variant="default" 
            size="lg"
            onClick={() => alert('Size guide feature coming soon!')}
          >
            Find Your Perfect Fit
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default Features;
