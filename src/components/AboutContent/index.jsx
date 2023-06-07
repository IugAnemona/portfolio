import { Component } from "react";
import eve from "./eveemote.png";

export class About extends Component {
  render() {
    return (
      <section className="h-screen bg-main">
        <div className="pt-14 md:p-0 mx-auto h-full container flex flex-wrap justify-center items-center text-center">
          <div className="text-white md:h-4/6 md:flex-1 p-6 tracking-wide ">
            <h2 className="text-4xl  md:text-7xl">Sobre Mim</h2>
            <div className="text-sm  md:text-base lg:text-xl">
              <p class="my-4">
                Meu nome é Guilherme Alves, trabalho com manutenção de
                computadores e Help desk.
              </p>
              <p class="my-4">
                Sou um desenvolvedor web iniciante, entusiasmado e com grande
                interesse em aprender e crescer na área. Tenho conhecimentos
                básicos em HTML e CSS, e estou em busca de uma oportunidade para
                iniciar minha carreira como desenvolvedor front-end.
              </p>
              <p class="my-4">
                Estou familiarizado com os conceitos fundamentais do
                desenvolvimento web, como estruturação de páginas HTML e
                estilização com CSS. Também tenho conhecimento básico sobre o
                framework Tailwind CSS, que me permite criar interfaces de
                usuário de forma eficiente.
              </p>
              <p className="hidden md:inline-block">
                Além disso, tenho uma base sólida em JavaScript e estou
                aprendendo a utilizar a biblioteca React para criar aplicações
                interativas e responsivas.
              </p>

              <div className="flex w-full md:my-6 text-6xl text-white justify-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/guianemona/"
                  rel="noopener noreferrer"
                  className="mx-6 hover:scale-110"
                >
                  <i className="fa-brands fa-instagram "></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/guilherme-alves-25109624a/"
                  rel="noopener noreferrer"
                  className="mx-6 hover:scale-110"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/IugAnemona"
                  rel="noopener noreferrer"
                  className="mx-6 hover:scale-110"
                >
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/3 md:w-2/5">
            <a href="#home">
              <img className="md:block" src={eve} alt="" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
