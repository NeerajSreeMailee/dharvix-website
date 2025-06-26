'use client';

import React, { useState } from "react";
import { Star, Award, Users, TrendingUp, ArrowRight, MapPin, Calendar, Building } from "lucide-react";

interface Customer {
  name: string;
  image: string;
  alt: string;
  description?: string;
  industry?: string;
  location?: string;
  partnership?: string;
  testimonial?: string;
  featured?: boolean;
}

const CustomersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const customers: Customer[] = [
    {
      name: "Genius Technology",
      image: "/api/placeholder/200/120",
      alt: "Genius Technology logo",
      industry: "Technology Solutions",
      location: "Silicon Valley, CA",
      partnership: "Premium Partner",
      testimonial: "Dharvix's embedded solutions transformed our product development cycle, reducing time-to-market by 40%.",
      featured: true
    },
    {
      name: "Vaishvik Vertex Solutions Private Limited",
      image: "/api/placeholder/200/120",
      alt: "Vaishvik Vertex Solutions Private Limited logo",
      industry: "Software Development",
      location: "Bangalore, India",
      partnership: "Strategic Partner",
      testimonial: "The reliability and performance of their embedded systems exceeded our expectations.",
      featured: true
    },
    {
      name: "Pet Store India",
      image: "/api/placeholder/200/120",
      alt: "Pet Store India logo",
      industry: "Retail & E-commerce",
      location: "Mumbai, India",
      partnership: "Growth Partner",
      testimonial: "Their IoT solutions helped us create a seamless customer experience across all touchpoints."
    },
    {
      name: "AdisonsGeoBuild",
      image: "/api/placeholder/200/120",
      alt: "AdisonsGeoBuild logo",
      industry: "Construction & Infrastructure",
      location: "Delhi, India",
      partnership: "Enterprise Partner",
      testimonial: "Robust embedded systems that withstand harsh construction environments while maintaining precision."
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: Award, label: "Years of Excellence", value: "30+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
    { icon: Building, label: "Industries Served", value: "25+" }
  ];

  const industries = ['all', 'technology', 'manufacturing', 'retail', 'construction'];

  const filteredCustomers = activeTab === 'all' 
    ? customers 
    : customers.filter(customer => 
        customer.industry?.toLowerCase().includes(activeTab) || 
        customer.name.toLowerCase().includes(activeTab)
      );

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-white/10"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-400/30">
              <Star className="w-4 h-4 mr-2" />
              Trusted by Industry Leaders
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Our Valued
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-5xl mx-auto mb-8 leading-relaxed">
              Since our inception in 2025, we’ve been committed to building future-ready partnerships 
      <br />
      that enable businesses to innovate faster, scale smarter, and lead their industries with confidence.
  
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center">
                Explore Partnerships
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <stat.icon className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, our embedded solutions power innovation across industries
            </p>
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveTab(industry)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === industry
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>

          {/* Featured Customers */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Partnerships</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {customers.filter(c => c.featured).map((customer, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <img 
                        src={customer.image} 
                        alt={customer.alt}
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{customer.name}</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                          {customer.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                          {customer.partnership}
                        </span>
                      </div>
                      <div className="flex items-center text-blue-300 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {customer.location}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-blue-100 italic text-lg leading-relaxed">
                    "{customer.testimonial}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* All Customers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCustomers.map((customer, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <img 
                      src={customer.image} 
                      alt={customer.alt}
                      className="w-20 h-20 object-contain rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {customer.name}
                  </h4>
                  {customer.industry && (
                    <p className="text-blue-300 text-sm mb-3">{customer.industry}</p>
                  )}
                  {customer.location && (
                    <div className="flex items-center justify-center text-blue-400 text-sm">
                      <MapPin className="w-3 h-3 mr-1" />
                      {customer.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Join our growing family of satisfied customers and experience the difference our embedded solutions can make for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">ISO Certified</h4>
              <p className="text-blue-200">Quality management systems certified to international standards</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
              <p className="text-blue-200">Round-the-clock technical support and maintenance services</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Proven Results</h4>
              <p className="text-blue-200">Track record of successful implementations across industries</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomersPage;