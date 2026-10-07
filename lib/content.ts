/**
 * Portfolio copy. Facts are limited to the software and quantitative resumes
 * and to the project audits of those repositories. Do not add employers,
 * metrics, links, or capabilities that those sources do not support.
 */

export type DetailSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFigure = {
  value: string;
  caption: string;
};

export type ProjectTheme = "folio" | "study" | "yield" | "pairs" | "book";

export type Project = {
  id: string;
  theme: ProjectTheme;
  name: string;
  category: string;
  summary: string;
  stack: string[];
  points: string[];
  figures?: ProjectFigure[];
  links: ProjectLink[];
  details: DetailSection[];
};

export type Role = {
  title: string;
  org: string;
  dates: string;
  points: string[];
};

export type CourseGroup = {
  title: string;
  courses: string[];
};

export const profile = {
  name: "Atharva Gite",
  email: "atharva.gite@kcl.ac.uk",
  phone: "+44 7351160709",
  phoneHref: "tel:+447351160709",
  credential:
    "Computer Engineering, SPIT · MSc Advanced Computing, King's College London",
  lede: "I build across software, machine learning, and markets. The part worth talking about is how the details hold up.",
  description:
    "Atharva Gite is a Computer Engineering graduate and MSc Advanced Computing student. Portfolio work spans software engineering, AI/ML, quantitative research, trading systems, and backend infrastructure.",
} as const;

export const socialLinks: ProjectLink[] = [
  { label: "GitHub", href: "https://github.com/atharva-gite" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atharva-gite-004193269",
  },
  { label: "LeetCode", href: "https://leetcode.com/u/atharvagite/" },
];

export const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
] as const;

export const about = {
  paragraphs: [
    "Software, machine learning, and markets, in the projects below.",
  ],
} as const;

export const workIntro =
  "Application software, document retrieval, fixed-income modeling, pairs research, and a limit-order-book simulator.";

