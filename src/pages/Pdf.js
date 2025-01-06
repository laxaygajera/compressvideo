import React from "react";
import DragAndDropFileUpload from "../components/DragAndDropFileUpload";
import Banner from "../components/Banner";
import IconSection from "../components/IconSection/IconSection";
import InfoSection from "../components/InfoSection/InfoSection";
import FAQSection from "../components/FAQSection/FAQSection";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const Pdf = () => {
  

  const faqs = [
    {
      question: "What is video compression?",
      answer:
        "Video compression reduces the file size of a video by removing redundant or unnecessary data while maintaining as much quality as possible.",
    },
    {
      question: "Are my videos secure during the compression process?",
      answer:
        "Yes, we use secure servers, and all uploaded videos are automatically deleted after processing.",
    },
    {
      question: "Is the compress tool safe to use?",
      answer:
        "Compression might slightly reduce quality depending on the chosen settings. However, we optimize for the best balance between file size and quality.",
    },
    {
      question: "How much can I reduce the file size of a video?",
      answer:
        "The file size reduction depends on the video's original quality and the compression settings. In many cases, it can be reduced by up to 70%.",
    },
  ];


  return (
    <>
      <Banner message="Pdf" />
      <DragAndDropFileUpload />
      <div className="block-row">
       <div className="difference">
        <div  className="title-row">
          <h2 className="mb-4 text-left">Can anyone tell the difference?</h2>
          <p className="text-left"> Excellent question! Let me give you a side-by-side comparison. Below are two photos of my cousin. The left image is saved as a 24-bit PNG directly from Adobe Photoshop. On the right is the same image processed by TinyPNG. Spot any difference? </p>
        </div>
        
        <div className="comparison-container row">
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/Difference_photo.png"
              alt="Original image"
              className="img-fluid rounded"
            />
            <h4>Original image</h4>
            <p>Size: 152MB</p>
          </div>
          <div className="col-md-6 text-center image-div">
            <img
              src="/images/Difference_photo.png"
              alt="Compressed image"
              className="img-fluid rounded"
            />
            <h4 className="text-right">Compressed image</h4>
            <p className="text-right">Size: 80MB</p>
          </div>
        </div>
       </div>
      </div>

      <IconSection />

      <InfoSection />

      <FAQSection faqs={faqs} />

      <ImageSlider />

    </>
  );
}

export default Pdf;
