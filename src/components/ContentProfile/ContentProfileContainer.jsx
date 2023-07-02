import axios from "axios";
import ContentProfile from "./ContentProfile";
import s from "./ContentProfile.module.css";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileActionCreator } from "../../redux/profileReducer";

class ContentProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    
    return <ContentProfile {...this.props} profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileActionCreator,
})(ContentProfileContainer);
