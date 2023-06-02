import { Component } from "react";
import { Card } from "../Cards";

export class Section extends Component {
    render() {
        return(
          <main className="bg-slate-100">
            <div className="container mx-auto py-10 flex flex-wrap justify-center md:justify-evenly text-center">
              <Card />
              <Card />
              <Card /><Card /><Card /><Card />

            </div>
          </main>
        )
    }
}