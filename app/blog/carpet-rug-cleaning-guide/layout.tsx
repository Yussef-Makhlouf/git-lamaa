import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
  description: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.',
  keywords: [
    'تنظيف السجاد',
    'تنظيف الموكيت',
    'طرق تنظيف السجاد',
    'تنظيف السجاد بالبخار',
    'عناية بالسجاد',
    'إزالة البقع من السجاد',
    'تنظيف السجاد العميق',
    'نصائح تنظيف السجاد',
    'مواد تنظيف السجاد',
    'أدوات تنظيف السجاد',
    'تنظيف السجاد في الرياض',
    'خدمات تنظيف السجاد',
    'تنظيف السجاد المنزلي',
    'حماية السجاد',
    'صيانة السجاد'
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
    canonical: '/blog/carpet-rug-cleaning-guide',
    languages: {
      'ar-SA': '/blog/carpet-rug-cleaning-guide',
    },
  },
  openGraph: {
    title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.',
    url: 'https://getlamaaclean.com/blog/carpet-rug-cleaning-guide',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'article',
    publishedTime: '2024-01-25T00:00:00.000Z',
    modifiedTime: '2024-01-25T00:00:00.000Z',
    authors: ['فريق لمعة للنظافة'],
    section: 'تنظيف السجاد',
    tags: ['تنظيف', 'سجاد', 'موكيت', 'نصائح', 'إرشادات'],
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف السجاد والموكيت - لمعة للنظافة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.',
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
  classification: 'Carpet Cleaning Guide',
  other: {
    'article:author': 'فريق لمعة للنظافة',
    'article:section': 'تنظيف السجاد',
    'article:tag': 'تنظيف, سجاد, موكيت, نصائح, إرشادات',
    'article:published_time': '2024-01-25T00:00:00.000Z',
    'article:modified_time': '2024-01-25T00:00:00.000Z',
  },
}

export default function CarpetRugCleaningGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://getlamaaclean.com/blog/carpet-rug-cleaning-guide",
    "headline": "تنظيف السجاد والموكيت: دليل شامل",
    "description": "تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.",
    "image": {
      "@type": "ImageObject",
      "url": "https://getlamaaclean.com/cover.png",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-25T00:00:00.000Z",
    "dateModified": "2024-01-25T00:00:00.000Z",
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
      "@id": "https://getlamaaclean.com/blog/carpet-rug-cleaning-guide"
    },
    "articleSection": "تنظيف السجاد",
    "keywords": "تنظيف السجاد, تنظيف الموكيت, طرق تنظيف السجاد, تنظيف السجاد بالبخار, عناية بالسجاد",
    "inLanguage": "ar-SA",
    "wordCount": 2200,
    "timeRequired": "PT12M",
    "about": [
      {
        "@type": "Thing",
        "name": "تنظيف السجاد"
      },
      {
        "@type": "Thing",
        "name": "تنظيف الموكيت"
      },
      {
        "@type": "Thing",
        "name": "عناية بالسجاد"
      }
    ],
    "mentions": [
      {
        "@type": "Thing",
        "name": "تنظيف السجاد بالبخار"
      },
      {
        "@type": "Thing",
        "name": "إزالة البقع"
      },
      {
        "@type": "Thing",
        "name": "مواد تنظيف السجاد"
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
        "name": "تنظيف السجاد والموكيت",
        "item": "https://getlamaaclean.com/blog/carpet-rug-cleaning-guide"
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "تنظيف السجاد والموكيت: دليل شامل",
    "description": "تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة",
    "image": "https://getlamaaclean.com/cover.png",
    "totalTime": "PT12M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "30"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "مكانس كهربائية عالية الكفاءة"
      },
      {
        "@type": "HowToSupply",
        "name": "منظفات السجاد المتخصصة"
      },
      {
        "@type": "HowToSupply",
        "name": "فرش تنظيف ناعمة"
      },
      {
        "@type": "HowToSupply",
        "name": "مناشف بيضاء نظيفة"
      },
      {
        "@type": "HowToSupply",
        "name": "ماء بارد"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "مكنسة كهربائية"
      },
      {
        "@type": "HowToTool",
        "name": "فرشاة تنظيف"
      },
      {
        "@type": "HowToTool",
        "name": "بخاخ"
      },
      {
        "@type": "HowToTool",
        "name": "ممسحة"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "التحضير والتنظيف الأولي",
        "text": "إزالة الأوساخ السطحية وترتيب المنطقة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "معالجة البقع",
        "text": "معالجة البقع المختلفة بطرق مناسبة",
        "image": "https://getlamaaclean.com/cover.png"
      },
      {
        "@type": "HowToStep",
        "name": "التنظيف العميق",
        "text": "تنظيف السجاد بالطريقة المناسبة لنوعه",
        "image": "https://getlamaaclean.com/cover.png"
      }
    ]
  }

  return (
    <>
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
      <meta name="article:section" content="تنظيف السجاد" />
      <meta name="article:tag" content="تنظيف, سجاد, موكيت, نصائح, إرشادات" />
      <meta name="article:published_time" content="2024-01-25T00:00:00.000Z" />
      <meta name="article:modified_time" content="2024-01-25T00:00:00.000Z" />
      
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
      <meta name="apple-mobile-web-app-title" content="تنظيف السجاد والموكيت" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {children}
    </>
  )
}
