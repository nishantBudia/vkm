import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
          <p>We specialize in the bulk supply of High Quality Yarns.</p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-lg font-bold mb-2" style={{color: '#d70007'}}>What We Offer</h2>
            <p className="text-4xl font-bold text-black">Affordable High Quality Yarns</p>
          </div>

          <div className="product-cards">
            <div className="product-card">
              <div className="product-card-content flex flex-col h-full">
                <div className="flex-grow">
                  <h3>Acrylic Yarn</h3>
                  <p>
                    Acrylic yarn is a synthetic yarn that is a popular choice for knitting and crocheting 
                    due to its affordability, vibrant colors, and ability to hold its shape.
                  </p>
                </div>
                <Link href="/acrylic" className="cta-link mt-4">
                  READ MORE →
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-content flex flex-col h-full">
                <div className="flex-grow">
                  <h3>Filament Yarn</h3>
                  <p>
                    Filament yarn is a type of yarn composed of one or more continuous, unbroken strands 
                    called filaments, which run the entire length of the yarn. Its long, smooth fibers 
                    are often used in applications requiring strength, durability, and a fine, lustrous appearance.
                  </p>
                </div>
                <Link href="/filament" className="cta-link mt-4">
                  READ MORE →
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-card-content flex flex-col h-full">
                <div className="flex-grow">
                  <h3>Poly Viscose Yarn</h3>
                  <p>
                    Poly viscose yarn is a semi-natural or semi-synthetic yarn created by blending viscose. 
                    This blend combines the desirable properties of both fibers, creating a yarn that offers 
                    durability, wrinkle resistance, and shape retention from polyester, while also providing 
                    the absorbency, soft feel, and drape characteristic of viscose.
                  </p>
                </div>
                <Link href="/pv-yarns" className="cta-link mt-4">
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images */}
            <div className="space-y-6">
              <Image 
                src="/images/About_us_top_image.jpeg" 
                alt="Industrial Yarn Production" 
                width={400} 
                height={267}
                className="w-3/4 rounded-lg shadow-lg"
              />
              <Image 
                src="/images/20250723_132859_b-1.jpg" 
                alt="VKM Yarn Manufacturing" 
                width={300} 
                height={300}
                className="w-3/4 rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-lg font-bold mb-2" style={{color: '#d70007'}}>About Us</h2>
              <h2 className="text-4xl font-bold text-gray-800">Yarn Solutions For Apparel Manufacturers</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                VKM offers a wide range of yarns in South Africa. We offer some of the best quality yarns, 
                sourced both locally and internationally. <strong>And you can now buy them directly and get them delivered to your door.</strong>
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Image 
                    src="/images/about_icon1.png" 
                    alt="High Quality Yarn Icon" 
                    width={48} 
                    height={48}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-black">High Quality Yarn Suppliers</h3>
                    <p className="text-gray-700">Our yarns are sourced from reputable suppliers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Image 
                    src="/images/about_icon2.png" 
                    alt="Fast Support Icon" 
                    width={48} 
                    height={48}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-black">Fast & Friendly Support</h3>
                    <p className="text-gray-700">Our customer service reps will be able to assist you with the best yarns for your applications.</p>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}