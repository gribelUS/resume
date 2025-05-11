import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Tiago",
  lastName: "Breunig",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Engineer",
  avatar: "/images/avatar.jpg",
  email: "tiagobreunig2@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gribelUS",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tiago-carlos-breunig/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between hardware and software</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Tiago, a computer engineering and computer science student at West Virginia University and a technology enthusiast.
    </>
  ),
};

const about = {
  path: "/about",
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
    display: true,
    link: "https://cal.com/tiago-breunig-snfxur",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a computer engineering and computer science student at West Virginia University with a 
        passion for projects that can solve real-world problems. The goal my personal projects is to
        deepen my knwledge in the bridge between software and hardware to create innovative solutions
        both in the dosmetic and industrial fields.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Supermercado Breunig",
        timeframe: "2019 - 2022",
        role: "IT Support",
        achievements: [
          <>
            Diagnosed and resolved hardware and software issues.
          </>,
          <>
            Guided users with technical issues and troubleshooting.
          </>,
          <>
            Provided step-by-step guides and remote support for users.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Marmoraria Santa Cruz",
        timeframe: "June 2023 - August 2023",
        role: "Freelancer IT Technician",
        achievements: [
          <>
            Assisted in the assembly and installation of a CNC machine for stone engraving
            that allowed for automization of the engraving process and increased production
            efficiency.
          </>,
          <>
            Trained employees on the use of the machines software, conversion, and adjustment
            of client provided files to the machine's requirements.
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
        name: "West Virginia University",
        description: <>Bachelor of Science (BS) in Computer Engineering, Bachelor of Science in Computer Science </>,
        timeframe: "2022 - Present",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python, JavaScript, SQL",
        description: <>Able to integrate database structures into interactive applications
                       using Python and JavaScript.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "C, VHDL, Verilog",
        description: <>Proficient in low-level C programming and hardware descriptive
                       languages for embedded devices in automation and control applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "FPGA, Microcontrollers, UART, PLCs",
        description: <>Hands-on experience designing digital logic on FPGA boards, implementing UART communication protocols, and developing ladder logic for PLC-based automation systems.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
