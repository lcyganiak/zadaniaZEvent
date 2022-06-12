const btn = document.getElementById('btn')

// zmieni nazwe przycisku po kliknięciu. 
function changeName() {
    btn.innerText = 'Zostałem zminiony przez JS'
}

btn.addEventListener('click', changeName)


// zminiż styl button


const btn1 = document.getElementById('btn1')

function changeStyle() {
    btn1.classList.add('addByJs')
}
btn1.addEventListener('click', changeStyle)


// dodaj el. po naciśnięciu buttona

const btn2 = document.getElementById('btn2')

function addElement() {
    const newParagraf = document.createElement('p')
    newParagraf.innerText = 'nowy paragraf'
    const app = document.getElementById('app')

    app.appendChild(newParagraf)

    // const body = document.getElementsByTagName('body') // zwraca HTMLCollection trzeba wskazać do którego mamy dodać.
    // body[0].appendChild(newParagraf)
}

btn2.addEventListener('click',addElement )



// dodaj el. Div z h1 i paragrafem w środku do div o id app

const btn3 = document.getElementById('btn3')

function addElementsDivWithH1AndParagraf() {
    // tworzymy el. HTML
    const newDiv = document.createElement('div')
    const newH1 = document.createElement('h1')
    const newParagraf = document.createElement('p')
    // uzupełniamy tekstem i classami 
    newH1.classList.add('title') // dodanie class przez classList.add
    newH1.innerText = "tytuł naszego H1"
    newParagraf.setAttribute('class', 'paragraf') // dodanie class przez setAttribute
    newParagraf.innerText = "Treść naszego paragrafu"
 // dodajemy do nowego div H1 i paragraf.
    newDiv.appendChild(newH1)
    newDiv.appendChild(newParagraf)
    console.log(newDiv)

    // pobieramy div app z HTML i dodajemy do niego naszego nowego Div
    const app = document.getElementById('app')
    app.appendChild(newDiv)



}

btn3.addEventListener('click', addElementsDivWithH1AndParagraf)

// PRACA Domowa 

// zad 1.
function createTag(nazweTag, nazwaClass, text) {
// napisz funkcję do tworzenia tagów HTML z classą i tekstem 
// podpowiedzi pamętaj o return
}

createTag('p', 'fajna-klasa-z-funkcji', 'no to to już przesada na koniec zajęć')
{/* <p class="fajna-klasa-z-funkcji">no to to już przesada na koniec zajęć</p> */}

createTag('span', 'span-class', 'Prowadzący chce nasz wykończyć')
{/* <span class="span-class">Prowadzący chce nasz wykończyć</span> */}

// zad 2 
// na podstaie tablicy z pliku foto.js 
// stwórz widok 
// <div>
//    <h1>title z objektu</h1>
//    <img src='lin z pola thumbnailUrl w objekcie'></img>
// </div>
// pokaż widok po kliknięciu w <button>Załaduj zdjęcia</button>
// zdjęcia ułóż w 3 kolumnach
//


function dodawanie(a, b) {
    const wynik = a +b 
    console.log(wynik)
    return wynik
}

dodawanie(5, 5)

function ilezarabiam() {
    const billenium = 5000
    const sda = 4000
    const razem = dodawanie(billenium, sda)
    console.log('razem', razem)
}

ilezarabiam()