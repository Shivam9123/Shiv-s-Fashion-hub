import "./App.css";
import Navbar from "./common/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <div>
        <AllRoutes />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
