/**
 * Portfolio copy. Every statement about Atharva is limited to the portfolio
 * genesis specification. The repository has no resume, project audit, course
 * list, or contact file. Do not add employers, dates, degrees, metrics,
 * skills, or links that are not in that specification.
 */

export type DiagramStage = {
  id: string;
  label: string;
  note: string;
};

export type Section = {
  id: string;
  heading: string;
  intro?: string;
} & (
  | { kind: "prose"; paragraphs: string[] }
  | { kind: "items"; items: { title: string; body: string }[] }
  | { kind: "steps"; steps: string[] }
  | {
      kind: "diagram";
      caption: string;
      stages: DiagramStage[];
      parallel?: DiagramStage[];
      parallelLabel?: string;
      aside?: DiagramStage[];
      asideLabel?: string;
    }
  | { kind: "limitations"; items: string[] }
);

export type Project = {
  slug: "folio" | "studyforge";
  name: string;
  label: string;
  summary: string;
  engineeringSummary: string;
  metaDescription: string;
  stack: string[];
  concepts: string[];
  sections: Section[];
};

export const profile = {
  name: "Atharva Gite",
  role: "Computer Science / software engineering student",
  focus:
    "Interested in backend and full-stack engineering and in AI/ML engineering.",
  description:
    "Atharva Gite is a Computer Science / software engineering student interested in backend and full-stack engineering and AI/ML engineering. Projects include Folio, an application tracker, and StudyForge, a course-material ingestion and study system.",
} as const;

export const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/projects/folio", label: "Folio" },
  { href: "/projects/studyforge", label: "StudyForge" },
  { href: "/#coursework", label: "Coursework" },
] as const;

export const about = {
  paragraphs: [
    "Atharva Gite is a Computer Science / software engineering student interested in backend and full-stack engineering and in AI/ML engineering.",
    "The projects on this site are Folio, a personal job-search and application tracking system, and StudyForge, a course-material ingestion and study system.",
  ],
} as const;

export const engineering = [
  {
    name: "Folio",
    href: "/projects/folio",
    text: "Production-shaped full-stack and backend engineering inside a modular monolith: current application state and historical state are written together, with ownership checks, dashboard analytics, private documents, and scheduled HTTP reminders. It is not a distributed system.",
  },
  {
    name: "StudyForge",
    href: "/projects/studyforge",
    text: "Document ingestion, versioning, asynchronous indexing, embeddings, hybrid retrieval, and grounded generation. Background work is a PostgreSQL-backed worker with leases, retry handling, and token-fenced job updates.",
  },
] as const;

export const coursework = {
  sourceLabel: "KCL course information",
  intro: "These coursework areas are stated in the KCL course information.",
  areas: [
    "Artificial Intelligence Planning",
    "Agents and Multi-Agent Systems",
    "Machine Learning",
    "Optimization Methods",
    "Pattern Recognition, Neural Networks and Deep Learning",
    "Software Engineering and Underlying Technology for Financial Systems",
  ],
} as const;

