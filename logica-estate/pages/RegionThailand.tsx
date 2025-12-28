import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const RegionThailand: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-bg-main">
        {/* Header */}
        <div className="relative w-full h-[460px] border-b border-primary/30">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7O8yQ2tff19UQKkm1Fdt3NTWvKLzOb_LUAvlDZ9hoLkQAgrfTfQqZX07ULoUboHDdk8tOPJKTxoOdLBfbmYgdPRSWdJoJ18LMsmNDYbx11_YWg9y9KbrL-ERNl2brpmhYrsSh0zMlvgRtDBFe_EFVBkfQgkFUwtreW_YJE4VL4hgDzVPalVAaUuL_1ZV0WQ_IU9vc62rgboVtV69i_jvteuUG_AcEEg7C0oWi5AJMiG2v-CbGtZfmpC1Ibzu7NVvGf5mlz_dohml7")'}}>
                <div className="absolute inset-0 bg-bg-main/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20"></div>
            </div>
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 pt-4">
                <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                    <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
                </button>
                <div className="flex gap-2">
                    <button className="flex size-10 items-center justify-center border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">favorite_border</span>
                    </button>
                    <button className="flex size-10 items-center justify-center border border-white/10 bg-black/40 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">share</span>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center border border-primary bg-primary/10 backdrop-blur-md px-3 py-1 shadow-neon">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">АЗИЯ</span>
                    </div>
                    <div className="flex items-center bg-black/80 border border-accent-purple/50 px-3 py-1 gap-2 backdrop-blur-md shadow-neon-purple">
                        <span className="material-symbols-outlined text-[14px] text-accent-purple fill-1">star</span>
                        <span className="text-[12px] font-bold font-mono text-white">4.9</span>
                        <span className="text-[10px] text-gray-400 font-mono border-l border-gray-700 pl-2">REF:1.2K</span>
                    </div>
                </div>
                <h1 className="text-6xl font-bold text-white tracking-tighter mb-2 uppercase leading-[0.85] drop-shadow-md text-glow">
                    ТАИЛАНД
                </h1>
                <div className="h-0.5 w-16 bg-primary mb-3 shadow-neon"></div>
                <p className="text-gray-300 text-xs font-bold tracking-wider flex items-center gap-2 uppercase font-mono">
                    <span className="material-symbols-outlined text-[16px] text-primary drop-shadow-neon">location_on</span>
                    СТРАНА УЛЫБОК <span className="text-text-dim">//</span> ZONE.TH
                </p>
            </div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex-1 flex flex-col px-5 pb-24 pt-8 bg-bg-main bg-grid-pattern">
            <div className="mb-8 relative border-l-2 border-accent-purple pl-6 py-2 shadow-[inset_10px_0_20px_-10px_rgba(188,19,254,0.2)]">
                <div className="absolute -left-[5px] top-0 w-[8px] h-[8px] bg-accent-purple shadow-neon-purple"></div>
                <div className="absolute -left-[5px] bottom-0 w-[8px] h-[8px] bg-accent-purple shadow-neon-purple"></div>
                <p className="text-gray-400 text-[13px] leading-6 font-mono font-light uppercase tracking-tight">
                    Откройте рай для инвесторов и экспатов. Высокая доходность от аренды, тропический образ жизни и надежный рынок недвижимости ждут вас.
                </p>
            </div>
            
            <div className="mb-10">
                <Link to="/city/anapa" className="clip-corner group w-full flex items-center justify-between h-14 pl-6 pr-4 bg-primary text-black hover:bg-white transition-all duration-300 shadow-neon active:translate-y-[2px] active:shadow-none hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <div className="flex flex-col items-start justify-center h-full">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-black/70 group-hover:text-black/50">Действие</span>
                        <span className="text-[16px] font-bold uppercase tracking-tight">Смотреть объекты</span>
                    </div>
                    <div className="flex items-center justify-center size-8 border border-black/30 group-hover:border-black/50 bg-black/10">
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                </Link>
            </div>

            <div className="mb-6 flex items-end justify-between border-b border-border-dim pb-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-green shadow-neon-green animate-pulse"></div>
                    <h3 className="text-white text-xl font-bold tracking-tight uppercase">Регионы</h3>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                 {/* Phuket Card */}
                <Link to="/city/anapa" className="group relative bg-surface border border-border-dim p-0 cursor-pointer active:scale-[0.99] transition-all hover:border-primary hover:shadow-neon overflow-hidden">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-border-dim group-hover:border-r-primary transition-colors z-10"></div>
                    <div className="flex h-24 w-full">
                        <div className="w-28 shrink-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 border-r border-border-dim relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsC6hGwc38LZTozAdSfUcAMROEVB3beWIAUJz-EYVKAgK62AibRGsHTCuxnOzNsEy1-Juk4KipCuveZEkvBBP_fwgXrvXoTmFUG0qt1oO-6Ej7nop-ZFo7qvuHo3JxHDmRXrhOsoBdOFsTm1exxVNGN5tV2relJwyB6pNc9vOJY1hRgTWZJ60lF1f4HdeF8BLfYNTNrWEVaB0577_60p2Yw0DJuV_W3Z43jcvbtAsrOXipfqnJL00KK_tO3SrappmOYdEK8n4AzUwo")'}}>
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-3 pl-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-white font-bold text-[16px] tracking-tight uppercase group-hover:text-primary transition-colors">Пхукет</h4>
                                    <p className="text-gray-500 text-[10px] font-mono tracking-wide mt-0.5 group-hover:text-gray-300">Жемчужина Андамана</p>
                                </div>
                                <span className="material-symbols-outlined text-text-dim text-[20px] group-hover:text-primary group-hover:drop-shadow-neon transition-colors -mt-1 -mr-1">arrow_outward</span>
                            </div>
                            <div className="flex items-center gap-2 mt-auto">
                                <span className="text-[9px] font-bold bg-black text-gray-400 border border-border-dim px-1.5 py-0.5 uppercase tracking-wider font-mono group-hover:border-primary group-hover:text-primary transition-all">Виллы</span>
                                <span className="text-[9px] font-bold bg-black text-gray-400 border border-border-dim px-1.5 py-0.5 uppercase tracking-wider font-mono group-hover:border-primary group-hover:text-primary transition-all">Кондо</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Pattaya Card */}
                 <Link to="/city/anapa" className="group relative bg-surface border border-border-dim p-0 cursor-pointer active:scale-[0.99] transition-all hover:border-primary hover:shadow-neon overflow-hidden">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-border-dim group-hover:border-r-primary transition-colors z-10"></div>
                    <div className="flex h-24 w-full">
                        <div className="w-28 shrink-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 border-r border-border-dim relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVnKq4jAGgji4w9zYPMCLTjrnlvlSaTdgUPe4BBYRlLtXCOLvHsPc2bxihnIbtBPqL1kyZY_rBTNpdua72rrbIui7nBqV_tkcqeRfgazlrR9nAetfNhp1BLzPqs73uYao1aacIhEJ9HNeBQ8kVUklqbNPbslV0hwvugv66L0h52cK7rlu2dBkf51cl5fwkjclHsx_LbDsWIJylYNqcsCR07bTzZXGTiE3bTngVOzCQBWHZKzrcBodei1jG1cqE2dQZ-YHoNYbc8f6D")'}}>
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-3 pl-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-white font-bold text-[16px] tracking-tight uppercase group-hover:text-primary transition-colors">Паттайя</h4>
                                    <p className="text-gray-500 text-[10px] font-mono tracking-wide mt-0.5 group-hover:text-gray-300">Город у пляжа</p>
                                </div>
                                <span className="material-symbols-outlined text-text-dim text-[20px] group-hover:text-primary group-hover:drop-shadow-neon transition-colors -mt-1 -mr-1">arrow_outward</span>
                            </div>
                            <div className="flex items-center gap-2 mt-auto">
                                <span className="text-[9px] font-bold bg-black text-gray-400 border border-border-dim px-1.5 py-0.5 uppercase tracking-wider font-mono group-hover:border-primary group-hover:text-primary transition-all">Высотки</span>
                                <span className="text-[9px] font-bold bg-black text-gray-400 border border-border-dim px-1.5 py-0.5 uppercase tracking-wider font-mono group-hover:border-primary group-hover:text-primary transition-all">Инвест</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <BottomNav />
    </div>
  );
};

export default RegionThailand;