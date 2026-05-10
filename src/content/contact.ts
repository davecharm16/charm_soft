import { Clock, Mail, MapPin, Phone } from "lucide-react";

import type { ContactChannel, Faq } from "@/types";

import { siteContent } from "./site";

export const contactContent = {
  hero: {
    titleLead: "Get in",
    titleHighlight: "Touch",
    description:
      "Ready to transform your business? Let's discuss how we can help you achieve your goals.",
  },
  form: {
    heading: "Send Us a Message",
    description:
      "Fill out the form below and our team will get back to you within 24 hours.",
    success: {
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    },
  },
  channelsHeading: "Contact Information",
  channelsDescription:
    "We're here to help. Reach out to us through any of these channels.",
  channels: [
    {
      icon: Mail,
      title: "Email Us",
      value: siteContent.contact.email,
      link: `mailto:${siteContent.contact.email}`,
    },
    {
      icon: Phone,
      title: "Call Us",
      value: siteContent.contact.phone,
      link: siteContent.contact.phoneHref,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: siteContent.contact.address.formatted,
      link: "#location",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: siteContent.contact.hours,
      link: "#hours",
    },
  ] satisfies ContactChannel[],
  faqs: [
    {
      question: "What industries do you serve?",
      answer:
        "We work with SMEs across all industries including retail, healthcare, finance, manufacturing, and professional services.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Simple solutions can be deployed in 2-4 weeks, while comprehensive digital transformations may take 3-6 months.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide comprehensive support packages including maintenance, updates, training, and 24/7 technical assistance.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing including project-based, monthly subscriptions, and custom enterprise packages tailored to your budget and needs.",
    },
  ] satisfies Faq[],
};
