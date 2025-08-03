import React, { useEffect, useState } from 'react';
import { X, Calendar, User, Phone, Mail, LocateFixedIcon } from 'lucide-react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';

export default function BookDemoPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  // Get minimum date (2 days from today)
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().split('T')[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.location) {
      alert('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Send email notification to your email
      await sendAdminNotification(formData);

      alert('Demo booked successfully! You will receive a confirmation email shortly.');
      setIsPopupOpen(false);
      setFormData({ name: '', phone: '', email: '', date: '', location: '' });
    } catch (error) {
      console.error('Error sending emails:', error);
      alert('Demo booking failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to send notification to admin
  const sendAdminNotification = async (data) => {
    const templateParams = {
      to_email: 'ceo@asbionix.in',
      to_name: 'Subash',
      customer_location: data.location,
      customer_name: data.name,
      customer_phno: data.phone,
      customer_email: data.email,
      reply_to: data.email,
      booking_date: data.date.split('T')[0],
      subject: 'New demo booking request from ' + data.name,
      name: data.name,
      email: data.email,
      date: data.date.split('T')[0],
    };

    emailjs.send("service_g7ukp1m", "template_02d9ht4", templateParams, 't2ubDhWOpAc0jAAYh');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Standalone Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className='px-4 py-3 sm:py-2 w-full sm:w-fit rounded-full bg-white button text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
      >
        Book a Demo
      </button>

      {/* Full-screen popup overlay */}
      {isPopupOpen && createPortal(
        <div className="fixed inset-0 min-h-screen min-w-screen z-[51] flex items-center justify-center">
          {/* Blurred background */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm min-h-screen"
            onClick={closePopup}
          ></div>

          {/* Popup content */}
          <div className="relative bg-gray-200 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 transform transition-all duration-300 scale-100">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Your Demo</h2>
              <p className="text-gray-600">Fill in your details and we'll get in touch</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <LocateFixedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your Location"
                  required
                  className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={getMinDate()}
                  required
                  className="w-full pl-10 px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-black hover:bg-black/80 text-white font-medium py-4 px-6 rounded-md transition-colors duration-200"
              >
                Book Demo
              </button>
            </div>
          </div>
        </div >, document.body
      )
      }
    </>
  );
}