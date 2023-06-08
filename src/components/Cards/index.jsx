const { Component } = require("react");

export class Card extends Component {
  render(props) {
    const { title } = this.props;
    const { text } = this.props;
    const { imagem } = this.props;
    const { link } = this.props;
    return (
      <div className=" rounded-2xl bg-main-color shadow md:w-7/12 lg:flex lg:w-8/12 lg:max-h-80 m-7 sm:m-10 md:m-2 md:p-4 lg:p-5 lg:items-center xl:w-5/12">
        <div className="lg:w-2/3 xl:w-auto xl:h-80 xl:flex xl:flex-wrap xl:items-center ">
          <a href={link} rel="noopener noreferrer" target="_blank">
            <img
              className=" cursor-pointer rounded-2xl p-1 md:m-auto hover:scale-105 lg:w-64 xl:w-72 xl:h-72"
              src={imagem}
              alt=""
            />
          </a>
          <h3 className="mx-auto text-slate-50 font-light">Clique na Imagem</h3>
        </div>

        <div className="p-4 rounded-lg text-slate-50 flex-col lg:w-2/3">
          <div className="border-b border-slate-200 m-2">
            <h2 className="mb-4 text-2xl md:text-4xl lg:text-2xl flex-1">
              {title}
            </h2>
          </div>
          <p className="text-base md:text-lg lg:text-base xl:text-sm">{text}</p>
        </div>
      </div>
    );
  }
}
