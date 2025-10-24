'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    yarnTypes: [] as string[],
    query: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    console.log('Checkbox clicked:', value)
    setFormData(prev => {
      const newYarnTypes = prev.yarnTypes.includes(value)
        ? prev.yarnTypes.filter(type => type !== value)
        : [...prev.yarnTypes, value]
      console.log('New yarnTypes:', newYarnTypes)
      return {
        ...prev,
        yarnTypes: newYarnTypes
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you soon.')
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
            placeholder="Please describe your yarn requirements..."
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  )
}