//This activates activates link based on the currently viewed element

let isScrolling = false;

window.addEventListener('scroll', throttleScroll, false);
function throttleScroll(e) {
  if (!isScrolling) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

window.addEventListener('load', () => {
  setTimeout(scrolling, 3010);
  // document.addEventListener('DOMContentLoaded', scrolling, false);
})

let sections = document.querySelectorAll('[data-section-index]');
let groupSections = document.querySelectorAll('[data-group-section-index]');

function scrolling(e) {
  sections.forEach((element) => {
    let linkIndex = element.getAttribute('data-section-index');
    if (isPartiallyVisible(element)) {
      document
        .querySelector(`[data-link-index = "${linkIndex}"]`)
        .classList.add('on-point');
      element.classList.add('section-show');
    } else {
      document
        .querySelector(`[data-link-index = "${linkIndex}"]`)
        .classList.remove('on-point');
      element.classList.remove('section-show');
    }
  });

  groupSections.forEach((element) => {
    let linkIndex = element.getAttribute('data-group-section-index');
    if (isGroupSecVis(element)) {
      document
        .querySelector(`[data-link-index = "${linkIndex}"]`)
        .classList.add('on-point');
    } else {
      document
        .querySelector(`[data-link-index = "${linkIndex}"]`)
        .classList.remove('on-point');
    }
  })
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return bottom >= 20 &&  window.innerHeight - top >= height / 3;
}

function isGroupSecVis(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return bottom >= height / 9 &&  window.innerHeight - top >= height / 9;
}
