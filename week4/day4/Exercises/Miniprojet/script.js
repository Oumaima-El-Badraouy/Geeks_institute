const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 2, author: "Mae Jemison", quote: "Never be limited by other people’s limited imaginations.", likes: 0 },
    { id: 3, author: "Nelson Mandela", quote: "It always seems impossible until it’s done.", likes: 0 },
    { id: 4, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 }
];

let currentQuote = null;
let filteredQuotes = [];
let filteredIndex = 0;

// Display quote
function displayQuote(quoteObj) {
    const section = document.getElementById('section1');
    section.innerHTML = `"${quoteObj.quote}" — ${quoteObj.author}`;
    document.getElementById('likes').innerText = quoteObj.likes;
}

// Random quote
function handleClick() {
    const randIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randIndex];
    displayQuote(currentQuote);
}

// Character count
function charCount(withSpaces) {
    if (!currentQuote) return alert("Show a quote first!");
    const text = currentQuote.quote;
    const count = withSpaces ? text.length : text.replace(/\s/g,'').length;
    alert("Character count: " + count);
}

// Word count
function wordCount() {
    if (!currentQuote) return alert("Show a quote first!");
    const count = currentQuote.quote.trim().split(/\s+/).length;
    alert("Word count: " + count);
}

// Like a quote
function likeQuote() {
    if (!currentQuote) return alert("Show a quote first!");
    currentQuote.likes++;
    document.getElementById('likes').innerText = currentQuote.likes;
}

// Add new quote
document.getElementById('addQuoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;
    const newQuote = {
        id: newId,
        author: formData.get('author'),
        quote: formData.get('quote'),
        likes: 0
    };
    quotes.push(newQuote);
    e.target.reset();
    alert("Quote added!");
});

// Filter by author
document.getElementById('filterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const author = e.target.authorFilter.value.toLowerCase();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(author));
    if (filteredQuotes.length === 0) {
        alert("No quotes found for this author.");
        return;
    }
    filteredIndex = 0;
    currentQuote = filteredQuotes[filteredIndex];
    displayQuote(currentQuote);
    document.getElementById('prevBtn').style.display = 'inline';
    document.getElementById('nextBtn').style.display = 'inline';
});

// Previous/Next buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    if (filteredQuotes.length === 0) return;
    filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    currentQuote = filteredQuotes[filteredIndex];
    displayQuote(currentQuote);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (filteredQuotes.length === 0) return;
    filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
    currentQuote = filteredQuotes[filteredIndex];
    displayQuote(currentQuote);
});