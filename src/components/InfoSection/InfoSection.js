import React from "react";
import "./InfoSection.scss";

const InfoSection = () => {
    return (
        <div className="container p-0">
            <div className="info-section">
                {/* First Item */}
                <div className="image-box">
                    <img
                        src="/images/JPG.png"
                        alt="What is JPG? Info"
                        className="img-fluid setimg"
                    />
                </div>
                <div className="image-box image-box-one">
                    <h5>What is JPG?</h5>
                    <p>
                        A JPG (or JPEG) is a commonly used digital image file
                        format that stands for Joint Photographic Experts Group, the
                        organization that created the standard. It is widely used.
                        JPEG can achieve compression ratios of 10:1 to 20:1 without
                        noticeable loss in quality for typical use cases.JPEG uses 
                        lossy compression, meaning that some image data is permanently
                        discarded to reduce file size. JPEGs’ portability is one of 
                        their best features. JPEGs can be compressed. So they’re often
                        used to transport images over the internet and between computers.
                        But there are also advantages when it comes to printing JPEGs.
                    </p>
                </div>

                {/* Second Item */}
                <div className="image-box">
                    <h5>What is PNG?</h5>
                    <p>
                        PNG is a lossless image format that supports transparency
                        and is widely used for web graphics.PNG files are ‘lossless.’ 
                        This means they have a fixed number of pixels, and do not 
                        lose any quality when they are compressed.PNG files are smaller 
                        than JPEGs, meaning they take up less space and download faster.
                        PNG files do not lose any image quality when they are compressed,
                        making them a good choice for storing high-quality images.many downside
                        of PNG Images like PNGs do not support animation,PNGs can be difficult 
                        to edit,While PNGs can be transparent, but this transparency can 
                        sometimes result in artefacts around the edges of the image.
    
                    </p>
                </div>
                <div className="image-box">
                    <img
                        src="/images/png.png"
                        alt="What is PNG? Info"
                        className="img-fluid setimg"
                    />
                </div>

                {/* Third Item */}
                <div className="image-box">
                    <img
                        src="/images/doc.png"
                        alt="What is DOC? Info"
                        className="img-fluid setimg"
                    />
                </div>
                <div className="image-box image-box-five">
                    <h5>What is DOC?</h5>
                    <p>
                        A DOC file is a Microsoft Word document commonly used for
                        creating and editing text documents.many diffrent uses of document
                        like Supports text styling, such as bold, italics, underlining, and
                        font customization.also Allows for structured documents with headings, 
                        tables, and bullet points.you can also embedded object like images,
                        charts,hyperlinks,non -text elements.many advantages of doc file 
                        like Supported by numerous applications and platforms,Offers advanced
                        tools for creating professional documents.Easy to modify text, format, 
                        and embedded objects.

                    </p>
                </div>

                {/* Fourth Item */}
                <div className="image-box">
                    <h5>What is PDF?</h5>
                    <p>
                        PDF stands for "Portable Document Format" PDF documents 
                        can be opened and read exactly how the document creator
                        intended PDF is a file format used to present documents 
                        independent of software, hardware, or operating systems.
                        main advantages of PDF file is the maintain original
                        document structure—including text, images, vector graphics,
                        and other elements—so you can zoom in or out of the content
                        without loss of quality.also its Look great and consistent
                        everywhere. 
                    </p>
                </div>
                <div className="image-box">
                    <img
                        src="/images/pdf.png"
                        alt="What is PDF? Info"
                        className="img-fluid setimg"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
