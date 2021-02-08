import React, { Component } from "react";
import SearchResults from "./SearchResults"
import { connect } from "react-redux";
import { postSearchValue } from "../actions";

class SearchBar extends Component {
  renderSearchResults() {
    return this.props.search.map(search => {
      return (
        <ul>
          <li>
            <SearchResults {...search} />
          </li>
        </ul>
      );
    })
  }

  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input
                  className="indigo accent-1"
                  id="search"
                  type="search"
                  onChange={(event) =>
                    this.props.postSearchValue(event.target.value)
                  }
                  required
                />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <div>{this.renderSearchResults()}</div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { postSearchValue })(SearchBar);
