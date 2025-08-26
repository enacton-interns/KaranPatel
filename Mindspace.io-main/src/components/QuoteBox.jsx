import axios from 'axios';
import React, { useState, useEffect } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/quotes/random');
        setQuote(res.data.quote);
        setAuthor(res.data.author);
      } catch (error) {
        console.log('Error while fetching Quote:', error);
        setQuote('Keep going. Everything you need will come to you.');
        setAuthor('Unknown');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-white text-center transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in">
       
        <svg
          className="w-12 h-12 mx-auto mb-4 text-white opacity-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.17 8A5.001 5.001 0 0012 3a5.001 5.001 0 00-4.83 6H3v6h6V8H7.17zm10 0A5.001 5.001 0 0022 3a5.001 5.001 0 00-4.83 6H13v6h6V8h-1.83z" />
        </svg>

        <p className="text-2xl md:text-3xl font-light italic leading-relaxed tracking-wide">
          “{quote}”
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium">— {author}</p>

      </div>
    </div>
  );
};

export default QuoteBox;






// import axios from 'axios'
// import React, { useState, useEffect } from 'react'

// const QuoteBox = () => {
//   const [quote, setQuote] = useState('')
//   const [author, setAuthor] = useState('')

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {

//         const res = await axios.get('https://dummyjson.com/quotes/random')
//         setQuote(res.data.quote)
//         setAuthor(res.data.author)

//       } catch (error) {

//         console.log('Error while fetching Quote : ', error)
//         setQuote('Keep going. Everything you need will come to you.')
//         setAuthor('-Unknown')
//       }
//     }

//     fetchQuote()
//   }, [])
//   return (
//     <div className='bg-gradient-to-r from-purple-800 to-indigo-800 text-white p-10 rounded-xl shadow-md max-w-4xl mx-auto text-center my-6 animate-fade-in '>
//       <p className='text-xl italic font-mono font-semibold'>"{quote}"</p>
//       <p className='mt-4 text-xl text-gray-300 font-semibold'>- {author}</p>
//     </div>
//   )
// }

// export default QuoteBox
