let weareArr

if (hour >= 11 && hour <= 15) {
    weareArr = [
        'weare/day/001.gif',
        'weare/day/002.gif',
        'weare/day/003.gif',
        'weare/day/004.gif'
    ]
} else if (hour >= 16 && hour <= 20) {
    weareArr = [
        'weare/night/001.gif',
        'weare/night/002.gif',
        'weare/night/003.gif',
        'weare/night/004.gif'
    ]
} else {
    weareArr = [
        'weare/close/001.gif',
        'weare/close/002.gif',
        'weare/close/003.JPG',
        'weare/close/004.JPG'
    ]
}