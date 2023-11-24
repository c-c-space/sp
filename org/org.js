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
