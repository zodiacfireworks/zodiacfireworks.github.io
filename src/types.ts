export interface SlideItem {
    image: string;
    title: string;
    description?: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    category: 'design' | 'photography' | 'video';
    thumbnail: string;
    fullImage?: string;
    videoUrl?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    description: string;
    social: SocialLink[];
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface NavItem {
    label: string;
    href: string;
    external?: boolean;
}
