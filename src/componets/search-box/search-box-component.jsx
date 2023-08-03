import { Component } from "react";
import './search-box.style.css';
class SearchBox extends Component {
  render() {
    return (
    <input type='search'  className={`search-box ${this.props.className}`} onChange={this.props.onChangeHandler}   placeholder="search monsters" />
  )
}
}
export default SearchBox;
