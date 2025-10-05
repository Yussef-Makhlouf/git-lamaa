import { Metadata } from 'next'
import { Calendar, User, Clock, ArrowRight, Star, Home, Droplets, Shield, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'نصائح تنظيف منزلية وتجارية في الرياض | مدونة لمعة للنظافة',
  description: 'اكتشف أفضل نصائح التنظيف المنزلية والتجارية من خبراء شركة لمعة للنظافة في الرياض. دليلك الشامل لمنزل نظيف، صحي، ومرتب طوال العام — من التنظيف العميق إلى الصيانة الوقائية.',
  keywords: [
    'نصائح تنظيف منزلية في الرياض',
    'شركة تنظيف منازل بالرياض',
    'مدونة التنظيف السعودية',
    'إرشادات تنظيف احترافية',
    'تنظيف تجاري ومكتبي',
    'طرق تنظيف السجاد والموكيت',
    'مكافحة العفن والرطوبة',
    'تنظيف قبل وبعد السفر',
    'خدمات تنظيف منازل',
    'لمعة للنظافة الرياض'
  ],
  openGraph: {
    title: 'نصائح تنظيف منزلية وتجارية في الرياض | مدونة لمعة للنظافة',
    description: 'دليلك الشامل من خبراء لمعة للنظافة: نصائح عملية، جداول تنظيف ذكية، وحلول لمشاكل التنظيف الشائعة في المنازل والمكاتب بالرياض.',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://getlamaaclean.com/blog',
    siteName: 'لمعة للنظافة',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نصائح تنظيف منزلية وتجارية في الرياض | مدونة لمعة',
    description: 'منزل نظيف = حياة صحية. تعلّم أسرار التنظيف الاحترافي من خبراء الرياض.',
  },
  alternates: {
    canonical: 'https://getlamaaclean.com/blog',
  },
}

