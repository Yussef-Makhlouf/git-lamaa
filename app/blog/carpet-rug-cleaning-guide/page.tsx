import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowLeft, Home, Droplets, Shield, CheckCircle, Star, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
  description: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.',
  keywords: 'تنظيف السجاد, تنظيف الموكيت, طرق تنظيف السجاد, تنظيف السجاد بالبخار, عناية بالسجاد',
  openGraph: {
    title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.',
    type: 'article',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف السجاد والموكيت: دليل شامل | لمعة للنظافة',
  },
}

export default function CarpetRugCleaningGuide() {
  return (
    <main className="min-h-screen bg-white pt-16" >
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
                تنظيف السجاد
              </span>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Calendar className="w-4 h-4" />
                ٢٥ يناير ٢٠٢٤
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <User className="w-4 h-4" />
                فريق لمعة للنظافة
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock className="w-4 h-4" />
                ١٢ دقيقة
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              تنظيف السجاد والموكيت: دليل شامل
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها من خبراء شركة لمعة للنظافة.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">مقدمة عن تنظيف السجاد والموكيت</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  السجاد والموكيت من العناصر الأساسية في المنزل التي تحتاج إلى عناية خاصة. التنظيف الصحيح يطيل عمر السجاد ويحافظ على مظهره الجميل. 
                  في هذا الدليل، سنتعلم الطرق الصحيحة لتنظيف مختلف أنواع السجاد والموكيت.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600">
                  <p className="text-blue-800 font-medium">
                    💡 <strong>نصيحة مهمة:</strong> تنظيف السجاد بانتظام يمنع تراكم الأوساخ والبقع، ويحافظ على جودة الألياف لفترة أطول.
                  </p>
                </div>
              </section>

              {/* Types of Carpets */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">أنواع السجاد وطرق تنظيفها</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  كل نوع من السجاد يحتاج إلى طريقة تنظيف خاصة. معرفة نوع السجاد يساعد في اختيار الطريقة المناسبة.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Home className="w-6 h-6 text-blue-600" />
                      السجاد الصوفي
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف جاف أولاً
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تجنب الماء الساخن
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        استخدام منظفات خفيفة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تجفيف سريع
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Droplets className="w-6 h-6 text-blue-600" />
                      السجاد الاصطناعي
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        مقاوم للماء
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        يمكن استخدام الماء
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف أسهل
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        يجف بسرعة
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Cleaning Steps */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">خطوات التنظيف الأساسية</h2>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">الخطوة 1: التحضير والتنظيف الأولي</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>إزالة الأثاث من على السجاد</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>كنس السجاد بالمكنسة الكهربائية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>إزالة الأوساخ السطحية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>فحص البقع الموجودة</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">الخطوة 2: معالجة البقع</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-blue-700 mb-3">بقع الطعام والشراب:</h4>
                        <ul className="space-y-2 text-blue-600">
                          <li>• إزالة الفائض بملعقة</li>
                          <li>• استخدام منشفة نظيفة</li>
                          <li>• تنظيف بالماء البارد</li>
                          <li>• تجنب الفرك القوي</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-700 mb-3">بقع الدهون:</h4>
                        <ul className="space-y-2 text-blue-600">
                          <li>• رش بودرة التلك</li>
                          <li>• تركها لامتصاص الدهن</li>
                          <li>• كنس البودرة</li>
                          <li>• تنظيف بالماء والصابون</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">الخطوة 3: التنظيف العميق</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>اختيار المنظف المناسب لنوع السجاد</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>اختبار المنظف في مكان مخفي</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تطبيق المنظف حسب التعليمات</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>الفرك بلطف في اتجاه الألياف</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>الشطف بالماء النظيف</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Steam Cleaning */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">التنظيف بالبخار</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  التنظيف بالبخار من أكثر الطرق فعالية لتنظيف السجاد العميق. يزيل الأوساخ والبكتيريا دون استخدام مواد كيميائية قوية.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">فوائد التنظيف بالبخار:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف عميق وفعال
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        قتل البكتيريا والجراثيم
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        آمن على الصحة
                      </li>
                    </ul>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        لا يحتاج مواد كيميائية
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        يجف بسرعة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        مناسب لجميع أنواع السجاد
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Maintenance Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">نصائح الصيانة اليومية</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">العناية اليومية:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        كنس يومي بالمكنسة الكهربائية
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إزالة البقع فوراً
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تهوية الغرفة بانتظام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تجنب المشي بالأحذية
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">العناية الأسبوعية:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف عميق بالمكنسة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        فحص البقع الجديدة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف المناطق عالية الاستخدام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        ترتيب الأثاث
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Safety Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">نصائح السلامة</h2>
                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    احتياطات مهمة
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      لا تخلط المواد الكيميائية المختلفة
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      تأكد من التهوية الجيدة
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      استخدم قفازات واقية
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      اقرأ التعليمات قبل الاستخدام
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      احفظ المواد بعيداً عن الأطفال
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">خلاصة وتوصيات</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  تنظيف السجاد والموكيت بطريقة صحيحة يطيل عمرها ويحافظ على مظهرها الجميل. اتباع النصائح المذكورة سيوفر عليك الوقت والجهد، 
                  ويضمن الحصول على أفضل النتائج. للتنظيف العميق، يُنصح بالاستعانة بخدمات احترافية.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    هل تحتاج خدمة تنظيف سجاد احترافية؟
                  </h3>
                  <p className="text-blue-100 mb-6">
                    فريق لمعة للنظافة متخصص في تنظيف السجاد والموكيت بأحدث التقنيات. 
                    نحن نقدم خدمات تنظيف شاملة ومتخصصة بأسعار تنافسية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0592425077"
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      احجز خدمة تنظيف السجاد
                    </a>
                    <a
                      href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات تنظيف السجاد"
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
