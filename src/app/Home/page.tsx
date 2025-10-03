"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import boy_standing from "@/../public/boy_standing.png";


const testimonials = [
    {
        name: "Alex Chen",
        role: "Bespoke Tailor",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "I used to spend ages taking manual measurements. Now, I just snap a photo of my client, and DataCapture gives me all the key body measurements instantly. It has revolutionized my fitting process, saving me time and improving accuracy.",
    },
    {
        name: "Sophia Williams",
        role: "Fashion Designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        quote:
            "DataCapture makes my workflow seamless. I can focus on creativity while the platform takes care of precise measurements.",
    },
    {
        name: "David Johnson",
        role: "Fitness Coach",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        quote:
            "Tracking client progress has never been easier. The accuracy and speed save me hours every week.",
    },
];

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-700">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
                            ⛁
                        </div>
                        <span className="text-xl font-bold text-white">DataCapture</span>
                    </div>
                    <nav className="flex items-center space-x-6 text-white">
                        <Link href="#features">Features</Link>
                        <Link
                            href="#"
                            className="bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700"
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <main className="flex-grow">
                <section className="bg-gray-200 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Effortless Data Collection is Here
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        Create beautiful forms, collect data seamlessly, and manage your
                        responses without writing a single line of code.
                    </p>
                    <Link
                        href="#"
                        className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition"
                    >
                        Create Your First Form - It&apos;s Free
                    </Link>
                </section>

                {/* Features */}
                <section id="features" className="bg-green-50 py-16">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Powerful Features, Simple Interface
                        </h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Everything you need to go from question to insight, faster than
                            ever.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Intuitive Form Builder",
                                    desc: "Drag & drop your way to a perfect form. Choose from various field types to get the exact data you need.",
                                    icon: "📝",
                                },
                                {
                                    title: "Response Dashboard",
                                    desc: "View all submissions in a clean, searchable table. Filter, sort, and find responses in an instant.",
                                    icon: "📊",
                                },
                                {
                                    title: "AI Image Analysis",
                                    desc: "Upload a photo to automatically extract body measurements. Perfect for tailors, fitness, and more.",
                                    icon: "🖼️",
                                },
                                {
                                    title: "Secure Data Storage",
                                    desc: "Your data is stored securely in the cloud, protected with industry-standard encryption.",
                                    icon: "🛡️",
                                },
                                {
                                    title: "Easy Data Export",
                                    desc: "Download your data in CSV or JSON formats to use with your favorite analysis tools.",
                                    icon: "⬇️",
                                },
                                {
                                    title: "Shareable Links",
                                    desc: "Get a unique URL for every form. Share it anywhere to start collecting responses immediately.",
                                    icon: "🔗",
                                },
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                                >
                                    <div className="text-4xl mb-4 text-red-600">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="bg-blue-700 text-white py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            What Our Users Say
                        </h2>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{clickable: true}}
                            autoplay={{delay: 4000}}
                            className="pb-12"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-blue-600 rounded-xl p-8 shadow-lg">
                                        <p className="mb-6 text-lg italic">“{t.quote}”</p>
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={60}
                                                height={60}
                                                className="rounded-full border-2 border-white"
                                            />
                                            <div>
                                                <p className="font-semibold">{t.name}</p>
                                                <p className="text-sm opacity-80">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* Measurement Card */}
                <section className="bg-blue-100 py-16">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <Image
                                src={boy_standing}
                                alt="Measurement"
                                width={800}
                                height={400}
                                className="rounded-md mb-6"
                            />
                            <h3 className="text-lg font-semibold mb-4">Extracted Measurements</h3>
                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                <p>Height: 175 cm</p>
                                <p>Waist: 82 cm</p>
                                <p>Arm Length: 60 cm</p>
                                <p>Inseam: 80 cm</p>
                                <p>Chest: 98 cm</p>
                                <p>Shoulders: 45 cm</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p>© 2024 DataCapture. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
