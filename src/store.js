import { createStore } from "redux";
import reducers from "./reducers/index";


const store = createStore(reducers, window._REDUX_DEVTOOLS_EXTENSIONS);

export default store;