function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
    assets/gameChar/male0001.png
    assets/gameChar/male0002.png
    assets/gameChar/male0003.png
    assets/gameChar/male0004.png
    assets/gameChar/male0005.png
    assets/gameChar/male0006.png
    assets/gameChar/male0007.png
    assets/gameChar/male0008.png
    assets/gameChar/male0009.png
    assets/gameChar/male0010.png
    assets/gameChar/male0011.png
    assets/gameChar/male0012.png
    assets/gameChar/male0013.png
    assets/gameChar/male0014.png
    assets/gameChar/male0015.png
    assets/gameChar/male0016.png
    assets/gameChar/male0017.png
    assets/gameChar/male0018.png
    assets/gameChar/male0019.png
    assets/gameChar/male0020.png
    assets/gameChar/male0021.png
    assets/gameChar/male0022.png
    assets/gameChar/male0023.png
    assets/gameChar/male0024.png
    assets/gameChar/male0025.png
    assets/gameChar/male0026.png
    assets/gameChar/male0027.png
    assets/gameChar/male0028.png
    assets/gameChar/male0029.png
    assets/gameChar/male0030.png
    assets/gameChar/male0031.png
    assets/gameChar/male0032.png
    assets/gameChar/male0033.png
    assets/gameChar/male0034.png
    assets/gameChar/male0035.png
    assets/gameChar/male0036.png
    assets/gameChar/male0037.png
    assets/gameChar/male0038.png
    assets/gameChar/male0039.png
    assets/gameChar/male0040.png
    assets/gameChar/male0041.png
    assets/gameChar/male0042.png
    assets/gameChar/male0043.png
    assets/gameChar/male0044.png
    assets/gameChar/male0045.png
    assets/gameChar/male0046.png
    assets/gameChar/male0047.png
    assets/gameChar/male0048.png
    assets/gameChar/male0049.png
    assets/gameChar/male0050.png
    assets/gameChar/male0051.png
    assets/gameChar/male0052.png
    assets/gameChar/male0053.png
    assets/gameChar/male0054.png
    assets/gameChar/male0055.png
    assets/gameChar/male0056.png
    assets/gameChar/male0057.png
    assets/gameChar/male0058.png
    assets/gameChar/male0059.png
    assets/gameChar/male0060.png
    assets/gameChar/male0061.png
    assets/gameChar/male0062.png
    assets/gameChar/male0063.png
    assets/gameChar/male0064.png
    assets/gameChar/male0065.png
    assets/gameChar/male0066.png
    assets/gameChar/male0067.png
    assets/gameChar/male0068.png
    assets/gameChar/male0069.png
    assets/gameChar/male0070.png
    assets/gameChar/male0071.png
    assets/gameChar/male0072.png
    assets/gameChar/male0073.png
    assets/gameChar/male0074.png
    assets/gameChar/male0075.png
    assets/gameChar/male0076.png
    assets/gameChar/male0077.png
    assets/gameChar/male0078.png
    assets/gameChar/male0079.png
    assets/gameChar/male0080.png
    assets/gameChar/male0081.png
    assets/gameChar/male0082.png
    assets/gameChar/male0083.png
    assets/gameChar/male0084.png
    assets/gameChar/male0085.png
    assets/gameChar/male0086.png
    assets/gameChar/male0087.png
    assets/gameChar/male0088.png
    assets/gameChar/male0089.png
    assets/gameChar/male0090.png
    assets/gameChar/male0091.png
    assets/gameChar/male0092.png
    assets/gameChar/male0093.png
    assets/gameChar/male0094.png
    assets/gameChar/male0095.png
    assets/gameChar/male0096.png
    assets/gameChar/male0097.png
    assets/gameChar/male0098.png
    assets/gameChar/male0099.png
    assets/gameChar/male0100.png
    assets/gameChar/male0101.png
    assets/gameChar/male0102.png
    assets/gameChar/male0103.png
    assets/gameChar/male0104.png
    assets/gameChar/male0105.png
    assets/gameChar/male0106.png
    assets/gameChar/male0107.png
    assets/gameChar/male0108.png
    assets/gameChar/male0109.png
    assets/gameChar/male0110.png
    assets/gameChar/male0111.png
    assets/gameChar/male0112.png
    assets/gameChar/male0113.png
    assets/gameChar/male0114.png
    assets/gameChar/male0115.png
    assets/gameChar/male0116.png
    assets/gameChar/male0117.png
    assets/gameChar/male0118.png
    assets/gameChar/male0119.png
    assets/gameChar/male0120.png
    assets/gameChar/male0121.png
    assets/gameChar/male0122.png
    assets/gameChar/male0123.png
    assets/gameChar/male0124.png
    assets/gameChar/male0125.png
    assets/gameChar/male0126.png
    assets/gameChar/male0127.png
    assets/gameChar/male0128.png
    assets/gameChar/male0129.png
    assets/gameChar/male0130.png
    assets/gameChar/male0131.png
    assets/gameChar/male0132.png
    assets/gameChar/male0133.png
    assets/gameChar/male0134.png
    assets/gameChar/male0135.png
    assets/gameChar/male0136.png
    assets/gameChar/male0137.png
    assets/gameChar/male0138.png
    assets/gameChar/male0139.png
    assets/gameChar/male0140.png
    assets/gameChar/male0141.png
    assets/gameChar/male0142.png
    assets/gameChar/male0143.png
    assets/gameChar/male0144.png
    assets/gameChar/male0145.png
    assets/gameChar/male0146.png
    assets/gameChar/male0147.png
    assets/gameChar/male0148.png
    assets/gameChar/male0149.png
    assets/gameChar/male0150.png
    assets/gameChar/male0151.png
    assets/gameChar/male0152.png
    assets/gameChar/male0153.png
    assets/gameChar/male0154.png
    assets/gameChar/male0155.png
    assets/gameChar/male0156.png
    assets/gameChar/male0157.png
    assets/gameChar/male0158.png
    assets/gameChar/male0159.png
    assets/gameChar/male0160.png
    assets/gameChar/male0161.png
    assets/gameChar/male0162.png
    assets/gameChar/male0163.png
    assets/gameChar/male0164.png
    assets/gameChar/male0165.png
    assets/gameChar/male0166.png
    assets/gameChar/male0167.png
    assets/gameChar/male0168.png
    assets/gameChar/male0169.png
    assets/gameChar/male0170.png
    assets/gameChar/male0171.png
    assets/gameChar/male0172.png
    assets/gameChar/male0173.png
    assets/gameChar/male0174.png
    assets/gameChar/male0175.png
    assets/gameChar/male0176.png
    assets/gameChar/male0177.png
    assets/gameChar/male0178.png
    assets/gameChar/male0179.png
    assets/gameChar/male0180.png
    assets/gameChar/male0181.png
    assets/gameChar/male0182.png
    assets/gameChar/male0183.png
    assets/gameChar/male0184.png
    assets/gameChar/male0185.png
    assets/gameChar/male0186.png
    assets/gameChar/male0187.png
    assets/gameChar/male0188.png
    assets/gameChar/male0189.png
    assets/gameChar/male0190.png
    assets/gameChar/male0191.png
    assets/gameChar/male0192.png
    assets/gameChar/male0193.png
    assets/gameChar/male0194.png
    assets/gameChar/male0195.png
    assets/gameChar/male0196.png
    assets/gameChar/male0197.png
    assets/gameChar/male0198.png
    assets/gameChar/male0199.png
    assets/gameChar/male0200.png
    assets/gameChar/male0201.png
    assets/gameChar/male0202.png
    assets/gameChar/male0203.png
    assets/gameChar/male0204.png
    assets/gameChar/male0205.png
    assets/gameChar/male0206.png
    assets/gameChar/male0207.png
    assets/gameChar/male0208.png
    assets/gameChar/male0209.png
    assets/gameChar/male0210.png
    assets/gameChar/male0211.png
    assets/gameChar/male0212.png
    assets/gameChar/male0213.png
    assets/gameChar/male0214.png
    assets/gameChar/male0215.png
    assets/gameChar/male0216.png
    assets/gameChar/male0217.png
    assets/gameChar/male0218.png
    assets/gameChar/male0219.png
    assets/gameChar/male0220.png
    assets/gameChar/male0221.png
    assets/gameChar/male0222.png
    assets/gameChar/male0223.png
    assets/gameChar/male0224.png
    assets/gameChar/male0225.png
    assets/gameChar/male0226.png
    assets/gameChar/male0227.png
    assets/gameChar/male0228.png
    assets/gameChar/male0229.png
    assets/gameChar/male0230.png
    assets/gameChar/male0231.png
    assets/gameChar/male0232.png
    assets/gameChar/male0233.png
    assets/gameChar/male0234.png
    assets/gameChar/male0235.png
    assets/gameChar/male0236.png
    assets/gameChar/male0237.png
    assets/gameChar/male0238.png
    assets/gameChar/male0239.png
    assets/gameChar/male0240.png
    assets/gameChar/male0241.png
    assets/gameChar/male0242.png
    assets/gameChar/male0243.png
    assets/gameChar/male0244.png
    assets/gameChar/male0245.png
    assets/gameChar/male0246.png
    assets/gameChar/male0247.png
    assets/gameChar/male0248.png
    assets/gameChar/male0249.png
    assets/gameChar/male0250.png
    assets/gameChar/male0251.png
    assets/gameChar/male0252.png
    assets/gameChar/male0253.png
    assets/gameChar/male0254.png
    assets/gameChar/male0255.png
    assets/gameChar/male0256.png
    assets/gameChar/male0257.png
    assets/gameChar/male0258.png
    assets/gameChar/male0259.png
    assets/gameChar/male0260.png
    assets/gameChar/male0261.png
    assets/gameChar/male0262.png
    assets/gameChar/male0263.png
    assets/gameChar/male0264.png
    assets/gameChar/male0265.png
    assets/gameChar/male0266.png
    assets/gameChar/male0267.png
    assets/gameChar/male0268.png
    assets/gameChar/male0269.png
    assets/gameChar/male0270.png
    assets/gameChar/male0271.png
    assets/gameChar/male0272.png
    assets/gameChar/male0273.png
    assets/gameChar/male0274.png
    assets/gameChar/male0275.png
    assets/gameChar/male0276.png
    assets/gameChar/male0277.png
    assets/gameChar/male0278.png
    assets/gameChar/male0279.png
    assets/gameChar/male0280.png
    assets/gameChar/male0281.png
    assets/gameChar/male0282.png
    assets/gameChar/male0283.png
    assets/gameChar/male0284.png
    assets/gameChar/male0285.png
    assets/gameChar/male0286.png
    assets/gameChar/male0287.png
    assets/gameChar/male0288.png
    assets/gameChar/male0289.png
    assets/gameChar/male0290.png
    assets/gameChar/male0291.png
    assets/gameChar/male0292.png
    assets/gameChar/male0293.png
    assets/gameChar/male0294.png
    assets/gameChar/male0295.png
    assets/gameChar/male0296.png
    assets/gameChar/male0297.png
    assets/gameChar/male0298.png
    assets/gameChar/male0299.png
    assets/gameChar/male0300.png
