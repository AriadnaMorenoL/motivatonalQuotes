let button = document.getElementById('button');
let quoteT = document.getElementById('quote');
let authorN = document.getElementById('author');


function randomGenerate(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function changeQuote(){
  let randomIndex = randomGenerate(0, quotes.length);
  quoteT.innerText = `${quotes[randomIndex].quote}`;
  authorN.innerText = quotes[randomIndex].author;

}
  changeQuote();

  button.addEventListener('click', changeQuote);