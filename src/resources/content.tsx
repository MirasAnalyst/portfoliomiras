import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Miras",
  lastName: "Muratov",
  name: `Miras Muratov`,
  role: "Senior Product Analyst",
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
  headline: <>Senior Product Analyst</>,
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
    I'm Miras, a <Text as="span" size="xl" weight="strong">Data Scientist, AI Engineer & Product Analyst</Text> based in Fairfax, Virginia. I build scalable, cost-efficient AI solutions <br /> and drive data-informed product decisions through analytics, experimentation, and executive reporting.
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
        Washington DC area Data Scientist, AI Engineer, and founder of ScaleApp — an AI platform that
        generates industrial process flowsheets from text prompts. Experienced in LLM evaluation, ML
        systems, and Python, with prior work at Chevron and advanced analytics training through a
        Master's in Data Science. I build scalable, cost-efficient AI solutions for complex engineering
        and data challenges. I've led breakthrough AI projects at Riff and CallCompass, developing
        cutting-edge LLM evaluation frameworks, designing cost-efficient mega-prompting experiments,
        and building automated AI quality assurance workflows.
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
            Owned product analytics strategy for a SaaS AI platform, partnering with engineering and
            stakeholders to drive data-informed product decisions.
          </>,
          <>
            Defined and monitored core product KPIs (activation, engagement, retention, feature usage,
            conversion funnels) across web platform.
          </>,
          <>
            Designed and executed funnel analysis, cohort analysis, and pre-post release evaluations to
            measure feature impact and user behavior changes.
          </>,
          <>
            Implemented event tracking architecture and ensured data consistency from frontend analytics
            tools (GA-style tracking, event schemas) to BigQuery data warehouse.
          </>,
          <>
            Built executive dashboards in Looker-style environments to communicate performance metrics
            in clear, one-slide visual summaries.
          </>,
          <>
            Conducted A/B-style testing and performance benchmarking, driving 30–40% workflow
            efficiency improvement.
          </>,
          <>
            Delivered 20+ stakeholder presentations translating analytics into actionable roadmap
            decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "Monument Labs",
        companyLink: "https://www.monumentlabs.io/",
        timeframe: "May 2025 – September 2025",
        role: "Data Scientist",
        achievements: [
          <>
            Conducted deep-dive product analytics including behavioral analysis, model performance
            evaluation, and feature impact measurement.
          </>,
          <>
            Designed controlled experiments (A/B-style testing and pre-post analysis), achieving 57%
            cost reduction while maintaining performance quality (8/10).
          </>,
          <>
            Improved classification accuracy by 10% through structured performance benchmarking and
            regression diagnostics.
          </>,
          <>
            Built SQL-based analytical queries to extract behavioral and product usage data from data
            warehouse systems.
          </>,
          <>
            Investigated discrepancies in evaluation metrics and ensured metric integrity and
            consistency across tracking systems.
          </>,
          <>
            Delivered structured, executive-ready analytical summaries influencing product and model
            selection decisions.
          </>,
        ],
        images: [],
      },
      {
        company: "Chevron",
        timeframe: "September 2022 – January 2025",
        role: "Data Analyst",
        achievements: [
          <>
            Partnered with operations leadership to define, track, and analyze core KPIs across
            large-scale energy production systems (~298,000 barrels/day; ~13 MM m³/day gas).
          </>,
          <>
            Designed and maintained interactive dashboards and automated reports (Excel, SQL-based
            datasets) that generated $1.2M+ annual value through data-driven performance optimization.
          </>,
          <>
            Performed deep-dive analysis, root-cause investigations, and trend analysis to identify
            operational inefficiencies, contributing to +544 kbbl cumulative production increase.
          </>,
          <>
            Conducted pre-post performance analysis to evaluate process improvements and quantify
            business impact.
          </>,
          <>
            Ensured data integrity through validation checks, structured data cleaning, and
            standardized reporting processes across large operational datasets.
          </>,
          <>
            Presented executive-ready summaries translating complex analytical findings into clear,
            actionable business recommendations.
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
        title: "Analytics & Product",
        description: (
          <>Funnel analysis, retention analysis, cohort analysis, A/B testing, pre-post analysis, customer journey mapping, attribution modeling</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "SQL & DWH",
        description: (
          <>Advanced SQL, BigQuery, data modeling, performance optimization</>
        ),
        tags: [
          { name: "BigQuery", icon: "googlecloud" },
        ],
        images: [],
      },
      {
        title: "Tracking & Measurement",
        description: (
          <>GA4, Amplitude, GTM (event tracking, validation, schema governance)</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Dashboarding",
        description: (
          <>Looker Studio, Tableau-style executive dashboards</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Programming",
        description: (
          <>Python (analysis, modeling), SQL</>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Experimentation",
        description: (
          <>Hypothesis testing, regression analysis, statistical diagnostics</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Business Impact",
        description: (
          <>KPI ownership, executive reporting, metric storytelling</>
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
