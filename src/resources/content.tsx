import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Miras",
  lastName: "Muratov",
  name: `Miras Muratov`,
  role: "Data Scientist & AI Engineer",
  avatar: "/images/avatar.png",
  email: "mirasmuratov1998@gmail.com",
  location: "America/New_York", // Fairfax, Virginia
  languages: ["English", "Kazakh", "Russian"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about data science and AI engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mirasanalyst",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/miras-muratov-7535741b3/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Scientist & AI Engineer</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ScaleApp</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Miras, a <Text as="span" size="xl" weight="strong">Data Scientist & AI Engineer</Text> based in Fairfax, Virginia. I build scalable data pipelines, <br /> ML-driven analytics, and cloud-native solutions that deliver measurable business value.
</>
  ),
};

const about: About = {
  path: "/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Data Scientist and AI Engineer with strong experience in data analytics, reporting,
        operational support, and cross-functional coordination within large-scale energy and technology
        environments. Proven ability to manage budgets, build executive-level dashboards, support
        structured project processes, and translate complex data into clear visual narratives for
        leadership decision-making. Delivered $1.2M+ in measurable operational value through
        data-driven reporting and performance optimization.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "ScaleApp",
        companyLink: "https://uscaleapp.com/",
        timeframe: "September 2025 – Present",
        role: "Founder & Full Stack Data / AI Engineer",
        achievements: [
          <>
            Designed and deployed cloud-native ETL/ELT pipelines using Python and SQL to ingest,
            transform, and validate structured and semi-structured data for ML-driven engineering
            analytics.
          </>,
          <>
            Built scalable backend systems leveraging Google Cloud (BigQuery, Cloud Storage) for data
            warehousing and analytics use cases.
          </>,
          <>
            Implemented modular, maintainable Python code following OOP principles, logging, and
            structured error handling to ensure pipeline reliability.
          </>,
          <>
            Developed data models and optimized complex SQL queries using partitioning and clustering
            techniques to improve query performance and reduce compute cost.
          </>,
          <>
            Designed automated workflows (Airflow-style orchestration) with retry logic, dependency
            management, and monitoring to meet defined SLAs and freshness requirements.
          </>,
          <>
            Integrated CI/CD pipelines (Git-based version control, automated deployments) to maintain
            reproducible data infrastructure.
          </>,
          <>
            Containerized services using Docker to support scalable deployment and environment
            consistency.
          </>,
          <>
            Delivered 30–40% workflow efficiency improvements through optimized data architecture and
            performance tuning.
          </>,
        ],
        images: [],
      },
      {
        company: "Monument Labs",
        companyLink: "https://www.monumentlabs.io/",
        timeframe: "May 2025 – September 2025",
        role: "Data Scientist / AI Engineer Intern",
        achievements: [
          <>
            Built and optimized ETL pipelines in Python for large-scale dataset ingestion, validation,
            and transformation supporting analytics and ML workflows.
          </>,
          <>
            Developed advanced SQL queries for data aggregation, modeling, and performance
            benchmarking.
          </>,
          <>
            Conducted query tuning and optimization to reduce compute cost by 57% while maintaining
            consistent system performance.
          </>,
          <>
            Designed data validation frameworks to ensure data quality, reliability, and schema
            consistency across systems.
          </>,
          <>
            Implemented monitoring and automated failure detection workflows to meet reliability and
            availability targets.
          </>,
          <>
            Collaborated with analysts and product teams to translate business requirements into
            scalable data solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Chevron",
        timeframe: "September 2022 – January 2025",
        role: "Process Engineer",
        achievements: [
          <>
            Designed and maintained large-scale operational data systems supporting facilities
            producing ~298,000 barrels/day and ~13 MM m³/day gas throughput.
          </>,
          <>
            Built real-time performance dashboards and reporting pipelines generating $1.2M+ annual
            value through KPI tracking and energy optimization.
          </>,
          <>
            Performed large-scale data ingestion and transformation from industrial source systems
            (relational databases including MySQL/Oracle-style systems).
          </>,
          <>
            Implemented structured data governance practices including access control, data validation,
            and standardized schema documentation.
          </>,
          <>
            Optimized complex queries and performance reporting pipelines to improve latency and
            reporting reliability.
          </>,
          <>
            Developed digital twin models (Aspen HYSYS) integrated with operational datasets to
            improve predictive analytics and troubleshooting cycles.
          </>,
          <>
            Reduced emissions by ~40 tCO₂e/year using data-driven performance monitoring and energy
            efficiency analytics.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of the Potomac – Washington, D.C.",
        description: (
          <>Master of Science in Data Analytics (Minor: Big Data Science) — January 2025 – January 2027</>
        ),
      },
      {
        name: "Budapest University of Technology and Economics",
        description: (
          <>Master of Science in Chemical Engineering — July 2022</>
        ),
      },
      {
        name: "Kazakh British Technical University",
        description: (
          <>Bachelor of Science in Mechanical Marine Engineering — July 2020</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Programming",
        description: (
          <>Python (OOP, modular design, logging, error handling), SQL (advanced), JavaScript</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Cloud & Data Platforms",
        description: (
          <>Google Cloud Platform (BigQuery, Cloud Storage, Dataform), CI/CD pipelines</>
        ),
        tags: [
          { name: "Google Cloud", icon: "googlecloud" },
        ],
        images: [],
      },
      {
        title: "Orchestration & Infrastructure",
        description: (
          <>Apache Airflow (DAG design, retries, sensors, monitoring), Docker, Git, containerized workflows</>
        ),
        tags: [
          { name: "Airflow", icon: "airflow" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
        ],
        images: [],
      },
      {
        title: "Data Engineering",
        description: (
          <>ETL/ELT, batch & streaming pipelines, data modeling, warehousing, partitioning, clustering</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>MySQL, Oracle, BigQuery</>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "Oracle", icon: "oracle" },
        ],
        images: [],
      },
      {
        title: "Monitoring & Governance",
        description: (
          <>SLA management, schema management, data validation, access control</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Analytics",
        description: (
          <>KPI dashboards, performance tuning, query optimization</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data and AI projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
