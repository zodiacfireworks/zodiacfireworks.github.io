# Martin Vuelta (zodiacfireworks) Personal Website Context

## Project Overview

**zodiacfireworks website** (`martin.vuelta.me`) is a modern web application built to showcase and document experience, skills and carreer of Martin Vuelta zodiacfireworks.

**Key Technologies:**

- **Language:** TypeScript, HTML, CSS
- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Dependency Manager:** pnpm
- **Linting/Formatting:** ESLint, Prettier, Stylelint, Markdownlint
- **Versioning:** commitizen, semantic-release

## Directory Structure

- `src/`: Main source code for the portal.
    - `components/`: Astro components for UI elements (Hero, Footer, Headers).
    - `content/projects/`: Markdown collections for open-source project entries.
    - `layouts/`: Astro layouts defining the core document structure.
    - `pages/`: Astro routing pages.
    - `styles/`: Global CSS and Tailwind configurations.
    - `i18n/`: Internationalization configurations and translation dictionaries.
- `public/`: Static assets (images, icons) served directly.
- `package.json`: Project metadata and `pnpm` scripts.

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (v8+)
- Git

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://gitlab.com/softbutterfly/softbutterfly.gitlab.io.git
    cd softbutterfly.gitlab.io
    ```

1. **Install dependencies:**

    ```bash
    pnpm install
    ```

## Development Workflow

### Running the Development Server

Start the local Astro server:

```bash
pnpm run dev
```

### Code Style & Quality

The project uses multiple linters to maintain high code quality:

- **JS/TS/Astro:** `eslint`, `prettier`
- **CSS:** `stylelint`
- **Markdown:** `markdownlint`

Run formatting and linting:

```bash
pnpm run format
pnpm run lint
```

### Adding New Projects

To add a new project, create a new Markdown file in `src/content/projects/` following the existing frontmatter schema (title, description, language, category, repoLink).
