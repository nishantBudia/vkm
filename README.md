# VKM Traders - Next.js Website

This is a modern recreation of the VKM Traders website using Next.js, React, and Tailwind CSS. The website has been completely rebuilt from the original WordPress site to remove all external dependencies while maintaining the exact same visual appearance and content.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Proper meta tags and structured data
- **Performance Focused**: Optimized images and modern web practices
- **Zero WordPress Dependencies**: Clean, maintainable codebase
- **Preserved Design**: Exact visual recreation of the original website

## 📋 Pages

- **Home** (`/`) - Main landing page with yarn categories and contact form
- **Acrylic Yarn** (`/acrylic`) - Detailed acrylic yarn information
- **Filament Yarn** (`/filament`) - Filament yarn specifications and applications
- **PV Yarns** (`/pv-yarns`) - Poly viscose yarn details
- **Contact** (`/contact`) - Contact information and inquiry form

## 🛠 Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Images**: Next.js Image optimization
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vkm-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vkm-nextjs/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx        # Home page
│   │   ├── acrylic/        # Acrylic yarn page
│   │   ├── filament/       # Filament yarn page
│   │   ├── pv-yarns/       # PV yarns page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── ContactForm.tsx # Contact form component
│   └── styles/             # Additional styling
│       └── components.css  # Component-specific styles
├── public/                 # Static assets
│   ├── images/            # Product and site images
│   └── fonts/             # Font files
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#d70007` (VKM Red)
- **Secondary**: `#b01e22` (Darker Red)
- **Body Text**: `#494848` (Dark Gray)
- **Background**: `#ffffff` (White)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📧 Contact Information

- **Phone**: 010 013 1300
- **Email**: sales@vkm.co.za
- **Address**: 23 Cloud Street, Westhill Business Estate, Sunderland Ridge, Centurion, 0149
- **WhatsApp**: +27 68 326 7711

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Migration

All content has been carefully migrated from the original WordPress site:

- ✅ Navigation structure preserved
- ✅ All page content and descriptions maintained
- ✅ Product information accurately transferred
- ✅ Contact details and forms recreated
- ✅ Images and media assets copied
- ✅ SEO metadata preserved
- ✅ Responsive design maintained

## 🚧 WordPress Dependencies Removed

- All WordPress-specific JavaScript and CSS removed
- WooCommerce dependencies eliminated
- Plugin-specific code cleaned up
- Emoji scripts and WordPress admin dependencies removed
- Clean, modern codebase with zero legacy dependencies

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- No external WordPress vulnerabilities
- Type-safe TypeScript implementation
- Modern Next.js security best practices
- XSS protection through React's built-in sanitization

## 📈 Performance

- Optimized images with Next.js Image component
- Modern JavaScript bundling
- CSS optimization with Tailwind
- Server-side rendering for improved SEO
- Fast page loads and smooth navigation

---

**VKM Traders** - Yarn Suppliers to Manufacturers  
Specializing in bulk supply of high-quality acrylic, filament, and poly viscose yarns.