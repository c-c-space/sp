const now = new Date();
const hour = now.getHours();

if (hour >= 11 && hour <= 15) {
    images = {
        'day/001.gif': ['言葉の強さと方向と感情'],
        'day/002.gif': ['手指消毒'],
    }
} else if (hour >= 16 && hour <= 20) {
    images = {
        'night/001.gif': ['言葉の強さと方向と感情'],
    }
} else {
    images = {
        'close/001.jpg': ['言葉の強さと方向と感情'],
    }
}
let weight = {
    'must': '100 ~ 90',
    'should': '90 ~ 70',
    'can': '70 ~ 50',
    'may': '50 ~ 30',
    'could': '30 ~ 10',
    'cant': '10 ~ 0',
}

let size = {
    'positive': '+',
    'negative': '-',
    'both': '±',
    'neither': '=',
    'unknown': '?',
}

let feel = {
    'happy': '🙂',
    'hearts': '🥰',
    'tongue': '😜',
    'thinking': '🤔',
    'neutral': '😐',
    'relieved': '😌',
    'dizzy': '😵',
    'frowning': '😮',
    'crying': '😢',
    'steam': '😤',
}

radio(weight, "weight");
radio(size, "size");
radio(feel, "feel");

org("feel");

// ラジオボタンの生成
function radio(arr, name = "") {
    let orgEach = arr + 'Each'
    let orgRadio = arr + 'Radio'
    let orgLabel = arr + 'Label'

    let orgInput = document.querySelector(`#${name}`)
    Object.entries(arr).forEach(orgEach => {
        const orgRadio = document.createElement('input')
        orgRadio.setAttribute('type', 'radio')
        orgRadio.setAttribute('name', `${name}`)
        orgRadio.setAttribute('id', orgEach[0])
        orgRadio.value = orgEach[0]
        orgInput.appendChild(orgRadio)

        const orgLabel = document.createElement('label')
        orgLabel.setAttribute('for', orgEach[0])
        orgLabel.innerText = orgEach[1]
        orgInput.appendChild(orgLabel)
    })
}

// アイテムの表示・非表示
function org(org = "") {
    let radioAll = document.querySelectorAll(`#${org} input[type='radio']`)
    let targets = document.querySelectorAll('.list li');

    if (radioAll) {
        for (let i of radioAll) {
            i.addEventListener('change', () => {
                let name = i.getAttribute('name')
                let value = i.value
                let thisAll = document.querySelectorAll(`.list li[data-${name}='${value}']`)
                for (let ii of thisAll) {
                    ii.classList.remove('hidden')
                }

                let orgAll = document.querySelectorAll(`.list li:not([data-${name}='${value}'])`)
                for (let iii of orgAll) {
                    if (!iii.classList.contains('hidden')) {
                        iii.classList.add('hidden')
                    }
                }
            })
        }
    }
}
