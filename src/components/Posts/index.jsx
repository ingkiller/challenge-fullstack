import InfiniteScroll from "react-infinite-scroll-component";
import Post from './Posts'
import {useManualQuery} from "graphql-hooks";
import { POSTS_QUERY_BY_RANGE,GET_POST_BY_USER_ID } from "../queries";
import {useCallback, useEffect, useRef, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import UserList from "./UserList";
const STEP = 3;

export default () => {

    const start = useRef(0)
    const [data,setData] = useState([])
    const [userId , setUserId] = useState(0)
    const [fetchPosts] = useManualQuery(POSTS_QUERY_BY_RANGE)
    const [fetchPostsByUserId] = useManualQuery(GET_POST_BY_USER_ID)

    const getPost = useCallback(async () => {
            let result = await fetchPosts({
                variables:{start:start.current,long:(STEP + start.current)},
                useCache:false});

            if(result.error){
                console.log('POSTS_QUERY_BY_RANGE ERROR:',result.error)
            }else{
                setData(current => {
                    let temp = [...current]
                    temp = temp.concat(result.data.getPostByRange)
                    return temp
                })
                start.current += STEP
            }
        }
    ,[start,userId])

    const postsByUserId = useCallback(async () => {
        let result = await fetchPostsByUserId({
            variables:{userId:userId,start:start.current,long:(STEP + start.current)},
            useCache:false});

        if(result.error){
            console.log('POSTS_QUERY_BY_RANGE ERROR:',result.error)
        }else{
            setData(current => {
                let temp = [...current]
                temp = temp.concat(result.data.getPostsByUserId)
                return temp
            })
            start.current += STEP
        }
    },[userId,start])

    useEffect(() => {
        postsByUserId()
    },[userId])



   const onClickUser = useCallback( async (userId) => {
       start.current = 0
       setUserId(userId)
       setData([])
   },[])


    return ( <section id="pricing" className="pricing">
        <div className="container">
            <div className="row justify-content-end">
               
                <div className="col-md-6">
                    <div className="box" style={{boxShadow:"none"}}>
                        <div id="scrollablePost" className="px-2" style={{maxHeight:500, overflow:'scroll'}}>
                            <InfiniteScroll
                                dataLength={data.length}
                                next={postsByUserId}
                                hasMore={true}
                                loader={<h4>Loading Post...</h4>}
                                scrollableTarget="scrollablePost"
                            >
                                { data.map((p,index) =>(<Post key={index} {...p} />))}
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"> <UserList onClickUser={onClickUser}/></div>
            </div>
        </div>
    </section>)

}
