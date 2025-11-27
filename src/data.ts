import type { SlideItem, PortfolioItem, TeamMember, NavItem } from './types';

// Skill categories for Skills section
export interface Skill {
    name: string;
    level?: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

// Experience items for Experience section
export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements?: string[];
    technologies?: string[];
}

// About data
export interface AboutData {
    name: string;
    role: string;
    image: string;
    bio: string;
    highlights?: string[];
    social: { platform: string; url: string; icon: string }[];
}

export const slides: SlideItem[] = [
    {
        image: '/brushed/template/_include/img/slider-images/image01.jpg',
        title: 'Martin Vuelta',
        description: 'Software Engineer & Full Stack Developer',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image02.jpg',
        title: 'Building Digital Solutions',
        description: 'Transforming ideas into scalable applications',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image03.jpg',
        title: 'Open Source Enthusiast',
        description: 'Contributing to the developer community',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image04.jpg',
        title: 'Innovation & Excellence',
        description: 'Crafting elegant solutions to complex problems',
    },
];

export const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'JavaScript/TypeScript', level: 90 },
            { name: 'Java', level: 80 },
            { name: 'C/C++', level: 75 },
            { name: 'SQL', level: 85 },
        ],
    },
    {
        title: 'Web Technologies',
        skills: [
            { name: 'React/Next.js', level: 90 },
            { name: 'Node.js', level: 85 },
            { name: 'Astro', level: 88 },
            { name: 'HTML/CSS', level: 95 },
            { name: 'Tailwind CSS', level: 92 },
        ],
    },
    {
        title: 'Backend & DevOps',
        skills: [
            { name: 'Docker/Kubernetes', level: 85 },
            { name: 'CI/CD Pipelines', level: 88 },
            { name: 'AWS/Cloud Services', level: 80 },
            { name: 'Git/GitLab/GitHub', level: 95 },
            { name: 'Linux/Unix', level: 90 },
        ],
    },
    {
        title: 'Data & AI',
        skills: [
            { name: 'Machine Learning', level: 82 },
            { name: 'Data Analysis', level: 85 },
            { name: 'NumPy/Pandas', level: 88 },
            { name: 'TensorFlow/PyTorch', level: 78 },
        ],
    },
];

export const experiences: ExperienceItem[] = [
    {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'Tech Innovation Corp',
        location: 'Remote',
        period: '2021 - Present',
        description: 'Leading development of cloud-based solutions and mentoring junior developers in best practices and modern development workflows.',
        achievements: [
            'Architected and deployed microservices infrastructure serving 100K+ users',
            'Reduced deployment time by 60% through CI/CD pipeline optimization',
            'Led team of 5 developers in agile environment',
            'Implemented automated testing increasing code coverage to 90%',
        ],
        technologies: ['Python', 'React', 'Docker', 'Kubernetes', 'AWS', 'PostgreSQL'],
    },
    {
        id: '2',
        title: 'Full Stack Developer',
        company: 'Digital Solutions Inc',
        location: 'Hybrid',
        period: '2019 - 2021',
        description: 'Developed and maintained full-stack web applications using modern frameworks and technologies.',
        achievements: [
            'Built responsive web applications with React and Node.js',
            'Improved application performance by 40% through optimization',
            'Collaborated with UX designers to implement intuitive interfaces',
            'Contributed to open-source projects and internal tooling',
        ],
        technologies: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Express', 'Git'],
    },
    {
        id: '3',
        title: 'Software Developer',
        company: 'StartupX',
        location: 'On-site',
        period: '2017 - 2019',
        description: 'Worked on developing core product features and maintaining legacy systems while transitioning to modern stack.',
        achievements: [
            'Migrated legacy monolithic application to microservices architecture',
            'Implemented RESTful APIs consumed by mobile and web clients',
            'Reduced bug reports by 50% through comprehensive testing',
            'Mentored interns and junior developers',
        ],
        technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Docker'],
    },
];

export const aboutData: AboutData = {
    name: 'Martin Vuelta',
    role: 'Software Engineer & Full Stack Developer',
    image: '/brushed/template/_include/img/profile/profile-01.jpg',
    bio: 'Passionate software engineer with expertise in building scalable web applications and cloud-native solutions. I love solving complex problems through elegant code and contributing to open-source projects. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences backed by robust, efficient systems. When I\'m not coding, you\'ll find me exploring new technologies, contributing to the developer community, or working on personal projects that push the boundaries of what\'s possible.',
    highlights: [
        '5+ years of professional development experience',
        'Open source contributor on GitHub & GitLab',
        'Specialized in cloud-native architectures',
        'Passionate about clean code and best practices',
        'Active in developer communities and tech forums',
        'Continuous learner and technology enthusiast',
    ],
    social: [
        { platform: 'Twitter', url: 'https://twitter.com/zodiacfireworks', icon: 'twitter' },
        { platform: 'GitHub', url: 'https://github.com/zodiacfireworks', icon: 'github' },
        { platform: 'GitLab', url: 'https://gitlab.com/zodiacfireworks', icon: 'gitlab' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/zodiacfireworks', icon: 'linkedin' },
    ],
};

export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
        category: 'web-app',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-01.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-01-full.jpg',
    },
    {
        id: '2',
        title: 'Data Visualization Library',
        description: 'Open-source JavaScript library for creating interactive charts and graphs. Built with D3.js and TypeScript, with focus on performance and customization.',
        category: 'library',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-02.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-02-full.jpg',
    },
    {
        id: '3',
        title: 'DevOps Automation Tool',
        description: 'CLI tool for automating deployment workflows. Supports Docker, Kubernetes, and multiple cloud providers. Written in Python with extensive plugin system.',
        category: 'tool',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-03.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-03-full.jpg',
    },
    {
        id: '4',
        title: 'RESTful API Gateway',
        description: 'Microservices API gateway with authentication, rate limiting, and request routing. Built with Node.js and Redis for high-performance caching.',
        category: 'api',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-08.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-08-full.jpg',
    },
    {
        id: '5',
        title: 'Real-Time Chat Application',
        description: 'WebSocket-based chat app with React frontend and Node.js backend. Features include private messaging, group chats, file sharing, and user presence.',
        category: 'web-app',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-04.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-04-full.jpg',
    },
    {
        id: '6',
        title: 'Machine Learning Framework',
        description: 'Python library for building and training neural networks. Simplifies common ML workflows with high-level API while maintaining flexibility.',
        category: 'library',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-05.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-05-full.jpg',
    },
    {
        id: '7',
        title: 'Code Quality Analyzer',
        description: 'Static analysis tool for detecting code smells and security vulnerabilities. Supports multiple languages and integrates with CI/CD pipelines.',
        category: 'tool',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-09.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-09-full.jpg',
    },
    {
        id: '8',
        title: 'Portfolio Management Dashboard',
        description: 'Financial tracking application with interactive charts, portfolio analysis, and real-time market data integration. Built with Next.js and TailwindCSS.',
        category: 'web-app',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-06.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-06-full.jpg',
    },
    {
        id: '9',
        title: 'GraphQL API Server',
        description: 'Type-safe GraphQL server with Apollo, TypeScript, and Prisma ORM. Includes authentication, subscriptions, and comprehensive testing suite.',
        category: 'api',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-07.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-07-full.jpg',
    },
];

export const navItems: NavItem[] = [
    { label: 'Home', href: '#home-slider' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];
