let table = document.createElement("table");
table.setAttribute("border", "11");
table.setAttribute("cellpadding", "10");

let heading2 = document.createElement("h2");
document.body.append(heading2);

for (let i=1; i<=5;i++) {
    let tr = document.createElement("tr");
  for(let j=1; j<=5; j++){
    let td=document.createElement("td");
        td.textContent= (j);
        tr.append(td);  
    }   table.append(tr);
}
document.body.append(table);