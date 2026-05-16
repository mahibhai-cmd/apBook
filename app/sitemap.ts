import type { MetadataRoute } from 'next';

const BASE = 'https://www.apbook.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE,                               lastModified: now, changeFrequency: 'daily',   priority: 1    },
    { url: `${BASE}/register`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/login`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/about-us`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${BASE}/privacy-policy`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
    { url: `${BASE}/terms-and-conditions`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
    { url: `${BASE}/rules`,                    lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
    { url: `${BASE}/responsible-gaming`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
  ];
}
