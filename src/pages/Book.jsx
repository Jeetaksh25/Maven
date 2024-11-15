import React, { useEffect, useState } from 'react'; 
import './CSS/Book.css';
import { setDate } from 'date-fns';
const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showJoinButton, setShowJoinButton] = useState(false);
  const [bookingTime, setBookingTime] = useState(null);
  const [datelabel,setdateLabel]=useState('Select a date');
  const [timelabel,settimeLabel]=useState('Select a time');

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
      setBookingTime(`${date}T${time}`);
      setShowJoinButton(true);
    }
  };

  const isJoinable = () => {
    if (bookingTime) {
      const now = new Date();
      const bookingDateTime = new Date(bookingTime); 
      return now >= bookingDateTime;
    }
    return false;
  };

  const handleJoinClick = (e) => {
    if (!isJoinable()) {
      e.preventDefault(); 
      alert("You cannot join the session before the scheduled time.");
    }
  };


  function handleDateChange(e) {
    const value = e.target.value;
    setdateLabel(value ? "" : "Select a date");
  }

  function handleTimeChange(e) {
    const value = e.target.value;
    settimeLabel(value ? "" : "Select a time");
  }

  return (
    <div className='BookC'>
      <div className='Doctor'>
        <img src="./public/Content/Book1.png" alt="Doctor1" width={300} />
      </div>
      <div className='Form'>
      <h1 style={{marginTop: "30px"}}>Book a session</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <div className='dateC'>
            <label htmlFor="" className='datelabel'>{datelabel}</label>
            <input type="date" id='date' placeholder='Select a Date' onChange={handleDateChange} required />
          </div>
          <div className='dateC'>
            <label htmlFor="" className='datelabel'>{timelabel}</label>
            <input type="time" id='time' placeholder='Select a Time' onChange={handleTimeChange} required />
          </div>

          <button type="submit" className='bookB'>Book a session</button>
          {showJoinButton && (
            <a 
              className='joinB' 
              href="https://meet.google.com/fzw-zrbg-xjg" target='_blank'
              onClick={handleJoinClick}
            >
              Join the session
            </a>
          )}
        </form>
      </div>
      <div className='Doctor'>
        <img src="./public/Content/Book2.png" alt="Doctor2" width={300} />
      </div>
    </div>
  );
}

export default Book;
