




// ScrollTrigger.create({
//     trigger: "#",
//     // pin: true,
//     // markers: true,
//     scroller: `#main`,
//     start: `100 40%`,
//     end: `bottom top`,
//     toggleClass: "second-page-black",
//     onEnter: () => {
//         document.querySelector(".left-div>h1").classList.add('second-left-h1');
//     },

//     onEnter: () => document.querySelector(".left-div>h1").classList.add('second-left-h1'),
//     onLeave: () => document.querySelector(".left-div>h1").classList.remove('second-left-h1'),
//     onEnterBack: () => document.querySelector(".left-div>h1").classList.add('second-left-h1'),
//     onLeaveBack: () => document.querySelector(".left-div>h1").classList.remove('second-left-h1'),

// });


// ScrollTrigger.create({
//     trigger: '#',
//     scroller: '#main',
//     pin: true,
//     // markers: true,
//     start: `top 200`,
//     end: `700% top`,
// })


var timeline = gsap.timeline()

timeline.to(".serviceh1", {

    x: 300,
    y: -200,
    fontSize: "30px",
    duration: 10
}, ">")



timeline.fromTo(".fourth-1-left", {
    opacity: 0,
    yPercent: 100

}, {
    opacity: 1,
    yPercent: -50,
    duration: 10
}, ">")

timeline.fromTo(".fourth-1-right", {
    opacity: 0,
    yPercent: 100

}, {
    opacity: 1,
    yPercent: -50,
    duration: 10
}, "-=1")


timeline.to(".fourth-1-left", {
    opacity: 0,
    yPercent: -90 * 3,
    duration: 10
}, ">1")

timeline.to(".fourth-1-right", {
    opacity: 0,
    yPercent: -100 * 3,
    duration: 10
}, "-=1")








timeline.fromTo(".fourth-2-left", {
    opacity: 0,
    yPercent: 0

}, {
    opacity: 1,
    yPercent: -220,
    duration: 10
}, "+=1")

timeline.fromTo(".fourth-2-right", {
    opacity: 0,
    yPercent: 0

}, {
    opacity: 1,
    yPercent: -250,
    duration: 10
}, "-=1")


timeline.to(".fourth-2-left", {
    opacity: 0,
    yPercent: -300,
    duration: 10
}, ">1")

timeline.to(".fourth-2-right", {
    opacity: 0,
    yPercent: -300,
    duration: 10
}, "-=1")









timeline.fromTo(".fourth-3-left", {
    opacity: 0,
    yPercent: -200

}, {
    opacity: 1,
    yPercent: -230,
    // y: -200,
    duration: 10
}, "+=1")

timeline.fromTo(".fourth-3-right", {
    opacity: 0,
    yPercent: -200

}, {
    opacity: 1,
    yPercent: -400,
    duration: 10
}, "-=1")





ScrollTrigger.create({
    trigger: '.fourth',
    scroller: '#main',
    pin: true,
    scrub: true,
    // markers: true,
    start: `top top`,
    end: ``,
    ease: "none",
    // pinSpacing: false,
    animation: timeline,
})






var timeline2 = gsap.timeline()



timeline2.fromTo("#column1", {


    x: -300,
    opacity: 0


}, {
    x: 0,
    opacity: 1,

    duration: 2
}, ">")


timeline2.fromTo("#column2", {
    opacity: 0,
    x: -300

}, {
    opacity: 1,

    x: 0,

    duration: 3
}, "+=1")

timeline2.fromTo("#column3", {

    x: -500,
    opacity: 0,
    // y: 400,
    // fontSize: "30px",
    // duration: 2
}, {
    x: 0,
    opacity: 1,
    // y: 0,
    // fontSize: "30px",
    duration: 2
}, ">")


ScrollTrigger.create({
    trigger: '.fifth',
    scroller: '#main',
    pin: true,
    scrub: true,
    // markers: true,
    start: `top top`,
    end: ``,
    ease: "none",
    animation: timeline2
})







// gsap.from("#community", {

//     scrollTrigger: {
//         trigger: "#community",
//         scroller: "#main",
//         pin: true,
//         markers: true,
//         scrub: true,
//         start: "top bottom",
//         end: "",
//         // ease: "none"
//     },
//     opacity: 0,
//     scale: 2,


// },)








// $(".column>div").hover(
//     function (e) {

//         // console.log(e.target.parentNode.id)
//         // console.log(e.target.attributes[0].value)

//         // document.getElementById(e.target.parentNode.id).style.backgroundColor = "rgba(255, 255, 255, 0.35)"

//         // document.getElementById(e.target.parentNode.id)?.classList.add("hoverDiv")

//         document.querySelector("#" + e.target.parentNode.id)?.classList.add("hoverDiv")

//         console.log(document.querySelector("#column1>div:nth-child(" + e.target.attributes[0].value + ")"))
//         console.log(document.querySelector("#column2>div:nth-child(" + e.target.attributes[0].value + ")"))
//         console.log(document.querySelector("#column3>div:nth-child(" + e.target.attributes[0].value + ")"))

//         console.log(document.querySelector("#column1>div:nth-child(4)"))
//         document.querySelector("#column1>div:nth-child(4)").classList.add("hoverDiv")



//         // document.querySelector("#column1>div:nth-child(" + e.target.attributes[0].value + ")").classList.add("hoverDiv")
//         // document.querySelector("#column2>div:nth-child(" + e.target.attributes[0].value + ")").classList.add("hoverDiv")
//         // document.querySelector("#column3>div:nth-child(" + e.target.attributes[0].value + ")").classList.add("hoverDiv")

//     }, function (e) {
//         // $(this).removeClass("hoverDiv")
//         document.getElementById(e.target.parentNode.id).classList.remove("hoverDiv")
//         document.querySelector("#column1>div:nth-child(" + e.target.attributes[0].value + ")").classList.remove("hoverDiv")
//         document.querySelector("#column21>div:nth-child(" + e.target.attributes[0].value + ")").classList.remove("hoverDiv")
//         document.querySelector("#column3>div:nth-child(" + e.target.attributes[0].value + ")").classList.remove("hoverDiv")

//         // document.getElementById(e.target.parentNode.id).style.backgroundColor = "initial"
//         //   $( this ).removeClass( "hover" );
//     }
// );
