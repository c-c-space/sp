const now = new Date();
const hour = now.getHours();

if (hour >= 11 && hour <= 15) {
    images = {
        'day/001.gif': ['楽観のテクニック'],
        'day/002.gif': ['楽観のテクニック'],
        'day/003.jpeg': ['楽観のテクニック'],
        'day/004.gif': ['楽観のテクニック'],
        'day/005.jpeg': ['楽観のテクニック'],
        'day/006.gif': ['楽観のテクニック'],
        'day/007.gif': ['楽観のテクニック'],
        'day/008.gif': ['楽観のテクニック'],
        'day/009.gif': ['楽観のテクニック'],
        'day/010.gif': ['楽観のテクニック'],
    }
} else if (hour >= 16 && hour <= 20) {
    images = {
        'night/001.jpeg': ['楽観のテクニック'],
        'night/002.jpeg': ['楽観のテクニック'],
        'night/003.jpeg': ['楽観のテクニック'],
        'night/004.gif': ['楽観のテクニック'],
        'night/005.jpeg': ['楽観のテクニック'],
        'night/006.gif': ['楽観のテクニック'],
        'night/007.gif': ['楽観のテクニック'],
        'night/008.gif': ['楽観のテクニック'],
        'night/009.gif': ['楽観のテクニック'],
        'night/010.JPG': ['楽観のテクニック'],
    }
} else {
    images = {
        'close/001.JPG': ['紫の光'],
        'close/002.JPG': ['オレンジの光'],
        'close/003.JPG': ['青い光'],
        'close/004.JPG': ['緑の光'],
        'close/005.jpeg': ['窓に反射する光'],
        'close/006.jpeg': ['窓に反射する室内'],
        'close/007.JPG': ['外から見た室内の光'],
        'close/008.JPG': ['外から見た室内の光'],
        'close/009.gif': ['光の色の変化'],
        'close/010.jpeg': ['全景'],
    }
}