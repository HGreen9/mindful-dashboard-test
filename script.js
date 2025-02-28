// --- Dynamic Calendar ---
function renderCalendar() {
  const calendarEl = document.getElementById('calendar');
  const now = new Date();
  const currentDay = now.getDate();
  let calendarHTML = '';
  // For demonstration, we display a fixed 31-day month.
  for (let day = 1; day <= 31; day++) {
    calendarHTML += `<span class="day${day === currentDay ? ' today' : ''}">${day}</span>`;
  }
  calendarEl.innerHTML = calendarHTML;
}
renderCalendar();

// --- Dynamic Clock ---
function updateClock() {
  const clockEl = document.getElementById('clock');
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// --- Graduation Countdown ---
function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  const graduationDate = new Date('2025-06-13T00:00:00');
  const now = new Date();
  const diff = graduationDate - now;
  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } else {
    countdownEl.textContent = "Congratulations! You've graduated!";
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- Inspirational Quote ---
const quotes = [
  "Believe you can and you're halfway there.",
  "Every moment is a fresh beginning.",
  "Turn your wounds into wisdom.",
  "Dream big and dare to fail.",
  "The only limit is your mind."
];
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
document.getElementById('quote').textContent = getRandomQuote();

// --- Random Image ---
document.getElementById('randomImage').src = 'https://source.unsplash.com/random';