import React from "react";

const testimonials = [
    {
        name: "Alice Johnson",
        title: "Pet Owner",
        quote:
            "Mortpet made finding the perfect vet so easy! The service was fast and reliable.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Brian Smith",
        title: "Dog Trainer",
        quote:
            "I recommend Mortpet to all my clients. The platform is user-friendly and trustworthy.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Carla Gomez",
        title: "Cat Lover",
        quote:
            "Thanks to Mortpet, my cat received the best care possible. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

export default function TestimonialsPage() {
    return (
        <main className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Testimonials</h1>
            <div className="space-y-8">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow p-6 flex items-center space-x-6"
                    >
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg italic mb-2">"{t.quote}"</p>
                            <div className="font-semibold">{t.name}</div>
                            <div className="text-sm text-gray-500">{t.title}</div>
                        </div>
                    </div>
                    // I added a comment
                ))}
            </div>
        </main>
    );
}