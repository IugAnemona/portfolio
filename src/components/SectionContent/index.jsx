import { Component } from "react";
import { Card } from "../Cards";
import weatherImg from './weatherapp.png'
import spotify from "./spotify.png"



export class Section extends Component {
    render() {
        return(
          <main id="projetos" className="bg-slate-100">
            <div className="container mx-auto py-10 flex flex-wrap justify-center md:justify-evenly text-center">
              <Card link={"https://iuganemona.github.io/WeatherApp/"} imagem={weatherImg} title="WeatherApp" text="Aplicativo que permite o usuário pesquisar a atual condições climaticas de qualquer cidade do mundo. Usei JavaScript para receber dados da Weather API

Usei JavaScript para receber dados da Weather API transformar em um JSON, manipular os dados do JSON e jogar no DOM do Html." />
              <Card link={"https://relaxed-tartufo-07ce1b.netlify.app"} imagem={spotify} title="Clone do Spotify" text="Clone da home do spotify responsiva. Fiz esse projeto para aprender Tailwindcss, e usei React para aprender mais sobre Componentes e Props."/>

            </div>
          </main>
        )
    }
}