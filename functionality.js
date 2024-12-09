const countdownElement = document.getElementById('countdown');

// Set the countdown date and time (adjust as needed)
const countdownDate = new Date('2024-12-25 12:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
    }
};

// Update the countdown every second
let x = setInterval(updateCountdown, 1000);

 // travel functionality 

 const showMoreButton = document.getElementById('show-more');
const moreInfo = document.getElementById('more-info');

showMoreButton.addEventListener('click', () => {
  moreInfo.style.display = 'block';
  showMoreButton.style.display = 'none';
});