import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx"
import contact from "./contact.js"

/**
 * Single Page Application Launch
 * @returns 
 */
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;