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
//btn.classList.add("input");
//}

//function myFunctionRemove() {
//var myobj = document.querySelector(".input");
//myobj.remove();
//} 
