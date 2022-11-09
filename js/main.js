"use strict";


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

//Clono il template HTML
const node = document.querySelector(".container");

const clone = node.cloneNode(node);
document.body.appendChild(clone);

node.parentNode.removeChild(node);



for(let i = 0; i < images.length; i++){
    const element = document.getElementsByClassName("main-image-container")[i];
    

    const currentImages = images[i];
    
    const imgPrimary = `<img class="primary-images" src="${currentImages.image}"></img>`
    const imgSecondary = `<img class="secondary-images" src="${currentImages.image}"></img>`

    if(i >= 1){
        const secondElement = document.getElementsByClassName("preview")[i -1];
        secondElement.classList.add("secondary-images");
        secondElement.innerHTML = imgSecondary;
    }
    else{
        element.classList.add("primary-image");
        element.innerHTML = imgPrimary;
    }
    

    
    
}



//Devo ciclare l'array e far stampare 5 immagini
//Devo aggiungere una classe alla prima immagine
