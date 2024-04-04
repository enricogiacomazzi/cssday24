import { done, setStart, step } from './dynamics';
import './style.css';

const {clientWidth} = document.getElementById('bar');
const halfWidth = clientWidth / 2;
const cursor = document.getElementById('cursor');

const render = (value) => {
  const pos = Math.round(halfWidth * value);
  cursor.style.transform = `translate(${pos}px)`;
}


let prevTs;

document.addEventListener('keydown', e => {
  e.preventDefault();
  if(e.code !== 'KeyR') {
    return;
  }
    
  prevTs = undefined;
  setStart(-1);
  window.requestAnimationFrame(run);
});



function run(ts) {
  if(prevTs === undefined) {
    prevTs = ts;
  }

  const value = step((ts - prevTs) / 1000);
  // console.log(value);
  render(value);

  prevTs = ts;
  if(!done()) {
    window.requestAnimationFrame(run);
  }
  else {
    console.log('completed');
  }
}
