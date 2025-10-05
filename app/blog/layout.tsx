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
  title: {
    default: 'مدونة لمعة للنظافة | نصائح وإرشادات التنظيف الاحترافي',
    template: '%s | مدونة لمعة للنظافة'
  },
  description: 'مدونة شاملة تحتوي على أفضل النصائح والإرشادات للتنظيف المنزلي والتجاري. تعلم من خبراء شركة لمعة للنظافة في الرياض.',
  keywords: [
    'مدونة التنظيف',
    'نصائح التنظيف المنزلي',
    'إرشادات التنظيف',
    'طرق التنظيف الصحيحة',
    'تنظيف احترافي',
    'شركة لمعة للنظافة',
    'تنظيف المنازل',
    'تنظيف الفلل',
    'تنظيف المكاتب',
    'تنظيف السجاد',
    'تنظيف بالبخار',
    'مواد تنظيف آمنة',
    'خدمات تنظيف احترافية',
    'نظافة الرياض',
    'شركة نظافة معتمدة'
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
    canonical: '/blog',
    languages: {
      'ar-SA': '/blog',
    },
  },
  openGraph: {
    title: 'مدونة لمعة للنظافة | نصائح وإرشادات التنظيف الاحترافي',
    description: 'مدونة شاملة تحتوي على أفضل النصائح والإرشادات للتنظيف المنزلي والتجاري. تعلم من خبراء شركة لمعة للنظافة في الرياض.',
    url: 'https://getlamaaclean.com/blog',
    siteName: 'مدونة لمعة للنظافة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/cover.png',
        width: 1200,
        height: 630,
        alt: 'مدونة لمعة للنظافة - نصائح وإرشادات التنظيف الاحترافي',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مدونة لمعة للنظافة | نصائح وإرشادات التنظيف الاحترافي',
    description: 'مدونة شاملة تحتوي على أفضل النصائح والإرشادات للتنظيف المنزلي والتجاري. تعلم من خبراء شركة لمعة للنظافة في الرياض.',
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
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'cleaning',
  classification: 'Cleaning Tips and Professional Services',
  other: {
    'article:author': 'فريق لمعة للنظافة',
    'article:section': 'تنظيف',
    'article:tag': 'تنظيف, نصائح, إرشادات, خدمات احترافية',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://getlamaaclean.com/blog",
    "name": "مدونة لمعة للنظافة",
    "description": "مدونة شاملة تحتوي على أفضل النصائح والإرشادات للتنظيف المنزلي والتجاري",
    "url": "https://getlamaaclean.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "شركة لمعة للنظافة",
      "url": "https://getlamaaclean.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://getlamaaclean.com/logo-en.png"
      }
    },
    "inLanguage": "ar-SA",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://getlamaaclean.com/blog"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "دليل تنظيف المنزل الشامل: من الألف إلى الياء",
        "description": "تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي.",
        "url": "https://getlamaaclean.com/blog/ultimate-home-cleaning-guide",
        "datePublished": "2024-01-20",
        "dateModified": "2024-01-20",
        "author": {
          "@type": "Organization",
          "name": "فريق لمعة للنظافة"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/ultimate-home-cleaning-guide"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "تنظيف السجاد والموكيت: دليل شامل",
        "description": "تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها.",
        "url": "https://getlamaaclean.com/blog/carpet-rug-cleaning-guide",
        "datePublished": "2024-01-25",
        "dateModified": "2024-01-25",
        "author": {
          "@type": "Organization",
          "name": "فريق لمعة للنظافة"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/carpet-rug-cleaning-guide"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "تنظيف المطبخ العميق: نصائح احترافية",
        "description": "تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها.",
        "url": "https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips",
        "datePublished": "2024-01-28",
        "dateModified": "2024-01-28",
        "author": {
          "@type": "Organization",
          "name": "فريق لمعة للنظافة"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/deep-kitchen-cleaning-tips"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "طرق التنظيف بالبخار: الدليل الكامل",
        "description": "اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق.",
        "url": "https://getlamaaclean.com/blog/steam-cleaning-methods",
        "datePublished": "2024-01-18",
        "dateModified": "2024-01-18",
        "author": {
          "@type": "Organization",
          "name": "خبراء لمعة"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/steam-cleaning-methods"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "كيفية اختيار المواد التنظيفية الآمنة",
        "description": "دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية.",
        "url": "https://getlamaaclean.com/blog/safe-cleaning-products",
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-15",
        "author": {
          "@type": "Organization",
          "name": "قسم البحث والتطوير"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/safe-cleaning-products"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "لماذا تحتاج خدمات التنظيف الاحترافية؟",
        "description": "اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج.",
        "url": "https://getlamaaclean.com/blog/professional-cleaning-services",
        "datePublished": "2024-01-12",
        "dateModified": "2024-01-12",
        "author": {
          "@type": "Organization",
          "name": "فريق الخدمات"
        },
        "publisher": {
          "@type": "Organization",
          "name": "شركة لمعة للنظافة",
          "logo": {
            "@type": "ImageObject",
            "url": "https://getlamaaclean.com/logo-en.png"
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://getlamaaclean.com/cover.png"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://getlamaaclean.com/blog/professional-cleaning-services"
        }
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
      }
    ]
  }

  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} font-sans`}>
      <head>
        {/* Blog Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Article specific meta tags */}
        <meta name="article:author" content="فريق لمعة للنظافة" />
        <meta name="article:section" content="تنظيف" />
        <meta name="article:tag" content="تنظيف, نصائح, إرشادات, خدمات احترافية" />
        
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
        <meta name="apple-mobile-web-app-title" content="مدونة لمعة للنظافة" />
        
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
      </body>
    </html>
  )
}
