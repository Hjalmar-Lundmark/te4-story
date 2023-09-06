import './style.css'
import star from '/star.svg'

document.querySelector('#app').innerHTML = `
<main class="autoWidth">
  <div id="Intro">
    <h1>Hjalmars fantastiska historia</h1>
    <h2>Introduktion</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eum qui nobis facilis unde, magni ipsa.
      Quasi impedit nobis, reiciendis accusamus repellat labore! Aliquid sequi distinctio odio? Totam, modi illum.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae accusantium, cumque doloribus tenetur,
      molestiae qui id nulla maxime corporis ipsa porro aspernatur eos illum. Pariatur quo odit ex rem cumque.
    </p>
    <h2>h2 2</h2>
    <p>
      Denna historia består av interaktiva frågor som låser upp nästa del(?) och ändrar hur historian utvecklas.
      Svara på denna simpla fråga för att låsa upp nästa del.
    </p>

    <h3>Vilken är din favorit färg?</h3>
    <input type="text" id="colorInput">
    <button id="colorSend">Skicka</button>
  </div>

  <div id="part1">
    <h2>h2 3</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti officiis recusandae tenetur repudiandae
      blanditiis possimus voluptate ipsam eveniet
      commodi, molestias excepturi maxime, corrupti veniam, necessitatibus accusamus laudantium quae eaque quibusdam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae aspernatur voluptatum, assumenda
      corporis illum aut velit doloremque,
      dicta nesciunt eos error nam et quis natus odio autem suscipit vero?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. In deleniti consequatur soluta non amet rerum id eius.
      Id,
      recusandae quis? Natus rem voluptates, sapiente quisquam non maxime laboriosam at cupiditate.
    </p>

  </div>


  <div id="end">
    <h3>Tack för att du läste. Vad ger du berättelsen för betyg?</h3>
    <img src="${star}" alt="stjärna" class="logo">
    <img src="${star}" alt="stjärna" class="logo">
    <img src="${star}" alt="stjärna" class="logo">
    <img src="${star}" alt="stjärna" class="logo">
    <img src="${star}" alt="stjärna" class="logo">
    <h3 id="Feedback">Tackar, du är välkommen att ge feedback som ett <a
        href="https://github.com/Hjalmar-Lundmark/te4-story/issues">github-issue</a></h3>

  </div>
</main>

<footer>
  <div class="autoWidth">
    <p>
      Sida skapad av <a href="https://github.com/Hjalmar-Lundmark">Hjalmar Lundmark</a> |
      <a href="https://github.com/Hjalmar-Lundmark/te4-story">Github repo</a>.
    </p>
  </div>
</footer>
`

const testButton = document.querySelector('#colorSend')
testButton.addEventListener('click', (e) => {
  console.log('test')
  const p1 = document.querySelector('#part1')
  p1.style.display = 'none';
})