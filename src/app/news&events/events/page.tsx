"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Users, MapPin, Clock, ArrowRight, Filter, Globe, Ticket, Star, ChevronRight } from "lucide-react";

// Events-specific data
const eventsData = [
	{
		id: 1,
		image: "/images/contact/contact.jpg",
		title: "Dharvix Tech at AU Tech Expo 2024",
		date: "June 10, 2024",
		time: "09:00 AM - 06:00 PM",
		category: "Conference",
		location: "Andhra University Convention Center, Visakhapatnam",
		desc: "Join us at the prestigious Andhra University Tech Expo where we'll showcase our latest IoT solutions, AI-powered automation systems, and sustainable technology innovations. Network with industry leaders and discover the future of technology.",
		status: "Completed",
		attendees: 500,
		featured: true,
		registrationUrl: "#",
		highlights: ["Product Demonstrations", "Networking Sessions", "Industry Panels", "Awards Ceremony"],
		speaker: "Dr. Rajesh Kumar, CTO"
	},
	{
		id: 2,
		image: "/images/contact/contact.jpg",
		title: "AI & Machine Learning Workshop",
		date: "July 15, 2024",
		time: "10:00 AM - 04:00 PM",
		category: "Workshop",
		location: "Dharvix Tech Campus, Visakhapatnam",
		desc: "Hands-on workshop covering practical applications of AI and Machine Learning in business automation. Perfect for developers, business analysts, and technology enthusiasts looking to enhance their skills.",
		status: "Upcoming",
		attendees: 50,
		featured: true,
		registrationUrl: "#",
		highlights: ["Hands-on Coding", "Real-world Projects", "Expert Mentorship", "Certificate of Completion"],
		speaker: "AI Research Team"
	},
	{
		id: 3,
		image: "/images/contact/contact.jpg",
		title: "Smart City Solutions Summit",
		date: "August 20, 2024",
		time: "09:30 AM - 05:00 PM",
		category: "Summit",
		location: "Visakhapatnam Convention Center",
		desc: "A comprehensive summit focusing on smart city infrastructure, IoT implementations, and sustainable urban development. Featuring government officials, industry experts, and technology innovators.",
		status: "Upcoming",
		attendees: 300,
		featured: false,
		registrationUrl: "#",
		highlights: ["Government Partnerships", "Smart Infrastructure", "Sustainability Focus", "Policy Discussions"],
		speaker: "Municipal Development Team"
	},
	{
		id: 4,
		image: "/images/contact/contact.jpg",
		title: "Annual Employee Meet 2024",
		date: "September 5, 2024",
		time: "06:00 PM - 10:00 PM",
		category: "Company Event",
		location: "Beach Resort, Visakhapatnam",
		desc: "Our annual company gathering celebrating achievements, recognizing outstanding performers, and setting goals for the coming year. An evening of celebration, entertainment, and team bonding.",
		status: "Upcoming",
		attendees: 200,
		featured: false,
		registrationUrl: "#",
		highlights: ["Awards Ceremony", "Cultural Programs", "Team Activities", "Gala Dinner"],
		speaker: "Leadership Team"
	},
	{
		id: 5,
		image: "/images/contact/contact.jpg",
		title: "Startup Pitch Competition",
		date: "October 12, 2024",
		time: "11:00 AM - 06:00 PM",
		category: "Competition",
		location: "Innovation Hub, GITAM University",
		desc: "Supporting the next generation of entrepreneurs with our annual startup pitch competition. Featuring mentorship sessions, investor meetings, and substantial prize money for winners.",
		status: "Upcoming",
		attendees: 150,
		featured: false,
		registrationUrl: "#",
		highlights: ["Investor Panel", "Mentorship Sessions", "Prize Money", "Networking Opportunities"],
		speaker: "Entrepreneurship Cell"
	},
	{
		id: 6,
		image: "/images/contact/contact.jpg",
		title: "Cybersecurity Awareness Seminar",
		date: "November 8, 2024",
		time: "02:00 PM - 05:00 PM",
		category: "Seminar",
		location: "Online & Dharvix Office",
		desc: "Essential cybersecurity practices for businesses and individuals. Learn about latest threats, protection strategies, and compliance requirements in today's digital landscape.",
		status: "Upcoming",
		attendees: 100,
		featured: false,
		registrationUrl: "#",
		highlights: ["Threat Analysis", "Protection Strategies", "Compliance Guidelines", "Q&A Session"],
		speaker: "Cybersecurity Team"
	}
];

