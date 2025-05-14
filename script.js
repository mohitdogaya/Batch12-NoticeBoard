const quotes = [
  "A man who has self-respect will not bow before injustice.",
  "We may lose the battle, but not our pride.",
  "Even the enemy admired the bravery of Maharana Pratap.",
  "Freedom is earned with sacrifice, not given as a gift.",
];

const quoteList = document.getElementById('quoteList');

quotes.forEach(quote => {
  const li = document.createElement('li');
  li.textContent = quote;
  quoteList.appendChild(li);
});
