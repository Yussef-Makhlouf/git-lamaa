import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'


const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
  description: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.',
  keywords: [
    'المواد التنظيفية الآمنة',
    'منظفات صديقة للبيئة',
    'مواد تنظيف طبيعية',
    'منظفات آمنة للأطفال',
    'منتجات تنظيف خالية من المواد الكيميائية',
    'منظفات عضوية',
    'منظفات خالية من الفوسفات',
    'منظفات قابلة للتحلل الحيوي',
    'منظفات خالية من الأمونيا',
    'منظفات آمنة للبشرة',
    'منظفات معتمدة',
    'منظفات طبيعية منزلية',
    'وصفات تنظيف طبيعية',
    'منظفات صديقة للبيئة',
    'منظفات آمنة للحيوانات الأليفة',
    'خدمات نظافه في جميع احياء الرياض',
    'خدمات النظافة المنزلية في الرياض'
  ],
  authors: [{ name: 'قسم البحث والتطوير' }],
  creator: 'شركة لمعة للنظافة',
  publisher: 'شركة لمعة للنظافة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getlamaaclean.com'),
  alternates: {
    canonical: '/blog/safe-cleaning-products',
    languages: {
      'ar-SA': '/blog/safe-cleaning-products',
    },
  },
  openGraph: {
    title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
    description: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/safe-cleaning-products',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    modifiedTime: '2024-01-15T00:00:00.000Z',
    authors: ['قسم البحث والتطوير'],
    section: 'المواد التنظيفية',
    tags: ['مواد تنظيف', 'آمنة', 'صديقة للبيئة', 'طبيعية', 'صحة'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'المواد التنظيفية الآمنة - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
    description: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.',
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
  classification: 'Safe Cleaning Products Guide',
  other: {
    'article:author': 'قسم البحث والتطوير',
    'article:section': 'المواد التنظيفية',
    'article:tag': 'مواد تنظيف, آمنة, صديقة للبيئة, طبيعية, صحة',
    'article:published_time': '2024-01-15T00:00:00.000Z',
    'article:modified_time': '2024-01-15T00:00:00.000Z',
  },
}

export default function SafeCleaningProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/safe-cleaning-products",
    "headline": "كيفية اختيار المواد التنظيفية الآمنة",
    "description": "دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-15T00:00:00.000Z",
    "dateModified": "2024-01-15T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "قسم البحث والتطوير",
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
      "@id": "https://getlamaaclean.com/blog/safe-cleaning-products"
    },
    "articleSection": "المواد التنظيفية",
    "keywords": "المواد التنظيفية الآمنة, منظفات صديقة للبيئة, مواد تنظيف طبيعية, منظفات آمنة للأطفال, منتجات تنظيف خالية من المواد الكيميائية",
    "inLanguage": "ar-SA",
    "wordCount": 1800,
    "timeRequired": "PT10M",
    "about": [
      {
        "@type": "Thing",
        "name": "المواد التنظيفية الآمنة"
      },
      {
        "@type": "Thing",
        "name": "منظفات صديقة للبيئة"
      },
      {
        "@type": "Thing",
        "name": "مواد تنظيف طبيعية"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "منظفات خالية من الفوسفات"
      },
      {
        "@type": "Thing",
        "name": "منظفات قابلة للتحلل الحيوي"
      },
      {
        "@type": "Thing",
        "name": "وصفات تنظيف طبيعية"
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
        "name": "المواد التنظيفية الآمنة",
        "item": "https://getlamaaclean.com/blog/safe-cleaning-products"
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "كيفية اختيار المواد التنظيفية الآمنة",
    "description": "تعلم كيفية اختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة",
    "image": "https://getlamaaclean.com/cover.png",
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "30"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "منظفات خالية من الفوسفات"
      },
      {
        "@type": "HowToSupply",
        "name": "منظفات قابلة للتحلل الحيوي"
      },
      {
        "@type": "HowToSupply",
        "name": "منظفات خالية من الأمونيا"
      },
      {
        "@type": "HowToSupply",
        "name": "منظفات معتمدة من جهات مختصة"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "دليل المنتجات"
      },
      {
        "@type": "HowToTool",
        "name": "قائمة المكونات"
      },
      {
        "@type": "HowToTool",
        "name": "شهادات الجودة"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "قراءة المكونات",
        "text": "تأكد من قراءة قائمة المكونات والبحث عن المواد الآمنة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "التحقق من الشهادات",
        "text": "ابحث عن شهادات الجودة والاعتماد من الجهات المختصة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "مقارنة المنتجات",
        "text": "قارن بين المنتجات الطبيعية والكيميائية لاختيار الأنسب",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "اختبار المنتج",
        "text": "جرب المنتج على منطقة صغيرة للتأكد من فعاليته وأمانه",
        "image": "https://getlamaaclean.com/cover.png"
      }
    ]
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

        {/* HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Article specific meta tags */}
        <meta name="article:author" content="قسم البحث والتطوير" />
        <meta name="article:section" content="المواد التنظيفية" />
        <meta name="article:tag" content="مواد تنظيف, آمنة, صديقة للبيئة, طبيعية, صحة" />
        <meta name="article:published_time" content="2024-01-15T00:00:00.000Z" />
        <meta name="article:modified_time" content="2024-01-15T00:00:00.000Z" />
        
        {/* Reading time */}
        <meta name="reading-time" content="10" />
        
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
        <meta name="apple-mobile-web-app-title" content="المواد التنظيفية الآمنة" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        
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
