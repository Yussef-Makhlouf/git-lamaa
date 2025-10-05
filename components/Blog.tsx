import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Star } from 'lucide-react'

const blogPosts = [
  {
    title: 'تنظيف المنزل في الشتاء بالرياض',
    excerpt: 'احمِ منزلك من الرطوبة، العفن، والغبار في الشتاء! دليل خبير لتنظيف وصيانة المنزل خلال فصل الشتاء في الرياض.',
    image: '/clean-water.png',
    date: '15 ديسمبر 2024',
    author: 'فريق لمعة',
    slug: 'seasonal/winter-cleaning',
    category: 'تنظيف موسمي'
  },
  {
    title: 'تنظيف المنزل للعيد في الرياض',
    excerpt: 'استعد لعيد الفطر أو الأضحى بمنزل لامع وجاهز للضيوف! دليل خبير لتنظيف المنزل قبل العيد في الرياض.',
    image: '/clean-home.png',
    date: '10 مارس 2024',
    author: 'فريق لمعة',
    slug: 'seasonal/eid-cleaning',
    category: 'تنظيف موسمي'
  },
  {
    title: 'تنظيف المنزل قبل رمضان',
    excerpt: 'استعد لرمضان بمنزل نظيف ومريح! دليل خطوة بخطوة لتنظيف المنزل قبل رمضان في الرياض مع نصائح خبراء.',
    image: '/clean-deep.png',
    date: '5 فبراير 2024',
    author: 'فريق لمعة',
    slug: 'seasonal/ramadan-cleaning',
    category: 'تنظيف موسمي'
  },
  {
    title: 'دليل تنظيف المساجد والمصليات',
    excerpt: 'دليل متخصص لتنظيف وصيانة المساجد والمصليات. نصائح عملية للحفاظ على طهارة وقداسة بيوت الله.',
    image: '/clean-company.png',
    date: '20 يناير 2024',
    author: 'فريق لمعة',
    slug: 'seasonal/mosque-cleaning',
    category: 'تنظيف ديني'
  },
  {
    title: 'أفضل الطرق لتنظيف السجاد ',
    excerpt: 'اكتشف أحدث التقنيات والنصائح لتنظيف السجاد بشكل فعال وإزالة البقع .',
    image: '/cleaning-services.png',
    date: '10 يونيو 2023',
    author: 'أحمد محمد',
    slug: 'best-carpet-cleaning-methods',
    category: 'نصائح تنظيف'
  },
  {
    title: 'تنظيف المكاتب والمساحات التجارية',
    excerpt: 'دليل شامل لإنشاء بيئة عمل نظيفة وصحية ومنتجة. تعلم أفضل الممارسات لتنظيف المكاتب والمساحات التجارية بطريقة احترافية.',
    image: '/clean-office.png',
    date: '5 أكتوبر 2025',
    author: 'فريق لمعة',
    slug: 'commercial/office-cleaning',
    category: 'تنظيف تجاري'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-900 opacity-10"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5" />
            آخر المقالات
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">مدونة لمعة للنظافة</h2>
          <p className="text-lg text-blue-600/80 mt-4">اكتشف أحدث النصائح والمعلومات في عالم النظافة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-400/90 text-blue-900 px-4 py-1 rounded-full text-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900 hover:text-yellow-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-blue-600/80 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-blue-600/80 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 ml-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-2" />
                      {post.date}
                    </div>
                  </div>

                 
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}