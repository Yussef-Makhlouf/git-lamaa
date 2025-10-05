import { Metadata } from 'next'
import EidCleaningGuide from '../../../../components/seasonal/EidCleaningGuide'

export const metadata: Metadata = {
  title: 'تنظيف المنزل للعيد في الرياض 2025 | دليل التحضير الشامل + خدمة سريعة من لمعة',
  description: 'استعد لعيد الفطر أو الأضحى بمنزل لامع وجاهز للضيوف! دليل خبير لتنظيف المنزل قبل العيد في الرياض، مع نصائح ذكية لترتيب المطبخ، غرف الضيوف، والحمامات. أو احجز خدمة تنظيف عيد احترافية من لمعة ووفّر وقتك للاحتفال مع العائلة.',
  keywords: [
    'تنظيف المنزل للعيد في الرياض',
    'تحضير البيت للعيد',
    'شركة تنظيف عيد بالرياض',
    'تنظيف قبل العيد الفطر',
    'استقبال الضيوف في العيد',
    'ترتيب المنزل لعيد الأضحى',
    'أفضل شركة نظافة للعيد بالرياض',
    'تنظيف سريع قبل العيد',
    'نصائح تنظيف منزل العيد',
    'لمعة لخدمات التنظيف'
  ],
  openGraph: {
    title: 'دليل تنظيف المنزل للعيد في الرياض 2025 | لمعة',
    description: 'منزل نظيف = عيد مبارك! اكتشف خطوات التحضير الذكية + احجز خدمة تنظيف عيد احترافية من لمعة اليوم.',
    images: [
      {
        url: '/clean-home.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف منزل العيد في الرياض - شركة لمعة للنظافة',
      },
    ],
    type: 'article',
    locale: 'ar_SA',
    siteName: 'لمعة - خدمات التنظيف الاحترافية',
  },
  alternates: {
    canonical: 'https://getlamaaclean.com/blog/seasonal/eid-cleaning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف المنزل للعيد في الرياض | لمعة',
    description: 'استعد للعيد بمنزل نظيف وجاهز! دليل + خدمة من لمعة.',
    images: ['/eid-cleaning-riyadh.jpg'],
  },
}

export default function EidCleaningPage() {
  return (
    <main>
      <EidCleaningGuide />
    </main>
  )
}
