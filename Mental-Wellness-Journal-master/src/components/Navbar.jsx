import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-ms.png'; // Ensure you have a logo image in the assets folder

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
            
            <div className='flex item-center space-x-2'>
                <img src={logo} alt="Mindspace logo" className='h-10 w-10 rounded-lg overflow-hidden'   />
                <span className='text-2xl font-bold dark:text-white mt-1'>Mindspace</span>
            </div>

            <ul className='hidden md:flex space-x-7 text-gray-700 dark:text-gray-300 font-semibold text-lg font-family:"Arial", sans-serif'>
                <li className="hover:text-red-500 cursor-pointer text-white font-bold">Journal</li>
                <li className="hover:text-red-500 cursor-pointer text-white  font-bold">Mood</li>
                <li className="hover:text-red-500 cursor-pointer text-white font-bold ">Quotes</li>
            </ul>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className='ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition'
            >
                {darkMode ? "🌙" : "☀️"}
            </button>
        </nav>
    )
}

export default Navbar
