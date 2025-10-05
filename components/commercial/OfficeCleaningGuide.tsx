'use client'

import { Building, Users, Laptop, Coffee, Shield, Clock, CheckCircle, Star, Briefcase, TrendingUp } from 'lucide-react'

export default function OfficeCleaningGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building className="h-8 w-8 text-blue-300" />
              <span className="text-blue-300 font-semibold text-lg">بيئة العمل المثالية</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" >
              تنظيف المكاتب والمساحات التجارية
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لإنشاء بيئة عمل نظيفة وصحية ومنتجة. تعلم أفضل الممارسات لتنظيف المكاتب والمساحات التجارية بطريقة احترافية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Clean Office */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              فوائد المكتب النظيف
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">زيادة الإنتاجية</h3>
                <p className="text-gray-600/80 text-sm">بيئة نظيفة تحفز على العمل والإبداع</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">صحة الموظفين</h3>
                <p className="text-gray-600/80 text-sm">تقليل انتشار الأمراض والحساسية</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">انطباع إيجابي</h3>
                <p className="text-gray-600/80 text-sm">ترك انطباع ممتاز لدى العملاء والزوار</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">رضا الموظفين</h3>
                <p className="text-gray-600/80 text-sm">بيئة عمل مريحة تزيد من رضا الفريق</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Areas Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              تنظيف مناطق المكتب المختلفة
            </h2>

            <div className="space-y-8">
              {/* Workstations */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Laptop className="w-6 h-6" />
                  محطات العمل والمكاتب
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">التنظيف اليومي:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>مسح أسطح المكاتب بمطهر آمن</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف لوحات المفاتيح والفأرة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>مسح شاشات الكمبيوتر بحذر</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الهواتف المكتبية</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">التنظيف العميق:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>تنظيف الأدراج والخزائن من الداخل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>تنظيف الكابلات وتنظيمها</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>تلميع الأثاث الخشبي</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-600" />
                        <span>تنظيف المصابيح والإضاءة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting Rooms */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  قاعات الاجتماعات والمؤتمرات
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">قبل كل اجتماع:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف طاولة الاجتماعات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>ترتيب الكراسي وتنظيفها</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>فحص أجهزة العرض والصوت</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تحضير مواد الكتابة والمياه</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">بعد الاجتماع:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span>إزالة المخلفات والأوراق</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span>تنظيف اللوح الأبيض</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span>تهوية القاعة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span>إعادة ترتيب الأثاث</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Break Areas */}
              <div className="bg-gradient-to-r from-yellow-50 to-white p-8 rounded-2xl border-r-4 border-yellow-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6" />
                  مناطق الاستراحة والمطبخ المكتبي
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">المطبخ المكتبي:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الثلاجة أسبوعياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>غسيل أكواب وأطباق يومياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف ماكينة القهوة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تطهير أسطح العمل</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">منطقة الجلوس:</h4>
                    <ul className="space-y-2 text-gray-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-brown-600" />
                        <span>تنظيف الطاولات والكراسي</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-brown-600" />
                        <span>ترتيب المجلات والصحف</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-brown-600" />
                        <span>تنظيف الأرضية من الفتات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-brown-600" />
                        <span>تفريغ سلال المهملات</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Schedule */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              جدول التنظيف المكتبي
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">يومياً</h3>
                <ul className="text-gray-600/80 text-sm space-y-2">
                  <li>• مسح أسطح المكاتب</li>
                  <li>• تفريغ سلال المهملات</li>
                  <li>• تنظيف الحمامات</li>
                  <li>• كنس الأرضيات</li>
                  <li>• تنظيف المطبخ المكتبي</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">أسبوعياً</h3>
                <ul className="text-gray-600/80 text-sm space-y-2">
                  <li>• تنظيف النوافذ</li>
                  <li>• مسح الأثاث بعمق</li>
                  <li>• تنظيف قاعات الاجتماعات</li>
                  <li>• تطهير الهواتف والأجهزة</li>
                  <li>• تنظيف الثلاجة</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">شهرياً</h3>
                <ul className="text-gray-600/80 text-sm space-y-2">
                  <li>• تنظيف السجاد بعمق</li>
                  <li>• تنظيف أنظمة التكييف</li>
                  <li>• تلميع الأثاث الخشبي</li>
                  <li>• تنظيف الإضاءة</li>
                  <li>• تنظيم الملفات والأوراق</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">ربع سنوي</h3>
                <ul className="text-gray-600/80 text-sm space-y-2">
                  <li>• تنظيف شامل للمبنى</li>
                  <li>• صيانة الأجهزة</li>
                  <li>• تنظيف المخازن</li>
                  <li>• فحص أنظمة الأمان</li>
                  <li>• تجديد المواد التنظيفية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health and Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              الصحة والسلامة في مكان العمل
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-600" />
                  بروتوكولات السلامة
                </h3>
                <ul className="space-y-3 text-gray-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>استخدام مواد تنظيف آمنة ومعتمدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ارتداء معدات الحماية الشخصية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تهوية المكان أثناء التنظيف</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تدريب الموظفين على السلامة</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  صحة الموظفين
                </h3>
                <ul className="space-y-3 text-gray-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>توفير معقمات اليدين في كل مكان</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تطهير الأسطح المشتركة بانتظام</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ضمان جودة الهواء الداخلي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تشجيع النظافة الشخصية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Tips */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              نصائح احترافية للمكاتب
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-2xl">
                <Briefcase className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">التنظيم المستمر</h3>
                <p className="text-blue-100">
                  حافظ على ترتيب المكتب يومياً لتجنب تراكم الفوضى
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <TrendingUp className="w-8 h-8 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">الاستثمار في الجودة</h3>
                <p className="text-blue-100">
                  استخدم أدوات ومواد تنظيف عالية الجودة لنتائج أفضل
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <Users className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">إشراك الفريق</h3>
                <p className="text-blue-100">
                  شجع الموظفين على المشاركة في الحفاظ على نظافة المكان
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 p-6 rounded-2xl">
              <p className="text-xl font-semibold text-yellow-200">
                "مكتب نظيف = موظفون سعداء = إنتاجية عالية = نجاح مضمون"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
