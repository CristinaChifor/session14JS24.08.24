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
 * document.getElementsByName(‘nume’); - intoarce o lista cu toate elementele ce au name=‘nume’.
 */

const comment = document.getElementsByName("comment");
console.log(comment);
comment[0].value = co