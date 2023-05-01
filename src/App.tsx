import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src="/whs-2003-bear.png" className="App-logo" alt="logo" />
        <div>20 Year Reunion</div>
        <div className='Date-text'>June 17, 2023</div>
        <div className='Links'>
          <a href="https://www.eventbrite.com/e/wadsworth-high-school-class-of-2003-20th-reunion-tickets-421375193547"><img src="/eventbrite.svg" width="50" height="50" alt="Eventbrite" />Register</a>
          <a href="https://www.facebook.com/WadsworthHighSchoolClasOf200320YearReunion/"><img src="/facebook.svg" width="50" height="50" alt="Facebook" />Facebook</a>
        </div>
        <div className='Links Sponsor-Links'>
          <a className='Sponsor-Us' href="https://docs.google.com/document/d/1SGbwNQDwtn8px6RXpRd3x3ngA-0xZoYpqqG5KZA-ncw/edit?usp=sharing"><img src="/sponsor.svg" width="50" height="50" alt="Sponsor Us" />Sponsor Us</a>
        </div>
      </div>
    </div>
  );
}

export default App;
