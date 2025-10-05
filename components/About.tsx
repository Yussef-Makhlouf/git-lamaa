import Image from 'next/image'
import { Award, Users, Clock, ArrowRight, Shield, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const features = [
  { 
    icon: <Users className="w-6 h-6 text-yellow-400" />,
    title: 'عمالة تنظيف محترفة',
    description: 'فريق متخصص بالرياض'
  },
  { 
    icon: <Award className="w-6 h-6 text-yellow-400" />,
    title: 'شركة نظافة معتمدة',
    description: 'خدمات تنظيف مرخصة'
  },
  { 
    icon: <Clock className="w-6 h-6 text-yellow-400" />,
    title: 'خدمة تنظيف بالساعة',
    description: 'متوفرة على مدار اليوم'
  },
  { 
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    title: 'ضمان جودة الخدمة',
    description: 'تنظيف شامل ومتكامل'
  },
  { 
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    title: 'أسعار تنافسية',
    description: 'باقات تنظيف متنوعة'
  },
  { 
    icon: <CheckCircle className="w-6 h-6 text-yellow-400" />,
    title: 'تغطية كاملة للرياض',
    description: 'شمال وجنوب وشرق وغرب'
  }
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-900 opacity-10"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/logo-en.png" 
                alt="شركة تنظيف معتمدة بالرياض" 
                width={600} 
                height={400} 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-blue-900">10<span className="text-yellow-400">+</span></div>
              <p className="text-blue-600">سنوات خبرة في التنظيف</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">شركة نظافة معتمدة
                <span className="text-yellow-400 block">بخدمات تنظيف شاملة في الرياض</span>
              </h2>
              <p className="text-lg text-blue-600/80 leading-relaxed">
                نحن من أفضل شركات النظافة العامة بالرياض، نقدم خدمات تنظيف متكاملة للمنازل والفلل والشقق والقصور. 
                نتميز بعمالة محترفه محترفة وأحدث تقنيات التنظيف الحديثة لضمان أعلى مستويات الجودة بأسعار تنافسية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-blue-600/80">{feature.description}</p>
                </div>
              ))}
            </div>

         <Link href="tel:0592425077" className="mt-8 inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-3 px-8 rounded-full transition-colors group">
              احجز خدمة تنظيف الآن
              <ArrowRight className="mr-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
         </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
