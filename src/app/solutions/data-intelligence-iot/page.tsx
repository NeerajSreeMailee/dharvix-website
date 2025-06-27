"use client";

import React, { useState, ReactNode } from "react";
import {
  Database,
  Wifi,
  BarChart3,
  Cpu,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Activity,
  Settings,
} from "lucide-react";

// Define interfaces for type safety
interface Metric {
  [key: string]: string | undefined; // Allow dynamic keys for metrics
}

interface Solution {
  name: string;
  description: string;
  features: string[];
  metrics: Metric;
}

interface SolutionCategory {
  title: string;
  icon: ReactNode;
  description: string;
  solutions: Solution[];
}

interface SolutionCategories {
  analytics: SolutionCategory;
  iot: SolutionCategory;
  edge: SolutionCategory;
}

interface IndustryApplication {
  industry: string;
  icon: ReactNode;
  applications: string[];
  impact: string;
}

interface PlatformCapability {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface MetricDisplay {
  value: string;
  label: string;
  sublabel: string;
}

const DataIntelligencePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof SolutionCategories>("analytics");

  const solutionCategories: SolutionCategories = {
    analytics: {
      title: "Advanced Data Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      description:
        "Transform raw data into actionable insights with AI-powered analytics",
      solutions: [
        {
          name: "Real-Time Analytics Platform",
          description:
            "Process and analyze streaming data with millisecond latency",
          features: [
            "Stream Processing",
            "Live Dashboards",
            "Instant Alerts",
            "Auto-scaling",
          ],
          metrics: {
            performance: "99.9%",
            speed: "<10ms",
            capacity: "1M+ events/sec",
          },
        },
        {
          name: "Predictive Intelligence",
          description:
            "Forecast trends and outcomes with machine learning models",
          features: [
            "Time Series Forecasting",
            "Risk Modeling",
            "Demand Prediction",
            "Churn Analysis",
          ],
          metrics: {
            accuracy: "95%+",
            models: "50+ algorithms",
            automation: "80%",
          },
        },
        {
          name: "Cognitive Analytics",
          description:
            "Understand unstructured data with NLP and computer vision",
          features: [
            "Text Mining",
            "Image Recognition",
            "Audio Analysis",
            "Graph Analytics",
          ],
          metrics: {
            languages: "100+",
            accuracy: "98%",
            processing: "Real-time",
          },
        },
      ],
    },
    iot: {
      title: "IoT & Connected Systems",
      icon: <Wifi className="w-6 h-6" />,
      description:
        "Connect, monitor, and optimize your physical world with intelligent IoT solutions",
      solutions: [
        {
          name: "Industrial IoT Platform",
          description:
            "Monitor and optimize manufacturing operations in real-time",
          features: [
            "Equipment Monitoring",
            "Predictive Maintenance",
            "Quality Control",
            "Energy Management",
          ],
          metrics: { uptime: "99.5%+", efficiency: "+30%", costs: "-25%" },
        },
        {
          name: "Smart Building Intelligence",
          description:
            "Create intelligent, efficient, and secure building environments",
          features: [
            "HVAC Optimization",
            "Occupancy Analytics",
            "Security Systems",
            "Energy Efficiency",
          ],
          metrics: { savings: "40%", comfort: "+95%", security: "24/7" },
        },
        {
          name: "Environmental Monitoring",
          description:
            "Track and optimize environmental conditions and compliance",
          features: [
            "Air Quality",
            "Weather Intelligence",
            "Compliance Monitoring",
            "Agricultural IoT",
          ],
          metrics: { sensors: "1000+", coverage: "Global", accuracy: "99%+" },
        },
      ],
    },
    edge: {
      title: "Edge Computing & AI",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "Process data at the edge for faster decisions and reduced latency",
      solutions: [
        {
          name: "Edge AI Processing",
          description:
            "Deploy AI models directly on edge devices for instant responses",
          features: [
            "Local Inference",
            "Offline Capability",
            "Low Latency",
            "Bandwidth Optimization",
          ],
          metrics: { latency: "<1ms", offline: "100%", efficiency: "+90%" },
        },
        {
          name: "Distributed Analytics",
          description: "Hierarchical data processing from edge to cloud",
          features: [
            "Multi-tier Processing",
            "Data Synchronization",
            "Conflict Resolution",
            "Scalable Architecture",
          ],
          metrics: { nodes: "10K+", sync: "Real-time", reliability: "99.9%" },
        },
        {
          name: "Autonomous Decision Making",
          description:
            "Enable devices to make intelligent decisions independently",
          features: [
            "Rule-based Actions",
            "Emergency Protocols",
            "Learning Algorithms",
            "Safety Systems",
          ],
          metrics: { response: "<100ms", autonomy: "24/7", safety: "100%" },
        },
      ],
    },
  };

  const industryApplications: IndustryApplication[] = [
    {
      industry: "Healthcare",
      icon: <Activity className="w-8 h-8 text-red-500" />,
      applications: [
        "Patient Monitoring",
        "Medical Imaging AI",
        "Drug Discovery",
        "Population Health",
      ],
      impact: "Improved patient outcomes by 40%",
    },
    {
      industry: "Financial Services",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      applications: [
        "Fraud Detection",
        "Risk Management",
        "Algorithmic Trading",
        "Regulatory Compliance",
      ],
      impact: "Reduced fraud losses by 80%",
    },
    {
      industry: "Manufacturing",
      icon: <Settings className="w-8 h-8 text-blue-500" />,
      applications: [
        "Production Optimization",
        "Quality Control",
        "Supply Chain",
        "Predictive Maintenance",
      ],
      impact: "Increased efficiency by 35%",
    },
    {
      industry: "Retail & E-commerce",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      applications: [
        "Customer Analytics",
        "Demand Forecasting",
        "Price Optimization",
        "Supply Chain",
      ],
      impact: "Boosted revenue by 25%",
    },
  ];

