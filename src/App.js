import logo from "./logo.svg"
import "./App.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Home from "./pages/Home"

import background from "./background.jpg"
function App() {
	return (
		<div
			className="App bg-fixed h-screen"
			style={{ backgroundImage: `url(${background})` }}
		>
			<Home />
		</div>
	)
}

export default App
