"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  Award,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Filter,
  Eye,
  Share2,
  Bookmark,
  Heart,
  Activity,
} from "lucide-react";

// News-specific data
const newsArticles = [
  {
    id: 1,
    image: "/images/contact/contact.jpg",
    title: "Dharvix Tech Wins 'Best Innovation Award 2024'",
    date: "May 28, 2024",
    category: "Awards",
    location: "Hyderabad Tech Summit",
    desc: "Dharvix Tech Solutions has been recognized with the prestigious Best Innovation Award at the Hyderabad Tech Summit 2024. Our groundbreaking work in sustainable technology solutions and AI-driven automation systems impressed the panel of industry experts.",
    fullContent:
      "The award recognizes our commitment to developing cutting-edge solutions that not only drive business growth but also contribute to environmental sustainability. Our team's innovative approach to integrating IoT sensors with machine learning algorithms has revolutionized how businesses monitor and optimize their energy consumption.",
    featured: true,
    readTime: "5 min read",
    views: 1250,
    author: "Dharvix Communications Team",
  },
  {
    id: 2,
    image: "/images/contact/contact.jpg",
    title: "Strategic Partnership with Microsoft Azure Announced",
    date: "May 15, 2024",
    category: "Partnership",
    location: "Corporate Headquarters",
    desc: "Dharvix Tech Solutions proudly announces a strategic partnership with Microsoft Azure to deliver enhanced cloud solutions to enterprise clients. This collaboration will significantly expand our service capabilities and market reach.",
    fullContent:
      "This partnership enables us to leverage Microsoft's robust cloud infrastructure to provide our clients with scalable, secure, and cost-effective solutions. Our certified Azure specialists will work closely with businesses to migrate their operations to the cloud seamlessly.",
    featured: true,
    readTime: "4 min read",
    views: 980,
    author: "CEO Office",
  },
  {
    id: 3,
    image: "/images/contact/contact.jpg",
    title: "Q1 2024 Financial Results: 40% Growth Achieved",
    date: "April 1, 2024",
    category: "Financial",
    location: "Corporate Announcement",
    desc: "Dharvix Tech Solutions reports impressive 40% year-over-year growth in Q1 2024, driven by expanding client base and successful project deliveries across multiple industry sectors.",
    fullContent:
      "Our strong financial performance reflects the trust our clients place in our innovative solutions. The growth was primarily driven by increased demand for our IoT and AI services, with notable expansion in the healthcare and manufacturing sectors.",
    featured: false,
    readTime: "6 min read",
    views: 750,
    author: "Finance Department",
  },
  {
    id: 4,
    image: "/images/contact/contact.jpg",
    title: "New AI Research Lab Opens in Visakhapatnam",
    date: "March 20, 2024",
    category: "Company News",
    location: "Visakhapatnam, AP",
    desc: "Dharvix Tech Solutions inaugurates a state-of-the-art AI Research Lab in Visakhapatnam, focusing on machine learning applications for smart city solutions and industrial automation.",
    fullContent:
      "The new research facility will house 50+ researchers and engineers working on next-generation AI solutions. The lab will collaborate with local universities and contribute to making Visakhapatnam a leading tech hub in Andhra Pradesh.",
    featured: false,
    readTime: "3 min read",
    views: 620,
    author: "R&D Team",
  },
  {
    id: 5,
    image: "/images/contact/contact.jpg",
    title: "Dharvix Tech Featured in Tech Today Magazine",
    date: "March 10, 2024",
    category: "Media Coverage",
    location: "National Publication",
    desc: "Our CEO's vision for sustainable technology was featured in the latest issue of Tech Today Magazine, highlighting our contribution to India's digital transformation journey.",
    fullContent:
      "The feature article discusses our role in promoting sustainable technology practices and how we're helping businesses reduce their carbon footprint through smart automation solutions.",
    featured: false,
    readTime: "4 min read",
    views: 890,
    author: "Media Relations",
  },
  {
    id: 6,
    image: "/images/contact/contact.jpg",
    title: "Employee Recognition Program Launch",
    date: "February 25, 2024",
    category: "Company Culture",
    location: "All Offices",
    desc: "Introducing our comprehensive Employee Recognition Program to celebrate outstanding contributions and foster a culture of excellence across all departments.",
    fullContent:
      "The program includes monthly awards, annual recognition ceremonies, and performance-based incentives. We believe in recognizing and rewarding the talented individuals who drive our success.",
    featured: false,
    readTime: "2 min read",
    views: 540,
    author: "HR Department",
  },
];

