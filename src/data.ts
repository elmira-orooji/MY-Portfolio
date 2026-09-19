export type ProjectCategory = 'All' | 'AI & ML' | 'Full Stack' | 'UI/UX';

export type Project = {
  name: string;
  kind: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  contribution: string;
  stack: string[];
  problem: string;
  approach: string;
  lesson: string;
  metrics?: string;
  image?: string;
  placeholder?: boolean;
};

export const categories: ProjectCategory[] = ['All', 'AI & ML', 'Full Stack', 'UI/UX'];

export const projects: Project[] = [
  {
    name: 'Nexora',
    kind: 'AI · Full Stack',
    category: 'AI & ML',
    summary: 'A document-grounded AI workspace that transforms approved corporate sources into verifiable, citation-backed answers—reducing hallucination risk for regulated teams.',
    role: 'Full-stack product engineer',
    contribution: 'Designed and shipped the React interface, FastAPI retrieval services, permission-aware knowledge sets, and end-to-end document ingestion pipeline.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Qdrant', 'Docker'],
    problem: 'Enterprise teams needed to query sensitive document collections while maintaining audit trails back to source evidence—a gap that generic chatbots could not fill.',
    approach: 'Built hybrid BM25 + vector retrieval with re-ranking, implemented row-level permissions on knowledge sets, and surfaced confidence scores alongside every cited passage.',
    lesson: 'Trust in AI products is earned through observable processing pipelines, not better model outputs. Users adopt systems they can inspect.',
    metrics: '40% reduction in unsupported claims during internal pilot',
    image: '/projects/nexora-product-promo.gif'
  }
];

export const skills = [
  ['Frontend & UI/UX', 'React', 'TypeScript', 'Responsive Design', 'Accessibility (WCAG)', 'Design Systems'],
  ['Backend & APIs', 'Python', 'FastAPI', 'PostgreSQL', 'REST & GraphQL', 'Auth & Permissions'],
  ['AI & Data', 'RAG Architectures', 'Vector Databases', 'Embedding Models', 'Evaluation Harnesses', 'Prompt Engineering'],
  ['DevOps & Workflow', 'Docker', 'CI/CD Pipelines', 'Git', 'Testing Strategies', 'Observability']
];

export const testimonials = [
  {
    quote: 'Delivered a retrieval system that our compliance team actually trusts. That is rare in AI work.',
    author: 'Engineering Manager',
    context: 'Nexora project'
  }
];


