import { Button } from '@/components/ui/button'
import { ArrowLeft, Phone, Clock, Star, Shield, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: <Phone className="w-6 h-6 text-yellow-400" />,
    text: "خدمة على مدار 24 ساعة",
    bgColor: "bg-blue-900/20"
  },
  {
    icon: <Clock className="w-6 h-6 text-yellow-400" />,
    text: "خدمة تنظيف سريعة",
    bgColor: "bg-blue-800/20"
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    text: "شركة معتمدة بالرياض",
    bgColor: "bg-blue-700/20"
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-yellow-400" />,
    text: "أسعار تنافسية",
    bgColor: "bg-blue-600/20"
  }
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/cover.png" 
          alt="خدمات التنظيف الأساسية في الرياض" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-700/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right animate-slideInRight">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">شركة نظافة معتمدة بالرياض</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              خدمات النظافة المنزلية
              <span className="text-yellow-400 block mt-2">الشاملة في الرياض</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              نقدم خدمات تنظيف شاملة للمنازل والفلل والشقق والقصور بأعلى معايير الجودة، 
              مع عمالة تنظيف محترفة وأحدث تقنيات التنظيف
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 ${feature.bgColor} backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/20`}>
                  {feature.icon}
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="tel:0592425077">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg px-8 py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20">
                  احجز خدمة تنظيف الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" className="bg-blue-900/20 backdrop-blur-sm text-white border-blue-400/30 text-lg px-8 py-6 rounded-full hover:bg-blue-800/30 transition-all duration-300">
                  خدماتنا المتنوعة
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block animate-slideInLeft">
            <div className="bg-blue-900/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">+1000</div>
                  <div className="text-blue-100">عميل في الرياض</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">+10</div>
                  <div className="text-blue-100">سنوات خبرة في التنظيف</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-blue-100">خدمة تنظيف متواصلة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-blue-100">ضمان جودة التنظيف</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}