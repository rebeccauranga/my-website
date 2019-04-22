var hideSocialHeight = 400;

/** this is a function declaration  */
function onScroll(event) {
  var socialElement = document.querySelector("#social");
  if (window.scrollY > hideSocialHeight) {
    socialElement.classList.add("social-hidden");
  } else {
    socialElement.classList.remove("social-hidden");
  }
}

function showNameLogo() {
  var nameLogos = document.querySelectorAll(".name-logo img");
  nameLogos.forEach(function(element) {
    element.classList.add("name-logo-ease-in");
  });
}

function onLoad() {
  showNameLogo();
}


function showDescription(event){
  console.log(event.target.id);
  var job = document.querySelector(`[data-company-id='${event.target.id}']`);
  // alert(job.innerHTML);
  job.classList.toggle('show-description');  
}

function changeDCTextColor(event) {
  document.getElementById("digitalcrafts").style.color = "#63FFE7";
  document.getElementById("ew").style.color = "#FFFFFF";
  document.getElementById("cm").style.color = "#FFFFFF";
  document.getElementById("uwg").style.color = "#FFFFFF";
}

function changeEWTextColor(event) {
  document.getElementById("digitalcrafts").style.color = "#FFFFFF";
  document.getElementById("ew").style.color = "#63FFE7";
  document.getElementById("cm").style.color = "#FFFFFF";
  document.getElementById("uwg").style.color = "#FFFFFF";
}

function changeCMTextColor(event) {
  document.getElementById("digitalcrafts").style.color = "#FFFFFF";
  document.getElementById("ew").style.color = "#FFFFFF";
  document.getElementById("cm").style.color = "#63FFE7";
  document.getElementById("uwg").style.color = "#FFFFFF";
}

function changeUWGTextColor(event) {
  document.getElementById("digitalcrafts").style.color = "#FFFFFF";
  document.getElementById("ew").style.color = "#FFFFFF";
  document.getElementById("cm").style.color = "#FFFFFF";
  document.getElementById("uwg").style.color = "#63FFE7";
}


window.addEventListener("scroll", onScroll);
window.addEventListener("load", onLoad);
