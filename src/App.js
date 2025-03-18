import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import ContactForm from "./components/ContactForm";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ pt: 10 }}>  {/* ✅ Prevent Navbar from overlapping content */}
        <Routes>
          <Route path="/" element={
            <Box>
              <Hero />
              <BentoGrid />
              <ContactForm />
            </Box>
          } />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
