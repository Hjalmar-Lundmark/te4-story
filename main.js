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

    <h3>Accept the offer?</h3>
    <button id="ques1opt1" disabled>${story[0].options[0].msg}</button>
    <button id="ques1opt2" disabled>${story[0].options[1].msg}</button>

  </div>


  <div id="part2">
    <p id="pPart2">
      
    </p>

    <h3>What now?</h3>
    <button id="q2opt1" disabled>${story[1].options[0].msg}</button>
    <button id="q2opt2" disabled>${story[1].options[1].msg}</button>
  </div>

  <div id="part3">
    <p id="pPart3">
      With newfound purpose, Hjalmar decided to return to Solberg. He set up a small observatory there, inviting
      local
      children and adults alike to join him in exploring the cosmos. He became a beloved figure in the town, just
      as he
      had been in his childhood, and he shared his passion for the stars with the next generation. <br>
      <br>
      Hjalmar Lundmark had come full circle, from a dreamy-eyed child in Solberg to a world-renowned astronomer in
      Stockholm and back again to his beloved hometown. His journey through the cosmos had not only enriched his
      life
      but had also ignited a spark of curiosity in the hearts of those who followed in his footsteps, reminding
      them
      that the mysteries of the universe were meant to be explored and shared with all who dared to look up and
      dream.
      <br>
      <br>
      The end.
    </p>

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
const wayButton1 = document.querySelector('#ques1opt1')
const wayButton2 = document.querySelector('#ques1opt2')

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#pPart1').innerHTML = story[0].text
  const part1 = document.querySelector('#part1')
  part1.style.display = "block";

  wayButton1.disabled = false;
  wayButton2.disabled = false;
})

wayButton1.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart2').innerHTML = story[story[0].options[0].nextId].text;
  const part2 = document.querySelector('#part2')
  part2.style.display = 'block';

})
wayButton2.addEventListener('click', (e) => {
  e.preventDefault
  document.querySelector('#pPart2').innerHTML = story[story[0].options[1].nextId].text;
  const part2 = document.querySelector('#part2')
  part2.style.display = 'block';
})