'use client'

import {  Heart, Users, Droplets, Shield, Clock, Star, CheckCircle, AlertTriangle, HomeIcon } from 'lucide-react'

export default function MosqueCleaningGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HomeIcon className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">بيوت الله المقدسة</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              دليل تنظيف المساجد والمصليات
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              دليل شامل ومتخصص لتنظيف وصيانة المساجد والمصليات مع احترام الآداب الإسلامية وضمان الطهارة المطلوبة لبيوت الله
            </p>
          </div>
        </div>
      </section>

      {/* Islamic Etiquette */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
              آداب دخول المسجد والتنظيف
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <blockquote className="text-2xl font-bold text-green-900 mb-4">
                  "إنما المساجد لله فلا تدعوا مع الله أحداً"
                </blockquote>
                <p className="text-green-600/80 italic">سورة الجن - آية 18</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-4">آداب الدخول</h3>
                  <ul className="space-y-3 text-green-600/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>الوضوء قبل دخول المسجد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>الدخول بالقدم اليمنى مع الدعاء</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>خلع الحذاء في المكان المخصص</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>تحية المسجد بركعتين</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-4">آداب التنظيف</h3>
                  <ul className="space-y-3 text-green-600/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>النية الصالحة في خدمة بيت الله</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>تجنب التنظيف أثناء الصلاة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>استخدام مواد طاهرة وآمنة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>الحفاظ على هدوء المكان</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
              مناطق المسجد وطرق تنظيفها
            </h2>

            <div className="space-y-8">
              {/* Prayer Hall */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <HomeIcon className="w-6 h-6" />
                  قاعة الصلاة الرئيسية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">السجاد والمفروشات:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• تنظيف يومي بالمكنسة الكهربائية</li>
                      <li>• إزالة البقع فوراً بمواد طاهرة</li>
                      <li>• تنظيف عميق شهري بالبخار</li>
                      <li>• تهوية السجاد بانتظام</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">الجدران والأعمدة:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• مسح الغبار بقطعة قماش ناعمة</li>
                      <li>• تنظيف الآيات القرآنية بحذر</li>
                      <li>• إزالة بصمات الأيدي</li>
                      <li>• فحص الطلاء والترميم عند الحاجة</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-semibold">تنبيه مهم:</span>
                  </div>
                  <p className="text-yellow-700">
                    تجنب استخدام المواد الكيميائية القوية أو ذات الرائحة النفاذة في قاعة الصلاة
                  </p>
                </div>
              </div>

              {/* Ablution Area */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <Droplets className="w-6 h-6" />
                  دورات المياه ومناطق الوضوء
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">التنظيف اليومي:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• تنظيف الأحواض والحنفيات</li>
                      <li>• تطهير الأرضيات بمطهر آمن</li>
                      <li>• تنظيف المرايا والإضاءة</li>
                      <li>• تفريغ سلال المهملات</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">التنظيف العميق:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• تنظيف البلاط والفواصل</li>
                      <li>• فحص وتنظيف أنظمة الصرف</li>
                      <li>• تطهير جميع الأسطح</li>
                      <li>• فحص التهوية والإضاءة</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Courtyard and Entrance */}
              <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl border-r-4 border-purple-600">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  الساحات والمداخل
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">المداخل:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• تنظيف أماكن الأحذية يومياً</li>
                      <li>• مسح الأبواب والمقابض</li>
                      <li>• تنظيف اللوحات الإرشادية</li>
                      <li>• ترتيب الأحذية بانتظام</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-900">الساحات الخارجية:</h4>
                    <ul className="space-y-2 text-green-600/80 text-sm">
                      <li>• كنس الأوراق والأتربة</li>
                      <li>• تنظيف النوافير إن وجدت</li>
                      <li>• العناية بالنباتات والحدائق</li>
                      <li>• إزالة المخلفات والأوساخ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Schedule */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
              جدول التنظيف المقترح للمساجد
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">يومياً</h3>
                <ul className="text-green-600/80 text-sm space-y-2">
                  <li>• كنس قاعة الصلاة</li>
                  <li>• تنظيف دورات المياه</li>
                  <li>• ترتيب الأحذية</li>
                  <li>• إزالة المخلفات</li>
                  <li>• مسح الأسطح المستخدمة</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">أسبوعياً</h3>
                <ul className="text-green-600/80 text-sm space-y-2">
                  <li>• تنظيف النوافذ والمرايا</li>
                  <li>• مسح الجدران والأعمدة</li>
                  <li>• تنظيف الإضاءة</li>
                  <li>• تطهير جميع الأسطح</li>
                  <li>• تنظيف الساحات الخارجية</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">شهرياً</h3>
                <ul className="text-green-600/80 text-sm space-y-2">
                  <li>• تنظيف عميق للسجاد</li>
                  <li>• غسيل الستائر</li>
                  <li>• تنظيف أنظمة التكييف</li>
                  <li>• فحص شامل للمرافق</li>
                  <li>• صيانة الأجهزة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Occasions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
              التنظيف في المناسبات الخاصة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-600" />
                  شهر رمضان
                </h3>
                <ul className="space-y-3 text-green-600/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيف شامل قبل بداية الشهر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيف إضافي بعد صلاة التراويح</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تحضير مساحات إضافية للمصلين</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيف خاص لليلة القدر</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  العيدين والجمعة
                </h3>
                <ul className="space-y-3 text-green-600/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيف مكثف قبل صلاة العيد</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تحضير مساحات إضافية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>تنظيف خاص ليوم الجمعة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>إضافة عطور طبيعية مناسبة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Guidelines */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-900 mb-12 text-center">
              إرشادات للمتطوعين في تنظيف المساجد
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-4">الاستعداد الشخصي</h3>
                  <ul className="space-y-3 text-green-600/80">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>الوضوء قبل دخول المسجد</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>ارتداء ملابس مناسبة ونظيفة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>إحضار أدوات التنظيف الشخصية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>النية الصالحة لخدمة بيت الله</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-4">آداب العمل</h3>
                  <ul className="space-y-3 text-green-600/80">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>العمل بصمت واحترام</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>تجنب التنظيف أثناء الصلاة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>التعاون مع الفريق</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>الحفاظ على قداسة المكان</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards and Benefits */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              فضل وأجر تنظيف المساجد
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-2xl">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">الأجر العظيم</h3>
                <p className="text-green-100">
                  من بنى لله مسجداً ولو كمفحص قطاة بنى الله له بيتاً في الجنة
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">البركة في الحياة</h3>
                <p className="text-green-100">
                  خدمة بيوت الله تجلب البركة والخير في الدنيا والآخرة
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 p-6 rounded-2xl">
              <blockquote className="text-xl font-semibold text-yellow-200 mb-4">
                "من أحب أن يظله الله في ظله يوم لا ظل إلا ظله فليعمر مساجد الله"
              </blockquote>
              <p className="text-green-200">حديث شريف</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
