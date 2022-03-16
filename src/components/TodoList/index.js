import {useEffect} from "react";
import { useManualQuery } from "graphql-hooks";
import { GET_TODOLIST_BY_USER_ID } from "../queries";

export default () => {
    const [fetchTodoList] = useManualQuery(GET_TODOLIST_BY_USER_ID)



    useEffect(() => {
        const getTodoListByUserId = async (userId) =>{
            let result = await fetchTodoList({
                variables:{userId:userId}
            })
            console.log('result:',result)
        }

        getTodoListByUserId(2)

    },[])
    return <div>todo list</div>
}
