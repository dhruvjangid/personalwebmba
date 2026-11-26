/**
 * Central site configuration.
 * Contact details that were not provided are read from environment variables
 * (see .env.example) so nothing is invented. Until they are set, the matching
 * icons render as clearly-labelled, disabled placeholders instead of broken links.
 */

const digits = (value: string) => value.replace(/\D/g, "");

const whatsappNumber = digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "");
const linkedinUrl = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();

export const site = {
  name: "Dhruv Jangid",
  headline:
    "Engineer by Education. Entrepreneur by Experiment. Marketer by Passion. Management Professional by Evolution.",
  title: "Dhruv Jangid | Engineer, Entrepreneur, Marketer, Management Professional",
  description:
    "The story of Dhruv Jangid: from software engineering at Tech Mahindra and entrepreneurial experiments to the PGDM at IMT Ghaziabad, with a focus on marketing, business development, consulting and strategy.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: "pgp26dhruvjangid@imt.ac.in",
  whatsappNumber,
  whatsappUrl: whatsappNumber ? `https://wa.me/${whatsappNumber}` : "",
  linkedinUrl,
  // Place your PDF at public/Dhruv-Jangid-Resume.pdf (replace the placeholder file).
  resumePath: "/Dhruv-Jangid-Resume.pdf",
  resumeFileName: "Dhruv-Jangid-Resume.pdf",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "ventures", label: "Ventures" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;
