"use client";
import React, { useEffect, useRef, useState, useCallback, MouseEvent, ChangeEvent, FormEvent } from "react";
import {
  ArrowRight,
  Play,
  Zap,
  Brain,
  Network,
  Quote,
  Star,
  ArrowLeft,
  Volume2,
  Globe,
  Bot,
  Database,
  Cpu,
  Rocket,
  Lightbulb,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  Award,
  Calendar,
  BarChart2,
  ChevronDown,
  MessageSquare,
  Code,
  Settings,
  PieChart,
  Layers,
  HelpCircle,
  FileText,
  Search,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Monitor,
  Briefcase,
  Handshake,} from "lucide-react";

// Interfaces for TypeScript
interface NavItem {
  name: string;
  id: string;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  glow: string;
}

interface Arc {
  startAngle: number;
  endAngle: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconX: number;
  iconY: number;
  textX: number;
  textY: number;
  color: string;
  shadowColor: string;
}

interface Service {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  color: string;
  metrics: { improvement: string; time: string };
  agentType: string;
}

interface Industry {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  features: string[];
}

interface Client {
  name: string;
  logo: string;
  testimonial: string;
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    github?: string;
  };
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  industry: string;
  metrics: string;
  rating: number;
  voiceNote: string;
  agentType: string;
}

