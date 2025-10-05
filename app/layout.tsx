import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://getlamaaclean.com/'),
  title: {
    default: 'شركة لمعة للنظافة بالرياض | أفضل شركة نظافة معتمدة - خدمات تنظيف شاملة 24/7',
    template: '%s | لمعة للنظافة'
  },
  description: 'شركة لمعة للنظافة: أفضل شركة تنظيف معتمدة في الرياض. خدمات نظافة شاملة للمنازل، الفلل، المكاتب، والمفروشات. عمالة محترفة، أسعار تنافسية، خدمة 24/7. اتصل الآن: 0592425077',
  manifest: '/manifest.json',
  keywords: [
    // خدمات التنظيف الأساسية
    'شركة نظافة بالرياض', 'أفضل شركة تنظيف الرياض', 'شركة تنظيف معتمدة الرياض',
    'خدمات النظافة المنزلية الرياض', 'شركات النظافة المعتمدة بالرياض',
    'خدمات تنظيف شاملة الرياض', 'شركات النظافة العامة بالرياض',
    'أسعار خدمات التنظيف الرياض', 'خدمة التنظيف بالساعة الرياض',
    
    // تنظيف المنازل والفلل
    'تنظيف المنازل الرياض', 'تنظيف الفلل بالرياض', 'تنظيف الشقق الرياض',
    'تنظيف الفلل الجديدة بالرياض', 'تنظيف المنازل المفروشة الرياض',
    'تنظيف ما بعد البناء الرياض', 'تنظيف فلل قبل السكن الرياض',
    
    // تنظيف متخصص
    'غسيل مكيفات سبليت الرياض', 'تنظيف المكيفات المركزية الرياض',
    'غسيل خزانات المياه الرياض', 'تنظيف وتعقيم الخزانات الرياض',
    'تنظيف واجهات المباني الرياض', 'غسيل واجهات زجاجية الرياض',
    
    // تنظيف المفروشات
    'غسيل كنب بالبخار الرياض', 'تنظيف السجاد والموكيت الرياض',
    'تنظيف المجالس العربية الرياض', 'غسيل الستائر والمراتب الرياض',
    
    // المناطق الجغرافية
    'شركة تنظيف شمال الرياض', 'شركة تنظيف شرق الرياض',
    'شركة تنظيف غرب الرياض', 'شركة تنظيف جنوب الرياض',
    'تنظيف منازل الملقا', 'تنظيف فلل العليا', 'شركة نظافة الصحافة',
    
    // عمالة ونوعية الخدمة
    'عمالة تنظيف محترفه الرياض', 'عمالة تنظيف محترفة الرياض',
    'شركة نظافة بعمالة مدربة', 'فريق تنظيف احترافي الرياض',
    
    // عقود وباقات
    'عقود نظافة شهرية الرياض', 'عقود تنظيف سنوية الرياض',
    'باقات تنظيف شاملة الرياض', 'عقود صيانة ونظافة الرياض',
    
    // خدمات خاصة
    'تنظيف القصور الفخمة الرياض', 'تنظيف الاستراحات الرياض',
    'تنظيف المساجد والمدارس الرياض', 'تنظيف المستشفيات الرياض',
    'تنظيف المكاتب والشركات الرياض', 'تنظيف المصانع الرياض'
  ],
  icons: {
    icon: [
      { url: '/logo-en.png', sizes: '192x192' },
      { url: '/logo-en.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-en.png' },
      { url: '/logo-en.png', sizes: '72x72' },
      { url: '/logo-en.png', sizes: '114x114' },
    ],
  },
  alternates: {
    canonical: 'https://getlamaaclean.com/',
    languages: {
      'ar-SA': 'https://getlamaaclean.com/',
    }
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://getlamaaclean.com/',
    title: 'شركة لمعة للنظافة - أفضل شركة تنظيف معتمدة في الرياض',
    description: 'خدمات تنظيف شاملة واحترافية في الرياض. تنظيف منازل، فلل، مكاتب، مفروشات. عمالة محترفة، أسعار تنافسية، خدمة 24/7',
    siteName: 'شركة لمعة للنظافة',
    images: [
      {
        url: '/logo-en.png',
        width: 1200,
        height: 630,
        alt: 'شركة لمعة للنظافة - خدمات تنظيف احترافية في الرياض'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة لمعة للنظافة - أفضل شركة تنظيف في الرياض',
    description: 'خدمات تنظيف شاملة في الرياض بأعلى معايير الجودة والاحتراف. تنظيف منازل، فلل، مكاتب، شركات، سجاد، وواجهات.',
    images: {
      url: '/logo-en.png',
      alt: 'شركة لمعة للنظافة - خدمات تنظيف احترافية في الرياض'
    }
  },
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'Riyadh',
    'geo.position': '24.7136;46.6753',
    'ICBM': '24.7136, 46.6753'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://getlamaaclean.com",
    "name": "شركة لمعة للنظافة",
    "alternateName": "لمعة للنظافة",
    "description": "شركة تنظيف معتمدة في الرياض تقدم خدمات نظافة شاملة للمنازل والفلل والمكاتب والمفروشات",
    "url": "https://getlamaaclean.com",
    "logo": "https://getlamaaclean.com/logo-en.png",
    "image": "https://getlamaaclean.com/logo-en.png",
    "telephone": "+966592425077",
    "email": "info@getlamaaclean.com",
    "priceRange": "150-1500 SAR",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "Cash, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الرياض",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "addressCountry": "SA",
      "postalCode": "11564"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "الرياض",
        "addressCountry": "SA"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "أحمد المحمد"
        },
        "datePublished": "2024-01-15",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "خدمة ممتازة جداً! فريق العمل محترف ومنظم. نظفوا الفلة بطريقة احترافية وانتهوا في الوقت المحدد. المواد المستخدمة آمنة وصديقة للبيئة."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات التنظيف",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنظيف المنازل والفلل",
            "description": "خدمة تنظيف شاملة للمنازل والفلل تشمل جميع الغرف والحمامات والمطابخ"
          },
          "price": "150",
          "priceCurrency": "SAR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تنظيف المفروشات",
            "description": "غسيل وتنظيف الكنب والسجاد والمجالس بالبخار"
          },
          "price": "80",
          "priceCurrency": "SAR"
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "خدمة التنظيف 24/7",
        "description": "خدمة تنظيف متاحة على مدار الساعة",
        "availabilityStarts": "2024-01-01",
        "availabilityEnds": "2024-12-31"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/lamaaclean",
      "https://www.instagram.com/lamaaclean",
      "https://twitter.com/lamaaclean"
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات التنظيف الشاملة",
    "description": "خدمات تنظيف احترافية للمنازل والفلل والمكاتب والمفروشات في الرياض",
    "provider": {
      "@type": "LocalBusiness",
      "name": "شركة لمعة للنظافة",
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
      "name": "خدمات التنظيف المتخصصة",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "تنظيف المنازل",
          "description": "تنظيف شامل للمنازل والشقق والفلل",
          "offers": {
            "@type": "Offer",
            "price": "150",
            "priceCurrency": "SAR"
          }
        },
        {
          "@type": "Service",
          "name": "تنظيف المفروشات",
          "description": "غسيل الكنب والسجاد بالبخار",
          "offers": {
            "@type": "Offer",
            "price": "80",
            "priceCurrency": "SAR"
          }
        },
        {
          "@type": "Service",
          "name": "تنظيف المكيفات",
          "description": "تنظيف وصيانة المكيفات السبليت والشباك",
          "offers": {
            "@type": "Offer",
            "price": "120",
            "priceCurrency": "SAR"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي خدمات التنظيف التي تقدمونها في الرياض؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقدم خدمات تنظيف شاملة تشمل: تنظيف المنازل والفلل والشقق، تنظيف المفروشات والكنب بالبخار، تنظيف المكاتب والشركات، تنظيف ما بعد البناء، غسيل وتنظيف الخزانات، تنظيف المكيفات، تنظيف الواجهات الزجاجية."
        }
      },
      {
        "@type": "Question",
        "name": "كم تكلفة خدمات التنظيف؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أسعارنا تنافسية: تنظيف المنازل يبدأ من 150 ريال، تنظيف الكنب من 80 ريال للقطعة، تنظيف المكيفات من 120 ريال. الأسعار تختلف حسب حجم المساحة ونوع الخدمة."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون ضماناً على خدماتكم؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم ضمان شامل لمدة 7 أيام على جميع خدماتنا. إذا لم تكن راضياً عن النتيجة، سنقوم بإعادة التنظيف مجاناً."
        }
      }
    ]
  }

  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} font-sans`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo-en.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        
        {/* Services Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17258754769"></script>
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17360926710');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WH8XQ3LM');
          `}
        </Script>

        {/* Local Business Rich Snippets */}
        <meta name="business-name" content="شركة لمعة للنظافة" />
        <meta name="business-type" content="خدمات التنظيف" />
        <meta name="business-phone" content="+966592425077" />
        <meta name="business-hours" content="24/7" />
        <meta name="business-address" content="الرياض، المملكة العربية السعودية" />
        <meta name="business-rating" content="4.9" />
        <meta name="business-review-count" content="1247" />
      </head>

      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH8XQ3LM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <a
            href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات التنظيف"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
            aria-label="تواصل عبر واتساب"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>

        {/* Call Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="tel:0592425077"
            className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            aria-label="اتصل بنا"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}