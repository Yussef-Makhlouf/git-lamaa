'use client'
import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'


const images = [
  '/cleaning-services.png',
  '/clean-office.png',
  '/clean-home.png',
  '/clean-company.png',
  '/clean-deep.png',
  '/clean-water.png',
]


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-900 opacity-10"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">معرض أعمالنا</h2>
          <p className="text-lg text-blue-600/80">شاهد نتائج خدماتنا المتميزة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <Image 
                src={src} 
                alt={`صورة معرض ${index + 1}`} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">مشروع {index + 1}</h3>
                  <p className="text-blue-100">خدمات تنظيف احترافية</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* SEO-Friendly Button to Blog Guides */}
        <div className="mt-12 text-center">
          <Link href="/blog/guides">
            <Button variant="default" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <BookOpen className="mr-2" />
              <span>دليل التنظيف الشامل: نصائح وإرشادات احترافية</span>
              <ArrowRight className="mr-1" />
            </Button>
          </Link>
          <p className="mt-3 text-sm text-blue-600/70">اكتشف أفضل ممارسات التنظيف من خبراء شركة لمعة</p>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-blue-900/95 backdrop-blur-lg flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full mx-4">
            <Image 
              src={selectedImage} 
              alt="صورة مكبرة" 
              width={1200} 
              height={800} 
              className="rounded-2xl shadow-2xl"
            />
            <button 
              className="absolute -top-16 right-0 text-white hover:text-yellow-400 transition-colors duration-300" 
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
