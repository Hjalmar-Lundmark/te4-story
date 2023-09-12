import './style.css'
import star from '/star.svg'

import json from './story.json'
const story = json;

document.querySelector('#app').innerHTML = `
<main class="autoWidth">
  <div id="Intro">
    <h1>Hjalmar's Fantastic Story</h1>
    <h2>Introduction</h2>
    <p>
      Once upon a time, in the quiet town of Solberg, nestled deep within the lush forests of Sweden, lived a man
      named
      Hjalmar Lundmark.
      Hjalmar was a tall, wiry fellow with a shock of unruly brown hair that seemed to perpetually defy the comb.
      His piercing blue eyes were always fixed on the stars that glittered in the night sky.
      He had a reputation in town as the eccentric stargazer, spending countless hours with his telescope,
      studying the cosmos from his small observatory on the outskirts of Solberg.
    </p>
    <h2>Information</h2>
    <p>
      This story consists of interactive choices that unlocks the next parts and change how the story unfolds.
    </p>
    <button id="startBtn">Start</button>
  </div>

  <div id="part1">
    <h2>The story</h2>
    <p id="pPart1">

    </p>

    <div id="divQ1">
      <h3>Accept the offer?</h3>
      <button id="ques1opt1">${story[0].options[0].msg}</button>
      <button id="ques1opt2">${story[0].options[1].msg}</button>
    </div>

  </div>


  <div id="part2">
    <p id="pPart2"></p>

    <div id="divQ2">
      <h3>What now?</h3>
      <button id="ques2opt1">${story[1].options[0].msg}</button>
      <button id="ques2opt2">${story[1].options[1].msg}</button>
    </div>
  </div>

  <div id="part3">
    <p id="pPart3"></p>

    <a href="/">
      <button>Spela igen</button>
    </a>

    <h3>Thanks for reading! What rating would you give this story? </h3>
    <div class="starFlex">
      <button class="starBtn star star1" id="star1">
        <img src="${star}" alt="First star" class="star star1">
      </button>
      <button class="starBtn star star2" id="star2">
        <img src="${star}" alt="Second star" class="star star2">
      </button>
      <button class="starBtn star star3" id="star3">
        <img src="${star}" alt="Third star" class="star star3">
      </button>
      <button class="starBtn star star4" id="star4">
        <img src="${star}" alt="Fourth star" class="star star4">
      </button>
      <button class="starBtn star star5" id="star5">
        <img src="${star}" alt="Fifth star" class="star star5">
      </button>
    </div>

    <h3 id="Feedback">
      Thanks again, you are welcome to give feedback as a
      <a href="https://github.com/Hjalmar-Lundmark/te4-story/issues">github issue</a>.
    </h3>
  </div>
</main>
`

// buttons
const startBtn = document.querySelector('#startBtn')
const ques1opt1Btn = document.querySelector('#ques1opt1')
const ques1opt2Btn = document.querySelector('#ques1opt2')
const ques2opt1Btn = document.querySelector('#ques2opt1')
const ques2opt2Btn = document.querySelector('#ques2opt2')

startBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // shows first part
  document.querySelector('#pPart1').innerHTML = story[0].text
  const part1 = document.querySelector('#part1')
  part1.style.display = "block";

  // turns off clicked button
  startBtn.disabled = true;
  startBtn.style.border = "solid 2px black"
})


// First question
let part2 = document.querySelector('#part2')
let divQ2 = document.querySelector('#divQ2')
// first answer
ques1opt1Btn.addEventListener('click', (e) => {
  e.preventDefault();
  //shows part 2
  document.querySelector('#pPart2').innerHTML = story[story[0].options[0].nextId].text;
  part2.style.display = 'block';

  // turns off clicked buttons
  ques1opt1Btn.disabled = true;
  ques1opt2Btn.disabled = true;

  ques1opt1Btn.style.border = "solid 2px black"
})

