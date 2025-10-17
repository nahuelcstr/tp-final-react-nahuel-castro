import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//react-ruter-dom
import { BrowserRouter as Router } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
	<>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</>
);
