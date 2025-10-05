import { Award, Clock, ThumbsUp, Users, Star, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  { 
    icon: <Clock className="h-16 w-16 text-accent" />,
    title: 'خدمة على مدار الساعة',
    description: 'نقدم خدماتنا 24/7 لتلبية احتياجاتكم في أي وقت',
    bgColor: 'bg-blue-50'
  },
  { 
    icon: <ThumbsUp className="h-16 w-16 text-primary" />,
    title: 'جودة عالية',
    description: 'نستخدم أحدث التقنيات والمعدات لضمان أفضل النتائج',
    bgColor: 'bg-green-50'
  },
  { 
    icon: <Users className="h-16 w-16 text-secondary" />,
    title: 'فريق متخصص',
    description: 'لدينا فريق من المحترفين المدربين على أعلى مستوى',
    bgColor: 'bg-yellow-50'
  },
  { 
    icon: <Award className="h-16 w-16 text-accent" />,
    title: 'ضمان الرضا',
    description: 'نقدم ضمانًا على جميع خدماتنا لراحة بالكم',
    bgColor: 'bg-purple-50'
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-900 opacity-10"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5" />
            لماذا نحن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">ما يميزنا عن غيرنا</h2>
          <p className="text-lg text-blue-600/80 mt-4">نقدم أفضل الخدمات بأعلى معايير الجودة لضمان رضا عملائنا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`${reason.bgColor} rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group`}
            >
              <div className="relative mb-6">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/30 transition-colors"></div>
                <div className="relative z-10">
                  {reason.icon}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{reason.title}</h3>
                <p className="text-blue-600/80 leading-relaxed">{reason.description}</p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-yellow-400/30 rounded-full group-hover:bg-yellow-400/50 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
        <Link href="tel:0592425077">
        <button className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full transition-colors group">
            تواصل معنا الآن
            <ArrowLeft className="mr-2 w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          </button>
        </Link>
        </div>
      </div>
    </section>
  )
}