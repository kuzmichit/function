'use strict';

const increase = document.querySelector('.increase');
const setCounter = document.querySelector('.set');
const show = document.querySelector('.show');
const decrease = document.querySelector('.decrease');

//increase.addEventListener('click', counter);
setCounter.addEventListener('click', counter.set);
show.addEventListener('click', counter.show);
decrease.addEventListener('click', counter.decrease);

function makeCounter() {
  let currentCount = 0;

  function counter() {
    currentCount++;
  };
  
  counter.show = function() {
    return console.log(44); 
  };

  return currentCount;
}

let counter = makeCounter();

//counter.show();
console.log();