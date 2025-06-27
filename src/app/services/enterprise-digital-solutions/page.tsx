"use client";

import React, { useState } from "react";
import {
  Globe,
  Zap,
  Cloud,
  Database,
  Shield,
  Settings,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  Users,
  Lightbulb,
  Cpu,
  Network,
  Code,
  Layout,
  Smartphone,
  Monitor,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  color: string; // Tailwind gradient 'from' color class
  toColor: string; // Tailwind gradient 'to' color class
  gradientBg: string; // Tailwind gradient background for the category content
  borderColor: string; // Tailwind border color for the category content
}

const EnterpriseSolutionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("ai-powered-apps");
  const [hoveredCard, setHoveredCard] = useState<string>("");

  // NEW PRIMARY MIXED SHADE: Indigo, Brown, Grey, Navy Blue, Dark Blue
  const colors = {
    primaryDark: "#1D2A3B", // A deep, sophisticated blend of dark blue-grey with warm brown undertones
    secondaryDark: "#2C3E50", // A slightly lighter variant for secondary backgrounds
    accentBlue: "hsl(200, 80%, 65%)", // Vibrant blue for highlights
    accentTeal: "hsl(180, 70%, 60%)", // Teal for secondary accents
    accentOrange: "hsl(30, 90%, 65%)", // Warm orange/gold to bring out brown hints and contrast
    textLight: "hsl(0, 0%, 98%)", // Off-white for primary text
    textMuted: "hsl(0, 0%, 75%)", // Lighter grey for secondary text
    borderSubtle: "hsl(210, 15%, 25%)", // Subtle border color that works with the new primary
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: "ai-powered-apps",
      title: "AI-Powered Enterprise Applications",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "Next-generation enterprise applications enhanced with artificial intelligence for superior user experiences and business outcomes.",
      services: [
        "Intelligent Web Applications: AI-enhanced user interfaces, predictive UX, personalization engines for dynamic experiences.",
        "Smart Mobile Applications: Context-aware apps, on-device AI processing, and voice interfaces for unparalleled convenience.",
        "Progressive Web Apps: Delivering offline AI capabilities, edge computing integration, and adaptive responsive design.",
        "Enterprise Portals: Featuring AI-powered dashboards, intelligent search, and automated workflow systems for efficiency.",
        "Collaboration Platforms: Equipping teams with AI meeting assistants, advanced document intelligence, and smart scheduling.",
        "Content Management: AI-driven content organization, automated tagging, and intelligent search capabilities for quick access.",
        "E-commerce Intelligence: Powering robust recommendation engines, dynamic pricing, and precision inventory optimization.",
      ],
      color: "from-blue-600", // Adjusted for new palette
      toColor: "to-purple-700", // Adjusted for new palette
      gradientBg: `bg-gradient-to-br from-[${colors.primaryDark}] via-[${colors.secondaryDark}] to-black`, // Dark, rich gradient using new colors
      borderColor: `border-[${colors.borderSubtle}]`, // Subtle border for contrast
    },
    {
      id: "system-integration",
      title: "System Integration & Modernization",
      icon: <Network className="w-6 h-6" />,
      description:
        "Seamless integration and modernization of existing systems with cutting-edge technologies and AI capabilities.",
      services: [
        "Legacy System AI Enhancement: Retrofitting existing systems with advanced AI capabilities for data extraction and process automation.",
        "API Development: Crafting robust RESTful and GraphQL APIs, featuring AI-powered design and intelligent routing for seamless communication.",
        "Microservices Architecture: Designing scalable microservices with AI service composition and intelligent load balancing for optimal performance.",
        "Enterprise Service Bus (ESB): Implementing intelligent message routing, protocol translation, and sophisticated workflow orchestration.",
        "Database Integration: Enabling multi-database querying, real-time data synchronization, and intelligent caching strategies.",
        "Cloud Integration: Developing comprehensive multi-cloud strategies, hybrid deployments, and cloud-native AI solutions.",
        "Real-time Integration: Building event-driven architectures with streaming data processing and real-time analytics capabilities.",
      ],
      color: "from-cyan-600", // Adjusted for new palette
      toColor: "to-indigo-700", // Adjusted for new palette
      gradientBg: `bg-gradient-to-br from-[${colors.primaryDark}] via-[${colors.secondaryDark}] to-black`, // Dark, muted gradient using new colors
      borderColor: `border-[${colors.borderSubtle}]`,
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation Consulting",
      icon: <Lightbulb className="w-6 h-6" />,
      description:
        "Strategic consulting services to guide your organization through comprehensive digital transformation initiatives.",
      services: [
        "AI Strategy Development: Crafting detailed technology roadmaps, performing capability assessments, and planning for measurable ROI.",
        "Process Reengineering: Leveraging AI to optimize business processes, redesign workflows, and significantly improve operational efficiency.",
        "Change Management: Developing effective AI adoption strategies, comprehensive training programs, and driving organizational transformation.",
        "Technology Selection: Providing expert guidance on vendor evaluation, architectural decisions, and meticulous implementation planning.",
        "Governance Frameworks: Establishing robust AI ethics policies, comprehensive data governance strategies, and ensuring full compliance.",
        "Innovation Labs: Facilitating rapid proof-of-concept development, quick prototyping, and implementing agile innovation methodologies.",
      ],
      color: "from-fuchsia-600", // Adjusted for new palette
      toColor: "to-orange-700", // Adjusted for new palette
      gradientBg: `bg-gradient-to-br from-[${colors.primaryDark}] via-[${colors.secondaryDark}] to-black`, // Dark, blue-ish gradient using new colors
      borderColor: `border-[${colors.borderSubtle}]`,
    },
  ];

  const capabilities = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "Modern, responsive web applications with AI-enhanced user experiences for maximum engagement.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps featuring intelligent functionalities and seamless performance.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description:
        "Seamless cloud adoption and robust multi-cloud architecture strategies for flexible scalability.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description:
        "Unified data platforms with real-time synchronization capabilities for actionable insights.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Development",
      description:
        "Robust APIs with intelligent routing and auto-scaling features for reliable connectivity.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security measures combined with comprehensive regulatory compliance frameworks.",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Alignment",
      description:
        "Solutions perfectly aligned with your business objectives and key performance indicators.",
      metric: "95% Stakeholder Satisfaction",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      description:
        "Future-proof architectures designed to seamlessly expand with your evolving business needs.",
      metric: "300% Average Scalability",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Accelerated Deployment",
      description:
        "Rapid time-to-market achieved through our proven agile development methodologies.",
      metric: "50% Faster Delivery",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhanced User Experience",
      description:
        "Intuitive interfaces that boost productivity and significantly improve user satisfaction.",
      metric: "40% Productivity Increase",
    },
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Python", category: "Backend" },
    { name: "AWS/Azure/GCP", category: "Cloud" },
    { name: "Docker/Kubernetes", category: "DevOps" },
    { name: "MongoDB/PostgreSQL", category: "Database" },
    { name: "GraphQL/REST", category: "API" },
    { name: "TensorFlow/PyTorch", category: "AI/ML" },
    { name: "Kafka/RabbitMQ", category: "Messaging" },
  ];

  const caseStudies = [
    {
      title: "Global Manufacturing Digital Transformation",
      industry: "Manufacturing",
      challenge:
        "Integrating disparate legacy systems with modern AI capabilities across global operations.",
      solution:
        "Implemented a comprehensive system modernization program featuring AI-powered predictive maintenance and intelligent supply chain optimization.",
      results: [
        "60% reduction in equipment downtime",
        "45% increase in operational efficiency",
        "$2M in annual cost savings",
      ],
      color: "from-blue-600 to-purple-700", // Adjusted for new palette
    },
    {
      title: "Financial Services Platform Modernization",
      industry: "Financial Services",
      challenge:
        "Modernizing complex legacy banking systems while ensuring uncompromised security and regulatory compliance.",
      solution:
        "Developed a robust microservices architecture with integrated AI fraud detection, real-time analytics, and personalized customer insights.",
      results: [
        "Achieved 99.9% platform uptime",
        "40% faster transaction processing",
        "90% reduction in detected fraud incidents",
      ],
      color: "from-pink-600 to-rose-700", // Adjusted for new palette
    },
    {
      title: "Healthcare Enterprise Portal for Unified Patient Care",
      industry: "Healthcare",
      challenge:
        "Consolidating multiple healthcare systems to provide a unified, accessible platform for patient care and data management.",
      solution:
        "Created an intuitive AI-powered patient portal offering intelligent appointment scheduling, secure health record access, and personalized care recommendations.",
      results: [
        "30% faster patient onboarding and processing",
        "95% patient satisfaction rate reported",
        "50% reduction in administrative workload for staff",
      ],
      color: "from-indigo-600 to-teal-700", // Adjusted for new palette
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.primaryDark, color: colors.textLight }}
    >
      {/* Header Section */}
      <section
        className="relative overflow-hidden pt-32 pb-24"
        style={{
          background: `linear-gradient(to bottom right, ${colors.primaryDark}, ${colors.secondaryDark})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${colors.primaryDark}80` }}
        ></div>{" "}
        {/* Darker overlay for text readability */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/10 shadow-lg">
            <Globe className="w-5 h-5" style={{ color: colors.accentBlue }} />{" "}
            {/* Blue accent */}
            <span className="text-white text-sm font-medium ml-2">
              Enterprise Digital Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Strategic Enterprise Digital
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              {" "}
              {/* Blue, Teal, Orange gradient */}
              Transformation & Integration
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl"
            style={{
              color: colors.textMuted,
              maxWidth: "4xl",
              margin: "0 auto 3rem auto",
            }}
          >
            Pioneering **AI-first enterprise applications** and **seamless
            system integration services** to redefine business operations and
            accelerate your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group relative overflow-hidden text-white px-9 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(to right, ${colors.accentBlue}, ${colors.accentOrange})`,
              }}
            >
              <span className="relative z-10">Transform Your Enterprise</span>
              <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-9 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 shadow-md">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
      ---
      {/* Benefits Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Partner for Enterprise Solutions?
            </h2>
            <p
              className="text-xl"
              style={{
                color: colors.textMuted,
                maxWidth: "4xl",
                margin: "0 auto",
              }}
            >
              Our proven methodologies and innovative approach drive measurable
              business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border"
                style={{
                  backgroundColor: colors.primaryDark,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-6 shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${colors.accentBlue}, ${colors.accentOrange})`,
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p
                  className="mb-2 text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {benefit.description}
                </p>
                <div
                  className="text-base font-bold mt-3"
                  style={{ color: colors.accentOrange }}
                >
                  {benefit.metric}
                </div>{" "}
                {/* Orange accent */}
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Service Categories */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${colors.primaryDark}, ${colors.secondaryDark})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
                Core Service Categories
              </span>{" "}
              {/* Blue to teal to orange gradient */}
            </h2>
            <p
              className="text-xl"
              style={{
                color: colors.textMuted,
                maxWidth: "4xl",
                margin: "0 auto",
              }}
            >
              Delivering comprehensive enterprise solutions, from intelligent
              application development to strategic digital transformation
              consulting.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out whitespace-nowrap
                  ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} ${category.toColor} text-white shadow-lg transform scale-105`
                      : `bg-[${colors.secondaryDark}] text-[${colors.textMuted}] hover:bg-[${colors.borderSubtle}] shadow-md border border-[${colors.borderSubtle}]`
                  }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden sm:inline">
                  {category.title.replace(" &", " & ")}
                </span>
                <span className="sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {serviceCategories.map(
            (category) =>
              activeCategory === category.id && (
                <div
                  key={category.id}
                  className={`${category.gradientBg} rounded-3xl p-8 shadow-2xl border ${category.borderColor} animate-fade-in-up`}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-8 text-center md:text-left">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} ${category.toColor} rounded-full flex items-center justify-center text-white text-2xl mr-0 md:mr-6 mb-4 md:mb-0 shadow-lg flex-shrink-0`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p
                        className="text-lg"
                        style={{ color: colors.textMuted }}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="backdrop-blur-sm rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border group flex items-start"
                        style={{
                          backgroundColor: `${colors.secondaryDark}80`,
                          borderColor: colors.borderSubtle,
                        }}
                      >
                        <CheckCircle
                          className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                          style={{ color: colors.accentTeal }}
                        />{" "}
                        {/* Teal accent */}
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors text-lg">
                            {" "}
                            {/* Blue hover */}
                            {service.split(":")[0]}
                          </div>
                          {service.includes(":") && (
                            <div
                              className="text-sm leading-relaxed"
                              style={{ color: colors.textMuted }}
                            >
                              {service.split(":")[1]}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </section>
      ---
      {/* Capabilities Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Technical Capabilities
            </h2>
            <p
              className="text-xl"
              style={{
                color: colors.textMuted,
                maxWidth: "4xl",
                margin: "0 auto",
              }}
            >
              Leveraging full-stack expertise across modern technologies to
              build robust and future-proof solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="rounded-xl p-7 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border cursor-pointer"
                style={{
                  backgroundColor: colors.primaryDark,
                  borderColor: colors.borderSubtle,
                }}
                onMouseEnter={() => setHoveredCard(`capability-${index}`)}
                onMouseLeave={() => setHoveredCard("")}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 shadow-md transition-all duration-300 ${
                    hoveredCard === `capability-${index}`
                      ? `bg-gradient-to-r from-[${colors.accentBlue}] to-[${colors.accentOrange}] text-white transform scale-110` // Blue to orange gradient
                      : `bg-[${colors.secondaryDark}] text-[${colors.accentBlue}]` // Blue icon on secondary background
                  }`}
                >
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {capability.title}
                </h3>{" "}
                {/* Teal hover */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textMuted }}
                >
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Technologies Section */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${colors.primaryDark}, ${colors.secondaryDark})`,
          color: colors.textLight,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Master</h2>
            <p
              className="text-xl"
              style={{
                color: colors.textMuted,
                maxWidth: "4xl",
                margin: "0 auto",
              }}
            >
              Our experts command a cutting-edge tech stack to engineer modern,
              high-performance enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="backdrop-blur-sm rounded-xl p-5 text-center border hover:scale-105 transform shadow-md"
                style={{
                  backgroundColor: `${colors.secondaryDark}50`,
                  borderColor: colors.borderSubtle,
                  color: colors.textLight,
                }}
              >
                <div className="text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors">
                  {" "}
                  {/* Blue hover */}
                  {tech.name}
                </div>
                <div className="text-sm" style={{ color: colors.textMuted }}>
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Case Studies Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transformative Success Stories
            </h2>
            <p
              className="text-xl"
              style={{
                color: colors.textMuted,
                maxWidth: "4xl",
                margin: "0 auto",
              }}
            >
              Explore real-world examples of how our enterprise solutions have
              driven measurable results and significant value.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border cursor-pointer"
                style={{
                  backgroundColor: colors.primaryDark,
                  borderColor: colors.borderSubtle,
                }}
              >
                <div
                  className={`w-full h-2 bg-gradient-to-r ${study.color} rounded-full mb-6`}
                ></div>
                <div className="mb-4">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: colors.secondaryDark,
                      color: colors.accentTeal,
                    }}
                  >
                    {" "}
                    {/* Teal accent for industry */}
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                  {study.title}
                </h3>{" "}
                {/* Orange hover */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">
                    The Challenge:
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: colors.textMuted }}
                  >
                    {study.challenge}
                  </p>

                  <h4 className="font-semibold text-white mb-2">
                    Our Solution:
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: colors.textMuted }}
                  >
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    Key Results:
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm"
                        style={{ color: colors.textMuted }}
                      >
                        <CheckCircle
                          className="w-4 h-4 mr-2 flex-shrink-0 mt-1"
                          style={{ color: colors.accentOrange }}
                        />{" "}
                        {/* Orange accent */}
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
      ---
      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.primaryDark}, ${colors.secondaryDark})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${colors.primaryDark}80` }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <Zap
            className="w-16 h-16 mx-auto mb-6 drop-shadow-lg animate-pulse"
            style={{ color: colors.accentOrange }}
          />{" "}
          {/* Orange accent */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Accelerate Your Enterprise's Digital Future?
          </h2>
          <p
            className="text-xl mb-10 opacity-90"
            style={{ color: colors.textMuted }}
          >
            Let's connect to discuss how our strategic enterprise solutions can
            empower your business for unparalleled growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group relative overflow-hidden text-white px-9 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(to right, ${colors.accentBlue}, ${colors.accentOrange})`,
              }}
            >
              <span className="relative z-10">Schedule a Strategy Session</span>
              <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
            </button>
            <button
              className="border-2 text-white px-9 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 shadow-md"
              style={{ borderColor: colors.borderSubtle }}
            >
              Download Our Enterprise Solutions Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutionsPage;
