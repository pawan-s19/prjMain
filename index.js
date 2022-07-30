var timeline = gsap.timeline();
timeline
  .from(".name", {
    top: "59%",
    ease: Expo.easeInOut,
    duration: 3,
  })
  .from(".designation", {
    top: "65%",
    ease: Expo.easeOut,
    duration: 2,
  });
gsap.to("#right", {
  scrollTrigger: {
    trigger: "#right",
    pin: true,

    start: "top 6%",
    onLeave: () => {
      document.querySelector("#right").style.opacity = 0;
    },
    end: "5700px",
  },
});
gsap.to("#ab", {
  scrollTrigger: {
    trigger: "#ab",
    start: "top 90%",
    scrub: 1,
  },
  x: "80%",
});

var tw1 = document.querySelector("#b").clientWidth;
var tw2 = document.querySelector(".length").clientWidth;
var tw3 = document.querySelector("#c").clientWidth;
var tw4 = document.querySelector("#a").clientWidth;
var tw5 = document.querySelector("#d").clientWidth;

var t1 = gsap.to(".bc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  width: tw1 + "px",
  ease: "power4.out",
  duration: 1,
});

var t2 = gsap.to(".bcc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  delay: 1,
  width: tw1 + "px",
  ease: "power4.out",
});

var t3 = gsap.to("#b", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  delay: 1,

  zIndex: 1,
  opacity: 1,
  ease: "power4.out",
});
var t4 = gsap.to(".lc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  width: tw2 + "px",
  ease: "power4.out",
  duration: 1,
});

var t5 = gsap.to(".lcc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  delay: 1,
  width: tw2 + "px",
  ease: "power4.out",
});

var t6 = gsap.to(".length", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  delay: 1,

  zIndex: 1,
  opacity: 1,
  ease: "power4.out",
});

var t7 = gsap.to(".cc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  width: tw3 + "px",
  ease: "power4.out",
  duration: 1,
});

var t8 = gsap.to(".ccc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  delay: 1,
  width: tw3 + "px",
  ease: "power4.out",
});

var t9 = gsap.to("#c", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  delay: 1,

  zIndex: 9,
  opacity: 1,
  ease: "power4.out",
});

var t10 = gsap.to(".ac", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  width: tw4 + "px",
  ease: "power4.out",
  duration: 1,
});

var t11 = gsap.to(".acc", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  delay: 1,
  width: tw4 + "px",
  ease: "power4.out",
});

var t12 = gsap.to("#a", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  delay: 1,

  zIndex: 9,
  opacity: 1,
  ease: "power4.out",
});
var object1 = {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  width: tw5 + "px",
  ease: "power4.out",
  duration: 1,
};
var t13 = gsap.to(".dc", object1);
var object2 = {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  opacity: 1,
  delay: 1,
  width: tw5 + "px",
  ease: "power4.out",
};
var t14 = gsap.to(".dcc", object2);

var t15 = gsap.to("#d", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
  },
  delay: 1,

  zIndex: 9,
  opacity: 1,
  ease: "power4.out",
});
var t = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15];

gsap.to("#img", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
    scrub: 1,

    onEnter: () => {
      t.forEach((element) => {
        element.restart(true);
      });
    },
    onEnterBack: () => {
      document.querySelector("#a").textContent = "1";
      document.querySelector("#b").textContent = "Voistrap";
      document.querySelector("#c").textContent =
        "Full Stack developer and designer.Developed different webapps with nodeJs.";
      document.querySelector("#d").innerHTML = "<i class=ri-apple-fill></i>";

      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
    onLeaveBack: () => {
      document.querySelector(".ac").style.opacity = "0";
      document.querySelector(".acc").style.opacity = "0";
      document.querySelector(".bc").style.opacity = "0";
      document.querySelector(".bcc").style.opacity = "0";
      document.querySelector(".lc").style.opacity = "0";
      document.querySelector(".lcc").style.opacity = "0";
      document.querySelector(".cc").style.opacity = "0";
      document.querySelector(".ccc").style.opacity = "0";
      document.querySelector(".dc").style.opacity = "0";
      document.querySelector(".dcc").style.opacity = "0";

      document.querySelector("#a").style.opacity = "0";
      document.querySelector("#b").style.opacity = "0";
      document.querySelector("#c").style.opacity = "0";
      document.querySelector("#d").style.opacity = "0";
      document.querySelector(".length").style.opacity = "0";
      t.forEach(function (elem) {
        elem.pause();
      });
    },
  },
  y: "-400px",
});
gsap.to("#img1", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
    scrub: 1,
  },
  y: "-200px",
});
gsap.to("#img2", {
  scrollTrigger: {
    trigger: "#img",
    start: "bottom 80%",
    scrub: 1,
  },
  y: "-300px",
});
gsap.to("#img3", {
  scrollTrigger: {
    trigger: "#img",
    start: "top 80%",
    scrub: 1,
  },
  y: "-200px",
});

