const canvas = document.getElementById("canvas")
const obj = document.getElementById("object")
const reset = document.getElementById("reset")
const score = document.getElementById("score")
const miss = document.getElementById("miss")

var scoreCounter = 0
var missCounter=0
var inside = false
var start = false

canvas.addEventListener("click", (e)=>{
    if(inside || !start) return
    obj.style.top=Math.floor(Math.random() * 450)+"px"
    obj.style.left=Math.floor(Math.random() * 750)+"px"
    missCounter++
    miss.innerHTML=missCounter
})

obj.addEventListener("click", (e)=>{
    start=true
    canvas.style.backgroundColor="red"
    obj.style.top=Math.floor(Math.random() * 450)+"px"
    obj.style.left=Math.floor(Math.random() * 750)+"px"
    scoreCounter++
    score.innerHTML=scoreCounter
})

obj.addEventListener("mouseenter", ()=>inside=true)
obj.addEventListener("mouseleave", ()=>inside=false)
reset.addEventListener("click", ()=>{
    scoreCounter=0
    missCounter=0
    score.innerHTML=0
    miss.innerHTML=0
    obj.style.top=0
    obj.style.left=0
    canvas.style.backgroundColor="orange"
    start=false
})