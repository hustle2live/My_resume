const buttonOne = document.querySelector('.button-first');
const buttonTwo = document.querySelector('.button-second');
const buttonThree = document.querySelector('.button-third');
const ulLists = document.querySelectorAll('.list');

buttonOne.addEventListener('click', () => ulLists[0].classList.toggle('hide'));

buttonTwo.addEventListener('click', () => ulLists[1].classList.toggle('hide'));

buttonThree.addEventListener('click', () =>
  ulLists[2].classList.toggle('hide')
);
