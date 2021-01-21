// Quote elements
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".generate-btn");
const loader = document.querySelector(".loader");
const titleBlock = document.querySelector(".title-block");
const quoteContainer = document.querySelector(".quote-container");
const quotePhoto = document.querySelector(".photo");

// Actions elements
const likesIcon = document.querySelector(".likes-icon");
const likesSpan = document.querySelector(".likes-span");
const shareIcon = document.querySelector(".share-icon");

const closeModalButton = document.querySelector(".modal__close");
const modalWindow = document.querySelector(".modal");
const modalLinks = document.querySelectorAll(".social__link");
const overlay = document.querySelector(".overlay");

let quoteId;

// Generate button event
generateBtn.addEventListener("click", () => {
  generateBtn.disabled = true;
  // hide a title
  titleBlock.classList.add("hide");
  // hide quote
  quoteContainer.classList.add("hide");
  // show loader
  loader.classList.toggle("active");
  // generate quote
  setTimeout(() => {
    loader.classList.toggle("active");
    generateBtn.disabled = false;
    showRandomQuote();
  }, 2000);
});

function showRandomQuote() {
  quoteContainer.classList.remove("hide");
  quoteId = generateQuoteId();
  quote.innerText = quotes[quoteId].quote;
  author.innerText = quotes[quoteId].author;
  quotePhoto.src = quotes[quoteId].photo;
  likesSpan.innerHTML = quotes[quoteId].likesCount;
  if (!quotes[quoteId].isLiked) {
    likesIcon.style = "color: #fff";
  } else {
    likesIcon.style = "color: #f94144";
  }
}
function generateQuoteId() {
  return Math.floor(Math.random() * quotes.length);
}

// Add like event
likesIcon.addEventListener("click", () => {
  if (!quotes[quoteId].isLiked) {
    likesSpan.innerHTML = Number(likesSpan.innerHTML) + 1;
    quotes[quoteId].likesCount = likesSpan.innerHTML;
    likesIcon.style = "color: #f94144";
    quotes[quoteId].isLiked = true;
  } else return;
});

shareIcon.addEventListener("click", () => {
  modalWindow.classList.toggle("active");
  overlay.classList.toggle("active");
});
closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeModalWindow();
});
modalLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    closeModalWindow();
  });
});
function closeModalWindow() {
  modalWindow.classList.toggle("active");
  overlay.classList.toggle("active");
}
