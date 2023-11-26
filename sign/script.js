let signArr

if (hour >= 11 && hour <= 15) {
    signArr = [
        "sign/day/001.gif",
        "sign/day/002.gif",
        "sign/day/003.gif",
        "sign/day/004.gif",
        "sign/day/005.gif"
    ]
} else if (hour >= 16 && hour <= 20) {
    signArr = [
        "sign/night/001.gif",
        "sign/night/002.gif",
        "sign/night/003.gif",
        "sign/night/004.gif"
    ]
} else {
    signArr = [
        "sign/close/001.jpeg",
        "sign/close/002.jpeg",
        "sign/close/003.jpeg",
        "sign/close/004.jpeg",
        "sign/close/005.jpeg",
        "sign/close/006.jpeg"
    ]
}

async function sign(gradient, flash, csv) {
    const cover = document.querySelector(gradient)
    const response = await fetch(csv);
    const text = await response.text();
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()));
    const gradientAll = data.slice(1)
        .map(color => `#${color[1]},`)
        .join('');
    let size = data.length * 50;
    cover.style.backgroundSize = `100% ${size}%`;
    let speed = data.length * 5;
    cover.style.animation = `gradient ${speed}s ease infinite`;
    cover.style.backgroundImage = `linear-gradient(0deg, ${gradientAll} #fff)`;

    window.addEventListener("beforeprint", () => {
      cover.style.backgroundSize = '100% 100%';
      cover.style.animation = 'gradient none';
    });

    const flashAll = data.slice(1)
        .map(sign => `
        <li style="background:#${sign[1]};" hidden>
        <b style="color:#${sign[1]};">${sign[0]}</b>
        </li>
        `)
        .join('');
    document.querySelector(flash).innerHTML = flashAll;

    function viewSlide(elem, i = -1) {
        let liArr = document.querySelectorAll(elem);
        if (i >= 0) {
            liArr[i].hidden = true;
        }
        i++;

        if (i >= liArr.length) {
            i = 0;
        }
        liArr[i].hidden = false;
        const speed = document.querySelector('#flash_speed')
        let msec = speed.max - speed.value;
        setTimeout(function () {
            viewSlide(elem, i);
        }, msec);
    }
    viewSlide('#flash li');
}

window.addEventListener("load", () => {
    sign('#cover', '#flash', 'sign/index.csv');
}, false)
