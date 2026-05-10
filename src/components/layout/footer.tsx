import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { siteContent } from "@/content/site";
import { homeContent } from "@/content/home";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 mb-4"
              aria-label={`${siteContent.siteName} home`}
            >
              <div className="w-10 h-10 logo-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CS</span>
              </div>
              <span className="font-semibold">
                CharmSoft <span className="text-primary">Solutions</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering SMEs with cutting-edge IT solutions, AI innovations,
              and digital transformation services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteContent.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {homeContent.services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a
                  href={siteContent.contact.phoneHref}
                  className="hover:text-primary transition-colors"
                >
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>
                  {siteContent.contact.address.street},
                  <br />
                  {siteContent.contact.address.city},{" "}
                  {siteContent.contact.address.region}{" "}
                  {siteContent.contact.address.postalCode}
                </span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              {siteContent.social.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    aria-label={`${siteContent.siteName} on ${channel.name}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {year} {siteContent.siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
