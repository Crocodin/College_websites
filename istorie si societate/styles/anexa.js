const container = document.getElementsByClassName('container');

Array.from(container).forEach(element => {
  element.addEventListener('click', () => {
    let clickedelement = element;
    if (!clickedelement.classList.contains('get-big')) {
      clickedelement.classList.add('get-big');
    } else {
      clickedelement.classList.remove('get-big');
    }
  });
});
