import {Avatar} from '../commun'
import styled from "styled-components";
import {useCallback} from "react";
const UserItemStyled = styled.div`
    cursor: pointer;
`
const UserItem = ({id,name,email,onClickItem}) => {

    const onClickHandler = useCallback(evt => {
        evt.preventDefault()
        onClickItem && onClickItem(id)
    },[onClickItem,id])

    return (<UserItemStyled className="row pb-3" onClick={onClickHandler}>
            <div className="col-2"><Avatar/></div>
            <div className="col-10">
                <div>{name}</div>
                <div>{email}</div>
            </div>
        </UserItemStyled>)
}

export default UserItem
