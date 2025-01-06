import React from "react";
import "./IconSection.scss";

const IconSection = () => {
    const icons = [
        {
            src: "/images/photo.svg",
            alt: "Photo Icon",
            title: "Photo",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
        {
            src: "/images/video.svg",
            alt: "Video Icon",
            title: "Video",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
        {
            src: "/images/pdf.svg",
            alt: "PDF Icon",
            title: "PDF",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
        {
            src: "/images/doc.svg",
            alt: "Document Icon",
            title: "Document",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
        {
            src: "/images/fast.svg",
            alt: "Fast Compress Icon",
            title: "Fast Compress",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
        {
            src: "/images/secure.svg",
            alt: "Security Icon",
            title: "Security",
            description: "Excellent question! Let me give you a side by side comparison.",
        },
    ];

    return (
        <div className="block-row">
            <div className="icon-section ">
                <div className="row g-4" style={{ gap: '20px' }}>
                    {icons.map((icon, index) => (
                        <div key={index} className="col-md-4 col-sm-6">
                            <div className="icon-box">
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="img-fluid seticon mb-3"
                                />
                                <h3>{icon.title}</h3>
                                <p>{icon.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconSection;
