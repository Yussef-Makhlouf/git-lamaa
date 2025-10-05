'use client'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 space-x-reverse">
              <Image src="/arabic color.png" alt="لمعة للنظافة" width={60} height={60} className="w-auto h-16 rounded-full border-2 border-yellow-400 transform group-hover:scale-105 transition-transform" />
              <div className="text-2xl font-bold">
                <span className="text-white">لمعة</span>
                <span className="text-yellow-400">للنظافة</span>
              </div>
            </Link>
            <p className="text-blue-100">نقدم خدمات نظافة احترافية في الرياض منذ أكثر من 10 سنوات.</p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-yellow-400 transition-colors group">
                <Facebook className="h-5 w-5 text-blue-100 group-hover:text-blue-900" />
              </Link>
              <Link href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-yellow-400 transition-colors group">
                <Twitter className="h-5 w-5 text-blue-100 group-hover:text-blue-900" />
              </Link>
              <Link href="#" className="bg-blue-800/50 p-2 rounded-full hover:bg-yellow-400 transition-colors group">
                <Instagram className="h-5 w-5 text-blue-100 group-hover:text-blue-900" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              {['خدماتنا', 'عن الشركة', 'معرض الأعمال', 'المدونة'].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="text-blue-100 hover:text-yellow-400 transition-colors flex items-center">
                    <span className="ml-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-100">
                <Phone className="h-5 w-5 ml-3 text-yellow-400" />
                <span>0592425077</span>
              </li>
              <li className="flex items-center text-blue-100">
                <Mail className="h-5 w-5 ml-3 text-yellow-400" />
                <span>info@lamaa-clean.com</span>
              </li>
              <li className="flex items-center text-blue-100">
                <MapPin className="h-5 w-5 ml-3 text-yellow-400" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">النشرة البريدية</h3>
            <p className="text-blue-100 mb-4">اشترك للحصول على آخر العروض والأخبار</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-2 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors">
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-center md:text-right">
              © {new Date().getFullYear()} لمعة للنظافة. جميع الحقوق محفوظة.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-blue-800/50 p-2 rounded-full hover:bg-yellow-400 transition-colors group"
            >
              <ArrowUp className="h-5 w-5 text-blue-100 group-hover:text-blue-900" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}