export const roles: Role[] = [
  {
    title: "Founding AI Engineer",
    org: "Celeris",
    dates: "Oct 2025 – Sep 2026",
    points: [
      "Led the migration of an OCR pipeline for handwritten and scanned medical and pharma documents from local PyTesseract and PyMuPDF processing to the Mistral OCR-4 API. For files under 10MB, processing time went from 40s to 12s and extraction accuracy from 0.47 to 0.83.",
      "On VocaLink, which answers live inbound phone calls, played synthesized speech as it was generated instead of waiting for the full clip, and stopped it when the caller interrupted. That cut the pause before callers hear a reply by about 70%.",
      "Integrated AI-assisted contract generation into a Contract Lifecycle and Finance Management platform (Python, Express, MongoDB, React), including reusable APIs across the contract, finance, and asset modules.",
      "Ran phone, SMS, and web chat through one engine that can finish a booking, a lead, or a ticket in the same conversation. The decision itself takes 60–125ms, inside a 700ms turn budget.",
    ],
  },
  {
    title: "Python Development Intern",
    org: "IDMS InfoTech",
    dates: "Jan 2025 – June 2025",
    points: [
      "Reduced automated minutes-of-meeting generation from about 3 minutes to 40 seconds by optimizing in-house transcription and processing workflows.",
      "Implemented multilingual meeting processing across 70+ languages, from transcription and translation through meeting summaries and email distribution.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "Sardar Patel Institute of Technology",
    dates: "Aug 2024 – May 2025",
    points: [
      "Guided 200+ undergraduate students in Ubuntu and Linux, terminal workflows, debugging, and operating systems fundamentals during laboratory sessions.",
      "Taught SQL, MySQL, and DBMS, and helped students troubleshoot environment and workflow issues.",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "IDMS InfoTech",
    dates: "Jun 2024 – Jul 2024",
    points: [
      "Contributed to Purchase Order to Sales Order automation by improving preprocessing pipelines and workflow efficiency on enterprise datasets.",
      "Supported automation on structured and semi-structured enterprise data, reducing manual intervention in document workflows.",
    ],
  },
];

export const education = [
  {
    school: "King's College London",
    credential: "MSc, Advanced Computing",
    dates: "2026 – Expected 2027",
    detail: "London, England",
    note: "These are current modules, not a list of finished ones.",
  },
  {
    school: "Sardar Patel Institute of Technology",
    credential: "Bachelor of Technology, Computer Engineering",
    dates: "2021 – 2025",
    detail: "Mumbai, India · CGPA 8.48/10",
    note: "Completed undergraduate coursework.",
  },
] as const;

export const kclCourses = [
  "Artificial Intelligence Planning",
  "Agents and Multi-Agent Systems",
  "Cryptography",
  "Security Engineering",
  "Machine Learning",
  "Optimization Methods",
  "Pattern Recognition, Neural Networks and Deep Learning",
  "Software-Engineering and Underlying Technology for Financial Systems",
] as const;

export const spitCoursework: CourseGroup[] = [
  {
    title: "Mathematics",
    courses: [
      "Engineering Calculus",
      "Differential Equations and Complex Analysis",
      "Probability and Statistics",
      "Linear Algebra",
      "Discrete Structures and Graph Theory",
    ],
  },
  {
    title: "Computer Science",
    courses: [
      "Data Structures",
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Computer Architecture and Organization",
      "Database Management Systems",
      "Theory of Computation",
      "Software Engineering",
      "Artificial Intelligence and Machine Learning",
      "Distributed Computing",
      "Big Data Analytics",
      "Cryptography and System Security",
      "Systems Programming and Compiler Construction",
      "Computer Communications and Networks",
    ],
  },
  {
    title: "Specialized",
    courses: [
      "Block Chain Technology",
      "Data Analytics",
      "Fundamental of Signal and Image Processing",
      "Robotics and Machine Vision Intelligence",
      "Advanced Data Visualizations",
      "AI for Healthcare Analytics",
      "Cloud and Internet Technology Lab",
    ],
  },
];

export const skillGroups: CourseGroup[] = [
  {
    title: "Languages",
    courses: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL", "R"],
  },
  {
    title: "Frameworks / APIs",
    courses: [
      "Node.js",
      "Express.js",
      "Flask",
      "React",
      "Next.js",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    courses: ["PostgreSQL", "MongoDB", "MySQL", "pgvector"],
  },
  {
    title: "Cloud & tools",
    courses: [
      "Linux",
      "Bash",
      "Git",
      "GitHub Actions",
      "Docker",
      "Postman",
      "AWS",
    ],
  },
  {
    title: "Data & analytics",
    courses: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "Apache Spark",
      "Hadoop",
      "Hive",
      "Tableau",
      "Power BI",
    ],
  },
  {
    title: "AI tooling",
    courses: ["OpenAI", "LLM integration", "Retrieval-augmented generation"],
  },
  {
    title: "Testing & build",
    courses: [
      "pytest",
      "Vitest",
      "Playwright",
      "CMake",
      "Catch2",
      "Google Benchmark",
    ],
  },
  {
    title: "Core concepts",
    courses: [
      "OOP",
      "DBMS",
      "Distributed systems fundamentals",
      "Backend development",
      "Networking fundamentals",
      "Workflow automation",
      "Debugging",
      "SDLC",
      "Testing",
      "CI/CD",
      "Concurrency",
    ],
  },
];

export const practiceNote =
  "500+ data structures and algorithms problems solved across LeetCode, GeeksforGeeks, and DeepML.";

const folio: Project = {
  id: "folio",
  theme: "folio",
  name: "Folio",
  category: "Software engineering",
  summary:
    "Tracks internship and new-grad applications in one PostgreSQL-backed app, with stage history, interviews, follow-ups, and private resumes.",
  stack: [
    "TypeScript",
    "Next.js",
    "React",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "Zod",
    "Vitest",
    "Playwright",
  ],
  points: [
    "Stage boards, interviews, follow-ups, spreadsheet import, and private resume storage, with session authentication and resource ownership checks.",
    "Status changes are transactional: the current status, status history, and audit events are written together, which is what time-in-stage and stalled-application analytics read.",
    "CI runs lint, typecheck, Vitest, Playwright, and a production build.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-gite/application_tracker",
    },
  ],
  details: [
    {
      heading: "Overview",
      paragraphs: [
        "Folio is a personal workspace for an internship and new-grad application pipeline. It keeps the current stage of a role together with status history, interviews, follow-ups, contacts, notes, and resumes, and it surfaces what is due or stalled.",
        "The implementation is a Next.js modular monolith. Pages, server actions, and API routes share the same TypeScript services. It is not a distributed system.",
      ],
    },
    {
      heading: "Technical approach",
      paragraphs: [
        "PostgreSQL, through Prisma, is the source of truth for both the current application and its history. A single mutable status would be enough to draw a board, but not enough for time-in-stage or for whether a role ever reached an interview. The repository writes the current status, a history row, and an audit event in one transaction.",
        "Reminders are scheduled HTTP work inside the same application, not a separate worker process.",
      ],
    },
    {
      heading: "Architecture",
      steps: [
        "Browser, including a stage board that can move a card and roll it back if the request fails",
        "Next.js pages, server actions, and API routes",
        "Zod validation and session authentication",
        "Services that check resource ownership on the server",
        "Prisma repositories",
        "PostgreSQL for current state, status history, and audit events",
      ],
      bullets: [
        "Private document storage sits beside that path. Downloads go through an ownership check.",
        "Follow-up reminders are scheduled HTTP requests handled by the same application.",
      ],
    },
    {
      heading: "Engineering details",
      bullets: [
        "Ownership is enforced in services used by both API routes and server actions. A resource owned by someone else is returned as not found.",
        "Spreadsheet import validates each row and commits accepted rows independently, so one bad row does not discard the rows that parsed.",
        "Resume uploads are limited to 5 MiB and to PDF and Word files. If the metadata write fails, the stored bytes are removed.",
        "Stalled applications are applied or assessment-stage roles with no status change for at least 14 days. Archived, closed, and saved roles are excluded.",
        "The board updates optimistically, locks a card while the request is in flight, and restores the previous column on failure.",
      ],
    },
    {
      heading: "Validation",
      paragraphs: [
        "GitHub Actions provisions PostgreSQL and runs lint, TypeScript typecheck, Vitest, a production build, and Playwright. Tests cover ownership, status history, analytics, import, interviews, and follow-ups, including a browser journey through the job-search loop.",
        "No latency, throughput, or production-scale measurement is recorded for this project.",
      ],
    },
  ],
};

const studyforge: Project = {
  id: "studyforge",
  theme: "study",
  name: "StudyForge",
  category: "AI / ML",
  summary:
    "Ingests course documents, indexes them asynchronously, and generates study material with source citations from hybrid retrieval.",
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "pgvector",
    "Next.js",
    "OpenAI",
    "pytest",
  ],
  points: [
    "Uploads are versioned, extracted, chunked, and embedded. Questions, flashcards, quizzes, and exam plans use the active document version.",
    "Retrieval fuses pgvector similarity with PostgreSQL full-text search. Generation is withheld when retrieval is too weak, and citations have to match retrieved chunks.",
    "Background indexing is a PostgreSQL-backed worker with leases, retries, and a token check so a crashed worker cannot finish another worker's job.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-gite/studyforge",
    },
  ],
  details: [
    {
      heading: "Overview",
      paragraphs: [
        "StudyForge takes course materials, indexes them, and uses that index for questions, flashcards, quizzes, and an exam study plan. The engineering work is document ingestion, asynchronous processing, retrieval, and generated study output.",
        "The repository does not include a measured retrieval-quality or model-quality evaluation, an autonomous agent loop, OCR for scanned PDFs, or a cloud production deployment.",
      ],
    },
    {
      heading: "Technical approach",
      paragraphs: [
        "A Next.js app is the backend-for-frontend. It keeps the session cookie HTTP-only and proxies API calls to FastAPI. PostgreSQL stores courses, document versions, chunks, vectors, study records, and jobs. A separate Python process claims those jobs.",
        "Uploaded files are stored on the local filesystem. Text, PDF, spreadsheets, Word, PowerPoint, and images are accepted. A PDF with no extractable text fails. That path is not an OCR pipeline.",
      ],
    },
    {
      heading: "Architecture",
      steps: [
        "Browser upload and study actions",
        "Next.js backend-for-frontend",
        "FastAPI, with course membership checks",
        "PostgreSQL with pgvector and full-text search",
        "Worker claims a job with SKIP LOCKED and a lease token",
        "Extract, chunk, embed, then replace that version's chunks",
      ],
    },
    {
      heading: "Engineering details",
      bullets: [
        "A document can have multiple versions. Search uses the active version. An identical file hash in the same course does not create a second processing job.",
        "Hybrid retrieval takes vector candidates and PostgreSQL full-text candidates and combines them with reciprocal-rank fusion. The server builds citations from retrieved chunk ids. A model-supplied id that was not retrieved is dropped.",
        "Quiz answer keys stay on the server. Scores are computed by application code. Study-plan dates, session length, and the session cap are also computed in application code rather than taken from the model.",
        "Job updates are conditional on the lease token. Retry replaces the chunks for that version instead of appending a second copy. The worker is at-least-once around the external model call: a lost lease stops later database writes, but a provider call may already have happened.",
        "Tests inject a deterministic fake language model, so the API suite does not require a live OpenAI call.",
      ],
    },
    {
      heading: "Validation",
      paragraphs: [
        "pytest modules cover authentication, course membership, upload and version behavior, leases, citation checks, and study actions. They check that invented chunk ids are rejected and that a blank PDF fails closed.",
        "There is no checked-in evaluation of answer quality, retrieval accuracy, or a deployed service. Configured limits, including upload size and chunk size, are not performance results.",
      ],
    },
  ],
};