const blogPosts = [
  {
    id: 1,
    slug: 'ultimate-home-cleaning-guide',
    title: 'دليل تنظيف المنزل الشامل: من الألف إلى الياء',
    excerpt: 'تعلم الطريقة الصحيحة لتنظيف منزلك بطريقة احترافية وآمنة. دليل شامل يغطي جميع جوانب التنظيف المنزلي.',
    readTime: '15 دقيقة',
    category: 'التنظيف المنزلي',
    date: '2024-01-20',
    author: 'فريق لمعة للنظافة',
    image: '/cover.png',
    featured: true
  },
  {
    id: 7,
    slug: 'seasonal/winter-cleaning',
    title: 'تنظيف المنزل في الشتاء بالرياض',
    excerpt: 'احمِ منزلك من الرطوبة، العفن، والغبار في الشتاء! دليل خبير لتنظيف وصيانة المنزل خلال فصل الشتاء في الرياض.',
    readTime: '18 دقيقة',
    category: 'تنظيف موسمي',
    date: '2024-12-15',
    author: 'فريق لمعة',
    image: '/clean-water.png',
    featured: false
  },
  {
    id: 8,
    slug: 'seasonal/eid-cleaning',
    title: 'تنظيف المنزل للعيد في الرياض',
    excerpt: 'استعد لعيد الفطر أو الأضحى بمنزل لامع وجاهز للضيوف! دليل خبير لتنظيف المنزل قبل العيد في الرياض.',
    readTime: '16 دقيقة',
    category: 'تنظيف موسمي',
    date: '2024-03-10',
    author: 'فريق لمعة',
    image: '/clean-home.png',
    featured: false
  },
  {
    id: 9,
    slug: 'seasonal/ramadan-cleaning',
    title: 'تنظيف المنزل قبل رمضان',
    excerpt: 'استعد لرمضان بمنزل نظيف ومريح! دليل خطوة بخطوة لتنظيف المنزل قبل رمضان في الرياض مع نصائح خبراء.',
    readTime: '14 دقيقة',
    category: 'تنظيف موسمي',
    date: '2024-02-05',
    author: 'فريق لمعة',
    image: '/clean-deep.png',
    featured: false
  },
  {
    id: 10,
    slug: 'seasonal/mosque-cleaning',
    title: 'دليل تنظيف المساجد والمصليات',
    excerpt: 'دليل متخصص لتنظيف وصيانة المساجد والمصليات. نصائح عملية للحفاظ على طهارة وقداسة بيوت الله.',
    readTime: '12 دقيقة',
    category: 'تنظيف ديني',
    date: '2024-01-20',
    author: 'فريق لمعة',
    image: '/clean-company.png',
    featured: false
  },
  {
    id: 2,
    slug: 'carpet-rug-cleaning-guide',
    title: 'تنظيف السجاد والموكيت: دليل شامل',
    excerpt: 'تعلم أفضل الطرق لتنظيف السجاد والموكيت بطريقة احترافية وآمنة. دليل شامل يغطي جميع أنواع السجاد وطرق العناية بها.',
    readTime: '12 دقيقة',
    category: 'تنظيف السجاد',
    date: '2024-01-25',
    author: 'فريق لمعة للنظافة',
    image: '/cover.png',
    featured: false
  },
  {
    id: 3,
    slug: 'deep-kitchen-cleaning-tips',
    title: 'تنظيف المطبخ العميق: نصائح احترافية',
    excerpt: 'تعلم أفضل الطرق لتنظيف المطبخ بطريقة احترافية وعميقة. دليل شامل يغطي جميع مناطق المطبخ وطرق العناية بها.',
    readTime: '14 دقيقة',
    category: 'تنظيف المطبخ',
    date: '2024-01-28',
    author: 'فريق لمعة للنظافة',
    image: '/cover.png',
    featured: false
  },
  {
    id: 4,
    slug: 'steam-cleaning-methods',
    title: 'طرق التنظيف بالبخار: الدليل الكامل',
    excerpt: 'اكتشف فوائد وطرق التنظيف بالبخار الحراري للحصول على أفضل النتائج. تقنية حديثة وفعالة للتنظيف العميق.',
    readTime: '12 دقيقة',
    category: 'تقنيات التنظيف',
    date: '2024-01-18',
    author: 'خبراء لمعة',
    image: '/cover.png',
    featured: false
  },
  {
    id: 5,
    slug: 'safe-cleaning-products',
    title: 'كيفية اختيار المواد التنظيفية الآمنة',
    excerpt: 'دليل شامل لاختيار أفضل المواد التنظيفية الآمنة على الصحة والبيئة. حماية عائلتك مع الحصول على نتائج مثالية.',
    readTime: '10 دقائق',
    category: 'المواد التنظيفية',
    date: '2024-01-15',
    author: 'قسم البحث والتطوير',
    image: '/cover.png',
    featured: false
  },
  {
    id: 6,
    slug: 'professional-cleaning-services',
    title: 'لماذا تحتاج خدمات التنظيف الاحترافية؟',
    excerpt: 'اكتشف الفوائد العديدة لاستخدام خدمات التنظيف الاحترافية. توفير الوقت والجهد مع ضمان أفضل النتائج.',
    readTime: '8 دقائق',
    category: 'الخدمات الاحترافية',
    date: '2024-01-12',
    author: 'فريق الخدمات',
    image: '/cover.png',
    featured: false
  },
  {
    id: 11,
    slug: 'commercial/office-cleaning',
    title: 'تنظيف المكاتب والمساحات التجارية',
    excerpt: 'دليل شامل لإنشاء بيئة عمل نظيفة وصحية ومنتجة. تعلم أفضل الممارسات لتنظيف المكاتب والمساحات التجارية بطريقة احترافية.',
    readTime: '20 دقيقة',
    category: 'تنظيف تجاري',
    date: '2025-10-05',
    author: 'فريق لمعة',
    image: '/clean-office.png',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <span className="text-yellow-400 font-semibold flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5" />
              مدونة لمعة للنظافة
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              نصائح وإرشادات التنظيف
          </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              اكتشف أفضل الطرق والتقنيات للتنظيف من خبراء شركة لمعة للنظافة. نصائح عملية وإرشادات احترافية لتنظيف منزلك بطريقة صحيحة وآمنة
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
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">نتائج احترافية</h3>
              <p className="text-blue-600/80 text-sm">طبق النصائح المهنية للحصول على أفضل النتائج</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">المقال المميز</h2>
            <p className="text-xl text-blue-600/80">أهم المقالات والنصائح من خبرائنا</p>
          </div>

          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden mb-16" dir='rtl'>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-600/80 z-10"></div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                      <div className="text-lg font-bold">مقال مميز</div>
                      <div className="text-sm opacity-90">وقت القراءة: {post.readTime}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-blue-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('ar-SA')}
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 text-sm">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-4">{post.title}</h2>
                  <p className="text-xl text-blue-600/80 mb-6 leading-relaxed">{post.excerpt}</p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    اقرأ المقال كاملاً
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
            </div>
          </section>

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">جميع المقالات</h2>
            <p className="text-xl text-blue-600/80">مجموعة شاملة من النصائح والإرشادات</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                        مميز
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-blue-600/80 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-blue-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('ar-SA')}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    اقرأ المزيد
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
              <a
                href="https://wa.me/966592425077?text=أرغب في الاستفسار عن خدمات التنظيف"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
              >
                تواصل عبر واتساب
                </a>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}