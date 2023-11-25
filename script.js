
function thisIMG(query, arr) {
  arr.forEach((arrEach) => {
    const crearIMG = document.createElement("img");
    crearIMG.src = arrEach;
    document.querySelector(query).appendChild(crearIMG)
  });
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    thisIMG("#img aside", imgArr)
    thisIMG("#sign aside", signArr)
    thisIMG("#www aside", wwwArr)
    thisIMG("#weare aside", weareArr)
    thisIMG("#org aside", orgArr)

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

    let i = 0;
    thisArticle()

    function thisArticle() {
      for (const articleThis of articleAll) {
        articleThis.hidden = true;
      }
      articleAll[i].hidden = false;
    };

    next.addEventListener('click', function () {
      if (i == 0) {
        i++;
      } else if (i == 1) {
        i++;
      } else if (i < articleAll.length - 1) {
        i++;
      } else if (i == articleAll.length - 1) {
        i = 0;
      }
      thisArticle()
    }, false);

    past.addEventListener('click', function () {
      if (i == 0) {
        i = articleAll.length - 1;
      } else if (i == 1) {
        i--;
      } else if (i < articleAll.length - 1) {
        i--;
      } else if (i == articleAll.length - 1) {
        i--;
      }
      thisArticle()
    }, false);
  }
});