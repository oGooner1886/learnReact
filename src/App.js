import './App.css';

import ContentProfile from './components/ContentProfile/ContentProfile';
import Header from './components/Header/Header';
import Navigation from './components/Nav/Navigation';




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