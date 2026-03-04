import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is your typical project timeline?",
            answer: "For most web applications, the timeline ranges from 2-4 weeks. Larger scale enterprise projects can take up to 3 months depending on complexity and testing requirements."
        },
        {
            question: "Which technologies do you specialize in?",
            answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js), but I'm also proficient with TypeScript, Firebase, and various styling frameworks like TailwindCSS and Styled Components."
        },
        {
            question: "Do you offer post-launch maintenance?",
            answer: "Yes, I offer monthly maintenance packages which include bug fixes, security updates, and performance optimizations to ensure your application remains healthy."
        },
        {
            question: "Can you redesign an existing website?",
            answer: "Absolutely! I can modernize your existing site with a fresh UI/UX while maintaining your brand identity and data."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="faq">
            <div className="container">
                <h1 className="sub-title">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
