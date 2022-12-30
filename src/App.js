import "./App.css";
import Header from "./layout/header/Header";
import Routing from "./routes/Routing";

function App() {

  return (
    <div className="App">
    <Header />
      <main className="main--content">
        <Routing />
      </main>
  
    </div>
  );
}

export default App;
