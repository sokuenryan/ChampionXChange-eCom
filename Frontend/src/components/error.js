import React from 'react';

export default function Error() {
     return (
       <div className='error'>
         <form action='/register' method='post'></form>
         <h1 style={{ fontSize:'40px', color:'black', textAlign:'center'}}>User Already Exists. Please Try A Different UserName</h1>
         <p><a className='anchor-button' href="{{ url_for('register') }}"><strong>Register</strong></a></p>
       </div>
      );
   }