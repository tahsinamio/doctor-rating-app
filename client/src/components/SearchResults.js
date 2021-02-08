import React from "react";
import DoctorCard from "./DoctorCard";

class SearchResults extends React.Component {

  render() {
    return (
      <div>
        <div
          onClick={() => {
            window.location = "/doctor";
          }}
          key={this.props.id}
        >
          <a href={`/doctors/${this.props._id}`}>
            <DoctorCard {...this.props}/>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchResults;
