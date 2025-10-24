import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Filament Yarn - VKM Traders',
  description: 'Premium filament yarn suppliers. VKM Traders specializes in bulk supply of high-quality filament yarns for manufacturers.',
}

export default function FilamentPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/20250723_135020.jpg')"
        }}
      >
        <div className="container">
          <h1>Filament Yarn Suppliers</h1>
          <p>We specialize in the bulk supply of Filament Yarns.</p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Filament Yarn</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Filament yarn is a type of yarn composed of one or more continuous, unbroken strands 
                  called filaments, which run the entire length of the yarn. Its long, smooth fibers 
                  are often used in applications requiring strength, durability, and a fine, lustrous appearance.
                </p>
                
                <p>
                  Unlike spun yarns that are made from short fibers twisted together, filament yarns 
                  maintain their continuous structure, resulting in superior strength characteristics 
                  and a smoother surface finish.
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Continuous fiber structure for maximum strength</li>
                  <li>Smooth surface with lustrous appearance</li>
                  <li>Excellent dimensional stability</li>
                  <li>Superior abrasion resistance</li>
                  <li>Consistent quality throughout the yarn length</li>
                  <li>Available in various denier weights</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Ideal Applications:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>High-end apparel and fashion garments</li>
                  <li>Technical textiles and industrial fabrics</li>
                  <li>Automotive textiles</li>
                  <li>Home furnishing fabrics</li>
                  <li>Sportswear and activewear</li>
                  <li>Luxury bedding and linens</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Material Options:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Polyester filament yarn</li>
                  <li>Nylon filament yarn</li>
                  <li>Viscose filament yarn</li>
                  <li>Silk filament yarn</li>
                  <li>Specialty blend filaments</li>
                </ul>
              </div>
            </div>
            
            {/* Color Gallery */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Available Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Color 1 - Red */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_133652.jpg" 
                    alt="Filament Yarn - Red" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Red</span>
                  </div>
                </div>

                {/* Color 2 - Neon Orange */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_133701.jpg" 
                    alt="Filament Yarn - Neon Orange" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Neon Orange</span>
                  </div>
                </div>

                {/* Color 3 - Yellow */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_133738.jpg" 
                    alt="Filament Yarn - Yellow" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Yellow</span>
                  </div>
                </div>

                {/* Color 4 - Emerald */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_133829.jpg" 
                    alt="Filament Yarn - Emerald" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Emerald</span>
                  </div>
                </div>

                {/* Color 5 - Navy */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_133951.jpg" 
                    alt="Filament Yarn - Navy" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Navy</span>
                  </div>
                </div>

                {/* Color 6 - White */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_134025.jpg" 
                    alt="Filament Yarn - White" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">White</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Main Image */}
            <div>
              <Image 
                src="/images/filament.jpg" 
                alt="Filament Yarn" 
                width={1200} 
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}