// second answer
ques1opt2Btn.addEventListener('click', (e) => {
  e.preventDefault();
  // shows part 2 and end
  document.querySelector('#pPart2').innerHTML = story[story[0].options[1].nextId].text;
  part2.style.display = 'block';
  let part3 = document.querySelector('#part3')
  part3.style.display = 'block';

  divQ2.style.display = 'none'

  // turns off clicked buttons
  ques1opt1Btn.disabled = true;
  ques1opt2Btn.disabled = true;

  ques1opt2Btn.style.border = "solid 2px black"
})


// second question
let part3 = document.querySelector('#part3')
// first answer
ques2opt1Btn.addEventListener('click', (e) => {
  e.preventDefault();
  // shows part 3 (ending)
  document.querySelector('#pPart3').innerHTML = story[story[1].options[0].nextId].text;
  part3.style.display = 'block';

  // turns off clicked buttons
  ques2opt1Btn.disabled = true;
  ques2opt2Btn.disabled = true;

  ques2opt1Btn.style.border = "solid 2px black"
})

// second answer
ques2opt2Btn.addEventListener('click', (e) => {
  e.preventDefault();
  // shows part 3 (ending)
  document.querySelector('#pPart3').innerHTML = story[story[1].options[1].nextId].text;
  part3.style.display = 'block';

  // turns off clicked button
  ques2opt1Btn.disabled = true;
  ques2opt2Btn.disabled = true;

  ques2opt2Btn.style.border = "solid 2px black"
})


//star buttons, kinda wack
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');
let starBool = false;

star1.addEventListener('click', (e) => {
  if (!starBool) {
    star1.style.backgroundColor = '#FFFF88';
    star2.style.backgroundColor = '#FFFF88';
    star3.style.backgroundColor = '#FFFF88';
    star4.style.backgroundColor = '#FFFF88';
    star5.style.backgroundColor = '#FFFF88';
    starBool = true;
  } else {
    star1.style.backgroundColor = 'transparent';
    star2.style.backgroundColor = 'transparent';
    star3.style.backgroundColor = 'transparent';
    star4.style.backgroundColor = 'transparent';
    star5.style.backgroundColor = 'transparent';
    starBool = false;
  }
})

star2.addEventListener('click', (e) => {
  if (!starBool) {
    star2.style.backgroundColor = '#FFFF88';
    star3.style.backgroundColor = '#FFFF88';
    star4.style.backgroundColor = '#FFFF88';
    star5.style.backgroundColor = '#FFFF88';
    starBool = true;
  } else {
    star1.style.backgroundColor = 'transparent';
    star2.style.backgroundColor = 'transparent';
    star3.style.backgroundColor = 'transparent';
    star4.style.backgroundColor = 'transparent';
    star5.style.backgroundColor = 'transparent';
    starBool = false;
  }
})

star3.addEventListener('click', (e) => {
  if (!starBool) {
    star3.style.backgroundColor = '#FFFF88';
    star4.style.backgroundColor = '#FFFF88';
    star5.style.backgroundColor = '#FFFF88';
    starBool = true;
  } else {
    star1.style.backgroundColor = 'transparent';
    star2.style.backgroundColor = 'transparent';
    star3.style.backgroundColor = 'transparent';
    star4.style.backgroundColor = 'transparent';
    star5.style.backgroundColor = 'transparent';
    starBool = false;
  }
})

star4.addEventListener('click', (e) => {
  if (!starBool) {
    star4.style.backgroundColor = '#FFFF88';
    star5.style.backgroundColor = '#FFFF88';
    starBool = true;
  } else {
    star1.style.backgroundColor = 'transparent';
    star2.style.backgroundColor = 'transparent';
    star3.style.backgroundColor = 'transparent';
    star4.style.backgroundColor = 'transparent';
    star5.style.backgroundColor = 'transparent';
    starBool = false;
  }
})

star5.addEventListener('click', (e) => {
  if (!starBool) {
    star5.style.backgroundColor = '#FFFF88';
    starBool = true;
  } else {
    star1.style.backgroundColor = 'transparent';
    star2.style.backgroundColor = 'transparent';
    star3.style.backgroundColor = 'transparent';
    star4.style.backgroundColor = 'transparent';
    star5.style.backgroundColor = 'transparent';
    starBool = false;
  }
})