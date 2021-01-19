const quotes = [
  {
    id: 0,
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author:
      " Confucius - Chinese philosopher, politician and statesman (551 BCl-479 BC)",
    photo: "./assets/qoutes/0.jpg",
  },
  {
    id: 1,
    quote: "I never dreamed about success, I worked for it.",
    author:
      "Estée Lauder - American founder of the cosmetic company (1908-2004)",
    photo: "./assets/qoutes/1.jpg",
  },
  {
    id: 2,
    quote:
      "When we close ourselves off, we're not just closing ourselves off to other people, we're closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are.",
    author:
      "Amy Cuddy - American Social Psychologist, author and lecturer (b.1972)",
    photo: "./assets/qoutes/2.jpg",
  },
  {
    id: 3,
    quote:
      "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time",
    author: "Steve Jobs - American Entrepreneur (1955-2011)",
    photo: "./assets/qoutes/3.jpg",
  },
  {
    id: 4,
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle - Greek philosopher (384 BC-322 BC)",
    photo: "./assets/qoutes/4.jpg",
  },
  {
    id: 5,
    quote: `Nothing is impossible, the world itself says "I'm possible"! `,
    author:
      "Audrey Hepburn - British actress, model and ambassador of UNICEF (1929-1996)",
    photo: "./assets/qoutes/5.jpg",
  },
  {
    id: 6,
    quote:
      "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ",
    author:
      "Nelson Mandela - Politics and President of South Africa (1918-2013)",
    photo: "./assets/qoutes/6.jpg",
  },
  {
    id: 7,
    quote:
      "Whether you think you can, or you think you can't, you're probably right.",
    author:
      "Henry Ford - American entrepreneur, pioneer of the automotive industry (1863-1947)",
    photo: "./assets/qoutes/7.jpg",
  },
  {
    id: 8,
    quote:
      "Victory is not always winning the battle...but rising every time you fall.",
    author:
      "Napoleon Bonaparte - French commander, statesman and emperor (1769-1821)",
    photo: "./assets/qoutes/8.jpg",
  },
  {
    id: 9,
    quote:
      "Don't spend time beating on a wall, hoping to transform it into a door.",
    author: "Coco Chanel - French fashion designer (1883 - 1971)",
    photo: "./assets/qoutes/9.jpg",
  },
  {
    id: 10,
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain - American writer and humorist (1835-1910)",
    photo: "./assets/qoutes/10.jpg",
  },
  {
    id: 11,
    quote:
      "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry - French writer and aviator (1900-1944)",
    photo: "./assets/qoutes/11.jpg",
  },
  {
    id: 12,
    quote:
      "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    author: "Earl Nightingale – American radio personality (1921-1989)",
    photo: "./assets/qoutes/12.jpg",
  },
  {
    id: 13,
    quote:
      "Everyone thinks of changing the world, but no one thinks of changing himself.",
    author:
      "Lev Nikolaevich Tolstoy - Russian writer and philosopher (1828-1910)",
    photo: "./assets/qoutes/13.jpg",
  },
  {
    id: 14,
    quote:
      "However difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking - British Theoretical Physicist (1942-2018)",
    photo: "./assets/qoutes/14.jpg",
  },
];

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
  generateBtn.disabled = true;
  setTimeout(() => {
    loader.classList.toggle("active");
    container.classList.remove("hide");
    generateBtn.disabled = false;
    if (!quotes.length) {
      quote.innerText = "You've watched all quotes";
      author.innerText = "";
      generateBtn.disabled = true;
    } else {
      const quoteId = generateId();
      quote.innerText = quotes[quoteId].quote;
      author.innerText = quotes[quoteId].author;
      quotePhoto.src = quotes[quoteId].photo;
      quotes.splice(quoteId, 1);
      console.log(quotes);
    }
  }, 3000);
});

function hideTitle() {
  titleBlock.classList.add("hide");
}
function showQuote() {}
function generateId() {
  return Math.floor(Math.random() * quotes.length);
}
