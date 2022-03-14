import Post from './Posts'
import {useQuery} from "graphql-hooks";
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

   console.log('data:',data)
    return <div style={{maxHeight:400, overflow:'scroll'}}>{
        data?.posts?.map((p,index) =>(<Post key={index} {...p} />))
    }</div>
}
