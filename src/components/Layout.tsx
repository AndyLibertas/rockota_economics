import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpenIcon, ChartBarIcon, FolderIcon, HomeIcon, FlaskConicalIcon } from 'lucide-react';
const Layout = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  return <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/Rockota_Logo.jpg" alt="Rockota Logo" className="h-10 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-[#008080]">Rockota</h1>
              <p className="text-xs text-gray-500">
                by Andrew Wright • Founded 2025
              </p>
            </div>
          </div>
          <nav className="flex space-x-6">
            <Link to="/" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/') && !isActive('/library') && !isActive('/data') && !isActive('/projects') && !isActive('/research') ? 'bg-[#243975] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <HomeIcon size={18} />
              <span>About</span>
            </Link>
            <Link to="/research" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/research') ? 'bg-[#243975] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <FlaskConicalIcon size={18} />
              <span>Research</span>
            </Link>
            <Link to="/library" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/library') ? 'bg-[#243975] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <BookOpenIcon size={18} />
              <span>Economic Library</span>
            </Link>
            <Link to="/data" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/data') ? 'bg-[#243975] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <ChartBarIcon size={18} />
              <span>Data</span>
            </Link>
            <Link to="/projects" className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects') ? 'bg-[#243975] text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              <FolderIcon size={18} />
              <span>Projects</span>
            </Link>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-[#243975] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()} Rockota by Andrew Wright. All
                rights reserved.
              </p>
              <p className="text-xs text-gray-300 mt-1">
                Founded 2025 • Currently in early development
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="mailto:andrewwright2023@outlook.com" className="text-gray-300 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Layout;