import { ConfigProvider } from "antd";
import "./App.css";
import LayoutC from "./components/LayoutC";
import { VideoProvider } from "./providers/VideoProvider";

function App() {
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
        <LayoutC />
      </VideoProvider>
    </ConfigProvider>
  );
}

export default App;
