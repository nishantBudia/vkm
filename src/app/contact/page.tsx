import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - VKM Traders',
  description: 'Contact VKM Traders for yarn supply inquiries. Call 010 013 1300 or email sales@vkm.co.za for bulk yarn requirements.',
}

export default function ContactPage() {
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
          <h1>Contact Us</h1>
          <p>Get in touch with VKM Traders for all your yarn supply needs.</p>
        </div>
      </section>

      {/* Main Content Section - Split View */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help with your yarn requirements</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information & Location */}
            <div className="flex flex-col h-full">
              {/* Contact Information */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="contact-info-item flex-1">
                  <h4>📞 Phone</h4>
                  <p>
                    <strong>Main Office:</strong><br />
                    010 013 1300
                  </p>
                  <p>
                    <strong>Mobile:</strong><br />
                    +27 79 499 9978 (Kader)
                  </p>
                </div>

                <div className="contact-info-item flex-1">
                  <h4>✉️ Email</h4>
                  <p>
                    <strong>General Inquiries:</strong><br />
                    <a href="mailto:sales@vkm.co.za" className="text-primary">sales@vkm.co.za</a>
                  </p>
                  <p>
                    <strong>Direct Contact:</strong><br />
                    <a href="mailto:kader@vkm.co.za" className="text-primary">kader@vkm.co.za</a>
                  </p>
                </div>

                <div className="contact-info-item flex-1">
                  <h4>💬 WhatsApp</h4>
                  <p>
                    <strong>WhatsApp:</strong><br />
                    <a href="https://wa.me/27683267711" className="text-primary">+27 68 326 7711</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Visit Our Location</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">VKM Traders</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                23 Cloud Street<br />
                Westhill Business Estate<br />
                Sunderland Ridge<br />
                Centurion, 0149<br />
                South Africa
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0567988307757!2d28.180631876069743!3d-25.86181667743344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956147c8c63a85%3A0x8b3a4e3c9bb18f1a!2s23%20Cloud%20St%2C%20Sunderland%20Ridge%2C%20Centurion%2C%200149%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1640995200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VKM Traders Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}