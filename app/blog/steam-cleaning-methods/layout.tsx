import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'


const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
  description: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.',
  keywords: [
    'التنظيف بالبخار',
    'تنظيف بالبخار الحراري',
    'فوائد التنظيف بالبخار',
    'تنظيف السجاد بالبخار',
    'تنظيف الموكيت بالبخار',
    'تقنيات التنظيف الحديثة',
    'أجهزة التنظيف بالبخار',
    'تنظيف المفروشات بالبخار',
    'تنظيف الأرضيات بالبخار',
    'تنظيف الكنب بالبخار',
    'تنظيف المراتب بالبخار',
    'تنظيف الستائر بالبخار',
    'معدات التنظيف بالبخار',
    'فوائد البخار في التنظيف',
    'تنظيف صديق للبيئة'
  ],
  authors: [{ name: 'خبراء لمعة' }],
  creator: 'شركة لمعة للنظافة',
  publisher: 'شركة لمعة للنظافة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getlamaaclean.com'),
  alternates: {
    canonical: '/blog/steam-cleaning-methods',
    languages: {
      'ar-SA': '/blog/steam-cleaning-methods',
    },
  },
  openGraph: {
    title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
    description: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/steam-cleaning-methods',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-18T00:00:00.000Z',
    modifiedTime: '2024-01-18T00:00:00.000Z',
    authors: ['خبراء لمعة'],
    section: 'تقنيات التنظيف',
    tags: ['تنظيف', 'بخار', 'تقنيات', 'حديثة', 'فعالة'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'طرق التنظيف بالبخار - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
    description: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.',
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
  classification: 'Steam Cleaning Technology',
  other: {
    'article:author': 'خبراء لمعة',
    'article:section': 'تقنيات التنظيف',
    'article:tag': 'تنظيف, بخار, تقنيات, حديثة, فعالة',
    'article:published_time': '2024-01-18T00:00:00.000Z',
    'article:modified_time': '2024-01-18T00:00:00.000Z',
  },
}

export default function SteamCleaningMethodsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/steam-cleaning-methods",
    "headline": "طرق التنظيف بالبخار: الدليل الكامل",
    "description": "اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-18T00:00:00.000Z",
    "dateModified": "2024-01-18T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "خبراء لمعة",
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
      "@id": "https://getlamaaclean.com/blog/steam-cleaning-methods"
    },
    "articleSection": "تقنيات التنظيف",
    "keywords": "التنظيف بالبخار, تنظيف بالبخار الحراري, فوائد التنظيف بالبخار, تنظيف السجاد بالبخار, تنظيف الموكيت بالبخار",
    "inLanguage": "ar-SA",
    "wordCount": 2000,
    "timeRequired": "PT12M",
    "about": [
      {
        "@type": "Thing",
        "name": "التنظيف بالبخار"
      },
      {
        "@type": "Thing",
        "name": "تقنيات التنظيف الحديثة"
      },
      {
        "@type": "Thing",
        "name": "أجهزة التنظيف"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "أجهزة التنظيف بالبخار"
      },
      {
        "@type": "Thing",
        "name": "تنظيف السجاد"
      },
      {
        "@type": "Thing",
        "name": "تنظيف المفروشات"
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
        "name": "طرق التنظيف بالبخار",
        "item": "https://getlamaaclean.com/blog/steam-cleaning-methods"
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "طرق التنظيف بالبخار: الدليل الكامل",
    "description": "تعلم كيفية استخدام التنظيف بالبخار للحصول على أفضل النتائج",
    "image": "https://getlamaaclean.com/cover.png",
    "totalTime": "PT12M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "200"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "جهاز التنظيف بالبخار"
      },
      {
        "@type": "HowToSupply",
        "name": "ماء مقطر"
      },
      {
        "@type": "HowToSupply",
        "name": "مناشف نظيفة"
      },
      {
        "@type": "HowToSupply",
        "name": "قفازات واقية"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "جهاز التنظيف بالبخار"
      },
      {
        "@type": "HowToTool",
        "name": "فرش التنظيف"
      },
      {
        "@type": "HowToTool",
        "name": "مناشف الألياف الدقيقة"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "التحضير",
        "text": "إزالة الأوساخ الظاهرة والغبار من المنطقة المراد تنظيفها",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "اختبار المنطقة",
        "text": "جرب على منطقة صغيرة أولاً للتأكد من عدم تلف المادة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "ضبط الحرارة",
        "text": "اختر درجة الحرارة المناسبة لنوع السطح",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "التطبيق",
        "text": "حرك الجهاز ببطء ومنتظم على السطح",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "التجفيف",
        "text": "اترك السطح ليجف تماماً قبل الاستخدام",
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
        <meta name="article:author" content="خبراء لمعة" />
        <meta name="article:section" content="تقنيات التنظيف" />
        <meta name="article:tag" content="تنظيف, بخار, تقنيات, حديثة, فعالة" />
        <meta name="article:published_time" content="2024-01-18T00:00:00.000Z" />
        <meta name="article:modified_time" content="2024-01-18T00:00:00.000Z" />
        
        {/* Reading time */}
        <meta name="reading-time" content="12" />
        
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
        <meta name="apple-mobile-web-app-title" content="طرق التنظيف بالبخار" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        
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
