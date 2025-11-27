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
        title: 'The City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'design',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-01.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-01-full.jpg',
    },
    {
        id: '2',
        title: 'The Office',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'design',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-02.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-02-full.jpg',
    },
    {
        id: '3',
        title: 'The Mountains',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'photography',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-03.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-03-full.jpg',
    },
    {
        id: '4',
        title: 'Video Content',
        description: 'Video showcase from Vimeo',
        category: 'video',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-08.jpg',
        videoUrl: 'http://vimeo.com/51460511',
    },
    {
        id: '5',
        title: 'The Sea',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'photography',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-04.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-04-full.jpg',
    },
    {
        id: '6',
        title: 'Clouds',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'photography',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-05.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-05-full.jpg',
    },
    {
        id: '7',
        title: 'Video Showcase',
        description: 'Video content from Vimeo',
        category: 'video',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-09.jpg',
        videoUrl: 'http://vimeo.com/50834315',
    },
    {
        id: '8',
        title: 'The Dark',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'design',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-06.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-06-full.jpg',
    },
    {
        id: '9',
        title: 'The Beach',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum odio.',
        category: 'design',
        thumbnail: '/brushed/template/_include/img/work/thumbs/image-07.jpg',
        fullImage: '/brushed/template/_include/img/work/full/image-07-full.jpg',
    },
];

export const navItems: NavItem[] = [
    { label: 'Home', href: '#home-slider' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portfolio', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];
