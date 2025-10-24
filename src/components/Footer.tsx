import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p><strong>CALL US ANYTIME</strong></p>
            <p>+27(010) 013-1300</p>
            <p><strong>VISIT OUR LOCATION</strong></p>
            <p>
              23 Cloud Street<br />
              Westhill Business Estate<br />
              Sunderland Ridge<br />
              Centurion, 0149
            </p>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <Link href="/acrylic">Acrylic Yarn</Link>
            <Link href="/filament">Filament Yarn</Link>
            <Link href="/pv-yarns">PV Yarn</Link>
          </div>

          <div className="footer-section">
            <h4>Useful Links</h4>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/#about">About Us</Link>
          </div>

          <div className="footer-section">
            <h4>Open Hours</h4>
            <p><strong>Monday - Thursday</strong></p>
            <p>08:00am - 5:00pm</p>
            <p><strong>Friday</strong></p>
            <p>08:00am - 12:30pm</p>
            <p>1:30pm - 4:30pm</p>
            <p><strong>Weekends</strong></p>
            <p>Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 VKM Traders. All rights reserved. | Yarn Suppliers to Manufacturers</p>
        </div>
      </div>
    </footer>
  )
}