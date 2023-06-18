import "./App.css";

import ContentProfile from "./components/ContentProfile/ContentProfile";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Navigation from "./components/Nav/Navigation";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

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
              // profilePage={props.state.profilePage}
              // dispatch={props.dispatch}
              // store={props.store}
              />
            }
          />
          <Route
            path="/message"
            element={
              <MessagesContainer
              // state={props.state.messagePage}
              // store={props.store}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
