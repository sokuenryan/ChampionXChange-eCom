import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaUserAlt, FaClipboard } from 'react-icons/fa';

import Menu from './header/navbar/menu.js';
import Navbar from '../home/header/navbar/navbar.js';

import SearchBar from '../home/header/searchbar.js';
import Carousel, { CarouselItem } from './carousel.js';

import logoImage from '../../../static/assets/images/logo.png';
import MessiJersey from '../../../static/assets/images/messijersey.jpg';
import NBAJersey from '../../../static/assets/images/nbajersey.jpg';
import StadiumImage from '../../../static/assets/images/stadium.jpg';
import BidWarsJerseys from '../../../static/assets/images/bidwarsjerseys.jpg';
import BidWarsTrack from '../../../static/assets/images/bidwarstrack.jpg';
import BidwarsBaseball from '../../../static/assets/images/bidwarsbaseball.jpg';
import JerseyLebron from '../../../static/assets/images/jerseylebron.jpg';
import JerseyBurks from '../../../static/assets/images/jerseyburks.jpg';
import JerseyWilliams from '../../../static/assets/images/jerseywilliams.jpg';
import WWERed from '../../../static/assets/images/wwered.png';
import WWEGold from '../../../static/assets/images/wwegold.png';
import WWEBlue from '../../../static/assets/images/wweblue.png';
import RefPointing from '../../../static/assets/images/refpointing.jpg';
import RefLetterR from '../../../static/assets/images/refletterr.jpg';
import RefBasketball from '../../../static/assets/images/refbasketball.jpg';

import Footer from '../footer.js';
import CustomNews from './custom-news.js';

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768),
      setIsMediumScreen(window.innerWidth < 1024),
      setIsLargeScreen(window.innerWidth > 1024)
    };

    handleResize();
      window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

     return (
      <div className='home'>
        <div className='home-header-wrapper'>
          <div className='home-header'>
            <div className='header-left'>
              <img className='img' src={logoImage} alt='logo' 
                style={{ height: '70px', width: '175px'}}>
              </img>

              <SearchBar />
            </div>

            <div className='header-right'>
              <div className='header-icon-links'>
                <div className='login-register-wrapper'>
                  <li>
                    <Link to="/register">
                      <FaClipboard className='icon'/>
                    </Link>
                      
                    <div className='icon-text'>
                      <h1>Register</h1>
                    </div>
                  </li>

                  <li>
                    <Link to="/login">
                      <FaUserAlt className='icon' />
                    </Link>
                        
                    <div className='icon-text'>
                      <h1>My Account</h1>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className='home-nav-menu'>
            <div className='navbar-menu-wrapper'>
              {isSmallScreen ?  <Menu /> : <Navbar />}
            </div>
          </div>
        </div>

        < div className='home-body'>
          <div className='custom'>
            <CustomNews />
          </div>
          
          <Carousel>
            <CarouselItem>
              <div className='text-box'>
                <div className='texts'>
                  <h1>Pro Sports Fire Sale</h1>
                  <h2>Limited Time Only!</h2>
                </div>
                        
                <div className='text-box-btns'>
                  <button>Biggest Deals</button>
                  <button>All Deals</button>
                </div>
              </div>

              <div className={`image-wrapper ${isMobile ? ' mobile-view' : ''}`}>
                <li><img src={MessiJersey}></img></li>
                <li><img src={NBAJersey}></img></li>
                <li><img src={StadiumImage}></img></li>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className='text-box'>
                <div className='texts'>
                  <h1>Bid Wars!</h1>
                  <h2>Limited Time Event!</h2>
                </div>
                        
                <div className='text-box-btns'>
                  <button>Enter Bid Wars</button>
                </div>
              </div>

              <div className={`image-wrapper ${isMobile ? ' mobile-view' : ''}`}>
                <li><img src={BidWarsTrack}></img></li>
                <li><img src={BidWarsJerseys}></img></li>
                <li><img src={BidwarsBaseball}></img></li>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className='text-box'>
                <div className='texts'>
                  <h1>Welcome to Jersey City!</h1>
                  <h2>All New Pro Sports Jerseys Here!</h2>
                </div>
                        
                  <div className='text-box-btns'>
                    <button>Go To Jersey City</button>
                  </div>
              </div>
              
              <div className={`image-wrapper ${isMobile ? ' mobile-view' : ''}`}>
                <li><img src={JerseyBurks}></img></li>
                <li><img src={JerseyLebron}></img></li>
                <li><img src={JerseyWilliams}></img></li>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className='text-box'>
                <div className='texts'>
                  <h1>New WWE Store!</h1>
                  <h2>Belts, MiniFigures, or T-shirts?
                      We got it!
                    </h2>
                </div>
                        
                <div className='text-box-btns'>
                  <button>WWE Trading Store</button>
                </div>
              </div>
              
              <div className={`image-wrapper ${isMobile ? ' mobile-view' : ''}`}>
                <li><img src={WWEGold}></img></li>
                <li><img src={WWERed}></img></li>
                <li><img src={WWEBlue}></img></li>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className='text-box'>
                <div className='texts'>
                  <h1>Can't Forget Our Refs!</h1>
                  <h2>Flags, Cards, Whistles, We Got You</h2>
                </div>
                        
                <div className='text-box-btns'>
                  <button>Go To Ref Store</button>
                </div>
              </div>
              
              <div className={`image-wrapper ${isMobile ? ' mobile-view' : ''}`}>
                <li><img src={RefPointing}></img></li>
                <li><img src={RefBasketball}></img></li>
                <li><img src={RefLetterR}></img></li>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        
        <div className='home-footer'>
          <Footer />
        </div>   
      </div>
    );
  }

  export default Home;

