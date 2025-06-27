"use client";

import React, { useState, useEffect } from "react";
import {
  Brain,
  Cpu,
  Eye,
  Mic,
  Search,
  Settings,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Shield,
  Lightbulb,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  color: string; // Tailwind gradient class for 'from' color
  toColor: string; // Tailwind gradient class for 'to' color
  bgColor: string; // Tailwind background for the category block
  borderColor: string; // Tailwind border for the category block
}

const AISystemsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("machine-learning");
  const [expandedService, setExpandedService] = useState<string>("");

  // Enhanced color palette for consistency and vibrancy
  const colors = {
    // NEW PRIMARY MIXED SHADE: Blue, Green, Black, Navy, Brown
    primaryDark: "#1A2B2F", // A very deep, muted forest green/dark teal with subtle brown undertones

    secondaryDark: "#2B3C40", // A slightly lighter variant for secondary backgrounds
    accentPurple: "hsl(270, 80%, 65%)", // Vibrant purple, slightly brighter
    accentCyan: "hsl(180, 80%, 65%)", // Vibrant cyan, slightly brighter
    accentGold: "hsl(40, 90%, 65%)", // New: Warm gold/orange to bring out brown hints and contrast
    textLight: "hsl(0, 0%, 98%)", // Off-white for primary text
    textMuted: "hsl(0, 0%, 80%)", // Lighter gray for secondary text
    borderSubtle: "hsl(190, 15%, 25%)", // Subtle border color that works with the new primary
  };

  const serviceCategories: ServiceCategory[] = [
    {
      id: "machine-learning",
      title: "Machine Learning & Deep Learning Solutions",
      icon: <Brain className="w-6 h-6" />,
      description:
        "Advanced ML/DL solutions covering supervised, unsupervised, and reinforcement learning with state-of-the-art neural architectures.",
      services: [
        "Supervised Learning: Classification, regression, ensemble methods, boosting algorithms",
        "Unsupervised Learning: Clustering (K-means, hierarchical, DBSCAN), dimensionality reduction (PCA, t-SNE, UMAP)",
        "Reinforcement Learning: Q-learning, policy gradients, multi-agent systems, game theory applications",
        "Deep Learning Architectures: CNNs, RNNs, LSTMs, GRUs, Transformers, VAEs, GANs, Autoencoders",
        "Neural Architecture Search (NAS): Automated architecture design, efficiency optimization",
        "Meta-Learning: Few-shot learning, learning to learn, adaptive algorithms",
        "Continual Learning: Lifelong learning, catastrophic forgetting mitigation",
        "Multi-Modal Learning: Vision-language models, cross-modal understanding, sensory fusion",
      ],
      color: "from-purple-600",
      toColor: "to-indigo-600",
      bgColor: "bg-purple-50", // These Tailwind classes aren't used directly with the new color strategy but are kept for reference if needed.
      borderColor: "border-purple-200",
    },
    {
      id: "nlp",
      title: "Natural Language Processing & Understanding",
      icon: <Search className="w-6 h-6" />,
      description:
        "Comprehensive NLP solutions from basic text processing to advanced language models and conversational AI systems.",
      services: [
        "Language Models: GPT variants, BERT, T5, domain-specific language models",
        "Text Processing: Tokenization, parsing, named entity recognition, part-of-speech tagging",
        "Semantic Analysis: Word embeddings, sentence embeddings, semantic similarity",
        "Machine Translation: Neural machine translation, multilingual models, low-resource languages",
        "Information Extraction: Document parsing, knowledge graph construction, relation extraction",
        "Text Generation: Creative writing, technical documentation, code generation",
        "Conversational AI: Dialogue systems, context management, personality modeling",
        "Language Understanding: Intent recognition, slot filling, semantic parsing",
        "Sentiment Analysis: Emotion detection, opinion mining, social media analytics",
        "Question Answering: Reading comprehension, knowledge-based QA, open-domain QA",
      ],
      color: "from-blue-600",
      toColor: "to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "computer-vision",
      title: "Computer Vision & Image Intelligence",
      icon: <Eye className="w-6 h-6" />,
      description:
        "Advanced computer vision solutions for image analysis, object detection, and visual intelligence applications.",
      services: [
        "Image Classification: Object recognition, scene understanding, fine-grained classification",
        "Object Detection: YOLO, R-CNN variants, real-time detection, edge deployment",
        "Image Segmentation: Semantic segmentation, instance segmentation, panoptic segmentation",
        "Facial Recognition: Face detection, identification, emotion recognition, anti-spoofing",
        "Medical Imaging: Radiology AI, pathology detection, diagnostic assistance",
        "Industrial Vision: Quality control, defect detection, automated inspection",
        "Video Analytics: Action recognition, tracking, surveillance, sports analytics",
        "3D Vision: Depth estimation, 3D reconstruction, SLAM, point cloud processing",
        "Generative Vision: Image synthesis, style transfer, super-resolution, inpainting",
        "Augmented Reality: Marker tracking, SLAM, object placement, virtual try-on",
      ],
      color: "from-emerald-600",
      toColor: "to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      id: "speech-audio",
      title: "Speech & Audio Intelligence",
      icon: <Mic className="w-6 h-6" />,
      description:
        "Comprehensive speech and audio processing solutions for voice interfaces and audio analysis applications.",
      services: [
        "Speech Recognition: Automatic speech recognition (ASR), continuous speech",
        "Speaker Recognition: Speaker identification, verification, diarization",
        "Speech Synthesis: Text-to-speech, voice cloning, emotional speech",
        "Audio Processing: Noise reduction, audio enhancement, music analysis",
        "Voice User Interfaces: Voice commands, voice assistants, hands-free control",
        "Audio Classification: Environmental sound classification, music genre recognition",
        "Real-time Processing: Low-latency speech processing, streaming audio analysis",
      ],
      color: "from-orange-600",
      toColor: "to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      id: "ai-research",
      title: "AI Research & Advanced Methods",
      icon: <Lightbulb className="w-6 h-6" />,
      description:
        "Cutting-edge AI research and advanced methodologies for next-generation intelligent systems.",
      services: [
        "Causal AI: Causal inference, counterfactual reasoning, causal discovery",
        "Probabilistic AI: Bayesian networks, Gaussian processes, uncertainty quantification",
        "Optimization: Mathematical programming, evolutionary algorithms, swarm intelligence",
        "Quantum Machine Learning: Quantum algorithms, variational quantum eigensolvers",
        "Neuromorphic Computing: Spiking neural networks, brain-inspired computing",
        "Federated Learning: Privacy-preserving distributed learning, secure aggregation",
        "Explainable AI: Model interpretability, LIME, SHAP, attention visualization",
        "Adversarial AI: Adversarial attacks, defenses, robustness testing",
        "AI Safety: Alignment, value learning, safe exploration, robustness verification",
      ],
      color: "from-pink-600",
      toColor: "to-purple-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "ai-operations",
      title: "AI Operations & Infrastructure",
      icon: <Settings className="w-6 h-6" />,
      description:
        "Complete MLOps and AI infrastructure solutions for scalable, production-ready AI systems.",
      services: [
        "MLOps: Model versioning, experiment tracking, automated pipelines",
        "Model Deployment: Containerization, serverless deployment, edge deployment",
        "Monitoring & Observability: Model drift detection, performance monitoring",
        "A/B Testing: Experimental design, statistical significance, causal inference",
        "Feature Engineering: Automated feature selection, feature stores, data pipelines",
        "Model Optimization: Quantization, pruning, knowledge distillation, hardware acceleration",
        "AI Governance: Model auditing, compliance, ethical AI frameworks",
        "AutoML: Automated machine learning, hyperparameter optimization, neural architecture search",
      ],
      color: "from-slate-600",
      toColor: "to-gray-600",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision & Accuracy",
      description:
        "State-of-the-art algorithms delivering 99%+ accuracy across domains",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Measurable ROI",
      description:
        "Average 40% improvement in operational efficiency within 6 months",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Military-grade security with compliance to SOC2, GDPR, and HIPAA",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Deployment",
      description:
        "30-day average time-to-production with our proven methodologies",
    },
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Automotive",
    "Energy & Utilities",
    "Media & Entertainment",
    "Government & Public Sector",
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.primaryDark }}
    >
      <style jsx>{`
        .gradient-text {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        .glow-button {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .glow-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 300%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.7s ease;
          z-index: -1;
        }
        .glow-button:hover::before {
          left: 0%;
        }
        .category-button-active {
          box-shadow: 0 4px 20px -5px ${colors.accentPurple}80; /* Adjust shadow color for the new theme */
        }
        /* New Animations */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.7s ease-out forwards;
        }
        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
          }
        }
        .animate-pulseGlow {
          animation: pulseGlow 2s infinite alternate;
        }
      `}</style>
      {/* Header Section */}
      <section
        className="relative overflow-hidden pt-32 pb-24"
        style={{ backgroundColor: colors.primaryDark }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl"
            style={{
              backgroundColor: colors.accentPurple,
              animation: "pulseGlow 5s infinite alternate",
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl"
            style={{
              backgroundColor: colors.accentCyan,
              animation: "pulseGlow 6s infinite alternate reverse",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slideInUp">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <Brain className="w-5 h-5" style={{ color: colors.accentGold }} />
            <span className="text-white/90 text-sm font-medium ml-2">
              AI & Intelligent Systems
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive AI Solutions
            <span
              className="block gradient-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.accentCyan}, ${colors.accentPurple}, ${colors.accentGold})`,
              }}
            >
              for a Smarter Future
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
            End-to-end AI transformation covering every AI domain and
            application with cutting-edge machine learning, deep learning, and
            intelligent automation capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group glow-button px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                background: `linear-gradient(to right, ${colors.accentPurple}, ${colors.accentGold})`,
                color: colors.textLight,
              }}
            >
              <span className="relative z-10">Start Your AI Journey</span>
              <ArrowRight className="w-5 h-5 ml-2 inline-block relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
              View Case Studies
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
              Why Choose Our AI Solutions
            </h2>
            <p className="text-xl" style={{ color: colors.textMuted }}>
              Industry-leading AI capabilities with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${colors.accentPurple}, ${colors.accentGold})`,
                    color: colors.textLight,
                    boxShadow: `0 0 20px ${colors.accentPurple}50`,
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm" style={{ color: colors.textMuted }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Solution Categories Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our{" "}
              <span
                className="gradient-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.accentCyan}, ${colors.accentPurple}, ${colors.accentGold})`,
                }}
              >
                AI Solution Categories
              </span>
            </h2>
            <p className="text-xl" style={{ color: colors.textMuted }}>
              Comprehensive AI solutions across all domains
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} ${category.toColor} text-white shadow-lg transform scale-105 category-button-active`
                    : `bg-white/10 text-white/70 hover:bg-white/20 border border-white/10`
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden sm:inline">
                  {category.title.split(" Solutions")[0].split(" & ")[0]}
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
                  className={`bg-white/5 rounded-3xl p-8 shadow-xl border ${category.borderColor} animate-fadeInScale`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} ${category.toColor} rounded-xl flex items-center justify-center text-white mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0`}
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

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group flex items-start"
                        onClick={() =>
                          setExpandedService(
                            expandedService === `${category.id}-${index}`
                              ? ""
                              : `${category.id}-${index}`,
                          )
                        }
                      >
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0 mr-3 mt-0.5"
                          style={{ color: colors.accentCyan }}
                        />
                        <div className="flex-1">
                          <span className="text-white font-medium group-hover:text-white">
                            {service.split(":")[0]}
                          </span>
                          {service.includes(":") && (
                            <div
                              className={`mt-2 text-sm transition-all duration-300 overflow-hidden ${
                                expandedService === `${category.id}-${index}`
                                  ? "max-h-96 opacity-100 pt-2"
                                  : "max-h-0 opacity-0"
                              }`}
                              style={{ color: colors.textMuted }}
                            >
                              {service.split(":")[1]}
                            </div>
                          )}
                        </div>
                        {service.includes(":") && (
                          <ChevronRight
                            className={`w-4 h-4 text-white/50 transition-transform duration-300 ml-auto ${
                              expandedService === `${category.id}-${index}`
                                ? "rotate-90"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ),
          )}
        </div>
      </section>
      ---
      {/* Industries Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.secondaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Empower with AI
            </h2>
            <p className="text-xl" style={{ color: colors.textMuted }}>
              AI solutions tailored for every sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/10"
              >
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(45deg, ${colors.accentPurple}, ${colors.accentGold})`,
                  }}
                >
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      ---
      {/* Process Section */}
      <section
        className="py-20"
        style={{ backgroundColor: colors.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Streamlined AI Development Process
            </h2>
            <p className="text-xl" style={{ color: colors.textMuted }}>
              From concept to deployment in record time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                desc: "We conduct a deep dive into your business needs, existing infrastructure, and data landscape to define clear objectives.",
              },
              {
                step: "02",
                title: "AI Strategy Design",
                desc: "Our experts craft a custom AI architecture, meticulously plan the solution, and outline a detailed implementation roadmap tailored to your goals.",
              },
              {
                step: "03",
                title: "Development & Training",
                desc: "We build and train cutting-edge AI models, followed by rigorous testing and validation to ensure peak performance and reliability.",
              },
              {
                step: "04",
                title: "Deployment & Scale",
                desc: "Seamlessly deploy your AI solution into production with ongoing monitoring, optimization, and scalable infrastructure support.",
              },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/10 h-full flex flex-col">
                  <div
                    className="text-4xl font-bold gradient-text mb-4"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${colors.accentPurple}, ${colors.accentGold})`,
                    }}
                  >
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p
                    className="text-sm flex-grow"
                    style={{ color: colors.textMuted }}
                  >
                    {phase.desc}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight
                      className="w-8 h-8"
                      style={{ color: colors.accentCyan }}
                    />
                  </div>
                )}
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
          background: `linear-gradient(to right, ${colors.accentPurple}, ${colors.accentGold})`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: colors.primaryDark }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
            <Zap className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-white text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with AI Today
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join 500+ companies that have successfully implemented our
            cutting-edge AI solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group glow-button px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 transform"
              style={{
                backgroundColor: colors.textLight,
                color: colors.primaryDark,
              }}
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 inline-block relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
              Download AI Readiness Guide
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                99<span className="text-xl">%</span>
              </div>
              <div className="text-white/70 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                30<span className="text-xl"> Days</span>
              </div>
              <div className="text-white/70 text-sm">Avg. Deployment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                40<span className="text-xl"> %</span>
              </div>
              <div className="text-white/70 text-sm">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISystemsPage;
