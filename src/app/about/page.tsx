import { Eye, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { aboutContent } from "@/content/about";
import { breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "CharmSoft Solutions is a team of certified technologists empowering SMEs with AI, automation, and digital transformation since 2014.",
  path: "/about",
});

export default function AboutPage() {
  const { hero, mission, vision, values, milestones, team, cta } = aboutContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        }}
      />

      <div className="min-h-screen pt-20">
        <section className="py-20 gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {hero.titleLead}{" "}
                  <span className="text-primary">{hero.titleHighlight}</span>
                </h1>
                {hero.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-lg text-muted-foreground mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={hero.image.width}
                    height={hero.image.height}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <article className="p-8 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4">{mission.title}</h2>
                <p className="text-muted-foreground">{mission.body}</p>
              </article>
              <article className="p-8 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-accent" size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4">{vision.title}</h2>
                <p className="text-muted-foreground">{vision.body}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our growth story
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden lg:block"
                aria-hidden
              />
              <ol className="space-y-12 list-none">
                {milestones.map((milestone, index) => (
                  <li
                    key={milestone.year}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="p-6 bg-card border border-border rounded-xl inline-block text-left">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"
                      aria-hidden
                    />
                    <div className="flex-1" aria-hidden />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <article key={member.name} className="group text-center">
                  <div className="aspect-square rounded-xl overflow-hidden border border-border mb-4 group-hover:border-primary/50 transition-colors">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      width={600}
                      height={600}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {cta.titleLead}{" "}
              <span className="text-primary">{cta.titleHighlight}</span>{" "}
              {cta.titleTrail}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {cta.description}
            </p>
            <Link
              href={cta.href}
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            >
              {cta.label}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
