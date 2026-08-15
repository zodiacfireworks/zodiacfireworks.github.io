import type { SlideItem, PortfolioItem, NavItem } from "./types"

// Skill categories for Skills section
export interface Skill {
    name: string
    level?: number // 0-100
    icon?: string
}

export interface SkillCategory {
    title: string
    skills: Skill[]
}

// Experience items for Experience section
export interface ExperienceItem {
    id: string
    title: string
    company: string
    location: string
    period: string
    description: string
    achievements?: string[]
    technologies?: string[]
}

// About data
export interface AboutData {
    name: string
    role: string
    image: string
    bio: string
    highlights?: string[]
    social: { platform: string; url: string; icon: string }[]
}

export const slides: SlideItem[] = [
    {
        image: "/images/home-slider/slide-1.png",
        title: "Martin Vuelta",
        description: "Software Engineer & Full Stack Developer"
    },
    {
        image: "/_placeholders/slider-images/image02.jpg",
        title: "Building Digital Solutions",
        description: "Transforming ideas into scalable applications"
    },
    {
        image: "/_placeholders/slider-images/image03.jpg",
        title: "Open Source Enthusiast",
        description: "Contributing to the developer community"
    },
    {
        image: "/_placeholders/slider-images/image04.jpg",
        title: "Innovation & Excellence",
        description: "Crafting elegant solutions to complex problems"
    }
]

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", level: 95 },
            { name: "JavaScript/TypeScript", level: 90 },
            { name: "Java", level: 80 },
            { name: "C/C++", level: 75 },
            { name: "SQL", level: 85 }
        ]
    },
    {
        title: "Web Technologies",
        skills: [
            { name: "React/Next.js", level: 90 },
            { name: "Node.js", level: 85 },
            { name: "Astro", level: 88 },
            { name: "HTML/CSS", level: 95 },
            { name: "Tailwind CSS", level: 92 }
        ]
    },
    {
        title: "Backend & DevOps",
        skills: [
            { name: "Docker/Kubernetes", level: 85 },
            { name: "CI/CD Pipelines", level: 88 },
            { name: "AWS/Cloud Services", level: 80 },
            { name: "Git/GitLab/GitHub", level: 95 },
            { name: "Linux/Unix", level: 90 }
        ]
    },
    {
        title: "Data & AI",
        skills: [
            { name: "Machine Learning", level: 82 },
            { name: "Data Analysis", level: 85 },
            { name: "NumPy/Pandas", level: 88 },
            { name: "TensorFlow/PyTorch", level: 78 }
        ]
    }
]

export const experiences: ExperienceItem[] = [
    {
        id: "1",
        title: "Senior Software Engineer",
        company: "Tech Innovation Corp",
        location: "Remote",
        period: "2021 - Present",
        description:
            "Leading development of cloud-based solutions and mentoring junior developers in best practices and modern development workflows.",
        achievements: [
            "Architected and deployed microservices infrastructure serving 100K+ users",
            "Reduced deployment time by 60% through CI/CD pipeline optimization",
            "Led team of 5 developers in agile environment",
            "Implemented automated testing increasing code coverage to 90%"
        ],
        technologies: ["Python", "React", "Docker", "Kubernetes", "AWS", "PostgreSQL"]
    },
    {
        id: "2",
        title: "Full Stack Developer",
        company: "Digital Solutions Inc",
        location: "Hybrid",
        period: "2019 - 2021",
        description: "Developed and maintained full-stack web applications using modern frameworks and technologies.",
        achievements: [
            "Built responsive web applications with React and Node.js",
            "Improved application performance by 40% through optimization",
            "Collaborated with UX designers to implement intuitive interfaces",
            "Contributed to open-source projects and internal tooling"
        ],
        technologies: ["JavaScript", "Node.js", "React", "MongoDB", "Express", "Git"]
    },
    {
        id: "3",
        title: "Software Developer",
        company: "StartupX",
        location: "On-site",
        period: "2017 - 2019",
        description:
            "Worked on developing core product features and maintaining legacy systems while transitioning to modern stack.",
        achievements: [
            "Migrated legacy monolithic application to microservices architecture",
            "Implemented RESTful APIs consumed by mobile and web clients",
            "Reduced bug reports by 50% through comprehensive testing",
            "Mentored interns and junior developers"
        ],
        technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "Docker"]
    }
]