const folio: Project = {
  slug: "folio",
  name: "Folio",
  label: "Application tracker",
  summary: "A personal job-search and application tracking system.",
  engineeringSummary:
    "A Next.js modular monolith that keeps current application state together with historical state, transactional updates, ownership checks, analytics, and production-oriented engineering. Reminders are scheduled HTTP work. Folio is not a distributed system.",
  metaDescription:
    "Personal job-search and application tracking system. A Next.js modular monolith with PostgreSQL, Prisma, transactional status history, and server-side ownership checks.",
  stack: [
    "Next.js",
    "App Router",
    "TypeScript",
    "API routes",
    "Server actions",
    "Service layer",
    "Repository layer",
    "PostgreSQL",
    "Prisma",
    "Authentication",
    "GitHub Actions",
    "Playwright",
  ],
  concepts: [
    "Transactional current-state, history, and audit coupling",
    "Server-side ownership",
    "Private file handling",
    "Partial-success CSV ingestion",
    "Optimistic board rollback",
  ],
  sections: [
    {
      kind: "prose",
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "Folio tracks a job-search application pipeline. The tracked records include status history, interviews, follow-ups, contacts, notes, and resumes or other documents.",
        "The system also includes CSV import and export, dashboard analytics, reminders, and private document storage.",
        "No production scale or performance measurement is part of the verified description.",
      ],
    },
    {
      kind: "diagram",
      id: "architecture",
      heading: "Architecture",
      intro:
        "Requests move from the browser through Next.js pages, server actions, and API routes. Validation and authentication run before service code. Services call repositories and Prisma, and PostgreSQL stores the data. Private document storage and scheduled HTTP reminders sit alongside that path, still inside the modular monolith.",
      caption: "Request path in the Folio modular monolith.",
      stages: [
        {
          id: "browser",
          label: "Browser",
          note: "The application pipeline is used in the browser, including board updates that can roll back optimistically.",
        },
        {
          id: "next",
          label: "Next.js pages / server actions / API",
          note: "Folio is a Next.js modular monolith on the App Router, with pages, server actions, and API routes, written in TypeScript.",
        },
        {
          id: "auth",
          label: "Validation + authentication",
          note: "Requests go through validation and authentication. Ownership is checked on the server.",
        },
        {
          id: "services",
          label: "Services",
          note: "Application status changes are written together with status history and audit/product events.",
        },
        {
          id: "repositories",
          label: "Repositories / Prisma",
          note: "Repositories and Prisma are the persistence layer in front of PostgreSQL.",
        },
        {
          id: "postgres",
          label: "PostgreSQL",
          note: "PostgreSQL is the source of truth for current state and historical state.",
        },
      ],
      asideLabel: "Also in this monolith",
      aside: [
        {
          id: "documents",
          label: "Private document storage",
          note: "Resumes and documents use private document storage and private file handling.",
        },
        {
          id: "reminders",
          label: "Scheduled HTTP reminders",
          note: "Reminders are scheduled HTTP work inside the modular monolith, not a separate distributed service.",
        },
      ],
    },
    {
      kind: "items",
      id: "engineering",
      heading: "Engineering problems",
      items: [
        {
          title: "Current state and historical state",
          body: "Application status changes are written together with status history and audit/product events. Current state, history, and audit data are coupled transactionally.",
        },
        {
          title: "Ownership",
          body: "Ownership is checked on the server.",
        },
        {
          title: "Document storage",
          body: "Resumes and documents use private document storage and private file handling.",
        },
        {
          title: "CSV ingestion",
          body: "CSV import and export are included. Import is partial-success ingestion, so accepted records can be kept when other records are not.",
        },
        {
          title: "Optimistic UI",
          body: "The board can update optimistically and roll back.",
        },
        {
          title: "Reminders",
          body: "Reminders are scheduled HTTP work. That work stays in the modular monolith.",
        },
      ],
    },
    {
      kind: "prose",
      id: "data-model",
      heading: "Data model",
      paragraphs: [
        "Folio keeps an application pipeline and the records that go with it: a current status, status history, interviews, follow-ups, contacts, notes, and resumes or documents.",
        "Current state and historical state are both stored. Status changes are written together with status history and audit/product events.",
      ],
    },
    {
      kind: "prose",
      id: "testing",
      heading: "Testing",
      paragraphs: [
        "The project includes tests. Continuous integration runs on GitHub Actions. Browser tests use Playwright.",
      ],
    },
    {
      kind: "items",
      id: "tradeoffs",
      heading: "Tradeoffs",
      items: [
        {
          title: "Modular monolith",
          body: "Folio is a modular monolith rather than a distributed architecture. Reminder processing is scheduled HTTP work inside that application.",
        },
        {
          title: "PostgreSQL as source of truth",
          body: "PostgreSQL is the source of truth.",
        },
        {
          title: "Current state and historical state",
          body: "Current state and historical state are both stored. That duplication is part of the design.",
        },
      ],
    },
  ],
};

