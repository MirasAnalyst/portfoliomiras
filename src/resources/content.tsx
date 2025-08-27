import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Miras",
  lastName: "Muratov",
  name: `Miras Muratov`,
  role: "Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "mirasmuratov1998@gmail.com",
  location: "America/New_York", // IANA time zone identifier for Washington DC, USA
  displayLocation: "Washington DC, USA", // Display location for UI
  languages: ["English", "Kazakh", "Russian", "Turkish"], // Languages will wrap automatically to next line
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MirasAnalyst",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/miras-muratov-7535741b3/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Revolutionizing Engineering between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/",
  label: "About",
  title: `${person.name}'s Portfolio`,
  description: `Meet ${person.name}, ${person.role} from Washington DC`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Fairfax, Virginia–based data scientist and engineer who builds AI-powered analytics and evaluation systems. 
        With a background in data analytics at Chevron and a master’s in data analytics, 
        I’ve worked on projects at Riff and CallCompass developing LLM evaluation frameworks, designing mega-prompting experiments, 
        and building automated inconsistency-detection workflows on real user data. I believe in rigorous experimentation, rapid iteration, and using data science to make products more efficient, fair, and reliable
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Tidewater Research",
        timeframe: "2025 - Present",
        role: "Data Scientist",
        link: "https://www.tidewaterresearch.com",
        achievements: [
          <>
            Designed and executed LLM evaluation experiments for <a href="https://www.riffinsights.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>Riff</a> using Python and JavaScript, demonstrating that 6–7 extraction tasks can be combined in a single mega-prompt instead of multiple individual calls, achieving 57% cost savings while maintaining the same 8/10 quality score.
          </>,
          <>
            Compared GPT-4o vs. GPT-5 in <a href="https://www.callcompass.io" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>CallCompass</a> for classification and evaluation with real sample data, identifying that GPT-4o delivered 10% higher accuracy with results ~25% cheaper, making it the more cost-efficient and reliable choice for production use.
          </>,
          <>
            Built automated inconsistency-detection workflows, surfacing patterns in rubric misapplication and enabling data-driven improvements to QA evaluation criteria, with a 3% inconsistency rate across real user data in <a href="https://www.callcompass.io" target="_blank" rel="noopener noreferrer" style={{ color: '#3B82F6', textDecoration: 'underline' }}>CallCompass</a>.
          </>,
          <>
            Delivered pattern analysis, improvement areas, and actionable recommendations that informed model selection, cost optimization, and call evaluation reliability for production use.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Chevron",
        timeframe: "2022 - 2025",
        role: "Data Analyst",
        achievements: [
          <>
            As a Product Owner, I defined technical requirements and successfully led the launch of web-based Flare and Fuel Gas
            dashboards (cost ~1.2M USD) for an oil plant producing ~298,000 barrels of oil and ~13 million m³ of sales gas daily—ensuring
            user-centric UI/UX design, seamless cross-team collaboration, and alignment with operational and compliance goals.
          </>,
          <>
            Conducted over 15 User Acceptance Tests (UAT), identifying and resolving 50+ bugs. Collaborated with software developers and
            UX designers to enhance user workflows, optimize interface responsiveness, and ensure seamless user interaction.
          </>,
          <>
            Contributed to the creation of a Digital Twin for an oil plant by integrating live process data into Aspen HYSYS and
            developing Python-based UI modules for interactive parameter tracking and simulation feedback.
          </>,
          <>
            Conducted audits and streamlined Excel-based daily gas balances, monthly composition reports, and quarterly greenhouse gas
            emission reports—reducing processing time by 30% using Macros, Python automation, and SQL. Helped reformat templates to
            improve UX for engineering and compliance teams.
          </>,
        ],
        images: [],
      },
      {
        company: "Makini",
        timeframe: "2021 - 2022",
        role: "Quality Assurance Engineer",
        achievements: [
          <>
            Developed and maintained structured test data repositories, ensuring efficient data validation, retrieval, and
            management using SQL for automated testing in software quality assurance.
          </>,
          <>
            Extracted, processed, and validated test data from multiple sources, integrating it into test automation frameworks
            using Power BI, Pivot Tables in Microsoft Excel, and Python (pandas, NumPy) for data-driven testing and reporting.
          </>,
          <>
            Automated data extraction and validation processes using Python scripts, improving test efficiency and ensuring data
            accuracy for Computer-Based Maintenance Systems (CBMS).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of the Potomac",
        description: <>Master’s degree in Data Science</>,
      },
      {
        name: "Budapest University of Technology and Economics",
        description: <>Master’s degree in Chemical Engineering</>,
      },
      {
        name: "Kazakh British Technical University",
        description: <>Marine engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

export { person, social, newsletter, home, about };
