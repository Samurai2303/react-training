import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {SelectedUser, UserFromApi, Users} from "../../components";
import css from './usersPage.module.css';

function UsersPage() {

    let dispatch = useDispatch();
    let {users, error, loading} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    return (
        <div className={css.wrap}>
            {loading&& <div>Loading...</div>}
            {error&&<div>Error(</div>}
            {error?false:loading?false:<Users users={users}/>}
            <SelectedUser/>
            <UserFromApi/>
        </div>
    );
}

export {UsersPage};
