'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Twitter, Camera, Mail, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have this utility for conditional classnames
import Image from 'next/image';
import Logo from '../assets/logo.png';
import Text from '../assets/text.png';
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

// --- CTASection Component ---
const CTASection = () => {
  type Particle = {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
  };

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [...Array(30)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#1C7ED6]/20 to-[#38D9A9]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0F1C]/50"></div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#38D9A9] rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F1F3F5] mb-6 animate-pulse">Ready to Transform Your Business?</h2>
          <p className="text-xl text-[#F1F3F5]/70 mb-8">
            Let's build something extraordinary together. Your vision, our innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9] text-[#F1F3F5] rounded-xl font-semibold hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#38D9A9] to-[#1C7ED6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-[#1C7ED6] text-[#1C7ED6] rounded-xl font-semibold hover:bg-[#1C7ED6]/10 hover:border-[#38D9A9] transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NeuralNetwork Background Component ---
const NeuralNetwork = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  type Node = {
    id: number;
    x: number;
    y: number;
    pulse: number;
  };

  type Connection = {
    from: Node;
    to: Node;
    strength: number;
  };

  useEffect(() => {
    const generateNetwork = () => {
      const newNodes = [...Array(12)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        pulse: Math.random() * 2 + 1,
      }));

      const newConnections = [];
      for (let i = 0; i < newNodes.length; i++) {
        for (let j = i + 1; j < newNodes.length; j++) {
          const distance = Math.sqrt(
            Math.pow(newNodes[i].x - newNodes[j].x, 2) + Math.pow(newNodes[i].y - newNodes[j].y, 2)
          );
          if (distance < 40) {
            newConnections.push({
              from: newNodes[i],
              to: newNodes[j],
              strength: 1 - distance / 40,
            });
          }
        }
      }

      setNodes(newNodes);
      setConnections(newConnections);
    };

    generateNetwork();
  }, []);

  return (
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full">
        {connections.map((conn, i) => (
          <line
            key={i}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="#1C7ED6"
            strokeWidth={conn.strength * 2}
            opacity={conn.strength * 0.5}
            className="animate-pulse"
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute w-3 h-3 bg-[#38D9A9] rounded-full shadow-lg"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDuration: `${node.pulse}s`,
            boxShadow: `0 0 20px #38D9A9`,
          }}
        />
      ))}
    </div>
  );
};

