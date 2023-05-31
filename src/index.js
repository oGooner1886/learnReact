import { rerenderPage } from "./render"
import state from "./redux/state"
import reportWebVitals from './reportWebVitals';
rerenderPage('state')
rerenderPage(state)
reportWebVitals();
