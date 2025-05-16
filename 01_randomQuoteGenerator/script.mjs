let quotes = [];

// Load JSON file
fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
  })
  .catch(error => console.error("Failed to load quotes:", error));

// Functions
function getRandomQuote(quotesArray) {
    const i = Math.floor(Math.random() * quotesArray.length);
    return [quotesArray[i].quote, quotesArray[i].author];
}

// Select elements
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const generateBtn = document.querySelector("#generate-btn");

// Generate Quotes on button click
generateBtn.addEventListener("click", () => {
  if (quotes.length === 0) {
    quoteText.textContent = "Quotes are still loading...";
    quoteAuthor.textContent = "";
    return;
  } else {
    const [quote, author] = getRandomQuote(quotes);
    quoteText.textContent = quote;
    quoteAuthor.textContent = author;
  }
});