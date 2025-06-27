'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import {
  ChevronRight,
  Brain,
  Zap,
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Activity,
  Gauge,
} from 'lucide-react';

interface BuildingBlock {
  name: string;
  color: string;
  completed: boolean;
}

interface SystemMetrics {
  uptime: number;
  performance: number;
  tickets: number;
  agents: number;
}

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  interactive: React.ReactNode;
}

interface SolutionSectionProps {
  id: string;
  title: string | React.ReactNode;
  subtitle: string;
  children: React.ReactNode;
}

const SolutionsPage: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<string>('');
  const [hoveredFeature, setHoveredFeature] = useState<string>('');
  const [buildingStep, setBuildingStep] = useState<number>(0);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics>({
    uptime: 99.8,
    performance: 94,
    tickets: 3,
    agents: 12,
  });

  // Animation for building blocks
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Animate system metrics
  const updateMetrics = useCallback(() => {
    setSystemMetrics((prev) => ({
      uptime: parseFloat(
        Math.max(98, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.3)).toFixed(1)
      ),
      performance: parseFloat(
        Math.max(85, Math.min(100, prev.performance + (Math.random() - 0.5) * 4)).toFixed(0)
      ),
      tickets: Math.max(0, Math.min(15, prev.tickets + Math.floor((Math.random() - 0.5) * 3))),
      agents: Math.max(8, Math.min(20, prev.agents + Math.floor((Math.random() - 0.5) * 3))),
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(updateMetrics, 2500);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  const buildingBlocks: BuildingBlock[] = [
    { name: 'Data Layer', color: 'blue-600', completed: buildingStep >= 1 },
    { name: 'AI Engine', color: 'purple-500', completed: buildingStep >= 2 },
    { name: 'API Gateway', color: 'blue-600', completed: buildingStep >= 3 },
    { name: 'Interface Layer', color: 'emerald-400', completed: buildingStep >= 4 },
    { name: 'Monitoring', color: 'emerald-400', completed: buildingStep >= 0 },
  ];

  const solutions: Solution[] = React.useMemo(
    () => [
      {
        id: 'ai-intelligent-systems',
        title: 'AI & Intelligent Systems Solutions',
        description:
          'Experience real-time 3D progression of AI infrastructure assembly, allowing for dynamic visualization of your custom AI solutions being built from the ground up.',
        icon: Brain,
        features: [
          'Real-time Implementation Tracking (3D)',
          'Modular AI Component Assembly',
          'AI Infrastructure Blueprint Design',
          'AI Agent Performance Monitoring',
          'Predictive Maintenance Analytics',
          'Advanced AI Model Deployment',
        ],
        interactive: (
          <div className="bg-blue-600/10 backdrop-blur-xl rounded-xl p-6 border border-blue-600/30 shadow-lg group-hover:shadow-2xl transition-all duration-500 glow-border">
            <div className="text-center mb-6">
              <h4 className="text-slate-100 font-semibold mb-2">AI Infrastructure Builder</h4>
              <p className="text-slate-100/70 text-sm">Watch AI systems assemble in real-time</p>
            </div>
            <div className="relative h-40 flex items-end justify-center space-x-2">
              {buildingBlocks.map((block, idx) => (
                <div key={block.name} className="flex flex-col items-center">
                  <div
                    className={`w-12 rounded-t-lg transition-all duration-1000 transform animate-float ${
                      block.completed ? 'opacity-100' : 'translate-y-4 opacity-50'
                    }`}
                    style={{
                      height: `${32 + idx * 8}px`,
                      background: block.completed
                        ? `linear-gradient(to top, ${block.color}, ${block.color}/80)`
                        : 'blue-600/20',
                      boxShadow: block.completed ? `0 0 15px ${block.color}/50` : 'none',
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    {block.completed && (
                      <div className="w-full h-2 bg-emerald-400 rounded-t-lg animate-pulse"></div>
                    )}
                  </div>
                  <div className="text-xs text-slate-100/70 mt-2 text-center font-medium">
                    {block.name}
                  </div>
                  {block.completed && (
                    <CheckCircle className="w-3 h-3 text-emerald-400 mt-1 animate-fadeIn" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm text-slate-100/70">
                Step {buildingStep + 1} of 5: {buildingBlocks[buildingStep]?.name || 'Complete'}
              </div>
              <div className="w-full bg-blue-600/20 rounded-full h-2 mt-2">
                <div
                  className="bg-gradient-to-r from-purple-500 via-blue-600 to-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((buildingStep + 1) / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'enterprise-digital-solutions',
        title: 'Enterprise Digital Solutions & Integration',
        description:
          'Access a live system monitor HUD displaying real-time agent performance, ticket resolution, and system uptime with interactive dashboards. We provide comprehensive support for seamless digital transformation and integration.',
        icon: Network,
        features: [
          'Real-time System Monitoring HUD',
          'Automated Issue Resolution',
          '24/7 Technical Support',
          'Performance Analytics Dashboard',
          'Seamless System Integration',
          'Legacy System Modernization',
        ],
        interactive: (
          <div className="bg-blue-600/10 backdrop-blur-xl rounded-xl p-6 border border-blue-600/30 shadow-lg group-hover:shadow-2xl transition-all duration-500 glow-border">
            <div className="text-center mb-6">
              <h4 className="text-slate-100 font-semibold mb-2">Live System Monitor HUD</h4>
              <p className="text-slate-100/70 text-sm">Real-time performance and support dashboard</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-600/10 rounded-lg p-4 border border-blue-600/30 overflow-hidden relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-100/70 text-sm">System Uptime</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-emerald-400 mb-1 animate-pulse">
                  {systemMetrics.uptime.toFixed(1)}%
                </div>
                <div className="w-full bg-blue-600/20 rounded-full h-2">
                  <div
                    className="bg-emerald-400 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${systemMetrics.uptime}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30 overflow-hidden relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-100/70 text-sm">Performance</span>
                  <Gauge className="w-4 h-4 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-purple-500 mb-1 animate-pulse">
                  {systemMetrics.performance.toFixed(0)}%
                </div>
                <div className="w-full bg-blue-600/20 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${systemMetrics.performance}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-400/10 rounded-lg p-3 border border-emerald-400/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-100/70 text-sm">Active Tickets</span>
                  <div className="text-lg font-bold text-slate-100 animate-pulse">
                    {systemMetrics.tickets}
                  </div>
                </div>
              </div>
              <div className="bg-blue-600/10 rounded-lg p-3 border border-blue-600/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-100/70 text-sm">Support Agents</span>
                  <div className="text-lg font-bold text-slate-100 animate-pulse">
                    {systemMetrics.agents}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="flex space-x-1">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-6 rounded-full transition-all duration-300 ${
                      i < 6 ? 'bg-emerald-400' : i < 7 ? 'bg-purple-500' : 'bg-blue-600/30'
                    }`}
                    style={{ animation: `bar-wave 1.5s infinite ease-in-out ${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '500+',
      label: 'Projects Delivered',
      color: 'blue-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '98%',
      label: 'Client Satisfaction',
      color: 'emerald-400',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '15+',
      label: 'Years Experience',
      color: 'purple-500',
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: '24/7',
      label: 'Support Available',
      color: 'blue-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp Inc.',
      content: 'Their AI solutions transformed our entire business process. The ROI was evident within 3 months.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Engineering, DataFlow Solutions',
      content: 'Exceptional expertise in enterprise integration. They seamlessly modernized our legacy systems.',
      rating: 5,
    },
  ];

  const SolutionSectionLayout: React.FC<SolutionSectionProps> = ({ id, title, subtitle, children }) => (
    <section id={id} className="py-24 bg-gradient-to-br from-slate-900 to-blue-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            {title}
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bar-wave {
          0%, 100% { transform: scaleY(1); opacity: 0.7; }
          50% { transform: scaleY(1.3); opacity: 1; }
        }
        @keyframes pulse-strong {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-pulse { animation: pulse 2s infinite ease-in-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 2s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in forwards; }
        .animate-pulse-strong { animation: pulse-strong 4s infinite ease-in-out; }
        .glow-border {
          position: relative;
          z-index: 1;
        }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(45deg, blue-600, emerald-400, purple-500);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease-in-out;
          filter: blur(10px);
        }
        .group:hover .glow-border::before {
          opacity: 0.6;
        }
        .text-shadow-glow {
          text-shadow: 0 0 5px rgba(56, 217, 169, 0.7);
          transition: text-shadow 0.2s ease-in-out;
        }
        .group-hover\/feature .text-shadow-glow {
          text-shadow: 0 0 10px rgba(56, 217, 169, 1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10">
        <Image
          src="/images/solutions-hero.jpg"
          alt="Solutions Hero"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 blur-3xl animate-pulse-strong"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-block mb-8 px-6 py-3 bg-blue-600/10 backdrop-blur-xl rounded-full border border-blue-600/30 shadow-lg shadow-blue-600/20 animate-slide-in-up">
            <span className="text-emerald-400 font-semibold text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Innovate with AI
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 mb-6 leading-tight animate-slide-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Transform Your
            <span className="block bg-gradient-to-r from-purple-500 via-blue-600 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Future with AI
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-100/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Interactive AI solutions with real-time visualization, intelligent automation, and immersive system monitoring that revolutionize how you work.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              className="group bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              aria-label="Explore interactive AI solutions"
            >
              Explore Interactive Solutions
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="group bg-slate-100/10 backdrop-blur-xl border border-slate-100/20 text-slate-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100/20 transition-all duration-300 hover:scale-105"
              aria-label="Schedule a demo"
            >
              Schedule Demo
              <ChevronRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 border-t border-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 bg-${stat.color}`}
                  style={{ boxShadow: `0 0 20px ${stat.color}/50` }}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-100 mb-2">{stat.value}</div>
                <div className="text-slate-100/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <SolutionSectionLayout
        id="solutions"
        title={
          <>
            Interactive{' '}
            <span className="bg-gradient-to-r from-purple-500 via-blue-600 to-emerald-400 bg-clip-text text-transparent">
              Solution Experience
            </span>
          </>
        }
        subtitle="Immersive AI solutions with real-time visualization and intelligent interaction"
      >
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative"
              onMouseEnter={() => setActiveSolution(solution.id)}
              onMouseLeave={() => setActiveSolution('')}
              onFocus={() => setActiveSolution(solution.id)}
              onBlur={() => setActiveSolution('')}
              tabIndex={0}
              role="region"
              aria-label={`Solution: ${solution.title}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 group-hover:border-emerald-400/50 transition-all duration-500 glow-border">
                    <div className="flex items-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl text-white mr-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ boxShadow: `0 0 25px blue-600/50` }}
                      >
                        <solution.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-100/70 mb-8 leading-relaxed text-lg">
                      {solution.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center group/feature"
                          onMouseEnter={() => setHoveredFeature(`${solution.id}-${idx}`)}
                          onMouseLeave={() => setHoveredFeature('')}
                        >
                          <CheckCircle
                            className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                              hoveredFeature === `${solution.id}-${idx}`
                                ? 'text-emerald-400'
                                : 'text-blue-600'
                            }`}
                          />
                          <span
                            className={`text-slate-100/70 transition-colors duration-200 group-hover/feature:text-slate-100 ${
                              hoveredFeature === `${solution.id}-${idx}` ? 'font-semibold text-shadow-glow' : ''
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="group bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label={`Experience demo for ${solution.title}`}
                    >
                      Experience Demo
                      <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {solution.interactive}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SolutionSectionLayout>

      {/* Testimonials Section */}
      <SolutionSectionLayout
        id="testimonials"
        title="Client Success Stories"
        subtitle="Trusted by industry leaders worldwide"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 glow-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-100/70 text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-slate-100">{testimonial.name}</div>
                <div className="text-slate-100/70">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </SolutionSectionLayout>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Discover how our interactive AI solutions can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
              aria-label="Start your AI solutions journey"
            >
              Start Your Journey
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 transform"
              aria-label="View interactive demos"
            >
              View Interactive Demos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;