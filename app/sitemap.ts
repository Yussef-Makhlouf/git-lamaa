import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getlamaaclean.com'
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // Service pages (for future expansion)
  const servicePages = [
    'تنظيف-المنازل',
    'تنظيف-الفلل',
    'تنظيف-المفروشات',
    'تنظيف-المكيفات',
    'تنظيف-الخزانات',
    'تنظيف-الواجهات',
    'تنظيف-المكاتب',
    'تنظيف-القصور'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Area-specific pages
  const areaPages = [
    'شمال-الرياض',
    'شرق-الرياض',
    'غرب-الرياض',
    'جنوب-الرياض',
    'وسط-الرياض',
    'الملقا',
    'العليا',
    'الصحافة',
    'الدرعية',
    'الخرج'
  ].map(area => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...mainPages, ...servicePages, ...areaPages]
} 