import { useParams } from "react-router-dom";
import Header from "./Header";
import style from "./Header.module.css";
import { useEffect } from "react";
import { getAuthUserThunk } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

const HeaderContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getAuthUserThunk()
  }, [userId]);

  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  getAuthUserThunk,
})(HeaderContainer);
