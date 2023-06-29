import { connect } from "react-redux"
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, setUsersTotalCountActionCreator, unfollowActionCreator } from "../../redux/usersReducer"
import Users from "./Users"

const mapStateToProps = (state) => { //функция которая принимает весь стейт, и возвращает объект со списком пользователей
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)