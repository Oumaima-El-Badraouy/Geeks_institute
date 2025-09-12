const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving." },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { id: 2, author: "Mae Jemison", quote: "Never be limited by other people’s limited imaginations." },
    { id: 3, author: "Nelson Mandela", quote: "It always seems impossible until it’s done." },
    { id: 4, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." }]
const randmq=Math.floor(Math.random()*quotes.length)
const randomquote=quotes[randmq]
console.log(randomquote.quote)
function handleclick(){
    let section=document.getElementById('section1')
    const randmq=Math.floor(Math.random()*quotes.length)
const randomquote=quotes[randmq]
    section.innerHTML=randomquote.quote

}
let form= document.querySelector('form')
form.addEventListener('submit',async(e)=>{
e.preventDefault()
const formdata=new FormData(form)
 const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;
    let newQuote = {};
    for (let [key, value] of formdata.entries()) {
        newQuote[key] = value;
    }

    newQuote.id = newId;

    quotes.push(newQuote);

    console.log("Quote added:", quotes);
})