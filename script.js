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
    const article = document.createElement("article");
    article.classList.add("card");
    const card = `
            <p>${post.title}</p>

            <ol>
            
                ${post.todos.map((el) => '<li class="todo-item">'+ el + "</li>" )}
            </ol>
            <label for="comment">Comment</label>
            <input type="text" id="comment" name="comment" value="${post.comment}">
            <footer>
            <strong>Author:</strong> ${post.author} <span></span>
            </footer>
        `;
    article.innerHTML = card;
    body.appendChild(article);

    // htmlContent += card;
}

// body.innerHTML = htmlContent;
// body.textContent= htmlContent;
// innerText vs textContent
const allToDos2 = document.querySelector("p");
 console.log(allToDos2);

 console.log(allToDos2.textContent);
 allToDos2.textContent = "ast";

 console.log(allToDos2.innerText);
 allToDos2.innerText = "bcklll";

 console.log(allToDos2.innerText);
 console.log(allToDos2.textContent);

 /** getAttribute și setAttribute: 
  * Aceste metode permit accesarea si modificarea atributelor 
  * unui element.
  */

 const firstInput = document.querySelectorAll("input");
 console.log(`input: `, firstInput);
 console.log("....");

 firstInput[0].readOnly = true;
firstInput[1].setAttribute("readonly", true);
let firstInputValue = firstInput[0].getAttribute("value");
console.log("fisrtValue =", firstInputValue);

/** classList: 
 * Aceasta proprietate este utila pentru a lucra cu clasele CSS ale unui element. 
 * Permite adaugarea, eliminarea sau verificarea claselor.
 */

const allP = document.querySelectorAll("p");
for (const paragraph of allP) {
    paragraph.classList.add("red", "underline");
}

let index = 0;
for (const paragraph of allP) {
    if (index % 2 > 0) {
        paragraph.classList.remove("red");
    }
    index++;
}

/**style: 
 * Aceasta proprietate permite accesarea si modificarea 
 * stilurilor CSS ale unui element.
 */

for (const paragraph of allP) {
    paragraph.style.textTransform = "uppercase";
}

// Crearea unui element HTML

/** document.createElement() 
 * este folosit pentru a crea un element nou. 
 * Acest element este creat, dar nu este inca atasat la nici o parte a DOM-ului.
 
 * .appendChild(newElement) este folosit pentru a adauga un element ca ultim copil in elementul ce apeleaza metoda.
 */

const newParagraph = document.createElement("p");
newParagraph.textContent = "My new paragraph";
console.log(newParagraph);

body.appendChild(newParagraph);
const span = document.createElement("span");
span.textContent = " altceva";
span.classList.add("red");
newParagraph.appendChild(span);

// Stergerea unui element

/** 1.Identificarea elementului:
 *Utilizam metode precum getElementById, getElementsByClassName, getElementsByTagName, 
 sau querySelector pentru a identifica elementul pe care dorim sa-l stergem.

2. Stergerea elementului:
Se face prin metoda remove() pentru a sterge un element din DOM.
 */

const allCards = document.querySelectorAll("card");
allCards[allCards.length - 1].remove();





