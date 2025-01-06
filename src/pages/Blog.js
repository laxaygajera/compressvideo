import React from 'react';
import "../scss/blogs.scss";

const Blog = () => {
  return (
    <>
      <div>
        <div className="mainImage">
          <img src="/images/Photo.jpg" alt="main blog image" width={200} height={200} />

          <div className="mainImage_Contant">
            <p>Travel Blog</p>
            <h2>Dubai: A Journey Through Luxury, Culture, and Adventure</h2>
            <p>Best Place List page here</p>

          </div>
        </div>

        <section class="content">
          <div>
            <p>
              Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern 
              architecture and a lively nightlife scene. Burj Khalifa,
              an 830m-tall towerv dominates the skyscraper-filled skyline.Dubai, the sparkling gem of the Middle 
              East, is a city that seamlessly blends tradition with modernity. Whether you're chasing luxurious 
              experiences, exploring cultural landmarks, or embarking on thrilling adventures, Dubai offers 
              something for everyone. Here’s your guide to uncovering the magic of this vibrant city.</p>
          </div>

          <div class="contentBox">
            <div class="content1">
              <img src="/images/pdf.png" alt="" />
            
              <p><center><b>Burj Khalifa</b></center>
              <br></br>
              
              Dubai, the sparkling gem of the Middle East, is a city that seamlessly blends tradition 
              with modernity. Whether you're chasing luxurious experiences, exploring cultural landmarks, 
              or embarking on thrilling adventures, Dubai offers something for everyone. Here’s your guide 
              to uncovering the magic of this vibrant city.</p>
            </div>
            

            <div class="content1">
              <img src="/images/Png.png" alt="" />
              <center><b>Palm Jumeirah</b></center>
              <br></br>
            
              <p>Dubai, the sparkling gem of the Middle East, is a city that seamlessly blends tradition 
              with modernity. Whether you're chasing luxurious experiences, exploring cultural landmarks, 
              or embarking on thrilling adventures, Dubai offers something for everyone. Here’s your guide 
              to uncovering the magic of this vibrant city. Iconic Landmarks that you can see in below</p>
            </div>

            <div class="content1">
              <img src="/images/Jpg.png" alt="" />
              <center><b>Dubai Frame</b></center>
              <br></br>
          
              <p>Dubai, the sparkling gem of the Middle East, is a city that seamlessly blends tradition 
              with modernity. Whether you're chasing luxurious experiences, exploring cultural landmarks, 
              or embarking on thrilling adventures, Dubai offers something for everyone. Here’s your guide 
              to uncovering the magic of this vibrant city.</p>
            </div>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="/images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>

        <section class="panel">
          <img src="/images/Slider_Image_two.png" alt="" />
          <div class="Pcontant">
            <div class="Pcontant_user">
              <img src="/images/Difference_photo.png"
                alt="" />
              <div>
                <p><strong>Admin</strong></p>
                <p><small>Mar 25, 2023 -1 min</small></p>
              </div>
            </div>
            <h2>The Girl from Ipanema</h2>
            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
              your audience to continue reading In exercitation duis consequat nulla id esse laboris. Excepteur do est velit laborum sunt nisi ex minim proident aliqua quis et. Elit excepteur nostrud do duis officia pariatur non reprehenderit reprehenderit duis sit sit. Exercitation pariatur sunt excepteur fugiat eiusmod consectetur ex dolor reprehenderit ullamco minim ut cupidatat. </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;

