import { useQuery, useManualQuery } from "graphql-hooks";
import {USERS_QUERY, GET_POST_BY_USER_ID} from "../queries";
import UserItem from "./UserItem";
import {useCallback, useEffect, useState} from "react";

const UserList = ({onClickUser}) => {
    const {data=[],loading,error} = useQuery(USERS_QUERY);
    const [fetchPostsByUser] = useManualQuery(GET_POST_BY_USER_ID)
    const [users, setUsers] = useState([]);

    console.log('{data=[],loading,error}:',{data,loading,error})
    useEffect(() => {
      data.users &&  setUsers(data.users);
    },[data])

    const onClickUserHandler = useCallback(async (userId) => {
        onClickUser && onClickUser(userId)
    },[onClickUser])

    return <div className="pt-3">
        {
            loading && <div>Spinner</div>
        }
        {
            !error && !loading && users.map((user,index) =>
                (<UserItem key={index} {...user}
                           onClickItem={onClickUserHandler}
                />))
        }
    </div>
}

export default UserList
