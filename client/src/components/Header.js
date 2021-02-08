import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <div className="nav-wrapper  blue darken-1">
            <a href="/" className="left brand-logo">
              <div className="container">
                <span class="valign-wrapper" style={{ fontSize: "20px" }}>
                  DoctorRatingsBD
                </span>
              </div>
            </a>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
