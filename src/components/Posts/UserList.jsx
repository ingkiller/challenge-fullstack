import { useQuery } from "graphql-hooks";
import {USERS_QUERY} from "../queries";
import UserItem from "./UserItem";
import {useCallback} from "react";

const UserList = ({onClickUser}) => {
    const {data=[],loading,error} = useQuery(USERS_QUERY);

    const onClickUserHandler = useCallback(async (userId) => {
        onClickUser && onClickUser(userId)
    },[onClickUser])

    return <div className="pt-3 maxHeightScroll">
        {
            loading && <div>Spinner</div>
        }
        {
            !error && !loading && data.users?.map((user,index) =>
                (<UserItem key={index} {...user}
                           onClickItem={onClickUserHandler}
                />))
        }
    </div>
}

export default UserList
