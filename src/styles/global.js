import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --color-primary: #606676;
     --color-emphasis-1: #d5a84a;
     --color-emphasis-2: #F8F9FA;

    --grey-0: #FFFFFF;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    --negative: #C73650;
    --success: #087F5B;
}

body {
    background-color: var(--grey-4);
}


body, button, input{
        font-family: 'Inter', sans-serif;
    }

`;
