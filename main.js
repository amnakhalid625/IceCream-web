var tl=gsap.timeline({
    scrollTrigger:{
        trigger:'#s1',
        start:'0% 80%',
        end:'50% 50%',
        scrub:true,

    }
});

tl.to('.hero-center-img',{
    top:"123%",
    left:"56%",
    width:'17vw',
    rotate:"0",

     
})


var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:'#s2',
        start:'0% 80%',
        end:'50% 50%',
        scrub:true,

    }
});

tl1.to('.hero-center-img',{
    top:"220%",
    left:"34%",
    width:'10vw',
    rotate:"0",

     
})

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:'#s3',
        start:'0% 65%',
        end:'50% 50%',
        scrub:true,

    }
});

tl2.to('.hero-center-img',{
    top:"275%",
    left:"29%",
    width:'18vw',
    rotate:"-50deg",

     
})