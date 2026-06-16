import type { Metadata } from "next";
import { contactEmail, LegalPage } from "../legal-pages";

export const metadata: Metadata = {
  title: "Copyright | DreamNorth",
  description:
    "DreamNorth copyright information, content ownership, permissions, and reporting instructions.",
};

const sections = [
  {
    title: "DreamNorth materials",
    body: [
      "The DreamNorth name, website, app interface, copy, artwork, graphics, icons, animations, designs, software, and other materials are protected by copyright, trademark, and other intellectual property laws.",
      "Except where we say otherwise, DreamNorth and its licensors reserve all rights in those materials.",
    ],
  },
  {
    title: "Your dream content",
    body: [
      "You keep ownership of the dreams, notes, recordings, prompts, exports, and other content you create or submit in DreamNorth.",
      "Our Terms of Use explain the limited permissions you give DreamNorth so we can host, secure, process, display, and provide the app features you choose to use.",
    ],
  },
  {
    title: "Generated outputs",
    body: [
      "DreamNorth may help create AI-generated reflections, titles, summaries, images, or other outputs based on your inputs. Rights in AI outputs can vary by feature, provider, jurisdiction, and the content used to create them.",
      "You are responsible for how you use, publish, or share generated outputs, including making sure your use does not violate another person's rights.",
    ],
  },
  {
    title: "Permitted use",
    bullets: [
      "You may link to DreamNorth pages and share public marketing materials in a fair, non-misleading way.",
      "You may not copy, resell, redistribute, scrape, reverse engineer, or commercially reuse DreamNorth materials except as allowed by law or with written permission.",
      "You may not use DreamNorth branding in a way that suggests endorsement, partnership, or sponsorship without permission.",
    ],
  },
  {
    title: "Report copyright concerns",
    body: [
      `If you believe content connected to DreamNorth infringes your copyright, email ${contactEmail} with enough detail for us to review the issue.`,
      "Please include your name, contact information, a description of the copyrighted work, the location of the material you believe is infringing, a statement that you have a good-faith belief the use is not authorized, and a statement that the information you provide is accurate.",
    ],
  },
  {
    title: "Permissions",
    body: [
      `For permission to use DreamNorth assets, screenshots, artwork, or brand materials, contact ${contactEmail}.`,
      "We may decline requests or ask for changes if a use could confuse users, misrepresent the app, or weaken DreamNorth's brand or legal rights.",
    ],
  },
];

export default function CopyrightPage() {
  return (
    <LegalPage
      badge="Copyright"
      title="Copyright and permissions."
      intro="This page explains ownership of DreamNorth materials, your content, generated outputs, and how to contact us about copyright questions."
      sections={sections}
    />
  );
}
