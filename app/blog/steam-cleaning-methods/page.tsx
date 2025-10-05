import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowLeft, Droplets, Thermometer, Shield, CheckCircle, Star, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
  description: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.',
  keywords: 'التنظيف بالبخار, تنظيف بالبخار الحراري, فوائد التنظيف بالبخار, تنظيف السجاد بالبخار, تنظيف الموكيت بالبخار, تقنيات التنظيف الحديثة',
  openGraph: {
    title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
    description: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق من خبراء شركة لمعة للنظافة.',
    type: 'article',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'طرق التنظيف بالبخار: الدليل الكامل | لمعة للنظافة',
  },
}

export default function SteamCleaningMethods() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة إلى المدونة
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
                تقنيات التنظيف
              </span>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <Calendar className="w-4 h-4" />
                ١٨ يناير ٢٠٢٤
              </div>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <User className="w-4 h-4" />
                خبراء لمعة
              </div>
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <Clock className="w-4 h-4" />
                ١٢ دقيقة
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              طرق التنظيف بالبخار: الدليل الكامل
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق.
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
                <h2 className="text-3xl font-bold text-green-900 mb-6">ما هو التنظيف بالبخار؟</h2>
                <p className="text-green-700 leading-relaxed text-lg mb-6">
                  التنظيف بالبخار هو تقنية حديثة تستخدم البخار الساخن عالي الضغط لتنظيف وتطهير الأسطح المختلفة. 
                  هذه الطريقة تعتبر من أكثر الطرق فعالية وأماناً للتنظيف العميق، حيث تقضي على البكتيريا والجراثيم 
                  دون الحاجة لمواد كيميائية ضارة.
                </p>
                <div className="bg-green-50 p-6 rounded-xl border-r-4 border-green-600">
                  <p className="text-green-800 font-medium">
                    💡 <strong>معلومة مهمة:</strong> البخار الساخن يمكن أن يصل إلى درجة حرارة 100°م أو أكثر، 
                    مما يجعله فعالاً جداً في قتل البكتيريا والجراثيم.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">فوائد التنظيف بالبخار</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        قتل البكتيريا والجراثيم
                      </h3>
                      <p className="text-green-700">البخار الساخن يقضي على 99.9% من البكتيريا والجراثيم الموجودة على الأسطح</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-green-600" />
                        صديق للبيئة
                      </h3>
                      <p className="text-green-700">لا يحتاج لمواد كيميائية ضارة، مما يجعله آمناً على البيئة</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        آمن للأطفال
                      </h3>
                      <p className="text-green-700">لا يترك أي بقايا كيميائية، مما يجعله آمناً للأطفال والحيوانات الأليفة</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Star className="w-5 h-5 text-green-600" />
                        فعالية عالية
                      </h3>
                      <p className="text-green-700">ينظف البقع الصعبة بسهولة ويصل إلى الأماكن الضيقة</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-green-600" />
                        توفير في التكلفة
                      </h3>
                      <p className="text-green-700">يقلل الحاجة للمنظفات الكيميائية، مما يوفر المال</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        سرعة في التنظيف
                      </h3>
                      <p className="text-green-700">يوفر الوقت والجهد مقارنة بالطرق التقليدية</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Suitable Surfaces */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">الأسطح المناسبة للتنظيف بالبخار</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      الأسطح المناسبة
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        السجاد والموكيت
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        أقمشة الكنب والمفروشات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        البلاط والسيراميك
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        الزجاج والمرايا
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        المراتب والوسائد
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        الأرضيات الخشبية المعالجة
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      الأسطح غير المناسبة
                    </h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        الخشب غير المعالج
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        الورق الجداري القابل للنزع
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        الأقمشة الحساسة
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        بعض أنواع الجلد
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        الأجهزة الإلكترونية
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        الطلاء الجديد
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Steps */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">خطوات التنظيف بالبخار</h2>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
                  <ol className="space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">التحضير</h3>
                        <p className="text-green-700">إزالة الأوساخ الظاهرة والغبار من المنطقة المراد تنظيفها</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">اختبار المنطقة</h3>
                        <p className="text-green-700">جرب على منطقة صغيرة أولاً للتأكد من عدم تلف المادة</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">ضبط الحرارة</h3>
                        <p className="text-green-700">اختر درجة الحرارة المناسبة لنوع السطح</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">التطبيق</h3>
                        <p className="text-green-700">حرك الجهاز ببطء ومنتظم على السطح</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-2">التجفيف</h3>
                        <p className="text-green-700">اترك السطح ليجف تماماً قبل الاستخدام</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">نصائح للحصول على أفضل النتائج</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-4">نصائح عامة</h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        استخدم ماءً مقطراً لتجنب ترك البقع
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        لا تترك البخار في مكان واحد طويلاً
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        نظف خزان الماء بانتظام
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        اتبع تعليمات الشركة المصنعة
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-bold text-green-800 mb-4">نصائح للسلامة</h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-600 mt-1" />
                        استخدم قفازات واقية
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-600 mt-1" />
                        تأكد من التهوية الجيدة
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-600 mt-1" />
                        احرص على عدم لمس الفوهة الساخنة
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-600 mt-1" />
                        اقطع التيار الكهربائي عند عدم الاستخدام
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-green-900 mb-6">خلاصة</h2>
                <p className="text-green-700 leading-relaxed text-lg mb-6">
                  التنظيف بالبخار هو تقنية حديثة وفعالة للتنظيف العميق. مع الفوائد العديدة التي يقدمها، 
                  من قتل البكتيريا إلى كونه صديقاً للبيئة، أصبح خياراً مثالياً للعديد من الأسر. 
                  اتباع الخطوات الصحيحة والنصائح المذكورة سيساعدك في الحصول على أفضل النتائج.
                </p>
                
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    هل تحتاج خدمة تنظيف بالبخار احترافية؟
                  </h3>
                  <p className="text-green-100 mb-6">
                    فريق لمعة للنظافة يقدم خدمات تنظيف بالبخار متخصصة باستخدام أحدث الأجهزة والتقنيات. 
                    نحن نضمن لك أفضل النتائج مع ضمان الجودة.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0592425077"
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-green-900 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      احجز خدمة تنظيف بالبخار
                    </a>
                    <a
                      href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات التنظيف بالبخار"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-700 px-6 py-3 rounded-full font-bold transition-colors"
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