const yieldCurve: Project = {
  id: "yield-curve",
  theme: "yield",
  name: "Yield Curve Engine",
  category: "Quantitative research",
  summary:
    "Fits Treasury yield curves, compares those fits on held-out maturities, summarizes daily yield changes, and backtests simple curve spreads.",
  stack: [
    "Python 3.12",
    "Streamlit",
    "Plotly",
    "NumPy",
    "SciPy",
    "pandas",
    "scikit-learn",
    "Docker",
    "pytest",
  ],
  points: [
    "Nelson-Siegel, Nelson-Siegel-Svensson, and smoothing-spline fits. NSS optimizes the decay parameters and solves the linear loadings conditionally.",
    "NS, NSS, and the spline are compared with leave-one-maturity-out checks, not only with in-sample residuals.",
    "PCA is computed on daily yield changes. The spread backtest calibrates thresholds on the prior window and lags positions before P&L.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-gite/yield-curve",
    },
    {
      label: "Streamlit",
      href: "https://atharva-gite-yieldcurve.streamlit.app/",
    },
  ],
  details: [
    {
      heading: "Overview",
      paragraphs: [
        "The app loads U.S. Treasury constant-maturity yields, fits a curve for a chosen date, and compares three representations of that curve. It also plots principal components of daily yield changes and runs a small backtest on the 10-year–2-year slope or a 2s5s10s butterfly.",
        "The inputs are constant-maturity yields, not a bootstrapped discount curve. PCA here is factor analysis of yield changes. It is not a regime classifier, and the component scores do not set backtest positions.",
      ],
    },
    {
      heading: "Technical approach",
      paragraphs: [
        "Nelson-Siegel and Nelson-Siegel-Svensson impose a level, slope, and curvature shape. The smoothing spline follows the observed tenors more locally. For NSS, the nonlinear search is over the decay parameters. At each candidate, the factor loadings are solved by linear least squares, with a penalty when the two decays collapse onto each other.",
        "Leave-one-maturity-out refits after withholding each tenor and predicts the held-out maturity. That is a cross-sectional interpolation check on one date, including the endpoints. It is not a forecast of a future date.",
      ],
    },
    {
      heading: "Architecture",
      steps: [
        "FRED API, then a FRED CSV endpoint, then a local cache",
        "Clean the 11 constant-maturity series and snap a selected date to the nearest observation",
        "Fit Nelson-Siegel, Nelson-Siegel-Svensson, and a smoothing spline",
        "Leave-one-maturity-out comparison on that date",
        "PCA on daily yield changes across the 11 maturities",
        "Walk-forward threshold backtest on the raw slope or butterfly, separate from the curve fit",
      ],
    },
    {
      heading: "Engineering details",
      bullets: [
        "The loader can fall back when the API is unavailable and reports which source it used. A checked-in cache holds 6,268 daily rows for 11 maturities, from 2001-07-31 through 2026-08-24.",
        "Nelson-Siegel loadings use a finite limiting value near a zero denominator so a small decay parameter does not blow up the basis.",
        "The backtest estimates mean and standard deviation on the preceding training window, keeps those thresholds fixed through the test block, shifts the signal by one observation, and charges a cost on position changes.",
        "That P&L is a unit move in the yield spread. It is not mapped to Treasury, swap, or futures DV01.",
        "Reproducibility support includes the cache, pinned requirements, a Dockerfile, and synthetic numerical tests. There are 18 checked-in Python tests.",
      ],
    },
    {
      heading: "Validation",
      paragraphs: [
        "Tests use constructed curves and panels: NSS parameter recovery, a finite loading near zero, PCA on a synthetic factor panel, spline interpolation, and a synthetic butterfly backtest. They do not establish a historical trading result.",
        "The app can compute Sharpe, drawdown, and cumulative spread P&L. No checked-in real-data Sharpe or P&L figure is reported here.",
      ],
    },
  ],
};

