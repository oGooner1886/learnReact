import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


const mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return (
            <Component {...props}/>
        )
    }

    
      const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent) 

    return ConnectedAuthRedirectComponent
    
}