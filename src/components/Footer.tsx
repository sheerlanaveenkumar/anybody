import { Instagram, Facebook } from "lucide-react";

const Pinterest = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 20l4-9" />
    <path d="M10.7 13c.437 1.263 1.43 2 2.55 2c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="footer" className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-tight">AnyBody</h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Fashion that fits - because it was made for you.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="#">Privacy &amp; Cookie Policy</FooterLink>
              {/* <FooterLink href="#">Terms of Service</FooterLink> */}
              <FooterLink href="/#newsletter">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              {/* <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} /> */}
              <SocialLink href="#" icon={<Pinterest className="w-5 h-5" />} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 AnyBody. All rights reserved.</p>
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors duration-200 block hover:translate-x-1 transform"
    >
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