const pairs: Project = {
  id: "pairs",
  theme: "pairs",
  name: "Pairs Trading Statistical Arbitrage Engine",
  category: "Quantitative research",
  summary:
    "Screens a sector universe, compares three hedge-ratio models, and evaluates a lagged dollar book with costs, borrow, and market beta.",
  stack: [
    "Python",
    "pandas",
    "NumPy",
    "scikit-learn",
    "pytest",
    "Jupyter",
  ],
  points: [
    "Pair screening with cointegration testing and Benjamini-Hochberg and Bonferroni correction across the pairs in a sector.",
    "Static OLS, rolling OLS, and Kalman hedge ratios, then a log-price spread, z-score signals, and walk-forward backtesting.",
    "Dollar sizing, transaction costs, borrow costs, net market beta, a blotter, and unit tests.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-gite/pairstrading",
    },
    {
      label: "Streamlit",
      href: "https://atharva-gite-pairstrading.streamlit.app/",
    },
  ],
  details: [
    {
      heading: "Overview",
      paragraphs: [
        "The project asks which pairs in a small sector universe show a long-run price relationship, and how a deviation would look as a dollar-sized position after costs. Correlation by itself is not treated as a trade.",
        "Nothing in the repository is a verified profitable strategy. There is no checked-in result that establishes positive out-of-sample performance.",
      ],
    },
    {
      heading: "Technical approach",
      paragraphs: [
        "The scanner tests pairs in a fixed sector universe and adjusts p-values with Benjamini-Hochberg and Bonferroni correction. A half-life on the spread is a horizon check: a residual can look statistically related and still be too slow to matter.",
        "Three hedge assumptions share one backtest. Static OLS freezes the discovery-sample hedge. Rolling OLS refits on a trailing window. A Kalman filter treats the hedge ratio and intercept as a random-walk state. The spread is log price minus the hedged log price. Signals are z-scores. Holdings used for P&L are lagged, so an observation does not set its own exposure.",
      ],
    },
    {
      heading: "Architecture",
      steps: [
        "Download closes for the sector universe and a benchmark",
        "Screen pairs and apply multiple-testing correction",
        "Estimate a static, rolling, or Kalman hedge",
        "Build the spread and a rolling z-score",
        "Lag the position and the hedge used for the dollar book",
        "Apply transaction costs, optional borrow, and a net beta estimate",
        "Report performance fields and a trade blotter",
      ],
    },
    {
      heading: "Engineering details",
      bullets: [
        "Dollar notionals split capital across the two legs using the hedge ratio or an equal-dollar split. Turnover pays slippage and commission. Optional borrow is charged on short dollars.",
        "Net beta uses each leg's relationship to the benchmark. Two legs are not assumed to be market-neutral.",
        "The blotter records side, entry and exit, holding time against the half-life, and the exit reason.",
        "Walk-forward mode uses a fixed discovery and live split when both sides are long enough. Rolling and Kalman hedges can keep updating after the split. A static hedge can stay frozen.",
        "Jupyter notebooks in the repository are earlier research iterations. They are not a saved performance result for the current engine.",
      ],
    },
    {
      heading: "Validation",
      paragraphs: [
        "Unit tests cover screening helpers, hedge outputs, signal transitions, sizing, costs, blotter parsing, and walk-forward metric keys. They check that the accounting runs. They do not show that a strategy made money.",
        "Reported fields include Sharpe, drawdown, return, win rate on active days, in-sample and out-of-sample slices, borrow, and net beta. No verified out-of-sample performance number is included on this site.",
      ],
    },
  ],
};

