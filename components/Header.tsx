'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MessageCircle, Clock, Shield, Star } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#services', label: 'خدماتنا' },
    { href: '/#about', label: 'عن الشركة' },
    { href: '/#gallery', label: 'معرض الأعمال' },
    { href: '/#testimonials', label: 'آراء العملاء' },
    { href: '/blog', label: 'المدونة' },
    { href: '/#contact', label: 'اتصل بنا' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className={`${isScrolled ? 'hidden' : 'block'} bg-yellow-400 text-blue-900 py-2`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-900" />
              <span className="text-blue-900">متاحون 24/7 لخدمتكم</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-900" />
              <span className="text-blue-900">مرخصة ومعتمدة</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-blue-900 fill-current" />
              <span className="text-blue-900">تقييم 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-900" />
              <span className="text-blue-900">0592425077</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-1/2 opacity-20">
        <svg className="relative block w-full h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current text-blue-200"></path>
        </svg>
      </div>

      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-yellow-400 transform group-hover:scale-105 transition-transform">
              <Image
                src="/arabic color.png"
                alt="لمعة للنظافة - شركة تنظيف معتمدة بالرياض"
                fill
                className="object-cover bg-white"
              />
            </div>
            <div className="text-2xl font-bold">
              <span className={isScrolled ? 'text-blue-900' : 'text-white'}>لمعة</span>
              <span className="text-yellow-400">للنظافة</span>
            </div>
            <div className={`text-xs ${isScrolled ? 'text-blue-600' : 'text-blue-200'} hidden md:block`}>
              شركة معتمدة
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isScrolled 
                    ? 'text-blue-900 hover:text-yellow-500' 
                    : 'text-white hover:text-yellow-400'
                } transition-all duration-300 font-medium relative group py-2 px-3 rounded-lg hover:bg-white/10`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <a 
              href="https://wa.me/966592425077?text=مرحباً، أرغب في الاستفسار عن خدمات التنظيف" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center ${
                isScrolled ? 'text-blue-900' : 'text-white'
              } hover:text-yellow-400 transition-colors group`}
            >
              <MessageCircle className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" />
              <span className="font-medium">واتساب</span>
            </a>
            <a 
              href="tel:0592425077"
              className={`flex items-center ${
                isScrolled ? 'text-blue-900' : 'text-white'
              } hover:text-yellow-400 transition-colors group`}
            >
              <Phone className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" />
              <span className="font-medium">0592425077</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled ? 'hover:bg-blue-50' : 'hover:bg-white/10'
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 animate-fadeIn border border-blue-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-blue-900 hover:bg-blue-50 hover:text-yellow-500 rounded-lg transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <a 
                href="https://wa.me/966592425077?text=مرحباً، أرغب في الاستفسار عن خدمات التنظيف" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold">
                  تواصل واتساب
                </Button>
              </a>
              <a href="tel:0592425077" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                  اتصل الآن
                </Button>
              </a>
              <a href="tel:0592425077" className="flex items-center justify-center text-blue-900 hover:text-yellow-500 py-2">
                <Phone className="w-5 h-5 ml-2" />
                <span className="font-medium">0592425077</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
