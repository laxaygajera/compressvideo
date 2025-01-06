import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  const location = useLocation();

  const getMessage = (pathname) => {
    switch (pathname) {
      case '/pdf':
        return 'Pdf';
      case '/document':
        return 'Document';
      case '/video':
        return 'Video';
      case '/':
      default:
        return 'Image';
    }
  };

  return (
    <>
      <div className="banner">
      <h1>Compress <span>{getMessage(location.pathname)}</span></h1>
      <p>Compress photos , videos, pdfs and doc files online for free.
      maintaining high quality</p>
    </div>
    </>
  );
}
