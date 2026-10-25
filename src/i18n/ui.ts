export type Lang = 'en' | 'es';

export const LANGUAGES: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
};

export const DEFAULT_LANG: Lang = 'en';

export const UI = {
  en: {
    siteDescription:
      'AI engineer building agents, retrieval systems, and internal tools that move from prototype to production — one already serving ~500 monthly users.',
    brandDescriptor: 'AI Engineer',
    availableStatus: 'Available for AI work',
    skipToContent: 'Skip to content',
    themeToggle: 'Switch theme',
    nav: {
      home: 'Home',
      projects: 'Projects',
      posts: 'Posts',
      library: 'Library',
      about: 'About',
      contact: 'Contact',
    },
    status: {
      production: 'In production',
      'open-source': 'Open source',
      'in-development': 'In development',
      demo: 'Technical demo',
    },
    home: {
      lead: 'Most demos break the moment real users show up.',
      bio: "I'm Santiago, an AI engineer. I build practical AI tools for people and teams.",
      socialLinks: 'Social and contact links',
      currentlyReading: 'Currently Reading',
      hallOfFameReading: 'Hall of Fame Reading',
      seeMore: 'See more →',
      nothingReading: 'Nothing right now.',
      pillars: [
        {
          title: 'Agents & Tool Use',
          body: 'Stateful multi-channel workflows with strict guardrails, Redis memory, and deterministic tool execution.',
        },
        {
          title: 'Retrieval & Verification',
          body: 'Hybrid vector + FTS pipelines, cross-encoder reranking, numeric validation, and regulation-grade audit trails.',
        },
        {
          title: 'Fine-Tuning & Systems',
          body: 'QLoRA 4-bit domain models, schema-enforced structured outputs, and fast Python/FastAPI backends.',
        },
      ],
      caseStudiesKicker: 'Case Studies',
      selectedProjects: 'Selected Projects',
      viewAllProjects: (count: number) => `View all ${count} projects →`,
      writingKicker: 'Writing & Field Notes',
      latestPosts: 'Latest Posts',
      allPosts: 'All posts →',
      notesComingSoon: 'Notes coming soon.',
    },
    projects: {
      kicker: 'Case Studies & Engineering',
      title: 'Projects',
      lead: 'Selected work across applied AI, backend systems, and product delivery.',
      caseStudy: 'Read case study',
      codeShort: 'Code',
      demoShort: 'Demo',
      privateRepo: 'Private Repo (Client Contract)',
      backToProjects: '← Back to Projects',
      viewCode: 'Source Code ↗',
      liveDemo: 'Live Demo ↗',
      architectureLabel: 'Architecture & Approach',
      highlightsLabel: 'Key Engineering Decisions',
      stackLabel: 'Stack',
      metricsLabel: 'Key metrics',
      moreProjects: 'More projects',
      prevProject: '← Previous Project',
      nextProject: 'Next Project →',
    },
    posts: {
      kicker: 'Writing & Essays',
      title: 'Posts',
      lead: 'Notes on AI systems, engineering judgment, product tradeoffs, and what breaks once real users show up.',
      topics: 'Topics:',
      backToPosts: '← Back to Posts',
      updated: 'Updated',
      toc: 'Table of contents',
      olderPost: '← Older Post',
      newerPost: 'Newer Post →',
      topicArchive: 'Topic Archive',
      draft: 'draft',
    },
    library: {
      kicker: 'Bookshelf & Papers',
      title: 'Library',
      soon: 'Coming soon',
      soonNote: 'A curated reading list of books, papers, and references is on the way.',
    },
    about: {
      title: 'About Santiago Lopez',
      lead: 'I enjoy turning complex ideas into useful tools for people and teams.',
    },
    contact: {
      kicker: 'Contact',
      title: "Let's talk",
      lead: 'Open to interesting AI and software work. The fastest way to reach me is email or LinkedIn.',
      emailLabel: 'Email',
      copyEmail: 'Copy email',
      copied: 'Copied',
    },
    footer: {
      copy: 'Built with Astro · AI Engineering & Production Systems',
    },
    notFound: {
      kicker: 'Error 404',
      title: 'Page not found',
      lead: "The page you are looking for doesn't exist or has been moved.",
      backHome: '← Back home',
    },
  },
  es: {
    siteDescription:
      'Ingeniero de IA construyendo agentes, sistemas RAG y herramientas internas que pasan de prototipo a producción — uno ya atendiendo ~500 usuarios mensuales.',
    brandDescriptor: 'Ingeniero de IA',
    availableStatus: 'Disponible para proyectos de IA',
    skipToContent: 'Saltar al contenido',
    themeToggle: 'Cambiar tema',
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      posts: 'Posts',
      library: 'Lecturas',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    status: {
      production: 'En producción',
      'open-source': 'Open source',
      'in-development': 'En desarrollo',
      demo: 'Demo técnica',
    },
    home: {
      lead: 'La mayoría de las demos se rompen apenas llegan usuarios reales.',
      bio: 'Soy Santiago, ingeniero de IA. Construyo herramientas prácticas de IA para personas y equipos.',
      socialLinks: 'Redes y contacto',
      currentlyReading: 'Leyendo Ahora',
      hallOfFameReading: 'Lecturas Clave',
      seeMore: 'Ver más →',
      nothingReading: 'Nada por el momento.',
      pillars: [
        {
          title: 'Agentes y Uso de Herramientas',
          body: 'Flujos multicanal con estado en Redis, guardrails estrictos y ejecución determinística de herramientas.',
        },
        {
          title: 'Recuperación y Verificación',
          body: 'Pipelines híbridos vector + FTS, reranking con cross-encoders, validación numérica y trazabilidad auditable.',
        },
        {
          title: 'Fine-Tuning y Sistemas',
          body: 'Modelos de dominio con QLoRA 4-bit, salidas estructuradas validadas por esquema y backends rápidos en Python/FastAPI.',
        },
      ],
      caseStudiesKicker: 'Casos de Estudio',
      selectedProjects: 'Proyectos Destacados',
      viewAllProjects: (count: number) => `Ver los ${count} proyectos →`,
      writingKicker: 'Notas y Artículos',
      latestPosts: 'Últimos Posts',
      allPosts: 'Todos los posts →',
      notesComingSoon: 'Artículos próximamente.',
    },
    projects: {
      kicker: 'Casos de Estudio e Ingeniería',
      title: 'Proyectos',
      lead: 'Trabajos seleccionados en IA aplicada, sistemas backend y producto.',
      caseStudy: 'Leer caso de estudio',
      codeShort: 'Código',
      demoShort: 'Demo',
      privateRepo: 'Repo Privado (Contrato Cliente)',
      backToProjects: '← Volver a Proyectos',
      viewCode: 'Código Fuente ↗',
      liveDemo: 'Demo en Vivo ↗',
      architectureLabel: 'Arquitectura y Enfoque',
      highlightsLabel: 'Decisiones Clave de Ingeniería',
      stackLabel: 'Stack',
      metricsLabel: 'Métricas clave',
      moreProjects: 'Más proyectos',
      prevProject: '← Proyecto Anterior',
      nextProject: 'Siguiente Proyecto →',
    },
    posts: {
      kicker: 'Artículos y Notas',
      title: 'Posts',
      lead: 'Notas sobre sistemas de IA, criterio de ingeniería, decisiones de producto y qué se rompe cuando aparecen usuarios reales.',
      topics: 'Temas:',
      backToPosts: '← Volver a Posts',
      updated: 'Actualizado',
      toc: 'Contenido',
      olderPost: '← Post Anterior',
      newerPost: 'Siguiente Post →',
      topicArchive: 'Archivo por Tema',
      draft: 'borrador',
    },
    library: {
      kicker: 'Libros y Papers',
      title: 'Lecturas',
      soon: 'Próximamente',
      soonNote: 'Una lista curada de libros, papers y referencias está en camino.',
    },
    about: {
      title: 'Sobre Santiago Lopez',
      lead: 'Me gusta convertir ideas complejas en herramientas útiles para personas y equipos.',
    },
    contact: {
      kicker: 'Contacto',
      title: 'Hablemos',
      lead: 'Abierto a proyectos interesantes de IA y software. La forma más rápida de contactarme es por email o LinkedIn.',
      emailLabel: 'Email',
      copyEmail: 'Copiar email',
      copied: 'Copiado',
    },
    footer: {
      copy: 'Hecho con Astro · Ingeniería de IA y Sistemas en Producción',
    },
    notFound: {
      kicker: 'Error 404',
      title: 'Página no encontrada',
      lead: 'La página que buscás no existe o fue movida.',
      backHome: '← Volver al inicio',
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'es') return 'es';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return UI[lang];
}

export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  return clean === '/' ? '/es' : `/es${clean}`;
}

export function switchLangPath(pathname: string, targetLang: Lang): string {
  const stripped = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  return localizePath(stripped, targetLang);
}
