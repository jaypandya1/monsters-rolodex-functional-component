import { Component } from "react";
import  Card  from "../card/card.component";
import "./card-list.style.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="Card-List">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>

    );
  }
}
export default CardList;

//React rerender when setState and props change
