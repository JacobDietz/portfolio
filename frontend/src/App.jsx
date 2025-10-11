import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.jsx";
import DynamicBckg from "./background.jsx"; 
import Profile from "./profile.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 flex items-center justify-center -z-10">
        <DynamicBckg />
      </div>

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
