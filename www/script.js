let wwwArr

if (hour >= 11 && hour <= 15) {
    wwwArr = [
        "www/day/001.jpeg",
        "www/day/002.gif",
        "www/day/003.jpeg",
        "www/day/004.gif",
        "www/day/005.jpeg"
    ]
} else if (hour >= 16 && hour <= 20) {
    wwwArr = [
        "www/night/001.gif",
        "www/night/002.gif",
        "www/night/003.JPG",
        "www/night/004.gif",
        "www/night/005.jpeg"
    ]
} else {
    wwwArr = [
        "www/close/001.JPG",
        "www/close/002.gif",
        "www/close/003.JPG",
        "www/close/004.JPG",
        "www/close/005.JPG"
    ]
}