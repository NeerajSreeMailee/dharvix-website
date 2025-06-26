'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Brain, Zap, Globe, Cpu, Eye, Mic, Search, Settings, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
  gradient: string;
}

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('');
  const [hoveredFeature, setHoveredFeature] = useState<string>('');

  const services: Service[] = [
    {
      id: 'ai-intelligent-systems',
      title: 'AI & Intelligent Systems Services',
      description: 'End-to-end AI transformation covering every AI domain and application with cutting-edge machine learning, deep learning, and intelligent automation solutions.',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing',
        'Computer Vision & Image Intelligence',
        'Speech & Audio Intelligence',
        'AI Research & Advanced Methods',
        'AI Operations & MLOps'
      ],
      color: 'from-purple-600 to-blue-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-blue-50'
    },
    {
      id: 'enterprise-digital-solutions',
      title: 'Enterprise Digital Solutions & Integration',
      description: 'AI-first enterprise applications and seamless system integration services that transform business operations and accelerate digital transformation.',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'AI-Powered Enterprise Applications',
        'System Integration & Modernization',
        'Digital Transformation Consulting',
        'Legacy System Enhancement',
        'Cloud Integration Services',
        'Enterprise Architecture Design'
      ],
      color: 'from-emerald-600 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Projects Delivered' },
    { icon: <Award className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <TrendingUp className="w-6 h-6" />, value: '15+', label: 'Years Experience' },
    { icon: <Star className="w-6 h-6" />, value: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp Inc.",
      content: "Their AI solutions transformed our entire business process. The ROI was evident within 3 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "VP Engineering, DataFlow Solutions",
      content: "Exceptional expertise in enterprise integration. They seamlessly modernized our legacy systems.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Cutting-Edge AI Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Business with AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI & Digital Solutions that drive innovation, optimize operations, 
              and deliver measurable business outcomes across every industry vertical.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Schedule Consultation
                <ChevronRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service Domains</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your AI journey and digital transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${service.gradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-white/50`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService('')}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center group/feature"
                        onMouseEnter={() => setHoveredFeature(`${service.id}-${idx}`)}
                        onMouseLeave={() => setHoveredFeature('')}
                      >
                        <CheckCircle className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                          hoveredFeature === `${service.id}-${idx}` ? 'text-green-500' : 'text-blue-500'
                        }`} />
                        <span className={`text-gray-700 transition-colors duration-200 group-hover/feature:text-gray-900 ${
                          hoveredFeature === `${service.id}-${idx}` ? 'font-semibold' : ''
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={`/services/${service.id}`} passHref>
  <button className={`group/btn bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
    Learn More
    <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover/btn:translate-x-1 transition-transform" />
  </button>
</Link>

                </div>

                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let's discuss how our AI and digital solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;