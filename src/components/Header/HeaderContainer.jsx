import { useParams } from 'react-router-dom';
import Header from './Header';
import style from './Header.module.css'
import { useEffect } from 'react';
import axios from 'axios';
import { setAuthUserDataActionCreator } from '../../redux/authReducer';
import { connect } from 'react-redux';



const HeaderContainer = (props) => {
    
    const {userId} = useParams()
    
    useEffect(()=>{
        
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
          })
          .then((response) => {
            if(response.data.resultCode === 0){
                const {id, email, login} = response.data.data
                props.setAuthUserData(id, email, login)
            }
          });
      }, [userId]);
      
    return (
        <Header {...props}/>
    )
}

const mapStateToProps = (state) => {
  debugger
  return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
  };
  
  
  export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataActionCreator,
  })(HeaderContainer);
  