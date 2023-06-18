import { connect } from "react-redux"
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/usersReducer"
import Users from "./Users"

const mapStateToProps = (state) => { //функция которая принимает весь стейт, и возвращает объект со списком пользователей
    return {
        users: state.usersPage.users
    }
}  

const mapDispatchToProps = (dispatch) => {  //функция которая передает дочерней компоненте коллбеки, которые она будет вызывать
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)