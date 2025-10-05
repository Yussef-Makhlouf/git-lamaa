import { Metadata } from 'next'
import OfficeCleaningGuide from '@/components/commercial/OfficeCleaningGuide'

export const metadata: Metadata = {
  title: 'تنظيف المكاتب والمساحات التجارية في الرياض | دليل شامل',
  description: 'دليل متخصص لتنظيف المكاتب والمساحات التجارية. نصائح احترافية لخلق بيئة عمل صحية ومنتجة مع أفضل الممارسات والتقنيات الحديثة.',
  keywords: 'تنظيف المكاتب, تنظيف تجاري, نظافة مكان العمل, تنظيف الشركات, بيئة عمل صحية',
  openGraph: {
    images: ['/office-cleaning.jpg'],
    type: 'article',
    locale: 'ar_SA',
  },
}

export default function OfficeCleaningPage() {
  return (
    <main>
      <OfficeCleaningGuide />
    </main>
  )
}
