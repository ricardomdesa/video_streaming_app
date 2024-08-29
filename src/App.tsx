import "./App.css";
import Main from "./components/Main";
import { VideoProvider } from "./providers/VideoProvider";

function App() {
  return (
    <div className="App">
      <VideoProvider>
        <header className="App-new">
          <Main />
        </header>
      </VideoProvider>
    </div>
  );
}

export default App;
