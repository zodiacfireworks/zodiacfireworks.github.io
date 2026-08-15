import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const DATA_DIR = path.resolve('./src/data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

async function fetchGitHubProjects() {
    console.log('Fetching GitHub projects...');
    const response = await fetch('https://api.github.com/users/zodiacfireworks/repos?per_page=100');
    if (!response.ok) return [];
    const repos = await response.json();
    return repos.map(repo => ({
        platform: 'GitHub',
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language
    }));
}

async function fetchGitLabProjects() {
    console.log('Fetching GitLab projects...');
    const response = await fetch('https://gitlab.com/api/v4/users/zodiacfireworks/projects');
    if (!response.ok) return [];
    const repos = await response.json();
    return repos.map(repo => ({
        platform: 'GitLab',
        name: repo.name,
        description: repo.description,
        url: repo.web_url,
        stars: repo.star_count,
        language: null
    }));
}

async function fetchNpmProjects() {
    console.log('Fetching NPM projects...');
    const response = await fetch('https://registry.npmjs.org/-/v1/search?text=maintainer:zodiacfireworks');
    if (!response.ok) return [];
    const data = await response.json();
    return data.objects.map(obj => ({
        platform: 'NPM',
        name: obj.package.name,
        description: obj.package.description,
        url: obj.package.links.npm,
        version: obj.package.version
    }));
}

async function fetchPyPiProjects() {
    console.log('Fetching PyPI projects...');
    try {
        const response = await fetch('https://pypi.org/user/zodiacfireworks/');
        const html = await response.text();
        const $ = cheerio.load(html);
        const projects = [];
        $('.package-snippet').each((i, el) => {
            const name = $(el).find('.package-snippet__name').text().trim();
            const description = $(el).find('.package-snippet__description').text().trim();
            const url = 'https://pypi.org' + $(el).attr('href');
            projects.push({
                platform: 'PyPI',
                name,
                description,
                url
            });
        });
        return projects;
    } catch (e) {
        console.error('Failed to fetch PyPI:', e);
        return [];
    }
}

async function fetchMathWorksProjects() {
    console.log('Fetching MathWorks projects...');
    try {
        // Just a dummy placeholder, might need more complex scraping
        const response = await fetch('https://www.mathworks.com/matlabcentral/profile/authors/2946246');
        const html = await response.text();
        const $ = cheerio.load(html);
        const projects = [];
        // Extract links or text
        return projects;
    } catch (e) {
        return [];
    }
}

async function fetchFedoraProjects() {
    console.log('Fetching Fedora contributions...');
    return [{
        platform: 'Fedora',
        name: 'Fedora Contributions',
        description: 'See my profile on Fedora Project Wiki.',
        url: 'https://fedoraproject.org/wiki/User:Zodiacfireworks'
    }];
}

async function main() {
    const github = await fetchGitHubProjects();
    const gitlab = await fetchGitLabProjects();
    const npm = await fetchNpmProjects();
    const pypi = await fetchPyPiProjects();
    const mathworks = await fetchMathWorksProjects();
    const fedora = await fetchFedoraProjects();

    const allProjects = [...github, ...gitlab, ...npm, ...pypi, ...mathworks, ...fedora];
    
    fs.writeFileSync(path.join(DATA_DIR, 'projects.json'), JSON.stringify(allProjects, null, 2));
    console.log(`Saved ${allProjects.length} projects to src/data/projects.json`);
}

main().catch(console.error);
