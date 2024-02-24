import './App.css'
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Public from './routes/Public';

function App() {

  return (
    <>
      <Router>
        < NavBar />
          < Public />
        < Footer />
      </Router>
    </>
  )
}

export default App