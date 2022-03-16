import styled from "styled-components";

const AvatarContainer = styled.div`
  width:100px;
  height:100px;
  border-radius:50%;
  background-color:rgba(0,0,0,10%);
`
export default ({name}) =>(<AvatarContainer className="d-flex justify-content-center align-items-center">
    <div className="w-100 h-100 display-1 text-uppercase">
        {name}
    </div>
</AvatarContainer>)
