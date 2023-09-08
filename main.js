import './style.css'
import star from '/star.svg'

//test
import json from './story.json'
const story = json;
console.log(story)
//end test

document.querySelector('#app').innerHTML = `
<main class="autoWidth">
  <div id="Intro">
    <h1>Hjalmar's Fantastic Story</h1>
    <h2>Introduction</h2>
    <p>
      Once upon a time, in the quiet town of Solberg, nestled deep within the lush forests of Sweden, lived a man named
      Hjalmar Lundmark.
      Hjalmar was a tall, wiry fellow with a shock of unruly brown hair that seemed to perpetually defy the comb.
      His piercing blue eyes were always fixed on the stars that glittered in the night sky.
      He had a reputation in town as the eccentric stargazer, spending countless hours with his telescope,
      studying the cosmos from his small observatory on the outskirts of Solberg.
    </p>
    <h2>Information</h2>
    <p>
      This story consists of interactive questions that unlocks the next parts and change how the story unfolds.
      Answer this simple question to unlock the next part.
    </p>

    <h3>What is your favorite color?</h3>
    <input type="text" id="colorInput">
    <button id="colorSend">Send</button>
  </div>

  <div id="part1">
    <h2>The story</h2>
    <p>
      Hjalmar's fascination with the stars began in his childhood, when his grandfather would tell him stories about
      constellations and distant galaxies. He would spend hours with his grandfather, gazing at the night sky, and
      dreaming of exploring the universe. As he grew older, his passion for astronomy only deepened, and he decided to
      pursue it as a career.
      <br><br>
      One crisp autumn evening, as Hjalmar was peering through his telescope, he spotted something extraordinary—a
      streak of light cutting across the sky. It was a shooting star, and in that moment, he made a wish. "I wish for a
      chance to unravel the mysteries of the universe," he whispered to himself.
      <br><br>
      Little did Hjalmar know, his wish was about to come true in the most unexpected way.
    </p>

    <h3>Question 2?</h3>
    <input type="text" id="wayInput">
    <button id="waySend" disabled>Send</button>

  </div>


  <div id="end">
    <p>
      The following morning, Hjalmar received a letter that changed the course of his life. It was an invitation from
      the renowned Lund Observatory in Stockholm, offering him a position as a junior astronomer. It was an opportunity
      he couldn't pass up, even though it meant leaving behind the quiet comforts of Solberg. <br>
      <br>
      Hjalmar bid farewell to his family and his beloved town, embarking on a new adventure to the bustling capital
      city. The observatory was a hub of activity, filled with brilliant minds and cutting-edge equipment. Hjalmar was
      in awe of the state-of-the-art telescopes and the vast array of resources at his disposal. <br>
      <br>
      As the months passed, Hjalmar's dedication and enthusiasm caught the attention of his colleagues and mentors. He
      spent countless nights observing celestial phenomena, making groundbreaking discoveries, and publishing his
      research in prestigious scientific journals. Hjalmar's reputation as an exceptional astronomer grew, and he became
      known not just in Sweden but across the international scientific community. <br>
      <br>
      But Hjalmar's heart was still in Solberg, and he longed for the quiet serenity of his hometown. One day, as he was
      studying a particularly enigmatic cluster of stars, he remembered his grandfather's tales of the wonders of the
      universe and the importance of sharing knowledge. <br>
      <br>
      With newfound purpose, Hjalmar decided to return to Solberg. He set up a small observatory there, inviting local
      children and adults alike to join him in exploring the cosmos. He became a beloved figure in the town, just as he
      had been in his childhood, and he shared his passion for the stars with the next generation. <br>
      <br>
      Hjalmar Lundmark had come full circle, from a dreamy-eyed child in Solberg to a world-renowned astronomer in
      Stockholm and back again to his beloved hometown. His journey through the cosmos had not only enriched his life
      but had also ignited a spark of curiosity in the hearts of those who followed in his footsteps, reminding them
      that the mysteries of the universe were meant to be explored and shared with all who dared to look up and dream.
      <br>
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

<footer>
  <div class="autoWidth">
    <p>
      Site created by <a href="https://github.com/Hjalmar-Lundmark">Hjalmar Lundmark</a> |
      <a href="https://github.com/Hjalmar-Lundmark/te4-story">Github repo</a>.<br>

      Story written mainly by <a href="https://chat.openai.com/">ChatGPT</a>. <br>
      Background photo by <a
        href="https://unsplash.com/@vincentiu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vincentiu
        Solomon</a> on <a
        href="https://unsplash.com/photos/ln5drpv_ImI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </p>
  </div>
</footer>
`

const colorButton = document.querySelector('#colorSend')
const wayButton = document.querySelector('#waySend')
const colorInput = document.querySelector('#colorInput')
const wayInput = document.querySelector('#wayInput')

function colorSend() {
  const p1 = document.querySelector('#part1')
  p1.style.filter = "blur(0)"

  wayButton.disabled = false;
}

function waySend() {
  const end = document.querySelector('#end')
  end.style.display = 'block';
}

colorButton.addEventListener('click', (e) => {
  e.preventDefault();
  colorSend();
})
colorInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault()
      colorSend();
  }
})

wayButton.addEventListener('click', (e) => {
  e.preventDefault
  waySend();
})
wayInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
      e.preventDefault()
      waySend();
  }
})