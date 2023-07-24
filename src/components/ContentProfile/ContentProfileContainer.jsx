import ContentProfile from "./ContentProfile";
import s from "./ContentProfile.module.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfileThunk } from "../../redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { updateStatus, getStatus } from './../../redux/profileReducer';

// 22.11
const ContentProfileContainer = (props) => {
  const { userId } = useParams();
  
  const currentUserId = userId || props.authUserId;

  useEffect(() => {
    props.getUserProfileThunk(userId, currentUserId);
    props.getStatus(userId, currentUserId)
  }, [userId]);

  return <ContentProfile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>;
};

const AuthRedirectComponent = withAuthRedirect(ContentProfileContainer)


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId
  };
};



// export default connect(mapStateToProps, {
//   getUserProfileThunk,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {getUserProfileThunk, getStatus, updateStatus}),
  // withAuthRedirect
)(ContentProfileContainer)