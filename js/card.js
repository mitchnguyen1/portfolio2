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

Draggable.create("#python",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:0},
            {x:480, y:0},
            {x:958, y:0},
            {x:1436, y:0},
            //second row
            {x:0, y:325},
            {x:480, y:325},
            {x:958, y:325},
            {x:1436, y:325},
            //third row
            {x:0, y:650},
            {x:480, y:650},
            {x:958, y:650},
            {x:1436, y:650},
   
        ],
        radius: 50
    }
})

Draggable.create("#java",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:0},
            {x:480, y:0},
            {x:958, y:0},
            {x:-480, y:0},
            //second row
            {x:0, y:325},
            {x:480, y:325},
            {x:-480, y:325},
            {x:958, y:325},
            //third row 
            {x:0, y:650},
            {x:480, y:650},
            {x:958, y:650},
            {x:-480, y:650},
        ],
        radius: 50
    }
})

Draggable.create("#javascript",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:0},
            {x:480, y:0},
            {x:-480, y:0},
            {x:-958, y:0},
            //second row
            {x:0, y:325},
            {x:-958, y:325}, 
            {x:-480, y:325},
            {x:480, y:325},
            //third row
            {x:0, y:650},
            {x:-958, y:650},
            {x:-480, y:650},
            {x:480, y:650},
        ],
        radius: 50
    }
})

Draggable.create("#html",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:0},
            {x:-480, y:0},
            {x:-958, y:0},
            {x:-1436, y:0},
            //second row
            {x:0, y:325},
            {x:-958, y:325},
            {x:-1436, y:325},
            {x:-480, y:325},
            //third row
            {x:-480, y:650},
            {x:-958, y:650},
            {x:-1436, y:650},
            {x:0, y:650},
        ],
        radius: 50
    }
})

Draggable.create("#css",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row 
            {x:0, y:-325},
            {x:480, y:-325},
            {x:958, y:-325},
            {x:1436, y:-325},
            //second row
            {x:0, y:0},
            {x:480, y:0},
            {x:958, y:0},
            {x:1436, y:0},
            //third row
            {x:0, y:325},
            {x:480, y:325},
            {x:958, y:325},
            {x:1436, y:325},
        ],
        radius: 50
    }
})

Draggable.create("#boot",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row 
            {x:0, y:-325},
            {x:480, y:-325},
            {x:958, y:-325},
            {x:-480, y:-325},
            //second row
            {x:0, y:0},
            {x:480, y:0},
            {x:958, y:0},
            {x:-480, y:0},
            //third row 
            {x:0, y:325},
            {x:480, y:325},
            {x:958, y:325},
            {x:-480, y:325},
        ],
        radius: 50
    }
})

Draggable.create("#mysql",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row 
            {x:0, y:-325},
            {x:480, y:-325},
            {x:-480, y:-325},
            {x:-958, y:-325},
            //second row
            {x:0, y:0},
            {x:480, y:0},
            {x:-958, y:0},
            {x:-480, y:0},
            //last row
            {x:0, y:325},
            {x:480, y:325},
            {x:-480, y:325},
            {x:-958, y:325},
        ],
        radius: 50
    }
})

Draggable.create("#post",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            {x:0, y:0},
            //3 to on same row
            {x:-1436, y:0},
            {x:-958, y:0},
            {x:-480, y:0},
            //first row 
            {x:0, y:-325},
            {x:-1436, y:-325},
            {x:-480, y:-325},
            {x:-958, y:-325},
            //last row
            {x:0, y:325},
            {x:-1436, y:325},
            {x:-480, y:325},
            {x:-958, y:325},
        ],
        radius: 50
    }
})

Draggable.create("#docker",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:-650},
            {x:1436, y:-650},
            {x:480, y:-650},
            {x:958, y:-650},
            //second row
            {x:0, y:-325},
            {x:1436, y:-325},
            {x:480, y:-325},
            {x:958, y:-325},
            //third
            {x:0, y:0},
            {x:1436, y:0},
            {x:958, y:0},
            {x:480, y:0},
        ],
        radius: 50
    }
})

Draggable.create("#spring",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:-650},
            {x:-480, y:-650},
            {x:480, y:-650},
            {x:958, y:-650},
            //second row
            {x:0, y:-325},
            {x:-480, y:-325},
            {x:480, y:-325},
            {x:958, y:-325},
            //third
            {x:0, y:0},
            {x:-480, y:0},
            {x:958, y:0},
            {x:480, y:0},
        ],
        radius: 50
    }
})

Draggable.create("#gsap",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:-650},
            {x:-480, y:-650},
            {x:480, y:-650},
            {x:-958, y:-650},
            //second row
            {x:0, y:-325},
            {x:-958, y:-325},
            {x:480, y:-325},
            {x:-480, y:-325},
            //third
            {x:-958, y:0},
            {x:-480, y:0},
            {x:0, y:0},
            {x:480, y:0},
        ],
        radius: 50
    }
})

Draggable.create("#git",{
    bounds: container,
    type: "x,y",
    liveSnap: {
        points: [
            //first row
            {x:0, y:-650},
            {x:-480, y:-650},
            {x:-1436, y:-650},
            {x:-958, y:-650},
            //second row
            {x:0, y:-325},
            {x:-958, y:-325},
            {x:-1436, y:-325},
            {x:-480, y:-325},
            //third
            {x:-958, y:0},
            {x:-480, y:0},
            {x:0, y:0},
            {x:-1436, y:0},
        ],
        radius: 50
    }
})