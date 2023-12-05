import styled from "styled-components"
import { Section } from "./Section"


export const Home = () => {
  return (
    <Container>
        <Section
            title="Model S"
            decription="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rigthBtnText="Existing inventory"
        />
        <Section
            title="Model Y"
            decription="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rigthBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            decription="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rigthBtnText="Existing inventory"
        />
        <Section
            title="Model X"
            decription="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rigthBtnText="Existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panels"
            decription="Money"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rigthBtnText="Learn more"
        />
        <Section
            title="Accessories"
            decription=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"

        />
    </Container>
  )
}

const Container = styled.div`
    height:100vh;
`
