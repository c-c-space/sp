const now = new Date();
const hour = now.getHours();

if (hour >= 11 && hour <= 15) {
    images = {
        'day/001.gif': ['楽観のテクニック'],
        'day/002.gif': ['楽観のテクニック'],
        'day/003.gif': ['楽観のテクニック'],
        'day/004.gif': ['楽観のテクニック'],
    }
} else if (hour >= 16 && hour <= 20) {
    images = {
        'night/001.gif': ['楽観のテクニック'],
        'night/002.gif': ['楽観のテクニック'],
        'night/003.JPG': ['楽観のテクニック'],
        'night/004.JPG': ['楽観のテクニック'],
    }
} else {
    images = {
        'close/001.gif': ['楽観のテクニック'],
        'close/002.gif': ['楽観のテクニック'],
        'close/003.JPG': ['楽観のテクニック'],
        'close/004.JPG': ['楽観のテクニック'],
    }
}