import { Navigate } from "react-router-dom"

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth){
            return <Navigate to={"/login"}/>
        }
        return (
            <Component {...props}/>
        )
    }
    return RedirectComponent
    
}