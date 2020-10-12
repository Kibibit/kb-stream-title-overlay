const background = getParameterByName('background');
const theme = getParameterByName('theme');
const title = getParameterByName('title');
const subtitle = getParameterByName('subtitle');

const lineColors = {
  yellow: 'hsl(48, 100%, 67%)',
  yellowAgain: 'hsl(48, 100%, 67%)',
  red: 'hsl(348, 100%, 61%)',
  blue: 'hsl(204, 86%, 53%)'
};

if (background) {
  document.body.classList.add('background');
}

if (theme === 'light') {
  document.body.classList.add('light');
}

document.body.querySelector('#ball').style = `background: ${ _.sample(lineColors) }`;

document.body.querySelector('#title').innerHTML = title || 'Among Us Gang';
document.body.querySelector('#subtitle').innerHTML = subtitle || '@thatkookooguy';

const tl = gsap.timeline({
  onComplete: hideTitle
});

tl.delay(1)
  .to(".ball", {
    duration: 0.6,
    ease: Elastic.easeOut.config(1.5, 0.5),
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

function getParameterByName (name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}