import { Metadata } from 'next'
import RamadanCleaningGuide from '../../../../components/seasonal/RamadanCleaningGuide'
export const metadata: Metadata = {
  title: 'تنظيف المنزل قبل رمضان في الرياض 2025 | دليل شامل + خدمة احترافية من لمعة',
  description: 'استعد لرمضان بمنزل نظيف ومريح! دليل خطوة بخطوة لتنظيف المنزل قبل رمضان في الرياض، مع نصائح خبراء وخدمة تنظيف موسمي احترافية من شركة لمعة. توفير الوقت، جودة عالية، ونتائج تدوم طوال الشهر الكريم.',
  keywords: [
    'تنظيف المنزل قبل رمضان في الرياض',
    'شركة تنظيف منازل بالرياض',
    'خدمة تنظيف موسمي رمضان',
    'تحضير البيت لرمضان',
    'تنظيف مطبخ رمضان',
    'أفضل شركة نظافة بالرياض',
    'تنظيف سجاد وستائر قبل رمضان',
    'دليل تنظيف منزلي رمضاني',
    'تنظيف عميق قبل الشهر الكريم',
    'لمعة لخدمات التنظيف'
  ],
  openGraph: {
    title: 'تنظيف المنزل قبل رمضان في الرياض 2025 | لمعة',
    description: 'منزل نظيف = قلب مطمئن في رمضان. اكتشف دليلنا الشامل + احجز خدمة تنظيف احترافية من لمعة اليوم!',
    images: [
      {
        url: '/clean-home.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف منزل قبل رمضان في الرياض - شركة لمعة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://getlamaaclean.com/blog/seasonal/ramadan-cleaning',
  },
  robots: {
    index: true,
    follow: true,
  },
}
export default function RamadanCleaningPage() {
  return (
    <main>
      <RamadanCleaningGuide />
    </main>
  )
}
