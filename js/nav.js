// changes color of navbar per scrolling on sections
window.onscroll = function(){
    let top = window.scrollY;
    let home = document.getElementById("navHome");
    let about =  document.getElementById("navAbout");
    let proj =  document.getElementById("navProj");
    let con =  document.getElementById("navCon");
    const nav = document.querySelector('.navbar');
    home.style.color="#FF6D00";
    about.style.color="white";
    proj.style.color="white";
    con.style.color="white";
  console.log(top);
    if(top < 999){
      nav.style.backgroundColor = "transparent";
      home.style.color="#FF6D00";
      about.style.color="white";
      proj.style.color="white";
      con.style.color="white";
    }
    else if (top >= 999 && top < 3225){
      nav.style.backgroundColor ="transparent";
      home.style.color="white";
      about.style.color="#FF6D00";
      proj.style.color="white";
      con.style.color="white";
    }
    else if(top >= 3225 && top < 3700 ){
      nav.style.backgroundColor ="transparent";
      home.style.color="white";
      about.style.color="white";
      proj.style.color="#FF6D00";
      con.style.color="white";
    }
    else if(top >= 3700){
      nav.style.backgroundColor = "transparent";
      home.style.color="white";
      about.style.color="white";
      proj.style.color="white";
      con.style.color="#FF6D00";
    }
  }
  