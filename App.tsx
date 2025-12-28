import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import RegionRussia from './pages/RegionRussia';
import RegionThailand from './pages/RegionThailand';
import RegionBali from './pages/RegionBali';
import CityList from './pages/CityList';
import NewsFeed from './pages/NewsFeed';
import ProjectDetails from './pages/ProjectDetails';
import ContactsPage from './pages/ContactsPage';
import SearchPage from './pages/SearchPage';
import AboutCompany from './pages/AboutCompany';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg-main text-white font-body">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/region/russia" element={<RegionRussia />} />
          <Route path="/region/thailand" element={<RegionThailand />} />
          <Route path="/region/bali" element={<RegionBali />} />
          <Route path="/city/anapa" element={<CityList />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutCompany />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;