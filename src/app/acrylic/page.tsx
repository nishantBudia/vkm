import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acrylic Yarn - VKM Traders',
  description: 'High quality acrylic yarn suppliers. VKM Traders specializes in bulk supply of acrylic yarns for manufacturers.',
}

export default function AcrylicPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/20250723_131902_a.jpg')"
        }}
      >
        <div className="container">
          <h1>Yarn Suppliers to Manufacturers</h1>
          <p>We specialize in the bulk supply of High Quality Acrylic Yarns.</p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Acrylic Yarn</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Acrylic yarn is a synthetic yarn that has become a popular choice for knitting and 
                  crocheting projects due to its affordability, vibrant colors, and ability to hold its shape.
                </p>
                
                <p>
                  Made from acrylic fibers, this type of yarn offers excellent durability and is resistant 
                  to stretching, shrinking, and wrinkling. It's also lightweight and warm, making it ideal 
                  for a variety of textile applications.
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Key Benefits:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Excellent color retention and vibrancy</li>
                  <li>Machine washable and easy to care for</li>
                  <li>Hypoallergenic properties</li>
                  <li>Cost-effective for large-scale manufacturing</li>
                  <li>Available in a wide range of weights and textures</li>
                  <li>Resistant to moths and other insects</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Applications:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Apparel manufacturing</li>
                  <li>Home textiles and upholstery</li>
                  <li>Blankets and throws</li>
                  <li>Craft and hobby projects</li>
                  <li>Industrial textile applications</li>
                </ul>
              </div>
            </div>
            
            {/* Color Gallery */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Available Colors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Color 1 - Gold */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131327.jpg" 
                    alt="Acrylic Yarn - Gold" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Gold</span>
                  </div>
                </div>

                {/* Color 2 - Red */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131341.jpg" 
                    alt="Acrylic Yarn - Red" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Red</span>
                  </div>
                </div>

                {/* Color 3 - Teal */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131400.jpg" 
                    alt="Acrylic Yarn - Teal" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Teal</span>
                  </div>
                </div>

                {/* Color 4 - Peacock Blue */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131412.jpg" 
                    alt="Acrylic Yarn - Peacock Blue" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Peacock Blue</span>
                  </div>
                </div>

                {/* Color 5 - Turquoise Blue */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131423.jpg" 
                    alt="Acrylic Yarn - Turquoise Blue" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Turquoise Blue</span>
                  </div>
                </div>

                {/* Color 6 - Bottle Green */}
                <div className="relative group">
                  <Image 
                    src="/images/20250723_131440.jpg" 
                    alt="Acrylic Yarn - Bottle Green" 
                    width={400} 
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2 rounded-b-lg">
                    <span className="font-semibold">Bottle Green</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Main Image */}
            <div>
              <Image 
                src="/images/acrylic.jpg" 
                alt="Acrylic Yarn" 
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