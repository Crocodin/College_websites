let divs = document.querySelectorAll('.small-div');
const go_back_div = document.getElementById('hig');

console.log("hello");

let selected_div = divs[0];
const myImg = document.getElementById("codrin");

console.log(myImg);


myImg.addEventListener("load", function() {
  if(selected_div.clientHeight + myImg.clientHeight / 2 > screen.height - 120 && screen.width < 1300) {
    go_back_div.style.height = `${selected_div.clientHeight + myImg.clientHeight / 2}px`;
  }
});

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', () => {
    console.log("hello");
    if (!divs[i].classList.contains('big')) {
      selected_div.classList.remove('big', selected_div.classList[selected_div.classList.length - 1]);
      selected_div.classList.add(divs[i].classList[divs[i].classList.length - 1]);
      selected_div = divs[i];
      selected_div.classList.remove(divs[i].classList[selected_div.classList.length - 1]);
      selected_div.classList.add('big', 'pozition-mid');

      if(screen.width < 1300) {
        if(selected_div.clientHeight + 150 > screen.height - 120) {
          go_back_div.style.height = `${selected_div.clientHeight + 150}px`;
        }
        else go_back_div.style.height = "calc(100vh - var(--go-back-div-height))"
      }
    }
  });
}
