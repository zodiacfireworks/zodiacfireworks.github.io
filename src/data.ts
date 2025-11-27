import type { SlideItem, PortfolioItem, TeamMember, NavItem } from './types';

export const slides: SlideItem[] = [
    {
        image: '/brushed/template/_include/img/slider-images/image01.jpg',
        title: 'Martin Vuelta',
        description: 'Software Developer & Designer',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image02.jpg',
        title: 'Full Stack Development',
        description: 'Building modern web applications',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image03.jpg',
        title: 'Creative Solutions',
        description: 'Turning ideas into reality',
    },
    {
        image: '/brushed/template/_include/img/slider-images/image04.jpg',
        title: 'Open Source',
        description: 'Contributing to the community',
    },
];

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

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Martin Vuelta',
        role: 'CTO/Founder',
        image: '/brushed/template/_include/img/profile/profile-01.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.',
        social: [
            { platform: 'Twitter', url: '#', icon: 'twitter' },
            { platform: 'Dribbble', url: '#', icon: 'dribbble' },
            { platform: 'Facebook', url: '#', icon: 'facebook' },
        ],
    },
    {
        id: '2',
        name: 'Jane Helf',
        role: 'Creative Director',
        image: '/brushed/template/_include/img/profile/profile-02.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.',
        social: [
            { platform: 'Twitter', url: '#', icon: 'twitter' },
        ],
    },
    {
        id: '3',
        name: 'Joshua Insanus',
        role: 'Lead Designer',
        image: '/brushed/template/_include/img/profile/profile-03.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.',
        social: [
            { platform: 'Twitter', url: '#', icon: 'twitter' },
            { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
        ],
    },
];

export const navItems: NavItem[] = [
    { label: 'Home', href: '#home-slider' },
    { label: 'Our Work', href: '#work' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
];
