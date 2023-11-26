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

function changeHidden() {
    const mainAll = document.querySelectorAll('main')
    mainAll.forEach(main => {
        if (main.hidden == false) {
            main.hidden = true;
        } else {
            main.animate(
                [
                    { opacity: 0 },
                    { opacity: 1 }
                ],
                { duration: 1000 }
            )
            main.hidden = false
        }
    })
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
    cover.style.backgroundSize = '100% 1000%';
    cover.style.animation = 'gradient 100s ease infinite';
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
}

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
