# VKM Traders Website - Claude Code Documentation

This document provides comprehensive guidance for working on the VKM Traders Next.js website project. It includes project overview, architecture details, common issues, debugging strategies, and lessons learned.

## Project Overview

**Project Name:** VKM Traders Website  
**Technology Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS  
**Purpose:** Modern recreation of WordPress-based yarn trading website  
**Key Features:** Product showcase, contact forms, responsive design, zero WordPress dependencies

## Architecture & File Structure

```
vkm-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # Home page (main landing)
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles + Tailwind
│   │   ├── acrylic/        # Acrylic yarn product page
│   │   ├── filament/       # Filament yarn product page
│   │   ├── pv-yarns/       # PV yarns product page
│   │   └── contact/        # Contact page
│   ├── components/         # Reusable React components
│   │   ├── Header.tsx      # Navigation with diagonal design
│   │   ├── Footer.tsx      # Footer with business info
│   │   └── ContactForm.tsx # Contact form with checkboxes
│   └── styles/
│       └── components.css  # Component-specific styling
├── public/
│   └── images/            # Product and site images
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Key Components Deep Dive

### 1. Header Component (`src/components/Header.tsx`)
- **Features:** Black top bar with contact info, diagonal split navigation
- **Critical CSS:** Uses `clip-path` for diagonal design
- **Key Styles:** `.header`, custom diagonal background splitting

```css
/* Diagonal split navigation */
background-color: '#d70007',
clipPath: 'polygon(0 0, 35% 0, 30% 100%, 0 100%)'
```

### 2. ContactForm Component (`src/components/ContactForm.tsx`)
- **Features:** Multi-field form with checkbox selection for yarn types
- **State Management:** React state with array for multiple selections
- **Critical Function:** `handleCheckboxChange` for yarn type selection

### 3. Home Page (`src/app/page.tsx`)
- **Sections:** Hero, What We Offer, About Us (with contact form)
- **Key Elements:** Product cards, image gallery, embedded contact form
- **Anchor Links:** `id="about"` for footer navigation

## CSS Architecture & Styling Strategy

### 1. CSS Loading Order (Critical!)
```css
/* globals.css - MUST be in this order */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Brand Colors
- **Primary Red:** `#d70007` (VKM brand color)
- **Secondary Red:** `#b01e22` (darker variant)
- **Body Text:** `#494848` (dark gray)
- **Background:** `#ffffff` (white)

### 3. Component-Specific Styling (`src/styles/components.css`)
- **Form styles:** Specific exclusions for checkboxes/radios
- **Checkbox architecture:** Custom appearance with em-based sizing
- **Layout utilities:** Container, section padding, responsive design

## Common Issues & Solutions

### 1. Checkbox Styling Issues

**Problem:** Checkboxes not responding to size changes or appearing incorrectly

**Root Causes:**
- CSS specificity conflicts between `.form-group input` and checkbox styles
- `appearance: none` not working due to browser defaults
- Transform scaling conflicts with positioning

**Solution Pattern:**
```css
/* Exclude checkboxes from general input styling */
.form-group input:not([type="checkbox"]):not([type="radio"]) {
  /* general input styles */
}

/* Specific checkbox styling with high specificity */
.checkbox-item input[type="checkbox"] {
  appearance: none !important;
  width: 0.8em !important;    /* em-based for font scaling */
  height: 0.8em !important;
  /* other specific styles */
}
```

### 2. CSS Import Order Issues

**Problem:** Tailwind styles not working or fonts not loading

**Root Cause:** Incorrect order of imports in `globals.css`

**Solution:** Always maintain this exact order:
1. Google Fonts import
2. Tailwind base
3. Tailwind components  
4. Tailwind utilities

### 3. Form Label Alignment Issues

**Problem:** Checkbox labels appearing as block elements instead of inline

**Root Cause:** `.form-group label` has `display: block` affecting ALL labels

**Solution:**
```css
/* Override for checkbox/radio labels specifically */
.checkbox-item label, .radio-item label {
  display: inline !important;
  margin-bottom: 0 !important;
  vertical-align: middle;
}
```

### 4. Navigation Anchor Links Issues

**Problem:** Footer "About Us" link not scrolling to correct section

**Root Causes:**
- Missing `id` attribute on target section
- Incorrect anchor href format
- No smooth scrolling behavior

**Solution:**
```tsx
// Footer link
<Link href="/#about">About Us</Link>

// Target section  
<section id="about" className="about-section">

// CSS for smooth scrolling
html {
  scroll-behavior: smooth;
}
```

