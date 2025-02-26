document.addEventListener('DOMContentLoaded', function() {
  // Set the launch date (30 days from current date)
  const currentDate = new Date('2025-02-25T23:51:59Z');
  const launchDate = new Date(currentDate);
  launchDate.setDate(launchDate.getDate() + 15);
  
  // Update countdown timer
  function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = launchDate - currentTime;
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    
    if (timeRemaining < 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').innerHTML = "<h2>Portfolio is Live!</h2>";
    }
  }
  
  // Initial call to set countdown immediately
  updateCountdown();
  
  // Update countdown every second
  const countdownTimer = setInterval(updateCountdown, 1000);
  
  // Notify form submission
  document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you! ${email} will be notified when the portfolio launches.`);
    this.reset();
  });
  
  // Interactive animation for shapes on mousemove (desktop only)
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.querySelector('.shape1').style.transform = `translate(${x * 50}px, ${y * 50}px) rotate(${x * 360}deg)`;
      document.querySelector('.shape2').style.transform = `translate(${-x * 50}px, ${-y * 50}px) rotate(${-x * 360}deg)`;
    });
  }
});
