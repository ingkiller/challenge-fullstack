import { useManualQuery } from "graphql-hooks";
import {useCallback, useState} from "react";
import styled from 'styled-components'
import {Avatar} from '../commun'
import { GET_COMMENTS_BY_POST_ID } from "../queries";

const CommentContainer = styled.div`
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  background-color:rgba(0,0,0,10%);
`


export default ({id,title,body,numberOfComment,user:{username,website}}) => {

    const [getCommentByPostId] = useManualQuery(GET_COMMENTS_BY_POST_ID)
    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [displayComments, setDisplayComments] = useState(false)

    const getCommentsByPostIdHandler =async (postId) =>{
        setIsLoadingComments(true)
        let result = await getCommentByPostId({
            variables: { postId:postId}
        })
        if(result.data && result.data.getCommentByPostId){
            setComments(result.data.getCommentByPostId)
        }
        if(result.error){
            //Todo: manage errors
        }
        setIsLoadingComments(false)
    }

    const toggleComments = useCallback((evt,postId) => {
        evt.preventDefault()
        if(displayComments){
            setDisplayComments(false)
        }else{
            setDisplayComments(true)
            getCommentsByPostIdHandler(postId)
        }

    },[displayComments,getCommentsByPostIdHandler])


    return <div className="mb-3">
        <div className="card py-1">
            <div className="row">
                <div className="col-2 d-flex justify-content-center align-items-start">
                   <Avatar name={username[0]}/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start"><h5 className="card-title px-2">{title} by <span className="fw-bold fst-italic">{username}</span></h5></div>
                        <div className="col-12 d-flex justify-content-start"><span className="card-text px-2 text-left">{body}</span></div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <div className="px-2">
                                <span className="fst-italic"><a style={{color:'black'}} href={website} target="_blank">{website}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4">
            <CommentContainer>
                <div className="row py-1">
                    <div className="col-6 d-flex justify-content-start">
                        <div className="px-2">
                            <button className="btn btn-sm" type="button">
                                <i className="bi-chat"> {numberOfComment} comments</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="px-2">
                            <button className="btn btn-sm" type="button" onClick={e => toggleComments(e,id)}>
                                {displayComments ? "close comments": "view comments"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        isLoadingComments && <div>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        displayComments && comments.map(({email,body},key) =>(<div className="col-11 py-2">
                            <div key={key} className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-start">
                                            <div className="card-title fw-bold fst-italic">{email}</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card-text">
                                                {body}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </CommentContainer>
        </div>
    </div>
}
