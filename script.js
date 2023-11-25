async function fetchHTML(url = '', query = '') {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerHTML = html
    })
}

function thisIMG(query, arr) {
  arr.forEach((arrEach) => {
    const crearIMG = document.createElement("img");
    crearIMG.src = arrEach;
    document.querySelector(query).appendChild(crearIMG)
  });
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    fetchHTML("img/readme.html", "#img section")
    thisIMG("#img aside", imgArr)
    fetchHTML("weare/readme.html", "#weare section")
    thisIMG("#weare aside", weareArr)
    fetchHTML("sign/readme.html", "#sign section")
    thisIMG("#sign aside", signArr)
    fetchHTML("www/readme.html", "#www section")
    thisIMG("#www aside", wwwArr)
    fetchHTML("org/readme.html", "#org section div")
    thisIMG("#org aside", orgArr)
    fetchHTML("readme.html", "#print section")

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
  } else if (event.target.readyState === 'complete') {
    const articleAll = document.querySelectorAll('article');
    const next = document.querySelector('#next');
    const past = document.querySelector('#past');

    let ii = 0;
    thisArticle()

    function thisArticle() {
      for (const articleThis of articleAll) {
        articleThis.hidden = true;
      }
      articleAll[ii].hidden = false;
    };

    next.addEventListener('click', function () {
      if (ii == 0) {
        ii++;
      } else if (ii == 1) {
        ii++;
      } else if (ii < articleAll.length - 1) {
        ii++;
      } else if (ii == articleAll.length - 1) {
        ii = 0;
      }
      thisArticle()
    }, false);

    past.addEventListener('click', function () {
      if (ii == 0) {
        ii = articleAll.length - 1;
      } else if (ii == 1) {
        ii--;
      } else if (ii < articleAll.length - 1) {
        ii--;
      } else if (ii == articleAll.length - 1) {
        ii--;
      }
      thisArticle()
    }, false);
  }
});