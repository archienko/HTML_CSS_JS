const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const button = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");

class MainClass {
  constructor() {}

  calculator(a, b) {
    let tableExists = document.getElementById('mainTable');
    if (tableExists){ document.getElementById('mainTable').remove();}

    let table = document.createElement("table");
    
    document.body.append(table);
    table.setAttribute("id", "mainTable");
    table.setAttribute("border", "1px");
    table.setAttribute("border-collapse", "collapse");
    table.setAttribute("cellspacing", "0");

    for (let i = 1; i <= a; i++) {
      let tr = document.createElement("tr");

      table.appendChild(tr);

      for (let j = 1; j <= b; j++) {
        let td = document.createElement("td");

        tr.appendChild(td);
        td.innerText = i * j;
      }
    }
  }
}
main = new MainClass();

button.onclick = function () {
  var val1 = input1.value;
  var val2 = input2.value;
  if (val1 != 0 && val2 != 0){main.calculator(val1, val2);}
};

resetBtn.onclick = function(){
    input1.value = 0;
    input2.value = 0;
    let tableExists = document.getElementById('mainTable');
    if (tableExists){ document.getElementById('mainTable').remove();}
}

button.onclick();
resetBtn.onclick();
