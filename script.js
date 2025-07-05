

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function first_page_animation(){
   
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1,
        ease:Expo.easeInOut  
    })
    .to(".bounding_elem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from("#hero_footer",{
        y:'-10',
        opacity:0,
        duration:1,
        delay:-.5,
        ease:Expo.easeInOut  
    })
}

function circle_flatter(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
       var xdiff=dets.clientX-xprev;
       var ydiff=dets.clientY-yprev;

       gsap.utils.clamp(.8,1.2,xdiff);
       gsap.utils.clamp(.8,1.2,ydiff)
       xprev=dets.clientX;
       yprev=dets.clientY;
     
       circle_mouse_follower(xscale,yscale);
    });
}

function circle_mouse_follower(xscale ,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini_circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circle_flatter();
circle_mouse_follower();
first_page_animation();