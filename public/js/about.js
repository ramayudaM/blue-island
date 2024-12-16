const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  const header = item.querySelector('.menu-header');
  const content = item.querySelector('.menu-content');

  header.addEventListener('click', () => {
    if (item.classList.contains('open')) {
      closeContent(item, content);
    } else {
      menuItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          closeContent(otherItem, otherItem.querySelector('.menu-content'));
        }
      });
      openContent(item, content);
    }
  });
});

function openContent(item, content) {
  item.classList.add('open');
  content.style.height = `${content.scrollHeight}px`;
}

function closeContent(item, content) {
  item.classList.remove('open');
  content.style.height = '0';
}
