import "./App.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Nav/Navigation";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentProfileContainer from "./components/ContentProfile/ContentProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <Routes>
          <Route
            path="/profile*"
            element={
              <ContentProfileContainer
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
