import './style.css'
import star from '/star.svg'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aut aliquid facere accusantium ipsam eum 
    deserunt dicta odio molestiae molestias. Esse praesentium atque impedit aliquam beatae eveniet culpa explicabo labore?
  </p>

  <h3>Vilken är din favorit färg?</h3>
  <input type="text" id="colorInput">
  <button id="colorSend">Skicka</button>

  <h2>h2 3</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti officiis recusandae tenetur repudiandae blanditiis possimus voluptate ipsam eveniet 
    commodi, molestias excepturi maxime, corrupti veniam, necessitatibus accusamus laudantium quae eaque quibusdam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae aspernatur voluptatum, assumenda corporis illum aut velit doloremque, 
    dicta nesciunt eos error nam et quis natus odio autem suscipit vero?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In deleniti consequatur soluta non amet rerum id eius. Id, 
    recusandae quis? Natus rem voluptates, sapiente quisquam non maxime laboriosam at cupiditate.
  </p>



  <h3>Tackar för att du läste. Vad ger du berättelsen för betyg?</h3>
  <img src="${star}" alt="stjärna" class="logo">
  <img src="${star}" alt="stjärna" class="logo">
  <img src="${star}" alt="stjärna" class="logo">
  <img src="${star}" alt="stjärna" class="logo">
  <img src="${star}" alt="stjärna" class="logo">


  <footer>
    <div class="container">
        <p>
            Sida skapad av <a href="https://github.com/Hjalmar-Lundmark">Hjalmar Lundmark</a> |
            <a href="https://github.com/Hjalmar-Lundmark/te4-story">Github repo</a>.
        </p>
    </div>
</footer>
`

setupCounter(document.querySelector('#counter'))
