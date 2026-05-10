import type { Metadata } from "next";
import Image from "next/image";

import { servicesContent } from "@/content/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "AI, automation, cloud, data, and cybersecurity services tailored to small and medium businesses ready to scale.",
  path: "/services",
});

export default function ServicesPage() {
  const { hero, services, process, cta } = servicesContent;

  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
    ...services.map((service) => serviceSchema(service)),
  ];

  return (
    <>
      {jsonLd.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen pt-20">
        <section className="py-20 gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {hero.titleLead}{" "}
                <span className="text-primary">{hero.titleHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {hero.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-3">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features?.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <span
                                className="w-1.5 h-1.5 bg-primary rounded-full mr-3"
                                aria-hidden
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology to deliver exceptional results
              </p>
            </div>

            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 list-none">
              {process.map((item) => (
                <li key={item.step} className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src={cta.backgroundImage.src}
                  alt={cta.backgroundImage.alt}
                  width={cta.backgroundImage.width}
                  height={cta.backgroundImage.height}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 gradient-bg opacity-90" aria-hidden />
              </div>
              <div className="relative p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {cta.title}
                </h2>
                <p className="text-lg mb-8 text-white/90">{cta.description}</p>
                <a
                  href={cta.href}
                  className="inline-block px-8 py-3 bg-white text-primary hover:bg-white/90 rounded-lg transition-colors"
                >
                  {cta.label}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
