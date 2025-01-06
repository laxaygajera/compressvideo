import React from "react";
import "./FAQSection.scss"; // Import the SCSS file for styles

const FAQSection = ({ faqs }) => {
    return (
        <div className="faq-section">
            <div className="text-center">
                <div className="title-row">
                   <h2><span>FAQs</span> About Our Compress Video Tool</h2>
                </div>
            </div>
            <div className="flex faq-wrap">
                {faqs.map((faq, index) => (
                    <div className="faq-box" key={index}>
                        <div className="faq-title">
                            <h4>{faq.question}</h4>
                        </div>
                        <div className="faq-text">
                            <p>{faq.answer}</p>
                        </div>                
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
