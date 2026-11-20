let images=[];

let current=0;
let active=1;

const animations=[
'zoom1',
'zoom2',
'panLeft',
'panRight'
];

async function loadImages(){

    let response=await fetch(
    'https://api.github.com/repos/DesignServizi/sandiego/contents/images');

    let data=await response.json();

    images=[];

    data.forEach(file=>{

        if(file.download_url)
            images.push(file.download_url);

    });

}

loadImages();

setInterval(loadImages,60000);

function randomAnimation(){

    return animations[
        Math.floor(Math.random()*animations.length)
    ];

}

function showSlide(){

    if(images.length===0)
        return;

    let next=(active===1)?2:1;

    let slide=document.getElementById("bg"+next);

    slide.innerHTML="";

    let back=document.createElement("div");
    back.className="back";

    let image=document.createElement("div");
    image.className="image "+randomAnimation();

    back.style.backgroundImage=
        "url("+images[current]+")";

    image.style.backgroundImage=
        "url("+images[current]+")";

    slide.appendChild(back);
    slide.appendChild(image);

    slide.classList.add("visible");

    document
    .getElementById("bg"+active)
    .classList.remove("visible");

    active=next;

    current++;

    if(current>=images.length)
        current=0;

}

setTimeout(function(){

    showSlide();

    setInterval(showSlide,3000);

},1000);
