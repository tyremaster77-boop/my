import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const SearchPage: React.FC = () => {
  const popularTags = ["Виллы Пхукет", "Инвестиции Бали", "Москва Сити", "Сдача 2025", "Crypto Payment", "Вид на море"];

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-[size:40px_40px] bg-grid-pattern bg-bg-main pb-24 font-body">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-bg-main/80 via-transparent to-bg-main"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-bg-main/90 backdrop-blur-md p-4 border-b border-border-dim justify-between shadow-neon-purple/20">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center size-10 bg-surface border border-primary/30 group shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]">
            <div className="absolute inset-0 bg-primary/10"></div>
            <span className="material-symbols-outlined text-primary drop-shadow-neon text-2xl">apartment</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-2xl font-display font-bold tracking-wider leading-none drop-shadow-md">LOGICA</h2>
            <span className="text-[10px] text-primary tracking-[0.2em] font-mono leading-none opacity-90 drop-shadow-neon">ESTATE.SYS</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="flex cursor-pointer items-center justify-center size-10 border border-border-dim bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all text-text-main rounded-sm">
            <span className="material-symbols-outlined">notifications</span>
          </button>
           <button className="flex cursor-pointer items-center justify-center size-10 border border-border-dim bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all text-text-main rounded-sm">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      {/* Search Content */}
      <div className="relative z-10 px-4 mt-8 flex flex-col gap-8">
        <div>
             <h2 className="font-display uppercase tracking-wider text-xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 bg-primary inline-block shadow-neon"></span>
              ГЛОБАЛЬНЫЙ ПОИСК
            </h2>
            <p className="text-text-dim text-[10px] font-mono mt-1 pl-6 uppercase tracking-widest opacity-60">ПРОТОКОЛ_ПОИСКА_ЗАПУЩЕН</p>
        </div>

        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent-purple/30 opacity-30 group-focus-within:opacity-100 transition-opacity rounded-sm blur-sm"></div>
            <div className="relative flex items-center bg-surface border border-border-dim group-focus-within:border-primary transition-colors rounded-sm">
                <span className="material-symbols-outlined text-text-dim px-4 group-focus-within:text-primary transition-colors">search</span>
                <input 
                    type="text" 
                    placeholder="Поиск объектов или трендов..." 
                    className="w-full bg-transparent border-none text-white p-4 pl-0 placeholder-text-dim/50 focus:ring-0 font-body tracking-wide"
                />
                <button className="p-4 text-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">tune</span>
                </button>
            </div>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, i) => (
                <button key={i} className="px-3 py-1.5 bg-surface border border-white/10 text-xs text-text-dim hover:text-black hover:bg-primary hover:border-primary hover:shadow-neon transition-all uppercase tracking-wider font-bold clip-corner">
                    {tag}
                </button>
            ))}
        </div>
        
        {/* Recommended */}
        <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <h3 className="text-white text-lg font-bold uppercase tracking-wide">Рекомендуемое</h3>
                <span className="text-[10px] text-primary font-mono cursor-pointer hover:underline">ПОКАЗАТЬ ВСЕ</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <Link to="/project/1" className="group relative aspect-[4/5] bg-surface border border-border-dim hover:border-primary transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVEJTdhgZWZmNmKEGKhdIpOVEFNmFHrBqdBTP4_O6hB97twK5XDq3hjpXehAuWFfgZfz1sOdZu9hCcZN7hipg1PqS6DDwbxM1vHmgVzT-rPqsqjN4XWr0E5iVCh6sviVkGKonCxnc-MSw6vEJpIKsQcnrSzsQTEMS1M1MTPya3yZurJnPEKxbbmim2R26nLzHCUCaWcyE7rffbwG-RgXOT0qh7zKVbY90BeleD1yAPPaAObVd4KpC7O96TTUe9He-JHtxXjhhjuRIY")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 w-full p-3">
                        <div className="text-[9px] text-primary font-bold uppercase tracking-widest mb-1 shadow-black/50 drop-shadow-md">Пхукет</div>
                        <h4 className="text-white font-bold leading-none uppercase drop-shadow-md">Azure Sky</h4>
                        <div className="mt-2 text-right">
                             <span className="material-symbols-outlined text-white/50 group-hover:text-primary transition-colors">arrow_forward</span>
                        </div>
                    </div>
                </Link>

                 <Link to="/project/1" className="group relative aspect-[4/5] bg-surface border border-border-dim hover:border-accent-purple transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCS2r2j0fJMzwJgkG_X_w0ZZzwuOPd9Aqpkm2nJD5yD-jbUrTplEdY5lC6oJuJGgu1zua0WXwKuoapu0QZSpiFoz-TrnFTP_FlpeVTQNfHb1By6l61opUvBOqnTU3yK6HWVcdGftEr9dwZShh8oh4ykYCFzX6tqoX1Yh8vQ7J8_CT6-IHGueXeJPkHSUDOMqLdzZaLW7h1SqYvIGrOXGR_fgsPRBXiWsrAjHevIPxOXIBAKvbmOiJW86iC5PhrQfDBUgsG4j7zNy2En")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 w-full p-3">
                        <div className="text-[9px] text-accent-purple font-bold uppercase tracking-widest mb-1 shadow-black/50 drop-shadow-md">Бали</div>
                        <h4 className="text-white font-bold leading-none uppercase drop-shadow-md">Ubud Zen</h4>
                        <div className="mt-2 text-right">
                             <span className="material-symbols-outlined text-white/50 group-hover:text-accent-purple transition-colors">arrow_forward</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-3 pb-8">
            <div className="p-4 bg-surface border border-border-dim flex flex-col gap-2 hover:border-white/30 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl">villa</span>
                <span className="text-xs font-bold uppercase tracking-wider">Виллы</span>
            </div>
            <div className="p-4 bg-surface border border-border-dim flex flex-col gap-2 hover:border-white/30 transition-colors">
                <span className="material-symbols-outlined text-accent-green text-2xl">apartment</span>
                <span className="text-xs font-bold uppercase tracking-wider">Апартаменты</span>
            </div>
             <div className="p-4 bg-surface border border-border-dim flex flex-col gap-2 hover:border-white/30 transition-colors">
                <span className="material-symbols-outlined text-accent-yellow text-2xl">storefront</span>
                <span className="text-xs font-bold uppercase tracking-wider">Ритейл</span>
            </div>
             <div className="p-4 bg-surface border border-border-dim flex flex-col gap-2 hover:border-white/30 transition-colors">
                <span className="material-symbols-outlined text-accent-purple text-2xl">landscape</span>
                <span className="text-xs font-bold uppercase tracking-wider">Земля</span>
            </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
};

export default SearchPage;