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
  // console.log(event.target.id);
  // var job = document.querySelector(`[data-company-id='${event.target.id}']`);
  // // alert(job.innerHTML);
  // job.classList.toggle('show-description');  


    const detailArea = document.querySelector('[data-detail]');

    const descriptionDiv = document.createElement('div');

    descriptionDiv.textContent = `[data-company-id='${event.target.id}']`;

    detailArea.appendChild(descriptionDiv);
}



window.addEventListener("scroll", onScroll);
window.addEventListener("load", onLoad);
