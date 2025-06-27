"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Star,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xdkzplqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-1500"></div>
          <div className="absolute top-60 left-2/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span className="text-blue-200 text-sm font-semibold">
                  Let's Connect & Create
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  <span className="block text-white">Get In</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ready to transform your vision into reality? Let's start a
                  conversation that could change everything.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+919000633061"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="h-5 w-5 group-hover:animate-pulse" />
                  Call Now
                </a>
                <a
                  href="mailto:dharvixtechsolutions@gmail.com"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="h-5 w-5 group-hover:animate-pulse" />
                  Send Email
                </a>
              </div>
            </div>

            {/* Right Side - Enhanced Contact Form */}
            <div className="relative">
              {/* Form Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>

              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-blue-200">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-green-100 font-semibold">
                        Message sent successfully!
                      </p>
                      <p className="text-green-200 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                    <AlertCircle className="h-6 w-6 text-red-400 flex-shrink-0" />
                    <div>
                      <p className="text-red-100 font-semibold">
                        Something went wrong!
                      </p>
                      <p className="text-red-200 text-sm">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-blue-200 text-sm font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-14 bg-white/5 border border-white/20 rounded-xl px-4 text-white placeholder-blue-300/70 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-blue-200 text-sm font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-14 bg-white/5 border border-white/20 rounded-xl px-4 text-white placeholder-blue-300/70 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-blue-200 text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-14 bg-white/5 border border-white/20 rounded-xl px-4 text-white placeholder-blue-300/70 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 font-medium"
                        placeholder="+91 90006 33061"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-blue-200 text-sm font-semibold">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full h-14 bg-white/5 border border-white/20 rounded-xl px-4 text-white placeholder-blue-300/70 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 font-medium"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="block text-blue-200 text-sm font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-blue-300/70 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none font-medium"
                      placeholder="Tell us about your project, goals, and how we can help you succeed..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    }
                    className="group w-full h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg hover:scale-105 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>

                {/* Form Footer */}
                <div className="mt-6 text-center">
                  <p className="text-blue-300/70 text-sm">
                    🔒 Your information is secure and will never be shared
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 px-6 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6">
              <Globe className="h-4 w-4 text-purple-400" />
              <span className="text-purple-200 text-sm font-semibold">
                Multiple Ways to Connect
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Reach Out
              </span>
              <span className="block text-white">Anytime</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to connect. We're here to help you
              succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                title: "Call Us Direct",
                subtitle: "Immediate Support",
                content: "+91 90006 33061",
                href: "tel:+919000633061",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-500/10 to-emerald-500/10",
                borderColor: "border-green-500/20",
              },
              {
                icon: Mail,
                title: "Email Support",
                subtitle: "24hr Response Time",
                content: "dharvixtechsolutions@gmail.com",
                href: "mailto:dharvixtechsolutions@gmail.com",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/10 to-cyan-500/10",
                borderColor: "border-blue-500/20",
              },
              {
                icon: MapPin,
                title: "Visit Our Office",
                subtitle: "Innovation Hub",
                content: "AU North Campus, Visakhapatnam",
                href: "#map",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10",
                borderColor: "border-purple-500/20",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className={`group block p-8 bg-gradient-to-br ${contact.bgGradient} backdrop-blur-xl rounded-2xl border ${contact.borderColor} hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contact.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-blue-300 text-sm mb-3">
                      {contact.subtitle}
                    </p>
                    <p className="text-blue-100 font-semibold group-hover:text-white transition-colors duration-300">
                      {contact.content}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Business Hours & Map Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Business Hours */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Business Hours
                    </h3>
                    <p className="text-blue-200">When you can reach us</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      day: "Monday - Friday",
                      hours: "9:00 AM - 6:00 PM",
                      status: "Open",
                    },
                    {
                      day: "Saturday",
                      hours: "10:00 AM - 4:00 PM",
                      status: "Open",
                    },
                    { day: "Sunday", hours: "Closed", status: "Closed" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-3 h-3 rounded-full ${schedule.status === "Open" ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
                        ></div>
                        <span className="text-blue-100 font-medium">
                          {schedule.day}
                        </span>
                      </div>
                      <span
                        className={`font-semibold ${schedule.status === "Open" ? "text-green-300" : "text-red-300"}`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="grid gap-4">
                {[
                  {
                    label: "Sales Inquiries",
                    email: "dharvixtechsolutions@gmail.com",
                    icon: "💼",
                  },
                  {
                    label: "Career Opportunities",
                    email: "hr@dharvixtechsolutions.com",
                    icon: "🎯",
                  },
                  {
                    label: "General Information",
                    email: "info@dharvixtechsolutions.com",
                    icon: "ℹ️",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {contact.label}
                      </h4>
                      <p className="text-blue-300 text-sm group-hover:text-blue-200 transition-colors duration-300">
                        {contact.email}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <div id="map" className="lg:sticky lg:top-8">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-blue-200">
                    AU North Campus, Andhra University
                  </p>
                  <p className="text-blue-300 text-sm">
                    Visakhapatnam, Andhra Pradesh 530003
                  </p>
                </div>

                <div className="relative h-96 rounded-xl overflow-hidden group shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.196391893054!2d83.3197751725617!3d17.73193250595854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394345edcc4fb7%3A0x84e06fa1a732211f!2s%C4%81%20hub%3A%20AUIC%20-%20North%20Campus!5e0!3m2!1sen!2sin!4v1748255770693!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    title="Dharvix Tech Solutions Location"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center mt-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-black text-white">
                      Ready to Build Something
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Amazing Together?
                      </span>
                    </h3>
                    <p className="text-xl text-blue-200 leading-relaxed">
                      Let's turn your ideas into reality. Get in touch today for
                      a free consultation and discover how we can help
                      accelerate your success.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                      href="tel:+919000633061"
                      className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
                    >
                      <Phone className="h-6 w-6 group-hover:animate-pulse" />
                      Schedule a Call
                    </a>
                    <a
                      href="mailto:dharvixtechsolutions@gmail.com"
                      className="group flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 hover:bg-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 text-lg"
                    >
                      <Mail className="h-6 w-6 group-hover:animate-pulse" />
                      Send Email
                    </a>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-blue-200">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium">
                        4.9/5 Client Rating
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-200">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-medium">
                        100% Project Success
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-200">
                      <Clock className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium">
                        24hr Response Time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
