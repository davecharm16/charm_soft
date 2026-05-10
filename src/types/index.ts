import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconComponent =
  | LucideIcon
  | ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export type NavItem = {
  name: string;
  path: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: IconComponent;
};

export type ContactChannel = {
  title: string;
  value: string;
  link: string;
  icon: LucideIcon;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
};

export type Stat = {
  number: string;
  label: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};
