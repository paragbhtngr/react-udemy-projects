import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) return null;

    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
