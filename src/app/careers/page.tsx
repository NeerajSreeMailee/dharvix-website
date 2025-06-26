"use client";
import React, { useState, useEffect } from "react";
import {
  Brain,
  Smartphone,
  Cpu,
  Palette,
  FileText,
  Laptop2,
  Microscope,
  Handshake,
  Stethoscope,
  FileSignature,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Award,
  TrendingUp,
  Heart,
  Shield,
  Coffee,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Calendar,
  Mail,
  Phone
} from "lucide-react";

// Company stats
const companyStats = [
  { icon: Users, number: "500+", label: "Team Members" },
  { icon: Globe, number: "25+", label: "Countries Served" },
  { icon: Award, number: "50+", label: "Projects Delivered" },
  { icon: TrendingUp, number: "98%", label: "Client Satisfaction" }
];

// Company benefits
const benefits = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance and wellness programs" },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear career progression paths and skill development" },
  { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours and remote work options" },
  { icon: Zap, title: "Innovation Culture", desc: "Cutting-edge projects and latest technologies" },
  { icon: Shield, title: "Job Security", desc: "Stable employment with competitive benefits" },
  { icon: Building, title: "Modern Workspace", desc: "State-of-the-art facilities and equipment" }
];

// Testimonials
const testimonials = [
  {
    name: "Abhinaav Nammi",
    title: "Executive Manager",
    text: "A family-like environment in the workplace has made me 'easy to handle' a very big team of customer support. Employee loyalty is one of the biggest strengths of the Organization.",
    exp: "1.5 years experience",
    rating: 5
  },
  {
    name: "Priyanka Bhansali",
    title: "Consultant",
    text: "A commercially successful enterprise from City Entrepreneur, strict code of conduct is Dharvix's success formula. At technology front - no other City company has reached this height.",
    exp: "2+ years experience",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    title: "Senior Developer",
    text: "The learning opportunities here are endless. Working with cutting-edge technology and a supportive team has accelerated my career growth significantly.",
    exp: "3 years experience",
    rating: 5
  }
];

// Job Openings
const jobOpenings = [
  {
    id: 1,
    title: "Embedded Engineer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "B.Tech/M.Tech (EEE/ECE/EIE), M.Sc Electronics",
    desc: "Design and develop embedded systems for IoT devices and industrial applications",
    skills: ["C/C++", "Microcontrollers", "RTOS", "Circuit Design"],
    experience: "1-3 years",
    salary: "₹4-8 LPA"
  },
  {
    id: 2,
    title: "Software Engineer",
    department: "Development",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "B.Tech – CSE/IT, M.Tech – CSE/IT, MCA, M.Sc Computers",
    desc: "Develop scalable web applications and enterprise software solutions",
    skills: ["React", "Node.js", "Python", "Cloud Computing"],
    experience: "0-2 years",
    salary: "₹3-6 LPA"
  },
  {
    id: 3,
    title: "Mechanical Engineer",
    department: "Design",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "B.Tech/M.Tech (Mechanical Engineering)",
    desc: "Design mechanical systems and create technical drawings for manufacturing",
    skills: ["CAD", "SolidWorks", "Manufacturing", "Quality Control"],
    experience: "0-2 years",
    salary: "₹3-5 LPA"
  },
  {
    id: 4,
    title: "Solution Support Engineer",
    department: "Support",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "Diploma/B.Tech (ECE/EEE/EIE)",
    desc: "Provide technical support and solution implementation for clients",
    skills: ["Networking", "Troubleshooting", "Customer Service", "System Analysis"],
    experience: "1-2 years",
    salary: "₹2.5-4 LPA"
  },
  {
    id: 5,
    title: "System Administrator",
    department: "IT Operations",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "B.Tech (CSE/ECE), BSc Computers, Networking Course",
    desc: "Manage and maintain IT infrastructure and network systems",
    skills: ["Linux", "Windows Server", "Network Security", "Cloud Platforms"],
    experience: "2-4 years",
    salary: "₹4-7 LPA"
  },
  {
    id: 6,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad",
    type: "Full-time",
    qualification: "B.Des, M.Des, or equivalent design qualification",
    desc: "Create intuitive user interfaces and exceptional user experiences",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    experience: "1-3 years",
    salary: "₹3-6 LPA"
  }
];

