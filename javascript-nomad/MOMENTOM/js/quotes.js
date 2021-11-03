const quotes = [{
        quote: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
        author: "Carl Bard",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
    },
    {
        quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        author: "Jim Rohn",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;