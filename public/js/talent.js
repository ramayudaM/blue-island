let wrapperPress = document.querySelector('.press-area');
let pressItem = document.querySelectorAll('.press-area .press-img');
let totalPress = pressItem.length;

const firstClone = pressItem[0].cloneNode(true);
const lastClone = pressItem[totalPress - 1].cloneNode(true);
wrapperPress.insertAdjacentElement('afterbegin', lastClone);
wrapperPress.insertAdjacentElement('beforeend', firstClone);

pressItem = document.querySelectorAll('.press-area .press-img');
totalPress = pressItem.length;

let totalScrollRelease = 0;
let isEnabledScroll = true;
const delay = 4000;

initScrollRelease();

function initScrollRelease() {
  let offset;
  for (let i = totalScrollRelease; i < totalPress; i++) {
    offset = -((totalScrollRelease + 1) * (100 / totalPress));
    pressItem[i].style.left = `${offset}%`;
  }

  totalScrollRelease++;
}

function scrollingReleaseLeft() {
  isEnabledScroll = false;
  let offset;
  for (let i = 0; i < totalPress; i++) {
    pressItem[i].style.transition = 'left 0.5s ease-in-out';
    offset = parseFloat(pressItem[i].style.left) - 100 / totalPress;
    pressItem[i].style.left = `${offset}%`;
  }

  if (totalScrollRelease === totalPress - 2) {
    setTimeout(() => {
      for (let i = 0; i < totalPress; i++) {
        pressItem[i].style.transition = 'none';
        offset = -(100 / totalPress);
        pressItem[i].style.left = `${offset}%`;
      }

      totalScrollRelease = 1;
    }, 500);

    isEnabledScroll = true;
    return;
  }

  totalScrollRelease++;
  isEnabledScroll = true;
}

function scrollingReleaseRight() {
  isEnabledScroll = false;
  let offset;
  for (let i = 0; i < totalPress; i++) {
    pressItem[i].style.transition = 'left 0.5s ease-in-out';
    offset = parseFloat(pressItem[i].style.left) + 100 / totalPress;
    pressItem[i].style.left = `${offset}%`;
  }

  if (totalScrollRelease === 1) {
    setTimeout(() => {
      for (let i = 0; i < totalPress; i++) {
        pressItem[i].style.transition = 'none';
        offset = -(100 / totalPress) * (totalPress - 2);
        pressItem[i].style.left = `${offset}%`;
      }
      totalScrollRelease = totalPress - 2;
    }, 500);

    isEnabledScroll = true;
    return;
  }
  totalScrollRelease--;
  isEnabledScroll = true;
}

let btnLeft = document.querySelector('.left-slide');
let btnRight = document.querySelector('.right-slide');

let autoScrollReleaseLeft = setInterval(scrollingReleaseLeft, delay);

btnRight.addEventListener('click', () => {
  if (!isEnabledScroll) return;
  clearInterval(autoScrollReleaseLeft);
  scrollingReleaseLeft();
  autoScrollReleaseLeft = setInterval(scrollingReleaseLeft, delay);
});

btnLeft.addEventListener('click', () => {
  if (!isEnabledScroll) return;
  scrollingReleaseRight();
  clearInterval(autoScrollReleaseLeft);
  autoScrollReleaseLeft = setInterval(scrollingReleaseLeft, delay);
});
