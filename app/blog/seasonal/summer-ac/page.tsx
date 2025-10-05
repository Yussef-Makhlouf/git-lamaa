import { Metadata } from 'next'
import SummerACGuide from '@/components/seasonal/SummerACGuide'

export const metadata: Metadata = {
  title: 'تنظيف المكيفات قبل الصيف في الرياض | لمعة للنظافة',
  description: 'دليل شامل لتنظيف وصيانة مكيفات الهواء قبل فصل الصيف في الرياض. نصائح خبراء لمعة للحفاظ على كفاءة المكيفات.',
  keywords: 'تنظيف المكيفات الصيفية, صيانة مكيفات الرياض, تنظيف موسمي للمكيفات',
  openGraph: {
    images: ['/clean-home.png'],
  },
}

export default function SummerACPage() {
  return (
    <main>
      <SummerACGuide />
    </main>
  )
}
