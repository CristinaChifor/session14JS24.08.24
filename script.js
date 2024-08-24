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
footer.innerHTML = "<strong>Author: </strong><span>John Doe</span>";





