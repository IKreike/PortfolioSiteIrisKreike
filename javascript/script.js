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
//     plaatje2: "",
//     plaatje3: "",
//     plaatje4: "",
// kwaliteit1: "",
// kwaliteit2: "",
// kwaliteit3: "",
// kwaliteit4: "",
// }

const tostinis = {
    titel: "Tostini's",
    tekstOpdracht: "In this project the goal was to make a one pager with 3 articles about different subdivisions of a food. Extra challenging was that it had to be in a Naïve mascot style and were limited with the use of maximum two colors and tones of the chosen colors. I chose the complementary colors green and pink because I liked the idea of combining two unnatural colors in a design that from origin exists only in natural colors.",
    // tekstKwaliteiten: "Kleurtheorie Character design Creaivieteit binnen limieten Passend thema bedenken en aanhouden",
    tekstUitwerking: "This project for me was an exploration of drawing with vectors. It was a new technique for me at the time, and I feel like it worked out amazing. I really like the way I used 3 different mascots to be both the food and the advertiser. I came to find that doing this project in this way, especially with the restrictions, made me learn a lot about keeping in style and vector images.",
    plaatje1: "url(./Assets/PortfolioPics/tostinys/completePage.png)",
    plaatje2: "./Assets/PortfolioPics/tostinys/mascotte-3.png",
    plaatje3: "./Assets/PortfolioPics/tostinys/mascotte-1.png",
    plaatje4: "./Assets/PortfolioPics/tostinys/mascotte-2.png",
    kwaliteit1: "Color theory",
    kwaliteit2: "Character design",
    kwaliteit3: "Vector drawing",
    kwaliteit4: "Creativity within limits",
}

const KeesClosed = {
    titel: "KeesClosed",
    tekstOpdracht: "The goal of this project was to make a product that lies close to my passion, and that would simultaneously help better the world. This is a shared project between Tessa van Breukelen, Denizay Ögmen and me. Our shared passion for games and storytelling landed us in this group, and the product of this project made us all proud.",
    // tekstKwaliteiten: "kwaliteiten/skills (meerdere dingen of een andere array??)",
    tekstUitwerking: "This puzzlebox consists of three stadia, in wich the user helps a hacker protect an organization from online criminals. Throughout the game, the puzzler can pick up hints that something is wrong, and that the hacker they are helping might not all be trusted. These clues are common signs of internet scamming such as weird e-mail addresses, being asked to klick on links and the promise of a big prize. Making use of this, we tried to make the puzzlers aware of the dangers of common scams on the internet.",
    plaatje1: "url(./Assets/PortfolioPics/KEES/Kees-open.jpeg)",
    plaatje3: "./Assets/PortfolioPics/KEES/Kees-closed.jpeg",
    plaatje2: "./Assets/PortfolioPics/KEES/Poster1 copy.png",
    plaatje4: "./Assets/PortfolioPics/KEES/Prototype.jpeg",
    kwaliteit1: "Gamedesign",
    kwaliteit2: "Puzzledesign",
    kwaliteit3: "Story design",
    kwaliteit4: "Machine making skills",
}

const FEDsite = {
    titel: "Site (na)Maken",
    tekstOpdracht: "For this project I tried to remake 2 pages of the Floraholland nl site with front-end coding. I used HTML, CSS and JavaScript to make the pages look an work as similar as possible after witch I added my own flourish with svg animation, a darkmode and accessibility options. ",
    // tekstKwaliteiten: "",
    tekstUitwerking: "I really liked this project, as it developed my skills in coding much further in what I expected. In having to re-build something you are forced to discover new ways and tricks of doing things, instead of sticking in your old and trusted methods. For example I learned a lot about svg animation and saw how such a small and relatively simple thing can lift up the website as a whole. ",
    plaatje1: "url(./Assets/PortfolioPics/FEDsite/FEDmine.jpg)",
    plaatje2: "./Assets/PortfolioPics/FEDsite/FEDmenu.jpg",
    plaatje3: "./Assets/PortfolioPics/FEDsite/contact-light.jpg",
    plaatje4: "./Assets/PortfolioPics/FEDsite/contact-dark.jpg",
    kwaliteit1: "HTML",
    kwaliteit2: "CSS",
    kwaliteit3: "Javascript",
    kwaliteit4: "W3C protocols",
}

