const container = document.getElementById("skills")
const python = document.getElementById("python")
const java = document.getElementById("java")
const javascript = document.getElementById("javascript")
const html = document.getElementById("html")
const css = document.getElementById("css")
const boot = document.getElementById("boot")
const mysql = document.getElementById("mysql")
const post = document.getElementById("post")
const docker = document.getElementById("docker")
const spring = document.getElementById("spring")
const gsap = document.getElementById("gsap")
const git = document.getElementById("git")
const reset =  document.querySelector('.reset');



//reset cards position
reset.addEventListener('click',() =>{
    TweenLite.set("#python", {clearProps:"x,y"});
    TweenLite.set("#java", {clearProps:"x,y"});
    TweenLite.set("#javascript", {clearProps:"x,y"});
    TweenLite.set("#html", {clearProps:"x,y"});
    TweenLite.set("#css", {clearProps:"x,y"});
    TweenLite.set("#boot", {clearProps:"x,y"});
    TweenLite.set("#mysql", {clearProps:"x,y"});
    TweenLite.set("#post", {clearProps:"x,y"});
    TweenLite.set("#docker", {clearProps:"x,y"});
    TweenLite.set("#spring", {clearProps:"x,y"});
    TweenLite.set("#gsap", {clearProps:"x,y"});
    TweenLite.set("#git", {clearProps:"x,y"});
})

Draggable.create("#python",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
            ],
        radius: 50
    }
})

Draggable.create("#java",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
        ],
        radius: 50
    }
})

Draggable.create("#javascript",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
            ],
        radius: 50
    }
})

Draggable.create("#html",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
                 ],
        radius: 50
    }
})

Draggable.create("#css",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0},
        ],
      radius: 50
    }
})

Draggable.create("#boot",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0},
        ],
        radius: 50
    }
})

Draggable.create("#mysql",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0} ],
        radius: 50
    }
})

Draggable.create("#post",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0} ],
        radius: 50
    }
})

Draggable.create("#docker",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0} ],
        radius: 50
    }
})

Draggable.create("#spring",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [ 
            {x:0, y:0} ],
        radius: 50
    }
})

Draggable.create("#gsap",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
            ],
        radius: 50
    }
})

Draggable.create("#git",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
                  ],
        radius: 50
    }
})