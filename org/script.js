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

async function orgAll(query, csv) {
    const orgAll = document.querySelector(query)
    const response = await fetch(csv);
    const text = await response.text();
    const data = text.trim().split('\n')
        .map(line => line.split(',').map(x => x.trim()));
    const allORG = data.slice(1)
        .map(iii => `
        <li class="${iii[1]} ${iii[2]} ${iii[3]}" data-weight="${iii[1]}" data-size="${iii[2]}" data-feel="${iii[3]}">
        ${iii[0]}
        </li>
        `)
        .join('');
    orgAll.innerHTML = allORG;
}

// ラジオボタンの生成
function radio(arr, name) {
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


document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        radio(feel, "feel");
        orgAll('#org ul', 'org/index.csv');
    } else if (event.target.readyState === 'complete') {
        let radioAll = document.querySelectorAll('#feel input')
        let targets = document.querySelectorAll('#org ul.list li');

        if (radioAll) {
            for (let iii of radioAll) {
                iii.addEventListener('change', () => {
                    for (let iiii of targets) {
                        iiii.hidden = true;
                    }
                    let orgAll = document.querySelectorAll(`#org ul.list li.${iii.value}`);
                    for (let iiiii of orgAll) {
                        iiiii.hidden = false;
                    }
                })
            }
        }
    }
});