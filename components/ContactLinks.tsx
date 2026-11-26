import { Download, Linkedin, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";

export type ContactItem = {
  key: "email" | "whatsapp" | "linkedin" | "resume";
  label: string;
  href: string | null; // null = not configured yet
  icon: LucideIcon;
  external: boolean;
  download?: string;
  hint: string;
};

export const contactItems: ContactItem[] = [
  {
    key: "email",
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
    hint: site.email,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: site.whatsappUrl || null,
    icon: MessageCircle,
    external: true,
    hint: site.whatsappUrl ? "Start a chat" : "Add NEXT_PUBLIC_WHATSAPP_NUMBER",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: site.linkedinUrl || null,
    icon: Linkedin,
    external: true,
    hint: site.linkedinUrl ? "View profile" : "Add NEXT_PUBLIC_LINKEDIN_URL",
  },
  {
    key: "resume",
    label: "Resume",
    href: site.resumePath,
    icon: Download,
    external: false,
    download: site.resumeFileName,
    hint: "Download PDF",
  },
];
