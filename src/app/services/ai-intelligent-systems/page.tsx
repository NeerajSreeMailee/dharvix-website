'use client';

import React, { useState } from 'react';
import { Brain, Cpu, Eye, Mic, Search, Settings, ChevronRight, ArrowRight, CheckCircle, Zap, Target, Shield, Lightbulb, TrendingUp, Clock, Users } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: string[];
  color: string;
  gradient: string;
}

const AISystemsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('machine-learning');
  const [expandedService, setExpandedService] = useState<string>('');

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'machine-learning',
      title: 'Machine Learning & Deep Learning Services',
      icon: <Brain className="w-6 h-6" />,
      description: 'Advanced ML/DL solutions covering supervised, unsupervised, and reinforcement learning with state-of-the-art neural architectures.',
      services: [
        'Supervised Learning: Classification, regression, ensemble methods, boosting algorithms',
        'Unsupervised Learning: Clustering (K-means, hierarchical, DBSCAN), dimensionality reduction (PCA, t-SNE, UMAP)',
        'Reinforcement Learning: Q-learning, policy gradients, multi-agent systems, game theory applications',
        'Deep Learning Architectures: CNNs, RNNs, LSTMs, GRUs, Transformers, VAEs, GANs, Autoencoders',
        'Neural Architecture Search (NAS): Automated architecture design, efficiency optimization',
        'Meta-Learning: Few-shot learning, learning to learn, adaptive algorithms',
        'Continual Learning: Lifelong learning, catastrophic forgetting mitigation',
        'Multi-Modal Learning: Vision-language models, cross-modal understanding, sensory fusion'
      ],
      color: 'from-purple-600 to-indigo-600',
      gradient: 'bg-gradient-to-br from-purple-50 to-indigo-50'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing & Understanding',
      icon: <Search className="w-6 h-6" />,
      description: 'Comprehensive NLP solutions from basic text processing to advanced language models and conversational AI systems.',
      services: [
        'Language Models: GPT variants, BERT, T5, domain-specific language models',
        'Text Processing: Tokenization, parsing, named entity recognition, part-of-speech tagging',
        'Semantic Analysis: Word embeddings, sentence embeddings, semantic similarity',
        'Machine Translation: Neural machine translation, multilingual models, low-resource languages',
        'Information Extraction: Document parsing, knowledge graph construction, relation extraction',
        'Text Generation: Creative writing, technical documentation, code generation',
        'Conversational AI: Dialogue systems, context management, personality modeling',
        'Language Understanding: Intent recognition, slot filling, semantic parsing',
        'Sentiment Analysis: Emotion detection, opinion mining, social media analytics',
        'Question Answering: Reading comprehension, knowledge-based QA, open-domain QA'
      ],
      color: 'from-blue-600 to-cyan-600',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision & Image Intelligence',
      icon: <Eye className="w-6 h-6" />,
      description: 'Advanced computer vision solutions for image analysis, object detection, and visual intelligence applications.',
      services: [
        'Image Classification: Object recognition, scene understanding, fine-grained classification',
        'Object Detection: YOLO, R-CNN variants, real-time detection, edge deployment',
        'Image Segmentation: Semantic segmentation, instance segmentation, panoptic segmentation',
        'Facial Recognition: Face detection, identification, emotion recognition, anti-spoofing',
        'Medical Imaging: Radiology AI, pathology detection, diagnostic assistance',
        'Industrial Vision: Quality control, defect detection, automated inspection',
        'Video Analytics: Action recognition, tracking, surveillance, sports analytics',
        '3D Vision: Depth estimation, 3D reconstruction, SLAM, point cloud processing',
        'Generative Vision: Image synthesis, style transfer, super-resolution, inpainting',
        'Augmented Reality: Marker tracking, SLAM, object placement, virtual try-on'
      ],
      color: 'from-emerald-600 to-teal-600',
      gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50'
    },
    {
      id: 'speech-audio',
      title: 'Speech & Audio Intelligence',
      icon: <Mic className="w-6 h-6" />,
      description: 'Comprehensive speech and audio processing solutions for voice interfaces and audio analysis applications.',
      services: [
        'Speech Recognition: Automatic speech recognition (ASR), continuous speech',
        'Speaker Recognition: Speaker identification, verification, diarization',
        'Speech Synthesis: Text-to-speech, voice cloning, emotional speech',
        'Audio Processing: Noise reduction, audio enhancement, music analysis',
        'Voice User Interfaces: Voice commands, voice assistants, hands-free control',
        'Audio Classification: Environmental sound classification, music genre recognition',
        'Real-time Processing: Low-latency speech processing, streaming audio analysis'
      ],
      color: 'from-orange-600 to-red-600',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      id: 'ai-research',
      title: 'AI Research & Advanced Methods',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'Cutting-edge AI research and advanced methodologies for next-generation intelligent systems.',
      services: [
        'Causal AI: Causal inference, counterfactual reasoning, causal discovery',
        'Probabilistic AI: Bayesian networks, Gaussian processes, uncertainty quantification',
        'Optimization: Mathematical programming, evolutionary algorithms, swarm intelligence',
        'Quantum Machine Learning: Quantum algorithms, variational quantum eigensolvers',
        'Neuromorphic Computing: Spiking neural networks, brain-inspired computing',
        'Federated Learning: Privacy-preserving distributed learning, secure aggregation',
        'Explainable AI: Model interpretability, LIME, SHAP, attention visualization',
        'Adversarial AI: Adversarial attacks, defenses, robustness testing',
        'AI Safety: Alignment, value learning, safe exploration, robustness verification'
      ],
      color: 'from-pink-600 to-purple-600',
      gradient: 'bg-gradient-to-br from-pink-50 to-purple-50'
    },
    {
      id: 'ai-operations',
      title: 'AI Operations & Infrastructure',
      icon: <Settings className="w-6 h-6" />,
      description: 'Complete MLOps and AI infrastructure solutions for scalable, production-ready AI systems.',
      services: [
        'MLOps: Model versioning, experiment tracking, automated pipelines',
        'Model Deployment: Containerization, serverless deployment, edge deployment',
        'Monitoring & Observability: Model drift detection, performance monitoring',
        'A/B Testing: Experimental design, statistical significance, causal inference',
        'Feature Engineering: Automated feature selection, feature stores, data pipelines',
        'Model Optimization: Quantization, pruning, knowledge distillation, hardware acceleration',
        'AI Governance: Model auditing, compliance, ethical AI frameworks',
        'AutoML: Automated machine learning, hyperparameter optimization, neural architecture search'
      ],
      color: 'from-slate-600 to-gray-600',
      gradient: 'bg-gradient-to-br from-slate-50 to-gray-50'
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision & Accuracy',
      description: 'State-of-the-art algorithms delivering 99%+ accuracy across domains'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Measurable ROI',
      description: 'Average 40% improvement in operational efficiency within 6 months'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Military-grade security with compliance to SOC2, GDPR, and HIPAA'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapid Deployment',
      description: '30-day average time-to-production with our proven methodologies'
    }
  ];

  const industries = [
    'Healthcare & Life Sciences', 'Financial Services', 'Manufacturing', 'Retail & E-commerce',
    'Automotive', 'Energy & Utilities', 'Media & Entertainment', 'Government & Public Sector'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">AI & Intelligent Systems</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI & Intelligent
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Systems Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              End-to-end AI transformation covering every AI domain and application with cutting-edge 
              machine learning, deep learning, and intelligent automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Solutions</h2>
            <p className="text-xl text-gray-600">Industry-leading AI capabilities with proven results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl text-white mb-6 group-hover:shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI Service Categories</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive AI solutions across all domains</p>
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
                <span className="hidden sm:inline">{category.title.split(' & ')[0]}</span>
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
                      onClick={() => setExpandedService(expandedService === `${category.id}-${index}` ? '' : `${category.id}-${index}`)}
                    >
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-gray-800 font-medium group-hover:text-gray-900">
                            {service.split(':')[0]}
                          </span>
                          {service.includes(':') && (
                            <div className={`mt-2 text-sm text-gray-600 transition-all duration-300 ${
                              expandedService === `${category.id}-${index}` ? 'block' : 'hidden'
                            }`}>
                              {service.split(':')[1]}
                            </div>
                          )}
                          {service.includes(':') && (
                            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                              expandedService === `${category.id}-${index}` ? 'rotate-90' : ''
                            }`} />
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">AI solutions tailored for every sector</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-600">From concept to deployment in 30 days</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', desc: 'Deep dive into your business needs and data landscape' },
              { step: '02', title: 'AI Strategy Design', desc: 'Custom AI architecture and implementation roadmap' },
              { step: '03', title: 'Development & Training', desc: 'Model development, training, and rigorous testing' },
              { step: '04', title: 'Deployment & Scale', desc: 'Production deployment with ongoing optimization' }
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Business with AI Today
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join 500+ companies that have successfully implemented our AI solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline-block" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
              Download AI Readiness Guide
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">30 Days</div>
              <div className="text-white/70">Avg. Deployment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-white/70">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISystemsPage;