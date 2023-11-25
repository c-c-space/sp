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

function multi_filter(h, t, s, r = "") {
  let hidden = h;
  let targets = document.querySelectorAll(t);
  let selects = document.querySelectorAll(s);
  let result = document.querySelector(r);
  let result_msg = "";

  if (selects) {
    //****** for all select ******
    for (let i of selects) {
      i.addEventListener("change", () => {
        let hidden_num = 0;
        //*** for each target ***
        for (let ii of targets) {
          //*** delete hidden class ***
          ii.classList.remove(hidden);
          //*** check target every select ***
          for (let iii of selects) {
            //*** get select name value / option value / target data attribute ***
            let value = iii.value;
            let name = iii.getAttribute("name");
            let item_data = ii.getAttribute("data-" + name);
            //*** set hidden class ***
            // exist value & except all & item_data not match & no hidden class
            if (value && value !== "all" && value !== item_data && !ii.classList.contains(hidden)) {
              ii.classList.add(hidden);
              hidden_num++;
            }
          }
        }

        //****** result message ******
        if (result) {
          //*** not found ***
          if (hidden_num === targets.length) {
            result_msg = "No such thing..";
          }
          //*** found ***
          else {
            let result_num = targets.length - hidden_num;
            result_msg = result_num + " results";
          }
          result.innerText = result_msg;
        }
      });
    }
  }
}

//*** call ***
multi_filter("d-none", ".js-filter-item", ".js-filter", ".js-filter-msg");
