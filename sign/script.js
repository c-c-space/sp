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