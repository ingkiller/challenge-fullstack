import styled from "styled-components";

const AvatarContainer = styled.div`
  width: ${props => props.size || 40}px;
  height:${props => props.size || 40}px;
  border-radius:50%;
  background-color:rgba(0,0,0,10%);
`
const Avatar = ({name,size=40}) =>(<AvatarContainer size={size}  className="d-flex justify-content-center align-items-center">
    <div className="display-8 text-uppercase">
        {name}
    </div>
</AvatarContainer>)

export default Avatar
