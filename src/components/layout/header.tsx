"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label={`${siteContent.siteName} home`}
          >
            <div className="w-10 h-10 logo-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CS</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              CharmSoft <span className="text-primary">Solutions</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8" aria-label="Primary">
            {siteContent.nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={cn(
                  "transition-colors",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden bg-card border-t border-border">
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile">
            {siteContent.nav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 px-4 rounded-lg transition-colors",
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-4 bg-accent text-accent-foreground text-center rounded-lg"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
