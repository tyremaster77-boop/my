import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const CityList: React.FC = () => {
    const navigate = useNavigate();

    const properties = [
        {
            id: 1,
            title: "ЖК Золотая Бухта",
            price: "ОТ 12 000 000 ₽",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClEdldCK5hqybVdM08rh_kfWoya4EmgaM1sFHQjZp9CZY7BpzUEnJLt7lPDYvmqt48LXidRi-MVixDakQGWiYz6kzWc3BR-9vMHimY0qx_17zu2sw_NfyEqZZrc7EXiyMmaoWocw6Z1X3fO9j1DXaQLUTR3HnpPJqFSPaFG0jmf9KIn6PFKAen8p9wO8mwWhpCqsmnq12O73yrGIRxfqjXvDYZHER8U0ouj-jQ95497abhekmFLhB1P354xDemSvjute-OcfgViEb9",
            tag: "Премиум",
            location: "Высокий берег",
            completion: "Сдача 2025"
        },
        {
            id: 2,
            title: "Резиденция Утриш",
            price: "ОТ 15 000 000 ₽",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB06Vk6DsVQJ5koSBwwIr7A7d6HWuDsCGBvATMYjJo84qfNLjzjsWSAlAMT33MD_J9vUPBnQVIj6uypv0dtsq6E_xs3GVpX8ubkKJlgCY_kx8kjyCWR_E9tXMbOhrMz9oU40bVcEQFmMF5XXwm7t_q3qbcK0nyEGO005SiMt_grv4OIpyoyXntN2jxoCFa35bNvO_QzRlkxU-YzvDhRybnBQPlmfvrynbB-Pm70GUSAGhHgvKRMMfoXn96pzpx7HudORU2R6vVhbzOp",
            tag: "Бизнес",
            location: "Сукко",
            completion: "Сдан"
        },
        {
            id: 3,
            title: "Вилла Морская",
            price: "ОТ 25 000 000 ₽",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC16b3A8UhedxoAybH-as98l4ak9GvSk3OGTon1FtnJBXDmgGQ2HX0m7Z6U5_Buvb3AAI8BlneohQENnzfJxbmBUIC2wN8idpre1te5qRCl-bt6S-PwNMYme0i3O7jmVzmVi_OYQy6uDRU3utqQl0F8fx4hzU3a4-lozyMatn2SZGmNHT-m5RHBbU5rylRLrkvYFgWtvBdG8QszY9Ot3pSta0TGEaDL5lFyfB-HKkj_ZUwV8U0yCOiW2IRSlKVA6zBzvpREpUn4w3FO",
            tag: "Элит",
            location: "Пионерский",
            completion: "Сдача 2024"
        }
    ];

  return (
    <div className="bg-bg-main bg-grid-pattern font-body text-white overflow-hidden h-screen flex flex-col selection:bg-primary selection:text-black">
        {/* Header */}
        <header className="flex items-center justify-between px-4 pt-6 pb-4 shrink-0 bg-bg-main/90 backdrop-blur-md border-b border-border-dim z-20 relative">
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-neon"></div>
            <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
            </button>
            <div className="flex flex-col items-center gap-0.5">
                <h1 className="text-xl font-display font-bold uppercase tracking-wider text-white drop-shadow-neon">Анапа</h1>
                <div className="flex items-center gap-2">
                    <div className="h-[1px] w-3 bg-primary shadow-neon"></div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] font-display drop-shadow-neon">LOGICA</span>
                    <div className="h-[1px] w-3 bg-primary shadow-neon"></div>
                </div>
            </div>
            <button className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform duration-300">tune</span>
            </button>
        </header>

        {/* Filters */}
        <div className="w-full shrink-0 pt-4 pb-4 z-10 relative">
            <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
                <button className="snap-start shrink-0 h-9 px-6 bg-primary text-black text-xs font-bold font-display uppercase tracking-wider transition-all clip-corner shadow-neon hover:shadow-[0_0_15px_#00f0ff]">
                    Все
                </button>
                {['Высокий берег', 'Пионерский пр-т', 'Центр', 'Сукко'].map(filter => (
                     <button key={filter} className="snap-start shrink-0 h-9 px-6 bg-transparent border border-border-dim text-text-dim hover:text-primary hover:border-primary hover:shadow-neon text-xs font-bold font-display uppercase tracking-wider transition-all whitespace-nowrap active:bg-white/5">
                        {filter}
                    </button>
                ))}
            </div>
        </div>

        {/* Content Carousel */}
        <main className="flex-1 w-full overflow-y-hidden relative flex flex-col justify-center pb-24">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-border-dim/50 hidden sm:block"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-border-dim/50 hidden sm:block"></div>
            
            <div className="flex gap-6 px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory h-full items-center pb-4">
                {properties.map((prop) => (
                    <div key={prop.id} className="snap-center shrink-0 w-[85vw] max-w-[340px] h-[62vh] relative bg-surface border border-border-dim hover:border-primary transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                        <div className="h-[60%] w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" style={{ backgroundImage: `url('${prop.image}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start">
                                <span className="inline-flex items-center px-2 py-1 bg-black/80 border border-primary text-[10px] font-bold font-display text-primary uppercase tracking-widest shadow-neon">
                                    {prop.tag}
                                </span>
                                <div className="size-8 flex items-center justify-center bg-black/60 border border-white/10 text-white hover:text-primary hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined text-[16px]">bookmark</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[45%] bg-surface/95 backdrop-blur border-t border-primary/30 p-5 flex flex-col justify-between">
                            <div className="absolute top-0 right-0 size-3 border-t border-r border-primary shadow-neon"></div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold font-display text-primary uppercase leading-none tracking-tight drop-shadow-neon">{prop.title}</h2>
                                <p className="text-white font-mono text-sm tracking-wide">{prop.price}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-2 text-[10px] uppercase text-text-dim font-display tracking-wider">
                                    <div className="flex items-center gap-1.5 border-l-2 border-border-dim pl-2">
                                        <span className="material-symbols-outlined text-[14px] text-primary drop-shadow-neon">location_on</span>
                                        {prop.location}
                                    </div>
                                    <div className="flex items-center gap-1.5 border-l-2 border-border-dim pl-2">
                                        <span className="material-symbols-outlined text-[14px] text-primary drop-shadow-neon">schedule</span>
                                        {prop.completion}
                                    </div>
                                </div>
                                <Link to={`/project/${prop.id}`} className="w-full h-11 bg-transparent border border-primary shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:bg-primary hover:text-black active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-primary hover:text-black font-bold text-xs uppercase tracking-widest font-display group/btn hover:shadow-neon">
                                    Больше о проекте
                                    <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        <BottomNav />
    </div>
  );
};

export default CityList;