'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Bot, Database, Cpu, Network, Zap, Shield, Globe, TrendingUp,
  Layers, ChevronDown, Menu, X
} from 'lucide-react';

const CompanySolutionsLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=...')] opacity-20" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-sm text-white/90 mb-8">
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            Next-Generation Enterprise Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unlock unprecedented efficiency and insights with our comprehensive AI-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );

  const SolutionCard = ({ title, description, icon: Icon, gradient, features, onExplore }) => (
    <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:scale-105">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-300 text-lg mb-6">{description}</p>
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-400 text-sm">
              <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full mr-3`} />
              {feature}
            </div>
          ))}
        </div>
        <button
          onClick={onExplore}
          className={`group/btn w-full bg-gradient-to-r ${gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
        >
          Explore Solution
          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  const SolutionsSection = () => (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-lg rounded-full border border-blue-500/20 text-sm text-blue-400 mb-6">
            <Layers className="w-4 h-4 mr-2" />
            Enterprise Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Technology Ecosystems</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our specialized domains tailored for business transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SolutionCard
            title="AI Agents & Automation"
            description="Autonomous systems for process orchestration."
            icon={Bot}
            gradient="from-blue-500 to-cyan-500"
            features={["Multi-Domain Agents", "Workflow Designer", "Performance Analytics"]}
            onExplore={() => alert('Navigating to AI Agents')}
          />
          <SolutionCard
            title="Data Intelligence & IoT"
            description="Advanced analytics and smart IoT integration."
            icon={Database}
            gradient="from-purple-500 to-pink-500"
            features={["Real-Time Analytics", "IoT Integration", "Predictive Modeling"]}
            onExplore={() => alert('Navigating to Data Intelligence')}
          />
        </div>
      </div>
    </section>
  );

  const CapabilitiesSection = () => (
    <section id="capabilities" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Solutions?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on proven tech, delivering measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ icon: Shield, title: "Security", desc: "Military-grade protection" },
            { icon: TrendingUp, title: "Scalability", desc: "Cloud-native architecture" },
            { icon: Globe, title: "Deployment", desc: "Global reach with high uptime" },
            { icon: Network, title: "Integration", desc: "Connect with 500+ apps" }]
            .map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-400 max-w-xl mx-auto">We’d love to discuss your project or idea. Reach out for a consultation.</p>
      {/* Add form or contact info here */}
    </section>
  );

  const CTASection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Join top enterprises already leveraging our platforms.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          Schedule Demo
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
          Get Free Consultation
        </button>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <ContactSection />
      <CTASection />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-lg md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400">Solutions</a>
            <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400">Capabilities</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-blue-400">Contact</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySolutionsLanding;
