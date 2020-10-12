const tl = gsap.timeline({
  onComplete: hideTitle
});

tl.delay(1)
  .to(".ball", {
    duration: 0.5,
    ease: Elastic.easeOut.config(1, 0.3),
    css: {
      width: "0.5em",
      height: "0.5em"
    }
  })
  .to(".ball", {
    duration: 0.2,
    css: {
      borderRadius: "0",
      height: "100%"
    }
  })
  .to(
    ".words",
    {
      duration: 1,
      stagger: 0.2,
      css: {
        width: "auto"
      }
    },
    ">-0.1"
  );
// gsap.to(".ball", {
//   duration: 1,
//   css: {
//     borderRadius: "0"
//   }
// });
// gsap.to(".ball", {
//   duration: 0.5,
//   css: {
//     height: "100%"
//   }
// });

function hideTitle() {
  setTimeout(() => tl.reverse(), 3000);
}
