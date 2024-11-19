const quotes = [
  " Be yourself everyone else is already taken Oscar Wilde Tags attributed-no-source, be-yourself, gilbert-perreira, honesty, inspirational, misattributed-oscar-wilde, quote-investigator (Oscar wilde).",

  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best ( Marilyn Monroe).",

  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe Albert Einstein Tags: attributed-no-source, human-nature, humor, infinity, philosophy, science, stupidity, universe  (Albert Einstein).",

  "You know you're in love when you can't fall asleep because reality is finally better than your dreams (Dr. Seuss). .",

  "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend (Albert Camus).",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("DEMO").innerText = quote;

  const button = document.querySelector("button");
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");
}
