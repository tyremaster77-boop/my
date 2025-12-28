import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-bg-main/95 backdrop-blur-lg border-t border-border-dim pb-[env(safe-area-inset-bottom)] pt-2 px-2 z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        <Link to="/" className={`group flex flex-col items-center justify-center w-full h-full gap-1 relative ${isActive('/') ? 'text-primary' : 'text-text-dim hover:text-white'}`}>
          {isActive('/') && <div className="absolute -top-2 w-12 h-[2px] bg-primary shadow-neon"></div>}
          <span className={`material-symbols-outlined transition-transform ${isActive('/') ? 'filled scale-110 drop-shadow-neon' : 'group-hover:scale-110'}`}>home</span>
          <span className="text-[10px] font-display uppercase tracking-wider font-bold">Главная</span>
        </Link>

        <Link to="/search" className={`group flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive('/search') ? 'text-primary' : 'text-text-dim hover:text-white'}`}>
           <span className={`material-symbols-outlined transition-transform ${isActive('/search') ? 'scale-110 drop-shadow-neon' : 'group-hover:scale-110'}`}>search</span>
           <span className="text-[10px] font-display uppercase tracking-wider font-bold">Поиск</span>
        </Link>

        <button className="group flex flex-col items-center justify-center w-full h-full text-text-dim hover:text-white gap-1 transition-colors">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">favorite</span>
          <span className="text-[10px] font-display uppercase tracking-wider font-bold">Избранное</span>
        </button>

        <button className="group flex flex-col items-center justify-center w-full h-full text-text-dim hover:text-white gap-1 transition-colors">
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
          <span className="text-[10px] font-display uppercase tracking-wider font-bold">Профиль</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;