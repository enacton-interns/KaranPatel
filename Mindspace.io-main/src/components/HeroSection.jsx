import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-ms1.png'; // Ensure you have a logo image in the assets folder

const bgImages = [
    '/src/assets/bgr1.jpg',
    '/src/assets/bgr2.jpg',
    '/src/assets/bgr3.jpg',
    '/src/assets/bgr4.jpg',
    '/src/assets/bgr5.jpg',
    '/src/assets/bgr6.jpg',
    '/src/assets/bgr7.jpg',
    '/src/assets/bgr8.jpg',
    '/src/assets/bgr9.jpg',
    '/src/assets/bgr10.jpg',
    
]

const HeroSection = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 5000) // Change image every 4 seconds

    }, []);

    return (
        <section 
        className=" relative min-h-screen flex align-center"
        style={{
            backgroundImage: `url(${bgImages[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >

            {/* Dark overlay */}
             <div className="absolute inset-0 bg-black bg-opacity-60"></div>


            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 text-center md:text-left ">

                {/* Left: Text Content */}
                <div className="space-y-6 text-white z-10">
                    <h1 className="lg:text-5xl text-5xl md:text-4xl font-bold">
                        Welcome to Mindspace
                    </h1>
                    <p className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
                        Track your mood, write your thoughts, and reflect on your wellness journey — all in one peaceful space.
                    </p>
                    <button onClick={() => window.location.href = '/journal'} className="bg-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-700 font-bold transition">
                        Start Journaling
                    </button>
                </div>

                {/* Right: Optional Image */}
                <div className="z-10">
                    <img
                        src={logo} // You can replace with a local image
                        alt="Mental wellness illustration"
                        className="w-60 md:w-72 lg:w-80 border rounded-lg shadow-lg "
                        //style={{ objectPosition: "center", clipPath: "inset(17% round 8px)" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
