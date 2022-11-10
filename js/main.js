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

let counter = 0;

for(let i = 0; i < images.length; i++){

    const firstImage = document.getElementsByClassName("first-image")[i];
    const preview = document.getElementsByClassName("preview")[i];

    const title = document.getElementById("titolo");

    const currentImage = images[i];

    let element = ` <img src="${currentImage.image}" class="img-small"></img> `


        preview.innerHTML = element;
    
    if(i == 0){

        
        firstImage.innerHTML = ` <img src="${images[counter].image}" class="img-big"></img>
                                 <h1 id="titolo">${images[counter].title}</h1> `
    }

    
    
    console.log(counter);

    

    
    
}


const btnUp = document.getElementById("upbtn");
const downBtn = document.getElementById("downbtn");




btnUp.addEventListener("click", function(){
    const firstImage = document.getElementById("main-image");
    firstImage.innerHTML = ` <img src="${images[counter].image}" class="img-big"></img>
                             <h1 id="titolo">${images[counter].title}</h1> `

    if(counter < images.length - 1){
        counter++;
    }
    else{
        counter = 0;
    }
    

    console.log(counter);
});
   

downBtn.addEventListener("click", function(){

    if(counter > 0){
        counter--;
    }
    else{
        counter = images.length -1;
    }

    console.log(counter);
    const firstImage = document.getElementById("main-image");
    firstImage.innerHTML = ` <img src="${images[counter].image}" class="img-big"></img> `

    
})
//Devo ciclare l'array e far stampare 5 immagini
//Devo aggiungere una classe alla prima immagine
