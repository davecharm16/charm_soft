import {
  Award,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import type { Feature, Service, Stat } from "@/types";

export const homeContent = {
  hero: {
    eyebrow: "Transform Your Business Today",
    titleLead: "Empowering SMEs with",
    titleHighlight: "Premium IT Solutions",
    description:
      "We help small and medium enterprises harness the power of AI, automation, and digital transformation to compete with industry leaders.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image: {
      src: "/images/hero-workspace.jpg",
      alt: "Professional team collaborating in a modern business workspace",
      width: 1200,
      height: 1200,
    },
  },
  stats: [
    { number: "500+", label: "Clients Served" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "50+", label: "Team Experts" },
    { number: "10+", label: "Years Experience" },
  ] satisfies Stat[],
  services: [
    {
      icon: Sparkles,
      title: "AI Solutions",
      description:
        "Leverage cutting-edge artificial intelligence to automate processes and gain valuable insights.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description:
        "Streamline your operations with intelligent automation solutions tailored to your needs.",
    },
    {
      icon: TrendingUp,
      title: "Digital Presence",
      description:
        "Establish a powerful online presence with custom websites and digital marketing strategies.",
    },
    {
      icon: Users,
      title: "Custom Software",
      description:
        "Bespoke software solutions designed specifically for your business requirements.",
    },
  ] satisfies Service[],
  featuresIntro: {
    titleLead: "Why Choose",
    titleHighlight: "CharmSoft?",
    description:
      "We combine technical excellence with business acumen to deliver solutions that truly transform your operations.",
  },
  features: [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your business data.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Certified professionals with decades of combined experience.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get your solutions up and running in record time.",
    },
  ] satisfies Feature[],
  featureGallery: [
    {
      src: "/images/consulting-meeting.jpg",
      alt: "Strategy session between technology consultants and a client",
      width: 800,
      height: 800,
    },
    {
      src: "/images/partnership-handshake.jpg",
      alt: "Two business leaders shaking hands after a partnership agreement",
      width: 800,
      height: 800,
    },
    {
      src: "/images/dev-team.jpg",
      alt: "Software development team reviewing code on a large monitor",
      width: 800,
      height: 800,
    },
    {
      src: "/images/team-collaboration.jpg",
      alt: "Diverse team collaborating in an open office space",
      width: 800,
      height: 800,
    },
  ],
  cta: {
    title: "Ready to Transform Your Business?",
    description:
      "Let's discuss how we can help you achieve your digital transformation goals.",
    label: "Schedule a Consultation",
    href: "/contact",
  },
};
