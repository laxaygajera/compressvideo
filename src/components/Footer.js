import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='flex'>
          
          <div className='col'>
            
            <h4>Compressvideo</h4>
          <div className='address-block'>
            <p>
              <img src="/images/locate.png" alt="" />
            <span> 446,Leonard Square, Nr.Apple Square, Yogi Chowk, Surat, Gujarat 395010</span>
            </p>
            <p><img src="images/email.png" alt="" />
              <span> <Link href="mainto:samratapps007@gmail.com">samratapps007@gmail.com</Link></span>
            </p>
          </div>
          </div>
          <div className='col'>
          <h4>Useful link</h4>
          <ul className='link-area'>
              <li>
                <Link rel="" type="" href="">Home</Link>
              </li>
              <li>
                <Link rel="" type="" href="">About us</Link>
              </li>
              <li>
                <Link rel="" type="" href="">Contact us</Link>
              </li>
              <li>
                <Link rel="" type="" href="">Policy</Link>
              </li>
            </ul>
            </div>
            <div className='col'>
              <h4>
              Compress info
              </h4>
            <ul className='link-area'>
            <li>
                <Link rel="" type="" href="">Image</Link>
              </li>
              <li>
                <Link rel="" type="" href="">Video</Link>
              </li>
              <li>
                <Link rel="" type="" href="">Pdf</Link>
              </li>
              <li>
                <Link rel="" type="" href="">Document</Link>
              </li>
            </ul>
        </div> 
        </div> 
      </div>
    </footer>
  );
}