const studyforge: Project = {
  slug: "studyforge",
  name: "StudyForge",
  label: "RAG study",
  summary: "A course-material ingestion and study system.",
  engineeringSummary:
    "Documents move through ingestion, versioning, asynchronous indexing, and embeddings into hybrid retrieval and grounded generation. A PostgreSQL-backed worker uses leases, retry handling, and token-fenced job updates.",
  metaDescription:
    "Course-material ingestion and study system. Next.js and FastAPI, with PostgreSQL, pgvector, hybrid retrieval, and a Python worker.",
  stack: [
    "Next.js",
    "FastAPI",
    "Python worker",
    "PostgreSQL",
    "pgvector",
    "PostgreSQL full-text search",
    "OpenAI",
  ],
  concepts: [
    "Hybrid vector and keyword retrieval",
    "Reciprocal-rank fusion",
    "SKIP LOCKED",
    "Worker leases",
    "Token-fenced updates",
    "Retry-safe chunk replacement",
    "Source citations",
  ],
  sections: [
    {
      kind: "prose",
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "StudyForge is a course-material ingestion and study system. Documents are uploaded, versioned, extracted, chunked, embedded, and retrieved.",
        "The system includes quiz generation, flashcards, and study plans. Responses include source citations.",
        "The system includes an OpenAI integration. Background processing uses PostgreSQL-backed jobs and a Python worker.",
        "The verified description does not include a measurement of retrieval accuracy, model quality, production deployment, or request scale.",
      ],
    },
    {
      kind: "diagram",
      id: "architecture",
      heading: "Architecture",
      intro:
        "The browser talks to a Next.js backend-for-frontend, which calls a FastAPI backend. PostgreSQL with pgvector stores the data. A Python worker runs extraction, chunking, and embeddings.",
      caption:
        "StudyForge path from the browser through the API and worker.",
      stages: [
        {
          id: "browser",
          label: "Browser",
          note: "Documents are uploaded in the browser. Study features include quiz generation, flashcards, and study plans.",
        },
        {
          id: "bff",
          label: "Next.js BFF",
          note: "The Next.js web application is the backend-for-frontend in front of FastAPI.",
        },
        {
          id: "fastapi",
          label: "FastAPI",
          note: "The backend API is FastAPI.",
        },
        {
          id: "postgres",
          label: "PostgreSQL / pgvector",
          note: "PostgreSQL stores the data. pgvector and PostgreSQL full-text search are part of retrieval.",
        },
        {
          id: "worker",
          label: "Python worker",
          note: "A Python worker processes PostgreSQL-backed jobs. It claims work with `SKIP LOCKED`, holds leases, and fences updates with lease tokens.",
        },
        {
          id: "indexing",
          label: "Extraction / chunking / embeddings",
          note: "The worker path extracts text, chunks it, and computes embeddings. Chunk replacement is retry-safe and idempotent.",
        },
      ],
    },
    {
      kind: "steps",
      id: "ingestion",
      heading: "Ingestion pipeline",
      intro: "A document moves from upload to indexing through these steps.",
      steps: [
        "Upload",
        "Validation",
        "Hashing / deduplication",
        "Versioning",
        "Job",
        "Worker lease",
        "Extraction",
        "Chunking",
        "Embeddings",
        "Indexing",
      ],
    },
    {
      kind: "diagram",
      id: "retrieval",
      heading: "Retrieval",
      intro:
        "Hybrid retrieval combines vector and PostgreSQL full-text candidates using reciprocal-rank fusion. A final context is selected, and citations are validated. Responses include source citations.",
      caption:
        "Vector and full-text candidate sets, then fusion, context selection, and citation validation.",
      parallelLabel: "Candidate sets",
      parallel: [
        {
          id: "vector",
          label: "Vector retrieval",
          note: "One candidate set comes from vector retrieval.",
        },
        {
          id: "fts",
          label: "PostgreSQL full-text retrieval",
          note: "The other candidate set comes from PostgreSQL full-text retrieval.",
        },
      ],
      stages: [
        {
          id: "rrf",
          label: "Reciprocal-rank fusion",
          note: "The vector and full-text candidate sets are combined with reciprocal-rank fusion.",
        },
        {
          id: "context",
          label: "Final context selection",
          note: "A final context is selected from the fused candidates.",
        },
        {
          id: "citations",
          label: "Citation validation",
          note: "Citations are validated. Responses include source citations.",
        },
      ],
    },
    {
      kind: "items",
      id: "worker",
      heading: "Worker architecture",
      intro:
        "A PostgreSQL-backed worker pipeline with leases, retry handling, and token-fenced job updates.",
      items: [
        {
          title: "Database-backed jobs",
          body: "Jobs are stored in PostgreSQL.",
        },
        {
          title: "SKIP LOCKED",
          body: "The worker claims jobs with `SKIP LOCKED`.",
        },
        {
          title: "Leases and lease tokens",
          body: "A job is held under a lease. Lease tokens fence updates.",
        },
        {
          title: "Retries",
          body: "Failed work is retried.",
        },
        {
          title: "Chunk replacement",
          body: "Chunk replacement is retry-safe and idempotent.",
        },
      ],
    },
    {
      kind: "prose",
      id: "testing",
      heading: "Testing",
      paragraphs: [
        "Tests include deterministic fake-model testing.",
      ],
    },
    {
      kind: "limitations",
      id: "limitations",
      heading: "Limitations",
      intro:
        "The verified description does not support claims about any of the following.",
      items: [
        "RAG accuracy",
        "Model quality benchmarks",
        "Autonomous agents",
        "OCR for scanned PDFs",
        "Production AI deployment",
        "Evaluation results",
        "Production scale or performance",
      ],
    },
  ],
};

export const projects = [folio, studyforge] as const;

export function getProject(slug: Project["slug"]): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }
  return project;
}
