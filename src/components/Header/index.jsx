import { useState } from "react";
import logo from "./Logo.jpg";

export function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <header>
      <div className="flex fixed bg-slate-100 border-b border-slate-300 w-full px-3 py-2">
        <div className="container flex items-center mx-auto">
          <div>
            <a
              href="https://www.instagram.com/guianemona/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className=" w-14 rounded-full" src={logo} alt="" />
            </a>
          </div>
          <div className="flex-1 items-end text-main-color font-bold md:flex">
            <nav className="flex-1 md:static ">
              <ul
                className={
                  active
                    ? "z-[-1] md:z-auto top-16 bg-slate-100 absolute w-full left-0 md:flex md:justify-end md:static transition-all ease-in duration-500"
                    : "z-[-1] md:z-auto top-[-200px] md:opacity-100 opacity-0 bg-slate-100 absolute w-full left-0 md:flex md:justify-end md:static transition-all ease-in duration-500"
                }
              >
                <li className="px-4 m-10 md:m-0">
                  <a className="hover:text-slate-500 text-xl" href="#Home">
                    Sobre
                  </a>
                </li>
                <li className="px-4 m-10 md:m-0">
                  <a className="hover:text-slate-500 text-xl" href="#projetos">
                    Projetos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-3xl">
            <i
              className={active ? "fa-solid fa-xmark" : "fas fa-bars"}
              onClick={ToggleMode}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
}
