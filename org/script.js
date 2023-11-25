let orgArr

if (hour >= 11 && hour <= 15) {
    orgArr = [
        'org/day/001.gif',
        'org/day/002.gif',
    ]
} else if (hour >= 16 && hour <= 20) {
    orgArr = [
        'org/night/001.gif'
    ]
} else {
    orgArr = [
        'org/close/001.jpg'
    ]
}
