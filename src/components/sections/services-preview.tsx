import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { homeContent } from "@/content/home";

export function ServicesPreview() {
  return (
    <section className="py-20" id="services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to elevate your business to new
            heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {homeContent.services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
