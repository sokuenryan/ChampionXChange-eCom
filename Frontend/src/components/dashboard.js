import React from 'react';

export default function Dashboard() {
     return (
       <div className='dashboard'>
         <h1>UserDetails</h1>
         <section className='dashboard-section'>
            <form action='/dashboard' method='post'></form>
            <p><strong>Welcome {{name}}!!</strong></p>
            <h4><a href="{{ url_for('home')}}">Logout</a></h4>
         </section>
       </div>
      );
   }