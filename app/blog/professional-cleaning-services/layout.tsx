import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'لماذا تحتاج خدمات التنظيف الاحترافية؟ | لمعة للنظافة',
  description: 'اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج من خبراء شركة لمعة للنظافة.',
  keywords: [
    'خدمات التنظيف الاحترافية',
    'شركة تنظيف معتمدة',
    'فوائد التنظيف الاحترافي',
    'تنظيف منازل احترافي',
    'خدمات نظافة شاملة',
    'شركة نظافة معتمدة الرياض',
    'تنظيف فلل احترافي',
    'تنظيف مكاتب احترافي',
    'تنظيف شقق احترافي',
    'خدمات تنظيف متخصصة',
    'فريق تنظيف محترف',
    'تنظيف بجودة عالية',
    'خدمات تنظيف موثوقة',
    'تنظيف بضمان الجودة',
    'خدمات تنظيف مضمونة'
  ],
  authors: [{ name: 'فريق الخدمات' }],
  creator: 'شركة لمعة للنظافة',
  publisher: 'شركة لمعة للنظافة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getlamaaclean.com'),
  alternates: {
    canonical: '/blog/professional-cleaning-services',
    languages: {
      'ar-SA': '/blog/professional-cleaning-services',
    },
  },
  openGraph: {
    title: 'لماذا تحتاج خدمات التنظيف الاحترافية؟ | لمعة للنظافة',
    description: 'اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/professional-cleaning-services',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-12T00:00:00.000Z',
    modifiedTime: '2024-01-12T00:00:00.000Z',
    authors: ['فريق الخدمات'],
    section: 'الخدمات الاحترافية',
    tags: ['خدمات احترافية', 'تنظيف', 'جودة', 'موثوقية', 'ضمان'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'خدمات التنظيف الاحترافية - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'لماذا تحتاج خدمات التنظيف الاحترافية؟ | لمعة للنظافة',
    description: 'اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج من خبراء شركة لمعة للنظافة.',
    images: ['/cover.png'],
    creator: '@lamaaclean',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'cleaning',
  classification: 'Professional Cleaning Services',
  other: {
    'article:author': 'فريق الخدمات',
    'article:section': 'الخدمات الاحترافية',
    'article:tag': 'خدمات احترافية, تنظيف, جودة, موثوقية, ضمان',
    'article:published_time': '2024-01-12T00:00:00.000Z',
    'article:modified_time': '2024-01-12T00:00:00.000Z',
  },
}

export default function ProfessionalCleaningServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/professional-cleaning-services",
    "headline": "لماذا تحتاج خدمات التنظيف الاحترافية؟",
    "description": "اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-12T00:00:00.000Z",
    "dateModified": "2024-01-12T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "فريق الخدمات",
      "url": "https://getlamaaclean.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "شركة لمعة للنظافة",
      "url": "https://getlamaaclean.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getlamaaclean.com/logo-en.png",
        "width": 200,
        "height": 200
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://getlamaaclean.com/blog/professional-cleaning-services"
    },
    "articleSection": "الخدمات الاحترافية",
    "keywords": "خدمات التنظيف الاحترافية, شركة تنظيف معتمدة, فوائد التنظيف الاحترافي, تنظيف منازل احترافي, خدمات نظافة شاملة",
    "inLanguage": "ar-SA",
    "wordCount": 1600,
    "timeRequired": "PT8M",
    "about": [
      {
        "@type": "Thing",
        "name": "خدمات التنظيف الاحترافية"
      },
      {
        "@type": "Thing",
        "name": "شركة تنظيف معتمدة"
      },
      {
        "@type": "Thing",
        "name": "فوائد التنظيف الاحترافي"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "فريق تنظيف محترف"
      },
      {
        "@type": "Thing",
        "name": "جودة عالية"
      },
      {
        "@type": "Thing",
        "name": "ضمان الجودة"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://getlamaaclean.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": "https://getlamaaclean.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "خدمات التنظيف الاحترافية",
        "item": "https://getlamaaclean.com/blog/professional-cleaning-services"
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات التنظيف الاحترافية",
    "description": "خدمات تنظيف احترافية شاملة للمنازل والفلل والمكاتب مع ضمان الجودة",
    "provider": {
      "@type": "LocalBusiness",
      "name": "شركة لمعة للنظافة",
      "url": "https://getlamaaclean.com",
      "telephone": "+966592425077",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressCountry": "SA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "الرياض"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات التنظيف الاحترافية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنظيف المنازل الاحترافي",
            "description": "خدمة تنظيف شاملة للمنازل مع فريق محترف"
          },
          "price": "150",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنظيف الفلل الاحترافي",
            "description": "خدمة تنظيف متخصصة للفلل الكبيرة"
          },
          "price": "300",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنظيف المكاتب الاحترافي",
            "description": "خدمة تنظيف متخصصة للمكاتب والشركات"
          },
          "price": "200",
          "priceCurrency": "SAR"
        }
      ]
    },
    "serviceType": "تنظيف احترافي",
    "category": "خدمات التنظيف"
  }

  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} font-sans`}>
      <head>
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Article specific meta tags */}
        <meta name="article:author" content="فريق الخدمات" />
        <meta name="article:section" content="الخدمات الاحترافية" />
        <meta name="article:tag" content="خدمات احترافية, تنظيف, جودة, موثوقية, ضمان" />
        <meta name="article:published_time" content="2024-01-12T00:00:00.000Z" />
        <meta name="article:modified_time" content="2024-01-12T00:00:00.000Z" />
        
        {/* Reading time */}
        <meta name="reading-time" content="8" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="الرياض" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Language and locale */}
        <meta name="language" content="Arabic" />
        <meta name="locale" content="ar_SA" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="خدمات التنظيف الاحترافية" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
