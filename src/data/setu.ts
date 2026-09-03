export type PortalId =
  | "vantage"
  | "finance"
  | "evidence"
  | "tickets"
  | "discover"
  | "assistant";

export interface Portal {
  id: PortalId;
  name: string;
  label: string;
  description: string;
  benefits: string[];
  short: string;
  // CHANGED: added to fix "six equal options, no buyer named" — each portal now names
  // who it's for and whether it's the recommended entry point.
  buyer: string;
  recommended?: boolean;
}

export const portals: Portal[] = [
  {
    id: "vantage",
    name: "Setu Vantage",
    label: "Case & Matter Management",
    short: "Clients, teams, tasks and documents in one workspace.",
    description:
      "Clients, teams, tasks, documents and status in one workspace, replacing spreadsheets and disconnected email trails.",
    benefits: [
      "One source of truth for every case",
      "Nothing falls through the cracks",
      "Leadership sees workload and progress in real time",
    ],
    buyer: "Operations & case leads", // CHANGED: named buyer
    recommended: true, // CHANGED: this is the recommended starting portal
  },
  {
    id: "finance",
    name: "Setu Finance",
    label: "Billing & Financial Operations",
    short: "Engagements, invoices, payments and financial reporting.",
    description:
      "Billing and invoicing for professional-services firms with engagements, invoices, payment tracking and financial reporting.",
    benefits: ["Faster billing cycles", "Fewer missed payments", "Clean financial records"],
    buyer: "Finance & billing teams", // CHANGED
  },
  {
    id: "evidence",
    name: "Setu Evidence Studio",
    label: "Document & Evidence Intelligence",
    short: "A privacy-first assistant for evidence and structured drafting.",
    description:
      "A privacy-first document assistant that organizes evidence against defined criteria, tracks status and supports structured drafting.",
    benefits: [
      "Organized evidence portfolio",
      "Reviewable document workflows",
      "Sensitive files stay under customer control",
    ],
    buyer: "Case preparation & paralegal teams", // CHANGED
  },
  {
    id: "tickets",
    name: "Setu Tickets",
    label: "Client Inquiry Management",
    short: "A client-inquiry portal with lifecycle and service-level targets.",
    description:
      "A client-inquiry ticketing portal with a defined lifecycle and service-level targets, replacing shared inboxes.",
    benefits: [
      "Every question is tracked",
      "Every request is assigned",
      "Response quality becomes measurable",
    ],
    buyer: "Client services & support teams", // CHANGED
  },
  {
    id: "discover",
    name: "Setu Discover",
    label: "AI Opportunity Discovery",
    short: "Surfaces where AI will create measurable value.",
    description: "Analyzes operations and surfaces where AI will create measurable value.",
    benefits: ["Prioritized AI opportunities", "ROI-ranked roadmap", "Reduced guesswork"],
    buyer: "Leadership evaluating where to start", // CHANGED
  },
  {
    id: "assistant",
    name: "Setu AI Assistant",
    label: "Governed AI Assistant",
    short: "Role-aware, cited answers across your operation.",
    description:
      "Ask about a case, invoice or document and get a role-aware, cited answer.",
    benefits: [
      "Find answers in seconds",
      "Reduce time spent searching",
      "Accelerate employee onboarding",
    ],
    buyer: "Every role, once other portals are live", // CHANGED
  },
];
