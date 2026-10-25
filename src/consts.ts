export const SITE = {
  name: 'Santiago Lopez',
  handle: 'CodeSantiago',
  role: 'AI Engineer',
  description:
    'AI engineer building agents, retrieval systems, and internal tools that move from prototype to production — one already serving ~500 monthly users.',
  email: 'contacto.ssnt@gmail.com',
  lang: 'en',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/library', label: 'Library' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/CodeSantiago' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/santiago-tomas-lopez-54195a26a' },
];

export const PROJECT_STATUS_LABEL: Record<string, string> = {
  production: 'In production',
  'open-source': 'Open source',
  'in-development': 'In development',
  demo: 'Technical demo',
};
