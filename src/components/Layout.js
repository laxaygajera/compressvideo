import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Layout({ children }) {
  const addStyle = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    padding: '0',
    textAlign: 'center',
    width: '160px',
    height: '600px',
  };
  return (
    <div className="wrapper">
      <Header />
      <main id='content-area' className='flex'>
        <div className='container'>
          <iframe  className='add-block' style={addStyle} src="https://www.healthyads.com/wp-content/webp-express/webp-images/uploads/2019/01/160x600-skyscraper-fitibit.jpg.webp"></iframe>
          <div className='content-area'>{children}</div>
          <iframe className='add-block' style={addStyle} src="https://www.healthyads.com/wp-content/webp-express/webp-images/uploads/2019/01/160x600-skyscraper-fitibit.jpg.webp"></iframe>
          </div>
      </main>
      <Footer />
    </div>
  );
}