// const kaarten = {
//     titel: "Fantasy Mapmaking",
//     tekstOpdracht: "sdjlsdhf",
//     // tekstKwaliteiten: "",
//     tekstUitwerking: "kaarten uitwerkeing",
//     plaatje1: "url(./Assets/PortfolioPics/Kaarten/map-1.1.jpg)",
//     plaatje2: "./Assets/PortfolioPics/Kaarten/map-3.jpg",
//     plaatje3: "",
//     plaatje4: "",
// }

const flesjes = {
    titel: "Bottle Art",
    tekstOpdracht: "In my personal Time I like to make things. One these interests is turning tiny glass bottles into art. I use all kind of materials and techniques to make these bottles come to life, and the end results are beautiful showpieces that are easy to fall in love with.",
    // tekstKwaliteiten: "",
    tekstUitwerking: "Doing these little personal projects makes me explore the limits of my creative brain. I constantly run into questions, for example: how am I going to display realistic moss? (Answer: use dried moss) Figuring out solutions for these problems takes a lot of trial and error, but more often than the other try-out lead to inspiration for other projects. My goal is to use different technieques and materials that combine into new designs.",
    plaatje1: "url(./Assets/PortfolioPics/Flesjes/bottle-mushroom1.jpg)",
    plaatje2: "./Assets/PortfolioPics/Flesjes/bottle-death.jpg",
    plaatje3: "./Assets/PortfolioPics/Flesjes/bottle-blood.jpg",
    plaatje4: "./Assets/PortfolioPics/Flesjes/bottle-jacksDice.jpg",
    kwaliteit1: "Combination of skills",
    kwaliteit2: "Out of the box thinking",
    kwaliteit3: "Combining of materials",
    kwaliteit4: "",
}

const characters = {
    titel: "2D art",
    tekstOpdracht: "I like to challenge myself in my freetime by making art in various 2d media like aquarel, marker, guache, pencils and various other materials. I try to draw different subjects like characters, landscapes and objects. ",
    // tekstKwaliteiten: "",
    tekstUitwerking: "While making character drawings I like to include aspects of their personality. This can be in posture, accessories, background or anything else. Making character art in this way gives me a personal connection to the character and it helps me build them out. ",
    plaatje1: "url(./Assets/PortfolioPics/Characters/character-Xyris.png)",
    plaatje2: "./Assets/PortfolioPics/Characters/character-wanderer.jpg",
    plaatje3: "./Assets/PortfolioPics/Characters/character-jack.jpg",
    plaatje4: "./Assets/PortfolioPics/Characters/character-NikolaHeadshot.jpg",
    kwaliteit1: "Experimentation with materials and techniques",
    kwaliteit2: "Projects on own initiative",
    kwaliteit3: "Art",
    kwaliteit4: "",
}

const vroem = {
    titel: "Multiproduct design",
    tekstOpdracht: "In this project I designed an application that can be used by with different devices. The applications are all recognizably the same and work together seamlessly. The use of both devices complement and fulfill each other, making it one complete product.",
    // tekstKwaliteiten: "",
    tekstUitwerking: "This project was very user experience focused, and with it I practiced methods to convey information in diagram form. Using these wireflows and little context anybody can understand the concept of the application.",
    plaatje1: "url('../Assets/PortfolioPics/Vroem/Wireflow.png')",
    plaatje2: "./Assets/PortfolioPics/Vroem/wireflow-between.png",
    plaatje3: "./Assets/PortfolioPics/Vroem/hifiScreens.png",
    plaatje4: "./Assets/PortfolioPics/Vroem/design principles.png",
    kwaliteit1: "Figma",
    kwaliteit2: "Wireflows",
    kwaliteit3: "User experience",
    kwaliteit4: "Efficient conveying of information",
}

