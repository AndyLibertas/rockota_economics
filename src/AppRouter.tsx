import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import DataPage from './pages/DataPage';
import ProjectsPage from './pages/ProjectsPage';
import LibraryPage from './pages/LibraryPage';
import ResearchPage from './pages/ResearchPage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="data" element={<DataPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="library" element={<LibraryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}