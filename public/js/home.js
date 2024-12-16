let wrapperImages = document.querySelector('.wrapper-images');
let imagesItem = document.querySelectorAll('.wrapper-images .image-area');
const totalImages = imagesItem.length;

let totalScroll = 0;
const delay = 4000;

let autoScrollLeft = setInterval(scrollingLeft, delay);

function scrollingLeft() {
  if (totalScroll >= totalImages) {
    totalScroll = 0;
  }

  let offset;
  for (let i = totalScroll; i < totalImages; i++) {
    offset = -((totalScroll + 1) * 25);
    imagesItem[i].style.left = `${offset}%`;
    imagesItem[i].style.zIndex = '-5';
  }

  for (let i = 0; i < totalScroll; i++) {
    offset = 25;
    imagesItem[i].style.left = `calc(${imagesItem[i].style.left} - ${offset}%)`;
    imagesItem[i].style.zIndex = '-5';
  }

  setTimeout(() => {
    imagesItem[totalScroll - 1].style.zIndex = '-10';
    offset = (totalImages - totalScroll) * 25;
    imagesItem[totalScroll - 1].style.left = `${offset}%`;
  }, 500);
  totalScroll++;
}

const mottoTextElem = document.querySelector('.motto h2');
const mottoText = [
  'Everything with Music',
  'Innovate with Music',
  'Connect with Music',
  'Reach bigger with Music',
  'Feel more with Music',
  'Play with Music',
  'Rest with Music',
  'Experience more with Music',
  'Communicate with Music',
  'Work with Music',
  'Everything with Music',
  'Collaborate with Music',
];

let currentIndex = 0;

const updateMottoText = () => {
  mottoTextElem.textContent = mottoText[currentIndex];
  currentIndex = (currentIndex + 1) % mottoText.length;
};

setInterval(updateMottoText, 1500);

let wrapperReleases = document.querySelector('.wrapper-releases');
let releasesItem = document.querySelectorAll('.wrapper-releases .image-area');
let totalReleases = releasesItem.length;

const firstClone = releasesItem[0].cloneNode(true);
const lastClone = releasesItem[totalReleases - 1].cloneNode(true);
wrapperReleases.insertAdjacentElement('afterbegin', lastClone);
wrapperReleases.insertAdjacentElement('beforeend', firstClone);

releasesItem = document.querySelectorAll('.wrapper-releases .image-area');
totalReleases = releasesItem.length;

let totalScrollRelease = 0;
let isEnabledScroll = true;
initScrollRelease();

function initScrollRelease() {
  let offset;
  for (let i = totalScrollRelease; i < totalReleases; i++) {
    offset = -((totalScrollRelease + 1) * (100 / totalReleases));
    releasesItem[i].style.left = `${offset}%`;
  }

  totalScrollRelease++;
}

function scrollingReleaseLeft() {
  isEnabledScroll = false;
  let offset;
  for (let i = 0; i < totalReleases; i++) {
    releasesItem[i].style.transition = 'left 0.5s ease-in-out';
    offset = parseFloat(releasesItem[i].style.left) - 100 / totalReleases;
    releasesItem[i].style.left = `${offset}%`;
  }

  if (totalScrollRelease === totalReleases - 2) {
    setTimeout(() => {
      for (let i = 0; i < totalReleases; i++) {
        releasesItem[i].style.transition = 'none';
        offset = -(100 / totalReleases);
        releasesItem[i].style.left = `${offset}%`;
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
  for (let i = 0; i < totalReleases; i++) {
    releasesItem[i].style.transition = 'left 0.5s ease-in-out';
    offset = parseFloat(releasesItem[i].style.left) + 100 / totalReleases;
    releasesItem[i].style.left = `${offset}%`;
  }

  if (totalScrollRelease === 1) {
    setTimeout(() => {
      for (let i = 0; i < totalReleases; i++) {
        releasesItem[i].style.transition = 'none';
        offset = -(100 / totalReleases) * (totalReleases - 2);
        releasesItem[i].style.left = `${offset}%`;
      }
      totalScrollRelease = totalReleases - 2;
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
