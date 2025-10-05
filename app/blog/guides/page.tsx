import { Calendar, User, Clock, Award, Star, Home, Droplets, Shield, Lightbulb } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دليل التنظيف الشامل | نصائح وإرشادات من خبراء التنظيف بالرياض',
  description: 'دليل شامل لتعلم أفضل طرق التنظيف المنزلي والتجاري. نصائح احترافية من خبراء شركة لمعة للنظافة في الرياض.',
  keywords: [
    'دليل التنظيف المنزلي',
    'طرق التنظيف الصحيحة',
    'نصائح التنظيف المنزلي',
    'تنظيف المنازل بالطرق الصحيحة',
    'إرشادات التنظيف الاحترافي',
    'أفضل طرق تنظيف البيت',
    'تقنيات التنظيف الحديثة',
    'نصائح تنظيف الرياض'
  ]
}

const guides = [
  {
    id: 1,
    title: 'دليل تنظيف المنزل من الألف إلى الياء',
    excerpt: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة',
    readTime: '15 دقيقة',
    category: 'التنظيف المنزلي',
    date: '2024-01-20',
    author: 'فريق لمعة للنظافة',
    image: '/cover.png',
     
    content: `
      <h2>مقدمة عن التنظيف المنزلي الاحترافي</h2>
      <p>التنظيف المنزلي الصحيح ليس مجرد إزالة الأوساخ الظاهرة، بل هو عملية شاملة تضمن بيئة صحية وآمنة للعائلة...</p>
      
      <h3>الخطوة 1: التخطيط والتحضير</h3>
      <p>قبل البدء في التنظيف، من المهم وضع خطة واضحة وتحضير جميع الأدوات والمواد اللازمة.</p>
      
      <h4>الأدوات المطلوبة:</h4>
      <ul>
        <li>مكانس كهربائية عالية الكفاءة</li>
        <li>ممسحات مختلفة الأحجام</li>
        <li>مناشف من الألياف الدقيقة</li>
        <li>فرش تنظيف متنوعة</li>
        <li>قفازات واقية</li>
      </ul>
      
      <h4>المواد التنظيفية:</h4>
      <ul>
        <li>منظفات متعددة الأغراض</li>
        <li>مطهرات آمنة</li>
        <li>منظفات زجاج</li>
        <li>منظفات أرضيات</li>
        <li>معطرات طبيعية</li>
      </ul>
      
      <h3>الخطوة 2: ترتيب الأولويات</h3>
      <p>ابدأ دائماً بالغرف الأكثر استخداماً، ثم انتقل إلى الغرف الأقل استخداماً. القاعدة الذهبية: من الأعلى إلى الأسفل.</p>
      
      <h3>الخطوة 3: تنظيف الغرف خطوة بخطوة</h3>
      
      <h4>غرفة المعيشة:</h4>
      <ol>
        <li>ترتيب الأثاث والديكورات</li>
        <li>إزالة الغبار من الأسطح العلوية</li>
        <li>تنظيف الزجاج والمرايا</li>
        <li>تنظيف الأثاث المنجد</li>
        <li>كنس وتنظيف الأرضيات</li>
      </ol>
      
      <h4>المطبخ:</h4>
      <ol>
        <li>تنظيف الثلاجة من الداخل والخارج</li>
        <li>تنظيف الفرن والميكروويف</li>
        <li>تنظيف أسطح العمل والخزائن</li>
        <li>تنظيف الحوض والصنابير</li>
        <li>تنظيف الأرضيات والجدران</li>
      </ol>
      
      <h3>نصائح السلامة المهمة</h3>
      <ul>
        <li>استخدم دائماً قفازات واقية</li>
        <li>تأكد من التهوية الجيدة</li>
        <li>لا تخلط المواد الكيميائية المختلفة</li>
        <li>احفظ المواد التنظيفية بعيداً عن الأطفال</li>
      </ul>
      
      <h3>خلاصة وتوصيات</h3>
      <p>التنظيف المنتظم والصحيح يضمن بيئة صحية ومريحة. إذا كنت تحتاج إلى مساعدة احترافية، لا تتردد في التواصل مع خبراء التنظيف.</p>
    `
  },
  {
    id: 2,
    title: 'طرق التنظيف بالبخار: الدليل الكامل',
    excerpt: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج',
    readTime: '12 دقيقة',
    category: 'تقنيات التنظيف',
    date: '2024-01-18',
    author: 'خبراء لمعة',
    image: '/cover.png',
  
    content: `
      <h2>ما هو التنظيف بالبخار؟</h2>
      <p>التنظيف بالبخار هو تقنية حديثة تستخدم البخار الساخن عالي الضغط لتنظيف وتطهير الأسطح المختلفة...</p>
      
      <h3>فوائد التنظيف بالبخار</h3>
      <ul>
        <li><strong>قتل البكتيريا والجراثيم:</strong> البخار الساخن يقضي على 99.9% من البكتيريا</li>
        <li><strong>صديق للبيئة:</strong> لا يحتاج لمواد كيميائية ضارة</li>
        <li><strong>آمن للأطفال:</strong> لا يترك أي بقايا كيميائية</li>
        <li><strong>فعالية عالية:</strong> ينظف البقع الصعبة بسهولة</li>
        <li><strong>توفير في التكلفة:</strong> يقلل الحاجة للمنظفات</li>
      </ul>
      
      <h3>الأسطح المناسبة للتنظيف بالبخار</h3>
      <h4>الأسطح المناسبة:</h4>
      <ul>
        <li>السجاد والموكيت</li>
        <li>أقمشة الكنب والمفروشات</li>
        <li>البلاط والسيراميك</li>
        <li>الزجاج والمرايا</li>
        <li>المراتب والوسائد</li>
      </ul>
      
      <h4>الأسطح غير المناسبة:</h4>
      <ul>
        <li>الخشب غير المعالج</li>
        <li>الورق الجداري القابل للنزع</li>
        <li>الأقمشة الحساسة</li>
        <li>بعض أنواع الجلد</li>
      </ul>
      
      <h3>خطوات التنظيف بالبخار</h3>
      <ol>
        <li><strong>التحضير:</strong> إزالة الأوساخ الظاهرة والغبار</li>
        <li><strong>اختبار المنطقة:</strong> جرب على منطقة صغيرة أولاً</li>
        <li><strong>ضبط الحرارة:</strong> اختر درجة الحرارة المناسبة</li>
        <li><strong>التطبيق:</strong> حرك الجهاز ببطء ومنتظم</li>
        <li><strong>التجفيف:</strong> اترك السطح ليجف تماماً</li>
      </ol>
      
      <h3>نصائح للحصول على أفضل النتائج</h3>
      <ul>
        <li>استخدم ماءً مقطراً لتجنب ترك البقع</li>
        <li>لا تترك البخار في مكان واحد طويلاً</li>
        <li>نظف خزان الماء بانتظام</li>
        <li>اتبع تعليمات الشركة المصنعة</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'كيفية اختيار المواد التنظيفية الآمنة',
    excerpt: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة',
    readTime: '10 دقائق',
    category: 'المواد التنظيفية',
    date: '2024-01-15',
    author: 'قسم البحث والتطوير',
    image: '/cover.png',
    
    content: `
      <h2>أهمية اختيار المواد التنظيفية الآمنة</h2>
      <p>المواد التنظيفية الآمنة ليست فقط أفضل للبيئة، بل أيضاً لصحة العائلة وخاصة الأطفال والحيوانات الأليفة...</p>
      
      <h3>العلامات التي يجب البحث عنها</h3>
      <ul>
        <li><strong>خالٍ من الفوسفات:</strong> يحمي البيئة المائية</li>
        <li><strong>قابل للتحلل الحيوي:</strong> يتحلل طبيعياً في البيئة</li>
        <li><strong>خالٍ من الأمونيا:</strong> أقل ضرراً على الجهاز التنفسي</li>
        <li><strong>درجة حموضة متوازنة:</strong> آمن على البشرة</li>
        <li><strong>معتمد من جهات مختصة:</strong> مثل EPA أو EU Ecolabel</li>
      </ul>
      
      <h3>مقارنة بين المواد الطبيعية والكيميائية</h3>
      
      <h4>المواد الطبيعية:</h4>
      <div class="pros-cons">
        <div class="pros">
          <h5>المميزات:</h5>
          <ul>
            <li>آمنة على الصحة</li>
            <li>صديقة للبيئة</li>
            <li>أقل تكلفة</li>
            <li>متوفرة بسهولة</li>
          </ul>
        </div>
        <div class="cons">
          <h5>العيوب:</h5>
          <ul>
            <li>قد تحتاج وقت أطول</li>
            <li>أقل فعالية في بعض الحالات</li>
            <li>قد تحتاج كمية أكبر</li>
          </ul>
        </div>
      </div>
      
      <h4>المواد الكيميائية:</h4>
      <div class="pros-cons">
        <div class="pros">
          <h5>المميزات:</h5>
          <ul>
            <li>فعالية عالية</li>
            <li>توفير في الوقت</li>
            <li>نتائج سريعة</li>
          </ul>
        </div>
        <div class="cons">
          <h5>العيوب:</h5>
          <ul>
            <li>قد تكون ضارة للصحة</li>
            <li>ضارة للبيئة</li>
            <li>تكلفة أعلى</li>
            <li>تحتاج احتياطات أمان</li>
          </ul>
        </div>
      </div>
      
      <h3>وصفات طبيعية فعالة</h3>
      
      <h4>منظف متعدد الأغراض:</h4>
      <ul>
        <li>كوب من الخل الأبيض</li>
        <li>كوب من الماء</li>
        <li>ملعقة صغيرة من صابون الأطباق</li>
        <li>بضع قطرات من الزيت العطري</li>
      </ul>
      
      <h4>منظف الزجاج:</h4>
      <ul>
        <li>2 كوب ماء</li>
        <li>نصف كوب خل أبيض</li>
        <li>ربع كوب كحول</li>
        <li>قطرة واحدة من صابون الأطباق</li>
      </ul>
      
      <h3>نصائح السلامة</h3>
      <ul>
        <li>اقرأ التعليمات دائماً قبل الاستخدام</li>
        <li>احفظ المواد في مكان آمن بعيداً عن الأطفال</li>
        <li>استخدم القفازات عند الضرورة</li>
        <li>تأكد من التهوية الجيدة</li>
        <li>لا تخلط مواد مختلفة أبداً</li>
      </ul>
    `
  }
]

export default function CleaningGuides() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="text-yellow-400 font-semibold flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5" />
              أدلة وإرشادات التنظيف الاحترافي
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              دليل التنظيف الشامل
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              تعلم أفضل طرق وتقنيات التنظيف من خبراء شركة لمعة للنظافة. نصائح وإرشادات احترافية لتنظيف منزلك بطريقة صحيحة وآمنة
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">تنظيف منتظم</h3>
              <p className="text-blue-600/80 text-sm">نظف منزلك بانتظام لتجنب تراكم الأوساخ</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">مواد آمنة</h3>
              <p className="text-blue-600/80 text-sm">استخدم مواد تنظيف آمنة على الصحة والبيئة</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">السلامة أولاً</h3>
              <p className="text-blue-600/80 text-sm">اتبع قواعد السلامة لحمايتك وحماية عائلتك</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">نتائج احترافية</h3>
              <p className="text-blue-600/80 text-sm">طبق النصائح المهنية للحصول على أفضل النتائج</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">أدلة التنظيف التفصيلية</h2>
            <p className="text-xl text-blue-600/80">مجموعة شاملة من الأدلة والنصائح العملية</p>
          </div>

          <div className="space-y-8">
            {guides.map((guide) => (
              <article key={guide.id} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-600/80 z-10"></div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Clock className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-sm font-medium">وقت القراءة</div>
                        <div className="text-lg font-bold">{guide.readTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {guide.category}
                      </span>
                      <div className="flex items-center gap-2 text-blue-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        {new Date(guide.date).toLocaleDateString('ar-SA')}
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 text-sm">
                        <User className="w-4 h-4" />
                        {guide.author}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{guide.title}</h2>
                    <p className="text-xl text-blue-600/80 mb-6 leading-relaxed">{guide.excerpt}</p>

                    {/* Article Preview */}
                    <div className="prose prose-lg max-w-none mb-6">
                      <div 
                        className="text-blue-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ 
                          __html: guide.content.split('</p>')[0] + '</p>' 
                        }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-medium">دليل مفيد</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">
              تحتاج خدمة تنظيف احترافية؟
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              إذا كنت تفضل الحصول على خدمة تنظيف احترافية، فريقنا المتخصص جاهز لخدمتك على مدار الساعة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0592425077"
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                احجز خدمة تنظيف احترافية
              </a>
            
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}