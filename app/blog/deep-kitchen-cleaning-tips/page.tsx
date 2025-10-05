import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowLeft, Home, Droplets, Shield, CheckCircle, Star, AlertTriangle, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
  description: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.',
  keywords: 'تنظيف المطبخ, تنظيف المطبخ العميق, نصائح تنظيف المطبخ, تنظيف الثلاجة, تنظيف الفرن',
  openGraph: {
    title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
    description: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.',
    type: 'article',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنظيف المطبخ العميق: نصائح احترافية | لمعة للنظافة',
  },
}

export default function DeepKitchenCleaningTips() {
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
                تنظيف المطبخ
              </span>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Calendar className="w-4 h-4" />
                ٢٨ يناير ٢٠٢٤
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <User className="w-4 h-4" />
                فريق لمعة للنظافة
              </div>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock className="w-4 h-4" />
                ١٤ دقيقة
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              تنظيف المطبخ العميق: نصائح احترافية
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها من خبراء شركة لمعة للنظافة.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">مقدمة عن تنظيف المطبخ العميق</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  المطبخ هو قلب المنزل، وهو المكان الذي نحضر فيه الطعام لعائلاتنا. التنظيف العميق للمطبخ يضمن بيئة صحية وآمنة، 
                  ويمنع تراكم البكتيريا والجراثيم. في هذا الدليل، سنتعلم الطرق الاحترافية لتنظيف جميع مناطق المطبخ.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl border-r-4 border-blue-600">
                  <p className="text-blue-800 font-medium">
                    💡 <strong>نصيحة مهمة:</strong> التنظيف العميق للمطبخ يجب أن يتم أسبوعياً على الأقل، مع التنظيف اليومي للأسطح عالية الاستخدام.
                  </p>
                </div>
              </section>

              {/* Preparation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">التحضير والتنظيف الأولي</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  قبل البدء في التنظيف العميق، من المهم التحضير الجيد وترتيب المطبخ.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Home className="w-6 h-6 text-blue-600" />
                      التحضير المطلوب
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إزالة جميع الأطباق والأواني
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تفريغ الخزائن من المحتويات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إزالة الأوساخ السطحية
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تحضير الأدوات والمواد
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                      <Droplets className="w-6 h-6 text-blue-600" />
                      المواد المطلوبة
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
                        مناشف نظيفة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        فرش تنظيف متنوعة
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Appliance Cleaning */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">تنظيف الأجهزة الكهربائية</h2>

                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">تنظيف الثلاجة</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>إفراغ الثلاجة من جميع المحتويات</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>إزالة الرفوف والأدراج القابلة للإزالة</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تنظيف الرفوف والأدراج بالماء والصابون</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>تنظيف الجدران الداخلية للثلاجة</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>تنظيف الأختام المطاطية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                        <span>تنظيف الجزء الخارجي والجانبي</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">تنظيف الفرن</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>إزالة الرفوف والشوايات</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>نقع الرفوف في الماء الساخن والصابون</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تنظيف الجدران الداخلية للفرن</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>تنظيف الباب والزجاج</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>تنظيف الموقد والمنطقة المحيطة</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">تنظيف الميكروويف</h3>
                    <ol className="space-y-3 text-blue-700">
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                        <span>إزالة الطبق الدوار</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                        <span>تنظيف الطبق بالماء والصابون</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                        <span>تنظيف الجدران الداخلية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                        <span>تنظيف الباب والزجاج</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                        <span>تنظيف الجزء الخارجي</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Cabinets and Surfaces */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">تنظيف الخزائن والأسطح</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">تنظيف الخزائن</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إفراغ الخزائن من المحتويات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الرفوف الداخلية
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الأبواب من الخارج والداخل
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف المقابض والمفصلات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الجزء العلوي من الخزائن
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">تنظيف أسطح العمل</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إزالة جميع الأغراض من السطح
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف السطح بالماء والصابون
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تطهير السطح بمطهر آمن
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تجفيف السطح بمنشفة نظيفة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الحواف والزوايا
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sink Cleaning */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">تنظيف الحوض والصنابير</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  الحوض والصنابير من أكثر المناطق استخداماً في المطبخ، وتحتاج إلى عناية خاصة.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">خطوات تنظيف الحوض:</h3>
                  <ol className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>إزالة جميع الأطباق والأواني من الحوض</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>تنظيف الحوض بالماء الساخن والصابون</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>تنظيف الصنابير والمقابض</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>تنظيف الفتحات والمرشحات</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <span>تطهير الحوض بمطهر آمن</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      <span>تجفيف الحوض والصنابير</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Floor Cleaning */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">تنظيف أرضية المطبخ</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  أرضية المطبخ تحتاج إلى تنظيف عميق لإزالة الدهون والبقايا الغذائية.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">خطوات تنظيف الأرضية:</h3>
                    <ol className="space-y-2 text-blue-700">
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <span>كنس الأرضية بالمكنسة الكهربائية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        <span>إزالة البقع الصعبة يدوياً</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        <span>استخدام منظف مناسب لنوع الأرضية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                        <span>الفرك بلطف لإزالة الدهون</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                        <span>الشطف بالماء النظيف</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-green-100 text-green-800 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                        <span>التجفيف بمنشفة نظيفة</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">نصائح مهمة:</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        استخدم الماء الساخن للدهون
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        تجنب استخدام مواد كاشطة
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        تأكد من التهوية الجيدة
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        استخدم قفازات واقية
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        نظف المناطق المخفية
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Maintenance Tips */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">نصائح الصيانة اليومية</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">العناية اليومية للمطبخ:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف أسطح العمل بعد كل استخدام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إزالة البقع فوراً
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الحوض بعد غسل الأطباق
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        إفراغ سلة المهملات بانتظام
                      </li>
                    </ul>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        كنس الأرضية يومياً
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تنظيف الفرن بعد الاستخدام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        ترتيب الخزائن بانتظام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        تهوية المطبخ جيداً
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
                    احتياطات السلامة المهمة
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      استخدم دائماً قفازات واقية
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      تأكد من التهوية الجيدة
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      لا تخلط المواد الكيميائية المختلفة
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      اقرأ التعليمات قبل الاستخدام
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      احفظ المواد بعيداً عن الأطفال
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      تأكد من إغلاق الأجهزة قبل التنظيف
                    </li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">خلاصة وتوصيات</h2>
                <p className="text-blue-700 leading-relaxed text-lg mb-6">
                  تنظيف المطبخ العميق يضمن بيئة صحية وآمنة للعائلة. اتباع النصائح المذكورة سيوفر عليك الوقت والجهد، 
                  ويضمن الحصول على أفضل النتائج. للتنظيف العميق الشامل، يُنصح بالاستعانة بخدمات احترافية.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    هل تحتاج خدمة تنظيف مطبخ احترافية؟
                  </h3>
                  <p className="text-blue-100 mb-6">
                    فريق لمعة للنظافة متخصص في تنظيف المطابخ بأحدث التقنيات والمواد الآمنة. 
                    نحن نقدم خدمات تنظيف شاملة ومتخصصة بأسعار تنافسية.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:0592425077"
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      احجز خدمة تنظيف المطبخ
                    </a>
                    <a
                      href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات تنظيف المطبخ"
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
