import Image from "next/image";

import { homeContent } from "@/content/home";

export function Features() {
  const { featuresIntro, features, featureGallery } = homeContent;

  return (
    <section className="py-20 gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {featuresIntro.titleLead}{" "}
              <span className="text-primary">{featuresIntro.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {featuresIntro.description}
            </p>

            <ul className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <li key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {featureGallery.slice(0, 2).map((image) => (
                <div
                  key={image.src}
                  className="aspect-square rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {featureGallery.slice(2, 4).map((image) => (
                <div
                  key={image.src}
                  className="aspect-square rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