const newsCategories = [
  "All",
  "Awards",
  "Partnership",
  "Financial",
  "Company News",
  "Media Coverage",
  "Company Culture",
];

const categoryIcons = {
  Awards: Award,
  Partnership: Briefcase,
  Financial: Briefcase,
  "Company News": Users,
  "Media Coverage": Users,
  "Company Culture": Users,
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter((article) => article.featured);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative flex items-stretch min-h-[420px] md:min-h-[520px] w-full font-sans overflow-hidden">
        <Image
          src="/images/contact/contact.jpg"
          alt="Company News Hero"
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-transparent z-5"></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 text-white max-w-4xl">
          <div className="animate-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Company <span className="text-blue-400">News</span>
            </h1>
            <div className="w-24 h-1 bg-blue-400 mb-8"></div>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-8 text-blue-100">
              Stay informed about our latest achievements, partnerships,
              financial milestones, and company developments that shape our
              future.
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-4 h-4" />
                <span>Awards & Recognition</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Briefcase className="w-4 h-4" />
                <span>Business Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-4 h-4" />
                <span>Company Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <section className="w-full max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center space-x-2 text-blue-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/news-events"
            className="hover:text-white transition-colors"
          >
            News & Events
          </Link>
          <span>/</span>
          <span className="text-white">News</span>
        </nav>
      </section>

      {/* Featured News Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
            Breaking News
          </h2>
          <div className="w-20 h-1 bg-blue-400 mb-6"></div>
          <p className="text-blue-200 text-lg">
            Our most significant company announcements and achievements
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNews.map((article, idx) => {
            const categoryIcons: Record<string, React.ElementType> = {
              Awards: Award,
              "Company Culture": Users,
              Events: Calendar,
              Business: Briefcase,
              Wellness: Heart,
            };

            return (
              <article
                key={article.id}
                className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-blue-800/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative w-full h-[280px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="600px"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      BREAKING
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-blue-300 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{article.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-100 mb-4 group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-300 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>By {article.author}</span>
                    </div>
                    <button className="text-blue-400 hover:text-white transition-colors font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-800/80 text-blue-200 hover:bg-slate-700/80 border border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 pl-10 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Filter className="w-4 h-4 text-blue-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* All News Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
            All Company News
          </h2>
          <div className="w-20 h-1 bg-blue-400 mb-6"></div>
          <p className="text-blue-200 text-lg">
            Showing {filteredNews.length}{" "}
            {filteredNews.length === 1 ? "article" : "articles"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, idx) => {
            const categoryIcons: Record<string, React.ElementType> = {
              Awards: Award,
              "Company Culture": Users,
              Events: Calendar,
              Business: Briefcase,
              Activity: Activity,
            };

            return (
              <article
                key={article.id}
                className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-blue-800/30 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="400px"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex gap-1">
                    <button className="bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                    <button className="bg-black/50 text-white p-1.5 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors">
                      <Bookmark className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-blue-300 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-blue-100 mb-3 group-hover:text-white transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-300 text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{article.location}</span>
                  </div>
                  <p className="text-blue-200 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-300 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <button className="text-blue-400 hover:text-white transition-colors text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <div className="text-blue-300 mb-4">
              <Filter className="w-16 h-16 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-blue-200 mb-2">
              No news articles found
            </h3>
            <p className="text-blue-300">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Subscription */}
      <section className="w-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Informed with Our News Updates
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest company news, announcements, and insights delivered
            directly to your inbox. Never miss an important update from Dharvix
            Tech Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
            />
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
