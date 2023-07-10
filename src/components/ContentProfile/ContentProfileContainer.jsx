import ContentProfile from "./ContentProfile";
import s from "./ContentProfile.module.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserProfileThunk } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";


const ContentProfileContainer = (props) => {
  const {userId} = useParams()
  const currentUserId = userId || 2

  useEffect(()=>{
    props.getUserProfileThunk(userId, currentUserId) 
    
  }, [userId]);

  return (
    <ContentProfile {...props} profile={props.profile}/>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};


export default connect(mapStateToProps, {
  getUserProfileThunk,
})(ContentProfileContainer);
