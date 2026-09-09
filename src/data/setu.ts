export type PortalId = "vantage" | "finance" | "evidence" | "tickets" | "discover" | "assistant";

export interface Portal {
  id: PortalId;
  name: string;
  label: string;
  description: string;
  benefits: string[];
  short: string;
  buyer: string;
  recommended?: boolean;
  // CHANGED (08 — product positioning): fields added so the homepage and the portal
  // template can each carry one decision instead of six equal options.
  /** 8.2 — the one-line headline each portal should carry, role in the lineup. */
  headline: string;
  role: "lead" | "attach" | "differentiator" | "layer" | "moved-to-service";
  /** 8.3 template fields, used by /products/$portal */
  whoFor: string;
  dayWithout: string;
  capabilities: string[];
  dayOne: string[];
  security: string;
  proof: { metric: string; quote: string; attribution: string };
  faqs: { q: string; a: string }[];
  /** Set only on portals repositioned as a service deliverable rather than a standalone product (8.2, Setu Discover). */
  movedToServiceSlug?: string;
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
    buyer: "Operations & case leads",
    recommended: true,
    headline: "Every matter, task and deadline in one place — live in four weeks.",
    role: "lead",
    whoFor:
      "Operations and case leads at firms of 8–60 people who currently run cases across a shared drive, a spreadsheet and email.",
    dayWithout:
      "Deadlines depend on memory and whoever last updated the tracker. Status lives in someone's inbox, not the system, and it takes a phone call to find out where a matter actually stands.",
    capabilities: [
      "Track every matter, task and owner in one workspace",
      "Set deadlines with automatic reminders and escalation",
      "See workload and status across the whole team in real time",
      "Attach documents and notes directly to the matter they belong to",
      "Search across every case, client and document instantly",
      "Report on caseload and progress without building a spreadsheet",
    ],
    dayOne: [
      "Configured workspace matching your matter types and stages",
      "Historical case data migrated in",
      "Roles and permissions set for every team member",
      "A live walkthrough session with your team",
    ],
    security:
      "Role-based access down to the individual matter, full audit logging on every change, data hosted in region, and no client data used to train shared models.",
    proof: {
      metric: "[—%] faster to find the status of any matter",
      quote: "[One sentence on what changed once the team stopped tracking cases in spreadsheets.]",
      attribution: "[Name, Title, Client firm]",
    },
    faqs: [
      { q: "How long does setup take?", a: "A configured, live workspace with your data migrated typically takes four weeks." },
      { q: "Can we import our existing tracker?", a: "Yes — spreadsheets, CSV exports and most case-management exports can be migrated." },
      { q: "Does everyone need the same access level?", a: "No. Access is role-based down to the individual matter." },
      { q: "What happens after the pilot?", a: "You keep the configured workspace and add portals — Tickets, Finance, Evidence Studio, the AI Assistant — as you grow." },
    ],
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
    buyer: "Client services & support teams",
    headline: "Clients stop emailing. Every question gets an owner and a clock.",
    role: "attach",
    whoFor:
      "Client services teams at firms whose clients currently reach them through a shared inbox, with no way to see who owns a question or how long it has been open.",
    dayWithout:
      "Questions arrive by email, get forwarded, and sit in someone's personal inbox until a client calls asking why nobody replied. There is no record of what was promised or by when.",
    capabilities: [
      "Give every client a portal to submit and track requests",
      "Assign an owner and a service-level clock to every ticket",
      "Escalate automatically when a target is at risk",
      "Link tickets to the matter or account they belong to",
      "Report on response time and ticket volume by team",
    ],
    dayOne: [
      "Configured ticket types and service-level targets",
      "Client portal branded and connected to Vantage matters",
      "Existing open requests migrated in",
      "Training for the team handling inbound requests",
    ],
    security:
      "Client-facing access is scoped to that client's own tickets only, every message is logged, and data stays in the same region as the rest of the platform.",
    proof: {
      metric: "[—%] fewer client follow-up calls",
      quote: "[One sentence attributed quote on the change in client experience.]",
      attribution: "[Name, Title, Client firm]",
    },
    faqs: [
      { q: "Do clients need to install anything?", a: "No. Clients use a branded web portal or reply to the same channel they already use." },
      { q: "Can we set different targets per ticket type?", a: "Yes — service-level targets are configurable per ticket type." },
      { q: "Does this replace our shared inbox entirely?", a: "Most teams route new requests through Tickets and keep email for everything else." },
    ],
  },
  {
    id: "finance",
    name: "Setu Finance",
    label: "Billing & Financial Operations",
    short: "Engagements, invoices, payments and financial reporting.",
    description:
      "Billing and invoicing for professional-services firms with engagements, invoices, payment tracking and financial reporting.",
    benefits: ["Faster billing cycles", "Fewer missed payments", "Clean financial records"],
    buyer: "Finance & billing teams",
    headline: "Bill from the work that actually happened.",
    role: "attach",
    whoFor:
      "Finance and billing teams who currently reconcile time and expenses from notes and spreadsheets after the fact, once a month, under pressure.",
    dayWithout:
      "Invoices are built from memory and scattered notes days after the work happened, so billable time gets missed and the billing cycle stretches out.",
    capabilities: [
      "Generate invoices directly from logged work on a matter",
      "Track payment status and send automatic reminders",
      "Report on revenue, aging and outstanding balances",
      "Support multiple billing models per engagement",
      "Keep a clean, exportable financial record",
    ],
    dayOne: [
      "Billing rules configured for your engagement types",
      "Chart of accounts and reporting set up",
      "Open invoices and balances migrated in",
      "Training for the billing team",
    ],
    security:
      "Financial data is access-controlled by role, every invoice change is logged, and reporting exports are permissioned separately from day-to-day billing access.",
    proof: {
      metric: "[—days] shorter invoicing cycle",
      quote: "[One sentence attributed quote on the billing-cycle change.]",
      attribution: "[Name, Title, Client firm]",
    },
    faqs: [
      { q: "Does this connect to our accounting software?", a: "Yes — financial records export in standard formats for your accounting system." },
      { q: "Can it handle different billing arrangements?", a: "Yes, including fixed-fee, hourly and retainer models on the same platform." },
      { q: "How is billing data secured?", a: "By role, with a full audit log on every invoice and payment change." },
    ],
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
    buyer: "Case preparation & paralegal teams",
    headline: "Evidence organised and drafted — with a human signing off every time.",
    role: "differentiator",
    whoFor:
      "Case preparation and paralegal teams assembling evidence against a defined set of criteria, where a missed or mis-filed document has real consequences.",
    dayWithout:
      "Evidence is organized by hand against a checklist in a shared folder, drafts are written from scratch each time, and there is no single view of what is missing.",
    capabilities: [
      "Organize evidence automatically against defined criteria",
      "Flag gaps against the required checklist",
      "Draft structured documents from the organized evidence",
      "Route every AI-assisted draft through human review before it is used",
      "Track the status of every piece of evidence end to end",
    ],
    dayOne: [
      "Criteria and checklist configured for your matter type",
      "Review workflow set up with your approval steps",
      "A sample matter run through the full workflow together",
      "Training on where human sign-off is required",
    ],
    security:
      "This is the portal built to be asked about first: role-based access, full audit logging, data stays under customer control, and nothing here is used to train shared models. Every AI-assisted draft carries a human sign-off before it is used.",
    proof: {
      metric: "[—hours] saved per matter on evidence organization",
      quote: "[One sentence attributed quote on the review workflow.]",
      attribution: "[Name, Title, Client firm]",
    },
    faqs: [
      { q: "Does AI submit anything without review?", a: "No. Every AI-assisted draft goes through human review before it is used." },
      { q: "Where does our evidence data live?", a: "Under your control, in the region you choose, and it is never used to train shared models." },
      { q: "Can the criteria change per matter type?", a: "Yes — checklists and evidence criteria are configured per matter type." },
    ],
  },
  {
    id: "assistant",
    name: "Setu AI Assistant",
    label: "Governed AI Assistant",
    short: "Role-aware, cited answers across your operation.",
    description: "Ask about a case, invoice or document and get a role-aware, cited answer.",
    benefits: [
      "Find answers in seconds",
      "Reduce time spent searching",
      "Accelerate employee onboarding",
    ],
    buyer: "Every role, once other portals are live",
    headline: "Answers with citations, scoped to what each person is allowed to see.",
    role: "layer",
    whoFor:
      "Everyone on a team already running one or more Setu portals, who currently searches across matters, tickets and invoices by hand.",
    dayWithout:
      "Finding the status of a matter, an invoice or a piece of evidence means opening several tabs and asking a colleague, and new hires take weeks to learn where things live.",
    capabilities: [
      "Answer questions about any case, invoice or document",
      "Cite the exact record behind every answer",
      "Respect the same role-based permissions as the underlying portals",
      "Search across every connected Setu portal at once",
      "Shorten onboarding by surfacing where things live",
    ],
    dayOne: [
      "Connected to every Setu portal already live for your firm",
      "Permission scopes verified against your existing roles",
      "A short session on how to ask it well",
    ],
    security:
      "Every answer is scoped to what the asking person is already permitted to see, every query is logged, and answers are always cited back to a real record.",
    proof: {
      metric: "[—%] less time spent searching for information",
      quote: "[One sentence attributed quote on onboarding or search time.]",
      attribution: "[Name, Title, Client firm]",
    },
    faqs: [
      { q: "Can it see things a user isn't allowed to see?", a: "No. It only answers from what the asking person already has permission to view." },
      { q: "Does it work without the other portals?", a: "It's a layer across the portals you already run — the more portals live, the more it can answer." },
      { q: "Are answers always sourced?", a: "Yes — every answer cites the record it came from." },
    ],
  },
  {
    id: "discover",
    name: "Setu Discover",
    label: "AI Opportunity Discovery",
    short: "Surfaces where AI will create measurable value.",
    description: "Analyzes operations and surfaces where AI will create measurable value.",
    benefits: ["Prioritized AI opportunities", "ROI-ranked roadmap", "Reduced guesswork"],
    buyer: "Leadership evaluating where to start",
    // CHANGED (08.2): Setu Discover isn't a portal a firm buys on its own — it's how an
    // engagement starts, so it's repositioned as the deliverable of the AI Readiness
    // Assessment service rather than a seventh equal product tile.
    headline: "The opportunity map behind every AI Readiness Assessment.",
    role: "moved-to-service",
    movedToServiceSlug: "ai-strategy",
    whoFor: "Leadership teams deciding where to start with AI, before any portal is purchased.",
    dayWithout:
      "AI ideas arrive without a business case or an owner, so nothing gets prioritized and nothing reaches production.",
    capabilities: [
      "Score AI opportunities across your operation on value and feasibility",
      "Rank them into a sequenced roadmap",
      "Hand off directly into a Setu portal pilot or a services engagement",
    ],
    dayOne: [],
    security: "Covered under the AI Readiness Assessment engagement — see the service page for details.",
    proof: {
      metric: "",
      quote: "",
      attribution: "",
    },
    faqs: [],
  },
];