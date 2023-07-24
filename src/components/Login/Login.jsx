import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { required } from "../../utils/validators"
import { connect } from 'react-redux';
import { postAuthUserThunk } from './../../redux/authReducer';
import { Navigate } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    
    return (
        
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            {props.error && <div className={style.authError}>{props.error}</div>}
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.postAuthUserThunk(formData.email, formData.password, formData.rememberMe);
        
    }
    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <p>Авторизуйтесь</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
    
}

const mapStateToProps = state => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {postAuthUserThunk})(Login)