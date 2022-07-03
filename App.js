
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import Header1 from "./components/Header1";
import Main1 from "./components/Main1";
import Footer1 from "./components/Footer1";

function App() {
  return (
    <div className="App">
     <div className="card1"> <Header />
      <Main /> 
      <Footer />
      </div>
      <div className="card2">
        <Header1 />
        <Main1 />
        <Footer1 />

      </div>
      
    </div>
  );
}

export default App;
