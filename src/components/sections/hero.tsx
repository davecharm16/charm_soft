import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { homeContent } from "@/content/home";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm text-primary">{hero.eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {hero.titleLead}{" "}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
              >
                {hero.primaryCta.label}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-3 border border-border hover:bg-secondary text-foreground rounded-lg transition-colors"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
