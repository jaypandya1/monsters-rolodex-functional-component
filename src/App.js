import { Component } from "react";
import "./App.css";
import CardList from "./componets/card-list/card-list.component";
import SearchBox from "./componets/search-box/search-box-component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      Searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then(
        (users) =>
          this.setState(() => {
            return { monsters: users };
          }),
        () => {
          return console.log(this.state);
        }
      );
    console.log("componentdidmount");
  }

  onSearchChange = (event) => {
    const Searchfield = event.target.value.toLowerCase();
    this.setState(() => {
      return { Searchfield: Searchfield };
    });
  };

  render() {
    const { monsters, Searchfield } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(Searchfield);
    });

    console.log("render");
    return (
      <div className="App">

<h1 className="app-title">Monsters Rolodex</h1>



        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
