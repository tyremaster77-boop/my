import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const AboutCompany: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-main min-h-screen flex flex-col font-display text-white pb-24 overflow-x-hidden relative selection:bg-primary selection:text-black">
       {/* Background Grid */}
       <div className="fixed inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-30 pointer-events-none"></div>

       {/* Header */}
       <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-bg-main/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
          <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
             <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-[0.2em] uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <span className="text-primary mr-2">//</span> 0 КОМПАНИИ
          </h1>
          <button className="flex h-8 px-3 items-center justify-center border border-primary/50 text-primary text-xs font-mono font-bold hover:bg-primary hover:text-black transition-all shadow-neon rounded-sm">
             RU
          </button>
       </header>

       {/* Hero Section */}
       <section className="relative h-[480px] w-full p-6 flex flex-col justify-end group overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvkrf136z0zADqMknTszbZBhAUSAlDfppRd66bfiKj0J_1FuMXhxtBNxkCbYmTF1jTr6S6IOSBxoL6TmvpDUpeBtEL2TWJa23Q5Hp6O9PExVjZ2LvjbrC2fqu8hmGIquqRcbpn7aDS7cjm4d-sJ3zlbjB5xU--PepZ4A0sz0mtaRjLsdPntJLg9el9UsmHalpzpbhII9KAUTLTA3V3Covf3DJSW1ik-aVGfdVdhwqLAZljRGuP9IkRlJAKmiJsa368hmPwGxpvooH-")'}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/70 to-bg-main/20"></div>
          <div className="absolute inset-0 bg-scanline opacity-30 pointer-events-none"></div>
          
          {/* Top Right QR Decoration */}
          <div className="absolute top-6 right-6 opacity-80">
             <span className="material-symbols-outlined text-4xl text-primary/50">qr_code_2</span>
          </div>

          {/* Content */}
          <div className="relative z-10 border-l-4 border-primary pl-5 py-2">
             <div className="inline-flex items-center border border-primary/50 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-primary mb-4 shadow-neon">
                ОСН. 2014
             </div>
             <h2 className="text-4xl font-bold uppercase leading-[0.9] tracking-tight drop-shadow-lg">
                Будущее <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white drop-shadow-neon">Глобальной</span> <br/> 
                Недвижимости
             </h2>
          </div>
       </section>

       {/* Text Block */}
       <section className="px-6 py-8 relative">
          <div className="absolute left-0 top-10 w-1 h-12 bg-accent-purple shadow-neon-purple"></div>
          <h3 className="text-xl font-bold uppercase mb-4 leading-tight">
            Премиальная Недвижимость: <br/>
            <span className="text-primary drop-shadow-neon">Россия</span>, <span className="text-primary drop-shadow-neon">Таиланд</span>, <span className="text-primary drop-shadow-neon">Бали</span>.
          </h3>
          <p className="text-sm text-gray-400 font-body leading-relaxed border-l border-white/10 pl-4">
             LOGICA стирает границы между мечтой и реальностью с помощью передовой логистики и безупречных международных сделок.
          </p>
       </section>

       {/* Tabs */}
       <section className="px-4 mb-8">
          <div className="grid grid-cols-3 border border-border-dim bg-surface/50 backdrop-blur-sm">
             <button className="bg-primary text-black font-bold py-3 text-[10px] sm:text-xs uppercase tracking-wider shadow-neon relative overflow-hidden group">
                <span className="relative z-10">Миссия</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
             </button>
             <button className="bg-transparent text-gray-400 py-3 text-[10px] sm:text-xs uppercase tracking-wider border-l border-border-dim hover:text-white hover:bg-white/5 transition-colors">
                Ценности
             </button>
             <button className="bg-transparent text-gray-400 py-3 text-[10px] sm:text-xs uppercase tracking-wider border-l border-border-dim hover:text-white hover:bg-white/5 transition-colors">
                Технологии
             </button>
          </div>
       </section>

       {/* Features */}
       <section className="px-4 flex flex-col gap-4 mb-10 relative">
          {/* Decorative Corner Lines */}
          <div className="absolute -left-2 top-0 w-4 h-full border-l border-t border-b border-primary/20 hidden sm:block"></div>
          <div className="absolute -right-2 top-0 w-4 h-full border-r border-t border-b border-primary/20 hidden sm:block"></div>

          <div className="border border-primary/30 bg-surface/40 backdrop-blur-md p-5 relative overflow-hidden group hover:border-primary transition-colors">
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary shadow-neon"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary shadow-neon"></div>
             
             <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 bg-primary/10 border border-primary flex items-center justify-center text-primary shadow-neon group-hover:scale-110 transition-transform duration-500">
                   <span className="material-symbols-outlined text-2xl">security</span>
                </div>
                <div>
                   <h4 className="font-bold text-primary uppercase mb-1 tracking-wider text-sm drop-shadow-neon">Протоколы Защиты</h4>
                   <p className="text-xs text-gray-400 font-body leading-relaxed">
                      Абсолютная прозрачность в международном праве и финансах. Ваши инвестиции под надежной защитой.
                   </p>
                </div>
             </div>
          </div>

          <div className="border border-primary/30 bg-surface/40 backdrop-blur-md p-5 relative overflow-hidden group hover:border-primary transition-colors">
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary shadow-neon"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary shadow-neon"></div>
             
             <div className="flex gap-4 items-start">
                <div className="size-12 shrink-0 bg-primary/10 border border-primary flex items-center justify-center text-primary shadow-neon group-hover:scale-110 transition-transform duration-500">
                   <span className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <div>
                   <h4 className="font-bold text-primary uppercase mb-1 tracking-wider text-sm drop-shadow-neon">Локальная Сеть</h4>
                   <p className="text-xs text-gray-400 font-body leading-relaxed">
                      Наши агенты — ключевые узлы обширной сети с глубоким знанием рынка.
                   </p>
                </div>
             </div>
          </div>
       </section>

       {/* Stats */}
       <section className="px-4 mb-10">
          <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 bg-surface shadow-lg">
             <div className="py-4 px-2 text-center group hover:bg-white/5 transition-colors">
                <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-md">10+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Лет опыта</div>
             </div>
             <div className="py-4 px-2 text-center group hover:bg-white/5 transition-colors">
                <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-md">03</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Хаба</div>
             </div>
             <div className="py-4 px-2 text-center group hover:bg-white/5 transition-colors">
                <div className="text-2xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-md">500+</div>
                <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Сделок</div>
             </div>
          </div>
       </section>

       {/* Team */}
       <section className="px-4 mb-12">
          <div className="flex justify-between items-end mb-5 border-b border-white/10 pb-2">
             <h3 className="text-lg font-bold uppercase flex items-center gap-2">
                <span className="text-primary text-xl shadow-neon">#</span> Команда
             </h3>
             <button className="text-primary text-[10px] font-mono font-bold uppercase flex items-center gap-1 hover:text-white transition-colors group">
                Все сотрудники 
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
             </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Alex Card */}
             <div className="relative aspect-[3/4] bg-surface border border-border-dim group overflow-hidden hover:border-primary transition-colors">
                <div className="absolute inset-0 bg-cover bg-top grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/10 bg-bg-main/80 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
                   <div className="w-8 h-[2px] bg-primary mb-2 shadow-neon"></div>
                   <div className="text-sm font-bold uppercase tracking-wider text-white">Алекс Волков</div>
                   <div className="text-[10px] text-primary font-mono mt-0.5 opacity-80">CEO / Основатель</div>
                   
                   <div className="mt-2 flex items-center gap-2 text-[9px] text-gray-500 font-mono">
                      <span className="size-2 bg-primary/50 inline-block"></span> MSC / RU
                   </div>
                </div>
             </div>
             
             {/* Sara Card */}
             <div className="relative aspect-[3/4] bg-surface border border-border-dim group overflow-hidden hover:border-accent-purple transition-colors">
                <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-white/10 bg-bg-main/80 backdrop-blur-sm group-hover:border-accent-purple/50 transition-colors">
                   <div className="w-8 h-[2px] bg-accent-purple mb-2 shadow-neon-purple"></div>
                   <div className="text-sm font-bold uppercase tracking-wider text-white">Сара Дженкинс</div>
                   <div className="text-[10px] text-accent-purple font-mono mt-0.5 opacity-80">Глава Продаж</div>

                   <div className="mt-2 flex items-center gap-2 text-[9px] text-gray-500 font-mono">
                      <span className="size-2 bg-accent-purple/50 inline-block"></span> HKT / TH
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Global Nodes Map */}
       <section className="px-4 pb-4">
           <div className="flex items-center gap-2 mb-4 border-l-4 border-primary pl-3 py-1 bg-gradient-to-r from-primary/10 to-transparent">
               <span className="w-2 h-2 bg-primary shadow-neon animate-pulse"></span>
               <h3 className="text-lg font-bold uppercase tracking-wider">Глобальные узлы</h3>
           </div>
           
           <div className="relative h-80 border border-white/20 bg-surface overflow-hidden shadow-2xl group">
               {/* Map Background */}
               <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png")', filter: 'invert(1) hue-rotate(180deg) contrast(1.5)'}}></div>
               <div className="absolute inset-0 bg-[size:20px_20px] bg-grid-pattern opacity-20"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-bg-main/50 via-transparent to-bg-main/80"></div>
               
               {/* Marker Moscow */}
               <div className="absolute top-[30%] left-[55%] flex flex-col items-center group/marker">
                  <div className="relative flex items-center justify-center size-8">
                      <div className="absolute inset-0 border border-primary rotate-45 group-hover/marker:rotate-90 transition-transform duration-700 bg-black/50 backdrop-blur-sm"></div>
                      <div className="size-1.5 bg-primary shadow-neon"></div>
                  </div>
                  <div className="mt-2 px-2 py-0.5 bg-bg-main/90 border border-primary/30 text-[9px] font-bold text-primary uppercase tracking-widest shadow-neon backdrop-blur-md">
                      Москва
                  </div>
               </div>

               {/* Marker Thailand */}
               <div className="absolute top-[55%] left-[72%] flex flex-col items-center group/marker">
                  <div className="relative flex items-center justify-center size-8">
                      <div className="absolute inset-0 border border-accent-purple rotate-45 group-hover/marker:rotate-0 transition-transform duration-700 bg-black/50 backdrop-blur-sm"></div>
                      <div className="size-1.5 bg-accent-purple shadow-neon-purple animate-pulse"></div>
                  </div>
                  <div className="mt-2 px-2 py-0.5 bg-bg-main/90 border border-accent-purple/30 text-[9px] font-bold text-accent-purple uppercase tracking-widest shadow-neon-purple backdrop-blur-md">
                      Пхукет
                  </div>
               </div>

               {/* Overlay Button */}
               <div className="absolute bottom-0 w-full p-0">
                  <button className="relative w-full h-14 bg-primary flex items-center justify-center overflow-hidden group/btn hover:bg-white transition-colors duration-300">
                      <span className="material-symbols-outlined mr-2 text-black group-hover/btn:scale-110 transition-transform">chat</span>
                      <span className="text-black font-bold uppercase tracking-widest text-sm z-10">Инициировать Контакт</span>
                      <div className="absolute inset-0 bg-white/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </button>
               </div>
           </div>
       </section>

       <BottomNav />
    </div>
  );
};

export default AboutCompany;