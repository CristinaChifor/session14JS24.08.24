console.log("Hello");

/** Document Object Model
 * DOM este o reprezentare a documentului HTML intr-o structura de tip arbore, unde fiecare element din document 
 * este reprezentat printr-un obiect (nod) in arborele DOM. 
 * Acesta ne permite accesarea si manipularea continutului, 
 * a structurii si stilul documentului folosind JavaScript.
 */

/** Accesarea unui element din DOM dupa valoarea atributului id.
    document.getElementById(‘id’) 
 */

const cardElement = document.getElementById("card");
console.log(`card: `, cardElement);
console.log(`card: ${cardElement}`);

// cardElement.innerHTML = "Altceva";

/** Accesarea unui element din DOM dupa valoarea atributului class:
    document.getElementsByClassName(‘nume-clasa’); 
    intoarce o lista cu toate elementele ce au clasa ‘nume-clasa’.
 */

const todos = document.getElementsByClassName("todo-item");
console.log(todos);
todos[0].id = "new id";

/** Accesarea elementelor din DOM dupa valoarea atributului name:
 * document.getElementsByName(‘nume’); 
 intoarce o lista cu toate elementele ce au name=‘nume’.
 */

const comment = document.getElementsByName("comment");
console.log(comment);
comment[0].value = "Pre-established comment";

/** Accesarea elementelor din DOM dupa tipul elementului (numele tag-ului):
* document.getElementsByTagName(‘tip-element’);
 intoarce o lista cu toate elementele ce au numele tag-ului ‘tip-element’ (ex: div, span, button, section, etc).
 */

 const listItems = document.getElementsByTagName("li");
 console.log(listItems);

 /** Accesarea elementelor din DOM dupa orice selector CSS valid:
  * document.querySelector(‘selector’); 
  * intoarce primul element identificabil prin selectorul ‘selector’.
  */

 const cardParagraf = document.querySelector("#card > p");
 console.log(cardParagraf);

 /** Accesarea tuturor elementelor din DOM dupa orice selector CSS valid:
  * document.querySelectorAll(‘selector’); 
  * - intoarce toate elementele identificabile prin selectorul ‘selector’.
  */

 const allToDos = document.querySelectorAll("#card > ol > .todo-item");
 console.log(allToDos);
 console.log(allToDos[0].textContent);
 console.log(allToDos[0].innerText);

//  Manipulate the DOM

/** 1. Manipularea unui element
 * textContent și innerHTML: 
 * Aceste proprietati permit accesarea si modificarea 
 * continutului text al unui element. 
 * textContent returnează sau setează doar textul, 
 * in timp ce innerHTML permite lucrul cu conținut HTML.
 */

const p = document.querySelector("p");
p.textContent = "This was added with JS";

const footer = document.querySelector("footer");

const author  = "John Doe";
footer.innerHTML = `<strong>Author: </strong><span>${author}</span>`;

const posts = [
    {
        author: "Nick",
        todos: ["do1, do2"],
        comment: "my comment",
        title: "card 1"
    },
    {
        author: "Nick",
        todos: ["do1, do2"],
        comment: "my comment",
        title: "card 2"
    },
    {
        author: "Nick",
        todos: ["do1, do2"],
        comment: "my comment",
        title: "card 3"
    }
];

const body = document.querySelector("body");
let htmlContent = '';
for (const post of posts) {
    const card = `<article class="card">
            <p>${post.title}</p>

            <ol>
            
                ${post.todos.map((el) => '<li class="todo-item">'+ el + "</li>" )}
            </ol>
            <label for="comment">Comment</label>
            <input type="text" id="comment" name="comment" value="${post.comment}">
            <footer></footer>
        </article>`

    htmlContent += card;
}

body.innerHTML = htmlContent;

const allToDos2 = document.querySelector("p");
 console.log(allToDos2);

 console.log(allToDos2.textContent);
 allToDos2.textContent = "ast";

 console.log(allToDos2.innerText);
 allToDos2.innerText = "bcklll";

 console.log(allToDos2.innerText);
 console.log(allToDos2.textContent);






