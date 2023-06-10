gsap.from(".img1",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    y:-60,
    
}) 

gsap.from(".img2",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    x:60
}) 
gsap.from(".img3",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    x:-60
}) 
gsap.from(".main h1",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    y:60
}) 
gsap.from(".text",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    x:-20
}) 
gsap.from(".text2",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    x:30
}) 
gsap.from(".butn",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    y:30
}) 
gsap.from(".textmid",{
    delay:0.4,
    opacity: 0,
    duration: 1,
    y:30
}) 
gsap.from(".page2 .hero h4,.page2 h5, .page2 .about-us",{
    opacity: 0,
    Stagger:0.7,
    y:90,
    scrollTrigger:{
        trigger:".page2 .hero h4,.page2 h5, .page2 .about-us",
        scroller:"body",
        start:"top 60%",
        end:"bottom 100%",
        // scrub:3,

    },
}) 
gsap.from(".page2 .sidepart",{
    opacity: 0,
    Stagger:0.6,
    x:-50,
    scrollTrigger:{
        trigger:".page2 .sidepart",
        scroller:"body",
        start:"top 60%",
        end:"bottom 100%",
        // scrub:3,

    },
}) 
gsap.from(".foot .sect h5,.foot .sect h6 ,.foot .socials",{
    opacity: 0,
    // Stagger:0.6,
    y:-50,
    scrollTrigger:{
        trigger:".foot .sect .socials",
        scroller:"body",
        start:"top 90%",
        end:"bottom 100%",
        // markers:true,
        // scrub:3,
    },
}) 
