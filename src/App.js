import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="SallyStudent">
        <section className='ContactInfo'>
          <p>Sally Student</p>
          <p>Email: Sally@Outlook.com </p>
          <p>555-5555</p>
          <img src='https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'></img>
        </section>
        <section className='Education'>
          School : Thinkful
        </section>
        <section className='Employment'>
          <ul>
            <li>Employer: Anthony's NY Style Pizza</li>
            <li>Job Title: Deliver Driver</li>
            <li>Dates: 12/2019 - current </li>
            <li>Description: Delivery Pizzas</li>
          </ul>
          <ul>
            <li>Employer: Cognizant Technology Solutions</li>
            <li>Job Title: Process Executive</li>
            <li>Dates: 7/2017 - 12/2019</li>
            <li>Description: Moderate content for social media site Facebook and Instagram</li>
          </ul>
        </section>

      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