const eventCategories = ["All", "Conference", "Workshop", "Summit", "Company Event", "Competition", "Seminar"];
const eventStatuses = ["All", "Upcoming", "Completed", "Cancelled"];

const categoryColors = {
	"Conference": "bg-blue-600",
	"Workshop": "bg-green-600",
	"Summit": "bg-purple-600",
	"Company Event": "bg-orange-600",
	"Competition": "bg-red-600",
	"Seminar": "bg-teal-600"
};

const statusColors = {
	"Upcoming": "text-green-400 bg-green-400/20",
	"Completed": "text-blue-400 bg-blue-400/20",
	"Cancelled": "text-red-400 bg-red-400/20"
};

export default function EventsPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedStatus, setSelectedStatus] = useState("All");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredEvents = eventsData.filter(event => {
		const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
		const matchesStatus = selectedStatus === "All" || event.status === selectedStatus;
		const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  event.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  event.location.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesStatus && matchesSearch;
	});

	const featuredEvents = eventsData.filter(event => event.featured);
	const upcomingEvents = eventsData.filter(event => event.status === "Upcoming");

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
			{/* Hero Section */}
			<section className="relative flex items-stretch min-h-[420px] md:min-h-[520px] w-full font-sans overflow-hidden">
				<Image
					src="/images/contact/contact.jpg"
					alt="Company Events Hero"
					fill
					className="object-cover w-full h-full absolute inset-0 z-0"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/80 to-transparent z-5"></div>
				<div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 text-white max-w-4xl">
					<div className="animate-in slide-in-from-left duration-700">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							Company <span className="text-purple-400">Events</span>
						</h1>
						<div className="w-24 h-1 bg-purple-400 mb-8"></div>
						<p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-8 text-purple-100">
							Join us at conferences, workshops, seminars, and company celebrations. 
							Connect, learn, and grow with the Dharvix Tech community.
						</p>
						<div className="flex flex-wrap gap-4 text-sm md:text-base">
							<div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Calendar className="w-4 h-4" />
								<span>Conferences & Summits</span>
							</div>
							<div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Users className="w-4 h-4" />
								<span>Workshops & Training</span>
							</div>
							<div className="flex items-center gap-2 bg-purple-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
								<Globe className="w-4 h-4" />
								<span>Community Events</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Navigation Breadcrumb */}
			<section className="w-full max-w-7xl mx-auto px-6 py-6">
				<nav className="flex items-center space-x-2 text-purple-300">
					<Link href="/" className="hover:text-white transition-colors">Home</Link>
					<span>/</span>
					<Link href="/news-events" className="hover:text-white transition-colors">News & Events</Link>
					<span>/</span>
					<span className="text-white">Events</span>
				</nav>
			</section>

			{/* Quick Stats */}
			<section className="w-full max-w-7xl mx-auto px-6 mb-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
					<div className="bg-gradient-to-br from-purple-900/90 to-purple-800/90 border border-purple-700 rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-white mb-2">{upcomingEvents.length}</div>
						<div className="text-purple-200 text-sm">Upcoming Events</div>
					</div>
					<div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 border border-blue-700 rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-white mb-2">1000+</div>
						<div className="text-blue-200 text-sm">Total Attendees</div>
					</div>
					<div className="bg-gradient-to-br from-green-900/90 to-green-800/90 border border-green-700 rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-white mb-2">25</div>
						<div className="text-green-200 text-sm">Events This Year</div>
					</div>
					<div className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 border border-orange-700 rounded-xl p-6 text-center">
						<div className="text-3xl font-bold text-white mb-2">98%</div>
						<div className="text-orange-200 text-sm">Satisfaction Rate</div>
					</div>
				</div>
			</section>

			{/* Featured Events Section */}
			<section className="w-full max-w-7xl mx-auto px-6 mb-16">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-4">
						Featured Events
					</h2>
					<div className="w-20 h-1 bg-purple-400 mb-6"></div>
					<p className="text-purple-200 text-lg">Don't miss these highlighted events and experiences</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{featuredEvents.map((event, idx) => (
						<article
							key={event.id}
							className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-purple-800/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
						>
							<div className="relative w-full h-[280px] overflow-hidden">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="600px"
								/>
								<div className="absolute top-4 left-4">
									<span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
										FEATURED
									</span>
								</div>
								<div className="absolute top-4 right-4">
									<span className={`${categoryColors[event.category]} text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm`}>
										{event.category}
									</span>
								</div>
								<div className="absolute bottom-4 left-4">
									<span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[event.status]}`}>
										{event.status}
									</span>
								</div>
								<div className="absolute bottom-4 right-4">
									<div className="flex items-center gap-2 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
										<Users className="w-3 h-3" />
										<span>{event.attendees}</span>
									</div>
								</div>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-4 text-purple-300 text-sm mb-4">
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="w-4 h-4" />
										<span>{event.time}</span>
									</div>
								</div>
								<h3 className="text-2xl font-bold text-purple-100 mb-4 group-hover:text-white transition-colors">
									{event.title}
								</h3>
								<div className="flex items-center gap-2 text-purple-300 text-sm mb-4">
									<MapPin className="w-4 h-4" />
									<span>{event.location}</span>
								</div>
								<p className="text-purple-200 leading-relaxed mb-6">
									{event.desc}
								</p>
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-purple-100 mb-3">Event Highlights:</h4>
									<div className="grid grid-cols-2 gap-2">
										{event.highlights.map((highlight, i) => (
											<div key={i} className="flex items-center gap-2 text-purple-300 text-sm">
												<Star className="w-3 h-3 text-purple-400" />
												<span>{highlight}</span>
											</div>
										))}
									</div>
								</div>
								<div className="flex items-center justify-between">
									<div className="text-purple-300 text-sm">
										<span>Speaker: {event.speaker}</span>
									</div>
									{event.status === "Upcoming" && (
										<button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
											Register Now
										</button>
									)}
									{event.status === "Completed" && (
										<button className="text-purple-400 hover:text-white transition-colors font-medium">
											View Gallery →
										</button>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Filter and Search Section */}
			<section className="w-full max-w-7xl mx-auto px-6 mb-8">
				<div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex flex-wrap gap-3">
							<span className="text-purple-200 text-sm font-medium self-center">Category:</span>
							{eventCategories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
										selectedCategory === category
											? "bg-purple-600 text-white shadow-lg"
											: "bg-slate-800/80 text-purple-200 hover:bg-slate-700/80 border border-slate-700"
									}`}
								>
									{category}
								</button>
							))}
						</div>
						<div className="flex flex-wrap gap-3">
							<span className="text-purple-200 text-sm font-medium self-center">Status:</span>
							{eventStatuses.map((status) => (
								<button
									key={status}
									onClick={() => setSelectedStatus(status)}
									className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
										selectedStatus === status
											? "bg-purple-600 text-white shadow-lg"
											: "bg-slate-800/80 text-purple-200 hover:bg-slate-700/80 border border-slate-700"
									}`}
								>
									{status}
								</button>
							))}
						</div>
					</div>
					<div className="relative">
						<input
							type="text"
							placeholder="Search events..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="bg-slate-800/80 border border-slate-700 rounded-full px-4 py-2 pl-10 text-purple-100 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
						/>
						<Filter className="w-4 h-4 text-purple-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
					</div>
				</div>
			</section>

			{/* All Events Grid */}
			<section className="w-full max-w-7xl mx-auto px-6 pb-16">
				<div className="mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-purple-100 mb-4">
						All Events
					</h2>
					<div className="w-20 h-1 bg-purple-400 mb-6"></div>
					<p className="text-purple-200 text-lg">
						Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
						{selectedCategory !== "All" && ` in ${selectedCategory}`}
						{selectedStatus !== "All" && ` • ${selectedStatus}`}
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredEvents.map((event, idx) => (
						<article
							key={event.id}
							className="group bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-purple-800/30 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
						>
							<div className="relative w-full h-[200px] overflow-hidden">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="400px"
								/>
								<div className="absolute top-3 left-3">
									<span className={`${categoryColors[event.category]} text-white px-2 py-1 rounded text-xs backdrop-blur-sm`}>
										{event.category}
									</span>
								</div>
								<div className="absolute top-3 right-3">
									<span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[event.status]}`}>
										{event.status}
									</span>
								</div>
								<div className="absolute bottom-3 right-3">
									<div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
										<Users className="w-3 h-3" />
										<span>{event.attendees}</span>
									</div>
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 text-purple-300 text-xs mb-3">
									<div className="flex items-center gap-1">
										<Calendar className="w-3 h-3" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										<span>{event.time}</span>
									</div>
								</div>
								<h3 className="text-lg font-bold text-purple-100 mb-3 group-hover:text-white transition-colors leading-tight">
									{event.title}
								</h3>
								<div className="flex items-center gap-2 text-purple-300 text-xs mb-3">
									<MapPin className="w-3 h-3" />
									<span className="line-clamp-1">{event.location}</span>
								</div>
								<p className="text-purple-200 text-sm leading-relaxed line-clamp-3 mb-4">
									{event.desc}
								</p>
								<div className="mb-4">
									<p className="text-purple-300 text-xs mb-2">Speaker: {event.speaker}</p>
									<div className="flex flex-wrap gap-1">
										{event.highlights.slice(0, 2).map((highlight, i) => (
											<span key={i} className="bg-purple-900/50 text-purple-200 px-2 py-1 rounded text-xs">
												{highlight}
											</span>
										))}
										{event.highlights.length > 2 && (
											<span className="text-purple-400 text-xs self-center">
												+{event.highlights.length - 2} more
											</span>
										)}
									</div>
								</div>
								<div className="flex items-center justify-between">
									{event.status === "Upcoming" && (
										<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition-colors duration-200 font-medium">
											Register
										</button>
									)}
									{event.status === "Completed" && (
										<button className="text-purple-400 hover:text-white transition-colors text-sm font-medium">
											View Details
										</button>
									)}
									<ChevronRight className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
								</div>
							</div>
						</article>
					))}
				</div>
				
				{filteredEvents.length === 0 && (
					<div className="text-center py-16">
						<div className="text-purple-300 mb-4">
							<Calendar className="w-16 h-16 mx-auto opacity-50" />
						</div>
						<h3 className="text-xl font-semibold text-purple-200 mb-2">No events found</h3>
						<p className="text-purple-300">Try adjusting your search or filter criteria</p>
					</div>
				)}
			</section>

			{/* Event Registration CTA */}
			<section className="w-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Never Miss an Event
					</h2>
					<p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
						Subscribe to our event notifications and be the first to know about upcoming workshops, 
						conferences, and exclusive company events. Join our community of tech enthusiasts!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
						<input
							type="email"
							placeholder="Enter your email address"
							className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
						/>
						<button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
							Subscribe
						</button>
					</div>
					<div className="flex flex-wrap gap-4 justify-center text-sm">
						<div className="flex items-center gap-2 text-purple-200">
							<Ticket className="w-4 h-4" />
							<span>Early Bird Access</span>
						</div>
						<div className="flex items-center gap-2 text-purple-200">
							<Globe className="w-4 h-4" />
							<span>Exclusive Invites</span>
						</div>
						<div className="flex items-center gap-2 text-purple-200">
							<Users className="w-4 h-4" />
							<span>Community Updates</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}