const orderBook: Project = {
  id: "order-book",
  theme: "book",
  name: "Limit Order Book Simulator",
  category: "Trading systems",
  summary:
    "Simulates price-time matching, iceberg replenishment, pro-rata allocation, concurrency, and market-data paths in a C++20 limit order book.",
  stack: ["C++20", "CMake", "Catch2", "Google Benchmark"],
  points: [
    "Price-time FIFO, multi-level sweeps, iceberg replenishment that sends a new visible slice to the tail of the queue, and deterministic pro-rata allocation.",
    "Single-writer matching, bounded MPSC ingress, seqlock quote publication, and a separate SPSC path that publishes ITCH-style UDP multicast messages.",
    "A slab order pool, Catch2 tests for matching and concurrency, and Google Benchmark measurements.",
  ],
  figures: [
    {
      value: "~2.4×",
      caption: "faster adds than heap allocation",
    },
    {
      value: "~4.6M events/s",
      caption: "mixed pipeline",
    },
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/atharva-gite/CPP-Orderbook-Simulator",
    },
  ],
  details: [
    {
      heading: "Overview",
      paragraphs: [
        "This is a simulator for how a limit order book matches, replenishes iceberg orders, and allocates pro-rata fills, and for how a single writer can take commands from other threads while publishing quotes and market data.",
        "It is not an exchange. There is no recovery protocol, gateway, risk check, or production network result behind these numbers.",
      ],
    },
    {
      heading: "Technical approach",
      paragraphs: [
        "Prices are integer ticks. Each price level is a FIFO queue, so price chooses the level and arrival order chooses the queue rank. A market order walks from the best price until the requested size or the displayed liquidity runs out, filling resting orders at their limit prices.",
        "An iceberg contributes only its visible size to the aggregate. When that slice is consumed, hidden quantity is replenished at the tail and loses time priority. Pro-rata uses visible size, floors each share, and breaks the remainder by order id so the same inputs allocate the same way.",
      ],
    },
    {
      heading: "Architecture",
      paragraphs: [
        "Two related paths are implemented separately. They are not one integrated gateway from producers through matching to the wire.",
      ],
      steps: [
        "Producers push commands onto a bounded MPSC queue",
        "One consumer applies those commands to the book",
        "A seqlock publishes a top-of-book quote for readers",
        "A separate driver runs the matching engine and builds market-data events",
        "Those events cross a preallocated SPSC queue to a publisher thread",
        "The publisher sends ITCH-style big-endian UDP multicast datagrams",
      ],
    },
    {
      heading: "Engineering details",
      bullets: [
        "Orders are intrusive list nodes in a preallocated slab, so the pool path does not call the heap for every order. If the pool is exhausted, allocation fails explicitly.",
        "Order ids are a dense table of pointers. The project writeup describes that change as a response to hash-node allocation on the hot path.",
        "The MPSC queue is bounded. A full queue returns failure to the caller. One consumer is the intended writer of the book.",
        "Quote publication uses a seqlock so readers can retry a torn read. The market-data path is best-effort UDP. The matching thread does not itself send sockets on that path.",
        "The project writeup reports ThreadSanitizer runs of the concurrency tests with no data-race report on the runs it describes. That is not a proof of every interleaving.",
      ],
    },
    {
      heading: "Validation",
      bullets: [
        "Catch2 covers insertion and cancellation, FIFO partial fills, price walking, iceberg priority loss, a divisible pro-rata case, MPSC transfer, seqlock consistency, packed messages, and multicast loopback.",
        "Google Benchmark separates add latency, pool versus heap allocation, and simulated throughput.",
        "The multicast check in the repository is a loopback software path, not an exchange or network benchmark.",
      ],
    },
    {
      heading: "Performance",
      paragraphs: [
        "The project writeup's slab-versus-heap comparison reports about 2.4× faster adds than per-order heap allocation at the depths it measured. A mixed pipeline of limit, market, and cancel events is reported at about 4.62 million events per second after the id-table and price-ladder change. The resume rounds that mixed-pipeline figure to about 4.6 million events per second.",
        "Both numbers are single-machine simulator measurements from that writeup. They are not exchange wire latency, and they are not a claim about a production matching engine.",
      ],
    },
  ],
};

export const projects: Project[] = [
  folio,
  studyforge,
  yieldCurve,
  pairs,
  orderBook,
];
