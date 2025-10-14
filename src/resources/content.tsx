import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kent",
  lastName: "Salcedo",
  name: `Kent Salcedo`,
  role: "Fractional CTO & Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ksalcedo.dev@gmail.com",
  location: "US/Hawaii", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kentsalcedo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kentsalcedo/",
  },
  {
    name: "X",
    icon: "twitter",
    link: "https://x.com/kentsalcedo",
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
  title: `Kent Salcedo | CTO, Full-Stack Dad, Content Creator, Entreprenuer, Addicted to startups, Tech Leader, and AI Workflow Engineer`,
  description: `Personal site of Kent Salcedo — Honolulu-based CTO, Full-Stack Developer, AI Workflow Engineer, and 'Full-Stack Dad'. Discover stories, projects, and insights on AI automation, software, and local innovation.`,
  headline: (
    <>
      Fractional CTO <br />
      Builder of Things <br />
      AI Workflow Engineer <br />
      Full-Stack Dad
    </>
  ),
  featured: {
    display: false,
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
      I’m Kent Salcedo. Fractional CTO, software engineer, chaos manager,
      abiguity wrangler, speaker, and full‑stack dad among other things. 
      <br />
      <br />
      Lately, I've been building AI‑driven systems and workflow automations that
      help businesses get more done and help parents sneak in a nap (don't we
      all just need a nap sometimes).
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Honolulu, Hawaii`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kent-salcedo-yxw2o7",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
I’m a full-stack developer and startup technologist who’s spent nearly a decade turning ambitious ideas into real-world products. From building augmented-reality retail experiences to Hawaiian language learning apps and enterprise-scale systems for HP Enterprise and NOAA, I’ve helped organizations of all sizes go from zero to one — and then scale with grace. I lead with curiosity, mentorship, and a deep respect for craft, whether I’m guiding a team through product chaos or brewing the perfect cup of coffee between commits. Based in Honolulu, I bring the same mix of pragmatism and play to every project; building things that work, matter, and (hopefully) make people smile.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "/ gidens /",
        timeframe: "Aug 2024 - Present",
        role: "CTO and Founding Engineer",
        achievements: [
          <>
            /'gīdens/ ("Guidance"), for small business owners who struggle keeping up with daily operations, our AI-Enabled Advisory platform helps save time, make smarter decisions and maximize growth by unlocking the resources exclusive to the world's top investors, entrepreneurs and startups
          </>,
          <>
            Spearheaded the architecture of the platform, including the backend, frontend, and AI services.
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
        company: "SingleOps",
        timeframe: "2022 - 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Lead the conversion of the platform to a modern scalable architecture.
          </>,
          <>
            Establish the internal component library and design system.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: (
      //     <>Able to prototype in Figma with Once UI with unnatural speed.</>
      //   ),
      //   tags: [
      //     {
      //       name: "Figma",
      //       icon: "figma",
      //     },
      //   ],
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
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
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