`;
    //     var data = `
    //        assets/claymodel/unscreen-001.png
    //        assets/claymodel/unscreen-002.png
    //        assets/claymodel/unscreen-003.png
    //        assets/claymodel/unscreen-004.png
    //        assets/claymodel/unscreen-005.png
    //        assets/claymodel/unscreen-006.png
    //        assets/claymodel/unscreen-007.png
    //        assets/claymodel/unscreen-008.png
    //        assets/claymodel/unscreen-009.png
    //        assets/claymodel/unscreen-010.png
    //        assets/claymodel/unscreen-011.png
    //        assets/claymodel/unscreen-012.png
    //        assets/claymodel/unscreen-013.png
    //        assets/claymodel/unscreen-014.png
    //        assets/claymodel/unscreen-015.png
    //        assets/claymodel/unscreen-016.png
    //        assets/claymodel/unscreen-017.png
    //        assets/claymodel/unscreen-018.png
    //        assets/claymodel/unscreen-019.png
    //        assets/claymodel/unscreen-020.png
    //        assets/claymodel/unscreen-021.png
    //        assets/claymodel/unscreen-022.png
    //        assets/claymodel/unscreen-023.png
    //        assets/claymodel/unscreen-024.png
    //        assets/claymodel/unscreen-025.png
    //        assets/claymodel/unscreen-026.png
    //        assets/claymodel/unscreen-027.png
    //        assets/claymodel/unscreen-028.png
    //        assets/claymodel/unscreen-029.png
    //        assets/claymodel/unscreen-030.png
    //        assets/claymodel/unscreen-031.png
    //        assets/claymodel/unscreen-032.png
    //        assets/claymodel/unscreen-033.png
    //        assets/claymodel/unscreen-034.png
    //        assets/claymodel/unscreen-035.png
    //        assets/claymodel/unscreen-036.png
    //        assets/claymodel/unscreen-037.png
    //        assets/claymodel/unscreen-038.png
    //        assets/claymodel/unscreen-039.png
    //        assets/claymodel/unscreen-040.png
    //        assets/claymodel/unscreen-041.png
    //        assets/claymodel/unscreen-042.png
    //        assets/claymodel/unscreen-043.png
    //        assets/claymodel/unscreen-044.png
    //        assets/claymodel/unscreen-045.png
    //        assets/claymodel/unscreen-046.png
    //        assets/claymodel/unscreen-047.png
    //        assets/claymodel/unscreen-048.png
    //        assets/claymodel/unscreen-049.png
    //        assets/claymodel/unscreen-050.png
    //        assets/claymodel/unscreen-051.png
    //        assets/claymodel/unscreen-052.png
    //        assets/claymodel/unscreen-053.png
    //        assets/claymodel/unscreen-054.png
    //        assets/claymodel/unscreen-055.png
    //        assets/claymodel/unscreen-056.png
    //        assets/claymodel/unscreen-057.png
    //        assets/claymodel/unscreen-058.png
    //        assets/claymodel/unscreen-059.png
    //        assets/claymodel/unscreen-060.png
    //        assets/claymodel/unscreen-061.png
    //        assets/claymodel/unscreen-062.png
    //        assets/claymodel/unscreen-063.png
    //        assets/claymodel/unscreen-064.png
    //        assets/claymodel/unscreen-065.png
    //        assets/claymodel/unscreen-066.png
    //        assets/claymodel/unscreen-067.png
    //        assets/claymodel/unscreen-068.png
    //        assets/claymodel/unscreen-069.png
    //        assets/claymodel/unscreen-070.png
    //        assets/claymodel/unscreen-071.png
    //        assets/claymodel/unscreen-072.png
    //        assets/claymodel/unscreen-073.png
    //        assets/claymodel/unscreen-074.png
    //        assets/claymodel/unscreen-075.png
    //        assets/claymodel/unscreen-076.png
    //        assets/claymodel/unscreen-077.png
    //        assets/claymodel/unscreen-078.png
    //        assets/claymodel/unscreen-079.png
    //        assets/claymodel/unscreen-080.png
    //        assets/claymodel/unscreen-081.png
    //        assets/claymodel/unscreen-082.png
    //        assets/claymodel/unscreen-083.png
    //        assets/claymodel/unscreen-084.png
    //        assets/claymodel/unscreen-085.png
    //        assets/claymodel/unscreen-086.png
    //        assets/claymodel/unscreen-087.png
    //        assets/claymodel/unscreen-088.png
    //        assets/claymodel/unscreen-089.png
    //        assets/claymodel/unscreen-090.png
    //        assets/claymodel/unscreen-091.png
    //        assets/claymodel/unscreen-092.png
    //        assets/claymodel/unscreen-093.png
    //        assets/claymodel/unscreen-094.png
    //        assets/claymodel/unscreen-095.png
    //        assets/claymodel/unscreen-096.png
    //        assets/claymodel/unscreen-097.png
    //        assets/claymodel/unscreen-098.png
    //        assets/claymodel/unscreen-099.png
    //        assets/claymodel/unscreen-100.png
    //        assets/claymodel/unscreen-101.png
    //        assets/claymodel/unscreen-102.png
    //        assets/claymodel/unscreen-103.png
    //        assets/claymodel/unscreen-104.png
    //        assets/claymodel/unscreen-105.png
    //        assets/claymodel/unscreen-106.png
    //        assets/claymodel/unscreen-107.png
    //        assets/claymodel/unscreen-108.png
    //        assets/claymodel/unscreen-109.png
    //        assets/claymodel/unscreen-110.png
    //        assets/claymodel/unscreen-111.png
    //        assets/claymodel/unscreen-112.png
    //        assets/claymodel/unscreen-113.png
    //        assets/claymodel/unscreen-114.png
    //        assets/claymodel/unscreen-115.png
    //        assets/claymodel/unscreen-116.png
    //        assets/claymodel/unscreen-117.png
    //        assets/claymodel/unscreen-118.png
    //        assets/claymodel/unscreen-119.png
    //        assets/claymodel/unscreen-120.png
    //        assets/claymodel/unscreen-121.png
    //        assets/claymodel/unscreen-122.png
    //        assets/claymodel/unscreen-123.png
    //        assets/claymodel/unscreen-124.png
    //        assets/claymodel/unscreen-125.png
    //        assets/claymodel/unscreen-126.png
    //        assets/claymodel/unscreen-127.png
    //        assets/claymodel/unscreen-128.png
    //        assets/claymodel/unscreen-129.png
    //        assets/claymodel/unscreen-130.png
    //        assets/claymodel/unscreen-131.png
    //        assets/claymodel/unscreen-132.png
    //        assets/claymodel/unscreen-133.png
    //        assets/claymodel/unscreen-134.png
    //        assets/claymodel/unscreen-135.png
    //        assets/claymodel/unscreen-136.png
    //        assets/claymodel/unscreen-137.png
    //        assets/claymodel/unscreen-138.png
    //        assets/claymodel/unscreen-139.png
    //        assets/claymodel/unscreen-140.png
    //        assets/claymodel/unscreen-141.png
    //        assets/claymodel/unscreen-142.png
    //        assets/claymodel/unscreen-143.png
    //        assets/claymodel/unscreen-144.png
    //        assets/claymodel/unscreen-145.png
    //        assets/claymodel/unscreen-146.png
    //        assets/claymodel/unscreen-147.png
    //        assets/claymodel/unscreen-148.png
    //        assets/claymodel/unscreen-149.png
    //        assets/claymodel/unscreen-150.png
    //    `;
    return data.split("\n")[index];
}

