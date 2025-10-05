import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowLeft, Home, Droplets, Shield, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
  description: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.',
  keywords: 'دليل التنظيف المنزلي, طرق التنظيف الصحيحة, نصائح التنظيف المنزلي, تنظيف المنازل بالطرق الصحيحة, إرشادات التنظيف الاحترافي',
  openGraph: {
    title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
    description: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.',
    type: 'article',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء | لمعة للنظافة',
  },
}

export default function UltimateHomeCleaningGuide() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة إلى المدونة
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                التنظيف المنزلي
              </span>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Calendar className="w-4 h-4" />
                ٢٠ يناير ٢٠٢٤
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <User className="w-4 h-4" />
                فريق لمعة للنظافة
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock className="w-4 h-4" />
                ١٥ دقيقة
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              دليل تنظيف المنزل الشامل: من الألف إلى الياء
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي من خبراء شركة لمعة للنظافة.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none rtl">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">مقدمة عن التنظيف المنزلي الاحترافي</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  التنظيف المنزلي الصحيح ليس مجرد إزالة الأوساخ الظاهرة، بل هو عملية شاملة تضمن بيئة صحية وآمنة للعائلة. 
                  في هذا الدليل الشامل، سنتعلم معاً الطرق الصحيحة والاحترافية لتنظيف منزلك بطريقة فعالة ومستدامة.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600">
                  <p className="text-blue-800 font-medium">
                    💡 <strong>نصيحة مهمة:</strong> التنظيف المنتظم والصحيح يوفر عليك الوقت والجهد على المدى الطويل، 
                    ويضمن بيئة صحية خالية من الجراثيم والبكتيريا.
                  </p>
                </div>
              </section>

              {/* Step 1: Planning */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">الخطوة 1: التخطيط والتحضير</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  قبل البدء في التنظيف، من المهم وضع خطة واضحة وتحضير جميع الأدوات والمواد اللازمة. 
                  هذا سيوفر عليك الوقت ويضمن الحصول على أفضل النتائج.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Home className="w-6 h-6 text-blue-600" />
                      الأدوات المطلوبة
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        مكانس كهربائية عالية الكفاءة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        ممسحات مختلفة الأحجام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        مناشف من الألياف الدقيقة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        فرش تنظيف متنوعة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        قفازات واقية
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Droplets className="w-6 h-6 text-blue-600" />
                      المواد التنظيفية
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        منظفات متعددة الأغراض
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        مطهرات آمنة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        منظفات زجاج
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        منظفات أرضيات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        معطرات طبيعية
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Step 2: Priorities */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">الخطوة 2: ترتيب الأولويات</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  ابدأ دائماً بالغرف الأكثر استخداماً، ثم انتقل إلى الغرف الأقل استخداماً. 
                  القاعدة الذهبية: من الأعلى إلى الأسفل.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">ترتيب التنظيف المثالي:</h3>
                  <ol className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>غرفة المعيشة والصالة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>المطبخ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>الحمامات</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>غرف النوم</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <span>الغرف الأخرى</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Step 3: Room by Room */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">الخطوة 3: تنظيف الغرف خطوة بخطوة</h2>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">غرفة المعيشة</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>ترتيب الأثاث والديكورات</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>إزالة الغبار من الأسطح العلوية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تنظيف الزجاج والمرايا</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>تنظيف الأثاث المنجد</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>كنس وتنظيف الأرضيات</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">المطبخ</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>تنظيف الثلاجة من الداخل والخارج</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>تنظيف الفرن والميكروويف</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تنظيف أسطح العمل والخزائن</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>تنظيف الحوض والصنابير</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>تنظيف الأرضيات والجدران</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Safety Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">نصائح السلامة المهمة</h2>
                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    احتياطات السلامة الأساسية
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      استخدم دائماً قفازات واقية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      تأكد من التهوية الجيدة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      لا تخلط المواد الكيميائية المختلفة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      احفظ المواد التنظيفية بعيداً عن الأطفال
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      اقرأ التعليمات على المنتجات قبل الاستخدام
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">خلاصة وتوصيات</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  التنظيف المنتظم والصحيح يضمن بيئة صحية ومريحة للعائلة. اتباع هذه الخطوات سيوفر عليك الوقت والجهد، 
                  ويضمن الحصول على أفضل النتائج. إذا كنت تحتاج إلى مساعدة احترافية، لا تتردد في التواصل مع خبراء التنظيف.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    هل تحتاج مساعدة احترافية؟
                  </h3>
                  <p className="text-blue-100 mb-6">
                    فريق لمعة للنظافة جاهز لمساعدتك في الحصول على أفضل النتائج. 
                    نحن نقدم خدمات تنظيف شاملة ومتخصصة بأسعار تنافسية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0592425077"
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      احجز خدمة تنظيف احترافية
                    </a>
                    <a
                      href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات التنظيف"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      تواصل عبر واتساب
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
