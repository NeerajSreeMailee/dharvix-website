'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, MessageCircle, FileText, Users, Headphones, CheckCircle, Star, ArrowRight, Send } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: '',
    product: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    details: '',
    accept: false,
    notRobot: false
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
  };

  const supportStats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: MessageCircle, value: '<2hrs', label: 'Response Time' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' }
  ];

  const supportOptions = [
    {
      id: 'contact',
      title: 'Contact Form',
      description: 'Send us a detailed message',
      icon: FileText
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Chat',
      description: 'Chat with us on WhatsApp',
      icon: MessageCircle
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      icon: Phone
    }
  ];

  const faqs = [
    {
      question: "How can I contact you for support?",
      answer: "You can reach us through our contact form, call our phone support line, or message us directly on WhatsApp for instant assistance."
    },
    {
      question: "What are your support hours?",
      answer: "Our phone support is available during business hours (9 AM - 6 PM IST), while WhatsApp support is available 24/7 for your convenience."
    },
    {
      question: "How quickly do you respond to enquiries?",
      answer: "WhatsApp messages are typically responded to within 30 minutes. Contact form submissions and phone calls are addressed within 2 hours during business hours."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, we provide comprehensive technical support for all our products and services through all our contact methods."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Headphones className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Premium Support Experience</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert support from Dharvix Tech Solutions. Our dedicated team is ready to assist you with all your technical needs and business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
              onClick={() => window.open('https://wa.me/919000633061', '_blank')}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <MessageCircle className="w-5 h-5 inline mr-2" />
                WhatsApp Chat
              </button>
              
              <button 
              onClick={() => window.location.href = 'tel:+919000633061'}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="lg:flex">
              {/* Left Side - Contact Info & Illustration */}
              <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                    Ready to transform your business with our technology solutions? Our expert team is here to guide you every step of the way.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-3 mr-4">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone Support</div>
                        <div className="text-blue-200">+91 9000633061</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-3 mr-4">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp Support</div>
                        <div className="text-blue-200">+91 9000633061</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-3 mr-4">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Support Hours</div>
                        <div className="text-blue-200">24/7 Available</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-3 mr-4">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Office Location</div>
                        <div className="text-blue-200">Visakhapatnam, Andhra Pradesh</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                      <span className="font-semibold">Quality Guarantee</span>
                    </div>
                    <p className="text-sm text-blue-100">
                      We're committed to providing exceptional support and ensuring your complete satisfaction with our services.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Contact Form */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us Your Enquiry</h3>
                  <p className="text-gray-600 text-lg">Fill out the form below and our team will get back to you within 2 hours</p>
                </div>
                
                <div className="space-y-6">
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="enquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select enquiry type</option>
                        <option value="product">Product Information</option>
                        <option value="service">Service Enquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                      Product/Service of Interest *
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleInputChange}
                      placeholder="Specify the product or service you're interested in"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select state</option>
                        <option value="andhra-pradesh">Andhra Pradesh</option>
                        <option value="telangana">Telangana</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="kerala">Kerala</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="uttar-pradesh">Uttar Pradesh</option>
                        <option value="west-bengal">West Bengal</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select city</option>
                        <option value="visakhapatnam">Visakhapatnam</option>
                        <option value="vijayawada">Vijayawada</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="delhi">Delhi</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="ahmedabad">Ahmedabad</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                        Pin Code *
                      </label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Pin code"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Details & Requirements
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Please describe your specific requirements or any additional information..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="accept"
                        name="accept"
                        checked={formData.accept}
                        onChange={handleInputChange}
                        required
                        className="mt-1 mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500 accent-blue-600"
                      />
                      <label htmlFor="accept" className="text-sm text-gray-700">
                        I accept the <span className="text-blue-600 hover:underline cursor-pointer">Terms and Conditions</span> and <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Enquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Privacy Notice:</strong> Dharvix Tech Solutions collects your personal information in accordance with Indian data protection laws for operational requirements and enquiry processing. Your information will be kept confidential and used solely for responding to your enquiry and providing requested services. For complete details, please review our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common support questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our dedicated support team is standing by to provide personalized assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* WhatsApp Chat Button */}
  <button
    onClick={() => window.open('https://wa.me/919000633061', '_blank')}
    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
  >
    <MessageCircle className="w-5 h-5 inline mr-2" />
    WhatsApp: +91 9000633061
  </button>

  {/* Call Support Button */}
  <button
    onClick={() => window.location.href = 'tel:+919000633061'}
    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20"
  >
    <Phone className="w-5 h-5 inline mr-2" />
    Call Support
  </button>
</div>

        </div>
      </section>
    </div>
  );
};

export default Support;