export default function CareersPage() {
  const [jobIndex, setJobIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const jobsPerView = 3;
  const maxIndex = Math.max(0, jobOpenings.length - jobsPerView);
  
  const handlePrev = () => setJobIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setJobIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    setIsVisible(true);
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/40"></div>
        
        <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              Join Our Innovation Journey
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight">
            Shape the Future
            <br />
            <span className="text-white">with Dharvix</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join a team that values innovation, creativity, and personal growth. 
            Build cutting-edge solutions that make a difference in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Open Positions
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Learn About Culture
            </button>
          </div>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-400">Dharvix?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and making a meaningful impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-slate-900/80 to-blue-900/20 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Current <span className="text-green-400">Openings</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handlePrev}
                disabled={jobIndex === 0}
                className={`p-3 rounded-full transition-all duration-300 ${
                  jobIndex === 0 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <span className="text-gray-400">
                  {jobIndex + 1}-{Math.min(jobIndex + jobsPerView, jobOpenings.length)} of {jobOpenings.length} positions
                </span>
              </div>
              
              <button
                onClick={handleNext}
                disabled={jobIndex === maxIndex}
                className={`p-3 rounded-full transition-all duration-300 ${
                  jobIndex === maxIndex 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.slice(jobIndex, jobIndex + jobsPerView).map((job) => (
                <div key={job.id} className="group bg-gradient-to-br from-slate-900/90 to-blue-900/30 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:shadow-2xl">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-blue-400 font-medium mb-1">{job.department}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-blue-400" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{job.desc}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {job.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                            +{job.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className="text-green-400 font-semibold">{job.salary}</span>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-purple-400">Team Says</span>
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our amazing team members about their journey with us
            </p>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`p-8 bg-gradient-to-br from-slate-900/90 to-purple-900/20 rounded-2xl border transition-all duration-500 ${
                    idx === activeTestimonial 
                      ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20 scale-105' 
                      : 'border-purple-500/20 hover:border-purple-400/30'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.title}</div>
                      <div className="text-gray-500 text-xs">{testimonial.exp}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/30 to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Selection Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              A transparent and fair process designed to identify the best talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Application Review", desc: "Initial screening of applications and resumes" },
              { step: 2, title: "Technical Assessment", desc: "Evaluate technical skills and problem-solving abilities" },
              { step: 3, title: "Interview Rounds", desc: "Technical and behavioral interviews with team leads" },
              { step: 4, title: "Final Selection", desc: "Reference checks and final decision making" }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Life at <span className="text-green-400">Dharvix</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Excellence in Everything We Do</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Dharvix Tech Solutions, you'll be working with some of the most talented and dedicated professionals in the industry. Our performance-oriented culture embodies excellence at every level.
              </p>
              <div className="space-y-4">
                {[
                  "Collaborative and open work environment",
                  "Continuous learning and development opportunities",
                  "State-of-the-art infrastructure and tools",
                  "Focus on work-life balance and well-being"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-slate-900/80 to-green-900/20 rounded-2xl border border-green-500/20">
                <Heart className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Health & Wellness</h4>
                <p className="text-gray-300 text-sm">
                  Regular health check-ups, yoga and meditation classes, and fitness programs to keep our team healthy and motivated.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-slate-900/80 to-blue-900/20 rounded-2xl border border-blue-500/20">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Professional Growth</h4>
                <p className="text-gray-300 text-sm">
                  Challenging projects with esteemed clients that provide new skills, knowledge, and expertise every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start p-8 bg-gradient-to-br from-slate-900/90 to-yellow-900/20 rounded-2xl border border-yellow-500/30">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Important Notice</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We've noticed fraudulent activities by some agents/agencies misleading candidates about fake job offers from Dharvix Tech Solutions. 
                Please verify any communication directly with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919000633061" className="flex items-center text-blue-400 hover:text-blue-300 font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-90006-33061
                </a>
                <a href="mailto:hr@dharvixtechsolutions.com" className="flex items-center text-blue-400 hover:text-blue-300 font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  hr@dharvixtechsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the next step in your career journey. We're always looking for passionate individuals who want to make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Contact HR
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Walk-in Interviews</h4>
              <p className="text-gray-300 text-sm">Every Tuesday at our office</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">No Processing Fee</h4>
              <p className="text-gray-300 text-sm">100% transparent process</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Equal Opportunity</h4>
              <p className="text-gray-300 text-sm">Fair hiring for all candidates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}