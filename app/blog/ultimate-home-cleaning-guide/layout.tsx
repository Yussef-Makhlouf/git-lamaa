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
  title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
  description: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.',
  keywords: [
    'دليل التنظيف المنزلي',
    'طرق التنظيف الصحيحة',
    'نصائح التنظيف المنزلي',
    'تنظيف المنازل بالطرق الصحيحة',
    'إرشادات التنظيف الاحترافي',
    'أفضل طرق تنظيف البيت',
    'تقنيات التنظيف الحديثة',
    'نصائح تنظيف الرياض',
    'تنظيف شامل للمنزل',
    'خطوات تنظيف المنزل',
    'أدوات التنظيف المنزلي',
    'مواد التنظيف الآمنة',
    'تنظيف الغرف',
    'تنظيف المطبخ',
    'تنظيف الحمامات'
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
    canonical: '/blog/ultimate-home-cleaning-guide',
    languages: {
      'ar-SA': '/blog/ultimate-home-cleaning-guide',
    },
  },
  openGraph: {
    title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
    description: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/ultimate-home-cleaning-guide',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-20T00:00:00.000Z',
    modifiedTime: '2024-01-20T00:00:00.000Z',
    authors: ['فريق لمعة للنظافة'],
    section: 'التنظيف المنزلي',
    tags: ['تنظيف', 'منزل', 'نصائح', 'إرشادات', 'احترافي'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'دليل تنظيف المنزل الشامل - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
    description: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.',
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
  classification: 'Home Cleaning Guide',
  other: {
    'article:author': 'فريق لمعة للنظافة',
    'article:section': 'التنظيف المنزلي',
    'article:tag': 'تنظيف, منزل, نصائح, إرشادات, احترافي',
    'article:published_time': '2024-01-20T00:00:00.000Z',
    'article:modified_time': '2024-01-20T00:00:00.000Z',
  },
}

export default function UltimateHomeCleaningGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/ultimate-home-cleaning-guide",
    "headline": "دليل تنظيف المنزل الشامل: من الألف إلى الياء",
    "description": "تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-20T00:00:00.000Z",
    "dateModified": "2024-01-20T00:00:00.000Z",
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
      "@id": "https://getlamaaclean.com/blog/ultimate-home-cleaning-guide"
    },
    "articleSection": "التنظيف المنزلي",
    "keywords": "دليل التنظيف المنزلي, طرق التنظيف الصحيحة, نصائح التنظيف المنزلي, تنظيف المنازل بالطرق الصحيحة, إرشادات التنظيف الاحترافي",
    "inLanguage": "ar-SA",
    "wordCount": 2500,
    "timeRequired": "PT15M",
    "about": [
      {
        "@type": "Thing",
        "name": "تنظيف المنازل"
      },
      {
        "@type": "Thing",
        "name": "نصائح التنظيف"
      },
      {
        "@type": "Thing",
        "name": "إرشادات التنظيف"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "أدوات التنظيف"
      },
      {
        "@type": "Thing",
        "name": "مواد التنظيف الآمنة"
      },
      {
        "@type": "Thing",
        "name": "تقنيات التنظيف"
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
        "name": "دليل تنظيف المنزل الشامل",
        "item": "https://getlamaaclean.com/blog/ultimate-home-cleaning-guide"
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "دليل تنظيف المنزل الشامل: من الألف إلى الياء",
    "description": "تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة",
    "image": "https://getlamaaclean.com/cover.png",
    "totalTime": "PT15M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "50"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "مكانس كهربائية عالية الكفاءة"
      },
      {
        "@type": "HowToSupply",
        "name": "ممسحات مختلفة الأحجام"
      },
      {
        "@type": "HowToSupply",
        "name": "مناشف من الألياف الدقيقة"
      },
      {
        "@type": "HowToSupply",
        "name": "فرش تنظيف متنوعة"
      },
      {
        "@type": "HowToSupply",
        "name": "قفازات واقية"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "منظفات متعددة الأغراض"
      },
      {
        "@type": "HowToTool",
        "name": "مطهرات آمنة"
      },
      {
        "@type": "HowToTool",
        "name": "منظفات زجاج"
      },
      {
        "@type": "HowToTool",
        "name": "منظفات أرضيات"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "التخطيط والتحضير",
        "text": "وضع خطة واضحة وتحضير جميع الأدوات والمواد اللازمة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "ترتيب الأولويات",
        "text": "البدء بالغرف الأكثر استخداماً، ثم الانتقال إلى الغرف الأقل استخداماً",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "تنظيف الغرف خطوة بخطوة",
        "text": "تنظيف كل غرفة بطريقة منظمة ومن الأعلى إلى الأسفل",
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
        <meta name="article:section" content="التنظيف المنزلي" />
        <meta name="article:tag" content="تنظيف, منزل, نصائح, إرشادات, احترافي" />
        <meta name="article:published_time" content="2024-01-20T00:00:00.000Z" />
        <meta name="article:modified_time" content="2024-01-20T00:00:00.000Z" />
        
        {/* Reading time */}
        <meta name="reading-time" content="15" />
        
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
        <meta name="apple-mobile-web-app-title" content="دليل تنظيف المنزل الشامل" />
        
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
