import React, {useState, useEffect} from 'react'

const faqs = [
  {
    question: "What is Mindspace?",
    answer: "Mindspace is a digital journal app designed to track your thoughts, moods, and personal growth through journaling and visual insights.",
  },
  {
    question: "Is my data saved permanently?",
    answer: "All data is stored in your browser's local storage. You can access it as long as you don’t clear your browser data.",
  },
  {
    question: "How can I use the mood tracker?",
    answer: "Just log your mood with each journal entry. The app will automatically generate insights and mood charts based on your data.",
  },
  {
    question: "Can I switch themes?",
    answer: "Yes! There’s a dark/light theme toggle in the navbar that updates and saves your preference.",
  }
];

const FAQSection = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    <section className='max-w-4xl mx-auto p-8'>
        <h2 className='text-3xl font-bold text-center text-black dark:text-white mb-6 ' >Frequently Asked Questions</h2>

        <div className='space-y-4 mt-4'>
            {faqs.map((faq,index) => (
                <div key={index} className='bg-white dark:bg-gray-800 rounded shadow transition-all'>

                    <button
                     className='w-full text-left px-4 py-3 font-semibold  text-blue-900 dark:text-white flex justify-between items-center'
                     onClick={() => toggle(index)}
                    >
                        {faq.question}
                        <span className='text-xl'>{openIndex === index ? '-' : '+' }</span>
                    </button>

                    <div className={`px-4 overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-40 py-2' : 'max-h-0'} `}>
                        <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FAQSection