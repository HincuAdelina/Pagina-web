// alert("yes");

//change logo color 
var t = setInterval(function(){
  var logo = document.getElementsByClassName("site-name-container")[0];
  if(logo.className == "site-name-container bg-color-1"){
    logo.className="site-name-container bg-color-2";
  }
  else {
    logo.className="site-name-container bg-color-1";
  }
 }, 3000);
//on keydown => stop change logo color
document.onkeydown = function (){
 clearInterval(t);
};

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


//localStorage
document.getElementsByClassName("btn-3")[0].onclick = function(){
var name = document.getElementsByName("name")[0].value;
var email = document.getElementsByName("email")[0].value;
var message = document.getElementsByName("message")[0].value;
  if(name && email && message){
    window.localStorage.setItem("name",name);
    window.localStorage.setItem("email",email);
    window.localStorage.setItem("message",message);
    alert("Thank you, " + localStorage.getItem("name") +"!\nWe'll send you an email at " + localStorage.getItem("email") + " in " + Math.floor(Math.random()*10) + " day(s).");
  }
};
localStorage.clear();