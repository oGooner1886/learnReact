import './App.css';

import ContentProfile from './components/ContentProfile/ContentProfile';
import Header from './components/Header/Header';
import Messages from './components/Message/Messages';
import Navigation from './components/Nav/Navigation';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useHistory } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/profile" element={<ContentProfile/>} />
          <Route path="/message" element={<Messages/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;