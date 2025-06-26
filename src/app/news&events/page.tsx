"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Users, Award, Briefcase, MapPin, Clock, ArrowRight, Filter } from "lucide-react";

// Enhanced news/events data with categories
const newsEvents = [
	{
		id: 1,
		image: "/images/contact/contact.jpg",
		title: "Dharvix Tech at AU Tech Expo 2024",
		date: "June 10, 2024",
		category: "Events",
		location: "Andhra University, Visakhapatnam",
		desc: "Our team showcased cutting-edge IoT solutions and AI-powered automation systems at the prestigious Andhra University Tech Expo. The event attracted over 500+ industry professionals and students, positioning Dharvix as a technology leader in the region.",
		featured: true,
		readTime: "3 min read"
	},
	{
		id: 2,
		image: "/images/contact/contact.jpg", 
		title: "Dharvix Tech Wins 'Best Innovation Award 2024'",
		date: "May 28, 2024",
		category: "Awards",
		location: "Hyderabad Tech Summit",
		desc: "Recognized for our groundbreaking work in sustainable technology solutions, Dharvix Tech Solutions received the prestigious Best Innovation Award at the Hyderabad Tech Summit 2024.",
		featured: true,
		readTime: "2 min read"
	},
	{
		id: 3,
		image: "/images/contact/contact.jpg",
		title: "CSR Initiative: Digital Literacy Drive",
		date: "May 25, 2024",
		category: "CSR",
		location: "Local Schools, Visakhapatnam",
		desc: "Launched a comprehensive digital literacy program reaching 1,000+ students across 15 local schools. Our initiative includes coding workshops, digital safety training, and providing tablets to underprivileged students.",
		featured: false,
		readTime: "4 min read"
	},
	{
		id: 4,
		image: "/images/contact/contact.jpg",
		title: "New Partnership with Microsoft Azure",
		date: "May 15, 2024",
		category: "Partnership",
		location: "Corporate Headquarters",
		desc: "Dharvix Tech Solutions announces strategic partnership with Microsoft Azure to deliver enhanced cloud solutions to our enterprise clients, expanding our service capabilities significantly.",
		featured: false,
		readTime: "3 min read"
	},
	{
		id: 5,
		image: "/images/contact/contact.jpg",
		title: "Employee Wellness Week Success",
		date: "April 15, 2024",
		category: "Company Culture",
		location: "Dharvix Office Campus",
		desc: "A week-long celebration of employee wellbeing featuring yoga sessions, mental health workshops, health screenings, and team-building activities. 95% employee participation rate achieved.",
		featured: false,
		readTime: "2 min read"
	},
	{
		id: 6,
		image: "/images/contact/contact.jpg",
		title: "Q1 2024 Financial Results Released",
		date: "April 1, 2024",
		category: "Financial",
		location: "Corporate Announcement",
		desc: "Dharvix Tech Solutions reports 40% year-over-year growth in Q1 2024, with expanding client base and successful project deliveries across multiple sectors.",
		featured: false,
		readTime: "5 min read"
	}
];

const categories = ["All", "Events", "Awards", "CSR", "Partnership", "Company Culture", "Financial"];

const categoryIcons = {
	"Events": Calendar,
	"Awards": Award,
	"CSR": Users,
	"Partnership": Briefcase,
	"Company Culture": Users,
	"Financial": Briefcase
};

