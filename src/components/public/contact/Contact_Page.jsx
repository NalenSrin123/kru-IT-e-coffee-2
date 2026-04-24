import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram, CheckCircle, AlertCircle, X } from 'lucide-react';
import { BsTelegram } from 'react-icons/bs';

// Note: Ensure DM Sans is loaded in your project:
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&display=swap" rel="stylesheet">

const alertAnimationStyle = `
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-down {
    animation: fadeInDown 0.4s ease-out;
  }
`;

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    rating: 5,
  });

  const [submitStatus, setSubmitStatus] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://kru-it-e-coffee-intern-main-i74iel.laravel.cloud/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: formData.message,
          rating: formData.rating,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: '',
          rating: 5,
        });
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EAD3A7] font-['DM_Sans',sans-serif]">
      <style>{alertAnimationStyle}</style>
      {/* Hero Section with previous gradient style */}
      <div className="relative mb-17 h-72 bg-linear-to-r from-[#4f2d18] to-[#50330d] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?cs=srgb&dl=pexels-apgpotr-683039.jpg&fm=jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <span className="text-amber-400 text-1xl md:text-2xl font-bold uppercase tracking-widest mb-2 block">Get in touch</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-1 leading-none">
            Contact Us<br />
          </h1>
          <span className="text-amber-400 text-2xl md:text-5xl font-extrabold tracking-tighter leading-none ">Visit us or call us today</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-900/10">
            <p className="text-[#6B5344] mb-10 text-lg font-medium leading-relaxed">
              Whether you have a question about our roasts, want to partner with us, or just want to talk beans, our team is ready to help.
            </p>

            {submitStatus === 'success' && (
              <div className="mb-6 p-6 bg-linear-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg animate-fade-in-down">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle className="w-6 h-6 text-green-600 animate-bounce" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 mb-1">Message Sent Successfully!</h3>
                    <p className="text-green-700 text-sm font-medium">
                      Thank you for your feedback. We'll review your message and get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('')}
                    className="shrink-0 text-green-600 hover:text-green-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-6 bg-linear-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl shadow-lg animate-fade-in-down">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <AlertCircle className="w-6 h-6 text-red-600 animate-pulse" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-900 mb-1">Something Went Wrong</h3>
                    <p className="text-red-700 text-sm font-medium">
                      We couldn't send your message. Please check your information and try again.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('')}
                    className="shrink-0 text-red-600 hover:text-red-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#6B5344]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 transition-all font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#6B5344]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 transition-all font-medium"
                    required
                  />
                </div>
              </div>

                        <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-[#6B5344]">
                  Subject
                </label>
                <div className="relative group">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 transition-all font-medium text-gray-700 appearance-none cursor-pointer hover:border-stone-200"
                  >
                    <option value="" disabled hidden>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Support</option>
                  </select>
                  
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#6B5344] group-focus-within:text-amber-500 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#6B5344]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows={5}
                  className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 transition-all font-medium resize-none text-gray-700 hover:border-stone-200"
                  required
                ></textarea>
              </div>
                          <div className="flex flex-col gap-2">
                <label htmlFor="rating" className="text-xs font-bold uppercase tracking-widest text-[#6B5344]">
                  Rating
                </label>
                <div className="relative group">
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 transition-all font-medium text-gray-700 appearance-none cursor-pointer hover:border-stone-200"
                  >
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                  
                  {/* Custom Arrow Icon for Rating */}
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[#6B5344] group-focus-within:text-amber-500 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#6B5344] hover:bg-[#4E3C31] disabled:bg-gray-400 text-white font-bold py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-lg"
              >
                <span size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.2 transition-transform">
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
                
                <Mail size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.2 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column - Info & Map */}
          <div className="space-y-6">
            {/* Visit Section with Map */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-stone-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-800">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-extrabold text-[#2D241E]">Location</h3>
              </div>
              
              <div className="w-full h-44 bg-stone-200 rounded-2xl overflow-hidden mb-4 border border-stone-100">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.2) grayscale(0.2)' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153166!3d-37.816279742021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625585534567!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="space-y-2 text-sm font-medium text-stone-600">
                <p>123 Bourbon Street, Coffee District</p>
                <p>Espresso City, CI 12345</p>
                <div className="pt-2 flex flex-col gap-2 border-t border-stone-50 mt-2">
                  <div className="flex items-center gap-2 text-[#6B5344]">
                    <Phone size={14} /> <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B5344]">
                    <Mail size={14} /> <span>hello@espresso.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Section */}
            <div className="bg-[#6B5344] text-white rounded-3xl p-8 relative overflow-hidden group shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={24} className="text-amber-400" />
                  <h3 className="text-xl font-extrabold">Opening Hours</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-stone-300 font-medium">Mon - Fri</span>
                    <span className="text-amber-400 font-bold">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-stone-300 font-medium">Sat</span>
                    <span className="text-amber-400 font-bold">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300 font-medium">Sun</span>
                    <span className="text-amber-400 font-bold">10:00 AM - 8:00 PM</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-8">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-amber-500 rounded-xl transition-all duration-300">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-amber-500 rounded-xl transition-all duration-300">
                    <BsTelegram size={18} className="text-white" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-amber-500 rounded-xl transition-all duration-300">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-amber-500 rounded-xl transition-all duration-300">
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-400/10 rounded-full group-hover:scale-110 transition-transform"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}