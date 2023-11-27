/*
 * 2023.11.23
 * 소멘텀 메인에 뜨는 명언
 * 랜덤으로 나오게 한다.
 */
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote : "Accept reality as it is. Then imagine a world that is better.",
        author : "George Orwell",
    }, 
    {
        quote : "You are the protagonist of your life. Do not succumb to them, even if they try to direct your role.",
        author : "Oscar Wilde",
    }, 
    {
        quote : "Life is beautiful in itself. Look for beautiful things.",
        author : "Charlie Chaplin",
    },
    {
        quote : "The most important thing in life is not to find out what we need, but to find out what we can make.",
        author : "Thomas Carlyle",
    },
    {
        quote : "The ability to discover miracles in ordinary things, this is the true measure of creativity.",
        author : "Albert Einstein",
    }
];

quote.innerText = quotes[Math.floor(Math.random()*quotes.length)]["quote"]
author.innerText = quotes[Math.floor(Math.random()*quotes.length)]["author"]

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// const todatQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
// author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;