export default function NewsEventsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredEvents = newsEvents.filter(event => {
		const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
		const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  event.desc.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const featuredEvents = newsEvents.filter(event => event.featured);

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
			{/* Enhanced Hero Section */}
			<section className="relative flex items-stretch min-h-[420px] md:min-h-[520px] lg:min-h-[620px] w-full font-sans overflow-hidden">
				<Image
					src="/images/contact/contact.jpg"
					alt="News & Events Hero"
					fill
					className="object-cover w-full h-full absolute inset-0 z-0"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/80 to-transparent z-5"></div>
				<div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 text-white max-w-4xl">
					<div className="animate-in slide-in-from-left duration-700">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							News & <span className="text-blue-400">Events</span>
						</h1>
						<div className="w-24 h-1 bg-blue-400 mb-8"></div>
						<p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-8 text-blue-100">
							Stay connected with the latest innovations, achievements, and milestones 
							that define our journey at Dharvix Tech Solutions.
						</p>
						<div className="flex flex-wrap gap-4 text-sm md:text-base">
							<div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Calendar className="w-4 h-4" />
								<span>Latest Updates</span>
							</div>
							<div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Award className="w-4 h-4" />
								<span>Awards & Recognition</span>
							</div>
							<div className="flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Users className="w-4 h-4" />
								<span>Community Impact</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Navigation */}
			<section className="w-full max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Link
						href="/news&events/press-release"
						className="group bg-gradient-to-r from-blue-900/90 to-blue-800/90 border border-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex items-center justify-between transform hover:scale-105"
					>
						<div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
								Press Releases
							</h3>
							<p className="text-blue-200 text-sm">Official announcements and media coverage</p>
						</div>
						<ArrowRight className="w-6 h-6 text-blue-300 group-hover:text-white transition-colors" />
					</Link>
					<Link
						href="/news&events/events"
						className="group bg-gradient-to-r from-purple-900/90 to-purple-800/90 border border-purple-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex items-center justify-between transform hover:scale-105"
					>
						<div>
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
								Upcoming Events
							</h3>
							<p className="text-purple-200 text-sm">Conferences, workshops, and company events</p>
						</div>
						<ArrowRight className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors" />
					</Link>
				</div>
			</section>

			{/* Featured News Section */}
			<section className="w-full max-w-7xl mx-auto px-6 mb-16">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
						Featured Highlights
					</h2>
					<div className="w-20 h-1 bg-blue-400 mb-6"></div>
					<p className="text-blue-200 text-lg">Our most significant achievements and events</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{featuredEvents.map((item, idx) => {
						const IconComponent = categoryIcons[item.category] || Calendar;
						return (
							<div
								key={item.id}
								className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-blue-800/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
							>
								<div className="relative w-full h-[240px] overflow-hidden">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
										sizes="600px"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
											FEATURED
										</span>
									</div>
									<div className="absolute top-4 right-4">
										<span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
											{item.category}
										</span>
									</div>
								</div>
								<div className="p-8">
									<div className="flex items-center gap-4 text-blue-300 text-sm mb-4">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4" />
											<span>{item.date}</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4" />
											<span>{item.location}</span>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="w-4 h-4" />
											<span>{item.readTime}</span>
										</div>
									</div>
									<h3 className="text-2xl font-bold text-blue-100 mb-4 group-hover:text-white transition-colors">
										{item.title}
									</h3>
									<p className="text-blue-200 leading-relaxed">
										{item.desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* Filter and Search Section */}
			<section className="w-full max-w-7xl mx-auto px-6 mb-8">
				<div className="flex flex-col md:flex-row gap-6 items-center justify-between">
					<div className="flex flex-wrap gap-3">
						{categories.map((category) => (
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
							placeholder="Search news and events..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 pl-10 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
						/>
						<Filter className="w-4 h-4 text-blue-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
					</div>
				</div>
			</section>

			{/* All News & Events Grid */}
			<section className="w-full max-w-7xl mx-auto px-6 pb-16">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
						All News & Events
					</h2>
					<div className="w-20 h-1 bg-blue-400 mb-6"></div>
					<p className="text-blue-200 text-lg">
						Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'result' : 'results'}
						{selectedCategory !== "All" && ` in ${selectedCategory}`}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredEvents.map((item, idx) => {
						const IconComponent = categoryIcons[item.category] || Calendar;
						return (
							<div
								key={item.id}
								className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-blue-800/30 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
							>
								<div className="relative w-full h-[200px] overflow-hidden">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-500"
										sizes="400px"
									/>
									<div className="absolute top-3 right-3">
										<span className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
											{item.category}
										</span>
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-3 text-blue-300 text-xs mb-3">
										<div className="flex items-center gap-1">
											<Calendar className="w-3 h-3" />
											<span>{item.date}</span>
										</div>
										<div className="flex items-center gap-1">
											<Clock className="w-3 h-3" />
											<span>{item.readTime}</span>
										</div>
									</div>
									<h3 className="text-lg font-bold text-blue-100 mb-3 group-hover:text-white transition-colors leading-tight">
										{item.title}
									</h3>
									<div className="flex items-center gap-2 text-blue-300 text-xs mb-3">
										<MapPin className="w-3 h-3" />
										<span>{item.location}</span>
									</div>
									<p className="text-blue-200 text-sm leading-relaxed line-clamp-3">
										{item.desc}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				
				{filteredEvents.length === 0 && (
					<div className="text-center py-16">
						<div className="text-blue-300 mb-4">
							<Filter className="w-16 h-16 mx-auto opacity-50" />
						</div>
						<h3 className="text-xl font-semibold text-blue-200 mb-2">No results found</h3>
						<p className="text-blue-300">Try adjusting your search or filter criteria</p>
					</div>
				)}
			</section>

			{/* Call to Action Section */}
			<section className="w-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-16">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Stay Updated with Dharvix Tech
					</h2>
					<p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter to receive the latest news, event invitations, 
						and exclusive insights directly in your inbox.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email address"
							className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
						/>
						<button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
							Subscribe Now
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}