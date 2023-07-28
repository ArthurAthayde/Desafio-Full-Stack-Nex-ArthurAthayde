import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --color-primary: #11111F;
     --color-emphasis-1: #d5a84a;
     --color-emphasis-2: #F8F9FA;
     --color-bg: #343B41;

    --grey-0: #FFFFFF;
    --grey-1: #E9ECEF;
    --grey-2: #868E96;
    --grey-3: #121214;

    --negative: #C73650;
    --success: #087F5B;
}

body, button, input{
        font-family: 'Inter', sans-serif;
    }
`;

export const PageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  background: black;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: url("../assets/bgimg.svg");
  background-size: cover;
  opacity: 0.8;
`;
