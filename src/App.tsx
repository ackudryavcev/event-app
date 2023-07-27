import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./scenes/navbar";
import MainPage from "./scenes/mainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
