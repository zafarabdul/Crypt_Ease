import './App.css';
import Footer from './static/Footer.jsx';
import Header from './static/Header.jsx';
import Section from './static/Section.jsx';
function App() {
  const appStyle = {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh",
  };
  return (
    <div>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
