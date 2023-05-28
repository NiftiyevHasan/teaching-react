import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Doglist from "./Doglist";
import Navbar from "./Navbar";
import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import DogDetails from "./DogDetails";

// Rest of the code

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };
  render() {
    const getDog = (props) => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        (d) => d.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };

    return (
      <div>
        <Router>
          <Navbar dogs={this.props.dogs} />
          <Switch>
            <Route
              exact
              path="/dogs"
              render={() => <Doglist dogs={this.props.dogs} />}
            />
            <Route exact path="/dogs/:name" render={getDog} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
