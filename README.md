# Martin Vuelta Portfolio - Astro Version

This is a modern conversion of the Brushed template using Astro.js, TypeScript, and Tailwind CSS.

## Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── HeroSlider.astro
│   │   ├── Portfolio.astro
│   │   └── Social.astro
│   ├── layouts/         # Layout templates
│   │   └── MainLayout.astro
│   ├── pages/           # Page routes
│   │   └── index.astro
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── data.ts          # Content data (slides, portfolio, team)
│   └── types.ts         # TypeScript type definitions
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Features

- ✅ **Modern Framework**: Built with Astro.js for optimal performance
- ✅ **TypeScript**: Full type safety throughout the codebase
- ✅ **Tailwind CSS**: Utility-first CSS framework for rapid styling
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Component-Based**: Modular, reusable components
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **Accessible**: ARIA labels and keyboard navigation
- ✅ **Performance**: Optimized images and code splitting

## Components

### HeroSlider
Full-screen image slider with auto-advance, keyboard navigation, and smooth transitions.

### Portfolio
Filterable portfolio grid with categories (design, photography, video) and lightbox functionality.

### About
Team member showcase with profile images, descriptions, and social links.

### Contact
Contact form with validation and success/error messaging.

### Social
Social media links with hover effects.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Update Content

Edit `src/data.ts` to update:
- Slider images and text
- Portfolio items
- Team members
- Navigation items

### Modify Styles

- **Colors**: Update `tailwind.config.mjs` theme colors
- **Fonts**: Change Google Fonts link in `MainLayout.astro`
- **Custom CSS**: Add to `src/styles/global.css`

### Add New Pages

Create new `.astro` files in `src/pages/` directory.

## Images

Place images in the `public/` directory. The current setup references images from the original template at `/brushed/template/_include/img/`.

To use your own images:
1. Place images in `public/images/`
2. Update paths in `src/data.ts`

## Deployment

The site is configured for static deployment. Build output goes to `dist/` directory.

### GitHub Pages

```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## Original Template

This project is a modernization of the Brushed template by Alessio Atzeni. The original jQuery/Bootstrap template has been converted to use:
- Astro.js instead of plain HTML
- TypeScript for type safety
- Tailwind CSS instead of custom CSS
- Modern JavaScript instead of jQuery
- Component-based architecture

## License

See LICENSE file for details.
