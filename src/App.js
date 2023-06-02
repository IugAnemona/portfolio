import './App.css';
import { About } from './components/AboutContent';
import { Header } from './components/Header';
import { Section } from './components/SectionContent';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Section />
    </div>
  );
}

export default App;
