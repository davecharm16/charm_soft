import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homeContent } from "@/content/home";

export function HomeCta() {
  const { cta } = homeContent;

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 gradient-bg rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {cta.title}
          </h2>
          <p className="text-lg text-white/90 mb-8">{cta.description}</p>
          <Link
            href={cta.href}
            className="inline-flex items-center px-8 py-3 bg-white text-primary hover:bg-white/90 rounded-lg transition-colors"
          >
            {cta.label}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
