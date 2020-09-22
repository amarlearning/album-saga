import React from "react";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import { Provider } from "react-redux";
import consfigureStore from "./store";

const store = consfigureStore();

function App() {
	return (
		<Provider store={store}>
			<Header />
			<ImageGrid />
		</Provider>
	);
}

export default App;