  const platformCapabilities: PlatformCapability[] = [
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: "Unified Data Platform",
      description: "Single source of truth for all your data assets",
      features: [
        "Data Lake Architecture",
        "Real-time Streaming",
        "Multi-source Integration",
        "Automated Governance",
      ],
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI-Native Intelligence",
      description: "Built-in machine learning and AI capabilities",
      features: [
        "AutoML Pipeline",
        "Model Management",
        "A/B Testing",
        "Continuous Learning",
      ],
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Real-time Processing",
      description: "Process billions of events with sub-second latency",
      features: [
        "Stream Processing",
        "Complex Event Processing",
        "Real-time Alerts",
        "Live Dashboards",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Enterprise Security",
      description: "Military-grade security and compliance",
      features: [
        "End-to-end Encryption",
        "GDPR Compliance",
        "Access Control",
        "Audit Trails",
      ],
    },
  ];

  const metrics: MetricDisplay[] = [
    {
      value: "10PB+",
      label: "Data Processed Daily",
      sublabel: "across all clients",
    },
    { value: "99.99%", label: "Platform Uptime", sublabel: "guaranteed SLA" },
    { value: "<100ms", label: "Query Response", sublabel: "average latency" },
    { value: "500M+", label: "IoT Devices", sublabel: "connected globally" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-600/20 rounded-full mb-8">
              <Database className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">
                Data Intelligence & IoT Ecosystem
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Intelligent Data
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Universe
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of your data with AI-driven analytics, real-time
              IoT intelligence, and edge computing that transforms every byte
              into actionable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center">
                Explore Platform <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-indigo-400 font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-gray-400 text-sm">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Categories */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Data Intelligence Suite
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From raw data to intelligent insights - our comprehensive platform
            covers every aspect of your data journey.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(solutionCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as keyof SolutionCategories)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === key
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-3">
              {solutionCategories[activeSection].title}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {solutionCategories[activeSection].description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutionCategories[activeSection].solutions.map(
              (solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-xl font-bold text-white mb-3">
                    {solution.name}
                  </h4>
                  <p className="text-gray-300 mb-4">{solution.description}</p>

                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(solution.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-lg font-bold text-indigo-400">
                            {value ?? "N/A"}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Platform Capabilities */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Platform Capabilities
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Built on a foundation of scalability, security, and intelligence to
            handle your most demanding workloads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {platformCapabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                {capability.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {capability.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Applications */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Industry-Specific Intelligence
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized data intelligence solutions tailored for your industry's
            unique challenges and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industryApplications.map((industry, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center mb-4">
                {industry.icon}
                <h3 className="text-lg font-semibold text-white ml-3">
                  {industry.industry}
                </h3>
              </div>
              <div className="space-y-2 mb-4">
                {industry.applications.map((app, appIndex) => (
                  <div
                    key={appIndex}
                    className="text-sm text-gray-400 flex items-center"
                  >
                    <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                    {app}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="text-sm text-indigo-400 font-medium">
                  {industry.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Modern Data Architecture
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Built on cloud-native principles with microservices architecture for
            ultimate scalability and flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Data Ingestion
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Multi-source data collection with real-time streaming and batch
              processing capabilities.
            </p>
            <div className="text-xs text-gray-500">
              APIs • Databases • Files • IoT Sensors • Streaming
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Processing</h3>
            <p className="text-gray-400 text-sm mb-4">
              Advanced machine learning and AI models for intelligent data
              analysis and insights.
            </p>
            <div className="text-xs text-gray-500">
              ML Models • NLP • Computer Vision • Predictive Analytics
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Insights & Actions
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Interactive dashboards, automated alerts, and intelligent
              recommendations for decision making.
            </p>
            <div className="text-xs text-gray-500">
              Dashboards • Alerts • APIs • Automated Actions
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real results from organizations transforming their operations with
            our data intelligence platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl p-8 border border-green-500/20">
            <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
            <div className="text-white font-semibold mb-2">Cost Savings</div>
            <div className="text-gray-400 text-sm mb-4">
              Global manufacturing company reduced operational costs through
              predictive maintenance and supply chain optimization.
            </div>
            <div className="text-xs text-green-400">
              Manufacturing • 50K+ employees
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-xl p-8 border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-white font-semibold mb-2">ROI Increase</div>
            <div className="text-gray-400 text-sm mb-4">
              Financial services firm improved fraud detection and risk
              assessment using real-time analytics.
            </div>
            <div className="text-xs text-blue-400">
              Financial Services • 100+ branches
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl p-8 border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.5%</div>
            <div className="text-white font-semibold mb-2">Accuracy Rate</div>
            <div className="text-gray-400 text-sm mb-4">
              Healthcare provider enhanced patient outcomes through AI-powered
              diagnostic and treatment recommendations.
            </div>
            <div className="text-xs text-purple-400">
              Healthcare • 10K+ patients/day
            </div>
          </div>
        </div>
      </div>

      {/* Integration Ecosystem */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Seamless Integration
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with your existing tools and platforms through our extensive
            integration ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "AWS",
            "Azure",
            "GCP",
            "Snowflake",
            "Databricks",
            "Tableau",
            "Power BI",
            "Salesforce",
            "SAP",
            "Oracle",
            "MongoDB",
            "Kafka",
          ].map((integration, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <div className="text-white font-medium text-sm">
                {integration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Data Into Intelligence
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join industry leaders who are already leveraging our platform to
            make data-driven decisions at scale and drive unprecedented business
            value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Request Demo
            </button>
          </div>
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Free 30-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataIntelligencePage;