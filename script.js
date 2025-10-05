const quotes = [
  "Believe in yourself and all that you are.",
  "The harder you work, the luckier you get.",
  "Dream it. Wish it. Do it.",
  "Success is not for the lazy.",
  "Great things never come from comfort zones."
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("newQuote");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});
