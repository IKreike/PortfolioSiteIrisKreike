console.log("test linking");
var i;
i = 1;
console.log(i);

const videos = [
    // "Assets/videos/gold-appearance.mp4",
    // "Assets/videos/gold-pet.mp4",
    // "Assets/videos/gold-disappearance.mp4",
    // "Assets/videos/green-appearance.mp4",
    // "Assets/videos/green-pet.mp4",
    // "Assets/videos/green-disappearance.mp4",
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
    "Assets/videos/ScrollAway.mp4",
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
//     plaatje1: "url('../')",
//     plaatje2:""
// }

const tostinis = {
    titel: "tostini's",
    tekstOpdracht: "",
    tekstKwaliteiten: "Kleurtheorie Character design Creaivieteit binnen limieten Passend thema bedenken en aanhouden",
    tekstUitwerking: "",
    plaatje1: "url('../Assets/PortfolioPics/Tostiny's/tostini's-final.jpeg')",
    plaatje2: "../Assets/PortfolioPics/Tostiny's/mascotte-1.png"
}

const KeesClosed = {
    titel: "KeesClosed",
    tekstOpdracht: "The goal of this project was to make a product that lies close to my passion, and that would simultaneously help better the world. This is a shared project between Tessa van Breukelen, Denizay Ögmen and me. Our shared passion for games and storytelling landed us in this group, and the product of this project made us all proud.",
    tekstKwaliteiten: "kwaliteiten/skills (meerdere dingen of een andere array??)",
    tekstUitwerking: "This puzzlebox consists of three stadia, in wich the user helps a hacker protect an organization from online criminals. Throughout the game, the puzzler can pick up hints that something is wrong, and that the hacker they are helping might not all be trusted. These clues are common signs of internet scamming such as weird e-mail addresses, being asked to klick on links and the promise of a big prize. Making use of this, we tried to make the puzzlers aware of the dangers of common scams on the internet.",
    plaatje1: "url('../Assets/PortfolioPics/KEES/Kees-open.jpeg')",
    plaatje2: "../Assets/PortfolioPics/KEES/Kees-closed.jpeg"
}

const FEDsite = {
    titel: "Site (na)Maken",
    tekstOpdracht: "For this project I tried to remake 2 pages of the Floraholland nl site with front-end coding. I used HTML, CSS and JavaScript to make the pages look an work as similar as possible after witch I added my own flourish with svg animation, a darkmode and accessibility options. ",
    tekstKwaliteiten: "",
    tekstUitwerking: "I really liked this project, as it developed my skills in coding much further in what I expected. In having to re-build something you are forced to discover new ways and tricks of doing things, instead of sticking in your old and trusted methods. For example I learned a lot about svg animation and saw how such a small and relatively simple thing can lift up the website as a whole. ",
    plaatje1: "url('../Assets/PortfolioPics/FEDsite/FEDmine.jpg')",
    plaatje2: "../Assets/PortfolioPics/FEDsite/FEDAnimatie.png"
}

const kaarten = {
    titel: "Fantasy Mapmaking",
    tekstOpdracht: "sdjlsdhf",
    tekstKwaliteiten: "",
    tekstUitwerking: "kaarten uitwerkeing",
    plaatje1: "url('../Assets/PortfolioPics/Kaarten/map-1.1.jpg')",
    plaatje2: "../Assets/PortfolioPics/Kaarten/map-3.jpg"
}

const flesjes = {
    titel: "Bottle Art",
    tekstOpdracht: "In my personal Time I like to make things. One these interests is turning tiny glass bottles into art. I use all kind of materials and techniques to make these bottles come to life, and the end results are beautiful showpieces that are easy to fall in love with.",
    tekstKwaliteiten: "",
    tekstUitwerking: "Doing these little personal projects makes me explore the limits of my creative brain. I constantly run into questions, for example: how am I going to display realistic moss? (Answer: use dried moss) Figuring out solutions for these problems takes a lot of trial and error, but more often than the other try-out lead to inspiration for other projects. My goal is to use different technieques and materials that combine into new designs.",
    plaatje1: "url('../Assets/PortfolioPics/Flesjes/bottle-mushroom1.jpg')",
    plaatje2: "../Assets/PortfolioPics/Flesjes/bottle-death.jpg"
}

const characters = {
    titel: "Character design",
    tekstOpdracht: "edskfraiowe",
    tekstKwaliteiten: "",
    tekstUitwerking: "erwoaeijld",
    plaatje1: "url('../Assets/PortfolioPics/Characters/character-Xyris.png')",
    plaatje2: "../Assets/PortfolioPics/Characters/character-wanderer.jpg"
}



const artikelen = [
    // "none",
    kaarten,
    KeesClosed,
    flesjes,
    tostinis,
    FEDsite,
    characters,
    // "dnd story??? (magpie???)",
    // "tekeningen"
]



console.log(artikelen[2].titel);


var mainpic = document.querySelector(".banner");
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

    mainpic.classList.add("invis");
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
    mainpic.classList.remove("invis");
}

// https://stackoverflow.com/questions/52514522/html5-video-how-to-seamlessly-play-several-videos-and-then-loop-the-sequence

function vorigePagina() {
    i++;
    let play = videos[i];
    video.src = play;

    console.log(play.length);
    setTimeout(vorigePagina2, 2000);
    // play.length gebruiken ipv 2 sec, kan alleen als je weet hoeveel fps

    mainpic.classList.add("invis");
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
console.log(opdrachtTekst);

var subImg = document.querySelector(".subImg");

// var titelBlock = document.querySelector("h2.titel");
var titelArticle = document.querySelector(".titel");
// console.log(titelArticle);

function updateTekst() {
    // console.log(artikelen[Math.round(i / 3)]);
    // console.log(titelArticle);
    titelArticle.textContent = artikelen[Math.round(i / 3)].titel;
    // console.log(titelArticle.textContent);
    opdrachtTekst.textContent = artikelen[Math.round(i / 3)].tekstOpdracht;
    toelichtingTekst.textContent = artikelen[Math.round(i / 3)].tekstUitwerking;
    subImg.src = artikelen[Math.round(i / 3)].plaatje2;
    // console.log("titel word vervangen");
    mainpic.style.backgroundImage = artikelen[Math.round(i / 3)].plaatje1;
    // console.log(mainpic);
    // console.log(artikelen[Math.round(i / 3)].plaatje1);

    // console.log(artikelen[i]);
    // console.log(i);
    // console.log(Math.round(i / 3));
    // console.log(artikelen.length-1);
    if (i == 1) {
        vorige.classList.add("invis");
        console.log("button terugweg");
    } else {
        vorige.classList.remove("invis");
    }
    if (Math.round(i / 3) == artikelen.length-1) {
        volgende.classList.add("invis");
        console.log("button verderweg");
    } else {
        volgende.classList.remove("invis");
    }
}





i = 1;
updateTekst();
