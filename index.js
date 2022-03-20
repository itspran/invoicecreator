let tasks = [];
let car = {
  label: "Wash car",
  cost: 10,
};
let lawn = {
  label: "Mow Lawn",
  cost: 20,
};
let weeds = {
  label: "Pull Weeds",
  cost: 30,
};

carbtn = document.getElementById("car-btn");

carbtn.addEventListener("click", function () {
  if (tasks.length < 10) {
    tasks.push(car);
    render(tasks);
  }
});

lawnbtn = document.getElementById("lawn-btn");

lawnbtn.addEventListener("click", function () {
  if (tasks.length < 10) {
    tasks.push(lawn);
    render(tasks);
  }
});

weedbtn = document.getElementById("weed-btn");

weedbtn.addEventListener("click", function () {
  if (tasks.length < 10) {
    tasks.push(weeds);
    render(tasks);
  }
});

list = document.getElementById("taskname");
amtlist = document.getElementById("amtlist");
total = document.getElementById("totalamount");

function remove(x) {
  tasks.splice(x, 1);
  render(tasks);
}

invoice = document.getElementById("inv");

invoice.addEventListener("click", function () {
  tasks = [];
  render(tasks);
});

function render(arr) {
  if (arr.length > 10) return;
  let fin = "";
  for (let i = 0; i < arr.length; i++) {
    fin += `<li>${arr[i].label} <button class="removebtn" id="${i}" onClick="remove(this.id)">Remove</button></li>`;
  }

  let fin2 = "";

  for (let i = 0; i < arr.length; i++) {
    fin2 += `<li><span class ="sign">$</span><span class ="amount">${arr[i].cost}</span></li>`;
  }

  let fin3 = 0;
  for (let i = 0; i < arr.length; i++) {
    fin3 += arr[i].cost;
  }
  amtlist.innerHTML = fin2;
  total.textContent = `$${fin3}`;
  list.innerHTML = fin;
}