const frameCount = 112;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `100% top`,
        scroller: `#main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log()
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}
ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers: true,
    scroller: `#main`,
    start: `top top`,
    end: `150% top`,
});


gsap.to("#page>#loop>h1", {
    scrollTrigger: {
        trigger: `#page>#loop>h1`,
        start: `bottom 65%`,
        end: `center top`,
        // markers: true,
        // pin: true,
        scroller: `#main`,
        toggleActions: "restart none reverse none",
        scrub: true
    },
    x: () => -(document.querySelector("#page>#loop>h1").clientWidth - window.innerWidth),
    duration: 3,
})


ScrollTrigger.create({
    trigger: "#second",
    // pin: true,
    // markers: true,
    scroller: `#main`,
    start: `100 40%`,
    end: `bottom top`,
    toggleClass: "second-page-black",
    onEnter: () => {
        document.querySelector(".left-div>h1").classList.add('second-left-h1');
    },

    onEnter: () => document.querySelector(".left-div>h1").classList.add('second-left-h1'),
    onLeave: () => document.querySelector(".left-div>h1").classList.remove('second-left-h1'),
    onEnterBack: () => document.querySelector(".left-div>h1").classList.add('second-left-h1'),
    onLeaveBack: () => document.querySelector(".left-div>h1").classList.remove('second-left-h1'),

});


ScrollTrigger.create({
    trigger: '#second-left',
    scroller: '#main',
    pin: true,
    // markers: true,
    start: `top 200`,
    end: `700% top`,
})







gsap.to(".tile-1>div", {
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".tile-1>div",
        scrub: true,
        scroller: "#main"
    },
});


gsap.to(".tile-2>div", {
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".tile-2>div",
        scrub: true,
        scroller: "#main"
    },
});


gsap.to(".tile-3>div", {
    backgroundPosition: `50% ${-innerHeight / 2}px`,
    ease: "none",
    scrollTrigger: {
        trigger: ".tile-3>div",
        scrub: true,
        // markers: true,
        scroller: "#main"
    },
});



$(".row>div").hover(
    function (e) {
        // console.log(e.target.attributes[0].value)
        document.querySelector(':root').style.setProperty('--third-bg', e.target.attributes[0].value);


        //   $( this ).addClass( "hover" );
    }, function () {
        //   $( this ).removeClass( "hover" );
    }
);




let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".tiles", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, { skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew) });
        }
    }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".tiles", { transformOrigin: "right center", force3D: true });






