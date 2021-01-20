let viewedQuotes = [];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".generate-btn");
const loader = document.querySelector(".loader");
const titleBlock = document.querySelector(".title-block");
const container = document.querySelector(".container");
const quotePhoto = document.querySelector(".photo");

generateBtn.addEventListener("click", () => {
  hideTitle();
  container.classList.add("hide");
  loader.classList.toggle("active");
  setTimeout(() => {
    loader.classList.toggle("active");
    container.classList.remove("hide");
    if (!quotes.length) {
      quote.innerText = "Thanks, you've watched all quotes. Have a nice day!";
      author.innerText = "";
      quotePhoto.classList.add("hide");
    } else {
      const quoteId = generateQuoteId();
      quote.innerText = quotes[quoteId].quote;
      author.innerText = quotes[quoteId].author;
      quotePhoto.src = quotes[quoteId].photo;
      quotes.splice(quoteId, 1);
    }
  }, 2000);
});

function hideTitle() {
  titleBlock.classList.add("hide");
}
function generateQuoteId() {
  return Math.floor(Math.random() * quotes.length);
}
