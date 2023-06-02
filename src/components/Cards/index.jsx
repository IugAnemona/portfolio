const { Component } = require("react");

export class Card extends Component {
  render() {
    return (
      <div className="cursor-pointer rounded-lg bg-main-color shadow  w-80 md:w-2/5 m-10 md:m-2">
        <img
          className="w-full hover:scale-105 rounded-tl-lg rounded-br-2xl"
          src="https://via.placeholder.com/600/92c952"
          alt=""
        />
        
        <div className="p-4 rounded-lg overflow-auto text-slate-50">
          <h2 className="mb-4">Lorem ipsum dolor</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          fugiat eveniet. Perferendis doloribus quam non minus ex quidem esse,
          necessitatibus quisquam earum ratione! Facere veniam dignissimos autem
          modi, natus nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore exercitationem ex odit laborum praesentium quis explicabo, modi impedit unde quas vero id cupiditate tempora culpa itaque. Esse, maiores vitae.
        </div>
      </div>
    );
  }
}
