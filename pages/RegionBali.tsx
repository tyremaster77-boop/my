import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const RegionBali: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-black font-display">
        {/* Background */}
        <div className="absolute inset-x-0 top-0 z-0 h-[70vh] w-full">
            <img className="h-full w-full object-cover object-center brightness-[0.5] grayscale-[0.4]" alt="Bali" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvkrf136z0zADqMknTszbZBhAUSAlDfppRd66bfiKj0J_1FuMXhxtBNxkCbYmTF1jTr6S6IOSBxoL6TmvpDUpeBtEL2TWJa23Q5Hp6O9PExVjZ2LvjbrC2fqu8hmGIquqRcbpn7aDS7cjm4d-sJ3zlbjB5xU--PepZ4A0sz0mtaRjLsdPntJLg9el9UsmHalpzpbhII9KAUTLTA3V3Covf3DJSW1ik-aVGfdVdhwqLAZljRGuP9IkRlJAKmiJsa368hmPwGxpvooH-"/>
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-surface/30 to-surface"></div>
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"></div>
        </div>

        {/* Header - Sticky with blur */}
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
            <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
            </button>
            <div className="border border-white/10 bg-black/60 px-6 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <h2 className="font-display text-base font-bold tracking-[0.2em] text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Logica</h2>
            </div>
            <button className="flex size-10 items-center justify-center border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform duration-300">menu</span>
            </button>
        </div>

        <div className="flex-1 min-h-[20vh]"></div>

        {/* Content Panel */}
        <div className="relative z-10 flex flex-col gap-6 bg-surface-highlight/95 backdrop-blur-xl px-6 pb-24 pt-8 border-t border-primary/30 shadow-[0_-10px_50px_-15px_rgba(0,0,0,0.9),0_-2px_20px_rgba(0,240,255,0.15)]">
            <div className="absolute -top-[2px] right-6 h-[4px] w-24 bg-primary shadow-neon"></div>
            <div className="absolute top-0 left-6 h-6 w-[2px] bg-white/20"></div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center border border-primary bg-primary/10 p-1.5 shadow-neon">
                        <span className="material-symbols-outlined text-primary" style={{fontSize: '16px'}}>location_on</span>
                    </div>
                    <div className="h-[1px] w-8 bg-gradient-to-r from-primary/60 to-transparent"></div>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary drop-shadow-neon">Индонезия</span>
                </div>
                <h1 className="font-display text-5xl font-bold leading-[0.9] tracking-tight text-white uppercase drop-shadow-md">
                    Бали <span className="text-primary drop-shadow-neon">/</span> Остров<br/>Богов
                </h1>
                <div className="flex border-l-2 border-primary/30 pl-4 bg-gradient-to-r from-white/5 to-transparent py-2">
                    <p className="text-[14px] font-normal leading-relaxed text-slate-300">
                        Откройте для себя возможности для высокодоходных инвестиций в тропическом раю. От вилл на скалах до поместий среди рисовых террас — идеальный баланс роскоши и природы.
                    </p>
                </div>
            </div>

            {/* Quick Links */}
            <div className="flex w-full gap-3 overflow-x-auto no-scrollbar py-2 -ml-2 px-2">
                {['Образование', 'Крипто', 'Люкс Виллы'].map((item) => (
                     <div key={item} className="flex shrink-0 items-center justify-center gap-x-2 border border-white/10 bg-surface px-4 py-3 transition-all hover:border-primary hover:shadow-neon clip-corner group">
                        <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors" style={{fontSize: '18px'}}>star</span>
                        <p className="font-display text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider transition-colors">{item}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-2 flex w-full flex-col gap-6">
                <Link to="/city/anapa" className="group relative flex h-14 w-full items-center justify-between bg-primary-dim border border-primary px-2 pl-6 pr-2 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-primary/20 active:scale-[0.98] clip-corner">
                    <span className="font-display text-lg font-bold uppercase tracking-widest text-white z-10 drop-shadow-neon">Смотреть объекты</span>
                    <div className="z-10 flex size-10 items-center justify-center bg-primary text-black font-bold transition-transform group-hover:translate-x-1 shadow-neon">
                        <span className="material-symbols-outlined" style={{fontSize: '24px'}}>arrow_forward</span>
                    </div>
                </Link>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex flex-col">
                        <span className="font-display text-3xl font-bold text-white leading-none">124</span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Объекта</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green shadow-[0_0_8px_rgba(10,255,10,0.8)]"></span>
                            </span>
                            <span className="font-display text-xs font-semibold text-accent-green uppercase tracking-wider">Обновлено сегодня</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNav />
    </div>
  );
};

export default RegionBali;