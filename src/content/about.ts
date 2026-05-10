import { Award, Briefcase, Heart, Target } from "lucide-react";

import type { Milestone, TeamMember, Value } from "@/types";

export const aboutContent = {
  hero: {
    titleLead: "About",
    titleHighlight: "CharmSoft Solutions",
    body: [
      "Founded in 2014, CharmSoft Solutions has been at the forefront of helping small and medium enterprises leverage technology to compete with industry giants.",
      "Our team of certified experts combines deep technical knowledge with business acumen to deliver solutions that truly transform operations and drive growth.",
    ],
    image: {
      src: "/images/corporate-office.jpg",
      alt: "Corporate office building photographed at golden hour",
      width: 1280,
      height: 720,
    },
  },
  mission: {
    title: "Our Mission",
    body: "To democratize access to enterprise-grade technology solutions, enabling SMEs to leverage AI, automation, and digital transformation to achieve their business goals and compete effectively in the modern marketplace.",
  },
  vision: {
    title: "Our Vision",
    body: "To become the most trusted technology partner for SMEs worldwide, known for delivering innovative solutions that drive measurable business outcomes and long-term success.",
  },
  values: [
    {
      icon: Target,
      title: "Client-Focused",
      description:
        "Your success is our priority. We tailor every solution to meet your unique business needs.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in everything we deliver.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest, transparent, and ethical in all our business practices.",
    },
    {
      icon: Briefcase,
      title: "Innovation",
      description:
        "Constantly exploring new technologies to keep you ahead of the curve.",
    },
  ] satisfies Value[],
  milestones: [
    { year: "2014", title: "Company Founded", description: "Started with a vision to empower SMEs" },
    { year: "2017", title: "100+ Clients", description: "Reached our first major milestone" },
    { year: "2020", title: "AI Division Launch", description: "Expanded into artificial intelligence" },
    { year: "2026", title: "Industry Leader", description: "Recognized as top SME IT solutions provider" },
  ] satisfies Milestone[],
  team: [
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      image: "/images/team-michael.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/images/team-sarah.jpg",
    },
    {
      name: "David Martinez",
      role: "Head of Solutions",
      image: "/images/team-david.jpg",
    },
    {
      name: "Emily Thompson",
      role: "Director of Operations",
      image: "/images/team-emily.jpg",
    },
  ] satisfies TeamMember[],
  cta: {
    titleLead: "Join",
    titleHighlight: "500+ Businesses",
    titleTrail: "That Trust Us",
    description:
      "Ready to transform your business with cutting-edge technology solutions?",
    label: "Get in Touch",
    href: "/contact",
  },
};
