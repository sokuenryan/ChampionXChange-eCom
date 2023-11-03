import React from 'react';
import Header from '../../header/header.js';
import Footer from '../../../footer.js';

export default function About() {
  return (
    <div className='about-wrapper'>
      <Header />
      
      <div className='about-body'>
        <div className='about-img'>
          <img src={aboutImage} alt="About Image" />  
        </div>

        <div className='about-text-wrapper'>
          <div className='about-text-one'>
            <h1>Our Vision</h1>
            <h2>As a lifelong sports fan and witness to the magic that professional 
                  athletics has brought to the world we decided to create a space where fans from all 
                  over the world can buy, sell, and trade all professional garmets. We also wanted to make
                  atheltic gear accessable to family in need who want their children to be able to participate
                  in school athtletics. 
            </h2>
          </div>
          
          <div className='about-text-two'>
            <h1>Our Dedication to Improvement</h1>
            <h2>Over the years we have incorporated other world fanbase phenomenoms such as 
                WWE, Olympics and XGames, ESPN highlights of all major sports, up-to-date news and reports, and 
                winnable prize and trips to your favorite local sports stadiums and meet-n-greets exlusives with world 
                renowned famous sports athletes. We also are open to any suggestions, so head on over to 
                our contact page if you have any suggestions to update, improve or upgrade our site!
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}