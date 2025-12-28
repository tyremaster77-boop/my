import React from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const MainMenu: React.FC = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-[size:40px_40px] bg-grid-pattern">
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
            <span className="text-[10px] text-primary tracking-[0.2em] font-mono leading-none opacity-90 drop-shadow-neon">ЗАГРУЗКА_ПРИЛОЖЕНИЯ_ЗАВЕРШЕНА</span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="flex cursor-pointer items-center justify-center size-10 border border-border-dim bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all text-text-main rounded-sm">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10">
        {/* Directions Header */}
        <div className="px-4 pt-8 pb-4 flex items-end justify-between">
          <div>
            <h2 className="font-display uppercase tracking-wider text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-primary inline-block shadow-neon"></span>
              Направления
            </h2>
            <p className="text-text-dim text-xs font-mono mt-1 pl-4">ВЫБРАТЬ_РЕГИОН</p>
          </div>
          <div className="h-[1px] w-12 bg-primary/50 shadow-neon"></div>
        </div>

        {/* Carousel */}
        <div className="flex overflow-x-auto no-scrollbar py-4 pl-4 pr-4">
          <div className="flex items-stretch gap-4">
            
            {/* Russia Card */}
            <Link to="/region/russia" className="group relative flex h-72 w-64 flex-col justify-end bg-surface border border-border-dim hover:border-primary transition-all duration-300 cursor-pointer shrink-0 overflow-hidden hover:shadow-neon">
              <div className="absolute inset-0 w-full h-full bg-center bg-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaANzYUPQkFGT3rIlkphoD7s1v2PP8KB4kAOttKMCPthjYsTlqaWWvnkc5NWysQMoFDCvJGgCo-o0cEjnz4mVXd9wqf1qmCk6BvcMtKbgTWa8z4fbQBNlICGwq50hTnk28YU3Fi-eyKe-e-gg85hE6vmrCQWqD23ztKCbA4F58TnwGaq0JkAdEEq3Kd7ys8uburAckHyDzjW_94RMVTIABy6qMk45-1ln0Zj3LFy4BUPLbBk29lQv0gLNLSpQKXxQbc5XIOVHnrO7H")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent z-[2]"></div>
              <div className="relative p-4 z-10 border-t border-border-dim bg-bg-main/80 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-white font-display text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors group-hover:drop-shadow-neon">Россия</p>
                  <span className="material-symbols-outlined text-text-dim text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
                <p className="text-text-dim text-xs font-mono uppercase tracking-tight">АНАПА / СОЧИ / КРЫМ</p>
              </div>
            </Link>

            {/* Thailand Card */}
            <Link to="/region/thailand" className="group relative flex h-72 w-64 flex-col justify-end bg-surface border border-border-dim hover:border-primary transition-all duration-300 cursor-pointer shrink-0 overflow-hidden hover:shadow-neon">
              <div className="absolute inset-0 w-full h-full bg-center bg-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYKeSbhwDIa0OXBQTZziwr7f-XNZKF5S84OHvnGRSBQqxBjH-Wvj8k1mgx_GbrXzlKF2dg28z5DSH3cx3C1eS-nQX2zUDh8DM44JRY7elX6NcapZAraVvFqCpfyOmD-h74hSggp4dohARpAU1ASmMQaRISeV3AfMsj_zHdNg-4ANhwHoVldbE90pq8tGZUhPwsMS5nULVajFo-8Id_RBIuZMHAShZqpPykH-_YZyqc5GSsHmtyy6wPY_jj31NZ3C3HrvgRa2HmANcD")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent z-[2]"></div>
              <div className="relative p-4 z-10 border-t border-border-dim bg-bg-main/80 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-white font-display text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors group-hover:drop-shadow-neon">Таиланд</p>
                  <span className="material-symbols-outlined text-text-dim text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
                <p className="text-text-dim text-xs font-mono uppercase tracking-tight">ПХУКЕТ / САМУИ / ПАТАЙЯ / КРАБИ</p>
              </div>
            </Link>

            {/* Bali Card */}
            <Link to="/region/bali" className="group relative flex h-72 w-64 flex-col justify-end bg-surface border border-border-dim hover:border-primary transition-all duration-300 cursor-pointer shrink-0 overflow-hidden hover:shadow-neon">
              <div className="absolute inset-0 w-full h-full bg-center bg-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCS2r2j0fJMzwJgkG_X_w0ZZzwuOPd9Aqpkm2nJD5yD-jbUrTplEdY5lC6oJuJGgu1zua0WXwKuoapu0QZSpiFoz-TrnFTP_FlpeVTQNfHb1By6l61opUvBOqnTU3yK6HWVcdGftEr9dwZShh8oh4ykYCFzX6tqoX1Yh8vQ7J8_CT6-IHGueXeJPkHSUDOMqLdzZaLW7h1SqYvIGrOXGR_fgsPRBXiWsrAjHevIPxOXIBAKvbmOiJW86iC5PhrQfDBUgsG4j7zNy2En")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent z-[2]"></div>
              <div className="relative p-4 z-10 border-t border-border-dim bg-bg-main/80 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-white font-display text-2xl font-bold uppercase tracking-wider group-hover:text-primary transition-colors group-hover:drop-shadow-neon">Бали</p>
                  <span className="material-symbols-outlined text-text-dim text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
                <p className="text-text-dim text-xs font-mono uppercase tracking-tight">ЧАНГУ / УБУД / СЕМИНЬЯК</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Sections Header */}
        <div className="px-4 pt-8 pb-4 flex items-end justify-between">
          <div>
            <h2 className="font-display uppercase tracking-wider text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-primary inline-block shadow-neon"></span>
              Разделы
            </h2>
            <p className="text-text-dim text-xs font-mono mt-1 pl-4">СИСТЕМА_НАВИГАЦИИ</p>
          </div>
          <div className="h-[1px] w-12 bg-primary/50 shadow-neon"></div>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col gap-3 px-4">
          
          <Link to="/news" className="relative flex items-center gap-4 bg-surface p-4 border border-border-dim hover:border-primary hover:bg-surface-highlight hover:shadow-[0_0_15px_-5px_rgba(0,240,255,0.3)] transition-all w-full group overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom shadow-neon"></div>
            <div className="flex items-center justify-center size-12 bg-bg-main border border-border-dim text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 z-10 shrink-0 group-hover:shadow-neon">
              <span className="material-symbols-outlined">newspaper</span>
            </div>
            <div className="flex-1 text-left z-10">
              <p className="text-white font-display uppercase text-lg font-bold tracking-wide transition-all">Новости</p>
              <p className="text-text-dim text-xs font-mono mt-1 group-hover:text-primary transition-colors">&gt; СОБЫТИЯ_В_МИРЕ_НЕДВИЖИМОСТИ</p>
            </div>
            <div className="text-border-dim group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>

          <Link to="/city/anapa" className="relative flex items-center gap-4 bg-surface p-4 border border-border-dim hover:border-accent-green hover:bg-surface-highlight hover:shadow-[0_0_15px_-5px_rgba(57,255,20,0.3)] transition-all w-full group overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom shadow-neon-green"></div>
            <div className="flex items-center justify-center size-12 bg-bg-main border border-border-dim text-accent-green group-hover:text-black group-hover:bg-accent-green transition-all duration-300 z-10 shrink-0 group-hover:shadow-neon-green">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div className="flex-1 text-left z-10">
              <p className="text-white font-display uppercase text-lg font-bold tracking-wide transition-all">Инвестиции</p>
              <p className="text-text-dim text-xs font-mono mt-1 group-hover:text-accent-green transition-colors">&gt; ИСТОРИЯ / ОБУЧЕНИЕ / МЕТОДИКИ</p>
            </div>
          </Link>

          <Link to="/about" className="relative flex items-center gap-4 bg-surface p-4 border border-border-dim hover:border-accent-purple hover:bg-surface-highlight hover:shadow-[0_0_15px_-5px_rgba(217,70,239,0.3)] transition-all w-full group overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-purple scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom shadow-neon-purple"></div>
            <div className="flex items-center justify-center size-12 bg-bg-main border border-border-dim text-accent-purple group-hover:text-white group-hover:bg-accent-purple transition-all duration-300 z-10 shrink-0 group-hover:shadow-neon-purple">
              <span className="material-symbols-outlined">business</span>
            </div>
            <div className="flex-1 text-left z-10">
              <p className="text-white font-display uppercase text-lg font-bold tracking-wide transition-all">О компании</p>
              <p className="text-text-dim text-xs font-mono mt-1 group-hover:text-accent-purple transition-colors">&gt; ДОСЬЕ_АГЕНТСТВА</p>
            </div>
            <div className="text-border-dim group-hover:text-accent-purple transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>

          {/* New Contacts Button */}
          <Link to="/contacts" className="relative flex items-center gap-4 bg-surface p-4 border border-border-dim hover:border-accent-yellow hover:bg-surface-highlight hover:shadow-[0_0_15px_-5px_rgba(250,204,21,0.3)] transition-all w-full group overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom shadow-[0_0_8px_#facc15]"></div>
            <div className="flex items-center justify-center size-12 bg-bg-main border border-border-dim text-accent-yellow group-hover:text-black group-hover:bg-accent-yellow transition-all duration-300 z-10 shrink-0 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="flex-1 text-left z-10">
              <p className="text-white font-display uppercase text-lg font-bold tracking-wide transition-all">Контакты</p>
              <p className="text-text-dim text-xs font-mono mt-1 group-hover:text-accent-yellow transition-colors">&gt; СВЯЗАТЬСЯ_С_НАМИ </p>
            </div>
            <div className="text-border-dim group-hover:text-accent-yellow transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </Link>

        </div>
        <div className="h-6"></div>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainMenu;