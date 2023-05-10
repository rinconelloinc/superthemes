<!--Video Autoplay-->

<script>
  function autoPlayVideo() {
  console.log("started");
  const vids = document.querySelectorAll(".notion-video video");

  vids.forEach((vid) => {
    if (vid) {
      vid.muted = true;
      vid.controls = true;
      vid.loop = true;
      vid.play();
    }
  });
}

const threshold = 0.2;
const options = {
  root: null,
  rootMargin: "0px",
  threshold,
};



function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      console.log("heree");
      entry.target.classList.remove("reveal");
      observer.unobserve(entry.target);
    }
  });
}


document.documentElement.classList.add("reveal-loaded");

function animateOnScroll() {
  let pageBlocks = document.querySelectorAll(".super-content article > div");
  pageBlocks.forEach((block) => {
    block.classList.add("reveal");
  });



  a_blocks.forEach((block) => {
    const el = document.querySelector(`#${block.id}`);
    if (el) {
      el.classList.add(block.class);
    }
  });

  const observer = new IntersectionObserver(handleIntersect, options);
  const targets = document.querySelectorAll(".reveal");
  console.log("targets: ", targets);
  targets.forEach(function (target) {
    observer.observe(target);
  });
}

window.addEventListener("DOMContentLoaded",
function () {
  autoPlayVideo();
  animateOnScroll();
});
</script>
