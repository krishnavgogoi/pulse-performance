var cur=document.querySelector("#cursor");
var curr=document.querySelector(".cur1")
var sc1=document.querySelector("#bottom .two2 .a");
var sc2=document.querySelector("#bottom .two2 .b");
var sc3=document.querySelector("#bottom .two2 .c");




function cursorshape() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  document.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xscale = gsap.utils.clamp(0.7, 1.6, xdiff / 10); // normalize
    yscale = gsap.utils.clamp(0.7, 1.6, ydiff / 10); // normalize

    xprev = dets.clientX;
    yprev = dets.clientY;

    cur.style.left = dets.clientX + "px";
    cur.style.top = dets.clientY + "px";
    cur.style.transform = `translate(-50%, -50%) scale(${xscale}, ${yscale})`;
  });
}

cursorshape();






sc1.addEventListener("mouseenter",function() {
    cur.style.transform = "translate(-50%, -50%) scale(2.4)";
   
   
})

sc1.addEventListener("mouseleave",function(){
    cur.style.transform = "translate(-50%, -50%) scale(1)";

})
sc2.addEventListener("mouseenter",function(){
    cur.style.transform = "translate(-50%, -50%) scale(2.4)";

})

sc2.addEventListener("mouseleave",function(){
    cur.style.transform = "translate(-50%, -50%) scale(1)";

})
sc3.addEventListener("mouseenter",function(){
    cur.style.transform = "translate(-50%, -50%) scale(1.4)";

})

sc3.addEventListener("mouseleave",function(){
    cur.style.transform = "translate(-50%, -50%) scale(1)";
     
})

var ferari=document.querySelector("#cont .c1")
var lamb=document.querySelector("#cont .c2")
var audi=document.querySelector("#cont .c3")
var porche=document.querySelector("#cont .c4")




var img2=document.querySelector("#right2 #b img");
var img3=document.querySelector("#right2 #c img");
var img4=document.querySelector("#right2 #d img");

    var imge1 = document.querySelector("#right2 #hel img");
    console.log(imge1); // should not be null now

var blnk=document.querySelector("#right2 #blanka");




ferari.addEventListener("mouseleave",function(){

    ferari.style.color="white";
    ferari.style.transform="translateX(-20px)";
    cur.style.transform = "translate(-50%, -50%) scale(1)";
    curr.textContent="";
   
    blnk.style.opacity=0;
    cur.style.height="4vh";
    cur.style.width="4vh";
   
})
ferari.addEventListener("mouseenter",function(){

    ferari.style.color="rgba(251, 62, 59, 0.811)";
    ferari.style.transform="translateX(20px)";
    cur.style.transform = "translate(-50%, -50%) )";
    // curr.textContent="VIEW";
    imge1.style.opacity=1;
    blnk.style.opacity=0;
    img2.style.opacity=0;
    img3.style.opacity=0;
    img4.style.opacity=0;
    cur.style.height="9vh";
    cur.style.width="9vh";
})
// ferari.addEventListener("mouseenter",()=> {
//     hoverScale = 3.4;

// });

lamb.addEventListener("mouseenter",function(){

    lamb.style.color="rgba(152, 59, 251, 0.811)";
    lamb.style.transform="translateX(20px)";
    lamb.style.opacity=0.8;
    cur.style.transform = "translate(-50%, -50%) scale(2.9)";
    // curr.textContent="VIEW";
    img2.style.opacity=1;
    imge1.style.opacity=0;
    img3.style.opacity=0;
    img4.style.opacity=0;
    blnk.style.opacity=0;
    cur.style.height="9vh";
    cur.style.width="9vh";
})

lamb.addEventListener("mouseleave",function(){

    lamb.style.color="white";
    lamb.style.transform="translateX(-20px)";
    lamb.style.opacity=1;
    cur.style.transform = "translate(-50%, -50%) scale(1)";
    curr.textContent="";
    cur.style.height="4vh";
    cur.style.width="4vh";
   
})


audi.addEventListener("mouseenter",function(){

    audi.style.color=" rgba(147, 147, 147, 0.811)";
    audi.style.transform="translateX(20px)";
    cur.style.transform = "translate(-50%, -50%) scale(2.9)";
    // curr.textContent="VIEW"
    img3.style.opacity=1;
    imge1.style.opacity=0;
    img2.style.opacity=0;
    img4.style.opacity=0;
    blnk.style.opacity=0;
    cur.style.height="9vh";
    cur.style.width="9vh";

})

audi.addEventListener("mouseleave",function(){

    audi.style.color="white";
    audi.style.transform="translateX(-20px)";
    cur.style.transform = "translate(-50%, -50%) scale(1)";
    curr.textContent="";
    cur.style.height="4vh";
    cur.style.width="4vh";
})


porche.addEventListener("mouseenter",function(){

    porche.style.color=" rgba(250, 208, 42, 0.811)";
    porche.style.transform="translateX(20px)";
    cur.style.transform = "translate(-50%, -50%) scale(2.9)";
    // curr.textContent="VIEW"
    img4.style.opacity=1;
    imge1.style.opacity=0;
    img2.style.opacity=0;
    img3.style.opacity=0;
    blnk.style.opacity=0;
    cur.style.height="9vh";
    cur.style.width="9vh";
})

porche.addEventListener("mouseleave",function(){

    porche.style.color="white";
    porche.style.transform="translateX(-20px)";
    cur.style.transform = "translate(-50%, -50%) scale(1)";
    curr.textContent="";
    cur.style.height="4vh";
    cur.style.width="4vh";
})

var ar1=document.querySelector("#cont .c1")
var img1=document.querySelector("#cont .c1 img")
// ar1.addEventListener("mousemove",function(detss){
//     img1.style.left=detss.x+"px"
//     img1.style.top=detss.y+"px"
// })
ar1.addEventListener("mouseenter", function () {
    img1.style.opacity = 1;
});
ar1.addEventListener("mouseleave", function () {
    img1.style.opacity = 0;
});
 console.log(img1);

 gsap.from("#page1 #top",{
    y:-600,
    duration:1.6,
    opacity:0,
 })

 gsap.from("#page1 #middle",{
    y:600,
    duration:1.4,
    opacity:0,
 })
 gsap.from("#page1 #bottom",{
    y:600,
    duration:1.5,
    opacity:0,
 })


 