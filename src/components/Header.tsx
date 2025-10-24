'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="bg-black text-white py-3">
        <div className="container">
          <div className="flex justify-between items-center text-base">
            <a href="tel:+27010013300" className="flex items-center gap-2 text-white hover:text-gray-300 underline">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +27(010) 013-1300
            </a>
            <a href="mailto:sales@vkm.co.za" className="flex items-center gap-2 text-white hover:text-gray-300">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              sales@vkm.co.za
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="relative overflow-hidden bg-white py-6">
        {/* Red background for left side */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundColor: '#d70007',
            clipPath: 'polygon(0 0, 35% 0, 30% 100%, 0 100%)'
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <Link href="/" className="text-white font-bold text-3xl">
                VKM Traders
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="flex-1 flex justify-end">
              <ul className="nav-menu hidden md:flex items-center gap-8">
                <li><Link href="/" className="!text-black font-semibold text-lg hover:!text-red-600 transition-colors">Home</Link></li>
                <li><Link href="/acrylic" className="!text-black font-semibold text-lg hover:!text-red-600 transition-colors">Acrylic</Link></li>
                <li><Link href="/filament" className="!text-black font-semibold text-lg hover:!text-red-600 transition-colors">Filament</Link></li>
                <li><Link href="/pv-yarns" className="!text-black font-semibold text-lg hover:!text-red-600 transition-colors">PV-Yarns</Link></li>
                <li><Link href="/contact" className="!text-black font-semibold text-lg hover:!text-red-600 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 pb-4 space-y-2">
              <li><Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-black font-semibold py-2">Home</Link></li>
              <li><Link href="/acrylic" onClick={() => setIsMenuOpen(false)} className="block text-black font-semibold py-2">Acrylic</Link></li>
              <li><Link href="/filament" onClick={() => setIsMenuOpen(false)} className="block text-black font-semibold py-2">Filament</Link></li>
              <li><Link href="/pv-yarns" onClick={() => setIsMenuOpen(false)} className="block text-black font-semibold py-2">PV-Yarns</Link></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-black font-semibold py-2">Contact Us</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}