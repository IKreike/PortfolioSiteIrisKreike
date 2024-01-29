console.log("test linking");
var i;
i = 1;
console.log(i);


const videos = [
    "Assets/videos/gold-appearance.mp4",
    "Assets/videos/gold-pet.mp4",
    "Assets/videos/gold-disappearance.mp4",
    "Assets/videos/green-appearance.mp4",
    "Assets/videos/green-pet.mp4",
    "Assets/videos/green-disappearance.mp4",
    // boekfilmpjes
    "Assets/videos/OpenBook.mp4",
    "Assets/videos/IdleBook.mp4",
    "Assets/videos/CloseBook.mp4",
    //laptopfilmpjes
    "Assets/videos/TakeLaptop.mp4",
    "Assets/videos/laptopBOX.mp4",
    "Assets/videos/LaptopGone.mp4",
    //cards filmpjes
    "Assets/videos/OpenCards.mp4",
    "Assets/videos/Cardsflip.mp4",
    "Assets/videos/AwayCards.mp4",
    //scroll filmpjes
    "Assets/videos/TakeScroll.mp4",
    "Assets/videos/scrollBOX.mp4",
    "Assets/videos/ScrollAway.mp4"
];

// const voorbeeld = {
//     titel: "",
//     tekstOpdracht: " ",
//     tekstKwaliteiten: "",
//     tekstUitwerking: "",
//     plaatje1: "",
//     plaatje2:""
// }

const tostinis = {
    titel: "tostini's",
    tekstOpdracht: "Een one-pager over jouw favoriete eten, een naïve mascot stijl en het gebruik van maximaal 2 kleuren(En tinten en tonen hiervan).",
    tekstKwaliteiten: "Kleurtheorie Character design Creaivieteit binnen limieten Passend thema bedenken en aanhouden",
    tekstUitwerking: "Bij dit project heb ik door het gebruik van 2 kleuren en tonen daarvan een one-pager gemaakt voor mijn favoriete eten, tosti’s. De opdracht was om 3 kopjes te maken, en gebruik te maken van mascottes. Ik heb de twee complementaire kleuren groen en magenta gekozen, omdat de extra challenge van het gebruik van onnatuurlijke kleuren mij aansprak, in een onderwerp dat uit natuurlijke tonen bestaat.",
    plaatje1: "url('../Assets/PortfolioPics/Tostiny's/tostini's-final.jpeg')",
    plaatje2: "../Assets/PortfolioPics/Tostiny's/mascotte-1.png"
}

const KeesClosed = {
    titel: "KeesClosed",
    tekstOpdracht: "Maak iets wat dicht bij je passie licht en de wereld verbeterd Uitwerking: Een excape box die mensen op de hoogte stelt van het gevaar van (online)",
    tekstKwaliteiten: "kwaliteiten/skills (meerdere dingen of een andere array??)",
    tekstUitwerking: "Ik heb in dit project met een groepje een puzzelbox gemaakt. Deze puzzelbox heeft 3 stadia, waarin je een verhaal volgt en helpt de HvA te beschermen tegen hackers door codes door te geven. Dit project was een groot project bestaande uit meerdere delen zoals puzzeldesign, code en vormgeving. Ik heb me hierbij gericht op het puzzeldesign, om te zorgen dat de puzzels en het verhaal goed lopen en passen bij het thema.",
    plaatje1: "url('../Assets/PortfolioPics/KEES/Kees-open.jpeg')",
    plaatje2: "../Assets/PortfolioPics/KEES/Kees-closed.jpeg"
}

const FEDsite = {
    titel: "Site (na)Maken",
    tekstOpdracht: " ",
    tekstKwaliteiten: "",
    tekstUitwerking: "In deze opdracht heb ik zo goed mogelijk van 2 pagina’s de site van floraholland in code nagebouwd. Hierna heb ik verschillende features toegevoegd, zoals een darkmode en een optie om de lettergrootte aan te passen.  ",
    plaatje1: "",
    plaatje2:""
}

const kaarten = {
    titel: "Fantasie kaartmaken",
    tekstOpdracht: "",
    tekstKwaliteiten: "",
    tekstUitwerking: "",
    plaatje1: "",
    plaatje2:""
}

const flesjes = {
    titel: "flesjes maken",
    tekstOpdracht: " ",
    tekstKwaliteiten: "",
    tekstUitwerking: "",
    plaatje1: "",
    plaatje2:""
}



const artikelen = [
    "none",
    kaarten,
    KeesClosed,
    flesjes,
    tostinis,
    FEDsite,
    "characters????",
    "dnd story??? (magpie???)",
    "tekeningen"
]



console.log(artikelen[2].titel);


var mainpic =document.querySelector(".banner");
// console.log(mainpic.style.backgroundImage);
// var mainBlock = document.querySelector(".")


var video = document.querySelector("#video");
console.log(video);



var vorige = document.querySelector(".vorige");
console.log(vorige);
vorige.addEventListener("click", vorigePagina);

var volgende = document.querySelector(".volgende");
console.log(volgende);
volgende.addEventListener("click", volgendePagina1);


function volgendePagina1() {
    i++;
    let play = videos[i];
    video.src = play;

    console.log(play.length);
    setTimeout(volgendePagina2, 2000);
    // play.length gebruiken ipv 2 sec, kan alleen als je weet hoeveel fps (werkt nog steeds niet diosfjasljflah) (met *50 werkte het ongeveer)

    mainpic.classList.toggle("invis");
}

function volgendePagina2() {
    console.log("delayed?");
    i++;
    let play = videos[i];
    video.src = play;
    setTimeout(volgendePagina3, 2000);
}

function volgendePagina3() {
    console.log("delayed?2");
    i++;
    let play = videos[i];
    video.src = play;
    updateTekst();
    mainpic.classList.toggle("invis");
}

// https://stackoverflow.com/questions/52514522/html5-video-how-to-seamlessly-play-several-videos-and-then-loop-the-sequence

function vorigePagina() {
    i++;
    let play = videos[i];
    video.src = play;

    console.log(play.length);
    setTimeout(vorigePagina2, 2000);
    // play.length gebruiken ipv 2 sec, kan alleen als je weet hoeveel fps

    mainpic.classList.toggle("invis");
}

function vorigePagina2() {
    console.log("delayed?raaaaa");
    i = i - 5;
    let play = videos[i];
    video.src = play;
    setTimeout(volgendePagina3, 2000);
}



var opdrachtTekst = document.querySelector(".opdracht p");
var kwaliteitenLijst = document.querySelector(".kwaliteiten");
var toelichtingTekst = document.querySelector(".overProject p");

var subImg = document.querySelector(".subImg");

var titel = document.querySelector(".titel");
console.log(titel);

function updateTekst() {
    // titel.textContent = artikelen[k];
    titel.textContent = artikelen[Math.round(i / 3)].titel;
    opdrachtTekst.textContent = artikelen[Math.round(i / 3)].tekstOpdracht;
    toelichtingTekst.textContent = artikelen[Math.round(i / 3)].tekstUitwerking;
    subImg.src= artikelen[Math.round(i / 3)].plaatje2;
    console.log("titel word vervangen");
    // mainpic.src= artikelen[Math.round(i / 3)].plaatje1;
    mainpic.style.backgroundImage= artikelen[Math.round(i / 3)].plaatje1;
    console.log(mainpic);
    console.log(artikelen[Math.round(i / 3)].plaatje1);
}

//  mainpic.classList.toggle(invis)