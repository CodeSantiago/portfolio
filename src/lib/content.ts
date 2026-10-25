import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export function cleanSlug(id: string): string {
  return id.replace(/^es\//, '');
}

/** Published posts for a given locale (drafts only visible in dev), newest first. */
export async function getPosts(lang: Lang = 'en'): Promise<CollectionEntry<'posts'>[]> {
  const all = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  const enPosts = all.filter((p) => !p.id.startsWith('es/'));
  if (lang === 'en') {
    return enPosts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  }

  const esPosts = all.filter((p) => p.id.startsWith('es/'));
  const esSlugs = new Set(esPosts.map((p) => cleanSlug(p.id)));
  const fallback = enPosts.filter((p) => !esSlugs.has(cleanSlug(p.id)));
  return [...esPosts, ...fallback].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(lang: Lang = 'en'): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects');
  const enProjects = all.filter((p) => !p.id.startsWith('es/'));
  if (lang === 'en') {
    return enProjects.sort((a, b) => a.data.order - b.data.order);
  }

  const esProjects = all.filter((p) => p.id.startsWith('es/'));
  const esSlugs = new Set(esProjects.map((p) => cleanSlug(p.id)));
  const fallback = enProjects.filter((p) => !esSlugs.has(cleanSlug(p.id)));
  return [...esProjects, ...fallback].sort((a, b) => a.data.order - b.data.order);
}

export function readingTime(body: string | undefined, lang: Lang = 'en'): string {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 220));
  return lang === 'es' ? `${mins} min de lectura` : `${mins} min read`;
}

export function formatDate(date: Date, lang: Lang = 'en'): string {
  return date.toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
