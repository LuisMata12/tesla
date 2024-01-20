import { useState } from "react";
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



export const Header = () => {
  const [hamburgerState,setHamburgerState] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="teslaLogo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RaightMenu>
        <a href="#">Shop</a>
        <a href="#">tesla account</a>
        <CustomMenu onClick={()=> setHamburgerState(true)}/>
      </RaightMenu>
      <BurgerNav show={hamburgerState}>
        <CloseMenuContainer>
          <CloseMenu onClick={()=> setHamburgerState(false)}/>
        </CloseMenuContainer>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}
const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:bold;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
    display:block;
    white-space:nowrap;
  }
  @media(max-width:768px){
    display:none;
  }
`
const RaightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
    font-weight:bold;
    text-transform:uppercase;
    margin-right:15px;
    flex-wrap:nowrap;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const BurgerNav = styled.div`
  width:250px;
  position:fixed;
  z-index:1000;
  top:0;
  right:0;
  bottom:0;
  background:white;
  padding:10px;
  list-style:none;
  text-aling:right;
  transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
  transition:transform .3s;
  li{
    padding:15px 10px;
    border-bottom: 1px solid #d4d4d4;
  }
`
const CloseMenuContainer = styled.div`
  display:flex;
  justify-content:end;
`
const CloseMenu = styled(CloseIcon)`
  margin-bottom: 5px;
  cursor:pointer;
`