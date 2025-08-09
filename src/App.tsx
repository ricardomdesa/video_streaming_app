import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from "./pages/Homepage";
import Golang from "./pages/GolangPage";
import { VideoProvider } from "./providers/VideoProvider";

function App(props: { keycloakInstance: Keycloak.KeycloakInstance }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "gray",
          colorText: "white",
          borderRadius: 2,
          colorBgLayout: "#212121",
          colorBorder: "#212121",

          // Alias Token
          colorBgContainer: "#282c34",
        },
      }}
    >
      <VideoProvider>
        <Nav />
        {/* <LayoutC /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/golang"
              element={
                <PrivateRoute>
                  <Golang />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </VideoProvider>
    </ConfigProvider>
  );
}

export default App;
