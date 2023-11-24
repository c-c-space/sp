const now = new Date();
const hour = now.getHours();

if (hour >= 11 && hour <= 15) {
    images = {
        'day/001.gif': ['楽観のテクニック'],
        'day/002.gif': ['楽観のテクニック'],
        'day/003.gif': ['楽観のテクニック'],
        'day/004.gif': ['楽観のテクニック'],
        'day/005.gif': ['楽観のテクニック'],
    }
} else if (hour >= 16 && hour <= 20) {
    images = {
        'night/001.gif': ['楽観のテクニック'],
        'night/002.gif': ['楽観のテクニック'],
        'night/003.gif': ['楽観のテクニック'],
        'night/004.gif': ['楽観のテクニック'],
    }
} else {
    images = {
        'close/001.jpeg': ['令和三年三月の気持ちを表す色を印刷した布'],
        'close/002.jpeg': ['布が松の木の枝に絡まってほつれている'],
        'close/003.jpeg': ['松の木にほつれた糸が絡まっている'],
        'close/004.jpeg': ['布の切断面もほつれている'],
        'close/005.jpeg': ['ピントがぶれている写真'],
        'close/006.jpeg': ['今は布を手製の木枠に貼っています'],
    }
}