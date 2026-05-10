import {
  Bot,
  Cloud,
  Cpu,
  Database,
  Globe,
  LineChart,
  Lock,
  Sparkles,
} from "lucide-react";

import type { ProcessStep, Service } from "@/types";

export const servicesContent = {
  hero: {
    titleLead: "Our",
    titleHighlight: "Services",
    description:
      "Comprehensive IT solutions designed to help SMEs compete with industry leaders. From AI-powered automation to digital transformation, we've got you covered.",
  },
  services: [
    {
      icon: Sparkles,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to automate tasks, predict trends, and make data-driven decisions.",
      features: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
      ],
    },
    {
      icon: Globe,
      title: "Digital Presence & Marketing",
      description:
        "Establish a compelling online presence with modern websites and strategic digital marketing.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "SEO & Digital Marketing",
        "Brand Identity Design",
      ],
    },
    {
      icon: Bot,
      title: "Business Process Automation",
      description:
        "Streamline operations and reduce manual work with intelligent automation solutions.",
      features: [
        "Workflow Automation",
        "Document Processing",
        "CRM Integration",
        "Automated Reporting",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Migrate to the cloud and leverage scalable infrastructure for your business needs.",
      features: [
        "Cloud Migration Services",
        "Infrastructure Management",
        "DevOps Implementation",
        "Disaster Recovery",
      ],
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: [
        "Data Warehousing",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Governance",
      ],
    },
    {
      icon: Cpu,
      title: "Custom Software Development",
      description:
        "Bespoke software solutions tailored to your unique business requirements.",
      features: [
        "Web Applications",
        "Mobile App Development",
        "API Development",
        "Legacy System Modernization",
      ],
    },
    {
      icon: LineChart,
      title: "Digital Transformation Consulting",
      description:
        "Strategic guidance to help you navigate the digital transformation journey.",
      features: [
        "Technology Roadmap",
        "Process Optimization",
        "Change Management",
        "ROI Analysis",
      ],
    },
    {
      icon: Lock,
      title: "Cybersecurity Solutions",
      description:
        "Protect your business with enterprise-grade security measures and compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Security Training",
      ],
    },
  ] satisfies Service[],
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "We analyze your business needs and identify opportunities for improvement.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Develop a comprehensive roadmap tailored to your objectives and budget.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execute the solution with agile methodology and continuous feedback.",
    },
    {
      step: "04",
      title: "Support",
      description:
        "Provide ongoing maintenance, training, and optimization services.",
    },
  ] satisfies ProcessStep[],
  cta: {
    title: "Need a Custom Solution?",
    description:
      "Let's discuss your specific requirements and create a tailored solution for your business.",
    label: "Contact Our Team",
    href: "/contact",
    backgroundImage: {
      src: "/images/office-interior.jpg",
      alt: "Elegant modern office interior",
      width: 1600,
      height: 900,
    },
  },
  serviceOptions: [
    { value: "ai", label: "AI & Machine Learning" },
    { value: "digital", label: "Digital Presence & Marketing" },
    { value: "automation", label: "Business Process Automation" },
    { value: "cloud", label: "Cloud Solutions" },
    { value: "data", label: "Data Management & Analytics" },
    { value: "software", label: "Custom Software Development" },
    { value: "consulting", label: "Digital Transformation Consulting" },
    { value: "security", label: "Cybersecurity Solutions" },
    { value: "other", label: "Other" },
  ],
};
