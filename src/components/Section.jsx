import styled from "styled-components"

export const Section = ({title,decription,backgroundImg,leftBtnText,rigthBtnText}) => {
  return (
    <Wrap bgimg={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{decription}</p>
        </ItemText>
        <Bottons>
            <ButtonGrup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rigthBtnText&&
                    <Rightbutton>
                        {rigthBtnText}
                    </Rightbutton>
                }
            </ButtonGrup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Bottons>

    </Wrap>
  )
}

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=>`url("/images/${props.bgimg}")`};
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    font-family:sans-serif;
`
const ButtonGrup = styled.div`
     display:flex;
     margin-bottom:30px;
     @media (max-width:768px){
        flex-direction:column;
     }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:50px;
    width:356px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:7px;
    opacity: 0.85;
    text-transform:uppercase;
    font-size: 16px;
    cursor:pointer;
    margin:12px;
    transition: opacity 0.5s;
    @media (max-width:450px){
        width:250px;
        height:35px;
        margin:6px;
        font-size: 12px;
     }
     &:hover{
        opacity:1;
     }
`
const Rightbutton = styled(LeftButton)`
    background:white;
    color:black;
    opacity:0.65;
`
const DownArrow= styled.img`
    margin-top:20px;
    height:60px;
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
`
const Bottons = styled.div`
    display:flex;
    flex-direction:column;
    align-item:center;
`
