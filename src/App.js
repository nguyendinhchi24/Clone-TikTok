import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/Home";
import NewsPages from "./pages/News";
import ConcactPages from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/contact" element={<ConcactPages />} />
      </Routes>
    </div>
  );
}

export default App;