export const aboutData: AboutData = {
    name: "Martin Vuelta",
    role: "Software Engineer & Full Stack Developer",
    image: "/images/about/portrait.png",
    bio: "Passionate software engineer with expertise in building scalable web applications and cloud-native solutions. I love solving complex problems through elegant code and contributing to open-source projects. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences backed by robust, efficient systems. When I'm not coding, you'll find me exploring new technologies, contributing to the developer community, or working on personal projects that push the boundaries of what's possible.",
    highlights: [
        "5+ years of professional development experience",
        "Open source contributor on GitHub & GitLab",
        "Specialized in cloud-native architectures",
        "Passionate about clean code and best practices",
        "Active in developer communities and tech forums",
        "Continuous learner and technology enthusiast"
    ],
    social: [
        { platform: "Twitter", url: "https://twitter.com/zodiacfireworks", icon: "twitter" },
        { platform: "GitHub", url: "https://github.com/zodiacfireworks", icon: "github" },
        { platform: "GitLab", url: "https://gitlab.com/zodiacfireworks", icon: "gitlab" },
        { platform: "LinkedIn", url: "https://linkedin.com/in/zodiacfireworks", icon: "linkedin" }
    ]
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: "1",
        title: "Arduino Serial Monitor",
        description:
            "Graphical user interface for real-time monitoring of sensor signals interfaced with Arduino. Built with Python and C++, featuring live data visualization and chart plotting. ⭐ 9 stars",
        category: "tool",
        thumbnail: "/_placeholders/work/thumbs/image-01.jpg",
        fullImage: "/_placeholders/work/full/image-01-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/arduino-serial-monitor"
    },
    {
        id: "2",
        title: "VS Code C/AL Extension",
        description:
            "Visual Studio Code extension providing Dynamics NAV C/AL programming language support with syntax highlighting, IntelliSense, and code snippets. ⭐ 15 stars",
        category: "tool",
        thumbnail: "/_placeholders/work/thumbs/image-02.jpg",
        fullImage: "/_placeholders/work/full/image-02-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/vscode-c-al"
    },
    {
        id: "3",
        title: "Quantum Harmonic Oscillator",
        description:
            "Interactive Jupyter Notebook series exploring Quantum Harmonic Oscillator theory with Python implementations and visualizations. Educational resource combining physics and programming. ⭐ 7 stars",
        category: "library",
        thumbnail: "/_placeholders/work/thumbs/image-03.jpg",
        fullImage: "/_placeholders/work/full/image-03-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/quantum-harmonic-oscillator"
    },
    {
        id: "4",
        title: "Meteorological Faker API",
        description:
            "Flask-based toy server demonstrating API development and AJAX requests. Generates fake meteorological data for learning purposes, perfect for teaching web development concepts.",
        category: "api",
        thumbnail: "/_placeholders/work/thumbs/image-08.jpg",
        fullImage: "/_placeholders/work/full/image-08-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/meteorological-faker"
    },
    {
        id: "5",
        title: "Portfolio Website",
        description:
            "Modern personal portfolio built with Astro, TypeScript, and Tailwind CSS. Features responsive design, dark mode, smooth animations, and component-based architecture. Open source on GitHub.",
        category: "web-app",
        thumbnail: "/_placeholders/work/thumbs/image-04.jpg",
        fullImage: "/_placeholders/work/full/image-04-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/zodiacfireworks.github.io"
    },
    {
        id: "6",
        title: "Pyker - Poker Game",
        description:
            "Pure Python implementation of a poker game with command-line interface. Demonstrates object-oriented programming principles and game logic implementation. ⭐ 4 stars",
        category: "tool",
        thumbnail: "/_placeholders/work/thumbs/image-05.jpg",
        fullImage: "/_placeholders/work/full/image-05-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/pyker"
    },
    {
        id: "7",
        title: "WeatherLab Extension",
        description:
            "JupyterLab extension for checking weather conditions directly within the notebook environment. Integrates weather APIs with Jupyter workflows for data science applications.",
        category: "tool",
        thumbnail: "/_placeholders/work/thumbs/image-09.jpg",
        fullImage: "/_placeholders/work/full/image-09-full.jpg",
        videoUrl: "https://gitlab.com/zodiacfireworks/weatherlab"
    },
    {
        id: "8",
        title: "Fortran Programming Course",
        description:
            "Comprehensive teaching materials for Fortran programming courses. Includes lectures, exercises, and examples covering modern Fortran features and scientific computing. ⭐ 3 stars",
        category: "library",
        thumbnail: "/_placeholders/work/thumbs/image-06.jpg",
        fullImage: "/_placeholders/work/full/image-06-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/course--fortran"
    },
    {
        id: "9",
        title: "Resume in LaTeX",
        description:
            "Professional resume/CV built with LaTeX using Awesome CV template. Version-controlled, easily maintainable, and generates beautiful PDF output. Available on GitHub and GitLab. ⭐ 3 stars",
        category: "tool",
        thumbnail: "/_placeholders/work/thumbs/image-07.jpg",
        fullImage: "/_placeholders/work/full/image-07-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/resume"
    },
    {
        id: "10",
        title: "Cellular Automata Workshop",
        description:
            "Interactive Jupyter notebooks providing an informal introduction to Cellular Automata theory and implementation. Developed for Code Day 2017 educational workshop. ⭐ 3 stars",
        category: "library",
        thumbnail: "/_placeholders/work/thumbs/image-01.jpg",
        fullImage: "/_placeholders/work/full/image-01-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/code-day-2017--cellular-automata"
    },
    {
        id: "11",
        title: "HPC with Python Workshop",
        description:
            'Teaching materials for "Introduction to High Performance Computing with Python" workshop. Covers parallel processing, optimization techniques, and scientific computing libraries.',
        category: "library",
        thumbnail: "/_placeholders/work/thumbs/image-02.jpg",
        fullImage: "/_placeholders/work/full/image-02-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/talk--introduction-to-hpc-with-python"
    },
    {
        id: "12",
        title: "Qiskit VQE Benchmarking",
        description:
            "Quantum computing project testing Variational Quantum Eigensolver (VQE) with various configurations using IBM Qiskit framework. Explores quantum algorithms for optimization problems.",
        category: "library",
        thumbnail: "/_placeholders/work/thumbs/image-03.jpg",
        fullImage: "/_placeholders/work/full/image-03-full.jpg",
        videoUrl: "https://github.com/zodiacfireworks/qiskit-vqe-benchmarcking"
    }
]

export const navItems: NavItem[] = [
    { label: "Home", href: "#home-slider" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
]
