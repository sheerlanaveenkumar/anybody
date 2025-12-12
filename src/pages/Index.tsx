"use client";

import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import CollectionPreview from "@/components/CollectionPreview";
import ImmersiveStory from "@/components/ImmersiveStory";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import BigCTA from "@/components/BigCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">

      <Hero />
      <BrandStory />
      <CollectionPreview />
      <ImmersiveStory />
      <Features />
      <BigCTA />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
