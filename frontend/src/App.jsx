import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import DynamicBckg from "./background.jsx"; 
import Profile from "./profile.jsx";

function App() {
  return (
    <div className="relative min-h-screen">
        <DynamicBckg />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      </div> 
  );
}

export default App;
