import React, {useEffect} from 'react';
import {useTypedSelector} from "../store/hook/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creator/user";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>...Загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(u =>
                <div>{u.name}</div>)}
        </div>
    );
};

export default UserList;