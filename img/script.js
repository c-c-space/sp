let imgArr

if (hour >= 11 && hour <= 15) {
    imgArr = [
        "img/day/001.gif",
        "img/day/002.gif",
        "img/day/003.jpeg",
        "img/day/004.gif",
        "img/day/005.jpeg",
        "img/day/006.gif",
        "img/day/007.gif",
        "img/day/008.gif",
        "img/day/009.gif",
        "img/day/010.gif"
    ]
} else if (hour >= 16 && hour <= 20) {
    imgArr = [
        "img/night/001.jpeg",
        "img/night/002.jpeg",
        "img/night/003.jpeg",
        "img/night/004.gif",
        "img/night/005.jpeg",
        "img/night/006.gif",
        "img/night/007.gif",
        "img/night/008.gif",
        "img/night/009.gif",
        "img/night/010.JPG"
    ]
} else {
    imgArr = [
        "img/close/001.JPG",
        "img/close/002.JPG",
        "img/close/003.JPG",
        "img/close/004.JPG",
        "img/close/005.jpeg",
        "img/close/006.jpeg",
        "img/close/007.JPG",
        "img/close/008.JPG",
        "img/close/009.gif",
        "img/close/010.jpeg"
    ]
}