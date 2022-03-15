import Post from './Posts'
import {useQuery,useManualQuery} from "graphql-hooks";
import {useState} from "react";
const POSTS_QUERY = `query posts(){
posts(){
  id,
  title,
  body,
  numberOfComment,
  user {
    name
    username
    website
  }
}
}`


export default () => {

    const { loading, error, data } = useQuery(POSTS_QUERY)


    return <div style={{maxHeight:400, overflow:'scroll'}}>
        {
            loading && <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        {
        data?.posts?.map((p,index) =>(<Post key={index} {...p} />))
    }
    </div>
}
