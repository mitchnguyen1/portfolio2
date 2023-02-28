// changes color of navbar per scrolling on sections
window.onscroll = function(){
    let top = window.scrollY;
    let home = document.getElementById("navHome");
    let about =  document.getElementById("navAbout");
    let proj =  document.getElementById("navProj");
    let con =  document.getElementById("navCon");
    const nav = document.querySelector('.navbar');
    home.style.color="red";
    about.style.color="white";
    proj.style.color="white";
    con.style.color="white";
  console.log(top);
    if(top < 900){
      nav.style.backgroundColor = "transparent";
      home.style.color="Red";
      about.style.color="white";
      proj.style.color="white";
      con.style.color="white";
    }
    else if (top >= 900 && top < 2218){
      nav.style.backgroundColor = "rgb(18,24,85)";
      home.style.color="white";
      about.style.color="red";
      proj.style.color="white";
      con.style.color="white";
    }
    else if(top >= 2218 && top < 3700 ){
      nav.style.backgroundColor = "pink";
      home.style.color="white";
      about.style.color="white";
      proj.style.color="red";
      con.style.color="white";
    }
    else if(top >= 3700){
      nav.style.backgroundColor = "green";
      home.style.color="white";
      about.style.color="white";
      proj.style.color="white";
      con.style.color="red";
    }
  }
  