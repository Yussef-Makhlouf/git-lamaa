import { Star, MapPin, Calendar, Award, Shield, Clock, CheckCircle, Phone } from 'lucide-react'

const testimonials = [
  {
    name: "أحمد الراشد",
    location: "حي الملز، الرياض",
    service: "تنظيف فيلا شاملة",
    rating: 5,
    comment: "خدمة رائعة جداً وفريق عمل محترف ومتعاون. تم تنظيف الفيلا بشكل مثالي والتزموا بالمواعيد المحددة. أنصح بهم بقوة وسأتعامل معهم مرة أخرى.",
    date: "منذ أسبوعين",
    image: "/cover.png"
  },
  {
    name: "فاطمة العتيبي",
    location: "حي النرجس، الرياض",
    service: "تنظيف مفروشات بالبخار",
    rating: 5,
    comment: "لم أتوقع أن النتيجة ستكون بهذا الروعة! الكنب عاد كالجديد تماماً وتمت إزالة جميع البقع المستعصية. الفريق مدرب جداً ويستخدم أحدث المعدات.",
    date: "منذ 3 أسابيع",
    image: "/cover.png"
  },
  {
    name: "محمد الزهراني",
    location: "حي الياسمين، الرياض",
    service: "تنظيف مكيفات ومنزل",
    rating: 5,
    comment: "شركة محترمة جداً وصادقة في التعامل. تم تنظيف المكيفات بشكل ممتاز وحسيت بالفرق فوراً في جودة الهواء. سعر معقول وخدمة ممتازة.",
    date: "منذ شهر",
    image: "/cover.png"
  },
  {
    name: "نورا القحطاني",
    location: "حي الأندلس، الرياض",
    service: "تنظيف منزل قبل السكن",
    rating: 5,
    comment: "كانت تجربة رائعة من البداية للنهاية. الفريق وصل في الوقت المحدد وعمل بجد واجتهاد. المنزل أصبح نظيفاً ومعقماً بشكل مثالي قبل انتقالنا إليه.",
    date: "منذ شهر ونصف",
    image: "/cover.png"
  },
  {
    name: "عبدالرحمن الدوسري",
    location: "حي الروضة، الرياض",
    service: "تنظيف استراحة كاملة",
    rating: 5,
    comment: "فريق عمل ممتاز وخدمة تستحق أعلى تقييم. نظفوا الاستراحة بشكل شامل وتعاملوا مع كل شيء بحرفية عالية. أصبحت الاستراحة جاهزة للضيوف.",
    date: "منذ شهرين",
    image: "/cover.png"
  },
  {
    name: "ريما الفهد",
    location: "حي الرحاب، الرياض",
    service: "تنظيف مفروشات وموكيت",
    rating: 5,
    comment: "نتائج مذهلة فعلاً! الموكيت والمفروشات عادت كما لو كانت جديدة. الفريق احترافي جداً ويعرف عمله بإتقان. تجربة ممتازة وسأكررها بالتأكيد.",
    date: "منذ 3 أشهر",
    image: "/cover.png"
  }
]

const stats = [
  {
    icon: CheckCircle,
    number: "1000+",
    label: "عميل راضٍ",
    color: "text-green-500"
  },
  {
    icon: Star,
    number: "5000+",
    label: "خدمة منجزة",
    color: "text-yellow-500"
  },
  {
    icon: Award,
    number: "4.9/5",
    label: "تقييم العملاء",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    number: "100%",
    label: "ضمان الجودة",
    color: "text-purple-500"
  }
]

const trustIndicators = [
  {
    icon: Shield,
    title: "شركة مرخصة ومعتمدة",
    description: "مرخصة رسمياً من الجهات الحكومية المختصة"
  },
  {
    icon: Award,
    title: "ضمان الجودة والإتقان",
    description: "ضمان شامل على جميع خدماتنا مع إمكانية الإعادة مجاناً"
  },
  {
    icon: Clock,
    title: "خدمة 24/7 على مدار الساعة",
    description: "متاحون لخدمتكم في أي وقت وأي يوم من أيام الأسبوع"
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5" />
            شهادات العملاء وآراء المستفيدين من خدماتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ماذا يقول عملاؤنا عن خدماتنا؟
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة عملائنا وتقديرهم لجودة خدماتنا المتميزة. اقرأ تجارب حقيقية من عملاء راضين عن خدماتنا في جميع أنحاء الرياض
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-blue-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-blue-100">
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-blue-700 font-medium text-sm">({testimonial.rating}/5)</span>
              </div>

                             {/* Comment */}
               <p className="text-blue-800 mb-4 leading-relaxed text-sm">
                 &ldquo;{testimonial.comment}&rdquo;
               </p>

              {/* Service */}
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <span className="text-blue-800 font-medium text-sm">خدمة: {testimonial.service}</span>
              </div>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-sm">{testimonial.name}</h4>
                    <div className="flex items-center gap-1 text-blue-700 text-xs">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-xs">
                  <Calendar className="w-3 h-3" />
                  {testimonial.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{indicator.title}</h3>
              <p className="text-blue-700 text-sm">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 text-white">انضم إلى آلاف العملاء الراضين</h3>
            <p className="text-xl mb-6 text-blue-100">
              احصل على خدمة تنظيف استثنائية واكتشف لماذا يثق بنا أكثر من 1000 عميل في الرياض
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
                href="https://wa.me/966592425077?text=مرحباً، أرغب في الحصول على خدمة تنظيف متميزة في الرياض" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full transition-colors shadow-lg font-bold text-lg"
              >
                تواصل واتساب
              </a>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              🌟 تقييم 4.9/5 من العملاء | 🏆 شركة معتمدة ومرخصة | 💯 ضمان الجودة | ⚡ استجابة فورية
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 