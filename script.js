const card = document.querySelector(".card3d");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 30;
    let y = (window.innerHeight / 2 - e.pageY) / 30;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});