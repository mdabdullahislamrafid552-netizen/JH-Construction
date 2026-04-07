import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const ease = [0.16, 1, 0.3, 1];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Inquiries</span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-deep leading-tight mb-8">
            Let's <span className="italic text-accent">Connect</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Ready to start your project? Get in touch with us today for a free, no-obligation estimate.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-5 bg-primary-deep p-10 md:p-16 text-white border-t-4 border-accent"
            >
              <h2 className="font-serif text-3xl mb-12">Direct Contact</h2>
              
              <div className="space-y-12">
                <div>
                  <span className="block text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">Phone</span>
                  <a href="tel:5085075483" className="font-serif text-2xl hover:text-accent transition-colors">
                    (508) 507-5483
                  </a>
                </div>

                <div>
                  <span className="block text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">Email</span>
                  <a href="mailto:info@jhconstructionma.com" className="font-light text-lg hover:text-accent transition-colors">
                    info@jhconstructionma.com
                  </a>
                </div>

                <div>
                  <span className="block text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">Service Area</span>
                  <p className="font-light text-lg text-gray-300">
                    Proudly serving communities across Massachusetts.
                  </p>
                </div>

                <div>
                  <span className="block text-accent uppercase tracking-[0.2em] text-xs font-bold mb-3">Business Hours</span>
                  <p className="font-light text-gray-300 leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM<br/>
                    Saturday: 9:00 AM - 2:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="lg:col-span-7 py-8"
            >
              <h2 className="font-serif text-3xl text-primary-deep mb-10">Request an Estimate</h2>
              
              {isSubmitted ? (
                <div className="bg-gray-50 border border-gray-200 p-12 text-center">
                  <span className="block font-serif text-4xl text-primary-deep mb-4">Thank You</span>
                  <p className="text-gray-600 font-light mb-8">Your request has been received. We will contact you shortly to discuss your project.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-bold uppercase tracking-widest text-xs hover:text-primary-deep transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-accent outline-none transition-colors font-light text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-accent outline-none transition-colors font-light text-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-accent outline-none transition-colors font-light text-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-accent outline-none transition-colors font-light text-lg text-gray-900"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="General Carpentry">General Carpentry</option>
                      <option value="Siding Installation">Siding Installation</option>
                      <option value="Windows Installation">Windows Installation</option>
                      <option value="Doors Installation">Doors Installation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-accent outline-none transition-colors font-light text-lg resize-none"
                      placeholder="Tell us a bit about what you're looking for..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-10 py-5 bg-primary-deep text-accent text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-primary-deep transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
