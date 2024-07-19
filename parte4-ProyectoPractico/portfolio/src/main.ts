import "./style.sass";
import { rocket } from "./assets/rocket";
import { linkedinLogo } from "./assets/linkedinLogo";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="section introduction">
    <h1 class="introduction__title">GUSTAVO L'EGLISE</h1>
    <h1 class="introduction__subtitle">FRONTEND DEVELOPER</h1>
    <p class="introduction__description">
      I'm a Front-end Web Developer located in Mexico City. I have a real
      passion for UI design, animation, 3D implementation and interactive
      experiences.
    </p>
    <div class="download-button">
      <a href="/pdf/Resume-GustavoLEglise.pdf" download="ResumeGustavoLEglise.pdf">
        Download Resume
      </a>
    </div>
  </section>
  <section class="section projects">
    <h2 class="title">PROJECTS</h2>
    <div class="container">
      <div class="container-piece">
        <a href="https://www.laleo.com/" target="_blank">
          <img src="/assets/images/laleo.png" alt="Project 1" />
          <div class="project__info">
            <h3 class="project__title">LALEO</h3>
          </div>
        </a>
      </div>
      <div class="container-piece">
        <a href="https://leonora.ai/" target="_blank">
          <img src="/assets/images/leonora.png" alt="Project 2" />
          <div class="project__info">
            <h3 class="project__title">LEONORA</h3>
          </div>
        </a>
      </div>
      <div class="container-piece">
        <a href="https://temp-portfolio-xi.vercel.app/" target="_blank">
          ${rocket}
          <div class="project__info">
            <h3 class="project__title">MAIN PORTFOLIO</h3>
          </div>
        </a>
      </div>
    </div>
  </section>
  <section class="section contact">
    <h2 class="title">CONTACT ME</h2>
    <div class="container">
      <div class="container-piece">
        <a href="https://www.linkedin.com/in/gustavoleglise/" target="_blank">
          ${linkedinLogo}
        </a>
      </div>
    </div>
  </section>
`;
