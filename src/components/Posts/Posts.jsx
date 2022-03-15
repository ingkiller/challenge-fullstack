import { useManualQuery } from "graphql-hooks";
import {useCallback, useState} from "react";

const GET_COMMENTS_BY_POST_ID = `query getCommentByPostId($postId: Int!){
    getCommentByPostId(postId: $postId){
         id,
         postId,
         name,
         email,
         body,
    }
}`

export default ({id,title,body,numberOfComment,user:{username,website}}) => {

    const [postId, setPostId] = useState(0);
    const [getCommentByPostId] = useManualQuery(GET_COMMENTS_BY_POST_ID)

    const getCommentsByPostIdHandler =async (postId) =>{
        let comments = await getCommentByPostId({
            variables: { postId:1}
        })
        console.log('getCommentsByPostIdHandler:',comments)
    }

    return <div className="mb-3">
        <div className="card py-1">
            <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-start">
                    <div className="d-flex justify-content-center align-items-center" style={{width:100,height:100, borderRadius:'50%',backgroundColor:'rgba(0,0,0,10%)'}}></div></div>
                <div className="col">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start"><h5 className="card-title">{title} by <span className="fw-bold fst-italic">{username}</span></h5></div>
                        <div className="col-12 d-flex justify-content-start"><span className="card-text">{body}</span></div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <div className="px-2">
                                <span><a href="#">{website}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4">
            <div className="" style={{
                borderBottomRightRadius:5,
                borderBottomLeftRadius:5,
                backgroundColor:'rgba(0,0,0,10%)'
            }}>
                <div className="row py-2">
                    <div className="col-6 d-flex justify-content-start">
                        <div className="px-2">
                            <button onClick={e =>getCommentsByPostIdHandler(id)}>
                                {numberOfComment} comments
                            </button>

                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="px-2">
                            coment
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
