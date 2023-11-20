import React from "react";
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageRenderer from "./page-renderer";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
