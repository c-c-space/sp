'use strict'

const now = new Date();
const hour = now.getHours();
let directory;

function thisIMG(query, arr) {
    document.querySelector(query).innerHTML = "";
    arr.forEach((arrEach) => {
        const crearIMG = document.createElement("img");
        crearIMG.src = directory + arrEach;
        document.querySelector(query).appendChild(crearIMG)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollElementAll = document.querySelectorAll('aside');
    scrollElementAll.forEach((scrollElement) => {
        scrollElement.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
            if (
                (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
                (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
            )
                return;
            e.preventDefault();
            scrollElement.scrollLeft += e.deltaY;
        });
    });
});