
(function (){
"use strict"
// i dont read much books ,but i could find one of the books you have to read before you die
const listOfBooks = ["2666",
    "All about love",
    "Desert Solitaire",
    "Disgrace",
    "Geek Love",
    "Gilead",
    "Giovanni's Room",
    "A Good Man is hard to find",
    "The Handmaid's Tale",
    "Infinite Jest"];

const infoOfTheBooks= [
    { id:"Roberto", title: "2666", Language: "English", Author: "Roberto Bolano" },
    { id:"bell", title: "All about love", Language: "English", Author: "bell hoyan" },
    { id:"Edward", title: "Desert Solitaire", Language: "English", Author: "Edward Abbey" },
    { id:"john", title: "Disgrace", Language: "English", Author: "J.m. coetzee" },
    { id:"Katherine", title: "Geek Love", Language: "English", Author: "Katherine Dunn" },
    { id:"Marilynne", title: "Gilead", Language: "English", Author: "Marilynne Robinson" },
    { id:"James", title: "Giovanni's Room", Language: "English & Arabic", Author: "James Baldwin" },
    { id:"Flannery", title: "A Good Man Is hard to find", Language: "English", Author: "Flannery o connor" },
    { id:"Margaret", title: "The Handmaid's Tale", Language: "English", Author: "Margaret Atwood" },
    { id:"David", title: "Infinite Jest", Language: "English", Author: " David Foster" }
];
const images = {
    Roberto: 'http://powells-covers-2.s3.amazonaws.com/9780312429218.jpg',
    bell: 'http://powells-covers-2.s3.amazonaws.com/9780060959470.jpg',
    Edward: 'http://covers.powells.com/9780671695880.jpg',
    john: 'http://covers.powells.com/9780140296402.jpg',
    Katherine: 'http://covers.powells.com/9780375713347.jpg', 
    Marilynne: 'http://covers.powells.com/9780312424404.jpg',
    James: 'http://covers.powells.com/9780345806567.jpg',
    Flannery: 'http://covers.powells.com/9780156364652.jpg',
    Margaret: 'http://covers.powells.com/9780385490818.jpg',
    David: 'http://covers.powells.com/9780316066525.jpg',
};

const root = document.getElementById('root');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const myFavBooks = document.createElement('h1');
    myFavBooks.innerHTML = 'My Favorite Books';
    header.appendChild(myFavBooks);
    root.appendChild(header);
    const ul = document.createElement('ul');
    ul.innerHTML = '';
    root.appendChild(ul);

    function renderBooks() {
        for (let i = 0; i < books.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('id', books[i]);
            const h1 = document.createElement('h1');
            h1.innerHTML = booksInf[books[i]].title;
            const h3 = document.createElement('h3');
            h3.innerHTML ='the author: ' + booksInf[books[i]].author;
            const p = document.createElement('p');
            p.innerHTML ='the language: ' + booksInf[books[i]].language;
            const img = document.createElement('img');
            img.setAttribute('src', imgObj[books[i]]);
            img.setAttribute('width', '250 %');
            li.appendChild(h1);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
    renderBooks();
})()
;