// education start
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// education end


// top button start

myButton  = document.getElementById("mybtn"); //get the button
window.onscroll  = function(){
    scrollFunction()
};  //show the button when user scroll down 20px
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";

    }
    else{
        myButton.style.display = "none";
    }
}


    //scroll to top when user click the button
function topFunction(){
    document.body.scrollTop = 0 ; //for safari
    document.documentElement.scrollTop = 0; // for mozilla, chrome, opera.
}

// top button end

// toggle side navbar menus start
function toggleFunction() {
  var x = document.getElementById("sidenavbar");
  if (x.className.indexOf("menu") == -1) {
      x.className += "menu";
  } else {
      x.className = x.className.replace("menu", "");
  }
}

// toggle side navbar menus end