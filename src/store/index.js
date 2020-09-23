import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const consfigureStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const composeArgs = [applyMiddleware(sagaMiddleware)];

	if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
		composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
	}

	const store = createStore(
		rootReducer,
		compose.apply(undefined, composeArgs)
	);

	sagaMiddleware.run(rootSaga);

	return store;
};

export default consfigureStore;
