import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" />
      </div>
    </HelmetProvider>
  );
}

export default App;
