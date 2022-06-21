import './App.css';
import {Navbar, Header, Features, Download,  About, Footer} from "./components";

function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Header/>
      </header>
        <Features/>
        <Download/>
        <About/>
        <Footer/>
    </main>
  );
}

export default App;
