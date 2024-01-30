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
    const gradientAll = data.slice()
        .map(color => `#${color[1]},`)
        .join('');

    cover.style.backgroundSize = '100% 1000%';
    cover.style.animation = 'gradient 100s ease infinite';
    cover.style.backgroundImage = `linear-gradient(0deg, ${gradientAll} #fff)`;

    const qr = document.createElement('img')
    qr.src = 'https://creative-community.space/sp/qr.png'
    qr.art = 'https://creative-community.space/sp/'

    window.addEventListener("beforeprint", () => {
        cover.style.backgroundSize = '100% 100%';
        cover.style.animation = 'gradient none';
        document.querySelector(flash).appendChild(qr)
    });

    window.addEventListener("afterprint", () => {
        cover.style.backgroundSize = '100% 1000%';
        cover.style.animation = 'gradient 100s ease infinite';
        qr.remove()
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
