import { useManualQuery } from "graphql-hooks";
import {useCallback, useState} from "react";
import styled from 'styled-components'
import moment from "moment";
import {Avatar,Comment} from '../commun'
import { GET_COMMENTS_BY_POST_ID } from "../queries";

const CommentContainer = styled.div`
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  background-color:#f1f6fe;
  padding: 0 5px;
`

const InputComment = styled.input`
  width: 100%;
  border:none;
  border-radius:15px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`


export default ({id,title,body,numberOfComment,user:{username,email},createdDate,numberOfLikes=10}) => {

    const [getCommentByPostId] = useManualQuery(GET_COMMENTS_BY_POST_ID)
    const [comments, setComments] = useState([])
    const [isLoadingComments, setIsLoadingComments] = useState(false)
    const [displayComments, setDisplayComments] = useState(false)
    const [displayComment, setDisplayComment] = useState(false)
    const [liked,setLiked] = useState(0);
    const [totalLikes, setTotalLikes] = useState(numberOfLikes)

    const getCommentsByPostIdHandler =async (postId) =>{
        setIsLoadingComments(true)
        let result = await getCommentByPostId({
            variables: { postId:postId},
            useCache:false
        })
        console.log('getCommentsByPostIdHandler:',result)
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
            setDisplayComment(false)
        }else{
            setDisplayComments(true)
            getCommentsByPostIdHandler(postId)
        }

    },[displayComments,getCommentsByPostIdHandler])

    const toggleComment = useCallback(() => {
        setDisplayComment(current => !current);
    },[])

    const toggleLike = useCallback(() => {
        //todo call api
        if(liked === -1){
            setLiked(1)
            setTotalLikes(numberOfLikes + 1)
        }else {
            setLiked(-1)
            setTotalLikes(numberOfLikes - 1)
        }
    },[liked,numberOfLikes])

    return <div className="mb-3">
        <div className="card py-1"
             style={{boxShadow: '0px 0px 4px rgb(0 0 0 / 12%)'}}
        >
            <div className="d-flex flex-row">
                <div className="mx-2 d-flex justify-content-end align-items-start">
                   <Avatar name={username[0]}/>
                </div>
                <div className="flex-column">
                    <div className="col-12 d-flex justify-content-start"><span className="card-title mb-0">{email} </span></div>
                    <div className="col-12 d-flex justify-content-start"><span className="text-muted">{moment(createdDate).fromNow()}</span></div>
                </div>
                <div className="ms-auto me-1">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots"/>
                        </button>
                        <ul className="dropdown-menu">
                            <li className="p-0 pt-1"><a className="dropdown-item text-start" href="#"><i className="bi bi-bookmark text-black" /> Action 1</a></li>
                            <li className="p-0">
                                <hr className="dropdown-divider"/>
                            </li>
                            <li className="p-0"><a className="dropdown-item text-start" href="#"><i className="bi bi-bell text-black" />Action 2</a></li>
                            <li className="p-0">
                                <hr className="dropdown-divider"/>
                            </li>
                            <li className="p-0 pb-1">
                                <a className="dropdown-item text-start " href="#">
                                    <i className="bi bi-stopwatch text-black" /> Action 3
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="d-flex w-100 justify-content-start px-2">
                   {title}
                </div>
            </div>
            <div className="dropdown-divider mx-2"/>
            <div className="d-flex flex-row px-2 text-start">
                    {body}
            </div>
            <div className="dropdown-divider mx-2"/>
            <div className="d-flex justify-content-between px-2">
                <div>{totalLikes} likes</div>
                <div> <button className="btn p-0" onClick={e => toggleComments(e,id)}>
                    {numberOfComment} comments</button> </div>
            </div>
            <div className="dropdown-divider mx-2"/>
            <div className="d-flex justify-content-between px-2">
                <div>
                    <button className="btn btn-sm" type="button" onClick={toggleLike}>
                        {
                            liked === 1 ? <i className="bi bi-hand-thumbs-down"> dislike</i>: <i className="bi bi-hand-thumbs-up"> like</i>
                        }
                    </button>
                </div>
                <div>
                    <button className="btn btn-sm" type="button" onClick={toggleComment}>
                        <i className="bi bi-chat-text"> comment</i>
                    </button>
                </div>
                <div>
                    <button className="btn btn-sm" type="button">
                        <i className="bi bi-share"> share</i>
                    </button>
                </div>
            </div>
        </div>
        <div className="px-4">
            <CommentContainer>
                <div className="row justify-content-center">
                    {
                        isLoadingComments && <div>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        displayComments && comments.map(({email,body},key) =>(
                            <Comment key={key} email={email} body={body} />
                        ))
                    }
                </div>
                {
                    (displayComments || displayComment) && <div className="d-flex flex-row py-2 justify-content-center">
                            <Avatar size={32} name={'R'}></Avatar>
                            <div className="w-100 mx-2 d-flex flex-row py-0"
                                 style={{
                                     borderRadius:'15px',
                                     backgroundColor:'#cddae9'
                                 }}>
                                <div className="d-flex flex-grow-1 ps-1">
                                    <InputComment type="text" />
                                </div>
                                <div className="d-flex ms-auto">
                                    <button className="btn"><i className="bi bi-send"></i></button>
                                </div>
                            </div>
                    </div>
                }

            </CommentContainer>
        </div>
    </div>
}

/*
 <div className="row py-1">
                    <div className="col-6 d-flex justify-content-start">
                        <div className="px-2">
                            <button className="btn btn-sm" type="button">
                                <i className="bi-chat" style={{color:'#637182'}}>{numberOfComment} comments </i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="px-2">
                            <button color="" className="btn btn-sm" type="button" onClick={e => toggleComments(e,id)}>
                               <span style={{color:'#637182'}}>{displayComments ? "close comments": "view comments"}</span>
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
                        displayComments && comments.map(({email,body},key) =>(
                           <Comment key={key} email={email} body={body} />
                           ))
                    }
                </div>
 */
