'use client';

import React, { useState, useEffect } from 'react';
import {
  Bot,
  Zap,
  Brain,
  Shield,
  Users,
  Cog,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

interface AgentSolution {
  name: string;
  description: string;
  features: string[];
}

interface AgentCategory {
  title: string;
  icon: React.ReactNode;
  solutions: AgentSolution[];
}

interface AgentCategories {
  [key: string]: AgentCategory;
  conversational: AgentCategory;
  business: AgentCategory;
  decision: AgentCategory;
}

const AIAgentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('conversational');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const colors = {
    deepOceanTeal: '#0E4B5B',
    backgroundDeep: '#050711',
    backgroundMedium: '#0B0F1C',
    cardBackground: '#1A1E2C',
    borderSubtle: '#2E3A52',
    primaryBlue: '#3B82F6',
    accentPink: '#EC4899',
    accentGreen: '#10B981',
    textPrimary: '#E2E8F0',
    textSecondary: '#94A3B8',
  };

  colors.cardBackground = colors.deepOceanTeal;
  colors.borderSubtle = `${colors.deepOceanTeal}80`;

  const gradientHeroText = `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentPink}, ${colors.accentGreen})`;
  const gradientButtonPrimary = `linear-gradient(to right, ${colors.primaryBlue}, ${colors.accentGreen})`;
  const gradientButtonSecondary = `linear-gradient(to right, ${colors.accentGreen}, ${colors.primaryBlue})`;
  const gradientCardOverlay = `linear-gradient(to right, ${colors.cardBackground}, ${colors.cardBackground}80)`;
  const gradientCTAOverlay = `linear-gradient(to right, ${colors.primaryBlue}1A, ${colors.accentGreen}1A)`;

  const agentCategories: AgentCategories = {
    conversational: {
      title: 'Conversational & Communication',
      icon: <Users className="w-6 h-6" style={{ color: colors.primaryBlue }} />,
      solutions: [
        {
          name: 'Customer Service Bots',
          description: 'Multi-channel support with sentiment-aware responses and intelligent escalation',
          features: ['24/7 Availability', 'Multi-language Support', 'Emotion Recognition', 'Smart Routing'],
        },
        {
          name: 'Sales Assistants',
          description: 'AI-powered lead qualification and product recommendations',
          features: ['Lead Scoring', 'Product Matching', 'Objection Handling', 'Pipeline Management'],
        },
        {
          name: 'Virtual Receptionists',
          description: 'Automated appointment scheduling and visitor management',
          features: ['Calendar Integration', 'Smart Scheduling', 'Visitor Tracking', 'Call Routing'],
        },
      ],
    },
    business: {
      title: 'Business Process Automation',
      icon: <Cog className="w-6 h-6" style={{ color: colors.primaryBlue }} />,
      solutions: [
        {
          name: 'Document Processing',
          description: 'Intelligent invoice processing and contract analysis',
          features: ['OCR Technology', 'Data Extraction', 'Validation Rules', 'Audit Trails'],
        },
        {
          name: 'Financial Transaction Agents',
          description: 'Automated payment processing and reconciliation',
          features: ['Real-time Processing', 'Fraud Detection', 'Compliance Checking', 'Reporting'],
        },
        {
          name: 'Quality Assurance',
          description: 'Automated testing and compliance monitoring',
          features: ['Test Automation', 'Defect Detection', 'Compliance Reports', 'Risk Assessment'],
        },
      ],
    },
    decision: {
      title: 'Decision-Making & Analytics',
      icon: <Brain className="w-6 h-6" style={{ color: colors.primaryBlue }} />,
      solutions: [
        {
          name: 'Risk Assessment Agents',
          description: 'Advanced credit scoring and fraud detection systems',
          features: ['Credit Analysis', 'Fraud Prevention', 'Risk Modeling', 'Real-time Alerts'],
        },
        {
          name: 'Strategic Planning',
          description: 'Market analysis and competitive intelligence',
          features: ['Market Research', 'Competitor Analysis', 'Scenario Planning', 'Trend Prediction'],
        },
        {
          name: 'Operations Optimization',
          description: 'Resource allocation and efficiency improvement',
          features: ['Resource Planning', 'Schedule Optimization', 'Performance Monitoring', 'Cost Reduction'],
        },
      ],
    },
  };

  const platformFeatures: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = [
    {
      icon: <Bot className="w-8 h-8" style={{ color: colors.accentGreen }} />,
      title: 'Agent Orchestration',
      description: 'Seamlessly coordinate multiple AI agents for complex workflows',
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: colors.primaryBlue }} />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with role-based access control',
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: colors.accentGreen }} />,
      title: 'Real-time Processing',
      description: 'Lightning-fast responses with edge computing capabilities',
    },
    {
      icon: <TrendingUp className="w-8 h-8" style={{ color: colors.primaryBlue }} />,
      title: 'Continuous Learning',
      description: 'Self-improving agents that adapt to your business needs',
    },
  ];

  const benefits: Array<{
    metric: string;
    label: string;
    description: string;
  }> = [
    { metric: '90%', label: 'Cost Reduction', description: 'in operational expenses' },
    { metric: '24/7', label: 'Availability', description: 'round-the-clock service' },
    { metric: '300%', label: 'Efficiency Gain', description: 'in process automation' },
    { metric: '99.9%', label: 'Accuracy', description: 'in data processing' },
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden font-sans"
      style={{
        backgroundColor: colors.backgroundDeep,
        color: colors.textPrimary,
      }}
    >
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        .font-space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }
        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.07); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.05; }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }
        .custom-button-glow:hover {
          box-shadow: 0 0 25px ${colors.primaryBlue}80, 0 0 10px ${colors.accentGreen}66;
        }
        .card-glow:hover {
          box-shadow: 0 0 25px ${colors.accentGreen}4D, 0 0 10px ${colors.accentPink}33;
          border-color: ${colors.primaryBlue}80 !important;
        }
        .active-tab-glow {
          box-shadow: 0 0 35px ${colors.accentPink}80, 0 0 15px ${colors.primaryBlue}66;
        }
      `}</style>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('/grid-dark.svg')`,
          backgroundSize: '20px 20px',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      <div
        className="absolute inset-0 z-0 opacity-10 neural-network-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors.primaryBlue}1A 0%, ${colors.accentPink}1A 20%, transparent 70%)`,
          animation: 'pulseGlow 15s infinite alternate',
        }}
      ></div>
      <div
        className="absolute inset-0 z-0 radial-gradient-center opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${colors.accentGreen}1A 0%, transparent 70%)`,
        }}
      ></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-8 border animate-slide-in-up"
            style={{
              backgroundColor: `${colors.primaryBlue}1A`,
              borderColor: colors.borderSubtle,
            }}
          >
            <Bot className="w-5 h-5 mr-2" style={{ color: colors.primaryBlue }} />
            <span className="font-medium text-sm" style={{ color: colors.textPrimary }}>
              AI Agents & Automation Ecosystem
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-space-grotesk animate-slide-in-up"
            style={{ color: colors.textPrimary, animationDelay: '0.2s' }}
          >
            Autonomous AI
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradientHeroText }}>
              {' '}
              Workforce
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-up"
            style={{ color: colors.textSecondary, animationDelay: '0.4s' }}
          >
            Transform your business with intelligent AI agents that work 24/7, learn continuously, and scale infinitely across every aspect of your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 custom-button-glow"
              style={{
                background: gradientButtonPrimary,
                color: colors.textPrimary,
              }}
              aria-label="Get started with AI agents"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105 border"
              style={{
                borderColor: colors.borderSubtle,
                color: colors.textPrimary,
              }}
              aria-label="Watch AI agents demo"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 rounded-lg animate-slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div
                className="text-4xl md:text-5xl font-bold mb-2 font-space-grotesk"
                style={{ color: colors.accentGreen }}
              >
                {benefit.metric}
              </div>
              <div className="font-semibold mb-1 text-lg" style={{ color: colors.textPrimary }}>
                {benefit.label}
              </div>
              <div className="text-sm" style={{ color: colors.textSecondary }}>
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Categories */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk animate-slide-in-up"
            style={{ color: colors.textPrimary }}
          >
            Comprehensive AI Agent Solutions
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-in-up"
            style={{ color: colors.textSecondary, animationDelay: '0.2s' }}
          >
            Deploy specialized AI agents across every business function to automate complex workflows and drive innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(agentCategories).map(([key, category]: [string, AgentCategory]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 ${
                activeTab === key ? 'text-white active-tab-glow' : 'bg-white/5 border'
              }`}
              style={{
                background: activeTab === key ? gradientButtonPrimary : 'transparent',
                color: activeTab === key ? colors.textPrimary : colors.textSecondary,
                borderColor: activeTab === key ? 'transparent' : colors.borderSubtle,
              }}
              aria-label={`Select ${category.title} tab`}
            >
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agentCategories[activeTab].solutions.map((solution: AgentSolution, index: number) => (
            <div
              key={index}
              className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 card-glow border"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.borderSubtle,
              }}
              tabIndex={0}
              role="region"
              aria-label={`Solution: ${solution.name}`}
            >
              <h3
                className="text-xl font-bold mb-3 font-space-grotesk"
                style={{ color: colors.textPrimary }}
              >
                {solution.name}
              </h3>
              <p className="mb-4 text-base" style={{ color: colors.textSecondary }}>
                {solution.description}
              </p>
              <div className="space-y-2">
                {solution.features.map((feature: string, featureIndex: number) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    <CheckCircle
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      style={{ color: colors.accentGreen }}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Features */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk animate-slide-in-up"
            style={{ color: colors.textPrimary }}
          >
            Enterprise-Grade Platform
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-in-up"
            style={{ color: colors.textSecondary, animationDelay: '0.2s' }}
          >
            Built for scale, security, and seamless integration with your existing systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 card-glow border"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.borderSubtle,
              }}
              tabIndex={0}
              role="region"
              aria-label={`Feature: ${feature.title}`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3
                className="text-lg font-semibold mb-2 font-space-grotesk"
                style={{ color: colors.textPrimary }}
              >
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: colors.textSecondary }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk animate-slide-in-up"
            style={{ color: colors.textPrimary }}
          >
            Industry-Specific Solutions
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-in-up"
            style={{ color: colors.textSecondary, animationDelay: '0.2s' }}
          >
            Tailored AI agents designed for your industry's unique challenges and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Healthcare', 'Financial Services', 'Manufacturing', 'Retail & E-commerce', 'Legal Services', 'Real Estate'].map(
            (industry, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group cursor-pointer hover:scale-105 card-glow border"
                style={{
                  background: colors.cardBackground,
                  borderColor: colors.borderSubtle,
                }}
                tabIndex={0}
                role="button"
                aria-label={`Explore ${industry} solutions`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-lg font-semibold font-space-grotesk"
                    style={{ color: colors.textPrimary }}
                  >
                    {industry}
                  </h3>
                  <ArrowRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    style={{ color: colors.textSecondary }}
                  />
                </div>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  Specialized AI agents optimized for {industry.toLowerCase()} workflows and compliance.
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div
          className="backdrop-blur-md rounded-2xl p-12 text-center border animate-slide-in-up"
          style={{
            background: colors.cardBackground,
            borderColor: colors.borderSubtle,
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk"
            style={{ color: colors.textPrimary }}
          >
            Ready to Deploy Your AI Workforce?
          </h2>
          <p
            className="mb-8 max-w-2xl mx-auto text-base md:text-lg"
            style={{ color: colors.textSecondary }}
          >
            Join thousands of companies already leveraging autonomous AI agents to transform their operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 custom-button-glow"
              style={{
                background: gradientButtonPrimary,
                color: colors.textPrimary,
              }}
              aria-label="Start free trial for AI agents"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105 border"
              style={{
                borderColor: colors.borderSubtle,
                color: colors.textPrimary,
              }}
              aria-label="Schedule a consultation"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;