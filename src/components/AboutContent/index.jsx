import { Component } from "react";
import eve from "./eveemote.png";

export class About extends Component {
  render() {
    return (
      <section className="h-screen bg-main">
        <div className="pt-20 mx-auto h-full container flex flex-wrap justify-center items-center text-center">
          <div className="text-white md:h-4/6 md:flex-1 p-6 tracking-wide md:text-2xl">
            <h2 className="text-4xl my-10 md:text-7xl">Sobre Mim</h2>
            <div>
              <p class="my-4">
                Meu nome é Guilherme Alves, trabalho com manutenção de
                computadores e Help desk.
              </p>
              <p class="my-4">
                Atualmente estou cursando Analise e desenvolvimento de sofwares,
                estudei python por um tempo, mas atualmente estou bastante
                focando em Desenvolvimento web, front-end.
              </p>
              <p class="my-4">
                Atualmente uso HTML, CSS e JavaScript. Estou estudando nodejs e
                React
              </p>
            </div>
          </div>
          <div className="w-2/3 md:w-2/5">
            <a href="#home">
              <img className="" src={eve} alt="" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
