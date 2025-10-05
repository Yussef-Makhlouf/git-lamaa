'use client'

import { Snowflake, Wind, Droplets, Thermometer, Shield, Home, CheckCircle, AlertTriangle, Clock, Heart } from 'lucide-react'

export default function WinterCleaningGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Snowflake className="h-8 w-8 text-blue-300" />
              <span className="text-blue-300 font-semibold text-lg">موسم الشتاء</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              العناية بالمنزل في فصل الشتاء
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              دليل شامل للحفاظ على نظافة ودفء منزلك خلال فصل الشتاء في الرياض. نصائح عملية لمواجهة التحديات الشتوية والحفاظ على بيئة صحية ومريحة
            </p>
          </div>
        </div>
      </section>

      {/* Winter Challenges */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              تحديات الشتاء في الرياض
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">البرد القارس</h3>
                <p className="text-blue-600/80 text-sm">درجات حرارة منخفضة تتطلب تدفئة إضافية</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">الرطوبة العالية</h3>
                <p className="text-blue-600/80 text-sm">زيادة الرطوبة قد تسبب مشاكل في المنزل</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">الرياح القوية</h3>
                <p className="text-blue-600/80 text-sm">رياح شتوية تحمل الأتربة والأوساخ</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">الإغلاق المطول</h3>
                <p className="text-blue-600/80 text-sm">قضاء وقت أطول داخل المنزل</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Cleaning Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              استراتيجية التنظيف الشتوية
            </h2>

            <div className="space-y-8">
              {/* Heating Systems */}
              <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl border-r-4 border-red-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <Thermometer className="w-6 h-6" />
                  أنظمة التدفئة والتهوية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">المدافئ والسخانات:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف فلاتر المدافئ شهرياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>فحص أنابيب الغاز والكهرباء</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف مجاري الهواء</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>إزالة الغبار من الشبكات</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">التهوية الصحية:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-600" />
                        <span>فتح النوافذ يومياً لتجديد الهواء</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-600" />
                        <span>استخدام مراوح الشفط في الحمامات</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-600" />
                        <span>تشغيل شفاط المطبخ أثناء الطبخ</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-600" />
                        <span>تجنب إغلاق المنزل تماماً</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-red-800 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-semibold">تحذير أمان:</span>
                  </div>
                  <p className="text-red-700">
                    تأكد من وجود تهوية كافية عند استخدام المدافئ لتجنب تراكم أول أكسيد الكربون
                  </p>
                </div>
              </div>

              {/* Moisture Control */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <Droplets className="w-6 h-6" />
                  مكافحة الرطوبة والعفن
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">الوقاية من الرطوبة:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>استخدام مزيلات الرطوبة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>تجفيف الملابس خارج المنزل</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>إصلاح تسريبات المياه فوراً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span>تهوية الحمامات بعد الاستحمام</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">علاج العفن:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span>فحص الزوايا والأماكن المظلمة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span>استخدام محاليل مضادة للعفن</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span>تنظيف الجدران والأسقف</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span>استبدال المواد المتضررة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Indoor Air Quality */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <Wind className="w-6 h-6" />
                  تحسين جودة الهواء الداخلي
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">التنظيف المتكرر:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الأرضيات يومياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>غسيل المفروشات أسبوعياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>مسح الأسطح بانتظام</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>تنظيف الستائر والسجاد</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-900">النباتات المنزلية:</h4>
                    <ul className="space-y-2 text-blue-600/80 text-sm">
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-green-600" />
                        <span>نباتات تنقي الهواء طبيعياً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-green-600" />
                        <span>العناية بالنباتات في الشتاء</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-green-600" />
                        <span>تجنب الإفراط في الري</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-green-600" />
                        <span>توفير إضاءة مناسبة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Cleaning Schedule */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              جدول التنظيف الشتوي
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">يومياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2">
                  <li>• تهوية المنزل لمدة 15 دقيقة</li>
                  <li>• تنظيف الأرضيات من الأوساخ</li>
                  <li>• مسح الأسطح الرطبة</li>
                  <li>• فحص درجة الحرارة والرطوبة</li>
                  <li>• تنظيف أماكن الطعام</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">أسبوعياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2">
                  <li>• غسيل المفروشات والبياضات</li>
                  <li>• تنظيف الحمامات بعمق</li>
                  <li>• فحص أنظمة التدفئة</li>
                  <li>• تنظيف النوافذ والمرايا</li>
                  <li>• العناية بالنباتات المنزلية</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">شهرياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2">
                  <li>• تنظيف عميق لأنظمة التدفئة</li>
                  <li>• فحص شامل للرطوبة والعفن</li>
                  <li>• تنظيف السجاد والموكيت</li>
                  <li>• صيانة الأجهزة الكهربائية</li>
                  <li>• تجديد مواد التنظيف</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health and Comfort */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              الصحة والراحة في الشتاء
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                  <Thermometer className="w-6 h-6 text-red-600" />
                  الدفء والراحة
                </h3>
                <ul className="space-y-3 text-blue-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ضبط درجة الحرارة بين 20-22 درجة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>استخدام بطانيات وملابس دافئة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تدفئة الأرضيات الباردة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>إغلاق الشقوق والفتحات</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-green-600" />
                  الصحة والوقاية
                </h3>
                <ul className="space-y-3 text-blue-600/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تعقيم الأسطح بانتظام</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>غسل اليدين المتكرر</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تجنب تراكم الغبار</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>شرب السوائل الدافئة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              نصائح ذهبية للشتاء
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-2xl">
                <Snowflake className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">التحضير المبكر</h3>
                <p className="text-blue-100">
                  ابدأ التحضير للشتاء قبل بداية الموسم لتجنب المشاكل المفاجئة
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-2xl">
                <Shield className="w-8 h-8 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">الصيانة الدورية</h3>
                <p className="text-blue-100">
                  فحص وصيانة أنظمة التدفئة والتهوية بانتظام لضمان الأمان
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-400/20 p-6 rounded-2xl">
              <p className="text-xl font-semibold text-yellow-200">
                "شتاء دافئ وآمن يبدأ بتحضير جيد ونظافة مستمرة"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto prose prose-blue prose-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              دليل شامل للعناية بالمنزل في فصل الشتاء في الرياض: نظافة، دفء، وصحة
            </h2>

            <p>
              قد يظن البعض أن فصل الشتاء في الرياض هو فرصة للاسترخاء من عناء التنظيف الصيفي، لكن الحقيقة أن <strong>الشتاء يجلب تحديات تنظيفية وصحية فريدة</strong> تتطلب اهتمامًا خاصًا. فبينما تنخفض درجات الحرارة إلى ما دون 10 درجات مئوية في بعض الليالي، وترتفع الرطوبة بسبب الأمطار المتقطعة، يصبح منزلك بيئة خصبة لتراكم الغبار، تكاثر العفن، وتدهور جودة الهواء الداخلي.
            </p>

            <p>
              في هذا الدليل الشامل، سنأخذك في رحلة عملية لفهم <strong>كيف تحافظ على منزلك نظيفًا، دافئًا، وصحيًا طوال فصل الشتاء</strong>، مع نصائح مخصصة لمناخ الرياض، وجدول صيانة واقعي، وحلول وقائية تحمي عائلتك من المخاطر الشتوية الخفية.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              لماذا يختلف تنظيف المنزل في الشتاء عن باقي الفصول؟
            </h3>

            <p>
              الشتاء ليس مجرد "برد"، بل هو <strong>تداخل معقد من العوامل المناخية</strong> التي تؤثر مباشرة على بيئة منزلك:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>انخفاض التهوية</strong>: مع إغلاق النوافذ لفترات طويلة، يتراكم الهواء الراكد، الغبار، والرطوبة داخل المنزل.</li>
              <li><strong>زيادة الرطوبة النسبية</strong>: خاصةً بعد الأمطار أو عند تجفيف الملابس داخليًا، مما يخلق بيئة مثالية لنمو العفن.</li>
              <li><strong>الاعتماد المتزايد على أنظمة التدفئة</strong>: التي تجمع الغبار بسرعة وتطلق ملوثات في الهواء إذا لم تُنظّف.</li>
              <li><strong>البقاء الطويل داخل المنزل</strong>: ما يعني تراكم الأوساخ بشكل أسرع، وزيادة التعرض للملوثات الداخلية.</li>
            </ul>

            <p>
              هذه العوامل مجتمعة تجعل <strong>الخطة الشتوية للتنظيف</strong> مختلفة تمامًا عن خطط باقي الفصول. فهي لا تركز فقط على النظافة الظاهرة، بل على <strong>الوقاية من المخاطر الخفية</strong> التي قد تهدد صحة أفراد عائلتك دون أن تشعر.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              أولًا: العناية بأنظمة التدفئة — درعك ضد البرد والمخاطر
            </h3>

            <p>
              في الرياض، يعتمد معظم السكان على <strong>المدافئ الكهربائية، أو سخانات الغاز، أو أنظمة التكييف العكسي (التدفئة)</strong>. لكن هذه الأنظمة، إذا لم تُصان بانتظام، قد تتحول من مصدر للدفء إلى مصدر للخطر.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              لماذا يجب تنظيف المدافئ شهريًا؟
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>الغبار المتراكم على الملفات أو المشعاعات يقلل كفاءة التسخين بنسبة تصل إلى <strong>30%</strong>.</li>
              <li>في المدافئ الغازية، قد يؤدي الانسداد إلى <strong>تراكم أول أكسيد الكربون</strong> — غاز سام عديم الرائحة قد يسبب الوفاة.</li>
              <li>الغبار المحترق من المدافئ الكهربائية يطلق جسيمات دقيقة تهيج الجهاز التنفسي.</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              خطوات تنظيف آمنة وفعّالة:
            </h4>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li><strong>افصل الجهاز عن الكهرباء أو الغاز</strong> قبل أي عملية تنظيف.</li>
              <li><strong>نظف الفلاتر الخارجية</strong> بفرشاة ناعمة أو مكنسة كهربائية.</li>
              <li><strong>امسح الشبكات والفتحات</strong> بقطعة قماش جافة (تجنب الماء تمامًا).</li>
              <li><strong>افحص أنابيب الغاز</strong> (إذا كنت تستخدم مدفئة غاز) بحثًا عن تسريبات أو تشققات.</li>
              <li><strong>تأكد من وجود تهوية كافية</strong> في الغرفة — لا تستخدم المدفئة في غرفة مغلقة تمامًا.</li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-semibold text-yellow-800">
                <strong>نصيحة سعودية</strong>: استثمر في <strong>كاشف أول أكسيد الكربون</strong>، خاصةً إذا كنت تستخدم مدافئ غاز. جهاز بسيط قد ينقذ حياتك.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              ثانيًا: مكافحة الرطوبة والعفن — التحدي الأكبر في الشتاء
            </h3>

            <p>
              رغم أن الرياض تُعرف بجفافها، إلا أن <strong>الشتاء يجلب رطوبة غير متوقعة</strong>، خاصةً بعد الأمطار أو عند استخدام أدوات التدفئة التي تطلق بخارًا. هذه الرطوبة، إذا لم تُدار بذكاء، تتحول إلى <strong>عدو صامت</strong> يهدد منزلك وصحتك.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              أين يظهر العفن في المنزل؟
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>الحمامات</strong>: بسبب البخار المتكرر وعدم التهوية.</li>
              <li><strong>زوايا الغرف</strong>: حيث يلتقي الجدار البارد بالهواء الدافئ.</li>
              <li><strong>خلف الأثاث</strong>: خاصةً إذا كان ملاصقًا للجدران الخارجية.</li>
              <li><strong>الأسقف</strong>: في حال وجود تسريبات من السطح أو أنابيب المياه.</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              خطة وقائية شاملة:
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>استخدم مزيلات الرطوبة</strong>: خاصةً في الحمامات وغرف النوم. حتى جهاز بسيط بسعة 10 لترات يكفي لغرفة متوسطة.</li>
              <li><strong>تجنّب تجفيف الملابس داخل المنزل</strong>: إذا اضطررت، فافعل ذلك في غرفة جيدة التهوية، وافتح النافذة.</li>
              <li><strong>أصلح التسريبات فورًا</strong>: حتى أصغر تسرب ماء قد يخلق بيئة مثالية للعفن خلال 48 ساعة.</li>
              <li><strong>نظف الحمام بعد كل استخدام</strong>: شغّل مروحة الشفط لمدة 15–20 دقيقة بعد الاستحمام.</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              كيف تعالج العفن إذا ظهر؟
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>لا تتجاهله</strong>: العفن ليس مجرد "بقعة قبيحة"، بل كائن حي يطلق أبواغًا تسبب الحساسية والربو.</li>
              <li><strong>استخدم محلولًا طبيعيًا</strong>: اخلط كوبًا من الخل الأبيض مع كوب ماء، ورشه على المنطقة المصابة، واتركه 1–2 ساعة قبل المسح.</li>
              <li><strong>للبقع العنيدة</strong>: استخدم محلول مبيض مخفف (1 جزء مبيض + 10 أجزاء ماء)، مع ارتداء قفازات وكمامة.</li>
              <li><strong>استبدل المواد المتضررة</strong>: مثل الجبس أو الخشب المتعفن، لأن العفن قد يكون تغلغل في الداخل.</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              ثالثًا: تحسين جودة الهواء الداخلي — لأنك تتنفسه 24/7
            </h3>

            <p>
              وفقًا لوكالة حماية البيئة الأمريكية (EPA)، <strong>الهواء الداخلي قد يكون أكثر تلوثًا من الهواء الخارجي بـ 2–5 مرات</strong>، خاصةً في الشتاء. وفي الرياض، حيث يقضي الناس وقتًا أطول داخل منازلهم، يصبح هذا التلوث تهديدًا حقيقيًا.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              مصادر التلوث الشتوية الشائعة:
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>الغبار المتراكم</strong> على السجاد، الستائر، والمفروشات.</li>
              <li><strong>العطور والبخور</strong> التي تُستخدم بكثرة في الشتاء.</li>
              <li><strong>أبخرة الطبخ</strong> التي لا تُشفط جيدًا.</li>
              <li><strong>العفن والبكتيريا</strong> من الرطوبة غير المدارة.</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              استراتيجية تنقية الهواء:
            </h4>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li><strong>التنظيف اليومي للأرضيات</strong>: استخدم مكنسة كهربائية ذات فلتر HEPA لالتقاط الجسيمات الدقيقة.</li>
              <li><strong>غسيل المفروشات أسبوعيًا</strong>: الوسائد، البطانيات، والستائر تجمع الغبار بسرعة.</li>
              <li><strong>استخدم النباتات المنزلية</strong>: مثل نبات "اللسان الحموي" (Snake Plant) أو "الدِفَن باخيا" (Peace Lily)، التي تُثبت الدراسات أنها تمتص الملوثات مثل الفورمالديهايد.</li>
              <li><strong>افتح النوافذ يوميًا</strong>: حتى لو لـ 10–15 دقيقة، لتجديد الهواء وخفض الرطوبة.</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-semibold text-blue-800">
                <strong>معلومة مهمة</strong>: لا تعتمد فقط على "المعطرات الجوية" — فهي تغطي الرائحة ولا تزيل السبب. بل قد تضيف مواد كيميائية ضارة.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              جدول التنظيف الشتوي الذكي — خطة واقعية لأسرة سعودية
            </h3>

            <p>
              السر في نجاح أي خطة تنظيف هو <strong>الاستمرارية، وليس الكمال</strong>. إليك جدولًا عمليًا يمكنك تطبيقه دون إرهاق:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-200 px-4 py-2 text-right font-semibold text-blue-900">التكرار</th>
                    <th className="border border-gray-200 px-4 py-2 text-right font-semibold text-blue-900">المهام الأساسية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-right font-medium">يوميًا</td>
                    <td className="border border-gray-200 px-4 py-2 text-right">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>تهوية المنزل 15 دقيقة.</li>
                        <li>مسح الأسطح الرطبة (خاصة في الحمام والمطبخ).</li>
                        <li>تنظيف فضلات الطعام فورًا.</li>
                        <li>فحص درجة الحرارة (20–22°م مثالية).</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-right font-medium">أسبوعيًا</td>
                    <td className="border border-gray-200 px-4 py-2 text-right">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>غسيل البياضات والمفروشات.</li>
                        <li>تنظيف الحمامات بعمق (بما في ذلك الشفاط).</li>
                        <li>مسح النوافذ والمرايا.</li>
                        <li>فحص فلاتر المدافئ.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-right font-medium">شهريًا</td>
                    <td className="border border-gray-200 px-4 py-2 text-right">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>تنظيف عميق لأنظمة التدفئة.</li>
                        <li>فحص الجدران والأسقف بحثًا عن العفن.</li>
                        <li>تنظيف السجاد بالبخار أو المكنسة.</li>
                        <li>صيانة الأجهزة الكهربائية (سخانات، مكيفات عكسية).</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              الصحة والراحة: كيف تجعل شتاء منزلك أكثر أمانًا؟
            </h3>

            <p>
              الشتاء موسم الأمراض التنفسية. لكن من خلال بيئة منزلية صحية، يمكنك <strong>تقليل خطر الإصابة</strong> بشكل كبير.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              نصائح للدفء دون مخاطر:
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>اضبط درجة الحرارة على 20–22°م</strong>: كل درجة إضافية تزيد استهلاك الكهرباء بنسبة 5–7%.</li>
              <li><strong>استخدم طبقات ملابس دافئة</strong>: بدلاً من رفع الحرارة، ارتدي جوارب وسترات داخل المنزل.</li>
              <li><strong>عزل النوافذ والشقوق</strong>: استخدم شرائط عزل رخيصة لمنع دخول الهواء البارد.</li>
              <li><strong>سخّن الأرضيات</strong>: ضع سجادًا سميكًا أو استخدم سخانات أرضية صغيرة.</li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
              نصائح للوقاية الصحية:
            </h4>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>عقم مقابض الأبواب، مفاتيح الكهرباء، وأجهزة التحكم</strong> مرتين أسبوعيًا.</li>
              <li><strong>شجّع غسل اليدين</strong>، خاصةً بعد العودة من الخارج.</li>
              <li><strong>احرص على شرب السوائل الدافئة</strong>: مثل اليانسون أو الزنجبيل، لتعزيز المناعة.</li>
              <li><strong>نظف ألعاب الأطفال بانتظام</strong>: فهي تجمع الجراثيم بسرعة.</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              تحديات مناخ الرياض الشتوي — وحلول مخصصة
            </h3>

            <p>
              رغم أن شتاء الرياض "معتدل" مقارنةً بدول أخرى، إلا أن له خصائص فريدة:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>ليالٍ باردة جدًا</strong> (قد تصل إلى 5°م) تتبعها نهارات دافئة — هذا التباين يزيد من تكاثف الرطوبة.</li>
              <li><strong>أمطار متقطعة</strong> قد تسبب تسريبات في الأسطح غير المعزولة جيدًا.</li>
              <li><strong>الرياح الشمالية</strong> التي تحمل الغبار حتى في الشتاء.</li>
            </ul>

            <p>
              لذلك، نوصي بما يلي:
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li><strong>افحص عزل السطح قبل بداية الشتاء</strong>: خاصةً إذا كان منزلك في دور علوي.</li>
              <li><strong>نظف مزاريب المياه</strong>: لضمان تصريف الأمطار دون تجمع.</li>
              <li><strong>استخدم ستائر عازلة</strong>: تحافظ على الدفء ليلاً وتقلل فقدان الحرارة.</li>
              <li><strong>احتفظ بمواد التنظيف الجاهزة</strong>: مثل محاليل مضادة للعفن، وفلاتر احتياطية للمدافئ.</li>
            </ol>

            <h3 className="text-2xl font-bold text-blue-900 mt-8 mb-4">
              الخلاصة: شتاء منزلك يبدأ بالتخطيط، لا بالرد على الأزمات
            </h3>

            <p>
              الشتاء ليس موسمًا للإهمال، بل <strong>فرصة لبناء بيئة منزلية أكثر صحة واستدامة</strong>. من خلال اتباع هذه النصائح — من تنظيف المدافئ إلى مكافحة الرطوبة، وتحسين جودة الهواء — ستضمن أن يكون منزلك:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>مكانًا دافئًا</strong> يحمي عائلتك من البرد.</li>
              <li><strong>بيئة نظيفة</strong> تقلل خطر الأمراض التنفسية.</li>
              <li><strong>مساحة آمنة</strong> خالية من المخاطر الخفية مثل أول أكسيد الكربون أو العفن.</li>
            </ul>

            <p>
              ابدأ اليوم، قبل أن تضرب أول موجة برد. فـ <strong>الاستعداد المبكر هو سر الشتاء المريح</strong>.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
              <p className="font-semibold text-green-800">
                <strong>تذكير أخير</strong>: إذا شعرت أن المهمة أكبر من قدراتك — خاصةً في صيانة أنظمة الغاز أو معالجة العفن الواسع — فلا تتردد في <strong>الاستعانة بشركة تنظيف أو صيانة معتمدة في الرياض</strong>. السلامة أولًا دائمًا.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}