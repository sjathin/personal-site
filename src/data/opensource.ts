export interface OpenSourceProject {
  project: string;
  description: string;
  summary: string;
  url: string;
  image: string;
  status: 'active' | 'past';
  startDate: string;
  endDate?: string;
  tech: string[];
  highlights: string[];
}

const data: OpenSourceProject[] = [
  {
    project: 'OpenHands',
    description: 'AI-powered software development agent platform',
    summary:
      'Contributing features and bug fixes across the core SDK, CLI, and frontend. Focused on agent skills infrastructure, cloud API integration, and developer UX improvements. 6 PRs merged, 4 open across multiple repos (OpenHands, software-agent-sdk, OpenHands-CLI, agent-canvas).',
    url: 'https://github.com/All-Hands-AI/OpenHands',
    image: '/images/projects/openhands.png',
    status: 'active',
    startDate: 'Mar 2026',
    tech: ['Python', 'TypeScript', 'React', 'LLM Agents', 'Docker'],
    highlights: [
      'Added AWS Bedrock authentication support for the SDK',
      'Built /skill lifecycle commands for the CLI',
      'Standardized terminal key handling across backends',
      'Migrated Cloud CLI to V1 API endpoints',
      'Added LLM model display on conversation cards',
      'Fixed image content handling in agent messages',
    ],
  },
  {
    project: 'OpenRefine',
    description: 'Open-source tool for cleaning and transforming messy data',
    summary:
      'Contributed UI fixes, improved error reporting, and enhanced Wikibase integration. 4 PRs merged across the Java backend and JavaScript frontend during Google Summer of Code participation period.',
    url: 'https://github.com/OpenRefine/OpenRefine',
    image: '/images/projects/openrefine.png',
    status: 'past',
    startDate: 'Sep 2020',
    endDate: 'May 2021',
    tech: ['Java', 'JavaScript', 'Wikidata', 'Data Processing'],
    highlights: [
      'Added clear error reporting for the templating exporter',
      'Wikibase login form now shows instance logo',
      'Fixed Enter key triggering OK button in dialogs',
      'Documentation style improvements',
    ],
  },
];

export default data;
