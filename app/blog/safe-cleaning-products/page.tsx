import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowLeft, Droplets, Shield, CheckCircle, Star, AlertTriangle, Leaf } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
  description: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.',
  keywords: 'المواد التنظيفية الآمنة, منظفات صديقة للبيئة, مواد تنظيف طبيعية, منظفات آمنة للأطفال, منتجات تنظيف خالية من المواد الكيميائية',
  openGraph: {
    title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
    description: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية من خبراء شركة لمعة للنظافة.',
    type: 'article',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كيفية اختيار المواد التنظيفية الآمنة | لمعة للنظافة',
  },
}

export default function SafeCleaningProducts() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة إلى المدونة
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">
                المواد التنظيفية
              </span>
              <div className="flex items-center gap-2 text-purple-200 text-sm">
                <Calendar className="w-4 h-4" />
                ١٥ يناير ٢٠٢٤
              </div>
              <div className="flex items-center gap-2 text-purple-200 text-sm">
                <User className="w-4 h-4" />
                قسم البحث والتطوير
              </div>
              <div className="flex items-center gap-2 text-purple-200 text-sm">
                <Clock className="w-4 h-4" />
                ١٠ دقائق
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              كيفية اختيار المواد التنظيفية الآمنة
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية.
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
                <h2 className="text-3xl font-bold text-purple-900 mb-6">أهمية اختيار المواد التنظيفية الآمنة</h2>
                <p className="text-purple-700 leading-relaxed text-lg mb-6">
                  المواد التنظيفية الآمنة ليست فقط أفضل للبيئة، بل أيضاً لصحة العائلة وخاصة الأطفال والحيوانات الأليفة. 
                  في هذا الدليل، سنتعلم كيفية اختيار المنتجات الآمنة والفعالة في نفس الوقت.
                </p>
                <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-600">
                  <p className="text-purple-800 font-medium">
                    💡 <strong>نصيحة مهمة:</strong> المواد التنظيفية الآمنة تحمي صحة عائلتك وتقلل من التلوث البيئي، 
                    مع ضمان الحصول على نفس النتائج الممتازة.
                  </p>
                </div>
              </section>

              {/* What to Look For */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">العلامات التي يجب البحث عنها</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        خالٍ من الفوسفات
                      </h3>
                      <p className="text-green-700">يحمي البيئة المائية من التلوث</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        قابل للتحلل الحيوي
                      </h3>
                      <p className="text-green-700">يتحلل طبيعياً في البيئة</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        خالٍ من الأمونيا
                      </h3>
                      <p className="text-green-700">أقل ضرراً على الجهاز التنفسي</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-green-600" />
                        درجة حموضة متوازنة
                      </h3>
                      <p className="text-green-700">آمن على البشرة والأسطح</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <Star className="w-5 h-5 text-green-600" />
                        معتمد من جهات مختصة
                      </h3>
                      <p className="text-green-700">مثل EPA أو EU Ecolabel</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-green-500">
                      <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        خالٍ من العطور الصناعية
                      </h3>
                      <p className="text-green-700">يقلل من الحساسية والتهيج</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">مقارنة بين المواد الطبيعية والكيميائية</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Leaf className="w-6 h-6 text-green-600" />
                      المواد الطبيعية
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-700 mb-3">المميزات:</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          آمنة على الصحة
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          صديقة للبيئة
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          أقل تكلفة
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          متوفرة بسهولة
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-orange-700 mb-3">العيوب:</h4>
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          قد تحتاج وقت أطول
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          أقل فعالية في بعض الحالات
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          قد تحتاج كمية أكبر
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Droplets className="w-6 h-6 text-blue-600" />
                      المواد الكيميائية
                    </h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-blue-700 mb-3">المميزات:</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          فعالية عالية
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          توفير في الوقت
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          نتائج سريعة
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-red-700 mb-3">العيوب:</h4>
                      <ul className="space-y-2 text-red-700">
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          قد تكون ضارة للصحة
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          ضارة للبيئة
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          تكلفة أعلى
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          تحتاج احتياطات أمان
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Natural Recipes */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">وصفات طبيعية فعالة</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">منظف متعدد الأغراض</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">المكونات:</h4>
                      <ul className="space-y-1 text-purple-700">
                        <li>• كوب من الخل الأبيض</li>
                        <li>• كوب من الماء</li>
                        <li>• ملعقة صغيرة من صابون الأطباق</li>
                        <li>• بضع قطرات من الزيت العطري</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">طريقة التحضير:</h4>
                      <p className="text-purple-700">اخلط جميع المكونات في زجاجة رذاذ واستخدم حسب الحاجة</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">منظف الزجاج</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">المكونات:</h4>
                      <ul className="space-y-1 text-purple-700">
                        <li>• 2 كوب ماء</li>
                        <li>• نصف كوب خل أبيض</li>
                        <li>• ربع كوب كحول</li>
                        <li>• قطرة واحدة من صابون الأطباق</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">طريقة التحضير:</h4>
                      <p className="text-purple-700">اخلط المكونات ورش على الزجاج ثم امسح بقطعة قماش نظيفة</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">منظف الحمامات</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">المكونات:</h4>
                      <ul className="space-y-1 text-purple-700">
                        <li>• نصف كوب صودا الخبز</li>
                        <li>• ربع كوب خل أبيض</li>
                        <li>• ملعقة صغيرة من الملح</li>
                        <li>• بضع قطرات من زيت شجرة الشاي</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">طريقة التحضير:</h4>
                      <p className="text-purple-700">اخلط المكونات لتكوين عجينة وافرك بها الأسطح</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">منظف الأرضيات</h3>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">المكونات:</h4>
                      <ul className="space-y-1 text-purple-700">
                        <li>• 4 لتر ماء دافئ</li>
                        <li>• نصف كوب خل أبيض</li>
                        <li>• ملعقة كبيرة من صابون الأطباق</li>
                        <li>• بضع قطرات من الزيت العطري</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">طريقة التحضير:</h4>
                      <p className="text-purple-700">اخلط المكونات واستخدم في ممسحة الأرضيات</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Safety Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">نصائح السلامة</h2>
                <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    احتياطات السلامة الأساسية
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      اقرأ التعليمات دائماً قبل الاستخدام
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      احفظ المواد في مكان آمن بعيداً عن الأطفال
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      استخدم القفازات عند الضرورة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      تأكد من التهوية الجيدة
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      لا تخلط مواد مختلفة أبداً
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-600" />
                      احفظ في عبواتها الأصلية
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">خلاصة</h2>
                <p className="text-purple-700 leading-relaxed text-lg mb-6">
                  اختيار المواد التنظيفية الآمنة هو استثمار في صحة عائلتك وبيئتك. مع الخيارات الطبيعية المتاحة 
                  والمنتجات الآمنة في السوق، يمكنك الحصول على نتائج ممتازة دون المخاطرة بصحتك أو البيئة.
                </p>
                
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    هل تحتاج استشارة في اختيار المواد التنظيفية؟
                  </h3>
                  <p className="text-purple-100 mb-6">
                    فريق لمعة للنظافة يستخدم فقط المواد الآمنة والصديقة للبيئة. 
                    نحن نقدم استشارات مجانية لمساعدتك في اختيار أفضل المنتجات لعائلتك.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0592425077"
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      احجز استشارة مجانية
                    </a>
                    <a
                      href="https://wa.me/966592425077?text=أرغب في الاستفسار عن المواد التنظيفية الآمنة"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-purple-700 px-6 py-3 rounded-full font-bold transition-colors"
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
