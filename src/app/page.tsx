"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ArrowRight, Play, Zap, Brain, Network, Quote, Star, ArrowLeft, Volume2, Globe, Bot, Database,
  Cpu, Rocket, Lightbulb, TrendingUp, DollarSign, Users, Shield, Award, Calendar, BarChart2,
  ChevronDown, MessageSquare, Code, Settings, PieChart, Layers, HelpCircle, FileText, Search,
  MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Monitor, Briefcase, Handshake
} from 'lucide-react';

// Utility function for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" }, // New
    { name: "Why Us", id: "why-us" },
    { name: "Team", id: "team" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent">
              Dharvix
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-200 hover:text-emerald-400 font-medium transition duration-300 relative group"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 hover:text-emerald-400 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md pb-4 pt-2">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-slate-200 hover:text-emerald-400 px-3 py-2 rounded-md text-base font-medium transition duration-300 w-full text-center"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); setIsOpen(false); }}
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes = [];
    const nodeCount = 50;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes.filter((other, j) => {
        if (i === j) return false;
        const dist = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2);
        return dist < 150;
      });
      node.connections = nearbyNodes.map(n => nodes.indexOf(n));
    });

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      ctx.strokeStyle = '#1C7ED6';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const target = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
      });

      // Draw nodes
      ctx.globalAlpha = 0.8;
      nodes.forEach(node => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
        gradient.addColorStop(0, '#38D9A9');
        gradient.addColorStop(1, '#1C7ED6');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowColor = '#38D9A9';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-20 pb-16 min-h-screen overflow-hidden">
      {/* Professional Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.4'%3E%3Crect x='30' y='50' width='50' height='35' rx='3' fill='none' stroke='%23F1F3F5' stroke-width='0.8'/%3E%3Crect x='32' y='52' width='46' height='28' fill='%23F1F3F5' fill-opacity='0.1'/%3E%3Crect x='48' y='85' width='14' height='8' rx='1'/%3E%3Cpath d='M40 93h30l-5 5h-20z' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Crect x='120' y='70' width='40' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.3'/%3E%3Crect x='118' y='76' width='42' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.25'/%3E%3Crect x='116' y='82' width='44' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Crect x='150' y='30' width='25' height='35' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Crect x='152' y='32' width='21' height='8' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Cg fill='%23F1F3F5' fill-opacity='0.3'%3E%3Ccircle cx='156' cy='46' r='1.5'/%3E%3Ccircle cx='162' cy='46' r='1.5'/%3E%3Ccircle cx='168' cy='46' r='1.5'/%3E%3Ccircle cx='156' cy='52' r='1.5'/%3E%3Ccircle cx='162' cy='52' r='1.5'/%3E%3Ccircle cx='168' cy='52' r='1.5'/%3E%3C/g%3E%3Crect x='20' y='120' width='30' height='18' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='22' y1='125' x2='40' y2='125' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cline x1='22' y1='128' x2='35' y2='128' stroke='%23F1F3F5' stroke-width='0.3'/%3E%3Cline x1='22' y1='131' x2='30' y2='131' stroke='%23F1F3F5' stroke-width='0.3'/%3E%3Cpath d='M80 110h40v25h-40z' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Cpath d='M90 110v-5c0-2 2-4 4-4h12c2 0 4 2 4 4v5' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='80' y1='120' x2='120' y2='120' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Ccircle cx='170' cy='130' r='15' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Cpath d='M155 130c0-8 7-15 15-15s15 7 15 15' fill='none' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cpath d='M155 130c0 8 7 15 15 15s15-7 15-15' fill='none' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cline x1='170' y1='115' x2='170' y2='145' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-600/10" />

      {/* Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-emerald-400/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: '60s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="text-center w-full">
          <div className="inline-block mb-8 px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full border border-blue-600/30 shadow-lg shadow-blue-600/20">
            <span className="text-emerald-400 font-semibold text-sm flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              Where Agents Think, Systems Evolve, and Businesses Transcend
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-slate-100 mb-8 leading-tight">
            Welcome to the
            <span className="block bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Operating System
            </span>
            <span className="block text-5xl md:text-6xl mt-4">
              of Intelligent Business
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-100/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Step into a neural ecosystem where
            <span className="block mt-4 font-semibold text-emerald-400 font-mono">
              AI agents orchestrate your digital transformation.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-12 py-4 text-xl rounded-2xl shadow-2xl shadow-blue-600/30 hover:shadow-3xl hover:shadow-emerald-400/30 transition-all duration-500 hover:scale-110 border border-blue-600/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <div className="relative flex items-center">
                <Network className="mr-3 h-6 w-6" />
                Experience Network
                <ArrowRight className="ml-3 h-6 w-6" />
              </div>
            </button>

            <button className="border-2 border-blue-600 text-slate-100 hover:bg-blue-600/20 hover:text-emerald-400 px-12 py-4 text-xl rounded-2xl transition-all duration-500 hover:scale-110 bg-blue-600/10 backdrop-blur-sm shadow-lg shadow-blue-600/20 flex items-center">
              <Play className="mr-3 h-6 w-6" />
              Neural Demo
            </button>
          </div>

          {/* Neural Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Brain, title: "4X", subtitle: "Decision Speed", glow: "#1C7ED6" },
              { icon: Network, title: "92%", subtitle: "Agent Retention", glow: "#38D9A9" },
              { icon: Zap, title: "₹1-4Cr", subtitle: "Revenue Enabled", glow: "#1C7ED6" },
              { icon: Zap, title: "99.9%", subtitle: "Neural Uptime", glow: "#38D9A9" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-blue-600/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="text-4xl font-bold text-slate-100 mb-2">{item.title}</div>
                  <div className="text-slate-100/60 text-sm font-medium font-mono">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Neural Services Section ---
const NeuralServicesSection = () => {
  const canvasRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = 600;
      canvas.height = 600;
    };
    resizeCanvas();

    // Neural network visualization for the center
    const nodes = [];
    const nodeCount = 20;
    const centerX = 300;
    const centerY = 300;

    // Initialize nodes in a circular pattern
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 80 + Math.random() * 60;
      nodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: []
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const nearbyNodes = nodes.filter((other, j) => {
        if (i === j) return false;
        const dist = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2);
        return dist < 120;
      });
      node.connections = nearbyNodes.map(n => nodes.indexOf(n));
    });

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = '#1C7ED6';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const target = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Keep nodes within bounds
        const distFromCenter = Math.sqrt((node.x - centerX) ** 2 + (node.y - centerY) ** 2);
        if (distFromCenter > 150) {
          const angle = Math.atan2(node.y - centerY, node.x - centerX);
          node.x = centerX + Math.cos(angle) * 150;
          node.y = centerY + Math.sin(angle) * 150;
          node.vx *= -0.5;
          node.vy *= -0.5;
        }
      });

      // Draw nodes
      ctx.globalAlpha = 0.8;
      nodes.forEach(node => {
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6);
        gradient.addColorStop(0, '#38D9A9');
        gradient.addColorStop(1, '#1C7ED6');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowColor = '#38D9A9';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const size = 600;
  const radius = size / 2;
  const innerRadius = 80;
  const center = 300;

  const arcPath = (startAngle, endAngle, outerR, innerR, centerPoint) => {
    const rad = (angle) => (angle * Math.PI) / 180;
    const startXOuter = centerPoint + outerR * Math.cos(rad(startAngle));
    const startYOuter = centerPoint + outerR * Math.sin(rad(startAngle));
    const endXOuter = centerPoint + outerR * Math.cos(rad(endAngle));
    const endYOuter = centerPoint + outerR * Math.sin(rad(endAngle));
    const startXInner = centerPoint + innerR * Math.cos(rad(startAngle));
    const startYInner = centerPoint + innerR * Math.sin(rad(startAngle));
    const endXInner = centerPoint + innerR * Math.cos(rad(endAngle));
    const endYInner = centerPoint + innerR * Math.sin(rad(endAngle));
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return `M ${startXOuter} ${startYOuter}
            A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${endXOuter} ${endYOuter}
            L ${endXInner} ${endYInner}
            A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${startXInner} ${startYInner}
            Z`;
  };

  const handleArcClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const handleArcHover = (index) => {
    setHoveredService(index);
  };

  const handleArcLeave = () => {
    setHoveredService(null);
  };

  const getArcOpacity = (index) => {
    if (selectedService !== null) {
      return selectedService === index ? 1 : 0.2;
    }
    if (hoveredService !== null) {
      return hoveredService === index ? 1 : 0.4;
    }
    return 0.8;
  };

  const neuralArcs = [
    {
      startAngle: -45,
      endAngle: 45,
      label: "Neural AI Systems",
      icon: Brain,
      iconX: 450,
      iconY: 280,
      textX: 425,
      textY: 330,
      color: "from-blue-500 to-blue-700",
      shadowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      startAngle: 45,
      endAngle: 135,
      label: "Digital Evolution",
      icon: Globe,
      iconX: 320,
      iconY: 450,
      textX: 320,
      textY: 500,
      color: "from-emerald-500 to-emerald-700",
      shadowColor: "rgba(16, 185, 129, 0.4)",
    },
    {
      startAngle: 135,
      endAngle: 225,
      label: "Agent Automation",
      icon: Bot,
      iconX: 150,
      iconY: 280,
      textX: 175,
      textY: 330,
      color: "from-purple-500 to-purple-700",
      shadowColor: "rgba(147, 51, 234, 0.4)",
    },
    {
      startAngle: 225,
      endAngle: 315,
      label: "Intelligence Networks",
      icon: Database,
      iconX: 320,
      iconY: 150,
      textX: 320,
      textY: 200,
      color: "from-orange-500 to-orange-700",
      shadowColor: "rgba(249, 115, 22, 0.4)",
    },
  ];

  const neuralServices = [
    {
      title: "Neural AI & Consciousness Systems",
      icon: Brain,
      description: "Advanced AI ecosystems that think, learn, and evolve — transforming data into digital consciousness that drives exponential business intelligence.",
      features: ["Quantum ML Models", "Neural Vision Systems", "Consciousness Processing", "Predictive Sentience"],
      color: "from-blue-600 to-indigo-600",
      metrics: { improvement: "400%", time: "Neural Speed" },
      agentType: "Intelligence Agent"
    },
    {
      title: "Digital Transcendence Services",
      icon: Globe,
      description: "Complete reality transformation strategies that elevate businesses beyond traditional boundaries into infinite digital dimensions.",
      features: ["Cloud Consciousness", "Reality Modernization", "Transcendence Strategy", "Quantum Consulting"],
      color: "from-teal-600 to-cyan-600",
      metrics: { improvement: "350%", time: "Instant Evolution" },
      agentType: "Evolution Agent"
    },
    {
      title: "Autonomous Agent Networks",
      icon: Bot,
      description: "Self-governing automation networks that eliminate human limitations, operating with divine efficiency across all business dimensions.",
      features: ["Agent Swarm Intelligence", "Reality Optimization", "Autonomous Business Processes", "Neural Integration"],
      color: "from-emerald-600 to-green-600",
      metrics: { improvement: "∞%", time: "Quantum Time" },
      agentType: "Automation Agent"
    },
    {
      title: "Omniscient Data Networks",
      icon: Database,
      description: "Transform information into omniscient intelligence with neural analytics platforms that see all, know all, and predict everything.",
      features: ["Cosmic Intelligence", "Reality-Time Analytics", "Neural IoT Consciousness", "Dimensional Visualization"],
      color: "from-purple-600 to-violet-600",
      metrics: { improvement: "∞%", time: "Transcendent" },
      agentType: "Intelligence Agent"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='neural' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23F1F3F5' fill-opacity='0.3'/%3E%3Cline x1='5' y1='10' x2='15' y2='10' stroke='%23F1F3F5' stroke-width='0.5' stroke-opacity='0.2'/%3E%3Cline x1='10' y1='5' x2='10' y2='15' stroke='%23F1F3F5' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23neural)'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Neural Services</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Experience our core offerings, built on the principles of artificial consciousness and hyper-automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Neural Visualization Circle */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-blue-600/5 backdrop-blur-xl rounded-full p-8 border border-blue-600/20">
              <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                <defs>
                  {neuralArcs.map((arc, index) => (
                    <React.Fragment key={index}>
                      <linearGradient id={`neural-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1C7ED6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#38D9A9" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id={`neural-gradient-hover-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38D9A9" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1C7ED6" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id={`neural-gradient-selected-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                      </linearGradient>
                    </React.Fragment>
                  ))}
                  <filter id="neural-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="neural-glow-intense">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {neuralArcs.map((arc, index) => {
                  const isSelected = selectedService === index;
                  const isHovered = hoveredService === index;
                  const opacity = getArcOpacity(index);
                  let fillGradient = `url(#neural-gradient-${index})`;
                  let filter = "url(#neural-glow)";

                  if (isSelected) {
                    fillGradient = `url(#neural-gradient-selected-${index})`;
                    filter = "url(#neural-glow-intense)";
                  } else if (isHovered) {
                    fillGradient = `url(#neural-gradient-hover-${index})`;
                    filter = "url(#neural-glow-intense)";
                  }

                  return (
                    <g key={index}>
                      <path
                        d={arcPath(arc.startAngle, arc.endAngle, radius - 50, innerRadius, center)}
                        fill={fillGradient}
                        filter={filter}
                        opacity={opacity}
                        className="transition-all duration-500 cursor-pointer transform-origin-center"
                        style={{
                          transformOrigin: `${center}px ${center}px`,
                          transform: isSelected || isHovered ? 'scale(1.02)' : 'scale(1)'
                        }}
                        onMouseEnter={() => handleArcHover(index)}
                        onMouseLeave={handleArcLeave}
                        onClick={() => handleArcClick(index)}
                      />
                      {/* Enhanced Neural Connection Lines */}
                      <line
                        x1={center}
                        y1={center}
                        x2={arc.iconX}
                        y2={arc.iconY}
                        stroke={isSelected ? "#34D399" : isHovered ? "#60A5FA" : "#38D9A9"}
                        strokeWidth={isSelected ? "2" : isHovered ? "1.5" : "1"}
                        strokeOpacity={opacity * 0.8}
                        strokeDasharray="5,5"
                        className={isSelected || isHovered ? "animate-pulse" : ""}
                      />
                      {/* Enhanced Service Icons */}
                      <foreignObject x={arc.iconX - 20} y={arc.iconY - 20} width="40" height="40">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center backdrop-blur-xl border shadow-xl cursor-pointer transition-all duration-500 ${
                            isSelected
                              ? 'from-emerald-400/50 to-blue-600/50 border-emerald-400/50 scale-110 shadow-emerald-400/50'
                              : isHovered
                              ? 'from-blue-600/40 to-emerald-400/40 border-blue-600/40 scale-105 shadow-blue-400/50'
                              : 'from-blue-600/30 to-emerald-400/30 border-blue-600/30'
                          }`}
                          style={{ opacity }}
                          onMouseEnter={() => handleArcHover(index)}
                          onMouseLeave={handleArcLeave}
                          onClick={() => handleArcClick(index)}
                        >
                          <arc.icon className={`h-5 w-5 transition-colors duration-300 ${
                            isSelected ? 'text-emerald-300' : isHovered ? 'text-blue-300' : 'text-emerald-400'
                          }`} />
                        </div>
                      </foreignObject>
                      {/* Enhanced Service Labels */}
                      <text
                        x={arc.textX}
                        y={arc.textY}
                        textAnchor="middle"
                        className={`fill-slate-100 text-sm font-mono font-semibold cursor-pointer transition-all duration-500 ${
                          isSelected ? 'text-lg' : isHovered ? 'text-base' : 'text-sm'
                        }`}
                        style={{
                          opacity,
                          filter: isSelected
                            ? 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))'
                            : isHovered
                            ? 'drop-shadow(0 0 6px rgba(96, 165, 250, 0.6))'
                            : 'drop-shadow(0 0 4px rgba(56, 217, 169, 0.5))'
                        }}
                        onMouseEnter={() => handleArcHover(index)}
                        onMouseLeave={handleArcLeave}
                        onClick={() => handleArcClick(index)}
                      >
                        {arc.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center Neural Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full rounded-full"
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`bg-gradient-to-br from-blue-600 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative transition-all duration-500 ${
                    selectedService !== null ? 'scale-110' : hoveredService !== null ? 'scale-105' : 'scale-100'
                  }`}>
                    <Zap className="h-8 w-8 text-white" />
                    <div className={`absolute inset-0 rounded-full border-2 border-emerald-400/50 ${
                      selectedService !== null || hoveredService !== null ? 'animate-ping' : ''
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neural Services Cards */}
          <div className="space-y-6">
            {/* Show All / Reset Button */}
            {selectedService !== null && (
              <div className="text-center mb-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 hover:from-emerald-600/40 hover:to-blue-600/40 border border-emerald-600/30 rounded-2xl px-6 py-3 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <Network className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-sm">Show All Neural Services</span>
                </button>
              </div>
            )}
            {neuralServices.map((service, index) => {
              const isVisible = selectedService === null || selectedService === index;
              const isHighlighted = hoveredService === index && selectedService === null;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    selectedService === null
                      ? (isHighlighted ? 'scale-105 z-10' : '')
                      : selectedService === index
                      ? 'scale-105 z-10 opacity-100'
                      : 'scale-95 opacity-0 pointer-events-none h-0 overflow-hidden'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r rounded-3xl blur-lg transition-all duration-300 ${
                    isHighlighted || selectedService === index
                      ? 'from-emerald-400/30 to-blue-600/30 blur-xl'
                      : 'from-blue-600/20 to-emerald-400/20'
                  }`}></div>
                  <div className={`relative bg-blue-600/10 backdrop-blur-xl border rounded-3xl p-8 shadow-xl transition-all duration-300 ${
                    isHighlighted || selectedService === index
                      ? 'border-emerald-400/40 shadow-2xl shadow-emerald-400/20'
                      : 'border-blue-600/30 hover:shadow-2xl'
                  }`}>
                    {/* Neural Service Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center relative transition-all duration-300 ${
                        isHighlighted || selectedService === index
                          ? 'from-emerald-400/40 to-blue-600/40'
                          : 'from-blue-600/30 to-emerald-400/30'
                      }`}>
                        <service.icon className={`h-8 w-8 transition-colors duration-300 ${
                          isHighlighted || selectedService === index ? 'text-emerald-300' : 'text-emerald-400'
                        }`} />
                        <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
                          isHighlighted || selectedService === index
                            ? 'border-emerald-400/50 animate-pulse'
                            : 'border-emerald-400/30'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">
                          {service.title}
                        </h3>
                        <div className={`inline-flex items-center space-x-2 rounded-full px-3 py-1 border transition-all duration-300 ${
                          isHighlighted || selectedService === index
                            ? 'bg-emerald-400/30 border-emerald-400/40'
                            : 'bg-emerald-400/20 border-emerald-400/30'
                        }`}>
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-xs font-mono">{service.agentType}</span>
                        </div>
                      </div>
                    </div>
                    {/* Neural Description */}
                    <p className="text-slate-100/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    {/* Neural Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className={`backdrop-blur-sm rounded-xl p-3 border transition-all duration-300 ${
                            isHighlighted || selectedService === index
                              ? 'bg-emerald-600/15 border-emerald-600/30'
                              : 'bg-blue-600/10 border-blue-600/20'
                          }`}
                        >
                          <div className="text-emerald-400 text-sm font-mono font-semibold">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Neural Metrics */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">
                            {service.metrics.improvement}
                          </div>
                          <div className="text-slate-100/60 text-xs font-mono">
                            Enhancement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-400">
                            {service.metrics.time}
                          </div>
                          <div className="text-slate-100/60 text-xs font-mono">
                            Deployment
                          </div>
                        </div>
                      </div>
                      <button
                        className={`bg-gradient-to-r border rounded-2xl px-6 py-3 transition-all duration-300 flex items-center space-x-2 group ${
                          isHighlighted || selectedService === index
                            ? 'from-emerald-600/30 to-blue-600/30 hover:from-emerald-600/50 hover:to-blue-600/50 border-emerald-600/40'
                            : 'from-blue-600/20 to-emerald-400/20 hover:from-blue-600/40 hover:to-emerald-400/40 border-blue-600/30'
                        }`}
                        onClick={() => handleArcClick(index)}
                      >
                        <span className="text-emerald-400 font-mono text-sm">
                          {selectedService === index ? 'Collapse Neural' : 'Neural Deploy'}
                        </span>
                        <ArrowRight className={`w-4 h-4 text-emerald-400 transition-transform ${
                          selectedService === index ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


const IndustriesSection = () => {
  const industries = [
    {
      name: "Financial Intelligence",
      description: "Empowering financial institutions with predictive analytics and autonomous trading agents for unparalleled market foresight.",
      icon: DollarSign,
      color: "from-purple-600 to-indigo-600",
      features: ["Fraud Detection Agents", "Algorithmic Trading", "Risk Prediction Systems", "Personalized Finance Bots"]
    },
    {
      name: "Retail & E-commerce Evolution",
      description: "Revolutionizing retail with AI-driven customer experiences, supply chain optimization, and predictive inventory management.",
      icon: Monitor,
      color: "from-pink-600 to-rose-600",
      features: ["Hyper-Personalization AI", "Supply Chain Optimization", "Automated Customer Support", "Dynamic Pricing Agents"]
    },
    {
      name: "Healthcare Transformation",
      description: "Accelerating medical research, enhancing patient care, and optimizing operations with intelligent diagnostic and administrative agents.",
      icon: Shield,
      color: "from-green-600 to-emerald-600",
      features: ["AI-Powered Diagnostics", "Drug Discovery Acceleration", "Patient Engagement Bots", "Operational Efficiency AI"]
    },
    {
      name: "Manufacturing & Robotics",
      description: "Driving Industry 4.0 with AI-powered predictive maintenance, quality control, and autonomous robotic orchestration.",
      icon: Settings,
      color: "from-yellow-600 to-orange-600",
      features: ["Predictive Maintenance AI", "Automated Quality Control", "Robot Fleet Management", "Smart Factory Optimization"]
    },
    {
      name: "Logistics & Supply Chain",
      description: "Optimizing global supply chains with real-time tracking, demand forecasting, and autonomous logistics management agents.",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      features: ["Real-Time Logistics", "Demand Forecasting AI", "Autonomous Route Optimization", "Warehouse Automation"]
    },
    {
      name: "Smart Cities & Infrastructure",
      description: "Building the cities of tomorrow with intelligent traffic management, energy optimization, and public safety AI.",
      icon: Globe,
      color: "from-indigo-600 to-purple-600",
      features: ["Intelligent Traffic Flow", "Smart Energy Grids", "Public Safety AI", "Urban Planning Simulation"]
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-600/10 relative overflow-hidden">
      {/* Background Neural Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Crect x='10' y='10' width='30' height='30' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Ccircle cx='75' cy='75' r='10' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cpath d='M10 100 L40 100 L40 130 L10 130 Z' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='25' y1='25' x2='75' y2='75' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='75' y1='75' x2='25' y2='115' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Ignite</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Our neural agent systems are meticulously crafted to reshape the foundations of leading global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300`}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{industry.name}</h3>
                <p className="text-slate-100/70 mb-5 text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-slate-100/80 text-sm">
                      <ArrowRight className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span className="font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 flex items-center text-emerald-400 font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  Explore Neural Impact
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Clients Section ---
const ClientsSection = () => {
  const clients = [
    { name: "Global Innovations Inc.", logo: "/logos/client-logo-1.png", testimonial: "Dharvix transformed our data infrastructure, boosting efficiency by 300%!" },
    { name: "FutureForge Solutions", logo: "/logos/client-logo-2.png", testimonial: "Their AI agents are a game-changer. We've seen incredible gains in automation." },
    { name: "Nexus Dynamics", logo: "/logos/client-logo-3.png", testimonial: "The predictive insights from Dharvix's neural networks are unparalleled." },
    { name: "Veridian Tech", logo: "/logos/client-logo-4.png", testimonial: "Seamless integration and exceptional support. Highly recommended for AI solutions." },
    { name: "Quantum Leap Corp", logo: "/logos/client-logo-5.png", testimonial: "Dharvix's digital transcendence strategy truly put us ahead of the curve." },
    { name: "Stellar Systems", logo: "/logos/client-logo-6.png", testimonial: "Their team's expertise in AI is evident in the remarkable results we achieved." },
  ];

  return (
    <section id="clients" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background patterns and glows */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Our Valued <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            We partner with leading organizations to drive their AI transformation journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative group p-6 bg-blue-600/10 backdrop-blur-xl rounded-2xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative flex flex-col items-center text-center">
                {/* Placeholder for client logos, replace with actual image components */}
                <div className="w-24 h-24 bg-slate-700 rounded-full mb-4 flex items-center justify-center overflow-hidden border border-slate-600">
                  {client.logo ? (
                    <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain p-2" />
                  ) : (
                    <Users className="w-12 h-12 text-slate-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{client.name}</h3>
                <p className="text-slate-300 text-sm font-light italic">"{client.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Us Section ---
const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background patterns and glows */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Cpath d='M0 0h10v10H0V0zm20 20h10v10H20V20zm20 20h10v10H40V40zm20 20h10v10H60V60zm20 20h10v10H80V80z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Dharvix</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Pioneering the future of intelligent business through AI-driven innovation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative group p-8 bg-blue-600/10 backdrop-blur-xl rounded-3xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-slate-100 mb-6 flex items-center">
                  <Lightbulb className="mr-3 h-8 w-8 text-emerald-400" />
                  Our Vision
                </h3>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  At Dharvix, we envision a future where businesses operate as intelligent, self-evolving entities. We are building the foundational operating system for this new era, enabling enterprises to achieve unprecedented levels of efficiency, insight, and growth through the power of artificial consciousness and hyper-automation.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Revolutionize business operations
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Foster self-evolving organizations
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Unlock limitless growth potential
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Drive ethical AI innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative group p-8 bg-blue-600/10 backdrop-blur-xl rounded-3xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative">
                <h3 className="text-3xl font-bold text-slate-100 mb-6 flex items-center">
                  <Rocket className="mr-3 h-8 w-8 text-emerald-400" />
                  Our Mission
                </h3>
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  Our mission is to empower businesses with the most advanced AI solutions, seamlessly integrating intelligent agents and neural networks into their core operations. We aim to transcend conventional technological limits, creating a seamless, intuitive, and highly responsive digital ecosystem that learns, adapts, and innovates autonomously.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Integrate advanced AI
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Create adaptive ecosystems
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Automate complex processes
                  </li>
                  <li className="flex items-start text-emerald-400 font-semibold">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    Ensure robust security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Assuming 'Check' icon exists or importing it if not
const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const WhyUsSection = () => {
  const reasons = [
    {
      title: "Pioneering Neural AI",
      description: "We are at the forefront of neural network development, constantly pushing the boundaries of AI capabilities.",
      icon: Cpu,
    },
    {
      title: "Tailored Agent Solutions",
      description: "Our AI agents are custom-built to precisely fit your unique business challenges and opportunities.",
      icon: Code,
    },
    {
      title: "Exponential ROI",
      description: "We focus on solutions that deliver measurable and significant returns on your investment.",
      icon: TrendingUp,
    },
    {
      title: "Seamless Integration",
      description: "Our systems are designed for effortless integration into your existing infrastructure, ensuring minimal disruption.",
      icon: Layers,
    },
    {
      title: "Dedicated Neural Support",
      description: "Benefit from 24/7 expert support to ensure your AI ecosystem always operates at peak performance.",
      icon: MessageSquare,
    },
    {
      title: "Security & Compliance",
      description: "Your data and operations are safeguarded by advanced security protocols and industry compliance standards.",
      icon: Shield,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden">
      {/* Background Neural Swirl */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-spin-slow reverse" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' stroke='%23F1F3F5' stroke-width='0.3' fill='none'/%3E%3Cpath d='M25 25 L75 25 L75 75 L25 75 Z' stroke='%23F1F3F5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Why <span className="bg-gradient-to-r from-emerald-400 via-blue-600 to-emerald-400 bg-clip-text text-transparent">Dharvix?</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            The confluence of cutting-edge neural intelligence and a commitment to your unprecedented success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <reason.icon className="h-10 w-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{reason.title}</h3>
                <p className="text-slate-100/70 text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Anya Sharma",
      position: "Chief AI Visionary",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual images
      bio: "A pioneer in advanced neural architectures and AI consciousness, leading our strategic innovation.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
    {
      name: "Arjun Singh",
      position: "Lead Neural Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Master of quantum computing and agent-based systems, ensuring robust and scalable solutions.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
    {
      name: "Dr. Lena Petrova",
      position: "Head of Data Transcendence",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      bio: "Specializes in transforming raw data into actionable, omniscient intelligence for enterprise scale.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
    {
      name: "Omar Hassan",
      position: "AI Ethics & Governance Lead",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      bio: "Ensuring our AI development adheres to the highest ethical standards and responsible deployment.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
    {
      name: "Sophia Chen",
      position: "Client Neural Strategist",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      bio: "Bridging complex AI solutions with client needs, ensuring seamless adoption and maximized impact.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
    {
      name: "Alex 'Byte' Ramirez",
      position: "Autonomous Agent Architect",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
      bio: "Designs and builds the self-governing AI agents that power our hyper-automation solutions.",
      social: {
        linkedin: "#", twitter: "#", github: "#"
      }
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-600/10 relative overflow-hidden">
      {/* Background Micro-chips Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Crect x='10' y='10' width='20' height='20' rx='1'/%3E%3Crect x='40' y='40' width='25' height='25' rx='1.5'/%3E%3Crect x='70' y='70' width='30' height='30' rx='2'/%3E%3Cpath d='M20 10 L10 20 L20 30 L30 20 Z' fill='%23F1F3F5' fill-opacity='0.05'/%3E%3Cpath d='M52.5 40 L40 52.5 L52.5 65 L65 52.5 Z' fill='%23F1F3F5' fill-opacity='0.05'/%3E%3Cpath d='M85 70 L70 85 L85 100 L100 85 Z' fill='%23F1F3F5' fill-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-10 right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Neural Team</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            The extraordinary minds powering Dharvix's ascent in intelligent business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-emerald-400/50 group-hover:border-blue-600/50 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-emerald-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Handshake className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2">{member.name}</h3>
              <p className="text-emerald-400 mb-3 text-lg font-mono">{member.position}</p>
              <p className="text-slate-100/70 text-sm mb-6">{member.bio}</p>
              <div className="flex space-x-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-gray-400 transition-colors duration-300">
                    <Code className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      quote: "Dharvix didn't just deploy AI agents — they engineered a digital consciousness. Our neural networks now predict market shifts 4X faster than human analysts.",
      author: "Dr. Rajesh Kumar",
      position: "Chief Neural Officer",
      company: "Quantum BFSI Institution",
      industry: "Banking Intelligence",
      metrics: "4X prediction speed, 99.9% neural uptime",
      rating: 5,
      voiceNote: "Incredible transformation of our entire banking ecosystem",
      agentType: "Financial Intelligence Agent"
    },
    {
      quote: "Their AI constellation revolutionized our retail universe by 350% while achieving operational zen. The ROI materialized within our first quantum cycle.",
      author: "Priya Sharma",
      position: "Director of Digital Evolution",
      company: "Galactic Retail Mesh",
      industry: "Retail Intelligence",
      metrics: "350% universe expansion, 60% cost transcendence",
      rating: 5,
      voiceNote: "Mind-blowing AI integration across all touchpoints",
      agentType: "Commerce Intelligence Agent"
    },
    {
      quote: "The neural mesh implementation for our smart metropolis revolutionized reality itself. We now command urban operations like digital gods through AI agents.",
      author: "Dr. Amit Patel",
      position: "Chief Systems Architect",
      company: "Future City Neural Grid",
      industry: "Smart Infrastructure",
      metrics: "600% reality enhancement, infinite resource optimization",
      rating: 5,
      voiceNote: "Revolutionary approach to smart city management",
      agentType: "Urban Intelligence Agent"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleVoiceNote = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden">
      {/* Neural Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Quote Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Quote className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-8">
            AI-Generated Voice
            <span className="block bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Testimonial Clouds
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Click-through success story capsules from enterprises that transcended ordinary business
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="mx-4 relative">
                    {/* Neural Connection Web */}
                    <div className="absolute -inset-8 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 800 600">
                        <defs>
                          <radialGradient id={`testimonialGrad-${index}`} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#1C7ED6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#38D9A9" stopOpacity="0.1" />
                          </radialGradient>
                        </defs>
                        <circle cx="400" cy="300" r="200" fill={`url(#testimonialGrad-${index})`} className="animate-pulse" />
                        <path d="M200,300 Q400,100 600,300 Q400,500 200,300" fill="none" stroke="#1C7ED6" strokeWidth="1" className="animate-pulse" />
                      </svg>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-2xl"></div>
                    <div className="relative bg-blue-600/10 backdrop-blur-2xl border-0 shadow-3xl rounded-3xl border border-blue-600/30 p-16">

                      {/* AI Agent Quote Icon */}
                      <div className="flex items-center justify-center mb-12">
                        <div className="bg-gradient-to-br from-blue-600 to-emerald-400 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl relative">
                          <Quote className="h-10 w-10 text-white" />
                          {/* Neural Activity Ring */}
                          <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-ping"></div>
                        </div>
                      </div>

                      {/* 3D Quote Cloud */}
                      <blockquote className="text-3xl md:text-4xl font-medium text-slate-100 text-center mb-12 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Voice Note Player */}
                      <div className="flex justify-center items-center space-x-4 mb-8">
                        <button
                          onClick={toggleVoiceNote}
                          className="bg-gradient-to-r from-blue-600/20 to-emerald-400/20 hover:from-blue-600/40 hover:to-emerald-400/40 border border-blue-600/30 rounded-full p-4 transition-all duration-300"
                        >
                          {isPlaying ? <Volume2 className="w-6 h-6 text-emerald-400" /> : <Play className="w-6 h-6 text-emerald-400" />}
                        </button>
                        <div className="text-slate-100/60 font-mono text-sm">
                          {testimonial.voiceNote}
                        </div>

                        {/* Audio Visualizer */}
                        {isPlaying && (
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-blue-600 to-emerald-400 rounded-full animate-pulse"
                                style={{
                                  height: `${12 + Math.random() * 12}px`,
                                  animationDelay: `${i * 0.1}s`
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Neural Rating */}
                      <div className="flex justify-center mb-8">
                        <div className="flex space-x-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 fill-emerald-400 text-emerald-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                          ))}
                        </div>
                      </div>

                      {/* Author Neural Profile */}
                      <div className="text-center mb-8">
                        <div className="text-2xl font-bold text-slate-100 mb-2">
                          {testimonial.author}
                        </div>
                        <div className="text-emerald-400 mb-2 text-lg font-mono">
                          {testimonial.position}
                        </div>
                        <div className="text-slate-100/60 mb-4">
                          {testimonial.company} • {testimonial.industry}
                        </div>

                        {/* AI Agent Badge */}
                        <div className="inline-flex items-center space-x-2 bg-emerald-400/20 rounded-full px-4 py-2 border border-emerald-400/30">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-sm font-mono">{testimonial.agentType}</span>
                        </div>
                      </div>

                      {/* Quantum Results Display */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-400/10 rounded-2xl blur-lg"></div>
                        <div className="relative bg-blue-600/10 backdrop-blur-xl rounded-2xl p-6 text-center border border-blue-600/20">
                          <div className="text-emerald-400 font-bold text-lg">
                            Quantum Results: {testimonial.metrics}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 hover:bg-blue-600/20 shadow-2xl w-12 h-12 rounded-2xl transition-all duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 text-emerald-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 hover:bg-blue-600/20 shadow-2xl w-12 h-12 rounded-2xl transition-all duration-300 flex items-center justify-center"
          >
            <ArrowRight className="h-5 w-5 text-emerald-400" />
          </button>

          {/* Neural Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-400 w-12 shadow-lg'
                    : 'bg-slate-100/30 hover:bg-slate-100/50 w-4'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Cline x1='0' y1='0' x2='100' y2='100' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='100' y1='0' x2='0' y2='100' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%23F1F3F5' fill-opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Get in <span className="bg-gradient-to-r from-emerald-400 via-blue-600 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Ready to empower your business with advanced AI? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">Send us a Neural Signal</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-200 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-blue-600/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-200 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-blue-600/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-200 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-blue-600/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-200 text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-xl bg-slate-800/50 border border-blue-600/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                  placeholder="Tell us about your neural transformation goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Rocket className="w-5 h-5" />
                <span>Launch Neural Inquiry</span>
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-10">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-6 shadow-lg text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-2">Our Neural Hub</h4>
                <p className="text-slate-100/70 text-sm">
                  123 AI Boulevard, Future City, <br />
                  Visakhapatnam, Andhra Pradesh, India.
                </p>
              </div>
              <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-6 shadow-lg text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-2">Neural Line</h4>
                <p className="text-slate-100/70 text-sm">+91 98765 43210</p>
                <p className="text-slate-100/70 text-sm">Mon - Fri, 9 AM - 6 PM IST</p>
              </div>
              <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-6 shadow-lg text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-2">Direct AI Comms</h4>
                <p className="text-slate-100/70 text-sm">info@dharvix.com</p>
                <p className="text-slate-100/70 text-sm">support@dharvix.com</p>
              </div>
              <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-6 shadow-lg text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-2">Schedule a Neural Call</h4>
                <button className="text-emerald-400 text-sm font-semibold hover:text-blue-400 transition-colors duration-300">
                  Book Now <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-4 shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.186008544257!2d83.30806495!3d17.738600999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0c9523c103%3A0x7d6a782b5f39e3b6!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1719407338573!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1.5rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Call To Action (CTA) Section ---
const CallToActionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600/10 via-slate-900 to-emerald-600/10 relative overflow-hidden">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-emerald-400/20 rounded-full blur-xl animate-float-glow"
            style={{
              width: `${20 + Math.random() * 80}px`,
              height: `${20 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          ></div>
        ))}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-8 leading-tight">
          Don't Just Compete, <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Transcend!</span>
        </h2>
        <p className="text-xl text-slate-100/70 mb-12 max-w-3xl mx-auto">
          Ready to unlock the full potential of your enterprise with our cutting-edge AI Agent Systems?
          Let's build a future where your business operates at unparalleled levels of intelligence and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-12 py-4 text-xl rounded-2xl shadow-2xl shadow-blue-600/30 hover:shadow-3xl hover:shadow-emerald-400/30 transition-all duration-500 hover:scale-110 border border-blue-600/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="relative flex items-center">
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Neural Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </div>
          </button>
          <button className="border-2 border-blue-600 text-slate-100 hover:bg-blue-600/20 hover:text-emerald-400 px-12 py-4 text-xl rounded-2xl transition-all duration-500 hover:scale-110 bg-blue-600/10 backdrop-blur-sm shadow-lg shadow-blue-600/20 flex items-center">
            <HelpCircle className="mr-3 h-6 w-6" />
            Have Questions?
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-md py-12 border-t border-blue-600/20 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='90' cy='10' r='1'/%3E%3Ccircle cx='10' cy='90' r='1'/%3E%3Ccircle cx='90' cy='90' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <a href="#hero" className="text-white text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent block mb-4">
              Dharvix
            </a>
            <p className="text-slate-100/70 leading-relaxed">
              Pioneering the future of intelligent business through advanced AI Agent Systems and Neural Transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-emerald-400 transition-colors duration-300">Our Services</a></li>
              <li><a href="#industries" onClick={(e) => { e.preventDefault(); scrollToSection('industries'); }} className="hover:text-emerald-400 transition-colors duration-300">Industries</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }} className="hover:text-emerald-400 transition-colors duration-300">Why Dharvix</a></li>
              <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }} className="hover:text-emerald-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="hover:text-emerald-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-emerald-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Enterprise AI Orchestration</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Automated Decision Systems</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Predictive Intelligence</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Digital Twin Simulations</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors duration-300">Agent-Based Automation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span>123 AI Blvd, Future City, Visakhapatnam, AP, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span>info@dharvix.com</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                <span>Schedule a Demo</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600/30 pt-8 text-center text-slate-100/60">
          © {new Date().getFullYear()} Dharvix. All rights reserved. Pioneering Intelligence, Forging Futures.
        </div>
      </div>
    </footer>
  );
};


const NeuralLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <NeuralServicesSection />
      <AboutUsSection/>
      <IndustriesSection /> {/* New Section */}
      <ClientsSection />
      <WhyUsSection />      {/* New Section */}
      <TeamSection />       {/* New Section */}
      <TestimonialsSection />
      <CallToActionSection /> {/* New Section */}
      <ContactSection />    {/* New Section */}
    </div>
  );
};

export default NeuralLandingPage;