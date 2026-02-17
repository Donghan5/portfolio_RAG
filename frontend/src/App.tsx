import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[640px] px-4 z-50">
        <CommandPalette />
      </div>
    </BrowserRouter>
  );
}
