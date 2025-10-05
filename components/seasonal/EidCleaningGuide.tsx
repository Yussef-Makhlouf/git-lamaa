'use client'

import { Gift, Heart, Users, Sparkles, Clock, CheckCircle, Star, Home, Coffee } from 'lucide-react'

export default function EidCleaningGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-900 via-rose-800 to-red-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">أجواء العيد المباركة</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              تحضير المنزل لاستقبال العيد
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لتنظيف وتحضير منزلك لاستقبال العيد المبارك. نصائح عملية لخلق أجواء احتفالية مميزة واستقبال الأهل والأصدقاء
            </p>
          </div>
        </div>
      </section>

      {/* Eid Preparation Timeline */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">
              الجدول الزمني للتحضير للعيد
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3">أسبوع قبل العيد</h3>
                <ul className="text-pink-600/80 text-sm space-y-2 text-right">
                  <li>• التخطيط العام</li>
                  <li>• شراء مستلزمات التنظيف</li>
                  <li>• تنظيف الغرف الرئيسية</li>
                  <li>• غسيل الستائر</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3">5 أيام قبل العيد</h3>
                <ul className="text-pink-600/80 text-sm space-y-2 text-right">
                  <li>• تنظيف المطبخ بالكامل</li>
                  <li>• ترتيب غرف النوم</li>
                  <li>• تنظيف الحمامات</li>
                  <li>• غسيل المفروشات</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3">3 أيام قبل العيد</h3>
                <ul className="text-pink-600/80 text-sm space-y-2 text-right">
                  <li>• تنظيف النوافذ</li>
                  <li>• ترتيب الديكورات</li>
                  <li>• تحضير أدوات الضيافة</li>
                  <li>• تنظيف السيارة</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3">يوم العيد</h3>
                <ul className="text-pink-600/80 text-sm space-y-2 text-right">
                  <li>• اللمسات الأخيرة</li>
                  <li>• ترتيب طاولة الضيافة</li>
                  <li>• تحضير الحلويات</li>
                  <li>• استقبال الضيوف</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cleaning Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">
              دليل التنظيف التفصيلي للعيد
            </h2>

            <div className="space-y-8">
              {/* Living Areas */}
              <div className="bg-gradient-to-r from-pink-50 to-white p-8 rounded-2xl border-r-4 border-pink-600">
                <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  غرف الاستقبال والمعيشة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">التنظيف الأساسي:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الأرضيات والسجاد بعمق</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>مسح الأثاث وتلميعه</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف النوافذ والستائر</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>ترتيب الوسائد والمفروشات</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">اللمسات الاحتفالية:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>إضافة زينة العيد والألوان الزاهية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>ترتيب الزهور الطبيعية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>إضاءة دافئة ومريحة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>عطور طبيعية منعشة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kitchen Preparation */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6" />
                  المطبخ - مركز الضيافة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">التنظيف العميق:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الثلاجة وترتيب المواد الغذائية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الفرن والميكروويف</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>غسيل جميع أدوات الطبخ والتقديم</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف أسطح العمل والحوض</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">تحضير الضيافة:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-pink-600" />
                        <span>ترتيب أطباق التقديم الخاصة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-pink-600" />
                        <span>تحضير أكواب الشاي والقهوة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-pink-600" />
                        <span>ترتيب الحلويات والمكسرات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-pink-600" />
                        <span>تحضير مشروبات الترحيب</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    نصيحة للضيافة:
                  </h4>
                  <p className="text-pink-700">
                    حضر قائمة بالحلويات والمشروبات المفضلة لدى ضيوفك، ورتب المطبخ بحيث يسهل عليك تحضير كل شيء بسرعة
                  </p>
                </div>
              </div>

              {/* Guest Rooms */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6" />
                  غرف الضيوف والنوم
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">التحضير الأساسي:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>غسيل وتغيير جميع المفروشات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف المراتب والوسائد</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>ترتيب الخزائن والأدراج</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف أرضية الغرف</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-pink-900">راحة الضيوف:</h4>
                    <ul className="space-y-2 text-pink-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-600" />
                        <span>توفير مناشف نظيفة ومعطرة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-600" />
                        <span>إضافة لمسات ترحيبية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-600" />
                        <span>تحضير مساحة للصلاة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-600" />
                        <span>توفير مستلزمات الراحة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eid Decorations */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">
              أفكار زينة العيد للمنزل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3 text-center">الألوان الاحتفالية</h3>
                <ul className="text-pink-600/80 text-sm space-y-2">
                  <li>• الذهبي والفضي للأناقة</li>
                  <li>• الأخضر والأزرق للهدوء</li>
                  <li>• الوردي والأحمر للدفء</li>
                  <li>• الأبيض للنظافة والنقاء</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3 text-center">عناصر الزينة</h3>
                <ul className="text-pink-600/80 text-sm space-y-2">
                  <li>• بالونات ملونة وشرائط</li>
                  <li>• فوانيس وإضاءة دافئة</li>
                  <li>• لافتات "عيد مبارك"</li>
                  <li>• زهور طبيعية وصناعية</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-pink-900 mb-3 text-center">اللمسات الخاصة</h3>
                <ul className="text-pink-600/80 text-sm space-y-2">
                  <li>• شموع معطرة آمنة</li>
                  <li>• مفارش طاولة احتفالية</li>
                  <li>• وسائد ملونة مريحة</li>
                  <li>• صور عائلية جميلة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-pink-900 mb-12 text-center">
              نصائح الضيافة المميزة في العيد
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-brown-600" />
                  المشروبات والحلويات
                </h3>
                <ul className="space-y-3 text-pink-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>قهوة عربية أصيلة مع التمر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>شاي بالنعناع أو الحليب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>حلويات العيد التقليدية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>مكسرات وفواكه مجففة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-pink-900 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  استقبال الضيوف
                </h3>
                <ul className="space-y-3 text-pink-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ترحيب حار عند الباب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تحضير مكان مريح للجلوس</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تقديم المرطبات فور الوصول</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>خلق أجواء دافئة ومرحة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-r from-pink-900 to-red-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              عيد مبارك وكل عام وأنتم بخير
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-2xl">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">الفرحة والسعادة</h3>
                <p className="text-pink-100">
                  العيد فرصة لتجديد الروابط الأسرية وخلق ذكريات جميلة مع الأحباب
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <Gift className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">البيت المضياف</h3>
                <p className="text-pink-100">
                  منزل نظيف ومرتب يعكس حبك وتقديرك لضيوفك ويجعل العيد أكثر بهجة
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 p-6 rounded-2xl">
              <p className="text-xl font-semibold text-yellow-200">
                "أعاده الله عليكم بالخير واليمن والبركات، وجعل بيوتكم عامرة بالفرح والسعادة"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
