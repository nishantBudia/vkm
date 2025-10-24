import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poly Viscose Yarns - VKM Traders',
  description: 'Premium poly viscose yarn suppliers. VKM Traders specializes in bulk supply of poly viscose blend yarns for manufacturers.',
}

export default function PVYarnsPage() {
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
          <h1>Poly Viscose Yarn Suppliers</h1>
          <p>We specialize in the bulk supply of Poly Viscose Yarns.</p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-12">
            {/* Main Content - Image and Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                  src="/images/0000pv.jpg" 
                  alt="Poly Viscose Yarn" 
                  width={600} 
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-800">Poly Viscose Yarn</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Poly viscose yarn is a semi-natural or semi-synthetic yarn created by blending viscose 
                    with polyester fibers. This blend combines the desirable properties of both fibers, 
                    creating a yarn that offers durability, wrinkle resistance, and shape retention from 
                    polyester, while also providing the absorbency, soft feel, and drape characteristic of viscose.
                  </p>
                  
                  <p>
                    The resulting yarn is versatile, cost-effective, and suitable for a wide range of 
                    textile applications, making it a popular choice among manufacturers seeking to 
                    balance performance, comfort, and affordability.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Advantages and Material Properties */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Key Advantages:</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Enhanced durability from polyester content</li>
                  <li>Excellent drape and softness from viscose</li>
                  <li>Superior moisture absorption properties</li>
                  <li>Wrinkle resistance and shape retention</li>
                  <li>Cost-effective alternative to pure natural fibers</li>
                  <li>Easy care and maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Material Properties:</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Breathable and comfortable against skin</li>
                  <li>Good color retention and dye affinity</li>
                  <li>Moderate stretch and recovery</li>
                  <li>Machine washable</li>
                  <li>Quick drying properties</li>
                  <li>Resistant to shrinkage</li>
                </ul>
              </div>
            </div>

            {/* Applications and Blends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Common Applications:</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Business and formal wear</li>
                  <li>Casual clothing and everyday wear</li>
                  <li>Home textiles and furnishings</li>
                  <li>Blended fabric manufacturing</li>
                  <li>Lining materials</li>
                  <li>Workwear and uniforms</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Available Blends:</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>65% Polyester / 35% Viscose</li>
                  <li>70% Polyester / 30% Viscose</li>
                  <li>60% Polyester / 40% Viscose</li>
                  <li>Custom blend ratios available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}