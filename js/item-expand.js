let expandBtns = document.querySelectorAll('.act-exp-btn');

expandBtns.forEach((x) => {
  x.addEventListener('click', (e) => {
    let thisActItem = e.currentTarget.parentElement.parentElement;
    thisActItem.classList.toggle('expanded');
  });
  x.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      x.click();
    }
  });
});
