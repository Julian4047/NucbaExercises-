function myFunctionCreate() {
  var btn = document.createElement("div");
  btn.innerHTML = text.value;
  document.body.appendChild(btn);
}

function myFunctionRemove() {
  var myobj = document.querySelector("div");
  myobj.remove();
}
//2ndOption
//function myFunctionCreate() {
//var btn = document.createElement("div");
//btn.innerHTML = text.value;
//document.body.appendChild(btn);
//btn.classList.add("todo");
//}

//function myFunctionRemove() {
//var myobj = document.querySelector(".todo");
//myobj.remove();
//} 
