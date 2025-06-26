'use client';

import React, { useState } from 'react';
import { Bot, Zap, Brain, Shield, Users, Cog, ArrowRight, CheckCircle, Star, Globe, TrendingUp, Clock } from 'lucide-react';

const AIAgentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('conversational');

  const agentCategories = {
    conversational: {
      title: 'Conversational & Communication',
      icon: <Users className="w-6 h-6" />,
      solutions: [
        {
          name: 'Customer Service Bots',
          description: 'Multi-channel support with sentiment-aware responses and intelligent escalation',
          features: ['24/7 Availability', 'Multi-language Support', 'Emotion Recognition', 'Smart Routing']
        },
        {
          name: 'Sales Assistants',
          description: 'AI-powered lead qualification and product recommendations',
          features: ['Lead Scoring', 'Product Matching', 'Objection Handling', 'Pipeline Management']
        },
        {
          name: 'Virtual Receptionists',
          description: 'Automated appointment scheduling and visitor management',
          features: ['Calendar Integration', 'Smart Scheduling', 'Visitor Tracking', 'Call Routing']
        }
      ]
    },
    business: {
      title: 'Business Process Automation',
      icon: <Cog className="w-6 h-6" />,
      solutions: [
        {
          name: 'Document Processing',
          description: 'Intelligent invoice processing and contract analysis',
          features: ['OCR Technology', 'Data Extraction', 'Validation Rules', 'Audit Trails']
        },
        {
          name: 'Financial Transaction Agents',
          description: 'Automated payment processing and reconciliation',
          features: ['Real-time Processing', 'Fraud Detection', 'Compliance Checking', 'Reporting']
        },
        {
          name: 'Quality Assurance',
          description: 'Automated testing and compliance monitoring',
          features: ['Test Automation', 'Defect Detection', 'Compliance Reports', 'Risk Assessment']
        }
      ]
    },
    decision: {
      title: 'Decision-Making & Analytics',
      icon: <Brain className="w-6 h-6" />,
      solutions: [
        {
          name: 'Risk Assessment Agents',
          description: 'Advanced credit scoring and fraud detection systems',
          features: ['Credit Analysis', 'Fraud Prevention', 'Risk Modeling', 'Real-time Alerts']
        },
        {
          name: 'Strategic Planning',
          description: 'Market analysis and competitive intelligence',
          features: ['Market Research', 'Competitor Analysis', 'Scenario Planning', 'Trend Prediction']
        },
        {
          name: 'Operations Optimization',
          description: 'Resource allocation and efficiency improvement',
          features: ['Resource Planning', 'Schedule Optimization', 'Performance Monitoring', 'Cost Reduction']
        }
      ]
    }
  };

  const platformFeatures = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: 'Agent Orchestration',
      description: 'Seamlessly coordinate multiple AI agents for complex workflows'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with role-based access control'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast responses with edge computing capabilities'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Continuous Learning',
      description: 'Self-improving agents that adapt to your business needs'
    }
  ];

  const benefits = [
    { metric: '90%', label: 'Cost Reduction', description: 'in operational expenses' },
    { metric: '24/7', label: 'Availability', description: 'round-the-clock service' },
    { metric: '300%', label: 'Efficiency Gain', description: 'in process automation' },
    { metric: '99.9%', label: 'Accuracy', description: 'in data processing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full mb-8">
              <Bot className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI Agents & Automation Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Autonomous AI
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Workforce</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with intelligent AI agents that work 24/7, learn continuously, 
              and scale infinitely across every aspect of your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{benefit.metric}</div>
              <div className="text-blue-400 font-semibold mb-1">{benefit.label}</div>
              <div className="text-gray-400 text-sm">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Categories */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Comprehensive AI Agent Solutions</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Deploy specialized AI agents across every business function to automate complex workflows and drive innovation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(agentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {agentCategories[activeTab].solutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
              <p className="text-gray-300 mb-4">{solution.description}</p>
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Platform</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Built for scale, security, and seamless integration with your existing systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tailored AI agents designed for your industry's unique challenges and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & E-commerce', 'Legal Services', 'Real Estate'].map((industry, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-gray-400 text-sm">Specialized AI agents optimized for {industry.toLowerCase()} workflows and compliance.</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy Your AI Workforce?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging autonomous AI agents to transform their operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;