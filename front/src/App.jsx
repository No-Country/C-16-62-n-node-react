import './App.css'
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Public from './routes/Public';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        < NavBar />
          < Public />
         <Footer />
      </Router>
    </>
  )
}

export default App