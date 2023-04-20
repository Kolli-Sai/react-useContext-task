import "./styles.css";
import { Container } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import ScorePage from "./components/ScorePage";
import PopularPlayer from "./components/PopularPlayer";
import Navbar from "./components/Navbar";
import PlayerDataProvider from "./contexts/PlayerDataProvider";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <PlayerDataProvider>
          <Navbar />
          <Container maxWidth="md" sx={{ mt: "30px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/scorepage" element={<ScorePage />} />
              <Route path="/popularplayer" element={<PopularPlayer />} />
            </Routes>
          </Container>
        </PlayerDataProvider>
      </BrowserRouter>
    </>
  );
}
