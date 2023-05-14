import './App.css';
import ContentProfile from './components/ContentProfile';
import Header from './components/Header';
import Navigation from './components/Navigation';




function App() {
  return (
    <div className = 'app-wrapper'>
      <Header/>
      <Navigation/>
      <ContentProfile/>
    </div>
  );
}

export default App;