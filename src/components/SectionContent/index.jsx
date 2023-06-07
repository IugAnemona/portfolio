import { Component } from "react";
import { Card } from "../Cards";
import weatherImg from "./weatherapp.png";
import spotify from "./spotify.png";
import imc from "./imc.png";
import animeApp from "./Animeapp.gif";

export class Section extends Component {
  render() {
    return (
      <main id="projetos" className="bg-slate-100">
        <div className="container mx-auto py-10 flex flex-wrap justify-center md:justify-evenly text-center border-2 border-blue-500">
          <Card
            link={"https://iuganemona.github.io/WeatherApp/"}
            imagem={weatherImg}
            title="WeatherApp"
            text="Aplicativo que permite o usuário pesquisar a atual condições climaticas de qualquer cidade do mundo. Usei JavaScript para receber dados da Weather API

Usei JavaScript para receber dados da Weather API transformar em um JSON, manipular os dados do JSON e jogar no DOM do Html."
          />
          <Card
            link={"https://relaxed-tartufo-07ce1b.netlify.app"}
            imagem={spotify}
            title="Clone do Spotify"
            text="Clone da home do spotify responsiva. Fiz esse projeto para aprender Tailwindcss, e usei React para aprender mais sobre Componentes e Props."
          />

          <Card
            link={"https://inquisitive-dragon-108049.netlify.app"}
            imagem={imc}
            title={"Calculadora de Imc"}
            text={
              "Calculadora de imc, usando Tailwind CSS e ReactJs. Refiz uma calculadora de imc para melhorar minha habilidade em responsividade e em ReactJs"
            }
          ></Card>
          <Card
            link={"https://warm-torrone-fe35a2.netlify.app"}
            imagem={animeApp}
            title={"Anime Search App"}
            text={
              "Criei um site usando uma API do TraceMoe que busca animes e episodios usando somente um link de uma imagem do anime em questão. Fiz esse projeto para me familiarizar mais com APIs e melhorar mais ainda minha habilidade com Responsividade e ReactJs"
            }
          ></Card>
        </div>
      </main>
    );
  }
}
