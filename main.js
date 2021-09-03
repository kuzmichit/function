'use strict';

const increase = document.querySelector('.increase');
const setCounter = document.querySelector('.set');
const show = document.querySelector('.show');
const decrease = document.querySelector('.decrease');


function makeCounter() {
  let currentCount = 0;

  function counter() {
    currentCount++;
  };
  
  counter.show = function() {
    console.log(currentCount); 
  };

  return counter;
}

let counter = makeCounter();

//counter.show();
console.log();

function inc() {
  console.log(33)
}
increase.addEventListener('click', counter);
setCounter.addEventListener('click', counter.set);
show.addEventListener('click', counter.show);
decrease.addEventListener('click', counter.decrease);
