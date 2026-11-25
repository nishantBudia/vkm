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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}