"use client"
import { Plus, Minus, HelpCircle, Phone, MessageCircle, Mail, Clock, Shield, Award, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const faqData = [
  {
    category: "الخدمات العامة",
    icon: HelpCircle,
    questions: [
      {
        question: "ما هي الخدمات التي تقدمها شركة لمعة للنظافة؟",
        answer: "نقدم خدمات تنظيف شاملة تشمل: تنظيف المنازل والفلل والشقق، تنظيف المفروشات والكنب بالبخار، تنظيف المكيفات والخزانات، تنظيف المنشآت والمكاتب، تنظيف الواجهات الزجاجية والحجرية، تنظيف القصور والاستراحات، بالإضافة إلى الخدمات المتخصصة مثل تنظيف ما بعد البناء والتعقيم الشامل."
      },
      {
        question: "هل تقدمون خدمات في جميع أنحاء الرياض؟",
        answer: "نعم، نقدم خدماتنا في جميع أحياء الرياض شاملة: الملز، النرجس، الياسمين، الأندلس، الروضة، الرحاب، العليا، الملقا، الحمراء، الربوة، وجميع المناطق الأخرى. فريقنا مدرب للوصول إلى جميع المناطق مع ضمان الجودة العالية."
      },
      {
        question: "كم يستغرق الوصول إليكم بعد الاتصال؟",
        answer: "نحن نلتزم بالاستجابة السريعة، حيث يمكننا الوصول إليكم خلال 2-4 ساعات من الاتصال في الحالات العادية، وخلال ساعة واحدة في الحالات الطارئة. نعمل على مدار الساعة طوال أيام الأسبوع لضمان خدمة عملائنا."
      }
    ]
  },
  {
    category: "الجودة والضمان",
    icon: Shield,
    questions: [
      {
        question: "هل تضمنون جودة الخدمة؟",
        answer: "نعم، نقدم ضمان شامل على جميع خدماتنا. إذا لم تكن راضياً عن مستوى النظافة، سنقوم بإعادة الخدمة مجاناً حتى تحصل على النتيجة المطلوبة. جودة الخدمة هي أولويتنا الأولى."
      },
      {
        question: "ما هي المعدات والمواد التي تستخدمونها؟",
        answer: "نستخدم أحدث المعدات المتطورة عالمياً مثل أجهزة البخار الحراري، مكائن التنظيف بالضغط العالي، ومعدات التعقيم المتقدمة. جميع المواد التي نستخدمها آمنة ومعتمدة دولياً، وصديقة للبيئة وآمنة على الأطفال والحيوانات الأليفة."
      },
      {
        question: "هل فريق العمل مؤهل ومدرب؟",
        answer: "فريقنا مكون من متخصصين مدربين بأعلى المعايير العالمية، حاصلين على شهادات في مجال التنظيف والتعقيم. جميع موظفينا خضعوا للتدريب المكثف وتم فحصهم أمنياً لضمان الثقة والأمان."
      }
    ]
  },
  {
    category: "الأمان والثقة",
    icon: Award,
    questions: [
      {
        question: "هل الشركة مرخصة ومعتمدة؟",
        answer: "نعم، شركة لمعة للنظافة مرخصة بالكامل من الغرفة التجارية بالرياض ووزارة التجارة. نحن معتمدون من الجهات الحكومية المختصة ونلتزم بجميع المعايير المطلوبة لضمان تقديم خدمة قانونية وآمنة."
      },
      {
        question: "هل تقدمون تأمين على الممتلكات أثناء التنظيف؟",
        answer: "نعم، نحن مؤمنون بالكامل لحماية ممتلكاتكم أثناء التنظيف. في الحالات النادرة جداً لحدوث أي ضرر، سيتم تعويضكم بالكامل. كما أن فريقنا مدرب على التعامل مع جميع أنواع الأثاث والممتلكات الثمينة بعناية فائقة."
      },
      {
        question: "كيف يمكنني التأكد من جودة الخدمة قبل الحجز؟",
        answer: "يمكنك قراءة تقييمات عملائنا السابقين على موقعنا، كما يمكنك طلب معاينة مجانية قبل البدء في الخدمة. نحن واثقون من جودة خدماتنا ولدينا أكثر من 1000 عميل راضٍ في الرياض."
      }
    ]
  },
  {
    category: "المواعيد والحجز",
    icon: Clock,
    questions: [
      {
        question: "كيف يمكنني حجز موعد؟",
        answer: "يمكنك حجز موعد بسهولة عبر الاتصال المباشر على 0592425077 أو عبر واتساب. خدمة العملاء متاحة 24/7 لتلقي طلباتكم وتحديد الموعد المناسب لكم. كما يمكنك إرسال رسالة نصية أو بريد إلكتروني وسنتواصل معك فوراً."
      },
      {
        question: "هل يمكن تحديد موعد في نفس اليوم؟",
        answer: "نعم، في معظم الحالات يمكننا تقديم الخدمة في نفس اليوم حسب توفر الفريق. نحن نعمل على مدار الساعة لضمان تلبية احتياجاتكم العاجلة، خاصة في الحالات الطارئة."
      },
      {
        question: "هل يمكن إعادة جدولة الموعد؟",
        answer: "بالطبع، يمكنكم إعادة جدولة الموعد مجاناً بإشعار مسبق لا يقل عن 3 ساعات. نحن نتفهم أن الظروف قد تتغير ونحن مرنون في التعامل مع جميع طلبات التغيير."
      }
    ]
  },
  {
    category: "الخدمات المتخصصة",
    icon: CheckCircle,
    questions: [
      {
        question: "هل تقدمون خدمات تنظيف بعد البناء؟",
        answer: "نعم، نتخصص في تنظيف ما بعد البناء والترميم. نقوم بإزالة جميع الأتربة والأوساخ والبقايا الناتجة عن أعمال البناء باستخدام معدات متخصصة، مما يجعل المكان جاهزاً للسكن أو الاستخدام فوراً."
      },
      {
        question: "هل تقومون بتنظيف المكيفات والخزانات؟",
        answer: "نعم، نقدم خدمات تنظيف وصيانة المكيفات بجميع أنواعها (سبليت، شباك، مركزي) باستخدام تقنيات متقدمة. كما نقوم بتنظيف وتعقيم خزانات المياه مع إصدار شهادة تنظيف معتمدة."
      },
      {
        question: "هل تقدمون خدمات تنظيف للمنشآت الكبيرة؟",
        answer: "نعم، نقدم خدمات تنظيف شاملة للمنشآت الكبيرة مثل المكاتب والشركات والمدارس والمستشفيات والمساجد. نضع خطط تنظيف مخصصة لكل منشأة مع إمكانية التعاقد الشهري أو السنوي."
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5" />
            الأسئلة الشائعة - إجابات شاملة لجميع استفساراتكم
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            الأسئلة الشائعة حول خدمات التنظيف
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            نجيب على جميع الأسئلة التي تدور في ذهنكم حول خدماتنا وطرق العمل لضمان حصولكم على أفضل تجربة تنظيف في الرياض
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-blue-100">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <category.icon className="h-7 w-7 text-yellow-400" />
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openItems[`${categoryIndex}-${questionIndex}`]
                    
                    return (
                      <div key={questionIndex} className="border border-blue-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <span className="font-bold text-blue-900 text-right flex-1 ml-4">
                            {item.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <Minus className="h-5 w-5 text-blue-600" />
                            ) : (
                              <Plus className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="p-4 bg-white border-t border-blue-100">
                            <p className="text-blue-800 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-white">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-xl text-blue-100 mb-6">
              تواصل معنا مباشرة وسنجيب على جميع استفساراتكم في أسرع وقت ممكن
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">واتساب</h4>
              <p className="text-blue-100 mb-4">تواصل معنا فوراً عبر واتساب</p>
              <a 
                href="https://wa.me/966592425077?text=مرحباً، لدي سؤال حول خدمات التنظيف" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors font-medium"
              >
                محادثة واتساب
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">اتصال مباشر</h4>
              <p className="text-blue-100 mb-4">خدمة العملاء 24/7</p>
              <a 
                href="tel:0592425077"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded-full transition-colors font-medium"
              >
                0592425077
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">البريد الإلكتروني</h4>
              <p className="text-blue-100 mb-4">للاستفسارات المفصلة</p>
              <a 
                href="mailto:info@lamaa-cleaning.com"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors font-medium"
              >
                إرسال رسالة
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">مرخصة ومعتمدة</h4>
            <p className="text-blue-700 text-sm">شركة مرخصة رسمياً من الجهات الحكومية</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">ضمان الجودة</h4>
            <p className="text-blue-700 text-sm">ضمان شامل على جميع الخدمات</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">خدمة 24/7</h4>
            <p className="text-blue-700 text-sm">متاحون لخدمتكم على مدار الساعة</p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">1000+ عميل راضٍ</h4>
            <p className="text-blue-700 text-sm">آلاف العملاء السعداء في الرياض</p>
          </div>
        </div>
      </div>
    </section>
  )
}

