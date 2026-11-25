'use client'

import { useState } from 'react'

// Same number as the WhatsApp link on the contact page.
const WHATSAPP_NUMBER = '27683267711'

const emptyForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  yarnTypes: [] as string[],
  query: ''
}

// The site is a static export with no backend, so an enquiry is handed to
// WhatsApp as a pre-filled message that the visitor sends themselves.
function whatsAppUrl(data: typeof emptyForm) {
  const lines = [
    'New enquiry from the VKM Traders website',
    `Name: ${data.firstName} ${data.lastName}`.trim(),
    `Email: ${data.email}`,
    data.phone && `Phone: ${data.phone}`,
    data.yarnTypes.length > 0 && `Yarn: ${data.yarnTypes.join(', ')}`,
    data.query && `Query: ${data.query}`
  ].filter(Boolean)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function ContactForm() {
  const [formData, setFormData] = useState(emptyForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => {
      const newYarnTypes = prev.yarnTypes.includes(value)
        ? prev.yarnTypes.filter(type => type !== value)
        : [...prev.yarnTypes, value]
      return {
        ...prev,
        yarnTypes: newYarnTypes
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(whatsAppUrl(formData), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Yarn Selection</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="acrylic"
                checked={formData.yarnTypes.includes('Acrylic Yarn')}
                onChange={() => handleCheckboxChange('Acrylic Yarn')}
              />
              <label htmlFor="acrylic">Acrylic Yarn</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="filament"
                checked={formData.yarnTypes.includes('Filament Yarn')}
                onChange={() => handleCheckboxChange('Filament Yarn')}
              />
              <label htmlFor="filament">Filament Yarn</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="polyViscose"
                checked={formData.yarnTypes.includes('Poly Viscose')}
                onChange={() => handleCheckboxChange('Poly Viscose')}
              />
              <label htmlFor="polyViscose">Poly Viscose</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="query">Your Query</label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            maxLength={1000}
            placeholder="Please describe your yarn requirements..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send via WhatsApp
        </button>
      </form>
    </div>
  )
}