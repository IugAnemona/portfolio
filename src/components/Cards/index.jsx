const { Component } = require("react");

export class Card extends Component {
  render(props) {
    const { title } = this.props;
    const { text } = this.props;
    const { imagem } = this.props;
    const { link } = this.props;
    return (
      <div className=" rounded-2xl bg-main-color shadow  w-80 md:w-7/12 lg:flex lg:w-9/12 m-10 md:m-2 md:p-4 lg:p-5 lg:items-center">
        <div className="lg:w-2/3">
          <a href={link} rel="noopener noreferrer" target="_blank">
            <img
              className=" cursor-pointer rounded-2xl p-1 w-full md:m-auto hover:scale-105 "
              src={imagem}
              alt=""
            />
          </a>
        </div>

        <div className="p-4 rounded-lg text-slate-50 flex-col lg:w-2/3">
          <div className="border-b border-slate-200 m-2">
            <h2 className="mb-4 text-2xl md:text-4xl flex-1">{title}</h2>
          </div>
          <p className="text-base md:text-lg">{text}</p>
        </div>
      </div>
    );
  }
}