// Utility function for smooth scrolling
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Industries", id: "industries" },
    { name: "Clients", id: "clients" },
    { name: "About Us", id: "about-us" },
    { name: "Why Us", id: "why-us" },
    { name: "Team", id: "team" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-white text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Dharvix
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-200 hover:text-emerald-400 font-medium transition duration-300 relative group"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-emerald-400 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
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
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
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
const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: Node[] = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }

    nodes.forEach((node, i) => {
      const nearbyNodes = nodes.filter((other, j) => {
        if (i === j) return false;
        const dist = Math.sqrt(
          (node.x - other.x) ** 2 + (node.y - other.y) ** 2,
        );
        return dist < 150;
      });
      node.connections = nearbyNodes.map((n) => nodes.indexOf(n));
    });

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#1C7ED6";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const target = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
      });

      ctx.globalAlpha = 0.8;
      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          8,
        );
        gradient.addColorStop(0, "#38D9A9");
        gradient.addColorStop(1, "#1C7ED6");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = "#38D9A9";
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
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const stats: Stat[] = [
    {
      icon: Brain,
      title: "4X",
      subtitle: "Decision Speed",
      glow: "#1C7ED6",
    },
    {
      icon: Network,
      title: "92%",
      subtitle: "Agent Retention",
      glow: "#38D9A9",
    },
    {
      icon: Zap,
      title: "₹1-4Cr",
      subtitle: "Revenue Enabled",
      glow: "#1C7ED6",
    },
    {
      icon: Zap,
      title: "99.9%",
      subtitle: "Revenue Uptime",
      glow: "#38D9A9",
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-20 pb-16 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.4'%3E%3Crect x='30' y='50' width='50' height='35' rx='3' fill='none' stroke='%23F1F3F5' stroke-width='0.8'/%3E%3Crect x='32' y='52' width='46' height='28' fill='%23F1F3F5' fill-opacity='0.1'/%3E%3Crect x='48' y='85' width='14' height='8' rx='1'/%3E%3Cpath d='M40 93h30l-5 5h-20z' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Crect x='120' y='70' width='40' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.3'/%3E%3Crect x='118' y='76' width='42' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.25'/%3E%3Crect x='116' y='82' width='44' height='6' rx='1' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Crect x='150' y='30' width='25' height='35' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Crect x='152' y='32' width='21' height='8' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3Cg fill='%23F1F3F5' fill-opacity='0.3'%3E%3Ccircle cx='156' cy='46' r='1.5'/%3E%3Ccircle cx='162' cy='46' r='1.5'/%3E%3Ccircle cx='168' cy='46' r='1.5'/%3E%3Ccircle cx='156' cy='52' r='1.5'/%3E%3Ccircle cx='162' cy='52' r='1.5'/%3E%3Ccircle cx='168' cy='52' r='1.5'/%3E%3C/g%3E%3Crect x='20' y='120' width='30' height='18' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='22' y1='125' x2='40' y2='125' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cline x1='22' y1='128' x2='35' y2='128' stroke='%23F1F3F5' stroke-width='0.3'/%3E%3Cline x1='22' y1='131' x2='30' y2='131' stroke='%23F1F3F5' stroke-width='0.3'/%3E%3Cpath d='M80 110h40v25h-40z' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Cpath d='M90 110v-5c0-2 2-4 4-4h12c2 0 4 2 4 4v5' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='80' y1='120' x2='120' y2='120' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Ccircle cx='170' cy='130' r='15' fill='none' stroke='%23F1F3F5' stroke-width='0.6'/%3E%3Cpath d='M155 130c0-8 7-15 15-15s15 7 15 15' fill='none' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cpath d='M155 130c0 8 7 15 15 15s15-7 15-15' fill='none' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3Cline x1='170' y1='115' x2='170' y2='145' stroke='%23F1F3F5' stroke-width='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-600/10" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-emerald-400/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "60s" }}
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
              Intelligent Core
            </span>
            <span className="block text-5xl md:text-6xl mt-4">
              of Modern Business Transformation
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-100/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Step into a connected ecosystem where
            <span className="block mt-4 font-semibold text-emerald-400 font-mono">
              Data & Intelligence orchestrate your digital transformation.
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-blue-600/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-600/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-emerald-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="text-4xl font-bold text-slate-100 mb-2">
                    {item.title}
                  </div>
                  <div className="text-slate-100/60 text-sm font-medium font-mono">
                    {item.subtitle}
                  </div>
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
const NeuralServicesSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = 600;
      canvas.height = 600;
    };
    resizeCanvas();

    const nodes: Node[] = [];
    const nodeCount = 20;
    const centerX = 300;
    const centerY = 300;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 80 + Math.random() * 60;
      nodes.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
      });
    }

    nodes.forEach((node, i) => {
      const nearbyNodes = nodes.filter((other, j) => {
        if (i === j) return false;
        const dist = Math.sqrt(
          (node.x - other.x) ** 2 + (node.y - other.y) ** 2,
        );
        return dist < 120;
      });
      node.connections = nearbyNodes.map((n) => nodes.indexOf(n));
    });

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#1C7ED6";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const target = nodes[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        const distFromCenter = Math.sqrt(
          (node.x - centerX) ** 2 + (node.y - centerY) ** 2,
        );
        if (distFromCenter > 150) {
          const angle = Math.atan2(node.y - centerY, node.x - centerX);
          node.x = centerX + Math.cos(angle) * 150;
          node.y = centerY + Math.sin(angle) * 150;
          node.vx *= -0.5;
          node.vy *= -0.5;
        }
      });

      ctx.globalAlpha = 0.8;
      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          6,
        );
        gradient.addColorStop(0, "#38D9A9");
        gradient.addColorStop(1, "#1C7ED6");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = "#38D9A9";
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

  const arcPath = (
    startAngle: number,
    endAngle: number,
    outerR: number,
    innerR: number,
    centerPoint: number
  ): string => {
    const rad = (angle: number) => (angle * Math.PI) / 180;
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

  const handleArcClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const handleArcHover = (index: number) => {
    setHoveredService(index);
  };

  const handleArcLeave = () => {
    setHoveredService(null);
  };

  const getArcOpacity = (index: number): number => {
    if (selectedService !== null) {
      return selectedService === index ? 1 : 0.2;
    }
    if (hoveredService !== null) {
      return hoveredService === index ? 1 : 0.4;
    }
    return 0.8;
  };

  const neuralArcs: Arc[] = [
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

  const neuralServices: Service[] = [
    {
      title: "AI & Intelligent Systems Services",
      icon: Brain,
      description:
        "Advanced AI frameworks that think, learn, adapt, and evolve—turning enterprise data into autonomous intelligence driving exponential growth.",
      features: [
        "Deep Learning Engines",
        "Neural Vision Systems",
        "Adaptive Cognitive Processing",
        "Predictive Intelligence",
      ],
      color: "from-blue-600 to-indigo-600",
      metrics: { improvement: "400%", time: "Neural Speed" },
      agentType: "Intelligence Agent",
    },
    {
      title: "Enterprise Digital Solutions & Integration Services",
      icon: Globe,
      description:
        "Complete reality transformation strategies that elevate businesses beyond traditional boundaries into infinite digital dimensions.",
      features: [
        "Cloud Consciousness",
        "Reality Modernization",
        "Transcendence Strategy",
        "Quantum Consulting",
      ],
      color: "from-teal-600 to-cyan-600",
      metrics: { improvement: "350%", time: "Instant Evolution" },
      agentType: "Evolution Agent",
    },
    {
      title: "Autonomous Agent Networks",
      icon: Bot,
      description:
        "Self-governing automation networks that eliminate human limitations, operating with divine efficiency across all business dimensions.",
      features: [
        "Agent Swarm Intelligence",
        "Reality Optimization",
        "Autonomous Business Processes",
        "Neural Integration",
      ],
      color: "from-emerald-600 to-green-600",
      metrics: { improvement: "∞%", time: "Quantum Time" },
      agentType: "Automation Agent",
    },
    {
      title: "Omniscient Data Networks",
      icon: Database,
      description:
        "Transform information into omniscient intelligence with neural analytics platforms that see all, know all, and predict everything.",
      features: [
        "Cosmic Intelligence",
        "Reality-Time Analytics",
        "Neural IoT Consciousness",
        "Dimensional Visualization",
      ],
      color: "from-purple-600 to-violet-600",
      metrics: { improvement: "∞%", time: "Transcendent" },
      agentType: "Intelligence Agent",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='neural' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23F1F3F5' fill-opacity='0.3'/%3E%3Cline x1='5' y1='10' x2='15' y2='10' stroke='%23F1F3F5' stroke-width='0.5' stroke-opacity='0.2'/%3E%3Cline x1='10' y1='5' x2='10' y2='15' stroke='%23F1F3F5' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23neural)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Solutions & Services
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Experience our core offerings, built on the principles of artificial
            consciousness and hyper-automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="relative bg-blue-600/5 backdrop-blur-xl rounded-full p-8 border border-blue-600/20">
              <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                <defs>
                  {neuralArcs.map((arc, index) => (
                    <React.Fragment key={index}>
                      <linearGradient
                        id={`neural-gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1C7ED6"
                          stopOpacity="0.8"
                        />
                        <stop
                          offset="100%"
                          stopColor="#38D9A9"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                      <linearGradient
                        id={`neural-gradient-hover-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#38D9A9" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="#1C7ED6"
                          stopOpacity="0.9"
                        />
                      </linearGradient>
                      <linearGradient
                        id={`neural-gradient-selected-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="#34D399"
                          stopOpacity="1"
                        />
                      </linearGradient>
                    </React.Fragment>
                  ))}
                  <filter id="neural-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="neural-glow-intense">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
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
                        d={arcPath(
                          arc.startAngle,
                          arc.endAngle,
                          radius - 50,
                          innerRadius,
                          center,
                        )}
                        fill={fillGradient}
                        filter={filter}
                        opacity={opacity}
                        className="transition-all duration-500 cursor-pointer transform-origin-center"
                        style={{
                          transformOrigin: `${center}px ${center}px`,
                          transform:
                            isSelected || isHovered
                              ? "scale(1.02)"
                              : "scale(1)",
                        }}
                        onMouseEnter={() => handleArcHover(index)}
                        onMouseLeave={handleArcLeave}
                        onClick={() => handleArcClick(index)}
                      />
                      <line
                        x1={center}
                        y1={center}
                        x2={arc.iconX}
                        y2={arc.iconY}
                        stroke={
                          isSelected
                            ? "#34D399"
                            : isHovered
                              ? "#60A5FA"
                              : "#38D9A9"
                        }
                        strokeWidth={isSelected ? "2" : isHovered ? "1.5" : "1"}
                        strokeOpacity={opacity * 0.8}
                        strokeDasharray="5,5"
                        className={
                          isSelected || isHovered ? "animate-pulse" : ""
                        }
                      />
                      <foreignObject
                        x={arc.iconX - 20}
                        y={arc.iconY - 20}
                        width="40"
                        height="40"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center backdrop-blur-xl border shadow-xl cursor-pointer transition-all duration-500 ${
                            isSelected
                              ? "from-emerald-400/50 to-blue-600/50 border-emerald-400/50 scale-110 shadow-emerald-400/50"
                              : isHovered
                                ? "from-blue-600/40 to-emerald-400/40 border-blue-600/40 scale-105 shadow-blue-400/50"
                                : "from-blue-600/30 to-emerald-400/30 border-blue-600/30"
                          }`}
                          style={{ opacity }}
                          onMouseEnter={() => handleArcHover(index)}
                          onMouseLeave={handleArcLeave}
                          onClick={() => handleArcClick(index)}
                        >
                          <arc.icon
                            className={`h-5 w-5 transition-colors duration-300 ${
                              isSelected
                                ? "text-emerald-300"
                                : isHovered
                                  ? "text-blue-300"
                                  : "text-emerald-400"
                            }`}
                          />
                        </div>
                      </foreignObject>
                      <text
                        x={arc.textX}
                        y={arc.textY}
                        textAnchor="middle"
                        className={`fill-slate-100 text-sm font-mono font-semibold cursor-pointer transition-all duration-500 ${
                          isSelected
                            ? "text-lg"
                            : isHovered
                              ? "text-base"
                              : "text-sm"
                        }`}
                        style={{
                          opacity,
                          filter: isSelected
                            ? "drop-shadow(0 0 8px rgba(52, 211, 153, 0.8))"
                            : isHovered
                              ? "drop-shadow(0 0 6px rgba(96, 165, 250, 0.6))"
                              : "drop-shadow(0 0 4px rgba(56, 217, 169, 0.5))",
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

              <div className="absolute inset-0 flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full rounded-full"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`bg-gradient-to-br from-blue-600 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative transition-all duration-500 ${
                      selectedService !== null
                        ? "scale-110"
                        : hoveredService !== null
                          ? "scale-105"
                          : "scale-100"
                    }`}
                  >
                    <Zap className="h-8 w-8 text-white" />
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-emerald-400/50 ${
                        selectedService !== null || hoveredService !== null
                          ? "animate-ping"
                          : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {selectedService !== null && (
              <div className="text-center mb-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 hover:from-emerald-600/40 hover:to-blue-600/40 border border-emerald-600/30 rounded-2xl px-6 py-3 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <Network className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-sm">
                    Show All Neural Services
                  </span>
                </button>
              </div>
            )}
            {neuralServices.map((service, index) => {
              const isVisible =
                selectedService === null || selectedService === index;
              const isHighlighted =
                hoveredService === index && selectedService === null;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    selectedService === null
                      ? isHighlighted
                        ? "scale-105 z-10"
                        : ""
                      : selectedService === index
                        ? "scale-105 z-10 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none h-0 overflow-hidden"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r rounded-3xl blur-lg transition-all duration-300 ${
                      isHighlighted || selectedService === index
                        ? "from-emerald-400/30 to-blue-600/30 blur-xl"
                        : "from-blue-600/20 to-emerald-400/20"
                    }`}
                  ></div>
                  <div
                    className={`relative bg-blue-600/10 backdrop-blur-xl border rounded-3xl p-8 shadow-xl transition-all duration-300 ${
                      isHighlighted || selectedService === index
                        ? "border-emerald-400/40 shadow-2xl shadow-emerald-400/20"
                        : "border-blue-600/30 hover:shadow-2xl"
                    }`}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center relative transition-all duration-300 ${
                          isHighlighted || selectedService === index
                            ? "from-emerald-400/40 to-blue-600/40"
                            : "from-blue-600/30 to-emerald-400/30"
                        }`}
                      >
                        <service.icon
                          className={`h-8 w-8 transition-colors duration-300 ${
                            isHighlighted || selectedService === index
                              ? "text-emerald-300"
                              : "text-emerald-400"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
                            isHighlighted || selectedService === index
                              ? "border-emerald-400/50 animate-pulse"
                              : "border-emerald-400/30"
                          }`}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-100 mb-2">
                          {service.title}
                        </h3>
                        <div
                          className={`inline-flex items-center space-x-2 rounded-full px-3 py-1 border transition-all duration-300 ${
                            isHighlighted || selectedService === index
                              ? "bg-emerald-400/30 border-emerald-400/40"
                              : "bg-emerald-400/20 border-emerald-400/30"
                          }`}
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-xs font-mono">
                            {service.agentType}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-100/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className={`backdrop-blur-sm rounded-xl p-3 border transition-all duration-300 ${
                            isHighlighted || selectedService === index
                              ? "bg-emerald-600/15 border-emerald-600/30"
                              : "bg-blue-600/10 border-blue-600/20"
                          }`}
                        >
                          <div className="text-emerald-400 text-sm font-mono font-semibold">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
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
                            ? "from-emerald-600/30 to-blue-600/30 hover:from-emerald-600/50 hover:to-blue-600/50 border-emerald-600/40"
                            : "from-blue-600/20 to-emerald-400/20 hover:from-blue-600/40 hover:to-emerald-400/40 border-blue-600/30"
                        }`}
                        onClick={() => handleArcClick(index)}
                      >
                        <span className="text-emerald-400 font-mono text-sm">
                          {selectedService === index
                            ? "Collapse Neural"
                            : "Neural Deploy"}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 text-emerald-400 transition-transform ${
                            selectedService === index
                              ? "rotate-90"
                              : "group-hover:translate-x-1"
                          }`}
                        />
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

// --- Industries Section ---
const IndustriesSection: React.FC = () => {
  const industries: Industry[] = [
    {
      name: "Financial Intelligence",
      description:
        "Empowering financial institutions with predictive analytics and autonomous trading agents for unparalleled market foresight.",
      icon: DollarSign,
      color: "from-purple-600 to-indigo-600",
      features: [
        "Fraud Detection Agents",
        "Algorithmic Trading",
        "Risk Prediction Systems",
        "Personalized Finance Bots",
      ],
    },
    {
      name: "Retail & E-commerce Evolution",
      description:
        "Revolutionizing retail with AI-driven customer experiences, supply chain optimization, and predictive inventory management.",
      icon: Monitor,
      color: "from-pink-600 to-rose-600",
      features: [
        "Hyper-Personalization AI",
        "Supply Chain Optimization",
        "Automated Customer Support",
        "Dynamic Pricing Agents",
      ],
    },
    {
      name: "Healthcare Transformation",
      description:
        "Accelerating medical research, enhancing patient care, and optimizing operations with intelligent diagnostic and administrative agents.",
      icon: Shield,
      color: "from-green-600 to-emerald-600",
      features: [
        "AI-Powered Diagnostics",
        "Drug Discovery Acceleration",
        "Patient Engagement Bots",
        "Operational Efficiency AI",
      ],
    },
    {
      name: "Manufacturing & Robotics",
      description:
        "Driving Industry 4.0 with AI-powered predictive maintenance, quality control, and autonomous robotic orchestration.",
      icon: Settings,
      color: "from-yellow-600 to-orange-600",
      features: [
        "Predictive Maintenance AI",
        "Automated Quality Control",
        "Robot Fleet Management",
        "Smart Factory Optimization",
      ],
    },
    {
      name: "Logistics & Supply Chain",
      description:
        "Optimizing global supply chains with real-time tracking, demand forecasting, and autonomous logistics management agents.",
      icon: Layers,
      color: "from-cyan-600 to-blue-600",
      features: [
        "Real-Time Logistics",
        "Demand Forecasting AI",
        "Autonomous Route Optimization",
        "Warehouse Automation",
      ],
    },
    {
      name: "Smart Cities & Infrastructure",
      description:
        "Building the cities of tomorrow with intelligent traffic management, energy optimization, and public safety AI.",
      icon: Globe,
      color: "from-indigo-600 to-purple-600",
      features: [
        "Intelligent Traffic Flow",
        "Smart Energy Grids",
        "Public Safety AI",
        "Urban Planning Simulation",
      ],
    },
  ];

  return (
    <section
      id="industries"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-600/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Crect x='10' y='10' width='30' height='30' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Ccircle cx='75' cy='75' r='10' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cpath d='M10 100 L40 100 L40 130 L10 130 Z' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='25' y1='25' x2='75' y2='75' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='75' y1='75' x2='25' y2='115' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Industries We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Ignite
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Our neural agent systems are meticulously crafted to reshape the
            foundations of leading global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <industry.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">
                  {industry.name}
                </h3>
                <p className="text-slate-100/70 mb-5 text-sm">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center text-slate-100/80 text-sm"
                    >
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
const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    {
      name: "Global Innovations Inc.",
      logo: "/logos/client-logo-1.png",
      testimonial:
        "Dharvix transformed our data infrastructure, boosting efficiency by 300%!",
    },
    {
      name: "FutureForge Solutions",
      logo: "/logos/client-logo-2.png",
      testimonial:
        "Their AI agents are a game-changer. We've seen incredible gains in automation.",
    },
    {
      name: "Nexus Dynamics",
      logo: "/logos/client-logo-3.png",
      testimonial:
        "The predictive insights from Dharvix's neural networks are unparalleled.",
    },
    {
      name: "Veridian Tech",
      logo: "/logos/client-logo-4.png",
      testimonial:
        "Seamless integration and exceptional support. Highly recommended for AI solutions.",
    },
    {
      name: "Quantum Leap Corp",
      logo: "/logos/client-logo-5.png",
      testimonial:
        "Dharvix's digital transcendence strategy truly put us ahead of the curve.",
    },
    {
      name: "Stellar Systems",
      logo: "/logos/client-logo-6.png",
      testimonial:
        "Their team's expertise in AI is evident in the remarkable results we achieved.",
    },
  ];

  return (
    <section
      id="clients"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Our Valued{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            We partner with leading organizations to drive their AI
            transformation journeys.
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
                <div className="w-24 h-24 bg-slate-700 rounded-full mb-4 flex items-center justify-center overflow-hidden border border-slate-600">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <Users className="w-12 h-12 text-slate-400" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {client.name}
                </h3>
                <p className="text-slate-300 text-sm font-light italic">
                  "{client.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Us Section ---
const AboutUsSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Cpath d='M0 0h10v10H0V0zm20 20h10v10H20V20zm20 20h10v10H40V40zm20 20h10v10H60V60zm20 20h10v10H80V80z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Dharvix
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Pioneering the future of intelligent business through AI-driven
            innovation.
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
                  At Dharvix, we envision a future where businesses operate as
                  intelligent, self-evolving entities. We are building the
                  foundational operating system for this new era, enabling
                  enterprises to achieve unprecedented levels of efficiency,
                  insight, and growth through the power of artificial
                  consciousness and hyper-automation.
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
                  Our mission is to empower businesses with the most advanced AI
                  solutions, seamlessly integrating intelligent agents and
                  neural networks into their core operations. We aim to
                  transcend conventional technological limits, creating a
                  seamless, intuitive, and highly responsive digital ecosystem
                  that learns, adapts, and innovates autonomously.
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
                  <li className_smooth-scroll="flex items-start text-emerald-400 font-semibold">
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

// --- Check Icon Component ---
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// --- Why Us Section ---
const WhyUsSection: React.FC = () => {
  const reasons: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }[] = [
    {
      title: "Pioneering AI",
      description:
        "We are at the forefront of development, constantly pushing the boundaries of AI capabilities.",
      icon: Cpu,
    },
    {
      title: "Tailored Agent Solutions",
      description:
        "Our AI agents are custom-built to precisely fit your unique business challenges and opportunities.",
      icon: Code,
    },
    {
      title: "Exponential ROI",
      description:
        "We focus on solutions that deliver measurable and significant returns on your investment.",
      icon: TrendingUp,
    },
    {
      title: "Seamless Integration",
      description:
        "Our systems are designed for effortless integration into your existing infrastructure, ensuring minimal disruption.",
      icon: Layers,
    },
    {
      title: "Dedicated Support",
      description:
        "Benefit from 24/7 expert support to ensure your AI ecosystem always operates at peak performance.",
      icon: MessageSquare,
    },
    {
      title: "Security & Compliance",
      description:
        "Your data and operations are safeguarded by advanced security protocols and industry compliance standards.",
      icon: Shield,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-spin-slow reverse" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' stroke='%23F1F3F5' stroke-width='0.3' fill='none'/%3E%3Cpath d='M25 25 L75 25 L75 75 L25 75 Z' stroke='%23F1F3F5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%23F1F3F5' fill-opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-blue-600 to-emerald-400 bg-clip-text text-transparent">
              Dharvix?
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            The confluence of cutting-edge neural intelligence and a commitment
            to your unprecedented success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"
              />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <reason.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-100/70 text-sm">
                  {reason.description}
                </p>
                <button className="mt-6 flex items-center text-emerald-400 font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  Learn More
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

// --- Team Section ---
const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Dr. Aria Nex",
      position: "Chief Neural Architect",
      image: "/team/aria-nex.jpg",
      bio: "A pioneer in neural network design with over 15 years of AI research, Aria leads our innovation in consciousness systems.",
      social: {
        linkedin: "https://linkedin.com/in/arianex",
        twitter: "https://twitter.com/arianex",
      },
    },
    {
      name: "Ethan Quill",
      position: "Head of Digital Evolution",
      image: "/team/ethan-quill.jpg",
      bio: "With a background in quantum computing, Ethan drives our digital transformation strategies to new dimensions.",
      social: {
        linkedin: "https://linkedin.com/in/ethanquill",
        twitter: "https://twitter.com/ethanquill",
      },
    },
    {
      name: "Luna Vex",
      position: "Lead Automation Engineer",
      image: "/team/luna-vex.jpg",
      bio: "Luna specializes in autonomous agent networks, ensuring seamless integration and unparalleled efficiency.",
      social: {
        linkedin: "https://linkedin.com/in/lunavex",
        twitter: "https://twitter.com/lunavex",
        github: "https://github.com/lunavex",
      },
    },
    {
      name: "Orion Flux",
      position: "Chief Data Scientist",
      image: "/team/orion-flux.jpg",
      bio: "Orion's expertise in omniscient data networks transforms raw data into predictive intelligence for our clients.",
      social: {
        linkedin: "https://linkedin.com/in/orionflux",
        twitter: "https://twitter.com/orionflux",
      },
    },
  ];

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-600/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.2'%3E%3Crect x='10' y='10' width='30' height='30' rx='2' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Ccircle cx='75' cy='75' r='10' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cpath d='M10 100 L40 100 L40 130 L10 130 Z' fill='none' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='25' y1='25' x2='75' y2='75' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3Cline x1='75' y1='75' x2='25' y2='115' stroke='%23F1F3F5' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
          }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Neural Pioneers
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Our team of innovators is dedicated to pushing the boundaries of AI and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"
              />
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-emerald-400/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-100 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-emerald-400 text-center font-mono mb-3">
                  {member.position}
                </p>
                <p className="text-slate-100/70 text-sm text-center mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Dharvix's neural agents transformed our operational efficiency, reducing processing times by 70%.",
      author: "Sarah K.",
      position: "CEO",
      company: "Global Innovations Inc.",
      industry: "Finance",
      metrics: "70% faster processing",
      rating: 5,
      voiceNote: "/audio/testimonial-sarah.mp3",
      agentType: "Automation Agent",
    },
    {
      quote:
        "The predictive analytics provided by Dharvix gave us a competitive edge like never before.",
      author: "Michael T.",
      position: "CTO",
      company: "Nexus Dynamics",
      industry: "Technology",
      metrics: "45% accuracy boost",
      rating: 4,
      voiceNote: "/audio/testimonial-michael.mp3",
      agentType: "Intelligence Agent",
    },
    {
      quote:
        "Their digital transcendence strategy revolutionized our customer engagement model.",
      author: "Emily R.",
      position: "CMO",
      company: "Veridian Tech",
      industry: "Retail",
      metrics: "3x engagement",
      rating: 5,
      voiceNote: "/audio/testimonial-emily.mp3",
      agentType: "Evolution Agent",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Real stories from businesses transformed by our neural intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"
              />
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-emerald-400 mr-2" />
                  <div className="flex-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-100/80 text-sm italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
                    <Users className="h-6 w-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-slate-100 font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-slate-100/60 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                    <p className="text-emerald-400 text-xs font-mono">
                      {testimonial.industry} | {testimonial.metrics}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <audio
                    controls
                    src={testimonial.voiceNote}
                    className="w-full max-w-[200px] h-8"
                  />
                  <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 bg-emerald-400/20 border border-emerald-400/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-xs font-mono">
                      {testimonial.agentType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    message: string;
  }>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-600/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F1F3F5' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Connect with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              Our Neural Network
            </span>
          </h2>
          <p className="text-xl text-slate-100/70 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team to explore how our AI solutions can elevate your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg"
            />
            <div className="relative">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-100/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-blue-600/20 border border-blue-600/30 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-100/70 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-blue-600/20 border border-blue-600/30 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-100/70 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-blue-600/20 border border-blue-600/30 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-100/70 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-blue-600/20 border border-blue-600/30 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="mt-4 text-center text-emerald-400 font-mono">
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg"
              />
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                    <p className="text-slate-100/80">
                      123 Neural Hub, AI City, Tech Valley, 94043
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-emerald-400" />
                    <p className="text-slate-100/80">+1 (800) 555-1234</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-emerald-400" />
                    <p className="text-slate-100/80">connect@dharvix.ai</p>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://facebook.com/dharvix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/dharvix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/dharvix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com/dharvix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative bg-blue-600/10 backdrop-blur-xl border border-blue-600/30 rounded-3xl p-8 shadow-xl">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-400/20 rounded-3xl blur-lg"
              />
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">
                  Request a Demo
                </h3>
                <p className="text-slate-100/80 mb-6">
                  Experience our neural intelligence solutions in action. Schedule a personalized demo with our team.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-400 hover:from-emerald-400 hover:to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Home Component ---
const Home: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-100">
      <HeroSection />
      <NeuralServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <AboutUsSection />
      <WhyUsSection />
      <ContactSection />
    </div>
  );
};

export default Home;