import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/social";
import type { NavItem, SocialLink } from "@/types";

export const siteContent = {
  siteName: "CharmSoft Solutions",
  shortName: "CharmSoft",
  tagline: "Premium IT Solutions for SMEs",
  description:
    "CharmSoft Solutions empowers small and medium enterprises with AI, automation, cloud, and digital transformation services that compete with industry leaders.",
  keywords: [
    "IT solutions",
    "AI for SMEs",
    "business automation",
    "digital transformation",
    "custom software development",
    "cloud migration",
    "managed IT services",
    "data analytics",
    "cybersecurity",
    "CharmSoft",
  ],
  contact: {
    email: "info@charmsoft.com",
    phone: "+1 (555) 123-4567",
    phoneHref: "tel:+15551234567",
    address: {
      street: "123 Business Avenue",
      city: "Tech City",
      region: "TC",
      postalCode: "12345",
      formatted: "123 Business Avenue, Tech City, TC 12345",
    },
    hours: "Mon – Fri: 9:00 AM – 6:00 PM",
  },
  nav: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ] satisfies NavItem[],
  social: [
    { name: "LinkedIn", url: "#", icon: LinkedInIcon },
    { name: "X", url: "#", icon: XIcon },
    { name: "Facebook", url: "#", icon: FacebookIcon },
  ] satisfies SocialLink[],
};
