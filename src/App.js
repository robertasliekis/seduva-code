import "./App.css";
import WebsiteInfo from "./components/WebsiteInfo";
import InteractiveMap from "./components/InteractiveMap";

// "homepage": "http://https://robertasliekis.github.io/seduva/",

function App() {
  return (
    <div className="App">
      <div className="website-wrapper">
        <WebsiteInfo />
        <InteractiveMap />
      </div>
    </div>
  );
}

export default App;
