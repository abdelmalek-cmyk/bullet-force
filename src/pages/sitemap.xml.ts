import type { APIRoute } from 'astro';
import { weapons } from '../data/weapons';
import { maps } from '../data/maps';

const SITE = 'https://bullet-force.org';

const staticPages = [
  { url: '/',               priority: '1.0', changefreq: 'weekly'  },
  { url: '/play',           priority: '0.9', changefreq: 'monthly' },
  { url: '/unblocked',      priority: '0.9', changefreq: 'monthly' },
  { url: '/download',       priority: '0.8', changefreq: 'monthly' },
  { url: '/weapons',        priority: '0.9', changefreq: 'weekly'  },
  { url: '/maps',           priority: '0.9', changefreq: 'weekly'  },
  { url: '/guides',         priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/controls',           priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/controller-support', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/how-to-play',        priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/scorestreaks',       priority: '0.8', changefreq: 'monthly' },
  { url: '/guides/gold-credits',       priority: '0.7', changefreq: 'monthly' },
  { url: '/faq',            priority: '0.7', changefreq: 'monthly' },
  { url: '/about',          priority: '0.6', changefreq: 'monthly' },
  { url: '/mobile',         priority: '0.7', changefreq: 'monthly' },
  { url: '/account',        priority: '0.6', changefreq: 'monthly' },
  { url: '/skins',          priority: '0.7', changefreq: 'monthly' },
  { url: '/updates',        priority: '0.6', changefreq: 'monthly' },
  { url: '/community',      priority: '0.6', changefreq: 'monthly' },
  { url: '/similar-games',  priority: '0.6', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const weaponUrls = weapons.map(w => ({
    url: `/weapons/${w.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const mapUrls = maps.map(m => ({
    url: `/maps/${m.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...weaponUrls, ...mapUrls];
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${SITE}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
