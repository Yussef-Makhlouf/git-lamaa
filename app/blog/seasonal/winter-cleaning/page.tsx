import { Metadata } from 'next'
import WinterCleaningGuide from '../../../../components/seasonal/WinterCleaningGuide'

export const metadata: Metadata = {
  title: 'تنظيف المنزل في الشتاء بالرياض 2025 | دليل العناية الشتوية + نصائح لمواجهة الرطوبة والبرد',
  description: 'احمِ منزلك من الرطوبة، العفن، والغبار في الشتاء! دليل خبير لتنظيف وصيانة المنزل خلال فصل الشتاء في الرياض، مع حلول عملية لتحسين التدفئة، تجفيف السجاد، وحماية الأثاث. أو احجز خدمة تنظيف شتوي احترافية من لمعة اليوم.',
  keywords: [
    'تنظيف المنزل في الشتاء بالرياض',
    'العناية الشتوية بالمنزل',
    'مكافحة الرطوبة في الشتاء',
    'تنظيف موسمي شتوي',
    'حماية المنزل من العفن',
    'شركة تنظيف شتوي بالرياض',
    'نصائح تنظيف منزل الشتاء',
    
    'كيف أمنع تكاثف الماء على النوافذ',
    'تجفيف السجاد في الشتاء',
    'لمعة لخدمات التنظيف'
  ],
  openGraph: {
    title: 'دليل تنظيف المنزل في الشتاء بالرياض 2025 | لمعة',
    description: 'الشتاء جاي... هل منزلك مستعد؟ اكتشف نصائح الخبراء + خدمة تنظيف شتوي من لمعة.',
    images: [
      {
        url: '/clean-home.png',
        width: 1200,
        height: 630,
        alt: 'تنظيف منزل شتوي في الرياض - شركة لمعة للنظافة',
      },
    ],
    type: 'article',
    locale: 'ar_SA',
    siteName: 'لمعة - خدمات التنظيف الاحترافية',
  },
  alternates: {
    canonical: 'https://getlamaaclean.com/blog/seasonal/winter-cleaning',
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
    title: 'تنظيف المنزل في الشتاء بالرياض | لمعة',
    description: 'دليل شامل لحماية منزلك من الرطوبة والعفن في الشتاء مع لمعة.',
    images: ['/winter-cleaning-riyadh.jpg'],
  },
}

export default function WinterCleaningPage() {
  return (
    <main>
      <WinterCleaningGuide />
    </main>
  )
}