## Debugging Strategy

When encountering styling or functionality issues, follow this systematic approach:

### 1. CSS Debugging Checklist

**Step 1: Check CSS Specificity**
```bash
# Search for conflicting selectors
grep -n "input\|checkbox\|form-group" src/styles/components.css
```

**Step 2: Verify Import Order**
- Check `globals.css` import sequence
- Ensure Tailwind imports are after font imports

**Step 3: Check for Duplicate Rules**
```bash
# Find duplicate CSS rules
grep -n "checkbox.*{" src/styles/components.css
```

**Step 4: Validate Component Structure**
- Ensure proper class names are applied
- Check for missing/incorrect HTML attributes

### 2. Component Debugging Process

**Step 1: Identify Affected Files**
```bash
# Find all files that might affect the component
grep -r "component-name\|class-name" src/
```

**Step 2: Check State Management**
- Add console.log statements to event handlers
- Verify state updates are triggering re-renders

**Step 3: Inspect CSS Cascade**
- Use browser dev tools to see computed styles
- Check for overridden properties
- Look for `!important` declarations needed

### 3. Form-Specific Debugging

**Checkbox Issues:**
1. Check if `handleCheckboxChange` is being called
2. Verify `formData.yarnTypes` array updates
3. Ensure `checked` property reflects state
4. Check CSS conflicts with `.form-group` styles

**Styling Issues:**
1. Verify CSS selector specificity
2. Check for conflicting Tailwind classes
3. Ensure `!important` flags where needed
4. Validate em-based sizing calculations

## Build & Development Commands

```bash
# Development
npm run dev        # Start dev server
npm run build      # Production build  
npm run start      # Start production server
npm run lint       # Run ESLint

# Debugging
npm run build      # Check for build errors
npm run lint       # Identify code issues
```

## Best Practices Learned

### 1. CSS Architecture
- **Always exclude form controls** from general input styling
- **Use em units** for checkboxes to scale with font size
- **Maintain specific selector hierarchy** to avoid conflicts
- **Apply !important judiciously** only when specificity conflicts occur

### 2. Component Design
- **Separate styling concerns** between layout and component styles
- **Use TypeScript interfaces** for form data structures
- **Implement proper event handling** with clear function names
- **Test responsive behavior** across different screen sizes

### 3. State Management
- **Use arrays for multi-select** functionality (checkboxes)
- **Implement proper toggle logic** for add/remove operations
- **Add debugging logs** during development
- **Validate state updates** in React DevTools

### 4. Debugging Approach
- **Check all related files** when troubleshooting component issues
- **Start with CSS specificity** before adding !important
- **Verify HTML structure** matches CSS selectors
- **Test across different browsers** for consistency

## Known Issues & Workarounds

### 1. Tailwind CSS v4 Compatibility
**Issue:** Next.js 16 has compatibility issues with Tailwind v4  
**Workaround:** Use Tailwind CSS v3.4.16 instead

### 2. Checkbox Browser Inconsistencies
**Issue:** Different browsers render checkboxes differently  
**Workaround:** Always use `appearance: none` with custom styling

### 3. CSS Import Order Sensitivity
**Issue:** Wrong import order breaks Tailwind functionality  
**Workaround:** Maintain strict import order in globals.css

## Testing Checklist

Before considering any component complete:

- [ ] Visual appearance matches design requirements
- [ ] Responsive behavior works on mobile/tablet/desktop
- [ ] Form functionality works (state updates, validation)
- [ ] CSS doesn't conflict with other components
- [ ] Accessibility requirements met (labels, focus states)
- [ ] Cross-browser compatibility verified
- [ ] No console errors in browser dev tools
- [ ] Build process completes without errors

## Future Development Guidelines

### When Adding New Form Elements:
1. Always exclude from `.form-group input` selector
2. Create specific styling rules with proper specificity
3. Test checkbox/radio alignment carefully
4. Verify no conflicts with existing form styles

### When Modifying CSS:
1. Check impact on all components using the modified selectors
2. Test responsive behavior after changes
3. Verify no duplicate rules are created
4. Maintain consistent naming conventions

### When Debugging Styling Issues:
1. Start with systematic file search for relevant selectors
2. Check CSS specificity and cascade order
3. Use browser dev tools to inspect computed styles
4. Test fixes across different browsers and devices

---

**Last Updated:** December 2024  
**Project Version:** 1.0.0  
**Maintainer:** Claude Code Assistant

This documentation should serve as a comprehensive guide for any future development work on the VKM Traders website.