import InfiniteScroll from "react-infinite-scroll-component";
import Post from './Posts'
import {useManualQuery} from "graphql-hooks";
import { POSTS_QUERY_BY_RANGE } from "../queries";
import {useCallback, useEffect, useRef, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
const STEP = 3;

export default () => {

    const start = useRef(0)
    const [data,setData] = useState([]);
    const [fetchPosts] = useManualQuery(POSTS_QUERY_BY_RANGE)
    const getPost = useCallback(async () => {
            console.log('getPost:')
            let result = await fetchPosts({
                variables:{start:start.current,long:(STEP + start.current)},
                useCache:false});
            console.log('result:',result)
            if(result.error){
                console.log('POSTS_QUERY_BY_RANGE ERROR:',result.error)
            }else{
                console.log('POSTS_QUERY_BY_RANGE:',result)
                setData(current => {
                    let temp = [...current]
                    temp = temp.concat(result.data.getPostByRange)
                    return temp
                })
                start.current += STEP
            }
        }
    ,[start])

    useEffect(() => {
        getPost()
    },[])

    const getPostDebounced = useDebouncedCallback(getPost,2000)



    return <div id="scrollablePost" className="px-2" style={{maxHeight:500, overflow:'scroll'}}>

        <InfiniteScroll
            dataLength={data.length}
            next={getPost}
            hasMore={true}
            loader={<h4>Loading Post...</h4>}
            scrollableTarget="scrollablePost"
        >
            { data.map((p,index) =>(<Post key={index} {...p} />))}
        </InfiniteScroll>
        {

    }
    </div>
}