gsap.to("#img4", {
  scrollTrigger: {
    trigger: "#img4",
    start: "top 80%",
    scrub: 1,
    onEnter: () => {
      document.querySelector("#a").textContent = "2";
      document.querySelector("#b").textContent = "Foody";
      document.querySelector("#c").textContent =
        "Hotel And Restaurant app for IOS,which allows to save your Favourite Food";
      document.querySelector("#d").innerHTML = "<i class=ri-android-fill></i>";

      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
    onEnterBack: () => {
      document.querySelector("#a").textContent = "2";
      document.querySelector("#b").textContent = "Foody";
      document.querySelector("#c").textContent =
        "Hotel And Restaurant app for IOS,which allows to save your Favourite Food";
      document.querySelector("#d").innerHTML = "<i class=ri-android-fill></i>";

      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
  },
  y: "-500px",
});

gsap.to("#img5", {
  scrollTrigger: {
    trigger: "#img4",
    start: "top 80%",
    scrub: 1,
  },
  y: "-400px",
});
gsap.to("#img6", {
  scrollTrigger: {
    trigger: "#img4",
    start: "top 80%",
    scrub: 1,
  },
  y: "-300px",
});
gsap.to("#img7", {
  scrollTrigger: {
    trigger: "#img4",
    start: "top 80%",
    scrub: 1,
  },
  y: "-400px",
});

gsap.to("#img8", {
  scrollTrigger: {
    trigger: "#img8",
    start: "top 80%",
    scrub: 1,
    onEnter: () => {
      document.querySelector("#a").textContent = "3";
      document.querySelector("#b").textContent = "Plan";
      document.querySelector("#c").textContent =
        "An android app, which allows users to Plan and maintain schedule according to daily needs";
      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
    onEnterBack: () => {
      document.querySelector("#a").textContent = "3";
      document.querySelector("#b").textContent = "Plan";
      document.querySelector("#c").textContent =
        "An android app, which allows users to Plan and maintain schedule according to daily needs";

      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
  },
  y: "-200px",
});
gsap.to("#img9", {
  scrollTrigger: {
    trigger: "#img9",
    start: "top 80%",
    scrub: 1,
  },
  y: "-500px",
});

gsap.to("#img10", {
  scrollTrigger: {
    trigger: "#img10",
    start: "top 80%",
    scrub: 1,
    onEnter: () => {
      document.querySelector("#a").textContent = "4";
      document.querySelector("#b").textContent = "Jarvis";
      document.querySelector("#c").textContent =
        "Automate your work by controlling tech in your car using your mobilephone";
      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
    onEnterBack: () => {
      document.querySelector("#a").textContent = "4";
      document.querySelector("#b").textContent = "Jarvis";
      document.querySelector("#c").textContent =
        "Automate your work by controlling tech in your car using your mobilephone";
      document.querySelector("#right").style.opacity = 1;

      t.forEach(function (elem) {
        elem.restart(true);
      });
    },
  },
  y: "-600px",
});

gsap.to("#img11", {
  scrollTrigger: {
    trigger: "#img10",
    start: "top 80%",
    scrub: 1,
  },
  y: "-400px",
});

gsap.to("#img12", {
  scrollTrigger: {
    trigger: "#img10",
    start: "bottom 80%",
    scrub: 1,
  },
  y: "-300px",
});

gsap.to("#img13", {
  scrollTrigger: {
    trigger: "#img11",
    start: "bottom 80%",
    scrub: 1,
  },
  y: "-600px",
});

gsap.to("#skills", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 100%",
    scrub: 1,
  },
  x: "-110%",
});
gsap.to("#links", {
  scrollTrigger: {
    trigger: "#links",
    start: "top 100%",
    scrub: 1,
  },
  x: "110%",
});
