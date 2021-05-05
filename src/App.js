import "./App.scss";
import Navigation from "./containers/Navigation/Navigation";
import Header1 from "./components/Header1/Header1";
import Header2 from "./components/Header2/Header2";
import Header3 from "./components/Header3/Header3";
import Header4 from "./components/Header4/Header4";

function App() {
  return (
    <div className="app">
      <Navigation />
      {/* <Header1 /> */}
      {/* <Header2 /> */}
      {/* <Header3 /> */}
      <Header4 />
    </div>
  );
}

export default App;
