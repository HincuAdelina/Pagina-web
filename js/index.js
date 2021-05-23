// alert("yes");

//Back to top button; on scroll 
var btn = document.getElementById('button');
function scrollFunct(){
  if (window.scrollY > 0){
    btn.classList.add("show");
  }
  else {
    btn.classList.remove('show');
    }
};
window.addEventListener("scroll", scrollFunct);



// document.getElementsByClassName("gallery-item fitness")[0].style.display="none";
// document.getElementsByClassName("gallery-item fitness")[0].style.display="block";

// document.getElementsByClassName("gallery-filter tabs clearfix filters-button-group")[0].children
// document.getElementsByClassName("filters-button-group")[0].children[0]

// animals[0].attributes["data-filter"]

//document.getElementsByClassName("filters-button-group")[0].children[0].children[0].innerText ="show all";


//gallery photo selection
function filterPhotos(v) {
  var category = "gallery-item ";
  var photos = document.getElementsByClassName("gallery-item");
  // document.getElementById(v).classList.add("active"); // for white text on click
  if(v=="all"){
    for(var i=0; i<photos.length; i++){
      // console.log(photos[i]);
      photos[i].style.display="block";
    }
  }
  else{
    category += v;
    for (var i=0; i<photos.length; i++){
      if(category == photos[i].className){
        //console.log(photos[i].className);
        photos[i].style.display="block"; 
      }
      else{
        photos[i].style.display="none";   
      }
    }
  }
}


// dislpay contact message
var message = document.getElementById("display-message");
var question3 = document.getElementsByName("question3")[0];
question3.onclick = function(){
  if(question3.checked){
    message.style.visibility="inherit";
  }
  else{
    message.style.visibility="hidden";
  }
};
