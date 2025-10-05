import { Metadata } from 'next'
import MosqueCleaningGuide from '../../../../components/seasonal/MosqueCleaningGuide'

export const metadata: Metadata = {
  title: 'دليل تنظيف المساجد والمصليات في الرياض | إرشادات شاملة',
  description: 'دليل متخصص لتنظيف وصيانة المساجد والمصليات. نصائح عملية للحفاظ على طهارة وقداسة بيوت الله مع احترام الآداب الإسلامية.',
  keywords: 'تنظيف المساجد, صيانة المصليات, نظافة بيوت الله, تنظيف السجاد في المساجد, آداب تنظيف المساجد',
  openGraph: {
    images: ['/clean-home.png'],
    type: 'article',
    locale: 'ar_SA',
  },
}

export default function MosqueCleaningPage() {
  return (
    <main>
      <MosqueCleaningGuide />
    </main>
  )
}
