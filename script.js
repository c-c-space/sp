const imageAll = Object.entries(images);
imageAll.forEach((img) => {
  const imagesLi = document.createElement('li');

  const imagesImg = document.createElement('img');
  imagesImg.setAttribute("src", img[0]);
  imagesImg.setAttribute("alt", Object.values(img[1])[0]);
  imagesLi.appendChild(imagesImg);
  document.querySelector('.images').appendChild(imagesLi);
});
