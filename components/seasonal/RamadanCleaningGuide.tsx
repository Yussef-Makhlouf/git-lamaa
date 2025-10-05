'use client'

import { Moon, Heart, Home, Sparkles, Clock, CheckCircle, Star, Users } from 'lucide-react'

export default function RamadanCleaningGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Moon className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">استعداد للشهر الكريم</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              تحضير المنزل لاستقبال رمضان
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لتنظيف وتحضير منزلك لاستقبال الشهر الفضيل. نصائح عملية لخلق بيئة نظيفة ومريحة للعبادة والضيافة
            </p>
          </div>
        </div>
      </section>

      {/* Spiritual Importance */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
              أهمية النظافة في الإسلام
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <blockquote className="text-2xl font-bold text-purple-900 mb-4">
                  "إن الله طيب يحب الطيب، نظيف يحب النظافة"
                </blockquote>
                <p className="text-purple-600/80 italic">حديث شريف</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">الطهارة</h3>
                  <p className="text-purple-600/80 text-sm">النظافة جزء من الإيمان وشرط للعبادة</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">البيت المبارك</h3>
                  <p className="text-purple-600/80 text-sm">المنزل النظيف يجلب البركة والراحة</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-2">كرم الضيافة</h3>
                  <p className="text-purple-600/80 text-sm">استقبال الضيوف في بيئة نظيفة ومرحبة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Ramadan Cleaning Checklist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
              قائمة التنظيف قبل رمضان
            </h2>

            <div className="space-y-8">
              {/* Living Areas */}
              <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl border-r-4 border-purple-600">
                <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6" />
                  غرف المعيشة والاستقبال
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف الأرضيات والسجاد بعمق</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">غسيل الستائر والوسائد</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تلميع الأثاث الخشبي</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف النوافذ والمرايا</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">ترتيب وتنظيم الديكورات</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف أجهزة التكييف</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">إضافة لمسات رمضانية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">فحص الإضاءة وتنظيفها</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kitchen */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  المطبخ - قلب البيت في رمضان
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف عميق للثلاجة والفريزر</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف الفرن والميكروويف</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">غسيل أدوات الطبخ والتقديم</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف الخزائن من الداخل</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف أسطح العمل والحوض</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">فحص وتنظيف شفاط المطبخ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">ترتيب التوابل والمواد الغذائية</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف أرضية المطبخ بعمق</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    نصيحة خاصة لرمضان:
                  </h4>
                  <p className="text-purple-700">
                    رتب المطبخ بحيث تكون الأدوات المستخدمة للإفطار والسحور في متناول اليد لتوفير الوقت والجهد
                  </p>
                </div>
              </div>

              {/* Bedrooms */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                  <Moon className="w-6 h-6" />
                  غرف النوم - مكان الراحة والعبادة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">غسيل المفروشات والبياضات</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف المراتب والوسائد</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">ترتيب الخزائن والأدراج</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف أرضية الغرف</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تحضير مكان للعبادة والقراءة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-purple-600/80">تنظيف النوافذ لدخول الهواء النقي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
              جدول التنظيف الأسبوعي قبل رمضان
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-3 text-center">الأسبوع الأول</h3>
                <ul className="text-sm text-purple-600/80 space-y-2">
                  <li>• تنظيف غرف المعيشة</li>
                  <li>• غسيل الستائر</li>
                  <li>• تنظيف النوافذ</li>
                  <li>• ترتيب الديكورات</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-3 text-center">الأسبوع الثاني</h3>
                <ul className="text-sm text-purple-600/80 space-y-2">
                  <li>• تنظيف المطبخ بالكامل</li>
                  <li>• تنظيف الثلاجة</li>
                  <li>• غسيل أدوات الطبخ</li>
                  <li>• ترتيب التوابل</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-3 text-center">الأسبوع الثالث</h3>
                <ul className="text-sm text-purple-600/80 space-y-2">
                  <li>• تنظيف غرف النوم</li>
                  <li>• غسيل المفروشات</li>
                  <li>• ترتيب الخزائن</li>
                  <li>• تحضير مكان العبادة</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-yellow-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-3 text-center">الأسبوع الأخير</h3>
                <ul className="text-sm text-purple-600/80 space-y-2">
                  <li>• اللمسات الأخيرة</li>
                  <li>• تنظيف الحمامات</li>
                  <li>• إضافة الزينة الرمضانية</li>
                  <li>• فحص شامل للمنزل</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ramadan Decoration Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
              إضافة الأجواء الرمضانية للمنزل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-600" />
                  الزينة والديكور
                </h3>
                <ul className="space-y-3 text-purple-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>فوانيس رمضانية في أماكن مختلفة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>آيات قرآنية وأدعية على الجدران</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>إضاءة دافئة وهادئة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ألوان هادئة تبعث على الراحة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  الأجواء الروحانية
                </h3>
                <ul className="space-y-3 text-purple-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>مكان مخصص للقراءة والتأمل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>رائحة عطرة طبيعية (البخور)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ترتيب المصاحف وكتب الأدعية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>مساحة هادئة للعبادة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Involvement */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">
              إشراك العائلة في التحضير
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-3">الأطفال</h3>
                  <ul className="text-sm text-purple-600/80 space-y-2">
                    <li>• ترتيب ألعابهم وغرفهم</li>
                    <li>• مساعدة في المهام البسيطة</li>
                    <li>• تعلم قيمة النظافة</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-3">الوالدان</h3>
                  <ul className="text-sm text-purple-600/80 space-y-2">
                    <li>• التخطيط والتنسيق</li>
                    <li>• المهام الأساسية</li>
                    <li>• تعليم القيم الإسلامية</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-900 mb-3">الجميع معاً</h3>
                  <ul className="text-sm text-purple-600/80 space-y-2">
                    <li>• وقت ممتع ومفيد</li>
                    <li>• تقوية الروابط الأسرية</li>
                    <li>• تحضير روحاني مشترك</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              نصائح أخيرة لاستقبال رمضان
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-2xl">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">ابدأ مبكراً</h3>
                <p className="text-purple-100">
                  لا تترك التنظيف لآخر لحظة. ابدأ قبل رمضان بشهر للحصول على أفضل النتائج
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">النية الصالحة</h3>
                <p className="text-purple-100">
                  اجعل نيتك في التنظيف طلباً للأجر والثواب وتحضيراً لاستقبال الشهر الكريم
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-yellow-400/20 p-6 rounded-2xl">
              <p className="text-xl font-semibold text-yellow-200">
                "بيت نظيف، قلب مطمئن، وروح مستعدة لاستقبال الخير والبركة في رمضان"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
