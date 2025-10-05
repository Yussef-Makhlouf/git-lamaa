import { Home, Building2, Building, Star, ArrowRight, Droplets, Sofa, Warehouse, Wind, CheckCircle, Clock, Award, Shield, Phone } from 'lucide-react'
import Image from 'next/image'

const services = [
  { 
    title: 'تنظيف المنازل والفلل',
    description: 'خدمات تنظيف شاملة للمنازل والفلل والشقق بأفضل المعدات والمنظفات المتخصصة مع ضمان النظافة العميقة',
    icon: Home,
    image: '/cover.png',
    features: ['تنظيف شقق وأدوار كاملة', 'تنظيف فلل قبل السكن', 'تنظيف منازل مفروشة بعناية فائقة'],
    process: [
      'فحص شامل للمنطقة وتقييم احترافي',
      'استخدام مواد تنظيف آمنة ومعتمدة دولياً',
      'تنظيف عميق لجميع الأسطح والزوايا المخفية',
      'تطهير وتعقيم شامل بأحدث التقنيات',
      'فحص نهائي وضمان الجودة المطلقة'
    ],
    benefits: [
      'توفير الوقت والجهد مع نتائج مثالية',
      'نتائج احترافية مضمونة 100%',
      'مواد آمنة على الصحة والأطفال',
      'فريق عمل مدرب ومؤهل بخبرة عالية'
    ],
    duration: '2-4 ساعات حسب المساحة',
    specialty: 'متخصصون في التنظيف العميق'
  },
  { 
    title: 'تنظيف المفروشات والأثاث',
    description: 'خدمات غسيل وتنظيف الكنب والسجاد والموكيت والستائر بأحدث تقنيات البخار والتنظيف الجاف المتطورة',
    icon: Sofa,
    image: '/cover.png',
    features: ['غسيل كنب بالبخار الحراري', 'إزالة البقع المستعصية نهائياً', 'تنظيف مجالس عربية فاخرة'],
    process: [
      'فحص نوع القماش وطبيعة البقع بدقة',
      'اختيار تقنية التنظيف المناسبة علمياً',
      'تطبيق المنظفات المتخصصة المعتمدة',
      'استخدام تقنية البخار الساخن المتقدمة',
      'تجفيف سريع وآمن مع التعطير'
    ],
    benefits: [
      'إزالة 99% من البقع والأوساخ',
      'القضاء التام على الحشرات والعث',
      'تطهير عميق للأقمشة والألياف',
      'عودة النضارة واللمعان كالجديد'
    ],
    duration: '1-2 ساعة للقطعة',
    specialty: 'خبراء تنظيف المفروشات بالبخار'
  },
  { 
    title: 'خدمات تنظيف متخصصة',
    description: 'خدمات تنظيف وغسيل المكيفات وتنظيف الخزانات وتنظيف ما بعد البناء والترميم بمعايير دولية',
    icon: Wind,
    image: '/cover.png',
    features: ['غسيل مكيفات بتقنية متقدمة', 'تنظيف خزانات مع التعقيم', 'تنظيف ما بعد البناء احترافي'],
    process: [
      'تقييم فني شامل للمعدات والأنظمة',
      'تفكيك آمن للمكونات بحرفية عالية',
      'تنظيف عميق بالمواد المخصصة المعتمدة',
      'فحص وصيانة أساسية شاملة',
      'تركيب وتشغيل تجريبي مع الضمان'
    ],
    benefits: [
      'تحسين جودة الهواء بنسبة كبيرة',
      'توفير ملحوظ في فواتير الكهرباء',
      'إطالة عمر المعدات والأجهزة',
      'ضمان الأداء الأمثل والكفاءة العالية'
    ],
    duration: '2-3 ساعات للوحدة',
    specialty: 'تقنيون متخصصون معتمدون'
  },
  { 
    title: 'تنظيف المنشآت والمباني',
    description: 'خدمات تنظيف احترافية للمكاتب والشركات والمدارس والمستشفيات والمساجد بعقود صيانة دورية شاملة',
    icon: Building,
    image: '/cover.png',
    features: ['تنظيف مكاتب وشركات بمعايير عالمية', 'تنظيف مساجد ومدارس متخصص', 'عقود نظافة دورية مرنة'],
    process: [
      'وضع خطة تنظيف مخصصة ومفصلة',
      'تحديد جداول عمل مناسبة ومرنة',
      'تنظيف شامل وتطهير مستمر يومياً',
      'صيانة دورية لجميع المرافق',
      'تقارير دورية مفصلة عن الأداء'
    ],
    benefits: [
      'بيئة عمل صحية وآمنة ومنتجة',
      'انطباع إيجابي قوي للعملاء والزوار',
      'الالتزام الكامل بمعايير الصحة',
      'توفير كبير في تكلفة العمالة الداخلية'
    ],
    duration: 'حسب حجم المنشأة',
    specialty: 'متخصصون في المنشآت الكبيرة'
  },
  { 
    title: 'تنظيف الواجهات والزجاج',
    description: 'خدمات تنظيف متخصصة لواجهات المباني والأبراج الزجاجية وواجهات الحجر والكلادينج بمعدات احترافية متطورة',
    icon: Building2,
    image: '/cover.png',
    features: ['تنظيف واجهات حجر طبيعي', 'تنظيف واجهات كلادينج حديثة', 'غسيل واجهات زجاجية شاهقة'],
    process: [
      'فحص أمني شامل للمنطقة والمحيط',
      'تجهيز معدات الأمان والحماية المتقدمة',
      'استخدام تقنيات تنظيف متخصصة ومبتكرة',
      'معالجة الأسطح بمواد الحماية العالية',
      'فحص نهائي شامل وضمان النظافة المثالية'
    ],
    benefits: [
      'مظهر جميل وجذاب يعكس الهوية',
      'حماية طويلة المدى من عوامل الطقس',
      'رفع القيمة العقارية بشكل ملحوظ',
      'امتثال كامل لمعايير السلامة الدولية'
    ],
    duration: '1-3 أيام حسب المساحة',
    specialty: 'خبراء تنظيف الارتفاعات العالية'
  },
  { 
    title: 'تنظيف القصور والاستراحات',
    description: 'خدمات تنظيف متكاملة وفخمة للقصور والاستراحات وبيوت الشعر مع خدمات إضافية مميزة وعناية فائقة',
    icon: Warehouse,
    image: '/cover.png',
    features: ['تنظيف قصور فخمة بعناية خاصة', 'تنظيف استراحات ومنتجعات', 'تنظيف بيوت شعر تراثية'],
    process: [
      'تقييم شامل للمساحات الكبيرة والمعقدة',
      'وضع خطة تنظيف مخصصة ومرنة',
      'تنظيف متدرج لجميع الأقسام بدقة',
      'عناية خاصة فائقة بالتحف والأثاث الثمين',
      'خدمات إضافية حسب المتطلبات الخاصة'
    ],
    benefits: [
      'خدمة VIP متميزة وشخصية',
      'فريق عمل متخصص ومدرب خصيصاً',
      'مرونة كاملة في المواعيد والتوقيت',
      'سرية وخصوصية مطلقة ومضمونة'
    ],
    duration: '4-8 ساعات حسب المساحة',
    specialty: 'خدمات VIP للعقارات الفاخرة'
  },
  { 
    title: 'تقنيات وأساليب التنظيف الحديثة',
    description: 'خدمات التنظيف بأحدث التقنيات العالمية: البخار والرغوة الجافة والأوزون والمعقمات الطبية المتقدمة',
    icon: Droplets,
    image: '/cover.png',
    features: ['التنظيف بالبخار الحراري المتقدم', 'التنظيف بالرغوة الجافة الآمنة', 'التعقيم بالمعقمات الطبية المعتمدة'],
    process: [
      'تحديد التقنية الأنسب علمياً',
      'تجهيز المعدات المتخصصة الحديثة',
      'تطبيق العلاج المناسب بدقة عالية',
      'مراقبة مستمرة للنتائج والتطوير',
      'ضمان الفعالية والأمان المطلق'
    ],
    benefits: [
      'تنظيف أعمق وأكثر فعالية من التقليدي',
      'صديق للبيئة ومستدام بيئياً',
      'آمن تماماً على الصحة والأطفال',
      'نتائج طويلة المدى ومستدامة'
    ],
    duration: '1-3 ساعات حسب الحجم',
    specialty: 'رواد التقنيات الحديثة في التنظيف'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-900 opacity-10"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5" />
            شركة نظافة معتمدة بالرياض - خدمات احترافية متكاملة على أعلى مستوى
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            خدمات التنظيف الشاملة والمتطورة في الرياض
          </h2>
          <p className="text-xl text-blue-700 max-w-4xl mx-auto leading-relaxed">
            نقدم خدمات تنظيف متكاملة بأحدث التقنيات والمعدات المتطورة عالمياً، مع فريق عمل محترف يضمن أعلى معايير الجودة والنظافة لمنزلك أو مؤسستك بخبرة تزيد عن 10 سنوات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-blue-100">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title + " الرياض - شركة لمعة للنظافة"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-yellow-400/20 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute top-4 left-4 bg-blue-900/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-yellow-400 text-sm font-medium">الرياض</span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-blue-700 text-sm leading-relaxed mb-4">{service.description}</p>
                
                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    الخدمات المتاحة:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-blue-700 text-sm">
                        <ArrowRight className="w-3 h-3 ml-2 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Process */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    خطوات التنفيذ:
                  </h4>
                  <div className="space-y-1">
                    {service.process.slice(0, 3).map((step, idx) => (
                      <div key={idx} className="flex items-start text-blue-700 text-xs">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold ml-2 mt-0.5">
                          {idx + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    المميزات:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 4).map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-blue-700 text-xs">
                        <Shield className="w-3 h-3 ml-1 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration and Specialty */}
                <div className="bg-blue-50 p-3 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 text-sm font-medium">المدة المتوقعة:</span>
                    <span className="text-blue-900 font-bold text-sm">{service.duration}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-blue-800 font-bold text-xs bg-yellow-100 px-2 py-1 rounded-full">
                      {service.specialty}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2 pt-2">
                  <a 
                    href={`https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمة ${service.title} في الرياض`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-xl transition-colors text-sm font-medium text-center"
                  >
                    واتساب
                  </a>
                  <a 
                    href={`tel:0592425077`} 
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-3 rounded-xl transition-colors text-sm font-medium text-center"
                  >
                    اتصل الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Content Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            لماذا تختار شركة لمعة للنظافة في الرياض؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">خبرة أكثر من 10 سنوات</h4>
              <p className="text-blue-700">
                نمتلك خبرة واسعة ومتراكمة في جميع أنواع خدمات التنظيف بالرياض، مما يضمن تقديم أفضل النتائج المطلوبة
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-2xl">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">معدات حديثة ومتطورة</h4>
              <p className="text-blue-700">
                نستخدم أحدث التقنيات والمعدات المتطورة عالمياً في التنظيف لضمان أعلى مستويات النظافة والجودة
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">ضمان الجودة 100%</h4>
              <p className="text-blue-700">
                نقدم ضمان شامل على جميع خدماتنا مع إمكانية إعادة التنظيف مجاناً إذا لم تحصل على النتيجة المطلوبة
              </p>
            </div>
          </div>
        </div>
        
        {/* Main CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 text-white">احصل على خدمة تنظيف شاملة الآن</h3>
            <p className="text-xl mb-6 text-blue-100">
              خدمات تنظيف احترافية متاحة على مدار الساعة في جميع أنحاء الرياض - استجابة فورية مضمونة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0592425077" 
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full transition-colors shadow-lg font-bold text-lg"
              >
                <Phone className="ml-2 w-5 h-5" />
                اتصل الآن: 0592425077
              </a>
              <a 
                href="https://wa.me/966592425077?text=أرغب في الحصول على خدمة تنظيف شاملة في الرياض" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full transition-colors shadow-lg font-bold text-lg"
              >
                تواصل واتساب
                <ArrowRight className="mr-2 w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-blue-100 text-sm">
              🏆 أفضل شركة نظافة في الرياض | 🛡️ مرخصة ومعتمدة | ⏰ خدمة 24/7 | 💎 جودة استثنائية
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
