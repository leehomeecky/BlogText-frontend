import React from "react";
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFound, About, Blog, Contact, Login, SignUp, Home } from "./pages";

function App() {
  const user = { firstName: "meecky" };
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation user={user} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
