"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ArrowRight, Play, Zap, Brain, Network, Quote, Star, ArrowLeft, Volume2, Globe, Bot, Database,
  Cpu, Rocket, Lightbulb, TrendingUp, DollarSign, Users, Shield, Award, Calendar, BarChart2,
  ChevronDown, MessageSquare, Code, Settings, PieChart, Layers, HelpCircle, FileText, Search,
  MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Monitor, Briefcase, Handshake
} from 'lucide-react';

// Utility function for smooth scrolling
const scrollToSection = (id: string) => {
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
    { name: "About Us", id: "about-us" }, // New
    { name: "Services", id: "services" },
    { name: "Clients", id: "clients" }, // New
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
                {/* Central Neural Network Canvas */}
                <foreignObject x="0" y="0" width={size} height={size}>
                  <canvas
                    ref={canvasRef}
                    width={size}
                    height={size}
                    className="rounded-full opacity-60"
                    style={{ position: 'relative', top: 0, left: 0 }}
                  />
                </foreignObject>
              </svg>
            </div>
          </div>

          {/* Service Descriptions */}
          <div className="lg:pl-8">
            <h3 className="text-4xl font-bold text-slate-100 mb-8">
              {selectedService !== null ? neuralServices[selectedService].title : "Select a Neural Service"}
            </h3>
            {selectedService !== null ? (
              <div className="bg-blue-600/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-600/30 shadow-xl">
                <p className="text-lg text-slate-200 mb-6 leading-relaxed">
                  {neuralServices[selectedService].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {neuralServices[selectedService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-200">
                      <Check className="w-5 h-5 mr-2 text-emerald-400 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-blue-600/40 pt-6">
                  <div>
                    <p className="text-emerald-400 text-sm font-semibold uppercase">Performance Metric</p>
                    <p className="text-2xl font-bold text-slate-100">{neuralServices[selectedService].metrics.improvement}</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 text-sm font-semibold uppercase">Agent Type</p>
                    <p className="text-2xl font-bold text-slate-100">{neuralServices[selectedService].agentType}</p>
                  </div>
                  <button className={`bg-gradient-to-r ${neuralServices[selectedService].color} hover:from-emerald-400 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-600/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-600/30 shadow-xl text-slate-200/80 text-center py-16">
                <p className="text-xl">
                  Click on any arc in the neural visualization to explore our specialized AI services.
                </p>
                <ChevronDown className="w-10 h-10 mx-auto mt-8 animate-bounce text-emerald-400" />
              </div>
            )}
          </div>
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


// --- Industries Section (Existing code, included for completeness) ---
const IndustriesSection = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: Shield,
      description: "Transforming patient care with predictive diagnostics and automated treatment plans.",
      solutions: ["AI-driven diagnostics", "Personalized medicine", "Automated patient management"],
    },
    {
      name: "Finance",
      icon: DollarSign,
      description: "Revolutionizing financial operations with intelligent fraud detection and algorithmic trading.",
      solutions: ["Algorithmic trading", "Fraud detection", "Risk assessment & management"],
    },
    {
      name: "Manufacturing",
      icon: Settings,
      description: "Optimizing production lines and supply chains with autonomous robotics and predictive maintenance.",
      solutions: ["Predictive maintenance", "Automated quality control", "Supply chain optimization"],
    },
    {
      name: "Retail",
      icon: ShoppingCart, // Assuming ShoppingCart exists or needs import
      description: "Enhancing customer experience and sales with personalized recommendations and inventory optimization.",
      solutions: ["Personalized recommendations", "Inventory management", "Customer behavior analysis"],
    },
    {
      name: "Logistics",
      icon: Truck, // Assuming Truck exists or needs import
      description: "Streamlining global supply chains with real-time tracking and intelligent route optimization.",
      solutions: ["Route optimization", "Fleet management", "Demand forecasting"],
    },
    {
      name: "Education",
      icon: BookOpen, // Assuming BookOpen exists or needs import
      description: "Revolutionizing learning with adaptive AI tutors and personalized educational pathways.",
      solutions: ["Adaptive learning platforms", "Automated grading", "Content personalization"],
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Crect x='0' y='0' width='10' height='10'/%3E%3Crect x='20' y='20' width='10' height='10'/%3E%3Crect x='40' y='40' width='10' height='10'/%3E%3Crect x='60' y='60' width='10' height='10'/%3E%3Crect x='80' y='80' width='10' height='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-blob animation-delay-1500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">Empower</span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Our AI solutions are designed to bring neural intelligence and automation to a diverse range of sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group p-8 bg-blue-600/10 backdrop-blur-xl rounded-3xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative flex flex-col items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{industry.name}</h3>
                <p className="text-slate-200 text-base leading-relaxed mb-4">
                  {industry.description}
                </p>
                <ul className="text-slate-300 space-y-2 text-sm">
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-6 py-2 rounded-full text-sm shadow-lg transition-all duration-300 hover:scale-105 flex items-center">
                  Explore More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Placeholder icons if they don't exist in lucide-react
const ShoppingCart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
const Truck = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="15" rx="2" ry="2"/><path d="M16 11H22l-1.5 6.5A1.5 1.5 0 0 1 19 19H9.5a1.5 1.5 0 0 1-1.5-1.5V16h-2V11z"/><path d="M2 18h6"/><path d="M6 18V13"/></svg>;
const BookOpen = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;


// --- Main App Component ---
const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutUsSection /> {/* New Section */}
      <NeuralServicesSection />
      <ClientsSection /> {/* New Section */}
      <IndustriesSection /> {/* Existing Section */}
      {/* Other sections will go here */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Dharvix. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-300"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;