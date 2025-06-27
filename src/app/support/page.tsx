"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  FileText,
  Users,
  Headphones,
  CheckCircle,
  Star,
  ArrowRight,
  Send,
} from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    product: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    details: "",
    accept: false,
    notRobot: false,
  });

  const [activeTab, setActiveTab] = useState("contact");

  // --- Centralized Color Palette ---
  const colors = {
    deepMidnightTeal: "#042E3D",
    backgroundLight: "#F3F4F6",
    backgroundDeep: "#011627",
    primaryBlue: "#3B82F6",
    darkBlue: "#1E3A8A",
    indigoDark: "#3730A3",
    purpleAccent: "#8B5CF6",
    greenAccent: "#10B981",
    whatsappGreen: "#25D366",
    whiteText: "#F9FAFB",
    lightText: "#E0E7FF",
    grayText: "#D1D5DB",
    cardBackground: "#042E3D",
    cardBorder: "#0F4C5C",
  };

  // --- Handle form input changes with proper typing ---
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" || type === "radio"
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // --- Handle form submission with proper typing ---
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
  };

  const supportStats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: MessageCircle, value: "<2hrs", label: "Response Time" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
  ];

  const supportOptions = [
    {
      id: "contact",
      title: "Contact Form",
      description: "Send us a detailed message",
      icon: FileText,
    },
    {
      id: "whatsapp",
      title: "WhatsApp Chat",
      description: "Chat with us on WhatsApp",
      icon: MessageCircle,
    },
    {
      id: "phone",
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: Phone,
    },
  ];

  const faqs = [
    {
      question: "How can I contact you for support?",
      answer:
        "You can reach us through our contact form, call our phone support line, or message us directly on WhatsApp for instant assistance.",
    },
    {
      question: "What are your support hours?",
      answer:
        "Our phone support is available during business hours (9 AM - 6 PM IST), while WhatsApp support is available 24/7 for your convenience.",
    },
    {
      question: "How quickly do you respond to enquiries?",
      answer:
        "WhatsApp messages are typically responded to within 30 minutes. Contact form submissions and phone calls are addressed within 2 hours during business hours.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes, we provide comprehensive technical support for all our products and services through all our contact methods.",
    },
  ];

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: colors.backgroundDeep }}
    >
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.deepMidnightTeal}, ${colors.darkBlue}, ${colors.indigoDark})`,
          color: colors.whiteText,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to r, ${colors.primaryBlue}30, ${colors.purpleAccent}30)`,
          }}
        ></div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: `${colors.primaryBlue}1A` }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-xl animate-pulse delay-1000"
          style={{ backgroundColor: `${colors.purpleAccent}1A` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full blur-xl animate-pulse delay-500"
          style={{ backgroundColor: `${colors.greenAccent}1A` }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            <div
              className="inline-flex items-center backdrop-blur-sm rounded-full px-6 py-2 mb-8"
              style={{ backgroundColor: `${colors.whiteText}1A` }}
            >
              <Headphones className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">
                Premium Support Experience
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.whiteText}, ${colors.lightText})`,
              }}
            >
              We're Here to Help
            </h1>

            <p
              className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.lightText }}
            >
              Get expert support from **Dharvix Tech Solutions**. Our dedicated
              team is ready to assist you with all your technical needs and
              business requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open("https://wa.me/919000633061", "_blank")
                }
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  background: `linear-gradient(to right, ${colors.whatsappGreen}, ${colors.greenAccent})`,
                  color: colors.whiteText,
                }}
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                WhatsApp Chat
              </button>

              <button
                onClick={() => (window.location.href = "tel:+919000633061")}
                className="backdrop-blur-sm hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border"
                style={{
                  backgroundColor: `${colors.whiteText}1A`,
                  borderColor: `${colors.whiteText}20`,
                }}
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Support
              </button>
            </div>
          </div>
        </div>
      </section>
      ---
      {/* Stats Section */}
      <section
        className="py-16 backdrop-blur-sm"
        style={{ backgroundColor: `${colors.backgroundLight}99` }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.purpleAccent})`,
                  }}
                >
                  <stat.icon
                    className="w-8 h-8"
                    style={{ color: colors.whiteText }}
                  />
                </div>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.backgroundDeep }}
                >
                  {stat.value}
                </div>
                <div className="font-medium" style={{ color: colors.darkBlue }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Main Content Area: Contact Info & Form */}
      <section
        className="py-16"
        style={{ backgroundColor: colors.backgroundDeep }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-3xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <div className="lg:flex">
              {/* Left Side - Contact Info & Illustration */}
              <div
                className="lg:w-2/5 p-8 lg:p-12 text-white relative overflow-hidden"
                style={{
                  background: `linear-gradient(to br, ${colors.deepMidnightTeal}, ${colors.darkBlue})`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16"
                  style={{ backgroundColor: `${colors.whiteText}1A` }}
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-12 -translate-x-12"
                  style={{ backgroundColor: `${colors.whiteText}1A` }}
                ></div>

                <div className="relative z-10">
                  <h3
                    className="text-3xl font-bold mb-6"
                    style={{ color: colors.whiteText }}
                  >
                    Get in Touch
                  </h3>
                  <p
                    className="mb-8 text-lg leading-relaxed"
                    style={{ color: colors.lightText }}
                  >
                    Ready to transform your business with our technology
                    solutions? Our expert team is here to guide you every step
                    of the way.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div
                        className="rounded-lg p-3 mr-4"
                        style={{ backgroundColor: `${colors.whiteText}20` }}
                      >
                        <Phone
                          className="w-6 h-6"
                          style={{ color: colors.whiteText }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: colors.whiteText }}
                        >
                          Phone Support
                        </div>
                        <div style={{ color: colors.lightText }}>
                          +91 9000633061
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="rounded-lg p-3 mr-4"
                        style={{ backgroundColor: `${colors.whiteText}20` }}
                      >
                        <MessageCircle
                          className="w-6 h-6"
                          style={{ color: colors.whiteText }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: colors.whiteText }}
                        >
                          WhatsApp Support
                        </div>
                        <div style={{ color: colors.lightText }}>
                          +91 9000633061
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="rounded-lg p-3 mr-4"
                        style={{ backgroundColor: `${colors.whiteText}20` }}
                      >
                        <Clock
                          className="w-6 h-6"
                          style={{ color: colors.whiteText }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: colors.whiteText }}
                        >
                          Support Hours
                        </div>
                        <div style={{ color: colors.lightText }}>
                          24/7 Available
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div
                        className="rounded-lg p-3 mr-4"
                        style={{ backgroundColor: `${colors.whiteText}20` }}
                      >
                        <MapPin
                          className="w-6 h-6"
                          style={{ color: colors.whiteText }}
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: colors.whiteText }}
                        >
                          Office Location
                        </div>
                        <div style={{ color: colors.lightText }}>
                          Visakhapatnam, Andhra Pradesh
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-8 p-6 rounded-2xl backdrop-blur-sm"
                    style={{ backgroundColor: `${colors.whiteText}1A` }}
                  >
                    <div className="flex items-center mb-3">
                      <CheckCircle
                        className="w-5 h-5 mr-2"
                        style={{ color: colors.greenAccent }}
                      />
                      <span
                        className="font-semibold"
                        style={{ color: colors.whiteText }}
                      >
                        Quality Guarantee
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: colors.lightText }}>
                      We're committed to providing exceptional support and
                      ensuring your complete satisfaction with our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div
                className="lg:w-3/5 p-8 lg:p-12"
                style={{ backgroundColor: colors.backgroundLight }}
              >
                <div className="mb-8">
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: colors.backgroundDeep }}
                  >
                    Send Us Your Enquiry
                  </h3>
                  <p className="text-lg" style={{ color: colors.darkBlue }}>
                    Fill out the form below and our team will get back to you
                    within 2 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
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
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
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
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
                        Enquiry Type *
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
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
                    <label
                      htmlFor="product"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: colors.darkBlue }}
                    >
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
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                      style={{
                        borderColor: colors.cardBorder,
                        color: colors.backgroundDeep,
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: colors.darkBlue }}
                    >
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
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50 resize-none"
                      style={{
                        borderColor: colors.cardBorder,
                        color: colors.backgroundDeep,
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
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
                      <label
                        htmlFor="city"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
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
                      <label
                        htmlFor="pincode"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: colors.darkBlue }}
                      >
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
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50"
                        style={{
                          borderColor: colors.cardBorder,
                          color: colors.backgroundDeep,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: colors.darkBlue }}
                    >
                      Additional Details & Requirements
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Please describe your specific requirements or any additional information..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:bg-gray-50 resize-none"
                      style={{
                        borderColor: colors.cardBorder,
                        color: colors.backgroundDeep,
                      }}
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
                      <label
                        htmlFor="accept"
                        className="text-sm"
                        style={{ color: colors.darkBlue }}
                      >
                        I accept the{" "}
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          Terms and Conditions
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          Privacy Policy
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(to right, ${colors.primaryBlue}, ${colors.purpleAccent})`,
                      color: colors.whiteText,
                    }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Enquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>

                <div
                  className="mt-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: `${colors.primaryBlue}1A`,
                    borderColor: `${colors.primaryBlue}40`,
                  }}
                >
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: colors.darkBlue }}
                  >
                    **Privacy Notice:** Dharvix Tech Solutions collects your
                    personal information in accordance with Indian data
                    protection laws for operational requirements and enquiry
                    processing. Your information will be kept confidential and
                    used solely for responding to your enquiry and providing
                    requested services. For complete details, please review our
                    Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ---
      {/* FAQ Section */}
      <section
        className="py-16"
        style={{ backgroundColor: `${colors.backgroundLight}90` }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.backgroundDeep }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl" style={{ color: colors.darkBlue }}>
              Quick answers to common support questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: colors.whiteText,
                  color: colors.darkBlue,
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: colors.backgroundDeep }}
                >
                  {faq.question}
                </h3>
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* CTA Section */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(to right, ${colors.deepMidnightTeal}, ${colors.darkBlue})`,
          color: colors.whiteText,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: colors.whiteText }}
          >
            Still Need Help?
          </h2>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ color: colors.lightText }}
          >
            Our dedicated support team is standing by to provide personalized
            assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp Chat Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/919000633061", "_blank")
              }
              className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: colors.whiteText,
                color: colors.darkBlue,
              }}
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              WhatsApp: +91 9000633061
            </button>

            {/* Call Support Button */}
            <button
              onClick={() => (window.location.href = "tel:+919000633061")}
              className="backdrop-blur-sm hover:border-white/40 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border"
              style={{
                backgroundColor: `${colors.whiteText}20`,
                borderColor: `${colors.whiteText}20`,
                color: colors.whiteText,
              }}
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