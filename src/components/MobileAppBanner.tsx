"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileAppBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Check if previously dismissed (optional, but good UX)
        // const dismissed = sessionStorage.getItem("app-banner-dismissed");
        // if (dismissed) setIsVisible(false);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        // sessionStorage.setItem("app-banner-dismissed", "true");
    };

    const handleDownload = () => {
        // Determine overlapping logic if needed, or just open a general link
        // For now, defaulting to App Store or a landing page
        window.open("https://apps.apple.com", "_blank");
    };

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="fixed top-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-b border-border shadow-soft"
                >
                    <div className="flex items-center justify-between p-3 gap-3">
                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Close banner"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Icon & Text */}
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden border border-border shadow-sm">
                                <Image
                                    src="/favicon.svg"
                                    alt="AnyBody App Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col truncate">
                                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">AnyBody App</span>
                                <span className="text-sm font-medium truncate text-foreground">Luxury fits for you</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={handleDownload}
                            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-transform"
                        >
                            Get
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileAppBanner;
