import type { Metadata } from "next";
import { LegalPage } from "../legal-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DreamNorth privacy policy for the AI dream journal app, including encryption, AI processing, data sharing, deletion, purchases, ads, and analytics.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Who we are",
    body: [
      "DreamNorth is an AI dream journal that helps you record dreams, understand recurring patterns, transcribe optional voice notes, and create visual dream worlds. This policy explains what information we collect, how we use it, and the choices you have.",
      "This policy applies to the DreamNorth mobile apps, website, and related services.",
    ],
  },
  {
    title: "Information we collect",
    bullets: [
      "Account information, such as email address, display name, sign-in provider, verification status, and user ID.",
      "Dream journal content that you choose to save, including dream text, titles, moods, tags, interpretation results, generated images, and related metadata.",
      "Optional voice content when you use audio recording or transcription, including audio files, audio duration, timestamps, and generated transcripts.",
      "Purchase and entitlement information, such as subscription status, token balances, product identifiers, and purchase verification data.",
      "Device, app, diagnostics, crash, log, network, and usage information needed to operate, secure, debug, and improve the app.",
      "Ad and advertising-related identifiers or signals where ads are shown, especially on Android builds that include Google AdMob.",
      "Local preferences, reminder settings, notification settings, onboarding choices, export actions, and app settings.",
    ],
  },
  {
    title: "How we use information",
    bullets: [
      "To create and manage accounts, including email sign-in, Google Sign-In, anonymous/guest sessions, account linking, and verification.",
      "To save, sync, display, export, and delete your dream journal entries across your devices.",
      "To provide AI features, including dream interpretation, categorization, Q&A, transcription, titles, summaries, advice-style reflections, and image generation.",
      "To provide subscriptions, token balances, restore purchases, and premium access.",
      "To send requested app notifications, reminders, service messages, and support replies.",
      "To keep the app secure, prevent abuse, diagnose crashes, fix bugs, measure performance, and comply with legal obligations.",
    ],
  },
  {
    title: "Encryption and security",
    body: [
      "DreamNorth encrypts saved dream text before or during storage using DreamNorth encryption logic tied to your user account. The app also uses HTTPS/TLS and cloud provider security controls for data in transit and hosted services.",
      "Some features require temporary processing of readable content. For example, dream text may be sent to AI providers for interpretation or categorization, and audio may be processed for transcription. No security system is perfect, but we design DreamNorth so dream content is treated as private by default.",
    ],
  },
  {
    title: "AI and third-party processing",
    body: [
      "DreamNorth uses service providers to run core features. These may include Firebase and Google Cloud for authentication, database, storage, cloud functions, crash reporting, and notifications; Google Sign-In for authentication; Google Gemini and OpenAI for AI analysis, transcription, and generation; RevenueCat and the app stores for purchases and subscriptions; Google AdMob for ads where enabled; and email providers for account or support messages.",
      "We do not sell your personal information or dream content. These providers may process data on our behalf or under their own terms and privacy policies. Their systems may receive the information needed to provide the feature you requested.",
    ],
  },
  {
    title: "When we share information",
    bullets: [
      "With service providers that help operate DreamNorth, such as hosting, storage, AI processing, payments, crash reporting, ads, analytics, and support providers.",
      "With Apple, Google Play, RevenueCat, and payment-related providers to process purchases, subscriptions, refunds, tax, fraud prevention, and entitlement checks.",
      "When you ask us to share, export, or generate content through a feature you choose to use.",
      "If required by law, legal process, safety, security, fraud prevention, or to protect the rights of DreamNorth, users, or others.",
      "In connection with a merger, acquisition, financing, reorganization, or sale of assets, subject to appropriate protections.",
    ],
  },
  {
    title: "Retention and deletion",
    body: [
      "We keep account and dream information while your account is active or as needed to provide the service. Some guest or unverified accounts and non-permanent audio recordings may be automatically removed after inactivity or expiration periods.",
      "You can delete entries in the app where the feature is available. You can also request account and data deletion by contacting us. We may retain limited records where required for legal, security, purchase, tax, anti-abuse, or backup reasons.",
    ],
  },
  {
    title: "Your choices and rights",
    bullets: [
      "You can choose whether to enter dream text, record audio, request AI processing, export dreams, enable notifications, or make purchases.",
      "You can deny microphone or notification permissions through your device settings. Some features will not work without the relevant permission.",
      "Depending on where you live, you may request access, correction, deletion, portability, restriction, or objection. You may also have the right to appeal a privacy decision.",
      "DreamNorth does not sell personal information. If a law treats certain ad or analytics activity as a share, sale, or targeted advertising, you may request to opt out where applicable.",
    ],
  },
  {
    title: "Children",
    body: [
      "DreamNorth is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us so we can review and delete it where appropriate.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "DreamNorth and its providers may process information in the United States and other countries. Data protection laws may differ from those in your location, but we use appropriate safeguards where required.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy as DreamNorth changes. If changes are material, we will take reasonable steps to notify users, such as updating the effective date, posting a notice, or providing an in-app message.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Privacy for a private dream journal."
      intro="DreamNorth is built for intimate writing, so this policy is direct about dream encryption, AI processing, purchases, ads, analytics, and deletion choices."
      sections={sections}
    />
  );
}
