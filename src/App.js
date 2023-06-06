import "./App.css";

import ContentProfile from "./components/ContentProfile/ContentProfile";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Navigation from "./components/Nav/Navigation";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/state';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/profile"
            element={
              <ContentProfile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                
              />
            }
          />
          <Route
            path="/message"
            element={<Messages state={props.state.messagePage}
            store = {props.store} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

