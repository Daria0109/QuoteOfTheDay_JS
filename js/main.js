const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".generate-btn");
const loader = document.querySelector(".loader");
const titleBlock = document.querySelector(".title-block");
const quoteContainer = document.querySelector(".quote-container");
const quotePhoto = document.querySelector(".photo");

const likesIcon = document.querySelector(".likes-icon");
const likesSpan = document.querySelector(".likes-span");
const shareIcon = document.querySelector(".share-icon");

generateBtn.addEventListener("click", () => {
  // hide a title
  titleBlock.classList.add("hide");
  // hide quote
  quoteContainer.classList.add("hide");
  // show loader
  loader.classList.toggle("active");
  // generate quote
  generateRandomQuote();
});

function generateRandomQuote() {
  setTimeout(() => {
    loader.classList.toggle("active");
    quoteContainer.classList.remove("hide");
    if (!quotes.length) {
      quote.innerText = "Thanks, you've watched all quotes. Have a nice day!";
      author.innerText = "";
      quotePhoto.classList.add("hide");
    } else {
      const quoteId = generateQuoteId();
      quote.innerText = quotes[quoteId].quote;
      author.innerText = quotes[quoteId].author;
      quotePhoto.src = quotes[quoteId].photo;
      likesIcon.style = "color: #fff";
      quotes.splice(quoteId, 1);
    }
  }, 2000);
}
function generateQuoteId() {
  return Math.floor(Math.random() * quotes.length);
}

likesIcon.addEventListener("click", () => {
  likesIcon.style = "color: red";
});
