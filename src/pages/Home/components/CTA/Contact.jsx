import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Instagram, LocateIcon, Mail, Phone, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);


  const addresses = [
    {
      id: 1,
      title: "Sivakasi Office",
      address: "2/2324-F, Graghathayammal Nagar, Sithurajapuram, Sivakasi - 626189"
    },
    {
      id: 2,
      title: "Coimbatore Office",
      address: "406, C Block, Silicon City Apartment, Saravanampatti, Coimbatore - 641035"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Send email notification to your email
      await sendAdminNotification(formData);

      alert('Query sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending emails:', error);
      alert('Query sent failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const sendAdminNotification = async (formData) => {
    const templateParams = {
      to_name: 'Subash',
      name: formData.name,
      email: formData.email,
      phno: formData.phone,
      message: formData.message
    };

    emailjs.send("service_wmtowpp", "template_kqn0t2g", templateParams, 'GWPfqZYBb7pjfpkhJ');
  }

  return (
    <div id='contact' className="bg-[#1d1d1d] text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Section - Contact Info */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-400 text-sm mb-2">Contact</p>
            <h1 className="text-4xl lg:text-5xl font-light mb-6">Get in touch</h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              For any inquiries or to explore your vision further, we invite
              you to contact our professional team using the details
              provided below.
            </p>
          </div>

          <div className="space-y-8">
            {/* Address Accordion */}
            <div className="border border-gray-800/70 rounded-lg overflow-hidden">
              <button
                onClick={() => setIsAddressOpen(!isAddressOpen)}
                className="w-full flex items-center justify-between p-4 bg-[#2c2c2c] cursor-pointer hover:bg-gray-750 transition-colors"
              >
                <span className="text-lg font-medium text-gray-200 flex gap-3"><LocateIcon /> Office Locations</span>
                {isAddressOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isAddressOpen ? "max-h-[500px] opacity-100" : "max-h-0"
                  } bg-[#2c2c2c]`}
              >
                {addresses.map((location) => (
                  <div key={location.id} className="p-4">
                    <h4 className="font-medium text-gray-200 mb-1">{location.title}</h4>
                    <p className="text-gray-400">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods with Icons */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#2c2c2c] rounded-full">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm block">Email</span>
                  <a
                    href="mailto:ceo@asbionix.in"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    ceo@asbionix.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#2c2c2c] rounded-full">
                  <Phone className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <span className="text-gray-400 text-sm block">Telephone</span>
                  <a
                    href="tel:9566421758"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    95664 21758
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-gray-400 text-sm mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/asbionix/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-[#2c2c2c] rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-200 rounded-lg p-5 sm:p-8 max-h-[600px]">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johnsdoe@gmail.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876512345"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hello, I'd like to enquire about..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-black hover:bg-black/80 text-white font-medium py-4 px-6 rounded-md transition-colors duration-200"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}