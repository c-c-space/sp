'use strict'

async function fetchHTML(url, query) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerHTML = html
    })
}

async function fetchText(url, query) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.querySelector(query).innerText = html
    })
}

window.addEventListener("load", () => {
  document.querySelector('#btn').hidden = false;

  const articleAll = document.querySelectorAll('main, article');
  const next = document.querySelector('#next');
  const past = document.querySelector('#past');

  let ii = 0;

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
})
