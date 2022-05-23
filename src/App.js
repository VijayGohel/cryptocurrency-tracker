import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>

    <Header />

    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/coins/:id' element={<CoinPage />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
