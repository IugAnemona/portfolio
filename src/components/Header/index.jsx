import { Component } from "react";
import logo from "./Logo.jpg";

export class Header extends Component {
  render() {
    return <header>
      <div className="flex fixed bg-slate-200 border-b border-slate-300 w-full px-3 py-4">
        <div className="container flex items-center mx-auto">
          <div><a href="#home"><img className=" w-9 rounded-full" src={logo} alt="" /></a></div>
          <div className="flex justify-end flex-1 md:hidden text-3xl"><i className="fas fa-bars"></i></div>
          <div className="flex-1 items-end text-slate-900 font-bold hidden md:flex">
            <nav className="flex-1">
            <ul className="flex justify-end flex-1">
            <li className="px-4"><a className="hover:text-slate-500 text-xl" href="#home">Sobre</a></li>
            <li className="px-4"><a className="hover:text-slate-500 text-xl" href="#home">Projetos</a></li>
            <li className="px-4"><a className="hover:text-slate-500 text-xl" href="#home">Contatos</a></li>
            </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>;
  }
}
