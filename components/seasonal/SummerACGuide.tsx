'use client'

import { Thermometer, Wind, Droplets, AlertTriangle, CheckCircle, Clock, Shield, Wrench } from 'lucide-react'

export default function SummerACGuide() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Thermometer className="h-8 w-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">دليل الصيف الشامل</span>
            </div>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              تنظيف وصيانة المكيفات قبل الصيف
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              مع ارتفاع درجات الحرارة في الرياض، يصبح تنظيف المكيفات ضرورة حتمية. تعلم الطرق الصحيحة للعناية بمكيفك وضمان كفاءته طوال فصل الصيف
            </p>
          </div>
        </div>
      </section>

      {/* Why Clean AC Before Summer */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              لماذا يجب تنظيف المكيف قبل الصيف؟
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">كفاءة التبريد</h3>
                <p className="text-blue-600/80 leading-relaxed">
                  المكيف النظيف يبرد بشكل أسرع وأكثر فعالية، مما يوفر الراحة المطلوبة في حر الرياض الشديد
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Wind className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">جودة الهواء</h3>
                <p className="text-blue-600/80 leading-relaxed">
                  إزالة الغبار والبكتيريا من الفلاتر يحسن جودة الهواء ويحمي صحة العائلة من الحساسية
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">توفير الكهرباء</h3>
                <p className="text-blue-600/80 leading-relaxed">
                  المكيف النظيف يستهلك طاقة أقل بنسبة تصل إلى 30%، مما يقلل فاتورة الكهرباء الشهرية
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">إطالة العمر الافتراضي</h3>
                <p className="text-blue-600/80 leading-relaxed">
                  الصيانة الدورية تحمي أجزاء المكيف من التلف وتطيل عمره الافتراضي لسنوات إضافية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              خطوات تنظيف المكيف بالتفصيل
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl border-r-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">إيقاف التيار الكهربائي</h3>
                    <p className="text-blue-600/80 mb-4 leading-relaxed">
                      قبل البدء بأي عملية تنظيف، تأكد من إيقاف المكيف وفصل التيار الكهربائي عنه تماماً لضمان السلامة
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-yellow-800">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-semibold">تحذير مهم:</span>
                      </div>
                      <p className="text-yellow-700 mt-2">
                        لا تحاول تنظيف المكيف أثناء تشغيله أو توصيله بالكهرباء
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl border-r-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">تنظيف الفلاتر</h3>
                    <p className="text-blue-600/80 mb-4 leading-relaxed">
                      أزل الفلاتر بحذر واغسلها بالماء الفاتر والصابون اللطيف. اتركها تجف تماماً قبل إعادة تركيبها
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-blue-900 mb-2">للفلاتر القابلة للغسيل:</h4>
                        <ul className="text-sm text-blue-600/80 space-y-1">
                          <li>• استخدم ماء فاتر مع صابون لطيف</li>
                          <li>• اشطف جيداً لإزالة بقايا الصابون</li>
                          <li>• اتركها تجف في الهواء الطلق</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-blue-900 mb-2">للفلاتر غير القابلة للغسيل:</h4>
                        <ul className="text-sm text-blue-600/80 space-y-1">
                          <li>• استبدلها بفلاتر جديدة</li>
                          <li>• تحقق من المقاس والنوع المناسب</li>
                          <li>• احتفظ بفلاتر احتياطية</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl border-r-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">تنظيف الوحدة الداخلية</h3>
                    <p className="text-blue-600/80 mb-4 leading-relaxed">
                      نظف الملفات والمراوح باستخدام فرشاة ناعمة ومنظف مخصص للمكيفات
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-blue-600/80">استخدم فرشاة ناعمة لإزالة الغبار من الملفات</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-blue-600/80">نظف المروحة بقطعة قماش مبللة</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-blue-600/80">امسح الجزء الخارجي بمنظف لطيف</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border-r-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">تنظيف الوحدة الخارجية</h3>
                    <p className="text-blue-600/80 mb-4 leading-relaxed">
                      نظف الوحدة الخارجية من الأوراق والأتربة المتراكمة، خاصة في مناخ الرياض المغبر
                    </p>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">نصائح خاصة لمناخ الرياض:</h4>
                      <ul className="text-sm text-blue-600/80 space-y-1">
                        <li>• نظف الوحدة الخارجية شهرياً بسبب العواصف الرملية</li>
                        <li>• تحقق من عدم وجود أعشاش طيور أو حشرات</li>
                        <li>• أزل أي عوائق حول الوحدة لضمان التهوية</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              جدول الصيانة الدورية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">أسبوعياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2 text-right">
                  <li>• فحص الفلاتر وتنظيفها إذا لزم الأمر</li>
                  <li>• مسح الوحدة الداخلية من الغبار</li>
                  <li>• التحقق من عمل المكيف بكفاءة</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">شهرياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2 text-right">
                  <li>• تنظيف الوحدة الخارجية</li>
                  <li>• فحص مستوى غاز التبريد</li>
                  <li>• تنظيف مجاري التصريف</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">موسمياً</h3>
                <ul className="text-blue-600/80 text-sm space-y-2 text-right">
                  <li>• صيانة شاملة قبل الصيف</li>
                  <li>• فحص الأجزاء الكهربائية</li>
                  <li>• تنظيف عميق للملفات</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              علامات تستدعي الصيانة الفورية
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">علامات الخطر</h3>
                </div>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>ارتفاع غير طبيعي في فاتورة الكهرباء</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>أصوات غريبة أو اهتزاز غير طبيعي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تسرب المياه من الوحدة الداخلية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>رائحة كريهة من المكيف</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-800">علامات الأداء الجيد</h3>
                </div>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>تبريد سريع ومنتظم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>هواء نظيف وخالي من الروائح</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>عمل هادئ بدون أصوات مزعجة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>استهلاك طاقة معتدل</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Riyadh Climate */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
              نصائح خاصة لمناخ الرياض
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">التحديات المناخية</h3>
                  <ul className="space-y-3 text-blue-600/80">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>درجات حرارة تصل إلى 50 درجة مئوية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>عواصف رملية متكررة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>جفاف شديد في الهواء</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>تراكم الغبار بسرعة</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">الحلول المناسبة</h3>
                  <ul className="space-y-3 text-blue-600/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>تنظيف الفلاتر أسبوعياً في موسم العواصف</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>استخدام أغطية واقية للوحدة الخارجية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>ضبط درجة الحرارة على 24-26 درجة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>صيانة دورية كل 3 أشهر</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              المقال التفصيلي: دليلك الشامل لصيانة المكيف في الصيف السعودي
            </h2>

            <p>
              مع اقتراب فصل الصيف في المملكة العربية السعودية، وتحديدًا في العاصمة الرياض، يبدأ السباق الحقيقي مع الحرارة. فبينما ترتفع درجات الحرارة لتلامس <strong>50 درجة مئوية</strong> في ذروة الموسم، يصبح المكيف ليس رفاهية، بل <strong>ضرورة حتمية</strong> للعيش بكرامة وصحة. لكن هل تعلم أن <strong>المكيف غير النظيف قد يكون سببًا في ارتفاع فاتورة الكهرباء، وتدهور جودة الهواء، بل وحتى تعطيله المفاجئ</strong> في أشد الأيام حرارة؟
            </p>

            <p>
              في هذا الدليل الشامل، نأخذك خطوة بخطوة لفهم <strong>أهمية تنظيف المكيف قبل الصيف</strong>، ونقدّم لك <strong>خطة صيانة واقعية</strong> تناسب مناخ الرياض القاسي، مع نصائح مخصصة لحماية جهازك من العواصف الرملية والغبار المتراكم. كل ما نقدّمه هنا مبني على خبرة فنية وتجربة محلية، وليس مجرد نصائح عامة.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              لماذا يعتبر تنظيف المكيف قبل الصيف استثمارًا ذكيًا وليس ترفًا؟
            </h3>

            <p>
              الكثير من الأسر في الرياض تنتظر حتى يبدأ المكيف في إصدار أصوات غريبة أو يفشل في التبريد، ثم تلجأ إلى الصيانة الطارئة — وهي خطوة مكلفة وغير فعّالة. في الحقيقة، <strong>الصيانة الوقائية قبل بدء الصيف</strong> هي الحل الأمثل، وفوائدها لا تقتصر على الأداء فقط، بل تمتد إلى:
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>
                <strong>تحسين كفاءة التبريد بنسبة تصل إلى 40%</strong><br />
                عندما تتراكم طبقة من الغبار على الفلاتر والملفات الداخلية، يصبح على المكيف أن يعمل بجهد أكبر لتبريد نفس المساحة. هذا يعني أنك ستشعر بالحرارة لفترة أطول، حتى لو كان المكيف يعمل بكامل طاقته. بعد التنظيف، ستشعر بالفرق من أول تشغيل.
              </li>
              <li>
                <strong>توفير كبير في فاتورة الكهرباء</strong><br />
                وفقًا لدراسات هيئة كفاءة الطاقة السعودية، فإن <strong>المكيف النظيف يستهلك طاقة أقل بنسبة 25–30%</strong> مقارنةً بالمكيف المتسخ. في ظل ارتفاع أسعار الكهرباء وزيادة الاستهلاك الصيفي، يمكن أن يوفر لك هذا ما يصل إلى <strong>300–500 ريال شهريًا</strong> خلال أشهر الصيف الثلاثة.
              </li>
              <li>
                <strong>حماية صحة أفراد العائلة</strong><br />
                الغبار، وحبوب اللقاح، والبكتيريا، والعفن — كلها تتراكم داخل المكيف، خاصةً في البيئات الجافة مثل الرياض. عند تشغيل الجهاز، تُطلق هذه الملوثات في الهواء الذي تتنفسه عائلتك. هذا قد يؤدي إلى <strong>مشاكل تنفسية، حساسية، صداع، بل وحتى تفاقم حالات الربو</strong>. تنظيف الفلاتر بانتظام يقلل هذه المخاطر بشكل كبير.
              </li>
              <li>
                <strong>إطالة عمر المكيف لسنوات إضافية</strong><br />
                الضغط الزائد على المحرك والضاغط (الكومبرسور) بسبب الانسداد يؤدي إلى تآكل أسرع للأجزاء الداخلية. الصيانة الدورية تمنع هذا التآكل، مما يضمن أن يستمر مكيفك في العمل بكفاءة <strong>لمدة 10–15 سنة</strong> بدلًا من 6–8 سنوات.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              الخطوات العملية لتنظيف المكيف بنفسك: دليل آمن وفعال
            </h3>

            <p>
              لا تحتاج دائمًا إلى فني لتنظيف المكيف. جزء كبير من الصيانة يمكنك القيام به بنفسك، شرط أن تتبع الإرشادات بدقة. إليك <strong>الخطوات الأربع الأساسية</strong> التي يجب أن تقوم بها قبل بدء الصيف:
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">الخطوة 1: إيقاف التيار الكهربائي — السلامة أولًا</h4>
            <p>
              قبل لمس أي جزء من المكيف، <strong>افصله تمامًا عن مصدر الكهرباء</strong>. لا يكفي الضغط على زر "إيقاف" في جهاز التحكم، بل يجب فصل القابس أو إطفاء القاطع الكهربائي المخصص له.<br />
              <em className="text-red-600 font-medium">تحذير مهم</em>: لا تحاول تنظيف المكيف أثناء تشغيله أو حتى وهو متصل بالكهرباء. خطر الصعق الكهربائي حقيقي، خاصة عند استخدام الماء أو المنظفات.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">الخطوة 2: تنظيف الفلاتر — القلب النابض لنقاء الهواء</h4>
            <p>
              الفلاتر هي أول خط دفاع ضد الغبار. في الرياض، يُنصح بفحصها <strong>مرة أسبوعيًا</strong> خلال موسم العواصف الرملية.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>
                <strong>للفلاتر القابلة للغسيل</strong> (وهي الأكثر شيوعًا في المكيفات المنزلية):<br />
                - افتح غطاء الوحدة الداخلية بلطف.<br />
                - أخرج الفلاتر بحذر (عادةً ما تكون مثبتة بمشابك بلاستيكية).<br />
                - اغسلها بماء فاتر وصابون لطيف (مثل صابون الأطباق).<br />
                - تجنب استخدام الفرش الخشنة أو المواد الكيميائية القوية.<br />
                - اتركها تجف تمامًا في الظل (ليس تحت أشعة الشمس المباشرة، لتجنب تشوه البلاستيك).
              </li>
              <li>
                <strong>للفلاتر غير القابلة للغسيل</strong> (مثل فلاتر الكربون أو HEPA):<br />
                - لا تحاول غسلها — فهذا يدمر طبقاتها الماصة.<br />
                - استبدلها كل 3–6 أشهر، أو حسب توصية الشركة المصنعة.<br />
                - احتفظ بفلاتر احتياطية في المنزل، خاصةً قبل موسم الصيف.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">الخطوة 3: تنظيف الوحدة الداخلية — لا تهمل ما لا تراه</h4>
            <p>
              خلف الفلاتر، توجد الملفات النحاسية والمروحة. هذه الأجزاء تتراكم عليها طبقات رقيقة من الغبار والزيوت، مما يقلل كفاءة التبادل الحراري.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li>استخدم <strong>فرشاة ناعمة</strong> (مثل فرشاة تنظيف الكاميرات) لإزالة الغبار من بين الزعانف النحاسية.</li>
              <li>امسح المروحة بقطعة قماش مبللة قليلاً (لا تستخدم الماء مباشرةً).</li>
              <li>نظف الجزء الخارجي للوحدة بقطعة قماش مبللة بمنظف لطيف (مثل خليط من الماء والخل الأبيض بنسبة 1:1).</li>
            </ul>
            <p className="text-gray-600 italic">
              ملاحظة: لا تستخدم الماء المضغوط أو البخاخات القوية، فقد تُثني الزعانف النحاسية وتُعطّل تدفق الهواء.
            </p>

            <h4 className="text-xl font-semibold text-blue-800 mt-6 mb-3">الخطوة 4: العناية بالوحدة الخارجية — درعك ضد عواصف الرياض</h4>
            <p>
              الوحدة الخارجية (التي توضع خارج المنزل) هي الأكثر تأثرًا بمناخ الرياض. الغبار، الرمال، أوراق الأشجار، بل وحتى أعشاش الطيور — كلها قد تسد مجرى الهواء وتُعطّل التبريد.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li><strong>نظّفها مرة شهريًا</strong> خلال الصيف.</li>
              <li>استخدم خرطوم ماء بضغط منخفض لرش الزعانف الخارجية (من الداخل إلى الخارج، وليس العكس).</li>
              <li>تأكد من وجود مسافة لا تقل عن <strong>50 سم</strong> حول الوحدة لضمان تهوية جيدة.</li>
              <li>فكّر في تركيب <strong>غطاء واقٍ</strong> أثناء العواصف الرملية (لكن تأكد من إزالته قبل التشغيل!).</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              جدول الصيانة الذكي: متى تفعل ماذا؟
            </h3>

            <p>
              الصيانة ليست حدثًا سنويًا، بل <strong>روتين مستمر</strong>. إليك جدولًا واقعيًا يناسب مناخ الرياض:
            </p>

            <table className="w-full text-right border-collapse border border-gray-200 my-6">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-300 p-3 font-semibold text-blue-900">التكرار</th>
                  <th className="border border-gray-300 p-3 font-semibold text-blue-900">المهام الأساسية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">أسبوعيًا</td>
                  <td className="border border-gray-300 p-3">
                    - فحص الفلاتر وتنظيفها إن لزم الأمر.<br />
                    - مسح الوحدة الداخلية من الغبار الخارجي.<br />
                    - التأكد من عدم وجود تسرب مياه.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">شهريًا</td>
                  <td className="border border-gray-300 p-3">
                    - تنظيف الوحدة الخارجية.<br />
                    - فحص مجاري التصريف (الدرن) لضمان عدم انسدادها.<br />
                    - الاستماع لأي أصوات غير طبيعية.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">فصليًا (قبل الصيف)</td>
                  <td className="border border-gray-300 p-3">
                    - صيانة شاملة: تنظيف عميق للملفات، فحص مستوى غاز الفريون، اختبار الدوائر الكهربائية.<br />
                    - استبدال الفلاتر إذا كانت تالفة.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              علامات تحذيرية: متى يجب أن تتصل بفني فورًا؟
            </h3>

            <p>
              بعض المشكلات لا يمكن حلها بالتنظيف المنزلي. إذا لاحظت أيًا من هذه العلامات، <strong>لا تؤجل الصيانة</strong>:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
              <li><strong>ارتفاع مفاجئ في فاتورة الكهرباء</strong> دون تغيير في عادات الاستخدام.</li>
              <li><strong>أصوات طقطقة، صرير، أو اهتزاز قوي</strong> عند التشغيل.</li>
              <li><strong>تسرب مياه من الوحدة الداخلية</strong> على السقف أو الجدران.</li>
              <li><strong>رائحة كريهة</strong> (مثل العفن أو البلاستيك المحروق) تخرج من فتحات التهوية.</li>
              <li><strong>تبريد غير متساوٍ</strong> في الغرف المختلفة.</li>
            </ul>

            <p>
              هذه العلامات قد تشير إلى <strong>نقص في غاز الفريون، انسداد في أنابيب التصريف، أو عطل كهربائي</strong> — وكلها تتطلب تدخلًا فنيًا متخصصًا.
            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              نصائح ذهبية خاصة بمناخ الرياض
            </h3>

            <p>
              الرياض تُعد واحدة من أكثر المدن تحديًا للمكيفات بسبب:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
              <li><strong>الحرارة الشديدة</strong> (تتجاوز 45°م لأسابيع متتالية).</li>
              <li><strong>العواصف الترابية</strong> (خاصة في الربيع والصيف).</li>
              <li><strong>الجفاف الشديد</strong> الذي يزيد من تراكم الغبار الكهروستاتيكي.</li>
            </ul>

            <p>
              لذلك، نوصي بما يلي:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>اضبط درجة الحرارة على 24–26°م</strong><br />
                كل درجة أقل من 24°م تزيد استهلاك الكهرباء بنسبة 6–8%. 24°م هي الدرجة المثالية للراحة والكفاءة.
              </li>
              <li>
                <strong>استخدم الستائر العاكسة أو الفاتحة</strong><br />
                تقليل أشعة الشمس المباشرة على النوافذ يخفف الحمل على المكيف بنسبة تصل إلى 20%.
              </li>
              <li>
                <strong>أغلق الأبواب والنوافذ</strong> أثناء التشغيل<br />
                التسرب الهوائي هو عدو الكفاءة. تأكد من عزل الغرفة جيدًا.
              </li>
              <li>
                <strong>اختر مكيفات ذات تصنيف "كفاءة طاقة" عالي</strong><br />
                ابحث عن شعار "كفاءة" من هيئة كفاءة الطاقة السعودية. هذه الأجهزة توفر حتى 50% من استهلاك الطاقة.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-blue-900 mt-10 mb-4">
              الخلاصة: الصيانة قبل الصيف = راحة طوال الصيف
            </h3>

            <p>
              في النهاية، تنظيف المكيف ليس مجرد مهمة منزلية، بل <strong>استثمار في صحتك، راحتك، ومحفظتك</strong>. في بيئة قاسية مثل الرياض، لا يمكن الاعتماد على "الحظ" في عمل المكيف. الخطة الوقائية البسيطة التي قدمناها — من تنظيف أسبوعي للمرشحات إلى الصيانة الفصلية — ستوفر لك:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
              <li><strong>هواء أنظف</strong> يحمي عائلتك من الأمراض.</li>
              <li><strong>تبريد أسرع</strong> يمنحك الراحة فور دخولك المنزل.</li>
              <li><strong>فاتورة كهرباء أقل</strong> تُشعرك بالاطمئنان المالي.</li>
              <li><strong>جهازًا يدوم أطول</strong> دون أعطال مفاجئة.</li>
            </ul>

            <p className="font-medium text-lg">
              ابدأ اليوم، قبل أن تضرب موجة الحر الأولى. فالمكيف النظيف ليس رفاهية... بل <strong>حقٌّ أساسي في الصيف السعودي</strong>.
            </p>

            <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-bold text-blue-900 mb-2">هل تحتاج مساعدة فنية؟</h4>
              <p>
                إذا شعرت أن المهمة أكبر من قدراتك، فلا تتردد في الاستعانة بفني معتمد من شركة موثوقة في الرياض. تأكد من أن الفني يحمل شهادة من <strong>الهيئة السعودية للمواصفات والمقاييس</strong>، ويستخدم قطع غيار أصلية.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}