/*
* Dato un array di oggetti letterali con:
*  - url dell’immagine
*  - titolo
*  - descrizione
* Creare un carosello come nella foto allegata.
* Milestone 0:
* Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
* Milestone 1:
* Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
* Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
* Milestone 2:
* Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
* BONUS 1:
* Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
* BONUS 2:
* Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
* BONUS 3:
* Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let primaImmagine = true;
let path = "./assets/"

for (let i = 0; i < images.length; i++) {

    let singoloElemento = images[i]
    
    let active = "";

    if (primaImmagine) {
        active = "active";
        primaImmagine = false;
    }

    document.querySelector('.container_main_img').innerHTML += `
    <div class="container_main_img_titolo item">
        <img src="${path}${singoloElemento.image}" alt="immagini">
        <div class="titolo_image" id='${i}'>
            <h5 class="card-title">${singoloElemento.title}</h5>
            <span class="card-text">${singoloElemento.text}</span>
        </div>
    </div>
    `

    document.querySelector('.container_thumbs').innerHTML += `
    <div class="thumb ${active}">
        <img src="${path}${singoloElemento.image}" alt="">
    </div>
    `
}

let contatore = 0;

const activeClass = document.querySelectorAll('.item');
activeClass[0].classList.remove('item');

const activeThumb = document.querySelectorAll('.thumb img');
activeThumb[0].style.filter = 'brightness(1)';


const prev = document.querySelector('.prev')
const next = document.querySelector('.next')



prev.addEventListener('click',function(){
    activeThumb[contatore].style.filter = 'brightness(0.3)';
    contatore--;
    if (contatore < 0) {
        contatore = images.length -1;
    }
    activeThumb[contatore].style.filter = 'brightness(1)';
    document.querySelector('.container_main_img img').src = `${path}${images[contatore].image}`;
})