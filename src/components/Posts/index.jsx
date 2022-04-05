import Post from './Posts'
import {useQuery} from "graphql-hooks";
import { POSTS_QUERY } from "../queries";


export default () => {

    const { loading, data } = useQuery(POSTS_QUERY)

    return <div className="px-2" style={{maxHeight:400, overflow:'scroll'}}>
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
