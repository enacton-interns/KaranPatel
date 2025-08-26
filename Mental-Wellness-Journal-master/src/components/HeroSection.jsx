import React from 'react'
import logo from '../assets/logo-ms.png'; // Ensure you have a logo image in the assets folder

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

                {/* Left: Text Content */}
                <div className="text-center md:text-left space-y-6 md:max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-white leading-tight">
                        Welcome to Mindspace
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg ">
                        Track your mood, write your thoughts, and reflect on your wellness journey — all in one peaceful space.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 font-bold transition">
                        Start Journaling
                    </button>
                </div>

                {/* Right: Optional Image */}
                <div className="mt-10 md:mt-0">
                    <img
                        src={logo} // You can replace with a local image
                        alt="Mental wellness illustration"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
