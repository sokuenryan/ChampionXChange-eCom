import React from 'react';

import NewsImage from '../../../static/assets/images/kidsbaseball.jpg';

export default function CustomNews() {
     return (
       <div className='custom-news-wrapper'>
            <div className='block-shape'>
                <div className='block-header'>
                    <h1>What's New!</h1>
                </div>
                <div className='block-text'>
                    <h1>New Store Added!</h1>
                    <h2>Looking for new sports equipment for you or a young 
                        and rising champion? Head over to our new Thrift Shop!
                    </h2>
                </div>
            </div>
            <div className='news-image'>
                <img src={NewsImage}></img>
            </div>
       </div>
      );
   }