const artikelen = [
    // "none",
    // kaarten,
    KeesClosed,
    vroem,
    tostinis,
    flesjes,
    FEDsite,
    characters,
    // beyond stuur project,
    // "dnd story??? (magpie???)",
    // "tekeningen"
]

var mainpic = document.querySelector(".banner");

var video = document.querySelector("#video");
console.log(video);


// select buttons and make them work
var vorige = document.querySelector(".vorige");
vorige.addEventListener("click", vorigePagina);

var volgende = document.querySelector(".volgende");
volgende.addEventListener("click", volgendePagina1);


// what all happens when the buttons are clicked
function volgendePagina1() {
    i++;
    let play = videos[i];
    video.src = play;

    // console.log(play.length);
    setTimeout(volgendePagina2, 1000);
    // play.length gebruiken ipv 2 sec, kan alleen als je weet hoeveel fps (werkt nog steeds niet diosfjasljflah) (met *50 werkte het ongeveer)

    mainpic.classList.add("invis");
}

function volgendePagina2() {
    // console.log("delayed?");
    i++;
    let play = videos[i];
    video.src = play;
    setTimeout(volgendePagina3, 1000);
}

function volgendePagina3() {
    // console.log("delayed?2");
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
    setTimeout(vorigePagina2, 1000);
    // play.length gebruiken ipv 2 sec, kan alleen als je weet hoeveel fps

    mainpic.classList.add("invis");
}

function vorigePagina2() {
    console.log("delayed?raaaaa");
    i = i - 5;
    let play = videos[i];
    video.src = play;
    setTimeout(volgendePagina3, 1000);
}


//selecteer de teksten
var opdrachtTekst = document.querySelector(".opdracht p");
// var kwaliteitenLijst = document.querySelector(".kwaliteiten");
var toelichtingTekst = document.querySelector(".overProject p");
// console.log(opdrachtTekst);

// selecteer de plaatjes
var subImg = document.querySelector(".subImg");
var img3 = document.querySelector(".img3");
var img4 = document.querySelector(".img4");

//selecteer de titel/ naam van het project
var titelArticle = document.querySelector(".titel");

// select all the skill items
var skill1 = document.querySelector(".kwaliteiten li:nth-child(1)");
var skill2 = document.querySelector(".kwaliteiten li:nth-child(2)");
var skill3 = document.querySelector(".kwaliteiten li:nth-child(3)");
var skill4 = document.querySelector(".kwaliteiten li:nth-child(4)");

function updateTekst() {
    // console.log(artikelen[Math.round(i / 3)]);
    // console.log(titelArticle);
    titelArticle.textContent = artikelen[Math.round(i / 3)].titel;
    // console.log(titelArticle.textContent);
    opdrachtTekst.textContent = artikelen[Math.round(i / 3)].tekstOpdracht;
    toelichtingTekst.textContent = artikelen[Math.round(i / 3)].tekstUitwerking;
    subImg.src = artikelen[Math.round(i / 3)].plaatje2;
    img3.src = artikelen[Math.round(i / 3)].plaatje3;
    img4.src = artikelen[Math.round(i / 3)].plaatje4;
    // console.log("titel word vervangen");
    mainpic.style.backgroundImage = artikelen[Math.round(i / 3)].plaatje1;

    skill1.textContent = artikelen[Math.round(i / 3)].kwaliteit1;
    skill2.textContent = artikelen[Math.round(i / 3)].kwaliteit2;
    skill3.textContent = artikelen[Math.round(i / 3)].kwaliteit3;
    skill4.textContent = artikelen[Math.round(i / 3)].kwaliteit4;

    if (i == 1) {
        vorige.classList.add("invis");
        console.log("button terugweg");
    } else {
        vorige.classList.remove("invis");
    }
    if (Math.round(i / 3) == artikelen.length - 1) {
        volgende.classList.add("invis");
        console.log("button verderweg");
    } else {
        volgende.classList.remove("invis");
    }
}





i = 1;
updateTekst();
