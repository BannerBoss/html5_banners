var banner = document.getElementById('banner');
// var replay = document.getElementById('replay');

// 

window.onload = function() {
    startBanner();
      
        
        var tl = new TimelineMax();
        
        // tl.to("#model", 3, { bezier:[{x:150, y:-40, scaleX:1,scaleY:1}], ease:Power1.easeInOut},"+=1")
        tl.to("#model", 2.5, { bezier:[{x:150, y:-40, scaleX:1,scaleY:1},{x:70, y:-10, scaleX:0.9,scaleY:0.9},{x:40, y:-40, scaleX:0.8,scaleY:0.8}], ease:Power1.easeInOut})
        
        .to(".frame1_copy1", 0.5, {css: { '-webkit-filter': 'brightness(1.5)' ,'filter': 'brightness(1.5)' , '-webkit-transform': 'translateY(-15px)', 'transform': 'translateY(-15px)','opacity': '0'}, ease:Power0.easeOut })
        .to(".gene_copy", 0.5, {alpha:0, ease:Power0.easeOut,delay:1, top:-15  },"-=1.5")
        
        .to(".frame2_copy1", 0.5, {alpha:1, ease:Power0.easeOut, top:-15},"-=0.05")
        .to(".gene_copy2", 0.5, {alpha:1, ease:Power0.easeOut, top:-15},"-=0.4")
        .to(".frame2_copy1 , .gene_copy2", 0.5, {css: { '-webkit-filter': 'brightness(1.5)' ,'filter': 'brightness(1.5)' , '-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)','opacity': '0'}, ease:Power0.easeOut },"+=1.5")
        
        .to("#model", 3.5, {bezier:[{x:50, y:-60, scaleX:.84,scaleY:.84}], ease:Power1.easeInOut}, "-=2.6")
        // .to("#model", 0.7, {bezier:[{alpha: 0, x:600, y:-270, scaleX:2.5,scaleY:2.5}], ease:Power1.easeInOut}, "-=1.5")
        .to("#model", 0.5, {css: { 
         '-webkit-filter': 'brightness(1.5)' ,'filter': 'brightness(1.5)' ,
         '-webkit-transform': 'scale(1.5) translateX(150px) translateY(-100px)', 'transform': 'scale(1.5) translateX(150px) translateY(-100px)',
         'opacity': '0'}, ease:Power1.easeInOut}, "-=1.5")
        
        .to(".frame3_copy1", 0.5, {alpha:1, ease:Power0.easeOut, top:-15},"-=1")
        .to(".gene_copy3", 0.5, {alpha:1, ease:Power0.easeOut, top:-15},"-=0.9")
        .to(".frame3_copy1 , .gene_copy3", 0.5, {css: { '-webkit-filter': 'brightness(1.5)' ,'filter': 'brightness(1.5)' , '-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)','opacity': '0'}, ease:Power0.easeOut },"+=1")

        .to("#prov ,#liquid", 0.5, {bezier:[{alpha :1, x:58, y:23, scaleX:1.2, scaleY:1.2},{alpha :1, x:0, y:0, scaleX:1, scaleY:1}], ease:Power1.easeInOut},"-=2.5")
        .to("#prov", 1.5, {bezier:[{alpha :1, x:5, y:5, scaleX:0.95, scaleY:0.95}], ease:Power1.easeInOut},"-=1.5")
        .to("#liquid", 1.5, {bezier:[{alpha :1, x:-30, y:-30, scaleX:1.3, scaleY:1.3}], ease:Power1.easeInOut},"-=2")
        .to("#liquid", 1, {bezier:[{alpha :1, x:200, y:200, scaleX:1.2, scaleY:1.2}], ease:Power1.easeInOut},"-=0.5")
        .to("#prov", 1, {bezier:[{alpha :1, x:10, y:25, scaleX:0.65, scaleY:0.65},{alpha :1, x:-49, y:77, scaleX:0.5, scaleY:0.5}], ease:Power1.easeInOut},"-=1")
        .to(".frame1_bg", 1, {alpha:0, ease:Back.easeIn, delay:0},"-=1.5") 
        .to("#packshot", 0.5, {alpha:1,x:0, y:0 ,scale:1 ,ease:Power0.easeOut,delay:0},"-=1")    
        .to("#cta_bg , #cta_copy", 0.5, {alpha:1,x:0, y:0 , ease:Power0.easeOut},"-=0.5")      
        .to("#prov", 2, {bezier:[{alpha :1, x:-49, y:80, scaleX:0.4, scaleY:0.4}], ease:Power1.easeInOut})
        .to("#cta_shiny", 0.5, {alpha:1,x:-48, y:96, scale:0.5 ,ease:Power0.easeOut})  
        .to("#cta_shiny", 1, {bezier:[{alpha:1,x:-48, y:96, scale:0.5},{alpha:0,x:-48, y:96, scale:0.5}], ease:Power1.easeInOut}) 
        .to("#frame4_header1", 0.5, {alpha:1,x:0, y:0 , ease:Power0.easeOut},"-=3.5")  
        .to("#frame4_header2", 0.5, {alpha:1,x:0, y:0 , ease:Power0.easeOut},"-=3.8")  
        .to("#frame4_100", 0.5, {alpha:1,x:0, y:0 , ease:Power0.easeOut},"-=3.8")       
        .to("#frame4_100_shine", 1, {alpha:1,x:-300, y:0 , ease:Power0.easeOut},"-=3.5")       
        .to("#frame4_subtitle", 0.5, {alpha:1,x:0, y:0 , ease:Power0.easeOut},"-=3.8") 
        .to("#prov_shine", 1, {bezier:[{alpha :1, x:159, y:197},{alpha :1, x:130, y:193},{alpha :1, x:110, y:206}], ease:Power1.easeInOut})         
       
};

var startBanner = function () {
    banner.style.visibility = 'visible';
    banner.className = 'is_visible';
};

// replay.addEventListener("click", function(){
//     tl.restart();
// })