import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectView from "./pages/ProjectView";
import Home from "./pages/Home";
import Footer from "./pages/sub-components/Footer";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wakeUpBackend from "./utils/wakeBackend";

function App() {
  useEffect(() => {
    wakeUpBackend();
  }, []); // Empty dependency array to run this only once on component mount

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectView />} />
          </Routes>
          <Footer />
          <ToastContainer position="bottom-right" theme="dark" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
