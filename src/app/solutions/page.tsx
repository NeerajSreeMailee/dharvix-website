"use client";

import React, { useState, useEffect, ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Database,
  Cpu,
  Network,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Layers,
  ChevronDown,
  Menu,
  X,
  Cloud,
  Lock,
  BarChart3,
  Settings,
  Lightbulb,
  HardDrive,
  Activity,
  Play,
} from "lucide-react";

// Define interface for SolutionSectionLayout props
interface SolutionSectionLayoutProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

// Extend CSSProperties for custom CSS variables
interface CustomCSSProperties extends React.CSSProperties {
  "--glow-color-start"?: string;
  "--glow-color-end"?: string;
}

const CompanySolutionsLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme & Color Palette
  const colors = {
    background: "#2D3250",
    primaryAccent: "#213448",
    secondaryAccent: "#243642",
    tertiaryAccent: "#404B69",
    textLight: "#F1F3F5",
    textMuted: "rgba(241, 243, 245, 0.7)",
    highlightCyan: "#38D9A9",
    highlightOrange: "#FFB800",
    gradientFrom: "#213448",
    gradientTo: "#38D9A9",
  };

  // Interactive states for the new sections
  const [aiAgentsActiveNode, setAiAgentsActiveNode] = useState<number | null>(null);
  const [isDataFlowing, setIsDataFlowing] = useState(false);

  useEffect(() => {
    const aiInterval = setInterval(() => {
      setAiAgentsActiveNode((prev) =>
        prev === null || prev >= 3 ? 0 : prev + 1,
      );
    }, 1500);

    return () => {
      clearInterval(aiInterval);
    };
  }, []);

  const HeroSection = () => (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Tech Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
        <div
          className="grid-overlay"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24px, ${colors.tertiaryAccent} 25px, transparent 26px), linear-gradient(90deg, transparent 24px, ${colors.tertiaryAccent} 25px, transparent 26px)`,
          }}
        ></div>
        <div
          className="line-animation line-1"
          style={{ background: colors.secondaryAccent }}
        ></div>
        <div
          className="line-animation line-2"
          style={{ background: colors.primaryAccent }}
        ></div>
        <div
          className="line-animation line-3"
          style={{ background: colors.highlightCyan }}
        ></div>
        <div
          className="line-animation line-4"
          style={{ background: colors.tertiaryAccent }}
        ></div>
        <div
          className="glow-point top-1/4 left-1/4"
          style={{ background: colors.highlightCyan }}
        ></div>
        <div
          className="glow-point bottom-1/3 right-1/4"
          style={{ background: colors.highlightOrange }}
        ></div>
        <div
          className="glow-point top-2/3 left-3/4"
          style={{ background: colors.primaryAccent }}
        ></div>
        <div
          className="glow-point bottom-1/4 left-1/3"
          style={{ background: colors.secondaryAccent }}
        ></div>
      </div>

      {/* Original Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl animate-pulse-strong"
          style={{ background: `${colors.primaryAccent}1A` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-xl h-xl rounded-full blur-3xl animate-pulse-strong"
          style={{
            animationDelay: "1s",
            background: `${colors.highlightCyan}1A`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse-strong"
          style={{
            animationDelay: "0.5s",
            background: `${colors.highlightOrange}08`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border animate-slide-in-up"
            style={{
              background: `${colors.primaryAccent}1A`,
              borderColor: `${colors.tertiaryAccent}4D`,
              color: colors.textLight,
            }}
          >
            <Zap
              className="w-4 h-4 mr-2"
              style={{ color: colors.highlightCyan }}
            />
            Next-Generation Enterprise Solutions
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-up"
            style={{ color: colors.textLight, animationDelay: "0.2s" }}
          >
            Power Your Enterprise with
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
              }}
            >
              Intelligent Ecosystems
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-up"
            style={{ color: colors.textMuted, animationDelay: "0.4s" }}
          >
            Unlock unprecedented efficiency and insights with our specialized AI
            and Data-driven solutions.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden"
              style={{
                background: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
                color: colors.textLight,
                boxShadow: `0 10px 15px -3px ${colors.primaryAccent}4D, 0 4px 6px -2px ${colors.primaryAccent}33`,
              }}
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></div>
              <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            <button
              className="group px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10"
              style={{
                border: `2px solid ${colors.textLight}4D`,
                color: colors.textLight,
              }}
            >
              Watch Demo
              <ChevronDown className="ml-2 w-5 h-5 inline-block group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          className="w-8 h-8"
          style={{ color: `${colors.textLight}99` }}
        />
      </div>
    </section>
  );

  const SolutionSectionLayout: React.FC<SolutionSectionLayoutProps> = ({ id, title, subtitle, children }) => (
    <section
      id={id}
      className="py-24 relative overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Tech Background Overlay for all solution sections */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div
          className="grid-overlay"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 49px, ${colors.secondaryAccent} 50px, transparent 51px), linear-gradient(90deg, transparent 49px, ${colors.secondaryAccent} 50px, transparent 51px)`,
          }}
        ></div>
        <div
          className="line-animation line-5"
          style={{ background: colors.primaryAccent }}
        ></div>
        <div
          className="line-animation line-6"
          style={{ background: colors.tertiaryAccent }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.textLight }}
          >
            {title}
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );

  const AIAgentsAutomationEcosystem = () => (
    <SolutionSectionLayout
      id="ai-agents-automation"
      title="AI Agents & Automation Ecosystem"
      subtitle="Intelligent automation powered by autonomous AI agents for seamless operations."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border"
            style={{
              background: `${colors.primaryAccent}1A`,
              borderColor: `${colors.tertiaryAccent}4D`,
              color: colors.primaryAccent,
            }}
          >
            <Bot className="w-4 h-4 mr-2" />
            Autonomous Operations
          </div>
          <h3
            className="text-3xl font-bold mb-4"
            style={{ color: colors.textLight }}
          >
            Unleash the Power of Intelligent Automation
          </h3>
          <p className="text-lg mb-6" style={{ color: colors.textMuted }}>
            Our **AI Agents & Automation Ecosystem** revolutionizes your
            workflows by deploying intelligent, autonomous agents that learn,
            adapt, and execute tasks with minimal human intervention.
          </p>
          <ul className="space-y-3 mb-8">
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **Intelligent Workflow Orchestration**: Automate complex business
              processes end-to-end.
            </li>
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **Self-Optimizing Agents**: AI agents continually refine their
              performance for peak efficiency.
            </li>
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **Seamless System Integration**: Connect with existing enterprise
              applications effortlessly.
            </li>
          </ul>
          <button
            className="group px-6 py-3 rounded-full font-semibold relative overflow-hidden"
            style={{
              background: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
              color: colors.textLight,
            }}
          >
            <span className="relative z-10">Learn More about AI Agents</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></div>
            <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
        </div>

        {/* 3D Simulation Lab */}
        <div
          className="relative w-full h-96 rounded-xl overflow-hidden border glow-border"
          style={{ borderColor: "#555879", background: "#283149" }}
        >
          <div className="absolute inset-0 p-6 flex flex-col items-center justify-center space-y-4">
            <h4
              className="text-xl font-bold"
              style={{ color: colors.textLight }}
            >
              Digital Transformation Lab
            </h4>
            <p className="text-sm" style={{ color: colors.textMuted }}>
              Drag AI agents into systems to see the transformation effect.
            </p>

            <div className="relative w-full h-48 flex justify-around items-center bg-gray-800/50 rounded-lg p-4">
              {/* Before State */}
              <div
                className="flex flex-col items-center transition-opacity duration-500"
                style={{ opacity: aiAgentsActiveNode === null ? 1 : 0.4 }}
              >
                <Cpu
                  className="w-12 h-12 mb-2"
                  style={{ color: colors.highlightOrange }}
                />
                <span className="text-sm" style={{ color: colors.textMuted }}>
                  Legacy System
                </span>
                <div
                  className="mt-2 text-xs font-semibold"
                  style={{ color: colors.highlightOrange }}
                >
                  Low Efficiency
                </div>
              </div>

              {/* AI Agents */}
              <div className="flex -space-x-4">
                {[...Array(3)].map((_, i) => (
                  <Bot
                    key={i}
                    className={`w-10 h-10 rounded-full transition-all duration-500 ease-in-out cursor-pointer animate-float ${
                      aiAgentsActiveNode === i
                        ? "scale-125 ring-2 ring-offset-2"
                        : ""
                    }`}
                    style={{
                      color: colors.highlightCyan,
                      background: `linear-gradient(to bottom right, ${colors.primaryAccent}, ${colors.highlightCyan})`,
                      boxShadow:
                        aiAgentsActiveNode === i
                          ? `0 0 15px ${colors.highlightCyan}`
                          : "none",
                      borderColor: colors.highlightCyan,
                      opacity:
                        aiAgentsActiveNode === null
                          ? 1
                          : aiAgentsActiveNode === i
                            ? 1
                            : 0.6,
                      animationDelay: `${i * 0.2}s`,
                    }}
                    onMouseEnter={() => setAiAgentsActiveNode(i)}
                    onMouseLeave={() => setAiAgentsActiveNode(null)}
                  />
                ))}
              </div>

              {/* After State */}
              <div
                className="flex flex-col items-center transition-opacity duration-500"
                style={{ opacity: aiAgentsActiveNode !== null ? 1 : 0.4 }}
              >
                <Layers
                  className="w-12 h-12 mb-2"
                  style={{ color: colors.highlightCyan }}
                />
                <span className="text-sm" style={{ color: colors.textMuted }}>
                  Transformed System
                </span>
                <div
                  className="mt-2 text-xs font-semibold"
                  style={{ color: colors.highlightCyan }}
                >
                  High Efficiency
                </div>
              </div>
            </div>
            <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
              {aiAgentsActiveNode !== null
                ? `Agent ${aiAgentsActiveNode + 1} actively transforming...`
                : "Hover over agents to see impact"}
            </p>
          </div>
        </div>
      </div>
    </SolutionSectionLayout>
  );

  const DataIntelligenceIoTEcosystem = () => (
    <SolutionSectionLayout
      id="data-intelligence-iot"
      title="Data Intelligence & IoT Ecosystem"
      subtitle="Unlocking insights and connecting the physical world with advanced data intelligence."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border"
            style={{
              background: `${colors.secondaryAccent}1A`,
              borderColor: `${colors.secondaryAccent}4D`,
              color: colors.secondaryAccent,
            }}
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Data-Driven Insights
          </div>
          <h3
            className="text-3xl font-bold mb-4"
            style={{ color: colors.textLight }}
          >
            Unlock Deep Insights from Your Data
          </h3>
          <p className="text-lg mb-6" style={{ color: colors.textMuted }}>
            Our **Data Intelligence & IoT Ecosystem** connects your physical
            assets to a powerful analytical engine, delivering real-time
            insights and predictive capabilities that drive smarter decisions.
          </p>
          <ul className="space-y-3 mb-8">
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **Real-time Data Processing**: Ingest and analyze vast datasets
              instantly.
            </li>
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **IoT Device Management**: Securely connect and manage all your
              smart devices.
            </li>
            <li
              className="flex items-center"
              style={{ color: colors.textMuted }}
            >
              <ArrowRight
                className="w-4 h-4 mr-3"
                style={{ color: colors.highlightCyan }}
              />
              **Predictive Analytics & AI/ML**: Forecast trends and automate
              decision-making.
            </li>
          </ul>
          <button
            className="group px-6 py-3 rounded-full font-semibold relative overflow-hidden"
            style={{
              background: `linear-gradient(to right, ${colors.secondaryAccent}, ${colors.highlightCyan})`,
              color: colors.textLight,
            }}
          >
            <span className="relative z-10">Explore Data & IoT Solutions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></div>
            <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
        </div>

        {/* Data Transformation Lab */}
        <div
          className="relative w-full h-96 rounded-xl overflow-hidden border glow-border"
          style={{ borderColor: "#555879", background: "#283149" }}
        >
          <div className="absolute inset-0 p-6 flex flex-col items-center justify-center space-y-4">
            <h4
              className="text-xl font-bold"
              style={{ color: colors.textLight }}
            >
              IoT Data Transformation Lab
            </h4>
            <p className="text-sm" style={{ color: colors.textMuted }}>
              Activate data flow to transform raw IoT data into actionable
              insights.
            </p>

            <div className="relative w-full h-48 flex justify-around items-center bg-gray-800/50 rounded-lg p-4">
              {/* Before State (Raw Data) */}
              <div
                className="flex flex-col items-center transition-opacity duration-500"
                style={{ opacity: isDataFlowing ? 0.4 : 1 }}
              >
                <HardDrive
                  className="w-12 h-12 mb-2"
                  style={{ color: colors.highlightOrange }}
                />
                <span className="text-sm" style={{ color: colors.textMuted }}>
                  Raw IoT Data
                </span>
                <div
                  className="mt-2 text-xs font-semibold"
                  style={{ color: colors.highlightOrange }}
                >
                  Unstructured & Dispersed
                </div>
              </div>

              {/* Interactive Element (Process Trigger) */}
              <div className="relative flex items-center justify-center w-20 h-20">
                <button
                  onClick={() => setIsDataFlowing((prev) => !prev)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 transform ${isDataFlowing ? "scale-110 ring-4 ring-offset-2" : ""}`}
                  style={{
                    backgroundColor: isDataFlowing
                      ? colors.highlightCyan
                      : colors.primaryAccent,
                    color: colors.background,
                    boxShadow: isDataFlowing
                      ? `0 0 20px ${colors.highlightCyan}50`
                      : "none",
                    borderColor: isDataFlowing
                      ? colors.highlightCyan
                      : colors.primaryAccent,
                    borderWidth: "2px",
                  }}
                >
                  {isDataFlowing ? (
                    <Activity className="w-8 h-8 animate-pulse" />
                  ) : (
                    <Play className="w-8 h-8" />
                  )}
                </button>
                {isDataFlowing && (
                  <>
                    <div
                      className="absolute h-1 w-20 bg-gradient-to-r from-transparent animate-flow-left"
                      style={{
                        background: `linear-gradient(to right, transparent, ${colors.tertiaryAccent})`,
                        left: "0",
                        top: "50%",
                        transform: "translateY(-50%) translateX(-100%)",
                      }}
                    ></div>
                    <div
                      className="absolute h-1 w-20 bg-gradient-to-l from-transparent animate-flow-right"
                      style={{
                        background: `linear-gradient(to left, transparent, ${colors.tertiaryAccent})`,
                        right: "0",
                        top: "50%",
                        transform: "translateY(-50%) translateX(100%)",
                      }}
                    ></div>
                  </>
                )}
              </div>

              {/* After State (Insights) */}
              <div
                className="flex flex-col items-center transition-opacity duration-500"
                style={{ opacity: isDataFlowing ? 1 : 0.4 }}
              >
                <BarChart3
                  className="w-12 h-12 mb-2"
                  style={{ color: colors.highlightOrange }}
                />
                <span className="text-sm" style={{ color: colors.textMuted }}>
                  Actionable Insights
                </span>
                <div
                  className="mt-2 text-xs font-semibold"
                  style={{ color: colors.highlightOrange }}
                >
                  Optimized & Predictive
                </div>
              </div>
            </div>
            <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
              {isDataFlowing
                ? "Data flowing, insights being generated..."
                : "Click to start data transformation."}
            </p>
          </div>
        </div>
      </div>
    </SolutionSectionLayout>
  );

  const CapabilitiesSection = () => (
    <section
      id="capabilities"
      className="py-20 relative overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Tech Background Overlay for capabilities */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div
          className="grid-overlay"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 49px, ${colors.primaryAccent} 50px, transparent 51px), linear-gradient(90deg, transparent 49px, ${colors.primaryAccent} 50px, transparent 51px)`,
          }}
        ></div>
        <div
          className="line-animation line-7"
          style={{ background: colors.highlightCyan }}
        ></div>
        <div
          className="line-animation line-8"
          style={{ background: colors.secondaryAccent }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.textLight }}
          >
            Why Partner With Us?
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            Built on robust foundations, delivering measurable impact and
            future-proof solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: "Robust Security",
              desc: "Enterprise-grade protection for all your data and systems.",
              primaryColor: colors.primaryAccent,
              secondaryColor: colors.highlightCyan,
            },
            {
              icon: TrendingUp,
              title: "Scalability & Performance",
              desc: "Cloud-native architectures designed for limitless growth.",
              primaryColor: colors.secondaryAccent,
              secondaryColor: colors.highlightCyan,
            },
            {
              icon: Globe,
              title: "Global Deployment",
              desc: "Worldwide reach with high availability and minimal latency.",
              primaryColor: colors.primaryAccent,
              secondaryColor: colors.highlightCyan,
            },
            {
              icon: Settings,
              title: "Custom Integration",
              desc: "Seamlessly integrate with your existing technology stack.",
              primaryColor: colors.secondaryAccent,
              secondaryColor: colors.highlightCyan,
            },
          ].map(
            ({ icon: Icon, title, desc, primaryColor, secondaryColor }, i) => (
              <div
                key={i}
                className="text-center group p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                style={{
                  backgroundColor: `${primaryColor}0D`,
                  border: `1px solid ${colors.tertiaryAccent}`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    "--glow-color-start": primaryColor,
                    "--glow-color-end": secondaryColor,
                    background: `linear-gradient(to bottom right, ${primaryColor}, ${secondaryColor})`,
                    color: colors.textLight,
                  } as CustomCSSProperties}
                >
                  <div className="absolute inset-0 rounded-xl animate-pulse-glow-alt"></div>
                  <Icon className="w-8 h-8 relative z-10" />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.textLight }}
                >
                  {title}
                </h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {desc}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );

  const CTASection = () => (
    <section
      className="py-24 relative overflow-hidden text-center"
      style={{
        background: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
      }}
    >
      {/* Tech Background Overlay for CTA */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div
          className="grid-overlay"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 49px, ${colors.tertiaryAccent} 50px, transparent 51px), linear-gradient(90deg, transparent 49px, ${colors.tertiaryAccent} 50px, transparent 51px)`,
          }}
        ></div>
        <div
          className="line-animation line-9"
          style={{ background: colors.secondaryAccent }}
        ></div>
        <div
          className="line-animation line-10"
          style={{ background: colors.primaryAccent }}
        ></div>
      </div>

      <div
        className="absolute inset-0"
        style={{ background: `${colors.background}33` }}
      ></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: colors.textLight }}
        >
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl mb-10" style={{ color: `${colors.textLight}CC` }}>
          Connect with our experts to discuss your specific needs and build a
          brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: colors.textLight,
              color: colors.background,
            }}
          >
            Schedule a Demo
          </button>
          <button
            className="border-2 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            style={{ borderColor: colors.textLight, color: colors.textLight }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @keyframes flow-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
            width: 0;
          }
          20% {
            opacity: 1;
            width: 20%;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
            width: 100%;
          }
        }
        @keyframes flow-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
            width: 0;
          }
          20% {
            opacity: 1;
            width: 20%;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
            width: 100%;
          }
        }

        .grid-overlay {
          position: absolute;
          inset: -100%;
          background-size: 50px 50px;
          animation: grid-flow 30s linear infinite;
        }

        @keyframes grid-flow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .line-animation {
          position: absolute;
          width: 5px;
          height: 100px;
          opacity: 0.1;
          filter: blur(1px);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .line-1 {
          top: 10%;
          left: 10%;
          transform: rotate(45deg);
          animation: line-move 15s infinite alternate;
          animation-delay: 0s;
        }
        .line-2 {
          top: 50%;
          right: 5%;
          transform: rotate(-30deg);
          animation: line-move 18s infinite alternate;
          animation-delay: 2s;
        }
        .line-3 {
          bottom: 20%;
          left: 30%;
          transform: rotate(60deg);
          animation: line-move 16s infinite alternate;
          animation-delay: 4s;
        }
        .line-4 {
          top: 5%;
          right: 40%;
          transform: rotate(120deg);
          animation: line-move 17s infinite alternate;
          animation-delay: 1s;
        }
        .line-5 {
          top: 70%;
          left: 5%;
          transform: rotate(90deg);
          animation: line-move 14s infinite alternate;
          animation-delay: 3s;
        }
        .line-6 {
          top: 15%;
          right: 20%;
          transform: rotate(-70deg);
          animation: line-move 19s infinite alternate;
          animation-delay: 5s;
        }
        .line-7 {
          bottom: 5%;
          left: 50%;
          transform: rotate(20deg);
          animation: line-move 16s infinite alternate;
          animation-delay: 0.5s;
        }
        .line-8 {
          top: 30%;
          left: 80%;
          transform: rotate(-100deg);
          animation: line-move 17s infinite alternate;
          animation-delay: 2.5s;
        }
        .line-9 {
          top: 40%;
          left: 20%;
          transform: rotate(50deg);
          animation: line-move 18s infinite alternate;
          animation-delay: 1.5s;
        }
        .line-10 {
          bottom: 10%;
          right: 10%;
          transform: rotate(-45deg);
          animation: line-move 15s infinite alternate;
          animation-delay: 3.5s;
        }

        @keyframes line-move {
          0% {
            transform: translate(0, 0) scaleY(1);
            opacity: 0.1;
          }
          25% {
            transform: translate(50px, 50px) scaleY(1.5);
            opacity: 0.2;
          }
          50% {
            transform: translate(100px, 0px) scaleY(1);
            opacity: 0.1;
          }
          75% {
            transform: translate(50px, -50px) scaleY(1.5);
            opacity: 0.2;
          }
          100% {
            transform: translate(0, 0) scaleY(1);
            opacity: 0.1;
          }
        }

        .glow-point {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(5px);
          animation: pulse-glow 3s ease-in-out infinite alternate;
          box-shadow:
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 30px currentColor;
        }

        @keyframes pulse-glow {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        @keyframes pulse-light {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-strong {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
        }

        @keyframes flash-update {
          0% {
            opacity: 1;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          }
          50% {
            opacity: 0.7;
            text-shadow: none;
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes pulse-glow-alt {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px var(--glow-color-start);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 25px var(--glow-color-end);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .glow-border {
          position: relative;
          z-index: 1;
        }

        .glow-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(45deg, #1c7ed6, #38d9a9, #ffb800);
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
      <HeroSection />
      ---
      <AIAgentsAutomationEcosystem />
      ---
      <DataIntelligenceIoTEcosystem />
      ---
      <CapabilitiesSection />
      ---
      <CTASection />
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-lg md:hidden"
          style={{ background: `${colors.background}F2` }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
            style={{ color: colors.textLight }}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a
              href="#ai-agents-automation"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400"
              style={{ color: colors.textLight }}
            >
              AI Agents & Automation
            </a>
            <a
              href="#data-intelligence-iot"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400"
              style={{ color: colors.textLight }}
            >
              Data Intelligence & IoT
            </a>
            <a
              href="#capabilities"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-400"
              style={{ color: colors.textLight }}
            >
              Capabilities
            </a>
            <button
              className="px-8 py-4 rounded-xl font-semibold"
              style={{
                background: `linear-gradient(to right, ${colors.gradientFrom}, ${colors.gradientTo})`,
                color: colors.textLight,
              }}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySolutionsLanding;