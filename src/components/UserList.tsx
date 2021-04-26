import React from 'react';
import {useTypedSelector} from "../store/hook/useTypedSelector";

const UserList:React.FC = () => {
    const state = useTypedSelector(state => state)
    console.log(state)
    return (
        <div>
            
        </div>
    );
};

export default UserList;