const quotes = [
    "“The only limit to our realization of tomorrow is our doubts of today. - Franklin D.Roosevelt”",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill”",
    "“Don't watch the clock; do what it does. Keep going. - Sam Levenson”",
    "“Your passion is waiting for your courage to catch up. - Isabelle Lafleche”",
    "“It's never too late to be what you might have been. - George Eliot”",
    "“You are never too old to set another goal or to dream a new dream. - C.S.Lewis”",
    "“Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T.Bennett”",
    "“Believe you can and you're halfway there. - Theodore Roosevelt”",
    "“What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson”",
    "“Dream big and dare to fail. - Norman Vaughan”",
    "“Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats”",
    "“Start where you are. Use what you have.Do what you can. - Arthur Ashe”",
    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T.Bennett”",
    "“Success is the sum of small efforts, repeated day in and day out. - Robert Collier”",
    "“Act as if what you do makes a difference. It does. - William James”",
    "“Hustle beats talent when talent doesn't hustle. - Ross Simmonds”",
    "“Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau”",
    "“Opportunities don't happen, you create them. - Chris Grosser”",
    "“The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt”",
    "“Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill”"
];
let quote = document.querySelector("div")
function randomQuote() {
    let singleQuote = Math.floor(Math.random() * quotes.length)
    quote.textContent = quotes[singleQuote]
}