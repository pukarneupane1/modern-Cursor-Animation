var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
var image = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration: 0.6,
        ease: "back.out"


    })

})
image.addEventListener("mouseenter",function(dets){
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale: 4,
        duration: 1,
        backgroundColor: "#ffffff8a"
    })

})
image.addEventListener("mouseleave",function(dets){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale: 1,
        duration: 1,
        backgroundColor: "#fff"
    })

})