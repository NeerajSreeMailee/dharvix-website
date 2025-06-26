'use client';

import React, { useState } from 'react';
import { Globe, Zap, Cloud, Database, Shield, Settings, ArrowRight, CheckCircle, Target, TrendingUp, Clock, Users, Lightbulb, Cpu, Network, Code, Layout, Smartphone, Monitor } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  color: string;
  gradient: string;
}

const EnterpriseSolutionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai-powered-apps');
  const [hoveredCard, setHoveredCard] = useState<string>('');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'ai-powered-apps',
      title: 'AI-Powered Enterprise Applications',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'Next-generation enterprise applications enhanced with artificial intelligence for superior user experiences and business outcomes.',
      services: [
        'Intelligent Web Applications: AI-enhanced user interfaces, predictive UX, personalization engines',
        'Smart Mobile Applications: Context-aware apps, on-device AI processing, voice interfaces',
        'Progressive Web Apps: Offline AI capabilities, edge computing integration, responsive design',
        'Enterprise Portals: AI-powered dashboards, intelligent search, automated workflow systems',
        'Collaboration Platforms: AI meeting assistants, document intelligence, smart scheduling',
        'Content Management: AI content organization, automated tagging, intelligent search capabilities',
        'E-commerce Intelligence: Recommendation engines, dynamic pricing, inventory optimization'
      ],
      color: 'from-blue-600 to-indigo-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      id: 'system-integration',
      title: 'System Integration & Modernization',
      icon: <Network className="w-6 h-6" />,
      description: 'Seamless integration and modernization of existing systems with cutting-edge technologies and AI capabilities.',
      services: [
        'Legacy System AI Enhancement: Retrofitting AI capabilities, data extraction, process automation',
        'API Development: RESTful APIs, GraphQL, AI-powered API design, intelligent routing',
        'Microservices Architecture: AI service composition, intelligent load balancing, scalable design',
        'Enterprise Service Bus: Message routing, protocol translation, workflow orchestration',
        'Database Integration: Multi-database querying, data synchronization, intelligent caching',
        'Cloud Integration: Multi-cloud strategies, hybrid deployments, cloud-native AI solutions',
        'Real-time Integration: Event-driven architecture, streaming data processing, real-time analytics'
      ],
      color: 'from-emerald-600 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Consulting',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Strategic consulting services to guide your organization through comprehensive digital transformation initiatives.',
      services: [
        'AI Strategy Development: Technology roadmaps, capability assessments, ROI planning',
        'Process Reengineering: AI-driven process optimization, workflow redesign, efficiency improvement',
        'Change Management: AI adoption strategies, training programs, organizational transformation',
        'Technology Selection: Vendor evaluation, architecture decisions, implementation planning',
        'Governance Frameworks: AI ethics policies, data governance, compliance strategies',
        'Innovation Labs: Proof-of-concept development, rapid prototyping, innovation methodologies'
      ],
      color: 'from-purple-600 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ];

  const capabilities = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Modern, responsive web applications with AI-enhanced user experiences'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps with intelligent features'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Integration',
      description: 'Seamless cloud adoption and multi-cloud architecture strategies'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Integration',
      description: 'Unified data platforms with real-time synchronization capabilities'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'API Development',
      description: 'Robust APIs with intelligent routing and auto-scaling features'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with regulatory compliance frameworks'
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Business Alignment',
      description: 'Solutions perfectly aligned with your business objectives and KPIs',
      metric: '95% stakeholder satisfaction'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Growth',
      description: 'Future-proof architectures that grow with your business needs',
      metric: '300% average scalability'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapid Deployment',
      description: 'Accelerated time-to-market with our proven development methodologies',
      metric: '50% faster delivery'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Experience',
      description: 'Intuitive interfaces that enhance productivity and user satisfaction',
      metric: '40% productivity increase'
    }
  ];

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend' },
    { name: 'Node.js/Python', category: 'Backend' },
    { name: 'AWS/Azure/GCP', category: 'Cloud' },
    { name: 'Docker/Kubernetes', category: 'DevOps' },
    { name: 'MongoDB/PostgreSQL', category: 'Database' },
    { name: 'GraphQL/REST', category: 'API' },
    { name: 'TensorFlow/PyTorch', category: 'AI/ML' },
    { name: 'Kafka/RabbitMQ', category: 'Messaging' }
  ];

  const caseStudies = [
    {
      title: 'Global Manufacturing Digital Transformation',
      industry: 'Manufacturing',
      challenge: 'Legacy systems integration with modern AI capabilities',
      solution: 'Comprehensive system modernization with AI-powered predictive maintenance',
      results: ['60% reduction in downtime', '45% increase in efficiency', '$2M annual savings'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Financial Services Platform Modernization',
      industry: 'Financial Services',
      challenge: 'Modernizing legacy banking systems while maintaining security',
      solution: 'Microservices architecture with AI fraud detection and customer insights',
      results: ['99.9% uptime achieved', '40% faster transactions', '90% fraud reduction'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Healthcare Enterprise Portal',
      industry: 'Healthcare',
      challenge: 'Integrating multiple healthcare systems for unified patient care',
      solution: 'AI-powered patient portal with intelligent appointment scheduling',
      results: ['30% faster patient processing', '95% user satisfaction', '50% admin workload reduction'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Globe className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Enterprise Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise Digital
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Solutions & Integration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              AI-first enterprise applications and seamless system integration services that transform 
              business operations and accelerate digital transformation initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Transform Your Enterprise
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">Proven results that drive business transformation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white mb-6 group-hover:shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-2">{benefit.description}</p>
                <div className="text-sm font-semibold text-emerald-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive enterprise solutions for digital transformation</p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.title.split(' ')[0]} {category.title.split(' ')[1]}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {serviceCategories.map((category) => (
            activeCategory === category.id && (
              <div key={category.id} className={`${category.gradient} rounded-3xl p-8 shadow-xl border border-white/50`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/60 backdrop-blur-sm rounded-xl p-4 hover:bg-white/80 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 mb-2">
                            {service.split(':')[0]}
                          </div>
                          {service.includes(':') && (
                            <div className="text-sm text-gray-600">
                              {service.split(':')[1]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technical Capabilities</h2>
            <p className="text-xl text-gray-600">Full-stack expertise across modern technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group border border-gray-100"
                onMouseEnter={() => setHoveredCard(`capability-${index}`)}
                onMouseLeave={() => setHoveredCard('')}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                  hoveredCard === `capability-${index}` 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white transform scale-110' 
                    : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
            <p className="text-xl text-white/80">Cutting-edge tech stack for modern enterprise solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group">
                <div className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-white/60 text-sm">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real-world transformations delivering measurable results</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group border border-gray-100">
                <div className={`w-full h-2 bg-gradient-to-r ${study.color} rounded-full mb-6`}></div>
                
                <div className="mb-4">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let's discuss how our enterprise solutions can accelerate your digital transformation and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform shadow-xl">
              Schedule Strategy Session
              <ArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Download Enterprise Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutionsPage;