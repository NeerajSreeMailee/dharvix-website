"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CTASection } from '@/components/cta-section';
import React, { useState } from 'react';

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<string>("neeraj");

  const leaders = [
    {
      id: "Sharan Venkatesh Gorle",
      name: "Sharan Venkatesh Gorle",
      role: "CFO & HRD Manager",
      image: "/images/about/neeraj.jpg",
      description:
        "With a keen eye for financial strategy and talent development, Sharan orchestrates our growth while building a culture of excellence. His expertise in scaling operations and nurturing talent drives our organizational success.",
      linkedin: "#",
      email: "sharan@company.com"
    },
    {
      id: "neeraj",
      name: "Neeraj Sree Mailee Dudaboyina",
      role: "CTO, Technical & Product Manager",
      image: "/images/about/neeraj.jpg",
      description:
        "The technical visionary behind our AI innovations. Neeraj transforms complex challenges into elegant solutions, leading our engineering excellence while ensuring every product delivers real impact.",
      linkedin: "#",
      email: "neeraj@company.com"
    },
    {
      id: "Priyanka Bhansali",
      name: "Priyanka Bhansali",
      role: "CBO",
      image: "/images/about/neeraj.jpg",
      description:
        "Priyanka bridges strategy with execution, driving business growth through meaningful partnerships. Her market insights and relationship-building expertise fuel our expansion across industries.",
      linkedin: "#",
      email: "priyanka@company.com"
    },
    {
      id: "Narendra Sirisipalli",
      name: "Narendra Sirisipalli",
      role: "CPO & Computer Vision Engineer",
      image: "/images/about/neeraj.jpg",
      description:
        "Where computer vision meets product excellence. Narendra combines deep technical expertise with user-centric design thinking to create solutions that see, understand, and adapt to real-world needs.",
      linkedin: "#",
      email: "narendra@company.com"
    },
    {
      id: "Shazin Hijazy",
      name: "Shazin Hijazy",
      role: "COO",
      image: "/images/about/neeraj.jpg",
      description:
        "The operational backbone ensuring seamless execution. Shazin transforms strategic vision into actionable results, optimizing processes while maintaining the agility that drives our innovation.",
      linkedin: "#",
      email: "shazin@company.com"
    },
  ];

  const handleLeaderClick = (id: string) => {
    setSelectedLeader(id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/about/office_image.jpg"
            alt="Modern workspace"
            layout="fill"
            className="object-cover"
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6">
              Founded in 2025 • Driven by Innovation
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
              We are
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Innovators
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting intelligent solutions that transform how businesses operate, 
              one breakthrough at a time.
            </p>
            <div className="flex items-center justify-center gap-8 text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI & Intelligent Systems Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Enterprise Digital Solutions & Integration Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI Agents & Automation Ecosystem</span>
              </div>
               <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI Agents & Automation Ecosystem</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  Our Beginning
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Born from a 
                  <span className="text-blue-600"> Bold Vision</span>
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    In early 2025, while the world was buzzing about AI possibilities, 
                    we saw something different. We witnessed brilliant technologies 
                    sitting unused because they weren't designed for real people 
                    solving real problems.
                  </p>
                  <p className="mb-6">
                    That's when our founders made a decision that would define everything: 
                    instead of building technology first and finding users later, 
                    we would start with human needs and craft technology around them.
                  </p>
                  <p>
                    Today, we're not just another tech company. We're problem solvers, 
                    innovation architects, and most importantly, partners in your journey 
                    toward a more intelligent future.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="text-6xl font-bold text-blue-600 mb-4">2025</div>
                    <div className="text-lg text-gray-700 mb-6">Year of Foundation</div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900">5</div>
                        <div className="text-sm text-gray-600">Founding Members</div>
                      </div>
                      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900">∞</div>
                        <div className="text-sm text-gray-600">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600">
              Three principles that guide everything we do
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Think Different</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We question conventional approaches and dare to imagine what hasn't been done before. 
                    Innovation isn't just about technology—it's about reimagining possibilities.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-purple-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Build with Purpose</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every line of code, every algorithm, every interface we create serves a meaningful purpose. 
                    We build technology that enhances human potential, not replaces it.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100 group-hover:border-green-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Grow Together</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe in partnerships, not just transactions. Your success is our success, 
                    and we're committed to evolving alongside your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Minds Behind the Magic
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionaries, innovators, and problem-solvers who are shaping the future of intelligent technology
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Team Grid */}
              <div className="lg:col-span-2 space-y-3">
                {leaders.map((leader) => (
                  <div
                    key={leader.id}
                    className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                      selectedLeader === leader.id 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                        : "bg-gray-50 hover:bg-gray-100 hover:shadow-md"
                    }`}
                    onClick={() => handleLeaderClick(leader.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${selectedLeader === leader.id ? "text-white" : "text-gray-900"}`}>
                          {leader.name.split(' ')[0]} {leader.name.split(' ')[1]}
                        </h3>
                        <p className={`text-sm ${selectedLeader === leader.id ? "text-blue-100" : "text-gray-600"}`}>
                          {leader.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Leader Profile */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 h-full">
                  {leaders
                    .filter((leader) => leader.id === selectedLeader)
                    .map((leader) => (
                      <div key={leader.id} className="h-full flex flex-col">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                            <p className="text-lg text-blue-600 font-semibold mb-4">{leader.role}</p>
                            <div className="flex gap-3">
                              <a href={leader.linkedin} className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                              <a href={`mailto:${leader.email}`} className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed text-lg">{leader.description}</p>
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
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              We're not just building a company—we're crafting the future. 
              Every day brings new challenges, breakthrough moments, and opportunities to make a real impact.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-3">For Innovators</h3>
                <p className="text-blue-100">
                  Work on cutting-edge AI projects that push the boundaries of what's possible. 
                  Your ideas don't just matter—they shape our products.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-3">For Builders</h3>
                <p className="text-blue-100">
                  Turn ambitious visions into reality. Build systems that millions will use, 
                  solve problems that matter, and see your impact in real-time.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Explore Careers
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}