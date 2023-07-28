import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./src/styles/GlobalStyles";
import { RoutesMain } from "./src/routes_front";
import { BackgroundImage, PageContainer } from "./src/styles/global";

export const App = () => {
  return (
    <div className="App">
      <PageContainer>
        <BackgroundImage>
          <GlobalStyles />
          <ToastContainer theme="dark" autoClose={3000} />

          <RoutesMain />
        </BackgroundImage>
      </PageContainer>
    </div>
  );
};
