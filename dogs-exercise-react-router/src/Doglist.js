import React, { Component } from "react";
import "./Doglist.css";
class Doglist extends Component {
  render(props) {
    return (
      <div className="doglist">
        <h1 className="display-1 text-center">Doglist</h1>;
        <div className="container">
          <div className="row">
            {this.props.dogs.map((dog) => (
              <div className="Dog col-md-6 col-lg-4 col-sm-12" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <h3>{dog.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Doglist;
