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
      <button id="ques1opt1" disabled>${story[0].options[0].msg}</button>
      <button id="ques1opt2" disabled>${story[0].options[1].msg}</button>
    </div>

  </div>


  <div id="part2">
    <p id="pPart2">

    </p>

    <div id="divQ2">
      <h3>What now?</h3>
      <button id="ques2opt1" disabled>${story[1].options[0].msg}</button>
      <button id="ques2opt2" disabled>${story[1].options[1].msg}</button>
    </div>
  </div>

  <div id="part3">
    <p id="pPart3">

    </p>

    <a href="/">
      <button>Spela igen</button>
    </a>

    <h3>Thanks for reading! What rating would you give this story? </h3>
    <div class="starFlex">
      <img src="${star}" alt="First star" class="star star1">
      <img src="${star}" alt="Second star" class="star star2">
      <img src="${star}" alt="Third star" class="star star3">
      <img src="${star}" alt="Fourth star" class="star star4">
      <img src="${star}" alt="Fifth star" class="star star5">
    </div>

    <h3 id="Feedback">
      Thanks again, you are welcome to give feedback as a
      <a href="https://github.com/Hjalmar-Lundmark/te4-story/issues">github issue</a>
    </h3>
  </div>
</main>
`

const startBtn = document.querySelector('#startBtn')
const ques1opt1Btn = document.querySelector('#ques1opt1')
const ques1opt2Btn = document.querySelector('#ques1opt2')
const ques2opt1Btn = document.querySelector('#ques2opt1')
const ques2opt2Btn = document.querySelector('#ques2opt2')

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#pPart1').innerHTML = story[0].text
  const part1 = document.querySelector('#part1')
  part1.style.display = "block";

  ques1opt1Btn.disabled = false;
  ques1opt2Btn.disabled = false;

  startBtn.disabled = true;
})


let part2 = document.querySelector('#part2')
let divQ2 = document.querySelector('#divQ2')
ques1opt1Btn.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart2').innerHTML = story[story[0].options[0].nextId].text;
  part2.style.display = 'block';

  divQ2.style.display = 'block'

  ques2opt1Btn.disabled = false;
  ques2opt2Btn.disabled = false;

  ques1opt1Btn.disabled = true;
  ques1opt2Btn.disabled = true;
})
ques1opt2Btn.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart2').innerHTML = story[story[0].options[1].nextId].text;
  part2.style.display = 'block';
  let part3 = document.querySelector('#part3')
  part3.style.display = 'block';

  divQ2.style.display = 'none'

  ques2opt1Btn.disabled = false;
  ques2opt2Btn.disabled = false;

  ques1opt1Btn.disabled = true;
  ques1opt2Btn.disabled = true;
})


let part3 = document.querySelector('#part3')
ques2opt1Btn.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart3').innerHTML = story[story[1].options[0].nextId].text;
  part3.style.display = 'block';

  ques2opt1Btn.disabled = true;
  ques2opt2Btn.disabled = true;
})
ques2opt2Btn.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart3').innerHTML = story[story[1].options[1].nextId].text;
  part3.style.display = 'block';

  ques2opt1Btn.disabled = true;
  ques2opt2Btn.disabled = true;
})