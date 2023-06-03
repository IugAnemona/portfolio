const { Component } = require("react");

export class Card extends Component {
  render(props) {
    const {title} = this.props
    const {text} = this.props
    const {imagem} =this.props
    return (
      <div className=" rounded-2xl bg-main-color shadow  w-80 md:w-8/12 lg:w-5/12 m-10 md:m-2 md:p-4 lg:p-8">
        <div className="">
        <a href="https://relaxed-tartufo-07ce1b.netlify.app" rel="noopener noreferrer" target="_blank">

        <img
          className=" cursor-pointer rounded-2xl p-1 w-full md:w-11/12 md:m-auto hover:scale-105 "
          src={imagem}
          alt=""
          />
          </a>
          </div>
        
        <div className="p-4 rounded-lg text-slate-50 flex-col">
          <div className="border-b border-slate-200 m-5">

          <h2 className="mb-4 text-3xl md:text-5xl flex-1">{title}</h2>
          </div>
          <p className="text-base md:text-2xl">{text}</p>
        </div>
      </div>
    );
  }
}
