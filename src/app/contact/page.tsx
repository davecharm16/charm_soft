import { MapPin } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { contactContent } from "@/content/contact";
import { breadcrumbSchema } from "@/lib/jsonld";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteContent } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with CharmSoft Solutions. We'll respond within 24 hours to discuss how AI, automation, and digital transformation can grow your business.",
  path: "/contact",
});

export default function ContactPage() {
  const { hero, form, channelsHeading, channelsDescription, channels, faqs } =
    contactContent;

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteContent.siteName}`,
    url: absoluteUrl("/contact"),
    description: hero.description,
    mainEntity: {
      "@type": "Organization",
      name: siteContent.siteName,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteContent.contact.email,
        telephone: siteContent.contact.phone,
        contactType: "customer service",
      },
    },
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <div className="min-h-screen pt-20">
        <section className="py-20 gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {hero.titleLead}{" "}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">{form.heading}</h2>
                <p className="text-muted-foreground mb-8">{form.description}</p>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">{channelsHeading}</h2>
                <p className="text-muted-foreground mb-8">
                  {channelsDescription}
                </p>

                <ul className="space-y-6 mb-12 list-none">
                  {channels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <li key={channel.title}>
                        <a
                          href={channel.link}
                          className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">
                              {channel.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {channel.value}
                            </p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="rounded-xl overflow-hidden border border-border">
                  <div className="w-full h-64 gradient-soft flex items-center justify-center">
                    <MapPin className="text-primary" size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="p-6 bg-background border border-border rounded-xl"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
