import React, { useEffect, useState } from 'react'; 
import './CSS/Book.css';

const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showJoinButton, setShowJoinButton] = useState(false);
  const [bookingTime, setBookingTime] = useState(null);

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

  return (
    <div className='BookC'>
      <div className='Doctor'>
        <img src="./public/Content/Book1.png" alt="Doctor1" width={300} />
      </div>
      <div className='Form'>
        <form onSubmit={handleSubmit}>
          <h1>Book a session</h1>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <input type="date" id='date' required />
          <input type="time" id='time' required />
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