// --- Interactive Timeline Component ---
const InteractiveTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isPlaying, setIsPlaying] = useState(false);

  const timelineEvents = [
    { year: 2024, title: 'The Spark', description: 'Initial concept conceived' },
    { year: 2025, title: 'Company Launch', description: 'Official founding and first products' },
    { year: 2027, title: 'Market Expansion', description: 'Global reach and partnerships' },
    { year: 2030, title: 'AI Revolution', description: 'Leading the next wave of innovation' },
  ];

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9] rounded-full text-[#F1F3F5] hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          {isPlaying ? 'Pause Timeline' : 'Play Timeline'}
        </button>
      </div>

      <div className="relative bg-gradient-to-r from-[#1C7ED6]/10 to-[#38D9A9]/10 rounded-3xl p-8 backdrop-blur-sm border border-[#1C7ED6]/30">
        <div className="flex justify-between items-center mb-8">
          {timelineEvents.map((event) => (
            <div
              key={event.year}
              className={`cursor-pointer transition-all duration-300 ${
                selectedYear === event.year
                  ? 'scale-125 text-[#38D9A9]'
                  : 'text-[#F1F3F5]/60 hover:text-[#1C7ED6] hover:scale-110'
              }`}
              onClick={() => setSelectedYear(event.year)}
            >
              <div
                className={`w-4 h-4 rounded-full mb-2 mx-auto ${
                  selectedYear === event.year ? 'bg-[#38D9A9] shadow-lg' : 'bg-[#1C7ED6]/50'
                }`}
                style={{
                  boxShadow: selectedYear === event.year ? '0 0 20px #38D9A9' : 'none',
                }}
              ></div>
              <div className="text-sm font-bold">{event.year}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {timelineEvents
            .filter((event) => event.year === selectedYear)
            .map((event) => (
              <div key={event.year} className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-[#F1F3F5] mb-4">{event.title}</h3>
                <p className="text-xl text-[#F1F3F5]/70">{event.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- AboutPage Main Component ---
export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState('neeraj');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const leaders = [
    {
      id: 'Sharan Venkatesh Gorle',
      name: 'Sharan Venkatesh Gorle',
      role: 'CFO & HRD Manager',
      image: '/images/Charan.jpeg', // Placeholder, ensure you have actual images
      description:
        'With a keen eye for financial strategy and talent development, Sharan orchestrates our growth while building a culture of excellence. His expertise in scaling operations and nurturing talent drives our organizational success.',
      linkedin: '#',
      email: 'sharan@company.com',
      specialty: 'Financial Strategy & Team Development',
      aiPhilosophy: 'AI should amplify human decision-making, not replace it',
      color: '#1C7ED6',
    },
    {
      id: 'neeraj',
      name: 'Neeraj Sree Mailee Dudaboyina',
      role: 'CTO, Technical & Product Manager',
      image: '/images/Neeraj_Mailee.jpeg', // Placeholder, ensure you have actual images
      description:
        'The technical visionary behind our AI innovations. Neeraj transforms complex challenges into elegant solutions, leading our engineering excellence while ensuring every product delivers real impact.',
      linkedin: '#',
      email: 'neeraj@company.com',
      specialty: 'AI Architecture & Product Innovation',
      aiPhilosophy: 'The future belongs to AI that understands context, not just data',
      color: '#38D9A9',
    },
    {
      id: 'Priyanka Bhansali',
      name: 'Priyanka Bhansali',
      role: 'CBO',
      image: '/images/Priyanka.jpeg', // Placeholder, ensure you have actual images
      description:
        'Priyanka bridges strategy with execution, driving business growth through meaningful partnerships. Her market insights and relationship-building expertise fuel our expansion across industries.',
      linkedin: '#',
      email: 'priyanka@company.com',
      specialty: 'Strategic Partnerships & Market Expansion',
      aiPhilosophy: "AI's greatest power lies in connecting people and possibilities",
      color: '#7C3AED',
    },
    {
      id: 'Narendra Sirisipalli',
      name: 'Narendra Sirisipalli',
      role: 'CPO & Computer Vision Engineer',
      image: '/images/Narendra.jpeg', // Placeholder, ensure you have actual images
      description:
        'Where computer vision meets product excellence. Narendra combines deep technical expertise with user-centric design thinking to create solutions that see, understand, and adapt to real-world needs.',
      linkedin: '#',
      email: 'narendra@company.com',
      specialty: 'Computer Vision & Product Design',
      aiPhilosophy: 'Vision without action is hallucination; action without vision is chaos',
      color: '#F59E0B',
    },
    {
      id: 'Shazin Hijazy',
      name: 'Shazin Hijazy',
      role: 'COO',
      image: '/images/Shazin.jpg', // Placeholder, ensure you have actual images
      description:
        'The operational backbone ensuring seamless execution. Shazin transforms strategic vision into actionable results, optimizing processes while maintaining the agility that drives our innovation.',
      linkedin: '#',
      email: 'shazin@company.com',
      specialty: 'Operations Excellence & Process Innovation',
      aiPhilosophy: 'Perfect execution turns AI dreams into reality',
      color: '#EF4444',
    },
  ];

  const services = [
    'AI & Intelligent Systems Services',
    'Enterprise Digital Solutions & Integration Services',
    'AI Agents & Automation Ecosystem',
    'Advanced Analytics & Data Intelligence',
  ];

  const philosophyItems = [
    {
      icon: '⚡',
      title: 'Think Different',
      description:
        "We question conventional approaches and dare to imagine what hasn't been done before. Innovation isn't just about technology—it's about reimagining possibilities.",
      gradient: 'from-[#1C7ED6] to-[#7C3AED]',
    },
    {
      icon: '❤️',
      title: 'Build with Purpose',
      description:
        'Every line of code, every algorithm, every interface we create serves a meaningful purpose. We build technology that enhances human potential, not replaces it.',
      gradient: 'from-[#38D9A9] to-[#1C7ED6]',
    },
    {
      icon: '🌟',
      title: 'Grow Together',
      description:
        "We believe in partnerships, not just transactions. Your success is our success, and we're committed to evolving alongside your business needs.",
      gradient: 'from-[#F59E0B] to-[#38D9A9]',
    },
  ];

  const handleLeaderClick = (id: string) => {
    setSelectedLeader(id);
  };

  return (
    <div className="min-h-screen bg-[#0B0F1C] text-[#F1F3F5] overflow-x-hidden">
      {/* Sound Control */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 bg-gradient-to-r from-[#1C7ED6]/20 to-[#38D9A9]/20 backdrop-blur-sm rounded-full border border-[#1C7ED6]/30 hover:scale-110 transition-transform"
        >
          {soundEnabled ? <Volume2 className="text-[#38D9A9]" size={20} /> : <VolumeX className="text-[#F1F3F5]/60" size={20} />}
        </button>
      </div>

      {/* Hero Section with Enhanced Effects */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background with Neural Network */}
        <div className="absolute inset-0 bg-[#0B0F1C]">
          <NeuralNetwork mousePosition={mousePosition} />
          <div
            className="absolute inset-0 opacity-20 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #1C7ED6 0%, #38D9A9 25%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Floating Energy Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9] rounded-full animate-pulse"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`,
                boxShadow: `0 0 ${10 + i * 2}px ${i % 2 === 0 ? '#1C7ED6' : '#38D9A9'}`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#1C7ED6]/20 to-[#38D9A9]/20 backdrop-blur-sm rounded-full text-[#F1F3F5]/80 text-sm font-medium mb-8 border border-[#1C7ED6]/30 animate-pulse">
              🚀 Founded in 2025 • Driven by Innovation
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-[#F1F3F5] leading-tight">
              We are
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38D9A9] via-[#1C7ED6] to-[#38D9A9] animate-pulse">
                Innovators
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F1F3F5]/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              Crafting intelligent solutions that transform how businesses operate, one breakthrough at a time.
            </p>

            {/* Enhanced Service Tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#F1F3F5]/70 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 bg-[#1C7ED6]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1C7ED6]/20 hover:bg-[#1C7ED6]/20 hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-[#38D9A9] group-hover:shadow-lg' : 'bg-[#1C7ED6] group-hover:shadow-lg'
                    }`}
                    style={{
                      boxShadow: `0 0 10px ${index % 2 === 0 ? '#38D9A9' : '#1C7ED6'}`,
                    }}
                  ></div>
                  <span className="text-sm font-medium group-hover:text-[#F1F3F5] transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#F1F3F5] animate-bounce">
          <div className="w-6 h-10 border-2 border-[#1C7ED6] rounded-full flex justify-center hover:border-[#38D9A9] transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-gradient-to-b from-[#1C7ED6] to-[#38D9A9] rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="mt-2 animate-pulse" size={20} />
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1C] via-[#1C7ED6]/5 to-[#0B0F1C] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1C7ED6]/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1C7ED6]/20 to-[#38D9A9]/20 text-[#F1F3F5] rounded-full text-sm font-medium border border-[#1C7ED6]/30 animate-pulse">
                  📖 Our Beginning
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#F1F3F5] leading-tight">
                  Born from a
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9]">
                    {' '}
                    Bold Vision
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-[#F1F3F5]/70 leading-relaxed">
                  <p className="hover:text-[#F1F3F5]/90 transition-colors">
                    In early 2025, while the world was buzzing about AI possibilities, we saw something different. We
                    witnessed brilliant technologies sitting unused because they weren't designed for real people solving
                    real problems.
                  </p>
                  <p className="hover:text-[#F1F3F5]/90 transition-colors">
                    That's when our founders made a decision that would define everything: instead of building technology
                    first and finding users later, we would start with human needs and craft technology around them.
                  </p>
                  <p className="hover:text-[#F1F3F5]/90 transition-colors">
                    Today, we're not just another tech company. We're problem solvers, innovation architects, and most
                    importantly, partners in your journey toward a more intelligent future.
                  </p>
                </div>
              </div>

              <div className="relative">
                <InteractiveTimeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Philosophy Section */}
      <section className="py-24 bg-[#0B0F1C] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F1F3F5] mb-6">Our Philosophy</h2>
            <p className="text-xl text-[#F1F3F5]/60">Three principles that guide everything we do</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {philosophyItems.map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="bg-gradient-to-br from-[#1C7ED6]/10 to-[#38D9A9]/10 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 h-full border border-[#1C7ED6]/20 group-hover:border-[#1C7ED6]/50 group-hover:scale-105 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#F1F3F5] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1C7ED6] group-hover:to-[#38D9A9] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#F1F3F5]/60 leading-relaxed group-hover:text-[#F1F3F5]/80 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section with Orbital Layout */}
      <section className="py-24 bg-gradient-to-br from-[#1C7ED6]/5 to-[#38D9A9]/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-[#F1F3F5] mb-6">The Minds Behind the Magic</h2>
              <p className="text-xl text-[#F1F3F5]/60 max-w-4xl mx-auto">
                Meet the visionaries, innovators, and problem-solvers who are shaping the future of intelligent technology
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Enhanced Team Grid */}
              <div className="lg:col-span-2 space-y-4"> {/* Increased space-y for better visual separation */}
                {leaders.map((leader) => (
                  <div
                    key={leader.id}
                    className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border relative overflow-hidden group
                    ${
                      selectedLeader === leader.id
                        ? 'bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9] text-[#F1F3F5] shadow-xl border-transparent scale-105 animate-pulse-border' // Added custom animate-pulse-border
                        : 'bg-[#1C7ED6]/10 hover:bg-[#1C7ED6]/20 hover:shadow-lg border-[#1C7ED6]/20 hover:scale-102'
                    }`}
                    onClick={() => handleLeaderClick(leader.id)}
                  >
                    {selectedLeader === leader.id && (
                      // Enhanced glow effect for selected card
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#38D9A9]/20 to-[#1C7ED6]/20 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-2xl ring-4 ring-[#38D9A9] opacity-70 animate-ping-once"></div>
                      </>
                    )}
                    <div className="flex items-center gap-4 relative z-10">
                      {/* Image container for half picture effect */}
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/20 relative"> {/* Adjusted height */}
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="object-cover w-full h-[200%] object-top transform transition-transform duration-300 group-hover:scale-110" // Increased height and set object-top
                        />
                         {selectedLeader === leader.id && (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1C7ED6]/30 to-[#38D9A9]/30"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${selectedLeader === leader.id ? "text-[#F1F3F5]" : "text-[#F1F3F5]"}`}>
                          {leader.name}
                        </h3>
                        <p className={`text-sm transition-colors duration-300 ${selectedLeader === leader.id ? "text-[#F1F3F5]/80" : "text-[#F1F3F5]/60"}`}>
                          {leader.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Leader Profile */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-[#1C7ED6]/10 to-[#38D9A9]/10 rounded-3xl p-8 h-full backdrop-blur-sm border border-[#1C7ED6]/30 relative overflow-hidden">
                    {/* Background orbiting elements */}
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={`orb-${i}`}
                            className="absolute w-3 h-3 bg-gradient-to-r from-[#38D9A9] to-[#1C7ED6] rounded-full opacity-60 animate-orbit"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${10 + Math.random() * 10}s`,
                                animationDelay: `${Math.random() * 5}s`,
                                boxShadow: `0 0 15px ${i % 2 === 0 ? '#38D9A9' : '#1C7ED6'}`,
                                zIndex: 0
                            }}
                        />
                    ))}
                  {leaders
                    .filter((leader) => leader.id === selectedLeader)
                    .map((leader) => (
                      <div key={leader.id} className="h-full flex flex-col relative z-10">
                        <div className="flex items-start gap-6 mb-8">
                          {/* Main profile image container for half picture effect */}
                          <div className="w-80 h-80 rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl border-4 border-[#1C7ED6]/30 relative group"> {/* Adjusted height */}
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="object-cover w-full h-[200%] object-top transition-transform group-hover:scale-110 duration-500" // Increased height and set object-top
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1C7ED6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div>
                            <h3 className="text-4xl font-bold text-[#F1F3F5] mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38D9A9] group-hover:to-[#1C7ED6] transition-all duration-500">
                                {leader.name}
                            </h3>
                            <p className="text-xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1C7ED6] group-hover:to-[#38D9A9] transition-all duration-500">
                                {leader.role}
                            </p>
                            <p className="text-lg text-[#F1F3F5]/70 mb-3"><span className="font-semibold text-[#1C7ED6]">Specialty:</span> {leader.specialty}</p>
                            <p className="text-lg text-[#F1F3F5]/70 mb-6 italic">"{leader.aiPhilosophy}"</p>
                            <div className="flex gap-4">
                              <a
                                href={leader.linkedin}
                                className="w-12 h-12 bg-[#1C7ED6] rounded-full flex items-center justify-center text-[#F1F3F5] hover:bg-[#1C7ED6]/80 transition-all duration-300 transform hover:scale-110 shadow-lg"
                              >
                                <Linkedin className="w-6 h-6" />
                              </a>
                              <a
                                href={`mailto:${leader.email}`}
                                className="w-12 h-12 bg-[#0B0F1C]/80 rounded-full flex items-center justify-center text-[#F1F3F5] hover:bg-[#0B0F1C]/50 transition-all duration-300 transform hover:scale-110 shadow-lg"
                              >
                                <Mail className="w-6 h-6" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[#F1F3F5]/60 leading-relaxed text-lg">{leader.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-[#0B0F1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F1C]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F1F3F5] mb-8">Join Our Journey</h2>
            <p className="text-xl text-[#F1F3F5]/70 mb-12 leading-relaxed">
              We're not just building a company—we're crafting the future. Every day brings new challenges,
              breakthrough moments, and opportunities to make a real impact.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#1C7ED6]/10 backdrop-blur-sm rounded-2xl p-6 text-left border border-[#1C7ED6]/20 hover:border-[#38D9A9] transition-colors duration-300 group">
                <h3 className="text-xl font-bold text-[#F1F3F5] mb-3 group-hover:text-[#38D9A9] transition-colors">
                  For Innovators
                </h3>
                <p className="text-[#F1F3F5]/70">
                  Work on cutting-edge AI projects that push the boundaries of what's possible. Your ideas don't just
                  matter—they shape our products.
                </p>
              </div>
              <div className="bg-[#1C7ED6]/10 backdrop-blur-sm rounded-2xl p-6 text-left border border-[#1C7ED6]/20 hover:border-[#1C7ED6] transition-colors duration-300 group">
                <h3 className="text-xl font-bold text-[#F1F3F5] mb-3 group-hover:text-[#1C7ED6] transition-colors">
                  For Builders
                </h3>
                <p className="text-[#F1F3F5]/70">
                  Turn ambitious visions into reality. Build systems that millions will use, solve problems that matter,
                  and see your impact in real-time.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#1C7ED6] to-[#38D9A9] text-[#F1F3F5] rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                Explore Careers
              </button>
              <button className="px-8 py-4 border-2 border-[#1C7ED6] text-[#1C7ED6] rounded-xl font-semibold hover:bg-[#1C7ED6]/10 hover:border-[#38D9A9] transition-all duration-300 hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}