import './App.css';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import BottomNav from './components/BottomNav/bottomNav';

function App() {
  return (
    <>
    <Header />  
    <div className="App">
      <Intro />
      <About />
      <Project />
      <Skills />
      <BottomNav />
    </div>
    </>
  );
}

export default App;
