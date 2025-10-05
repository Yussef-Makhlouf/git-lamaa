import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
// import Script from 'next/script'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
  description: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.',
  keywords: [
    'تنظيف المطبخ',
    'تنظيف المطبخ العميق',
    'نصائح تنظيف المطبخ',
    'تنظيف الثلاجة',
    'تنظيف الفرن',
    'تنظيف الخزائن',
    'تنظيف الحوض',
    'تنظيف أسطح المطبخ',
    'مواد تنظيف المطبخ',
    'أدوات تنظيف المطبخ',
    'تنظيف المطبخ في الرياض',
    'خدمات تنظيف المطبخ',
    'تنظيف المطبخ المنزلي',
    'حماية المطبخ',
    'صيانة المطبخ'
  ],
  authors: [{ name: 'فريق لمعة للنظافة' }],
  creator: 'شركة لمعة للنظافة',
  publisher: 'شركة لمعة للنظافة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://getlamaaclean.com'),
  alternates: {
    canonical: '/blog/deep-kitchen-cleaning-tips',
    languages: {
      'ar-SA': '/blog/deep-kitchen-cleaning-tips',
    },
  },
  openGraph: {
    title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-28T00:00:00.000Z',
    modifiedTime: '2024-01-28T00:00:00.000Z',
    authors: ['فريق لمعة للنظافة'],
    section: 'تنظيف المطبخ',
    tags: ['تنظيف', 'مطبخ', 'نصائح', 'إرشادات', 'احترافي'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف المطبخ العميق - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.',
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
  classification: 'Kitchen Cleaning Guide',
  other: {
    'article:author': 'فريق لمعة للنظافة',
    'article:section': 'تنظيف المطبخ',
    'article:tag': 'تنظيف, مطبخ, نصائح, إرشادات, احترافي',
    'article:published_time': '2024-01-28T00:00:00.000Z',
    'article:modified_time': '2024-01-28T00:00:00.000Z',
  },
}

export default function DeepKitchenCleaningTipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips",
    "headline": "تنظيف المطبخ العميق: نصائح احترافية",
    "description": "تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-28T00:00:00.000Z",
    "dateModified": "2024-01-28T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "فريق لمعة للنظافة",
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
      "@id": "https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips"
    },
    "articleSection": "تنظيف المطبخ",
    "keywords": "تنظيف المطبخ, تنظيف المطبخ العميق, نصائح تنظيف المطبخ, تنظيف الثلاجة, تنظيف الفرن",
    "inLanguage": "ar-SA",
    "wordCount": 2400,
    "timeRequired": "PT14M",
    "about": [
      {
        "@type": "Thing",
        "name": "تنظيف المطبخ"
      },
      {
        "@type": "Thing",
        "name": "تنظيف المطبخ العميق"
      },
      {
        "@type": "Thing",
        "name": "نصائح تنظيف المطبخ"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "تنظيف الثلاجة"
      },
      {
        "@type": "Thing",
        "name": "تنظيف الفرن"
      },
      {
        "@type": "Thing",
        "name": "تنظيف الخزائن"
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
        "name": "تنظيف المطبخ العميق",
        "item": "https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips"
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "تنظيف المطبخ العميق: نصائح احترافية",
    "description": "تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة",
    "image": "https://getlamaaclean.com/cover.png",
    "totalTime": "PT14M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "40"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "منظفات متعددة الأغراض"
      },
      {
        "@type": "HowToSupply",
        "name": "مطهرات آمنة"
      },
      {
        "@type": "HowToSupply",
        "name": "مناشف نظيفة"
      },
      {
        "@type": "HowToSupply",
        "name": "فرش تنظيف"
      },
      {
        "@type": "HowToSupply",
        "name": "قفازات واقية"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "مكنسة كهربائية"
      },
      {
        "@type": "HowToTool",
        "name": "ممسحة"
      },
      {
        "@type": "HowToTool",
        "name": "بخاخ"
      },
      {
        "@type": "HowToTool",
        "name": "إسفنجة"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "التحضير والتنظيف الأولي",
        "text": "إزالة الأوساخ السطحية وترتيب المطبخ",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "تنظيف الأجهزة",
        "text": "تنظيف الثلاجة والفرن والميكروويف",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "تنظيف الخزائن والأسطح",
        "text": "تنظيف الخزائن وأسطح العمل والحوض",
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
        <meta name="article:author" content="فريق لمعة للنظافة" />
        <meta name="article:section" content="تنظيف المطبخ" />
        <meta name="article:tag" content="تنظيف, مطبخ, نصائح, إرشادات, احترافي" />
        <meta name="article:published_time" content="2024-01-28T00:00:00.000Z" />
        <meta name="article:modified_time" content="2024-01-28T00:00:00.000Z" />
        
        {/* Reading time */}
        <meta name="reading-time" content="14" />
        
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
        <meta name="apple-mobile-web-app-title" content="تنظيف المطبخ العميق" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        
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
